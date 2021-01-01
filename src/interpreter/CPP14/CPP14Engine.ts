import * as agh from 'agh.sprintf';
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
import { UniVariableDec } from '../../node/UniVariableDec';
import { Engine, Exit } from '../Engine/Engine';
import { File } from '../Engine/File';
import { Scope } from '../Engine/Scope';
import { Variable } from '../Engine/Variable';
import { Int } from './Int';

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

  static getCharArrAsByte(objectOnMemory: Map<number, any>, beginArg: number): number[] {
    let begin = beginArg;
    const bytes: number[] = [];
    const obj: string | number | Int = objectOnMemory.get(begin);
    if (typeof obj === 'string') {
      return CPP14Engine.strToBytes(obj);
    }
    for (let v = obj; objectOnMemory.containsKey(begin); ++begin) {
      const o = objectOnMemory.get(begin);
      if (typeof obj === 'number' || obj instanceof Int) {
        v = o as number;
        if (v === 0) {
          break;
        }
        bytes.push(v.valueOf());
      } else {
        break;
      }
    }
    bytes.push(0);
    return bytes;
  }
  static charArrToStr(objectOnMemory: Map<number, any>, beginArg: number): string {
    const bytes = CPP14Engine.getCharArrAsByte(objectOnMemory, beginArg);
    return Engine.bytesToStr(bytes);
  }

  // '\''n'を'\n'にする
  static escapeText(str: string): string {
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
      .replace(/\\\d{1,3}/g, (match) => String.fromCharCode(parseInt(match.substr(1), 8)))
      .replace(/\\x[A-Fa-f0-9]{1,2}/g, (match) =>
        String.fromCharCode(parseInt(match.substr(2), 16)),
      )
      .replace(/\\\\/g, '\\')
      .replace(/\\/g, '/');
  }

  constructor() {
    super();
    Scope.structInfoSize = CPP14Engine.structInfoSize;
    Scope.sizeof = CPP14Engine.sizeof;
    Variable.sizeof = CPP14Engine.sizeof;
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
          return CPP14Engine.sizeof(arg as string);
        } else if (Array.isArray(arg)) {
          return CPP14Engine.sizeof(Engine.bytesToStr(arg));
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
      // tslint:disable-next-line:only-arrow-functions
      function() {
        // アロー関数にするとargumentsがincludeStdioのargument(すなわちglobal:Scope)になってしまう。
        if (arguments.length < 1) {
          return 0;
        }
        const args = [];
        for (const argument of arguments) {
          args.push(argument);
        }
        let text = Engine.bytesToStr(args[0]);
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
        const isStdinEmpty = this.getStdin() === '';
        if (isStdinEmpty) {
          this.setIsWaitingForStdin(true); // yield and set stdin
        }
        ////////////////////////////////////////////
        const args = yield; // get args from next(args) from execUniMethodCall
        ////////////////////////////////////////////
        const stdin: string = this.getStdin();
        this.clearStdin();
        if (isStdinEmpty) {
          this.stdout(stdin + '\n');
        }
        let input = stdin.trim();
        const spacePos = input.search(/\s/);

        if (0 <= spacePos) {
          this.stdin(input.substr(spacePos + 1));
          input = input.substring(0, spacePos);
        }
        if (isStdinEmpty) {
          this.setIsWaitingForStdin(false);
        }

        if (!Array.isArray(args) || args.length === 0) {
          return 0;
        }
        const format = Engine.bytesToStr(args[0]);
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
                for (let k = 0; k < bytes.length; ++k) {
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
      'gets',
      function*() {
        const isStdinEmpty = this.getStdin() === '';
        if (isStdinEmpty) {
          this.setIsWaitingForStdin(true); // yield and set stdin
        }
        ////////////////////////////////////////////
        const args = yield; // get args from next(args) from execUniMethodCall
        ////////////////////////////////////////////
        let input: string = this.getStdin();
        this.clearStdin();
        if (isStdinEmpty) {
          this.stdout(input + '\n');
        }
        const spacePos = input.indexOf('\n');

        if (0 <= spacePos) {
          this.stdin(input.substr(spacePos + 1));
          input = input.substring(0, spacePos);
        }
        if (isStdinEmpty) {
          this.setIsWaitingForStdin(false);
        }

        if (!Array.isArray(args) || args.length === 0) {
          return 0;
        }

        const addr = args[0];
        try {
          const bytes: number[] = CPP14Engine.strToBytes('' + input);
          for (let k = 0; k < bytes.length; ++k) {
            this.currentScope.set(addr + k, bytes[k]);
          }
        } catch (e) {
          // TODO 自動生成された catch ブロック
          e.printStackTrace();
        }
      },
      'FUNCTION',
    );
    global.setTop(
      'getchar',
      function*() {
        ////////////////////////////////////////////
        const isStdinEmpty = this.getStdin() === '';
        if (isStdinEmpty) {
          this.setIsWaitingForStdin(true); // yield and set stdin
          yield; // get args from next(args) from execUniMethodCall
        }
        ////////////////////////////////////////////
        const input = this.getStdin();
        this.clearStdin();
        this.stdin(input.substr(1));
        if (isStdinEmpty) {
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
      // tslint:disable-next-line:only-arrow-functions
      function() {
        // アロー関数にするとargumentsがincludeStdioのargument(すなわちglobal:Scope)になってしまう。
        if (arguments.length < 1) {
          return 0;
        }
        const args = [];
        for (const argument of arguments) {
          args.push(argument);
        }
        const filename = Engine.bytesToStr(args[0]);
        const mode = Engine.bytesToStr(args[1]);
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
      (s: string | number | number[], stream: number) => {
        const addr = stream as number;
        let bytes = null;
        if (Array.isArray(s)) {
          bytes = s;
        } else if (typeof s === 'number') {
          bytes = CPP14Engine.getCharArrAsByte(global.objectOnMemory, s.valueOf());
        } else if (typeof s === 'string') {
          bytes = CPP14Engine.strToBytes(s);
        }
        const fp: File = global.getValue(addr.valueOf());
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
        let type = Engine.lastSizeOf;
        if (type.includes('*')) {
          type = type.replace('*', '');
        }

        const heapAddress = global.address.heapAddress;

        if (global.isStructType(type)) {
          // 構造体
          const rawType = global.getTypedef(type);
          global.setHeap(heapAddress + Engine.structInfoSize, type);
          // [offset, type]のタプル
          const offsets: Map<string, number> = global.get(rawType);
          for (const [fieldName, valueofOffset] of offsets) {
            const fieldType = valueofOffset[1];
            global.setHeap(this.rand(CPP14Engine.sizeof(fieldType) * 8), fieldType);
          }
          global.setMallocSize(heapAddress, x + Engine.structInfoSize);
          return heapAddress;
        }

        const num = x / CPP14Engine.sizeof(type);
        if (10000000 <= num) {
          return 0;
        }
        const typeBit = CPP14Engine.sizeof(type) * 8;
        for (let i = 0; i < num; ++i) {
          global.setHeap(this.rand(typeBit), type);
        }
        global.setMallocSize(heapAddress, num * CPP14Engine.sizeof(type));
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
    global.setTop(
      'atoi',
      (str: number | number[]) => {
        const bytes = Array.isArray(str)
          ? str
          : CPP14Engine.getCharArrAsByte(global.objectOnMemory, str);
        let buf = '';
        for (const byte of bytes) {
          if ('0'.charCodeAt(0) <= byte && byte <= '9'.charCodeAt(0)) {
            buf += String.fromCharCode(byte);
          } else {
            break;
          }
        }
        if (buf === '') {
          return 0;
        }
        return Number(buf);
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
        const div = x / y;
        const n = 0 < div ? Math.floor(div) : Math.ceil(div);
        return x - y * n;
      },
      'FUNCTION',
    );
  }

  protected includeString(global: Scope): any {
    global.setTop(
      'strlen',
      (str: number) => {
        const ret = CPP14Engine.charArrToStr(global.objectOnMemory, str);
        let len = 0;
        for (let i = 0; i < ret.length; ++i, ++len) {
          const code = ret.charCodeAt(i);
          if (127 < code) {
            ++len;
          }
        }
        return len;
      },
      'FUNCTION',
    );
    global.setTop(
      'strcpy',
      (dst: number, src: number) => {
        const bytes = CPP14Engine.getCharArrAsByte(global.objectOnMemory, src);
        for (let k = 0; k < bytes.length; ++k) {
          this.currentScope.set(dst + k, bytes[k]);
        }
        return dst;
      },
      'FUNCTION',
    );
    global.setTop(
      'strcat',
      (dst: number, src: number) => {
        const strBytes = CPP14Engine.getCharArrAsByte(global.objectOnMemory, src);
        const dstBytes = CPP14Engine.getCharArrAsByte(global.objectOnMemory, dst);
        const end = dstBytes.indexOf(0);
        for (let k = 0; k < strBytes.length; ++k) {
          this.currentScope.set(dst + end + k, strBytes[k]);
        }
        return dst;
      },
      'FUNCTION',
    );
    global.setTop(
      'strcmp',
      (s1: number, s2: number) => {
        // "aiueo" "aiueo" => 0
        // "aiue" "aiueo" => -1
        // "aiue" "aiu" => 1
        const str1 = CPP14Engine.getCharArrAsByte(global.objectOnMemory, s1);
        const str2 = CPP14Engine.getCharArrAsByte(global.objectOnMemory, s2);
        const len = Math.min(str1.length, str2.length);
        for (let i = 0; i < len; ++i) {
          if (str1[i] > str2[i]) {
            return 1;
          } else if (str1[i] < str2[i]) {
            return -1;
          }
        }
        return 0;
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
          type = scope.getTypedef(type);
          while (type.endsWith('*')) {
            type = type.substring(0, type.length - 1);
          }
          Engine.lastSizeOf = type;
          let typeSize = 1;
          if (scope.isStructType(type)) {
            const offsets: Map<string, number> = scope.get(type);
            for (const value of offsets.values()) {
              typeSize += value[2];
            }
          }
          return typeSize;
        } else {
          l.push(expr);
        }
        const umc = new UniMethodCall(null, new UniIdent('sizeof'), l);
        const v = yield* this.execExpr(umc, scope);
        return v;
      }
      case '-': {
        const value = yield* this.execExpr(uniOp.expr, scope);
        if (value instanceof Int) {
          return new Int(-value);
        }
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
          let num = yield* this.execExpr(uniOp.expr, scope);
          const address = yield* this.getAddress(ident, scope);
          switch (uniOp.operator) {
            case '_++':
              if (num instanceof Int) {
                this.execAssign(address, new Int(num.valueOf() + 1), scope);
              } else {
                this.execAssign(address, num + 1, scope);
              }
              yield num;
              return num;
            case '++_':
              if (num instanceof Int) {
                num = new Int(num.valueOf() + 1);
              } else {
                ++num;
              }
              yield num;
              return this.execAssign(address, num, scope);
            case '_--':
              if (num instanceof Int) {
                this.execAssign(address, new Int(num.valueOf() - 1), scope);
              } else {
                this.execAssign(address, num - 1, scope);
              }
              yield num;
              return num;
            case '--_':
              if (num instanceof Int) {
                num = new Int(num.valueOf() - 1);
              } else {
                --num;
              }
              yield num;
              return this.execAssign(address, num, scope);
          }
        }
    }
    return yield* super.execUnaryOp(uniOp, scope);
  }

  protected *execVariableDec(decVar: UniVariableDec, scope: Scope) {
    let value = null;
    Engine.lastSizeOf = decVar.type;
    for (const def of decVar.variables) {
      value = null; // 2これがないと個目以降に残ってしまう。
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
              const typeSize = CPP14Engine.sizeof(type);
              for (let i = 0; i < size; i += typeSize) {
                scope.typeOnMemory.set(address + i, type);
              }
            }
          }
        }
      }

      // 配列の場合
      if (def.typeSuffix != null && def.typeSuffix !== '') {
        const sizes: number[] = scope.getArrayDims(def.typeSuffix);
        if (0 < sizes.length) {
          if (value === null) {
            // 初期化リストがない場合
            const sum = sizes.reduce((pre: number, cur: number) => pre * cur, 1);
            value = new Array(sum).fill(0).map(() => this._execCast(decVar.type, this.randInt32()));
            for (const size of sizes.reverse()) {
              value = value.divide(size);
            }
          } else {
            const make2array = (valueLocal: any[], sizesLocal: number[]) => {
              const value1 = [];
              const length = sizesLocal[1];
              let offset = 0;
              const makeArray = () => {
                if (Array.isArray(valueLocal[offset])) {
                  const value2 = valueLocal[offset++];
                  for (let k = value2.length; k < length; ++k) {
                    value2.push(new Int(0));
                  }
                  return value2;
                } else {
                  const value2 = [];
                  for (let k = 0; k < length; ++k) {
                    const v = valueLocal[offset];
                    if (Array.isArray(v) && 2 <= v.length) {
                      for (; k < length; ++k) {
                        value2.push(new Int(0));
                      }
                    } else {
                      value2.push(v);
                      ++offset;
                    }
                  }
                  return value2.map((v: any) => (Array.isArray(v) && v.length === 1 ? v[0] : v));
                }
              };
              if (!isNaN(sizesLocal[0])) {
                // 要素数が指定されている場合
                for (let i = 0; i < sizesLocal[0]; ++i) {
                  value1.push(makeArray());
                }
              } else {
                // 1つ目の要素数が省略されている場合
                while (offset < valueLocal.length) {
                  value1.push(makeArray());
                }
              }
              return value1;
            };
            const makeNarray = (n: number, valueLocal: any[], sizesLocal: number[]) => {
              const value1 = [];
              if (!isNaN(sizesLocal[0])) {
                // 要素数が指定されている場合
                for (let i = 0; i < sizesLocal[0]; ++i) {
                  let value2 = null;
                  if (n === 3) {
                    value2 = make2array(valueLocal[i], sizesLocal.slice(1));
                  } else {
                    value2 = makeNarray(n - 1, valueLocal[i], sizesLocal.slice(1));
                  }
                  value1.push(value2);
                }
              } else {
                // 1つ目の要素数が省略されている場合
                for (const v of valueLocal) {
                  value1.push(makeNarray(n - 1, v, sizesLocal.slice(1)));
                }
              }
              return value1;
            };
            if (sizes.length === 1) {
              if (!isNaN(sizes[0])) {
                // 要素数が指定されている場合
                for (let i = value.length; i < sizes[0]; ++i) {
                  value.push(new Int(0));
                }
              }
              // 要素数が省略されている場合はvalueをそのまま使う
            } else if (sizes.length === 2) {
              value = make2array(value, sizes);
            } else if (3 <= sizes.length) {
              value = makeNarray(sizes.length, value, sizes);
            }
          }
        }
      }
      if (!scope.isStructType(decVar.type) && value === null) {
        value = this.randInt32();
      }

      if (decVar.modifiers.includes('typedef')) {
        scope.setTypedef(decVar.type, def.name);
      } else {
        scope.setTop(def.name, value, decVar.type);
      }
    }
    Engine.lastSizeOf = '';
    return value;
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

  protected execBinOpImple(op: string, rawl: any, rawr: any): any {
    if (op === ',') {
      return rawl;
    }
    const l = rawl.valueOf();
    const r = rawr.valueOf();
    let ret = super.execBinOpImple(op, l, r);

    switch (op) {
      case '+':
      case '-':
      case '*':
      case '/':
        if (rawl instanceof Int && rawr instanceof Int) {
          ret = new Int(ret);
        }
    }
    return ret;
  }

  protected *execCast(expr: UniCast, scope: Scope): any {
    const value = yield* this.execExpr(expr.value, scope);
    return this._execCast(expr.type, value);
  }
  // tslint:disable-next-line:function-name
  protected _execCast(type: string, value: any): any {
    // protected Object _execCast(String type, Object value){
    if (value == null || Array.isArray(value)) {
      return value;
    }

    if (type === 'int') {
      return new Int(value);
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

  protected execIntLiteral(expr: UniIntLiteral, scope: Scope): any {
    return new Int(expr.value);
  }
}
