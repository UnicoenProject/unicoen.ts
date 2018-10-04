// tslint:disable:max-classes-per-file
import { UniExpr } from '../node/UniExpr';
import { UniFunctionDec } from '../node/UniFunctionDec';
import { File } from './File';
import { RuntimeException, UniRuntimeError } from './RuntimeException';

enum Type {
  GLOBAL,
  OBJECT,
  LOCAL,
}

class Address {
  constructor(
    public codeAddress: number,
    public staticAddress: number,
    public heapAddress: number,
    public stackAddress: number,
  ) {}
}

interface VariableNotFoundListener {
  variableNotFound(key: string, setDefault: Consumer<any>);
}

interface Consumer<T> {
  accept(t: T): void;
}

class ValueSetter implements Consumer<any> {
  hasValue: boolean;
  value: any;

  accept(value: any): void {
    this.hasValue = true;
    this.value = value;
  }
}

export class Scope {
  static createGlobal(): Scope {
    return new Scope(Type.GLOBAL, null);
  }

  static createObject(global: Scope): Scope {
    console.assert(global != null);
    console.assert(global.type === Type.GLOBAL); // 匿名クラスは未対応
    return new Scope(Type.OBJECT, global);
  }

  static createLocal(parent: Scope): Scope {
    console.assert(parent != null);
    return new Scope(Type.LOCAL, parent);
  }

  private static assertNotUnicoen(value: any): void {
    if (value instanceof UniExpr && !(value instanceof UniFunctionDec)) {
      throw new RuntimeException('Maybe programming miss!');
    }
  }
  name: string;
  depth: number;
  address: Address;
  type: Type;
  parent: Scope;
  global: Scope;
  children: Scope[] = [];
  readonly variableAddress: Map<string, number> = new Map();
  readonly variableTypes: Map<string, string> = new Map();
  readonly functionAddress: Map<string, number>;
  readonly mallocData: Map<number, number>;
  readonly objectOnMemory: Map<number, any>;
  readonly typeOnMemory: Map<number, string>;
  private listeners: VariableNotFoundListener[] = null;
  private tempAddressForListener: number = -1;

  private constructor(type: Type, parent: Scope) {
    this.parent = parent;
    this.type = type;
    if (parent === null) {
      this.depth = 0;
      this.name = 'GLOBAL';
      this.global = this;
      this.address = new Address(0, 10000, 20000, 50000);
      this.mallocData = new Map();
      this.objectOnMemory = new Map();
      this.typeOnMemory = new Map();
      this.functionAddress = new Map();
    } else {
      parent.children.push(this);
      this.depth = parent.depth + 1;
      this.name = parent.name;
      this.global = parent.global;
      this.address = parent.address;
      this.address.stackAddress++;
      this.mallocData = parent.mallocData;
      this.objectOnMemory = parent.objectOnMemory;
      this.typeOnMemory = parent.typeOnMemory;
      this.functionAddress = parent.functionAddress;
    }
  }

  setListener(listener: VariableNotFoundListener): void {
    if (this.listeners == null) {
      this.listeners = [];
    }
    this.listeners.push(listener);
  }

  hasType(key: string | number): boolean {
    try {
      this.getType(key);
      return true;
    } catch (err) {
      if (err instanceof UniRuntimeError) {
        return false;
      }
      throw err;
    }
  }

  isStructType(type: string): boolean {
    try {
      const offsets = this.get(type);
      return (offsets instanceof Map);
    } catch (err) {
      if (err instanceof UniRuntimeError) {
        return false;
      }
      throw err;
    }
  }

  hasValue(key: string): boolean {
    try {
      this.getValue(this.getAddress(key));
      return true;
    } catch (err) {
      if (err instanceof UniRuntimeError) {
        return false;
      }
      throw err;
    }
  }

  get(key: string): any {
    return this.getValue(this.getAddress(key));
  }

  getValue(key: number): any {
    return this.getValueImple(key, this.name);
  }

  getStr(name: string): string {
    const addr: number = this.getAddress(name);
    const buf: number[] = [];
    let i: number = 0;
    for (; i < 10000; ++i) {
      const b: number = this.getValue(addr + i);
      if (b === 0) {
        break;
      }
      buf.push(b);
    }
    // tslint:disable-next-line:prefer-array-literal
    const array = new Array<number>(i);
    for (let k: number = 0; k < i; ++k) {
      array[k] = /* get */ buf[k];
    }
    const result: string = String.fromCharCode.apply(null, array);
    return result;
  }

  getType(key: string | number): string {
    const typedef = (type: string) => {
      if (this.hasValue(type)) {
        const offset = this.get(type);
        if (offset instanceof Map) {
          return type;
        } else {
          return offset;
        }
      }
      return type;
    };
    if (typeof key === 'string') {
      if (this.variableTypes.has(key)) {
        return typedef(this.variableTypes.get(key));
      } else if (this.parent != null) {
        return typedef(this.parent.getType(key));
      }
    }
    if (typeof key === 'number') {
      if (this.typeOnMemory.has(key)) {
        return typedef(this.typeOnMemory.get(key));
      } else if (this.parent != null) {
        return typedef(this.parent.getType(key));
      }
    }

    throw new UniRuntimeError(`variable ${key} is not defined.`);
  }

  getAddress(key: string): number {
    if (this.variableAddress.has(key)) {
      return this.variableAddress.get(key);
    } else if (this.parent != null) {
      return this.parent.getAddress(key);
    } else if (this.listeners != null) {
      const setter = new ValueSetter();
      for (const listener of this.listeners) {
        listener.variableNotFound(key, setter);
        if (setter.hasValue) {
          this.objectOnMemory.set(this.tempAddressForListener, setter.value);
          return -1;
        }
      }
    }
    throw new UniRuntimeError(`variable ${key} is not defined.`);
  }

  setMallocSize(address: number, size: number): void {
    this.mallocData.set(address, size);
  }

  isMallocArea(address: number): boolean {
    return this.mallocData.has(address);
  }

  getMallocSize(address: number): number {
    return this.mallocData.get(address);
  }

  removeOnMemory(address: number, size: number): boolean {
    let result = true;
    for (let i = 0; i < size; ++i) {
      result = this.objectOnMemory.delete(address + i) != null;
      result = this.typeOnMemory.delete(address + i) != null;
    }
    return result;
  }

  setHeap(value: any, type: string): number {
    return this.setAreaImple(value, type, this.address, 'heapAddress');
  }

  setStatic(value: any, type: string): number {
    return this.setAreaImple(value, type, this.address, 'staticAddress');
  }

  setCode(value: any, type: string): number {
    return this.setAreaImple(value, type, this.address, 'codeAddress');
  }

  setSystemVariable(type: string, name: string, value: any): number {
    Scope.assertNotUnicoen(value);
    this.variableTypes.set(name, type);
    this.variableAddress.set(name, this.address.codeAddress);
    this.objectOnMemory.set(this.address.codeAddress, value);
    this.typeOnMemory.set(this.address.codeAddress, type);
    return this.address.codeAddress++;
  }

  setStruct(key: string, value: any, type: string) {
    // 構造体
    if (this.isStructType(type)) {
      // [offset, type]のタプル
      const offsets: Map<string, number> = this.get(type);
      let arr: any[] = null;
      if (value instanceof Array) {
        // 初期化リストあり
        arr = value;
        for (let i = arr.length; i < offsets.size; ++i) {
          arr.push(0);
        }
      } else if (typeof value === 'number') {
        // コピー
        arr = [];
        for (const valueofOffset of offsets.values()) {
          let addr: number = value;
          addr += valueofOffset[0];
          const v: any = this.getValue(addr);
          arr.push(v);
        }
      } else {
        // 宣言のみ
        arr = [];
        for (let i = 0; i < offsets.size; ++i) {
          arr.push(null);
        }
      }
      let k = 0;
      for (const [fieldName, valueofOffset] of offsets) {
        const offset = valueofOffset[0];
        const fieldType = valueofOffset[1];
        const v = arr[k++];
        Scope.assertNotUnicoen(value);
        if (this.isStructType(fieldType)) {
          this.typeOnMemory.set(this.address.stackAddress, fieldType);
          // JSは関数の引数は左から評価される。
          this.objectOnMemory.set(this.address.stackAddress, ++this.address.stackAddress);
          this.setStruct(fieldName, v, fieldType);
        } else if (v instanceof Array) {
          this.setArray(fieldName, v, type, []);
        } else {
          this.typeOnMemory.set(this.address.stackAddress, fieldType);
          this.objectOnMemory.set(this.address.stackAddress++, v);
        }
      }
    }
  }

  /** 現在のスコープに新しい変数を定義し、代入します */
  setTop(key: string, value: any, type: string): void {
    Scope.assertNotUnicoen(value);
    if (this.isStructType(type)) {
      // 構造体
      this.setPrimitive(key, this.address.stackAddress + 1, type);
      this.setStruct(key, value, type);
    } else if (value instanceof Array) {
      // 配列の場合
      const arr = value;
      if (type === 'char*') {
        // 文字列の場合(char*の場合, char[], char[10]の場合は↓)
        arr.push(0);
        this.setPrimitive(key, this.address.codeAddress, type);
        this.setStringOnCode(arr);
      } else {
        const dim: number[] = [];
        let ar = arr;
        while (Array.isArray(ar)) {
          dim.push(ar.length);
          if (0 < ar.length) {
            ar = ar[0];
          }
        }
        const address = dim.length <= 1 ? this.address.stackAddress : this.address.codeAddress + 1;
        this.setPrimitiveOnCode(key, address, type + '[' + dim.join('][') + ']');
        this.setArray(key, arr, type, dim.slice(1));
      }
    } else if (type === 'FUNCTION' || value instanceof UniFunctionDec) {
      this.setPrimitiveOnCode(key, value, type);
    } else {
      // 組み込み型の場合
      this.setPrimitive(key, value, type);
    }
  }

  /** 指定したメモリアドレスに値を書き込みます */
  set(addr: number, value: any): void {
    Scope.assertNotUnicoen(value);
    if (this.objectOnMemory.has(addr)) {
      const type: string = this.getType(addr);
      if (this.isStructType(type)) {
        const offsets: Map<string, number> = this.get(type);
        for (const valueOfOffset of offsets.values()) {
          // srcとdstはどちらもstructを想定
          const dst = (this.getValue(addr) as number) + valueOfOffset[0];
          const src = (value as number) + valueOfOffset[0];
          const v = this.getValue(src);
          this.objectOnMemory.set(dst, v);
        }
      } else {
        this.objectOnMemory.set(addr, value);
      }
      return;
    }
    if (this.parent != null) {
      this.parent.set(addr, value);
      return;
    }
    throw new UniRuntimeError(`address ${addr} is not declared.`);
  }

  removeChild(scope: Scope): boolean {
    return this.children.remove(scope);
  }

  getNextName(funcName: string): string {
    if (!this.hasName(funcName)) {
      return funcName;
    }
    for (let i = 2; ; ++i) {
      const indexName: string = funcName + '.' + i;
      if (!this.hasName(indexName)) {
        return indexName;
      }
    }
  }

  closeAllFiles() {
    for (const value of this.objectOnMemory.values()) {
      if (value instanceof File) {
        value.fclose();
      }
    }
  }

  private getValueImple(key: number, stackName: string): any {
    if (this.objectOnMemory.has(key)) {
      const variable = this.objectOnMemory.get(key);
      if (stackName === this.name || this.type === Type.GLOBAL) {
        if (key === this.tempAddressForListener) {
          this.objectOnMemory.delete(this.tempAddressForListener);
        }
        return variable;
      }
    }
    if (this.parent != null) {
      return this.parent.getValue(key);
    } else {
      throw new UniRuntimeError(`variable ${key} is not defined.`);
    }
  }

  private setAreaImple(value: any, type: string, addr: Address, member: string): number {
    Scope.assertNotUnicoen(value);
    this.objectOnMemory.set(addr[member], value);
    this.typeOnMemory.set(addr[member], type);
    return addr[member]++;
  }

  private setArray(key: string, value: any[], type: string, dims: number[]): void {
    Scope.assertNotUnicoen(value);
    for (const v of value) {
      if (v instanceof Array) {
        this.setAreaImple(this.address.stackAddress, type + '[' + dims.join('][') + ']', this.address, 'codeAddress');
        this.setArray(key, v, type, dims.slice(1));
      } else {
        this.setAreaImple(v, type, this.address, 'stackAddress');
      }
    }
  }

  private setStringOnCode(value: any[]): void {
    Scope.assertNotUnicoen(value);
    for (const v of value) {
      if (v instanceof Array) {
        this.setStringOnCode(v);
      } else {
        this.typeOnMemory.set(this.address.codeAddress, 'char');
        this.objectOnMemory.set(this.address.codeAddress++, v);
      }
    }
  }

  private setImple(key: string, value: any, type: string, address: Address, member: string): void {
    Scope.assertNotUnicoen(value);
    this.variableTypes.set(key, type);
    this.variableAddress.set(key, address[member]);
    this.objectOnMemory.set(address[member], value);
    this.typeOnMemory.set(address[member], type);
    ++address[member];
  }

  private setPrimitive(key: string, value: any, type: string): void {
    this.setImple(key, value, type, this.address, 'stackAddress');
  }

  private setPrimitiveOnCode(key: string, value: any, type: string): void {
    this.setImple(key, value, type, this.address, 'codeAddress');
  }

  private setPrimitiveOnHeap(key: string, value: any, type: string): void {
    this.setImple(key, value, type, this.address, 'heapAddress');
  }

  private setPrimitiveOnStatic(key: string, value: any, type: string): void {
    this.setImple(key, value, type, this.address, 'staticAddress');
  }

  private hasName(funcName: string): boolean {
    if (this.name === funcName) {
      return true;
    } else if (this.parent != null) {
      return this.parent.hasName(funcName);
    }
    return false;
  }
}
