import * as agh from 'agh.sprintf';
import * as math from 'mathjs';
import { sscanf } from 'scanf';
import { UniBinOp } from '../../node/UniBinOp';
import { UniCast } from '../../node/UniCast';
import { UniCharacterLiteral } from '../../node/UniCharacterLiteral';
import { UniExpr } from '../../node/UniExpr';
import { UniIdent } from '../../node/UniIdent';
import { UniIntLiteral } from '../../node/UniIntLiteral';
import { UniMethodCall } from '../../node/UniMethodCall';
import { UniStringLiteral } from '../../node/UniStringLiteral';
import { UniUnaryOp } from '../../node/UniUnaryOp';
import { Engine, Exit } from '../Engine';
import { File } from '../File';
import { Scope } from '../Scope';

export class CPP14Engine extends Engine {
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

  // Byte[]
  static bytesToStr(obj: any): string {
    const bytes = obj as number[];
    const pos = bytes.indexOf(0);
    const length = pos === -1 ? bytes.length : pos;

    // new String(data);
    let str = '';
    for (let i = 0; i < length; ++i) {
      str += String.fromCharCode(bytes[i]);
    }
    return str;
  }

  // #defineを探してそれ以降の文中の文字列を単純に置換する
  static replaceDefine(text: string): string {
    const replaceMap = new Map<string, string>();
    for (let pos = text.indexOf('#define'); 0 <= pos; pos = text.indexOf('#define', pos)) {
      const lineEnd = text.indexOf('\n', pos);
      const defineText = text.substring(pos, lineEnd);
      const defineTokens = defineText.split(/\s+/);
      if (defineTokens.length < 3) {
        continue;
      }
      replaceMap.set(defineTokens[1], defineTokens.slice(2).join(' '));
      pos = lineEnd;
    }
    for (const [key, value] of replaceMap) {
      text = text.split(key).join(value);
    }
    return text;
  }

  static getCharArrAsByte(objectOnMemory: Map<number, any>, beginArg: number): number[] {
    let begin = beginArg;
    const bytes: number[] = [];
    const obj: string | number = objectOnMemory.get(begin);
    if (typeof obj === 'string') {
      return CPP14Engine.strToBytes(obj);
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
    return this.bytesToStr(bytes);
  }

  //'\''n'を'\n'にする
  static escapeText(str:string): string {
    return str
    .replace(/\\a/g, String.fromCharCode(7))
    .replace(/\\b/g, '\b')
    .replace(/\\f/g, '\f')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\r')
    .replace(/\\t/g, '\t')
    .replace(/\\v/g, '\v')
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\\?/g, '?')
    .replace(/\\\d{1,3}/g, (match)=>String.fromCharCode(parseInt(match.substr(1),8)))
    .replace(/\\x[A-Fa-f0-9]{1,2}/g, (match)=>String.fromCharCode(parseInt(match.substr(2),16)))
    .replace(/\\\\/g, '\\')
    .replace(/\\/g, '\/');
  }

  constructor() {
    super();
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
    this.includeStdio(global);
    this.includeStdlib(global);
    this.includeMath(global);
    this.includeString(global);
    global.setTop(
      'sizeof',
      (arg: string | number[]) => {
        if (typeof arg === 'string') {
          return this.sizeof(arg as string);
        } else if (Array.isArray(arg)) {
          return this.sizeof(CPP14Engine.bytesToStr(arg));
        }
        throw new Error('Unsupported type of argument.');
      },
      'FUNCTION',
    );
    global.setSystemVariable('SYSTEM', 'NULL', 0);
  }

  protected includeStdio(global: Scope) {
    global.setTop(
      'printf',
      function() {
        if (arguments.length < 1) {
          return 0;
        }
        const args = [];
        for (const argument of arguments) {
          args.push(argument);
        }
        let text = CPP14Engine.bytesToStr(args[0]);
        text = CPP14Engine.escapeText(text);
        for (let i = 1; i < args.length; ++i) {
          if (global.typeOnMemory.containsKey(args[i])) {
            const type: string = global.typeOnMemory.get(args[i]);
            if (type.includes('char')) {
              args[i] = CPP14Engine.charArrToStr(global.objectOnMemory, args[i] as number);
            }
          }
        }
        args[0] = text;
        const output = CPP14Engine.escapeText(agh.sprintf(...args));
        this.stdout(output);
        const byteCount = (str: string) => encodeURIComponent(str).replace(/%../g, 'x').length;
        const count = byteCount(output);
        return count;
      },
      'FUNCTION',
    );

    global.setTop(
      'scanf',
      function*() {
        this.setIsWaitingForStdin(true); // yield and set stdin
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
        const format = CPP14Engine.bytesToStr(args[0]);
        args.shift();

        const values = sscanf(input, format);
        const setValue = (addr, valueStr) => {
          const type: string = this.currentScope.getType(addr);
          if (type === 'double' || type === 'float') {
            const value = Number.parseFloat(valueStr);
            this.currentScope.set(addr, value);
          } else if (type === 'char') {
            if (1 < valueStr.length) {
              try {
                const bytes: number[] = CPP14Engine.strToBytes(valueStr);
                for (let k = 0; k < valueStr.length(); ++k) {
                  this.currentScope.set(addr + k, bytes[k]);
                }
              } catch (e) {
                // TODO 自動生成された catch ブロック
                e.printStackTrace();
              }
            } else {
              const value: number = CPP14Engine.strToBytes(valueStr)[0];
              this.currentScope.set(addr, value);
            }
          } else {
            const value = Number.parseInt(valueStr, 10);
            this.currentScope.set(addr, value);
          }
        };
        if (Array.isArray(values)) {
          const length = Math.min(args.length, values.length);
          for (let i = 0; i < length; ++i) {
            const addr: number = args[i];
            setValue(addr, values[i]);
          }
          return length;
        } else {
          const addr = args[0];
          setValue(addr, '' + values);
          return 1;
        }
      },
      'FUNCTION',
    );
    global.setTop(
      'getchar',
      function*() {    
        ////////////////////////////////////////////
        const isStdinEmpty = (this.getStdin() === '');
        if(isStdinEmpty){
          this.setIsWaitingForStdin(true); // yield and set stdin
          yield; // get args from next(args) from execUniMethodCall
        }    
        ////////////////////////////////////////////
        const input = this.getStdin();
        this.clearStdin();
        this.stdin(input.substr(1));
        if(isStdinEmpty){
          this.stdin('\n');
          this.stdout(input + '\n');
        }
        this.setIsWaitingForStdin(false);

        const ch = input.charCodeAt(0);
        return ch;
      },
      'FUNCTION',
    );
    global.setTop(
      'fopen',
      () => {
        if (arguments.length < 1) {
          return 0;
        }
        const args = [];
        for (const argument of arguments) {
          args.push(argument);
        }
        const filename = CPP14Engine.bytesToStr(args[0]);
        const mode = CPP14Engine.bytesToStr(args[1]);
        let ret = 0;
        try {
          switch (mode) {
            // テキスト
            case 'r': {
              const buf = File.getFileFromFileList(filename);
              const file = new File(filename, buf, mode);
              ret = global.setCode(file, 'FILE');
              break;
            }
            case 'w': {
              const buf = new ArrayBuffer(1024);
              File.addFileToFileList(filename, buf);
              const file = new File(filename, buf, 'w');
              ret = global.setCode(file, 'FILE');
              break;
            }
            case 'a':
              break;
            case 'rb':
              break;
            case 'r+':
              break;
            case 'w+':
              break;
            case 'a+':
              break;
            // バイナリ
            case 'wb':
              break;
            case 'ab':
              break;
            case 'r+b':
            case 'rb+':
              break;
            case 'w+b':
            case 'wb+':
              break;
            case 'a+b':
            case 'ab+':
              break;
            default:
              break;
          }
        } catch (e) {
          // TODO 自動生成された catch ブロック
          // e.printStackTrace();
        }
        return ret;
      },
      'FUNCTION',
    );
    global.setTop(
      'fgetc',
      (arg: any) => {
        let ch = -1;
        const addr = arg as number;
        const fp: File = global.getValue(addr);
        ch = fp.fgetc();
        return ch;
      },
      'FUNCTION',
    );
    global.setTop(
      'fgets',
      (s: number, n: number, stream: number) => {
        const ch = -1;
        const fp: File = global.getValue(stream);
        const buf = fp.fgets(n);
        if (buf === null) {
          return 0;
        }
        const addr = s as number;
        for (let i = 0; i < buf.length; ++i) {
          global.set(addr + i, buf[i]);
          if (buf[i] === 0) {
            break;
          }
        }
        return s;
      },
      'FUNCTION',
    );
    global.setTop(
      'fputc',
      (c: number, stream: number) => {
        let ch = -1;
        const addr = stream as number;
        const fp: File = global.getValue(addr);
        ch = fp.fputc(c);
        return ch;
      },
      'FUNCTION',
    );
    global.setTop(
      'fputs',
      (s: number | number[], stream: number) => {
        const addr = stream as number;
        let bytes = null;
        if (typeof s === 'number') {
          bytes = CPP14Engine.getCharArrAsByte(global.objectOnMemory, s);
        } else if (typeof s === 'string') {
          bytes = CPP14Engine.strToBytes(s);
        }
        const fp: File = global.getValue(addr);
        let ret = -1;
        for (const byte of bytes) {
          ret = fp.fputc(byte);
        }
        return 1;
      },
      'FUNCTION',
    );
    global.setTop(
      'fflush',
      (stream: number) => {
        const addr = stream as number;
        const fp: File = global.getValue(addr);
        fp.flush();
        return 0;
      },
      'FUNCTION',
    );
    global.setTop(
      'fclose',
      (stream: number) => {
        const addr = stream as number;
        const fp: File = global.getValue(addr);
        fp.fclose();
        return 0;
      },
      'FUNCTION',
    );
  }

  protected includeStdlib(global: Scope) {
    global.setTop(
      'malloc',
      (x: number) => {
        const num = x;
        if (10000000 <= num) {
          return 0;
        }
        const heapAddress = global.setHeap(this.randInt32(), '?');
        for (let i = 1; i < num; ++i) {
          global.setHeap(this.randInt32(), '?');
        }
        global.setMallocSize(heapAddress, num);
        return heapAddress;
      },
      'FUNCTION',
    );
    global.setTop(
      'free',
      (x: number) => {
        const address = x;
        const size = global.getMallocSize(address);
        return global.removeOnMemory(address, size);
      },
      'FUNCTION',
    );
    global.setTop(
      'rand',
      (x: number) => {
        return Math.round(Math.random() * Math.pow(0, Math.pow(2, 32)));
      },
      'FUNCTION',
    );
    global.setTop(
      'abs',
      (x: number) => {
        return Math.abs(x);
      },
      'FUNCTION',
    );
    global.setTop(
      'exit',
      (status: number) => {
        throw new Exit(status);
      },
      'FUNCTION',
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
        return math.mod(x, y);
      },
      'FUNCTION',
    );
  }

  protected includeString(global: Scope): any {
    global.setTop(
      'strlen',
      (str : number) => {
        const ret = CPP14Engine.charArrToStr(global.objectOnMemory, str);
        let len = 0;
        for(let i=0; i<ret.length; ++i,  ++len){
          const code = ret.charCodeAt(i);
          if(127<code){
            ++len;
          }
        }
        return len;
      },
      'FUNCTION',
    );
  }

  protected *execUnaryOp(uniOp: UniUnaryOp, scope: Scope): any {
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
        const expr: UniExpr = uniOp.expr;
        if (expr instanceof UniIdent) {
          l.push(new UniStringLiteral(expr.name));
        } else if (
          expr instanceof UniUnaryOp &&
          expr.operator === '*' &&
          expr.expr instanceof UniIdent
        ) {
          let type: string = this.getType(expr.expr, scope);
          while (type.endsWith('*')) {
            type = type.substring(0, type.length - 1);
          }
          let typeSize = 1;
          const offsets: Map<string, number> = scope.get(type);
          for (const value of offsets.values()) {
            typeSize += value[2];
          }
          return typeSize;
        } else {
          l.push(expr);
        }
        const umc = new UniMethodCall(null, new UniIdent('sizeof'), l);
        const v = yield* this.execExpr(umc, scope);
        return v;
      }
    }
    return yield* super.execUnaryOp(uniOp, scope);
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
        switch (op) {
          case '->': {
            return yield* super.execBinOp('.', scope, new UniUnaryOp('*', left), right);
          }
        }
        return yield* super.execBinOp(op, scope, left, right);
      }
    }
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
    const value: string = CPP14Engine.escapeText(expr.value);
    const code = value.charCodeAt(0);
    return code;
  }

  protected execStringLiteral(expr: UniStringLiteral, scope: Scope): any {
    const value: string = CPP14Engine.escapeText(expr.value);
    const list: number[] = [];
    for (let i = 0; i < value.length; ++i) {
      const byte = value.charCodeAt(i);
      list.push(byte);
    }
    list.push(0);
    return list;
  }
}
