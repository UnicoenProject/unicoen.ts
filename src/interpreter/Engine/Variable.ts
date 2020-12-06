import { CPP14Engine } from '../CPP14/CPP14Engine';

export class Variable {
  static sizeof: (type: string) => number;
  constructor(
    readonly type: string,
    readonly name: string, // p1.x
    private value: any,
    readonly address: number,
    readonly depth: number,
    readonly parentName?: string,
  ) {
    this.setValue(value);
  }

  // 構造体や配列の場合はvalueそのままでなくArrayList<Variable> valuesなど

  getName(): string {
    return this.parentName ? this.parentName + '.' + this.name : this.name;
  }

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
        const parentName = this.parentName ? this.parentName + '.' : '';
        if (element instanceof Variable) {
          if (element.type != null) {
            // 構造体の場合
            const tempvar = element as Variable;
            const varInArray = new Variable(
              tempvar.type,
              tempvar.name,
              tempvar.value,
              lastAddress,
              this.depth,
              parentName + this.name,
            );
            vars.push(varInArray);
          } else {
            // 多次元配列の場合
            const baseType: string = this.type.substring(0, this.type.indexOf('['));
            const suffix: string = this.type.substring(this.type.indexOf(']') + 1);
            const varInArray = new Variable(
              baseType + suffix,
              this.name + '[' + i + ']',
              element.value,
              element.address,
              this.depth,
            );
            vars.push(varInArray);
          }
        } else {
          // 1次元配列配列の場合
          const baseType: string = this.type.substring(0, this.type.indexOf('['));
          const suffix: string = this.type.substring(this.type.indexOf(']') + 1);
          const varInArray = new Variable(
            baseType + suffix,
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
    return Variable.sizeof(this.type);
  }

  toString(): string {
    return (
      'Variable [type=' +
      this.type +
      ', name=' +
      this.getName() +
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
