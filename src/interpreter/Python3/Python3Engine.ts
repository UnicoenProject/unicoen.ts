import * as agh from 'agh.sprintf';
import {
  Break,
  Continue,
  Engine,
  UniArray,
  UniBinOp,
  UniBlock,
  UniBoolLiteral,
  UniEnhancedFor,
  UniExpr,
  UniFunctionDec,
  UniIdent,
  UniMethodCall,
  UniNode,
  UniNumberLiteral,
  UniProgram,
  UniStringLiteral,
  UniUnaryOp,
  UniVariableDec,
  UniVariableDef,
  UniWhile,
} from '../..';
import { UniRuntimeError } from '../Engine/RuntimeException';
import { Scope } from '../Engine/Scope';

export class Python3Engine extends Engine {
  protected getEntryPoint(node: UniNode): UniFunctionDec {
    if (node instanceof UniProgram) {
      return new UniFunctionDec('main', [], 'void', [], node.block);
    }
    return null;
  }

  protected loadLibarary(global: Scope) {
    this.importStandard(global);
  }

  protected importStandard(global: Scope) {
    global.setTop(
      'print',
      (arg: any) => {
        const text = Array.isArray(arg) ? Engine.bytesToStr(arg) : arg;
        const output = agh.sprintf(String(text)).replace('\\n', '\n');
        this.stdout(output + '\n');
      },
      'FUNCTION',
    );
    global.setTop(
      'int',
      (arg: any) => {
        return parseInt(arg, 10);
      },
      'FUNCTION',
    );
    global.setTop(
      'map',
      (func: (elem: any) => any, arr: any[]) => {
        return arr.map(func);
      },
      'FUNCTION',
    );
    global.setTop(
      'input',
      function*(outtext?: string) {
        if (typeof outtext !== 'undefined') {
          this.stdout(outtext.trim()); // ignore \n
        }
        ////////////////////////////////////////////
        const isStdinEmpty = this.getStdin() === '';
        if (isStdinEmpty) {
          this.setIsWaitingForStdin(true); // yield and set stdin
          yield; // get args from next(args) from execUniMethodCall
        }
        ////////////////////////////////////////////

        let input: string = this.getStdin();
        this.clearStdin();
        if (isStdinEmpty) {
          this.stdout(input + '\n');
        }
        const nPos = input.indexOf('\n');

        if (0 <= nPos) {
          this.stdin(input.substr(nPos + 1));
          input = input.substring(0, nPos);
        }
        if (isStdinEmpty) {
          this.setIsWaitingForStdin(false);
        }
        return input;
      },
      'FUNCTION',
    );
    global.setTop(
      'range',
      (n: number) => {
        return [...Array(n).keys()];
      },
      'FUNCTION',
    );
  }

  protected *execBinOp(arg: string | UniBinOp, scope: Scope, left?: UniExpr, right?: UniExpr): any {
    if (arg instanceof UniBinOp && left === undefined && right === undefined) {
      const binOp = arg as UniBinOp;
      return yield* this.execBinOp(binOp.operator, scope, binOp.left, binOp.right);
    } else if (typeof arg === 'string' && left instanceof UniExpr) {
      let op = arg as string;
      if (op === '++' || op === '--') {
        op = '_' + op;
        return yield* this.execUnaryOp(new UniUnaryOp(op, left), scope);
      }
      if (right instanceof UniExpr) {
        if (op === '=') {
          const ret = yield* this.execAssignOrDec(left, right, scope);
          yield ret;
          return ret;
        }
        if (op === '.') {
          if (left instanceof UniMethodCall && right instanceof UniMethodCall) {
            if (right.methodName.name === 'split') {
              const retLeft = yield* this.execMethoodCall(left, scope);
              if (typeof retLeft === 'string') {
                const ret = retLeft.split(' ');
                yield ret;
                return ret;
              }
            }
          }
        }
        return yield* super.execBinOp(op, scope, left, right);
      }
    } else if (arg === null) {
      const validUbo = this.fixUniBinOp(new UniBinOp(null, left, right));
      return yield* this.execExpr(validUbo, scope);
    }
  }

  protected *execVariableDecInitValue(def: UniVariableDef, decVar: UniVariableDec, scope: Scope) {
    let value = null;
    if (def.value instanceof UniNode) {
      value = yield* super.execVariableDecInitValue(def, decVar, scope);
    } else {
      value = def.value;
    }
    decVar.type = this.checkValueType(value, def);
    return value;
  }

  protected checkValueType(value: any, def: UniVariableDef): string {
    if (def.value instanceof UniNumberLiteral) {
      return 'number';
    } else if (def.value instanceof UniStringLiteral) {
      return 'string';
    } else if (def.value instanceof UniBoolLiteral) {
      return 'number';
    } else if (typeof value === 'number') {
      return 'number';
    } else if (typeof value === 'string') {
      return 'string';
    } else if (Array.isArray(value)) {
      return this.checkValueType(value[0], def);
    }
    return 'undefined';
  }
  protected execBinOpImple(op: string, l: any, r: any): any {
    if (op === '*') {
      if (Array.isArray(l)) {
        return [...Array(r)].reduce((prev) => prev.push(...l) && prev, []);
      } else if (Array.isArray(r)) {
        return [...Array(l)].reduce((prev) => prev.push(...r) && prev, []);
      }
    }
    return super.execBinOpImple(op, l, r);
  }
  private *execAssignOrDec(left: UniExpr, right: UniExpr, scope: Scope) {
    if (left instanceof UniIdent) {
      if (scope.hasValue(left.name)) {
        return yield* super.execBinOp('=', scope, left, right);
      } else {
        const uvd = new UniVariableDec([], null, [new UniVariableDef(left.name, right, '')]);
        return yield* this.execVariableDec(uvd, scope);
      }
    } else if (left instanceof UniArray) {
      let ret = null;
      let rightArray = null;
      if (right instanceof UniArray) {
        rightArray = right.items;
      } else if (Array.isArray(right)) {
        rightArray = right;
      } else if (right instanceof UniExpr) {
        rightArray = yield* this.execExpr(right, scope);
      }
      for (let i = 0; i < left.items.length; ++i) {
        const l = left.items[i];
        const r = rightArray[i];
        ret = yield* this.execAssignOrDec(l, r, scope);
      }
      return ret;
    } else if (left instanceof UniBinOp) {
      const validLeft = this.fixUniBinOp(left);
      return yield* super.execBinOp('=', scope, validLeft, right);
    }
    throw new UniRuntimeError('unsupported assign or dec operation.');
  }
  private fixUniBinOp(ubo: UniBinOp): UniExpr {
    const left = ubo.left;
    const right = ubo.right;
    const operator = ubo.operator;
    if (ubo instanceof UniBinOp) {
      if (ubo.operator === null) {
        if (
          ubo.left instanceof UniIdent &&
          ubo.right instanceof UniBinOp &&
          ubo.right.left === null
        ) {
          if (ubo.right.operator === '[]') {
            return new UniBinOp('[]', ubo.left, ubo.right.right);
          }
        }
      }
    }
    if (operator === null) {
      if (left instanceof UniIdent && right instanceof UniMethodCall && right.methodName === null) {
        return new UniMethodCall(null, left, right.args);
      }
    }
    return ubo;
  }
}
