import math = require('mathjs');
import { isArray } from 'util';
import { UniArray } from '../node/UniArray';
import { UniBinOp } from '../node/UniBinOp';
import { UniBlock } from '../node/UniBlock';
import { UniBoolLiteral } from '../node/UniBoolLiteral';
import { UniBreak } from '../node/UniBreak';
import { UniCast } from '../node/UniCast';
import { UniCharacterLiteral } from '../node/UniCharacterLiteral';
import { UniClassDec } from '../node/UniClassDec';
import { UniContinue } from '../node/UniContinue';
import { UniDecralation } from '../node/UniDecralation';
import { UniDoWhile } from '../node/UniDoWhile';
import { UniEmptyStatement } from '../node/UniEmptyStatement';
import { UniExpr } from '../node/UniExpr';
import { UniFor } from '../node/UniFor';
import { UniFunctionDec } from '../node/UniFunctionDec';
import { UniIdent } from '../node/UniIdent';
import { UniIf } from '../node/UniIf';
import { UniIntLiteral } from '../node/UniIntLiteral';
import { UniJump } from '../node/UniJump';
import { UniLabel } from '../node/UniLabel';
import { UniMethodCall } from '../node/UniMethodCall';
import { UniNode } from '../node/UniNode';
import { UniNumberLiteral } from '../node/UniNumberLiteral';
import { UniParam } from '../node/UniParam';
import { UniProgram } from '../node/UniProgram';
import { UniReturn } from '../node/UniReturn';
import { UniStatement } from '../node/UniStatement';
import { UniStringLiteral } from '../node/UniStringLiteral';
import { UniSwitch } from '../node/UniSwitch';
import { UniSwitchUnit } from '../node/UniSwitchUnit';
import { UniTernaryOp } from '../node/UniTernaryOp';
import { UniUnaryOp } from '../node/UniUnaryOp';
import { UniVariableDec } from '../node/UniVariableDec';
import { UniVariableDef } from '../node/UniVariableDef';
import { UniWhile } from '../node/UniWhile';
import { clone } from '../node_helper/clone';
import { ExecState } from './ExecState';
import { File } from './File';
import { RuntimeException } from './RuntimeException';
import { Scope } from './Scope';

// tslint:disable:max-classes-per-file
export class ControlException extends RuntimeException {}

export class Break extends ControlException {}

export class Continue extends ControlException {}

export class Return extends ControlException {
  constructor(readonly value: any) {
    super();
  }
}

export class Exit extends Return {}

export class Engine {
  static executeSimpleExpr(expr: UniExpr, scope?: Scope): any {
    if (scope === undefined) {
      return new Engine().execExpr(expr, scope);
    }
    return this.executeSimpleExpr(expr, Scope.createGlobal());
  }

  static executeSimpleProgram(program: UniProgram): any {
    return this.executeSimpleExpr(program.block, Scope.createGlobal());
  }
  protected currentState: ExecState = null;
  protected currentScope: Scope = null;
  protected execStepItr: IterableIterator<any> = null;

  private isDebugMode: boolean = false;
  private isSetNextExpr: boolean = false;
  private stdoutText: string = '';
  private stdinText: string = '';
  private isWaitingForStdin: boolean = false;

  setDebugMode(enable: boolean) {
    this.isDebugMode = enable;
  }

  getCurrentExpr(): UniNode {
    return this.currentState.getCurrentExpr();
  }
  getCurrentState(): ExecState {
    return this.currentState;
  }

  getStdout(): string {
    return this.stdoutText;
  }
  stdin(text: string): void {
    this.stdinText += text;
  }

  getIsWaitingForStdin(): boolean {
    return this.isWaitingForStdin;
  }
  setIsWaitingForStdin(enable: boolean) {
    return (this.isWaitingForStdin = enable);
  }

  isStepExecutionRunning(): boolean {
    return this.execStepItr != null;
  }

  setFileList(filelist: Map<string, ArrayBuffer>) {
    File.setFilelist(filelist);
  }

  startStepExecution(dec: UniProgram): ExecState {
    this.execStepItr = this.executeStepByStep(dec);
    return this.stepExecute();
  }

  stepExecute(): ExecState {
    if (this.execStepItr == null) {
      return this.getCurrentState();
    }
    this.isSetNextExpr = false;
    let node;
    do {
      node = this.execStepItr.next();
    } while (!node.done && !this.isSetNextExpr && !this.isWaitingForStdin);
    const ret = node.value;
    this.currentState.setCurrenValue(ret);
    if (this.isDebugMode) {
      console.log(ret);
    }
    if (node.done) {
      this.execStepItr = null;
    }
    this.currentState.make();
    return clone(this.currentState);
  }

  // use this method where you think a step exec.
  // yield* this.stopByYield(ret, nextExpr);
  *stopByYield(ret: any, nextExpr: UniExpr) {
    if (!this.isSetNextExpr) {
      this.currentState.setNextExpr(nextExpr);
      this.isSetNextExpr = true;
    }
    yield ret;
  }

  *executeStepByStep(dec: UniProgram) {
    const main: UniFunctionDec = this.getEntryPoint(dec);
    if (main != null) {
      const global: Scope = Scope.createGlobal();
      this.setGlobalObjects(dec, global);
      this.loadLibarary(global);
      this.currentState = new ExecState(global);
      this.clearStdout();
      // loadLibarary(global);
      // firePreExecAll(global);
      // 初期化が完了して1行目に入る前の状態で最初は返す。
      this.currentState.setCurrentExpr(dec);
      yield true;

      const value = yield* this.execFunc(main, global, null);
      // firePostExecAll(global, value);
      global.closeAllFiles();
      return value;
    } else {
      throw new RuntimeException('No entry point in ' + dec);
    }
  }

  execute(dec: UniProgram) {
    let ret = 0;
    let node;
    const gen = this.executeStepByStep(dec);
    do {
      node = gen.next();
      ret = node.value;
      if (this.isDebugMode) {
        console.log(ret);
        // console.log(this.getCurrentExpr());
        // console.log(this.currentState.make());
      }
    } while (!node.done);
    return ret;
  }

  toDouble(obj: any): number {
    if (obj instanceof Number) {
      return obj as number;
    }
    throw new Error('Cannot covert to integer: ' + obj);
  }

  toBool(obj: any): boolean {
    if (typeof obj === 'boolean') {
      return obj as boolean;
    } else if (obj instanceof Number) {
      return obj !== 0;
    }
    throw new Error('Cannot covert to boolean: ' + obj);
  }

  protected *execUnaryOp(uniOp: UniUnaryOp, scope: Scope): any {
    switch (uniOp.operator) {
      case '!':
        return !this.toBool(yield* this.execExpr(uniOp.expr, scope));
      case '-': {
        const value = yield* this.execExpr(uniOp.expr, scope);
        if (value === 'number') {
          return -value;
        }
      }
      case '_++':
      case '++_':
      case '_--':
      case '--_':
        if (uniOp.expr instanceof UniIdent) {
          const ident = uniOp.expr as UniIdent;
          const num = (yield* this.execExpr(uniOp.expr, scope)) as number;
          const address = yield* this.getAddress(ident, scope);
          switch (uniOp.operator) {
            case '_++':
              this.execAssign(address, num + 1, scope);
              yield num;
              return num;
            case '++_':
              yield num + 1;
              return this.execAssign(address, num + 1, scope);
            case '_--':
              this.execAssign(address, num - 1, scope);
              yield num;
              return num;
            case '--_':
              yield num + 1;
              return this.execAssign(address, num - 1, scope);
          }
        }
      case '()': {
        const v = yield* this.execExpr(uniOp.expr, scope);
        return v;
      }
    }
    throw new RuntimeException('Unkown binary operator: ' + uniOp.operator);
  }

  protected *getAddress(expr: UniExpr, scope: Scope) {
    if (expr instanceof UniIdent) {
      const ui = expr as UniIdent;
      return scope.getAddress(ui.name);
    } else if (expr instanceof UniUnaryOp) {
      const uuo = expr as UniUnaryOp;
      if (uuo.operator === '*') {
        let refAddress = null;
        for (const execExpr of this.execExpr(uuo.expr, scope)) {
          refAddress = execExpr;
        }
        return refAddress;
      }
    } else if (expr instanceof UniBinOp) {
      const ubo = expr as UniBinOp;
      if (ubo.operator === '[]') {
        return yield* this.getAddress(
          new UniUnaryOp('*', new UniBinOp('+', ubo.left, ubo.right)),
          scope,
        );
      } else if (ubo.operator === '->') {
        return yield* this.getAddress(
          new UniBinOp('.', new UniUnaryOp('*', ubo.left), ubo.right),
          scope,
        );
      } else if (ubo.operator === '.') {
        const startAddress: number = yield* this.execExpr(ubo.left, scope);
        let type: string = scope.getType(startAddress - 1);
        if (ubo.left instanceof UniUnaryOp && ubo.left.operator === '*') {
          while (type.endsWith('*')) {
            type = type.substring(0, type.length - 1);
          }
        }
        const offsets: Map<string, number> = scope.get(type);
        const offset: number = offsets.get((ubo.right as UniIdent).name);
        return startAddress + offset[0];
      }
    }
    throw new RuntimeException('Assignment failure: ' + expr);
  }

  protected execMethod(arg0: any, arg1: any, arg2: any): any {
    throw new Error('execMethod not implemented.');
  }

  protected *execArray(uniArray: UniArray, scope: Scope) {
    const elements = uniArray.items;
    const array: any[] = [];
    for (const element of elements) {
      const e = yield* this.execExpr(element, scope);
      array.push(e);
    }
    return array;
  }

  protected *execVariableDec(decVar: UniVariableDec, scope: Scope) {
    let value = null;
    for (const def of decVar.variables) {
      while (def.name.startsWith('*')) {
        def.name = def.name.substring(1);
        decVar.type += '*';
      }
      while (def.name.startsWith('&')) {
        def.name = def.name.substring(1);
        decVar.type += '&';
      }

      // 初期化されている場合
      if (def.value != null) {
        value = yield* this.execExpr(def.value, scope);
        value = this._execCast(decVar.type, value);
        if (decVar.type.endsWith('*') && !Array.isArray(value)) {
          if (value instanceof String) {
            value = scope.setStatic(value, 'char[]');
          } else {
            const address = value as number;
            if (scope.isMallocArea(address)) {
              const size: number = scope.getMallocSize(address);
              // tslint:disable-next-line:no-shadowed-variable
              const type = decVar.type.substring(0, decVar.type.length - 1);
              const typeSize = this.sizeof(type);
              for (let i = 0; i < size; i += typeSize) {
                scope.typeOnMemory.set(address + i, type);
              }
            }
          }
        }
      }

      // 配列の場合
      let length = 0;
      if (def.typeSuffix != null && def.typeSuffix !== '') {
        const sizes: number[] = [];
        const typeSuffix: string = def.typeSuffix;
        for (let k = 0; k < typeSuffix.length; ++k) {
          const left = typeSuffix.indexOf('[', k);
          const right = typeSuffix.indexOf(']', k);
          const size = typeSuffix.slice(left + 1, right);
          sizes.push(Number.parseInt(size, 10));
          k = right;
        }
        if (0 < sizes.length) {
          length = sizes[0];
          if (value != null) {
            // 初期化している場合。
            for (let i = value.length; i < length; ++i) {
              value.push(0);
            }
          } else {
            value = [];
            for (let i = 0; i < length; ++i) {
              value.push(this.randInt32());
            }
          }
        }
      }

      // // 未初期化の配列でない変数の場合、乱数で初期化する。
      // if (value == null) {
      //   value = this.randInt32();
      //   yield value;
      // }

      const type: string = decVar.type;
      scope.setTop(def.name, value, type);
    }
    return value;
  }

  protected sizeof(type: string): number {
    if (type.includes('char')) {
      return 1;
    } else if (type.includes('short')) {
      return 2;
    } else if (type.includes('double')) {
      return 8;
    }
    return 4;
  }

  protected stdout(text: string): void {
    this.stdoutText += text;
  }

  protected getStdin(): string {
    return this.stdinText;
  }

  protected loadLibarary(global: Scope) {
    return;
  }

  protected *execDecralation(dec: UniDecralation, scope: Scope) {
    if (dec instanceof UniVariableDec) {
      const uvd = dec as UniVariableDec;
      return yield* this.execVariableDec(uvd, scope);
    }
    if (dec instanceof UniFunctionDec) {
      return;
    }
    if (dec instanceof UniClassDec) {
      return;
    }
  }
  protected *execStatement(state: UniStatement, scope: Scope): any {
    if (state instanceof UniIf) {
      return yield* this.execIf(state, scope);
    } else if (state instanceof UniFor) {
      return yield* this.execFor(state, scope);
    } else if (state instanceof UniWhile) {
      return yield* this.execWhile(state, scope);
    } else if (state instanceof UniDoWhile) {
      return yield* this.execDoWhile(state, scope);
    } else if (state instanceof UniBreak) {
      throw new Break();
    } else if (state instanceof UniContinue) {
      throw new Continue();
    } else if (state instanceof UniReturn) {
      throw new Return(yield* this.execExpr(state.value, scope));
    } else if (state instanceof UniBlock) {
      return yield* this.execBlock(state, scope);
    } else if (state instanceof UniSwitch) {
      return yield* this.execSwitch(state, scope);
    } else if (state instanceof UniEmptyStatement) {
      return null;
    } else if (state instanceof UniLabel) {
      return;
    } else if (state instanceof UniJump) {
      return;
    } else if (state instanceof UniExpr) {
      return yield* this.execExpr(state, scope);
    }
    throw new RuntimeException('Not support expr type: ' + state);
  }

  protected *execBlock(block: UniBlock, scope: Scope) {
    const blockScope: Scope = Scope.createLocal(scope);
    blockScope.name = scope.name;
    let ret = null;
    for (const stateOfBlock of block.body) {
      yield* this.stopByYield(ret, stateOfBlock);
      ret = yield* this.execExpr(stateOfBlock, blockScope);
      this.currentState.setCurrentExpr(stateOfBlock);
      // この中でさらにexecBlockが呼ばれた場合thisは？//Sumに代入されているかチェック
    }
    scope.removeChild(blockScope);
    return ret;
  }

  protected *execIf(ui: UniIf, scope: Scope) {
    const cond = this.toBool(yield* this.execExpr(ui.cond, scope));
    if (cond) {
      return yield* this.execExpr(ui.trueStatement, scope);
    } else if (ui.falseStatement != null) {
      return yield* this.execExpr(ui.falseStatement, scope);
    }
  }

  protected *execFor(uf: UniFor, scope: Scope) {
    const forScope: Scope = Scope.createLocal(scope);
    forScope.name = scope.name;
    if (uf.init == null) {
      uf.init = new UniEmptyStatement();
    }
    if (uf.cond == null) {
      uf.cond = new UniBoolLiteral(true);
    }
    if (uf.step == null) {
      uf.step = new UniEmptyStatement();
    }
    let ret = null;
    for (
      yield* this.execExpr(uf.init, forScope);
      this.toBool(yield* this.execExpr(uf.cond, forScope));
      yield* this.stopByYield(ret, uf.cond), yield* this.execExpr(uf.step, forScope)
    ) {
      try {
        if (!(uf.statement instanceof UniBlock)) {
          yield* this.stopByYield(ret, uf.statement);
        }
        ret = yield* this.execExpr(uf.statement, forScope);
      } catch (e) {
        if (e instanceof Continue) {
          continue;
        } else if (e instanceof Break) {
          break;
        } else {
          throw e;
        }
      }
    }
    scope.removeChild(forScope);
    return ret;
  }

  protected *execWhile(uw: UniWhile, scope: Scope) {
    let ret;
    while (this.toBool(yield* this.execExpr(uw.cond, scope))) {
      try {
        if (!(uw.statement instanceof UniBlock)) {
          yield* this.stopByYield(ret, uw.statement);
        }
        ret = yield* this.execExpr(uw.statement, scope);
      } catch (e) {
        if (e instanceof Continue) {
          continue;
        } else if (e instanceof Break) {
          break;
        } else {
          throw e;
        }
      }
    }
    return ret;
  }

  protected *execDoWhile(udw: UniDoWhile, scope: Scope) {
    let ret;
    do {
      try {
        if (!(udw.statement instanceof UniBlock)) {
          yield* this.stopByYield(ret, udw.statement);
        }
        ret = yield* this.execExpr(udw.statement, scope);
      } catch (e) {
        if (e instanceof Continue) {
          continue;
        } else if (e instanceof Break) {
          break;
        } else {
          throw e;
        }
      }
    } while (this.toBool(yield* this.execExpr(udw.cond, scope)));
    return ret;
  }

  protected *execSwitch(us: UniSwitch, scope: Scope) {
    const switchScope: Scope = Scope.createLocal(scope);
    switchScope.name = scope.name;
    let ret;
    let didJump = false;
    const cond = yield* this.execExpr(us.cond, scope);
    let defaultCase: UniSwitchUnit = null;
    while (!didJump) {
      for (const unit of us.cases) {
        if (unit.label === 'default') {
          if (defaultCase == null) {
            defaultCase = unit;
            continue;
          } else {
            didJump = true;
          }
        }
        const condOfCase = unit.cond != null ? yield* this.execExpr(unit.cond, switchScope) : null;
        if (didJump || cond.valueOf() === condOfCase.valueOf()) {
          yield* this.stopByYield(cond, unit.cond);
          didJump = true;
          try {
            for (const statement of unit.statement) {
              yield* this.stopByYield(ret, statement);
              ret = yield* this.execExpr(statement, scope);
            }
          } catch (e) {
            if (e instanceof Break) {
              break;
            } else {
              throw e;
            }
          }
        }
      }
      if (defaultCase == null) {
        break;
      }
    }
    return ret;
  }

  protected *execExpr(expr: UniExpr, scope: Scope): any {
    // firePreExec(expr, scope);
    const value = yield* this._execExpr(expr, scope);
    // firePostExec(expr, scope, value);
    return value;
  }

  protected *execCast(expr: UniCast, scope: Scope): any {
    return yield* this.execExpr(expr.value, scope);
  }
  // tslint:disable-next-line:function-name
  protected _execCast(type: string, value: any): any {
    return value;
  }

  protected execCharLiteral(expr: UniCharacterLiteral, scope: Scope): any {
    return expr.value;
  }

  protected execStringLiteral(expr: UniStringLiteral, scope: Scope): any {
    return expr.value;
  }

  protected execIntLiteral(expr: UniIntLiteral, scope: Scope): any {
    return expr.value;
  }

  protected execBinOp(binOp: UniBinOp, scope: Scope): any;
  protected execBinOp(op: string, scope: Scope, left: UniExpr, right: UniExpr): any;
  protected *execBinOp(arg: string | UniBinOp, scope: Scope, left?: UniExpr, right?: UniExpr): any {
    if (arg instanceof UniBinOp && left === undefined && right === undefined) {
      const binOp = arg as UniBinOp;
      return yield* this.execBinOp(binOp.operator, scope, binOp.left, binOp.right);
    } else if (typeof arg === 'string' && left instanceof UniExpr && right instanceof UniExpr) {
      const op = arg as string;
      let ret = null;
      switch (op) {
        case '=': {
          const rightEvaluated = yield* this.execExpr(right, scope);
          const leftEvaluated = yield* this.getAddress(left, scope);
          ret = this.execAssign(leftEvaluated, rightEvaluated, scope);
          yield ret;
          return ret;
        }
        case '[]':
        case '.': {
          ret = scope.getValue(yield* this.getAddress(new UniBinOp(op, left, right), scope));
          yield ret;
          return ret;
        }
        // case '()': {
        //   const umc = new UniMethodCall(null,(<UniIdent>left).name,((UniArray)right).items);
        //   return this.execExpr(umc,scope);
        // }
        // 		case ".":
        // 			return this.execExpr(getLeftReference(new UniBinOp(op,left,right),scope),scope);
        default:
          break;
      }

      ret = yield* this.execBinOpImple(op, scope, left, right);
      if (ret !== null) {
        yield ret;
        return ret;
      }
      // 複合代入演算子
      if (op.length > 1 && op.charAt(op.length - 1) === '=') {
        if (left instanceof UniIdent) {
          const nextOp: string = op.substring(0, op.length - 1);
          const value = yield* this.execBinOp(nextOp, scope, left, right);
          return this.execAssign(yield* this.getAddress(left as UniIdent, scope), value, scope);
        }
      }
      throw new RuntimeException('Unkown binary operator: ' + op);
    }
  }

  protected *execBinOpImple(op: string, scope: Scope, left: UniExpr, right: UniExpr): any {
    let ret = null;
    const l = yield* this.execExpr(left, scope);
    const r = yield* this.execExpr(right, scope);
    switch (op) {
      case '==':
        ret = l === r;
        break;
      case '!=':
        ret = l !== r;
        break;
      case '<':
        ret = l < r;
        break;
      case '>':
        ret = l > r;
        break;
      case '>=':
        ret = l >= r;
        break;
      case '<=':
        ret = l <= r;
        break;
      case '+':
        ret = l + r;
        break;
      case '-':
        ret = l - r;
        break;
      case '*':
        ret = l * r;
        break;
      case '/':
        ret = l / r;
        break;
      case '%':
        ret = l % r;
        break;
      case '&&':
        ret = l && r;
        break;
      case '||':
        ret = l || r;
        break;
    }
    return ret;
  }

  protected execAssign(address: number, value: any, scope: Scope): any {
    const type: string = scope.getType(address);
    value = this._execCast(type, value);
    scope.set(address, value);
    if (type.endsWith('*')) {
      const taddress = value as number;
      if (scope.isMallocArea(taddress)) {
        const size = scope.getMallocSize(taddress);
        const rawType = type.substring(0, type.length - 1);
        if (scope.hasValue(rawType) && scope.get(rawType) instanceof Map) {
          scope.typeOnMemory.set(taddress, rawType);
          scope.objectOnMemory.set(taddress, taddress + 1);
          let i = 0;
          for (const v of scope.get(rawType).values()) {
            scope.typeOnMemory.set(++i + taddress, v[1]); // 型名
          }
        } else {
          for (let i = 0; i < size; ++i) {
            scope.typeOnMemory.set(taddress + i, rawType);
          }
        }
      }
    }
    return value;
  }

  protected getType(expr: UniExpr, scope: Scope): string {
    if (expr instanceof UniIdent) {
      const ui: UniIdent = expr;
      return scope.getType(ui.name);
    } else if (expr instanceof UniUnaryOp) {
      const uuo: UniUnaryOp = expr;
      if (uuo.operator === '*') {
        return this.getType(uuo.expr, scope);
      }
    } else if (expr instanceof UniBinOp) {
      const ubo: UniBinOp = expr;
      if (ubo.operator === '[]') {
        const left: string = this.getType(ubo.left, scope);
        if (left != null) {
          return left;
        }
        const right: string = this.getType(ubo.right, scope);
        if (right != null) {
          return right;
        }
      } else if (ubo.operator === '.') {
        const left: string = this.getType(ubo.left, scope);
        const offsets: Map<string, number> = scope.get(left);
        const offset: number = offsets.get((ubo.right as UniIdent).name);
        return offset[1];
      }
    }
    return null;
  }

  protected randInt32(): number {
    const a = math.pow(2, 32);
    const v = math.randomInt(0, a as number);
    return v;
  }

  private clearStdout() {
    this.stdoutText = '';
  }

  private clearStdin() {
    this.stdinText = '';
  }

  private getEntryPoint(node: UniNode): UniFunctionDec {
    let entry: UniFunctionDec = null;
    if (node instanceof UniProgram) {
      const block: UniBlock = node.block;
      entry = this.getEntryPoint(block);
    } else if (node instanceof UniBlock) {
      for (const stateOfBlock of node.body) {
        entry = this.getEntryPoint(stateOfBlock);
        if (entry != null) {
          break;
        }
      }
    } else if (node instanceof UniDecralation) {
      const dec = node;
      if (dec instanceof UniFunctionDec) {
        if ('main' === dec.name) {
          return dec;
        }
      } else if (dec instanceof UniClassDec) {
        for (const member of dec.members) {
          if (member instanceof UniFunctionDec) {
            entry = this.getEntryPoint(member);
            if (entry != null) {
              break;
            }
          }
        }
      }
    }
    return entry;
  }

  private setGlobalObjects(node: UniNode, global: Scope) {
    if (node instanceof UniProgram) {
      const block: UniBlock = node.block;
      this.setGlobalObjects(block, global);
    } else if (node instanceof UniBlock) {
      for (const stateOfBlock of node.body) {
        this.setGlobalObjects(stateOfBlock, global);
      }
    } else if (node instanceof UniDecralation) {
      const dec = node;
      if (dec instanceof UniFunctionDec) {
        // 関数のセット
        if ('main' !== dec.name && dec.block != null) {
          global.setTop(dec.name, dec, dec.returnType);
        }
      } else if (dec instanceof UniVariableDec) {
        // グローバル変数のセット
        // console.log('set global variable');
        for (const n of this.execExpr(node, global)) {
          // console.log(n);
        }
      } else if (dec instanceof UniClassDec) {
        // structのセット クラス名→[オフセット, 型名, sizeof]
        const fieldOffset: Map<string, [number, string, number]> = new Map();
        let structAddress = 0;
        let offset = 1;
        for (const member of dec.members) {
          if (member instanceof UniVariableDec) {
            for (const def of member.variables) {
              if (global.hasValue(member.type)) {
                const offsets: Map<string, number> = global.get(member.type);
                offset = 1;
                for (const value of offsets.values()) {
                  offset += value[2];
                }
              }
              fieldOffset.set(def.name, [structAddress, member.type, offset]);
              structAddress += offset;
            }
          } else if (member instanceof UniFunctionDec) {
            this.setGlobalObjects(member, global);
          }
        }
        global.setTop(dec.className, fieldOffset, 'CLASS');
      }
    }
  }

  // tslint:disable-next-line:function-name
  private *_execExpr(expr: UniExpr, scope: Scope): any {
    console.assert(expr != null);
    if (expr instanceof UniStatement) {
      return yield* this.execStatement(expr, scope);
    } else if (expr instanceof UniDecralation) {
      return yield* this.execDecralation(expr, scope);
    } else if (expr instanceof UniMethodCall) {
      const mc = expr as UniMethodCall;
      const args: any[] = [];
      for (let i = 0; mc.args !== null && i < mc.args.length; i++) {
        args.push(yield* this.execExpr(mc.args[i], scope));
      }
      this.currentScope = scope;
      let ret: any = null;
      if (mc.receiver != null) {
        if (mc.receiver instanceof UniArray) {
          const item = mc.receiver.items;
          let rec = yield* this.execExpr(item[0], scope);
          for (let i = 1; i < item.length; ++i) {
            if (item[i] instanceof UniIdent) {
              rec = rec[(item[i] as UniIdent).name];
            } else {
              rec = rec[yield* this.execExpr(item[i], scope)];
            }
          }
          ret = yield* this.execMethodCall(rec, mc.methodName.name, args);
        } else {
          const receiver: any = yield* this.execExpr(mc.receiver, scope);
          ret = yield* this.execMethodCall(receiver, mc.methodName.name, args);
        }
      } else {
        const func: any = scope.get(mc.methodName.name);
        if (func instanceof UniFunctionDec) {
          ret = yield* this.execFunc(func, scope, mc.args);
        } else {
          ret = yield* this.execFuncCall(func, args);
        }
      }
      this.currentScope = null;
      return ret;
    } else if (expr instanceof UniIdent) {
      const ret = scope.get((expr as UniIdent).name);
      yield ret;
      return ret;
    } else if (expr instanceof UniBoolLiteral) {
      const ret = (expr as UniBoolLiteral).value;
      yield ret;
      return ret;
    } else if (expr instanceof UniCharacterLiteral) {
      const ret = this.execCharLiteral(expr, scope);
      yield ret;
      return ret;
    } else if (expr instanceof UniStringLiteral) {
      const ret = this.execStringLiteral(expr, scope);
      yield ret;
      return ret;
    } else if (expr instanceof UniIntLiteral) {
      const ret = this.execIntLiteral(expr, scope);
      yield ret;
      return ret;
    } else if (expr instanceof UniNumberLiteral) {
      const ret = (expr as UniNumberLiteral).value;
      yield ret;
      return ret;
    } else if (expr instanceof UniUnaryOp) {
      return yield* this.execUnaryOp(expr as UniUnaryOp, scope);
    } else if (expr instanceof UniBinOp) {
      return yield* this.execBinOp(expr as UniBinOp, scope);
    } else if (expr instanceof UniTernaryOp) {
      const condOp = expr as UniTernaryOp;
      if (this.toBool(yield* this.execExpr(condOp.cond, scope))) {
        return yield* this.execExpr(condOp.trueExpr, scope);
      } else {
        return yield* this.execExpr(condOp.falseExpr, scope);
      }
    } else if (expr instanceof UniArray) {
      return yield* this.execArray(expr as UniArray, scope);
    } else if (expr instanceof UniCast) {
      return yield* this.execCast(expr as UniCast, scope);
    }
    // if (expr instanceof UniNewArray) {
    //   UniNewArray uniNewArray = (UniNewArray) expr;// C言語ではtypeは取れない
    //   List<UniExpr > elementsNum = uniNewArray.elementsNum;// 多次元未対応
    //   int length = (int)this.execExpr(elementsNum.get(0),scope);// 多次元未対応
    //   UniArray value = uniNewArray.value;
    //   List < Object > array = new ArrayList<Object>();
    //   if (value.items == null) {
    //     for (int i = 0;i < length;++i) {
    //       array.add((byte)0);
    //     }
    //   }
    //   else {
    //     array = execArray(value,scope);
    //     for (int i = array.size();i < length;++i;) {
    //       array.add((byte)0);
    //     }
    //   }
    //   return array;
    // }
    throw new RuntimeException('Not support expr type: ' + expr);
  }

  private *execFunc(fdec: UniFunctionDec, scope: Scope, args: UniExpr[]): any {
    const funcScope: Scope = Scope.createLocal(scope);
    funcScope.name = funcScope.getNextName(fdec.name);

    // 実引数を仮引数に代入
    const params: UniParam[] = fdec.params;
    if (params != null && args != null) {
      console.assert(params.length === args.length);
      for (let i = 0; i < args.length; ++i) {
        const param: UniParam = params[i];
        const arg: UniExpr = args[i];
        let name = param.variables[0].name;
        let type = param.type;
        while (name.startsWith('*')) {
          name = name.substring(1);
          type += '*';
        }
        const value = yield* this.execExpr(arg, scope);
        funcScope.setTop(name, value, type);
      }
    }
    // ToDo再起の場合のチェック(連番など?
    // スコープも呼び出し先関数中とGLOBAL以外はスキップさせる
    let ret = null;
    try {
      yield* this.execBlock(fdec.block, funcScope);
    } catch (e) {
      if (e instanceof Exit && funcScope.name !== 'main') {
        throw e;
      }
      if (e instanceof Return) {
        ret = e.value;
      }
    }
    if (funcScope.name !== 'main') {
      scope.removeChild(funcScope);
    }
    return ret;
  }

  private *execFuncCall(func: any, arg: any[]): any {
    if (func == null) {
      throw new RuntimeException('func is null');
    } else if (func instanceof Function) {
      // tslint:disable-next-line:ban-types
      const ret = (func as Function).apply(this, arg);
      if (ret && typeof ret.next === 'function') {
        let yieldObj = { done: false, value: null };
        while (!yieldObj.done) {
          yieldObj = ret.next(arg);
          yield yieldObj.value;
        }
        return yieldObj.value;
      }
      yield ret;
      return ret;
    }
    throw new Error('Not support function type: ' + func);
  }

  private *execMethodCall(receiver: any, name: string, args: any[]): any {
    return yield* this.execFuncCall(receiver[name], args);
  }
}
