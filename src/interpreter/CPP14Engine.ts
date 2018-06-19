import Engine from './Engine';
import UniBinOp from '../node/UniBinOp';
import Scope from './Scope';
import UniExpr from '../node/UniExpr';
import UniUnaryOp from '../node/UniUnaryOp';

export default class CPP14Engine extends Engine {

  public constructor() {
    super();
  }

  protected loadLibarary(global:Scope) {
    this.includeStdio(global);
    this.includeStdlib(global);
    this.includeMath(global);
  }
  
  protected includeStdio(global:Scope) {
  }

  protected includeStdlib(global:Scope) {
    global.setFunc('abs', (x:number) => {
      if (0 <= x) {
        return x;
      } else {
        return -x;
      }
    },             'int');
  }

  protected includeMath(global:Scope) {
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

	
  public sizeofElement(type:string):number {
    if (type.includes('*')) {
      return 4;
    }    else if (type.includes('char')) {
      return 1;
    }    else if (type.includes('short')) {
      return 2;
    }    else if (type.includes('double')) {
      return 8;
    }
    return 4;
  }

  public sizeof(type:string):number {
    let length = 1;
    if (type.includes('[') && type.includes(']')) {
      length = Number(type.substring(type.lastIndexOf('[') + 1, type.length - 1));
    }
    const typeSize = this.sizeofElement(type);
    return typeSize * length;
  }
}
