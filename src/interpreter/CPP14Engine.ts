import * as math from 'mathjs';
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
      return math.abs(x);
    },             'int');
    global.setFunc('rand', (x:number) => {
      return math.randomInt(0, <number>math.pow(2,32));
    },             'int');
  }

  protected includeMath(global:Scope) {
    global.setFunc('acos', (x:number) => {
      return math.acos(x);
    },             'double');
    global.setFunc('asin', (x:number) => {
      return math.asin(x);
    },             'double');
    global.setFunc('atan', (x:number) => {
      return math.atan(x);
    },             'double');
    
    global.setFunc('cos', (x:number) => {
      return math.cos(x);
    },             'double');
    global.setFunc('sin', (x:number) => {
      return math.sin(x);
    },             'double');
    global.setFunc('tan', (x:number) => {
      return math.tan(x);
    },             'double');

    global.setFunc('cosh', (x:number) => {
      return math.cosh(x);
    },             'double');
    global.setFunc('sinh', (x:number) => {
      return math.sinh(x);
    },             'double');
    global.setFunc('tanh', (x:number) => {
      return math.tanh(x);
    },             'double');

    global.setFunc('exp', (x:number) => {
      return math.exp(x);
    },             'double');
    global.setFunc('exp2', (x:number) => {
      return math.pow(2.0, x);
    },             'double');
    global.setFunc('expm1', (x:number) => {
      return math.expm1(x);
    },             'double');

    global.setFunc('log', (x:number) => {
      return math.log(x);
    },             'double');
    global.setFunc('log10', (x:number) => {
      return math.log10(x);
    },             'double');
    global.setFunc('log1p', (x:number) => {
      return math.log1p(x);
    },             'double');

    global.setFunc('cbrt', (x:number) => {
      return math.cbrt(x);
    },             'double');
    global.setFunc('fabs', (x:number) => {
      return math.abs(x);
    },             'double');
    global.setFunc('hypot', (x:number, y:number) => {
      return math.hypot(x,y);
    },             'double');

    global.setFunc('pow', (x:number, y:number) => {
      return math.pow(x,y);
    },             'double');
    global.setFunc('sqrt', (x:number) => {
      return math.sqrt(x);
    },             'double');
    global.setFunc('ceil', (x:number) => {
      return math.ceil(x);
    },             'double');
    global.setFunc('floor', (x:number) => {
      return math.floor(x);
    },             'double');
    global.setFunc('rint', (x:number) => {
      throw new Error('Sorry! rint is not supported.');
    },             'double');
    global.setFunc('round', (x:number) => {
      return math.round(x);
    },             'double');
    global.setFunc('fdim', (x:number, y:number) => {
      const a = math.abs(x);
      const b = math.abs(y);
      return math.abs(math.max(a,b) - math.min(a,b));
    },             'double');
    global.setFunc('fmax', (x:number, y:number) => {
      return math.max(x,y);
    },             'double');
    global.setFunc('fmin', (x:number, y:number) => {
      return math.min(x,y);
    },             'double');
    global.setFunc('fmod', (x:number, y:number) => {
      return math.mod(x,y);
    },             'double');
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
