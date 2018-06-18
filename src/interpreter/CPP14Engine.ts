import Engine from './Engine';
import UniBinOp from '../node/UniBinOp';
import Scope from './Scope';
import UniExpr from '../node/UniExpr';
import UniUnaryOp from '../node/UniUnaryOp';

export default class CPP14Engine extends Engine {

  public constructor() {
    super();
  }

  protected* execBinOp(arg:string|UniBinOp, scope:Scope, left?:UniExpr, right?:UniExpr):any {
    if (arg instanceof UniBinOp && left === undefined && right === undefined) {
      const binOp = <UniBinOp>arg;
      return yield* this.execBinOp(binOp.operator, scope, binOp.left, binOp.right);
    } else if (typeof arg === 'string' && left instanceof UniExpr && right instanceof UniExpr) {
      let op = <string>arg;
      if (op === '++' || op === '--') {
        op = '_' + op;
        return yield* this.execUnaryOp(new UniUnaryOp(op,left),scope);
      }
		  return yield* super.execBinOp(op, scope, left, right);
    }
  }

  *execUnaryOp(uniOp: UniUnaryOp, scope: Scope): any {
    if (uniOp.operator === '++' || uniOp.operator === '--') {
      uniOp.operator = uniOp.operator + '_';
    }
    return yield* super.execUnaryOp(uniOp,scope);
  }
}
