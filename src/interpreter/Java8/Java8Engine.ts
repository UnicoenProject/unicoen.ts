import * as agh from 'agh.sprintf';
import { UniBinOp } from '../../node/UniBinOp';
import { UniBlock } from '../../node/UniBlock';
import { UniCast } from '../../node/UniCast';
import { UniCharacterLiteral } from '../../node/UniCharacterLiteral';
import { UniClassDec } from '../../node/UniClassDec';
import { UniDecralation } from '../../node/UniDecralation';
import { UniExpr } from '../../node/UniExpr';
import { UniFunctionDec } from '../../node/UniFunctionDec';
import { UniIdent } from '../../node/UniIdent';
import { UniMethodCall } from '../../node/UniMethodCall';
import { UniNew } from '../../node/UniNew';
import { UniNewArray } from '../../node/UniNewArray';
import { UniStringLiteral } from '../../node/UniStringLiteral';
import { UniUnaryOp } from '../../node/UniUnaryOp';
import { UniVariableDec } from '../../node/UniVariableDec';
import { Engine } from '../Engine/Engine';
import { File } from '../Engine/File';
import { Scope } from '../Engine/Scope';

export class Java8Engine extends Engine {
  // Byte[]
  static strToBytes(str: string): number[] {
    const length = str.length;
    const bytes: number[] = [];
    for (let i = 0; i < length; ++i) {
      const code = str.charCodeAt(i);
      bytes.push(code);
    }
    bytes.push(0);
    return bytes;
  }

  static getCharArrAsByte(objectOnMemory: Map<number, any>, beginArg: number): number[] {
    let begin = beginArg;
    const bytes: number[] = [];
    const obj: string | number = objectOnMemory.get(begin);
    if (typeof obj === 'string') {
      return Java8Engine.strToBytes(obj);
    }
    for (let v = obj; objectOnMemory.containsKey(begin); ++begin) {
      const o = objectOnMemory.get(begin);
      if (typeof obj === 'number') {
        v = o as number;
        if (v === 0) {
          break;
        }
        bytes.push(v);
      } else {
        break;
      }
    }
    bytes.push(0);
    return bytes;
  }
  static charArrToStr(objectOnMemory: Map<number, any>, beginArg: number): string {
    const bytes = this.getCharArrAsByte(objectOnMemory, beginArg);
    return Engine.bytesToStr(bytes);
  }
  constructor() {
    super();
  }

  *execUnaryOp(uniOp: UniUnaryOp, scope: Scope): any {
    if (uniOp.operator === '++' || uniOp.operator === '--') {
      uniOp.operator = uniOp.operator + '_';
    }
    switch (uniOp.operator) {
      case '&': {
        const adr = yield* this.getAddress(uniOp.expr, scope);
        return adr;
      }
      case '*': {
        const v = scope.getValue((yield* this.execExpr(uniOp.expr, scope)) as number);
        return v;
      }
      case 'sizeof': {
        const l: UniExpr[] = [];
        if (uniOp.expr instanceof UniIdent) {
          l.push(new UniStringLiteral(uniOp.expr.name));
        } else {
          l.push(uniOp.expr);
        }
        const umc = new UniMethodCall(null, new UniIdent('sizeof'), l);
        const v = yield* this.execExpr(umc, scope);
        return v;
      }
    }
    return yield* super.execUnaryOp(uniOp, scope);
  }

  sizeof(type: string): number {
    return 1;
    /*		if(type.contains("char")){
			return 1;
		}
		else if(type.contains("short")){
			return 2;
		}
		else if(type.contains("double")){
			return 8;
		}
		return 4;*/
  }

  protected loadLibarary(global: Scope) {
    this.importJavaLang(global);
    this.importJavaUtil(global);
    // this.includeMath(global);
  }

  protected importJavaLang(global: Scope) {
    global.setTop(
      'java',
      {
        lang: {
          Object: new UniClassDec('Object', [], [], [], []),
        },
      },
      'CLASS',
    );

    global.setTop(
      'System',
      {
        out: {
          printf() {
            if (arguments.length < 1) {
              return 0;
            }
            const args = [];
            for (const argument of arguments) {
              args.push(argument);
            }
            let text = Engine.bytesToStr(args[0]);
            text = text.replace('\\n', '\n');
            for (let i = 1; i < args.length; ++i) {
              if (global.typeOnMemory.containsKey(args[i])) {
                const type: string = global.typeOnMemory.get(args[i]);
                if (type.includes('char')) {
                  args[i] = Java8Engine.charArrToStr(global.objectOnMemory, args[i] as number);
                }
              }
            }
            args[0] = text;
            const output = agh.sprintf(...args).replace('\\n', '\n');
            this.stdout(output);
            const byteCount = (str: string) => encodeURIComponent(str).replace(/%../g, 'x').length;
            const count = byteCount(output);
            return count;
          },
          println(arg: any) {
            const text = Array.isArray(arg) ? Engine.bytesToStr(arg) : arg;
            const output = agh.sprintf(String(text)).replace('\\n', '\n');
            this.stdout(output + '\n');
          },
        },
      },
      'CLASS',
    );
  }

  protected importJavaUtil(global: Scope) {
    global.setTop(
      'java',
      {
        util: {
          Scanner: {
            *nextInt() {
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
              const start = Math.min(
                ...Array.from(Array(10).keys())
                  .map((n) => input.indexOf(`${n}`))
                  .filter((pos) => pos !== -1),
              );
              const end = Math.min(
                ...[' ', '\n', '\t']
                  .map((s) => input.indexOf(`${s}`, start))
                  .filter((pos) => pos !== -1),
              );
              if (0 <= end) {
                this.stdin(input.substr(end));
                input = input.substring(start, end);
              }
              if (isStdinEmpty) {
                this.setIsWaitingForStdin(false);
              }

              return parseInt(input.trim(), 10);
            },
          },
        },
      },
      'CLASS',
    );
  }

  protected includeMath(global: Scope) {
    global.setTop(
      'acos',
      (x: number) => {
        return Math.acos(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'asin',
      (x: number) => {
        return Math.asin(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'atan',
      (x: number) => {
        return Math.atan(x);
      },
      'FUNCTION',
    );

    global.setTop(
      'cos',
      (x: number) => {
        return Math.cos(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'sin',
      (x: number) => {
        return Math.sin(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'tan',
      (x: number) => {
        return Math.tan(x);
      },
      'FUNCTION',
    );

    global.setTop(
      'cosh',
      (x: number) => {
        return Math.cosh(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'sinh',
      (x: number) => {
        return Math.sinh(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'tanh',
      (x: number) => {
        return Math.tanh(x);
      },
      'FUNCTION',
    );

    global.setTop(
      'exp',
      (x: number) => {
        return Math.exp(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'exp2',
      (x: number) => {
        return Math.pow(2.0, x);
      },
      'FUNCTION',
    );
    global.setTop(
      'expm1',
      (x: number) => {
        return Math.expm1(x);
      },
      'FUNCTION',
    );

    global.setTop(
      'log',
      (x: number) => {
        return Math.log(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'log10',
      (x: number) => {
        return Math.log10(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'log1p',
      (x: number) => {
        return Math.log1p(x);
      },
      'FUNCTION',
    );

    global.setTop(
      'cbrt',
      (x: number) => {
        return Math.cbrt(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'fabs',
      (x: number) => {
        return Math.abs(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'hypot',
      (x: number, y: number) => {
        return Math.hypot(x, y);
      },
      'FUNCTION',
    );

    global.setTop(
      'pow',
      (x: number, y: number) => {
        return Math.pow(x, y);
      },
      'FUNCTION',
    );
    global.setTop(
      'sqrt',
      (x: number) => {
        return Math.sqrt(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'ceil',
      (x: number) => {
        return Math.ceil(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'floor',
      (x: number) => {
        return Math.floor(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'rint',
      (x: number) => {
        throw new Error('Sorry! rint is not supported.');
      },
      'FUNCTION',
    );
    global.setTop(
      'round',
      (x: number) => {
        return Math.round(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'fdim',
      (x: number, y: number) => {
        const a = Math.abs(x);
        const b = Math.abs(y);
        return Math.abs(Math.max(a, b) - Math.min(a, b));
      },
      'FUNCTION',
    );
    global.setTop(
      'fmax',
      (x: number, y: number) => {
        return Math.max(x, y);
      },
      'FUNCTION',
    );
    global.setTop(
      'fmin',
      (x: number, y: number) => {
        return Math.min(x, y);
      },
      'FUNCTION',
    );
    global.setTop(
      'fmod',
      (x: number, y: number) => {
        const div = x / y;
        const n = 0 < div ? Math.floor(div) : Math.ceil(div);
        return x - y * n;
      },
      'FUNCTION',
    );
  }

  protected *_execExpr(expr: UniExpr, scope: Scope): any {
    if (expr instanceof UniNewArray) {
      const ret = yield* this.execNewArray(expr, scope);
      yield ret;
      return ret;
    } else if (expr instanceof UniNew) {
      const ret = yield* this.execNew(expr, scope);
      yield ret;
      return ret;
    }
    return yield* super._execExpr(expr, scope);
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
        return yield* super.execBinOp(op, scope, left, right);
      }
    }
  }

  protected execBinOpImple(op: string, l: any, r: any): any {
    let isString = false;
    if (Array.isArray(l) && l[l.length - 1] === 0) {
      l = Engine.bytesToStr(l);
      isString = true;
    }
    if (Array.isArray(r) && r[r.length - 1] === 0) {
      r = Engine.bytesToStr(r);
      isString = true;
    }
    let ret = super.execBinOpImple(op, l, r);
    if (isString) {
      ret = Java8Engine.strToBytes(ret);
    }
    return ret;
  }

  protected *execVariableDec(decVar: UniVariableDec, scope: Scope) {
    let value = null;
    for (const def of decVar.variables) {
      // 初期化されている場合
      if (def.value != null) {
        // 配列の初期化もここでexecNewExprで行われる。
        value = yield* this.execExpr(def.value, scope);
        value = this._execCast(decVar.type, value);
        if (decVar.type.includes('[')) {
          const end = decVar.type.indexOf('[');
          decVar.type = decVar.type.substring(0, end);
        }
      }
      scope.setTop(def.name, value, decVar.type);
    }
    return value;
  }

  protected execCast(expr: UniCast, scope: Scope): any {
    const value = this.execExpr(expr.value, scope);
    return this._execCast(expr.type, value);
  }
  // tslint:disable-next-line:function-name
  protected _execCast(type: string, value: any): any {
    // protected Object _execCast(String type, Object value){
    if (value == null || Array.isArray(value)) {
      return value;
    }

    if (type === 'int') {
      return value as number;
    } else if (type === 'double') {
      return value as number;
    } else if (type === 'long') {
      return value as number;
    } else if (type === 'char') {
      return value as number;
      // if (value instanceof Integer) {
      //   return (byte)((int)value);
      // }
      // else if(value instanceof Character) {
      //   return (byte)((char)value);
      // }
      // else if(value instanceof Long ) {
      //   return (byte)((long)value);
      // }
      // else if(value instanceof Character ) {
      //   return (byte)((char)value);
      // }
    }
    return value;
  }

  protected execCharLiteral(expr: UniCharacterLiteral, scope: Scope): any {
    const value: string = expr.value;
    const code = value.charCodeAt(0);
    return code;
  }

  protected execStringLiteral(expr: UniStringLiteral, scope: Scope): any {
    const value: string = (expr as UniStringLiteral).value;
    const list: number[] = [];
    for (let i = 0; i < value.length; ++i) {
      const byte = value.charCodeAt(i);
      list.push(byte);
    }
    list.push(0);
    return list;
  }

  private *execNewArray(uniNewArray: UniNewArray, scope: Scope) {
    const elementsNum: UniExpr[] = uniNewArray.elementsNum;
    const length: number = yield* this.execExpr(elementsNum[0], scope);
    const value = uniNewArray.value;
    let array: any[] = new Array(length).fill(0);
    if (value.items != null) {
      array = yield* this.execArray(value, scope);
      for (let i = array.length; i < length; ++i) {
        array.push(0);
      }
    }
    return array;
  }

  private *execNew(newExpr: UniNew, scope: Scope) {
    let className = newExpr.type;
    let value: any = '';
    const importsList = scope.getImportList();
    if (!scope.hasValue(className)) {
      for (const im of importsList) {
        const item: UniExpr[] = im.names.map((name) => new UniIdent(name));
        let rec = yield* this.execExpr(item[0], scope);
        for (let i = 1; i < item.length; ++i) {
          if (item[i] instanceof UniIdent) {
            rec = rec[(item[i] as UniIdent).name];
          } else {
            rec = rec[yield* this.execExpr(item[i], scope)];
          }
        }
        if (im.isOndemand) {
          if (rec[className]) {
            value = rec[className];
            className = `${im.names.join('.')}.${className}`;
          }
        } else {
          if (rec) {
            value = rec;
            className = im.names.join('.');
          }
        }
      }
    }
    const heapAddress = scope.setHeap(value, newExpr.type);
    // const uniClassDec: UniClassDec = scope.get(newExpr.type);
    return heapAddress;
  }
}
