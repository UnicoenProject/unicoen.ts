import * as math from 'mathjs';
import * as agh from 'agh.sprintf';
import Engine from '../Engine';
import UniBinOp from '../../node/UniBinOp';
import Scope from '../Scope';
import UniExpr from '../../node/UniExpr';
import UniUnaryOp from '../../node/UniUnaryOp';
import UniIdent from '../../node/UniIdent';
import UniStringLiteral from '../../node/UniStringLiteral';
import UniMethodCall from '../../node/UniMethodCall';
const sscanf = require('./scanf/scanf').sscanf;

export default class CPP14Engine extends Engine {

  public constructor() {
    super();
  }

  protected loadLibarary(global:Scope) {
    this.includeStdio(global);
    this.includeStdlib(global);
    this.includeMath(global);
    global.setFunc('sizeof', (arg:string|number[]) => {
      if (typeof arg ===  'string') {
        return this.sizeof(<string>arg);
      } else if (Array.isArray(arg)) {
        return this.sizeof(this.bytesToStr(arg));
      }
      throw new Error('Unsupported type of argument.');
    },             'FUNCTION');
    
  }
  
  protected includeStdio(global:Scope) {
    global.setFunc('printf', function () {
      const args = [];
      for (let i = 0; i < arguments.length; ++i) {
        args.push(arguments[i]);
      }
      const output = agh.sprintf(...args).replace('\\n','\n');
      this.stdout(output);
      const byteCount = (str:string) => encodeURIComponent(str).replace(/%../g,'x').length;
      const count = byteCount(output);
      return count;
    },             'FUNCTION');

    global.setFunc('scanf', function* () {
      this.setIsWaitingForStdin(true);// yield and set stdin
      ////////////////////////////////////////////
      const args = yield; // get args from next(args) from execUniMethodCall
      ////////////////////////////////////////////
      const input = this.getStdin();
      this.clearStdin();
      this.stdout(input + '\n');
      this.setIsWaitingForStdin(false);
      if (!Array.isArray(args) || args.length === 0) {
        return 0;
      }
      const format = args[0];
      args.shift();

      const values = sscanf(input, format);
      const setValue = (addr, valueStr) => {
        const type:string = this.currentScope.getType(addr);
        if (type === 'double' || type === 'float') {
          const value = Number.parseFloat(valueStr);
          this.currentScope.set(addr, value);
        } else {
          const value = Number.parseInt(valueStr);
          this.currentScope.set(addr, value);
        }
      };
      if (Array.isArray(values)) {
        const length = Math.min(args.length, values.length);
        for (let i = 0; i < length; ++i) {
          const addr:number = args[i];
          setValue(addr,values[i]);
        }
        return length;
      } else {
        const addr = args[0];
        setValue(addr,'' + values);
        return 1;
      }
    },             'FUNCTION');
  }

  protected includeStdlib(global:Scope) {
    global.setFunc('malloc', (x:number) => {
      const num = x;
      const heapAddress = global.setHeap(this.randInt32(), '?');
      for (let i = 1;i < num;++i) {
        global.setHeap(this.randInt32(),'?');
      }
      global.setMallocSize(heapAddress, num);
      return heapAddress;
    },             'FUNCTION');
    global.setFunc('free', (x:number) => {
      const address = x;
      const size = global.getMallocSize(address);
      return global.removeOnMemory(address, size);
    },             'FUNCTION');
    global.setFunc('rand', (x:number) => {
      return Math.round(Math.random() * Math.pow(0, Math.pow(2,32)));
    },             'FUNCTION');
    global.setFunc('abs', (x:number) => {
      return Math.abs(x);
    },             'FUNCTION');
  }

  protected includeMath(global:Scope) {
    global.setFunc('acos', (x:number) => {
      return Math.acos(x);
    },             'FUNCTION');
    global.setFunc('asin', (x:number) => {
      return Math.asin(x);
    },             'FUNCTION');
    global.setFunc('atan', (x:number) => {
      return Math.atan(x);
    },             'FUNCTION');
    
    global.setFunc('cos', (x:number) => {
      return Math.cos(x);
    },             'FUNCTION');
    global.setFunc('sin', (x:number) => {
      return Math.sin(x);
    },             'FUNCTION');
    global.setFunc('tan', (x:number) => {
      return Math.tan(x);
    },             'FUNCTION');

    global.setFunc('cosh', (x:number) => {
      return Math.cosh(x);
    },             'FUNCTION');
    global.setFunc('sinh', (x:number) => {
      return Math.sinh(x);
    },             'FUNCTION');
    global.setFunc('tanh', (x:number) => {
      return Math.tanh(x);
    },             'FUNCTION');

    global.setFunc('exp', (x:number) => {
      return Math.exp(x);
    },             'FUNCTION');
    global.setFunc('exp2', (x:number) => {
      return Math.pow(2.0, x);
    },             'FUNCTION');
    global.setFunc('expm1', (x:number) => {
      return Math.expm1(x);
    },             'FUNCTION');

    global.setFunc('log', (x:number) => {
      return Math.log(x);
    },             'FUNCTION');
    global.setFunc('log10', (x:number) => {
      return Math.log10(x);
    },             'FUNCTION');
    global.setFunc('log1p', (x:number) => {
      return Math.log1p(x);
    },             'FUNCTION');

    global.setFunc('cbrt', (x:number) => {
      return Math.cbrt(x);
    },             'FUNCTION');
    global.setFunc('fabs', (x:number) => {
      return Math.abs(x);
    },             'FUNCTION');
    global.setFunc('hypot', (x:number, y:number) => {
      return Math.hypot(x,y);
    },             'FUNCTION');

    global.setFunc('pow', (x:number, y:number) => {
      return Math.pow(x,y);
    },             'FUNCTION');
    global.setFunc('sqrt', (x:number) => {
      return Math.sqrt(x);
    },             'FUNCTION');
    global.setFunc('ceil', (x:number) => {
      return Math.ceil(x);
    },             'FUNCTION');
    global.setFunc('floor', (x:number) => {
      return Math.floor(x);
    },             'FUNCTION');
    global.setFunc('rint', (x:number) => {
      throw new Error('Sorry! rint is not supported.');
    },             'FUNCTION');
    global.setFunc('round', (x:number) => {
      return Math.round(x);
    },             'FUNCTION');
    global.setFunc('fdim', (x:number, y:number) => {
      const a = Math.abs(x);
      const b = Math.abs(y);
      return Math.abs(Math.max(a,b) - Math.min(a,b));
    },             'FUNCTION');
    global.setFunc('fmax', (x:number, y:number) => {
      return Math.max(x,y);
    },             'FUNCTION');
    global.setFunc('fmin', (x:number, y:number) => {
      return Math.min(x,y);
    },             'FUNCTION');
    global.setFunc('fmod', (x:number, y:number) => {
      return math.mod(x,y);
    },             'FUNCTION');
  }

  // Byte[]
  public strToBytes(str:string):number[] {
    const length = str.length;
    const bytes:number[] = [];
    for (let i = 0; i < length; ++i) {
      const code = str.charCodeAt(i);
      bytes.push(code);
    }
    bytes.push(0);
    return bytes;
  }
  
  // Byte[]
  public bytesToStr(bytes:number[]):string {
    let data = '';
    for (const byte of bytes) {
      data += String.fromCharCode(byte);
    }
    return data;
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
    switch (uniOp.operator) {
      case '&': {
        const adr = this.getAddress(uniOp.expr,scope);
        return adr;
      }
      case '*': {
        const v = scope.getValue(<number>(yield* this.execExpr(uniOp.expr, scope)));
        return v;
      }
      case 'sizeof': {
        const l:UniExpr[] = [];
        if (uniOp.expr instanceof UniIdent) {
          l.push(new UniStringLiteral(uniOp.expr.name));
        } else {
          l.push(uniOp.expr);
        }
        const umc = new UniMethodCall(null, new UniIdent('sizeof'), l);
        const v = yield *this.execExpr(umc,scope);
        return v;
      }
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
    }    else if (type.includes('FUNCTION')) {
      return 8;
    }
    return 4;
  }

  public sizeof(type:string):number {
    return 1;
    // let length = 1;
    // if (type.includes('[') && type.includes(']')) {
    //   length = Number(type.substring(type.lastIndexOf('[') + 1, type.length - 1));
    // }
    // const typeSize = this.sizeofElement(type);
    // return typeSize * length;
  }

}
