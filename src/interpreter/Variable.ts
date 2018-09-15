export class Variable {
  constructor(
    readonly type: string,
    readonly name: string,
    private value: any,
    readonly address: number,
    readonly depth: number,
  ) {
    this.setValue(value);
  }

  // 構造体や配列の場合はvalueそのままでなくArrayList<Variable> valuesなど

  getValue(): any {
    return this.value;
  }

  hasValue(name: string): boolean {
    if (this.name === name) {
      return true;
    }

    if (this.value instanceof Array) {
      const varArray: Variable[] = this.value;
      for (const varInArray of varArray) {
        if (varInArray.hasValue(this.name)) {
          return true;
        }
      }
      return false;
    }
  }

  setValue(value: any, name?: string): void {
    if (name !== undefined) {
      if (this.name === name) {
        this.value = value;
      } else {
        if (this.value instanceof Array) {
          const varArray: Variable[] = this.value;
          for (const varInArray of varArray) {
            if (varInArray.name === name) {
              varInArray.setValue(this.value, name);
              break;
            }
          }
        }
      }
    }
    if (value instanceof Array) {
      const varArray: any[] = value;
      const vars: Variable[] = [];
      for (let i = 0; i < varArray.length; ++i) {
        let lastAddress = this.address;
        if (vars.length !== 0) {
          const lastVar: Variable = vars[vars.length - 1];
          lastAddress = lastVar.address;
          lastAddress += lastVar.getByteSize();
        }
        const element: any = varArray[i];
        if (element instanceof Variable) {
          // 構造体の場合
          const tempvar = element as Variable;
          const varInArray = new Variable(
            tempvar.type,
            this.name + '.' + tempvar.name,
            tempvar.value,
            lastAddress,
            this.depth,
          );
          vars.push(varInArray);
        } else {
          // 配列の場合
          const baseType: string = this.type.substring(0, this.type.lastIndexOf('['));
          const varInArray = new Variable(
            baseType,
            this.name + '[' + i + ']',
            element,
            lastAddress,
            this.depth,
          );
          vars.push(varInArray);
        }
      }
      this.value = vars;
    } else {
      this.value = value;
    }
  }

  getByteSize(): number {
    if (this.value instanceof Array) {
      const vars: Variable[] = this.value;
      const size = vars.length;
      return vars[size - 1].getByteSize() * size;
    }
    // 処理系依存かもしれないが、リテラルのサイズ、構造体はメンバ変数のsize合計、配列の場合は型*size()などを考慮する必要がある。
    return 1; // CppEngine.sizeof(this.type);
  }

  toString(): string {
    return (
      'Variable [type=' +
      this.type +
      ', name=' +
      this.name +
      ', value=' +
      this.value +
      ', ' +
      'address=' +
      this.address +
      ', depth=' +
      this.depth +
      ']'
    );
  }
}
