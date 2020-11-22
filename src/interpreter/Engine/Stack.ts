import { RuntimeException } from './RuntimeException';
import { Variable } from './Variable';

export class Stack {
  private variables: Variable[] = [];
  // 引数(variables)あり版も必要
  constructor(readonly name: string, readonly address: number) {}

  addVariable(variable: Variable): void;
  addVariable(type: string, name: string, value: any, depth: any): void;

  addVariable(arg0: string | Variable, name?: string, value?: any, depth?: any): void {
    if (arg0 instanceof Variable) {
      this.variables.push(arg0 as Variable);
      return;
    } else if (name === undefined || value === undefined || depth === undefined) {
      throw new RuntimeException('args error');
    }
    const type = arg0 as string;
    let lastAddress = this.address;
    if (this.variables.length !== 0) {
      const lastVar: Variable = this.variables[this.variables.length - 1];
      lastAddress = lastVar.address;
      lastAddress += lastVar.getByteSize();
    }
    const variable: Variable = new Variable(type, name, value, lastAddress, depth);
    this.variables.push(variable);
  }

  updateVariable(name: string, value: any) {
    for (let i = this.variables.length - 1; 0 <= i; --i) {
      const varInArray: Variable = this.variables[i]; // 内側のスコープから探すため逆順に探索
      if (varInArray.hasValue(name)) {
        varInArray.setValue(name, value);
        break;
      }
    }
  }

  removeVariables(depth: number): void {
    this.variables = this.variables.filter((v, i) => {
      return !(depth <= v.depth);
    });
  }

  getVariables(): Variable[] {
    return this.variables;
  }

  getByteSize(): number {
    let sum = 0;
    for (const variable of this.variables) {
      sum += variable.getByteSize();
    }
    return sum;
  }

  toString(): string {
    return (
      'Stack [name=' +
      this.name +
      ', variables=' +
      this.variables +
      ', address=' +
      this.address +
      ']'
    );
  }
}
