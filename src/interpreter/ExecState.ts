import { UniNode } from '../node/UniNode';
import { UniVariableDec } from '../node/UniVariableDec';
import { UniRuntimeError } from './RuntimeException';
import { Scope } from './Scope';
import { Stack } from './Stack';
import { Variable } from './Variable';

export class ExecState {
  private currentValue: any;
  private currentExpr: UniNode;
  private nextExpr: UniNode;
  private stacks: Stack[] = [];
  private readonly stackOffset: number = 0x10000;
  private readonly global: Scope = null;

  constructor(global?: Scope) {
    if (global !== undefined) {
      this.global = global;
    }
  }

  make(): ExecState {
    this.stacks = [];
    return this.makeImple(this.global);
  }

  addVariable(stackName: string, variable: Variable): void;
  addVariable(stackName: string, decVar: UniVariableDec, value: any, depth: number): void;

  addVariable(
    stackName: string,
    param2: Variable | UniVariableDec,
    value?: any,
    depth?: number,
  ): void {
    if (param2 instanceof Variable) {
      const variable: Variable = param2;
      for (let i = this.stacks.length - 1; 0 <= i; --i) {
        const stack: Stack = this.stacks[i];
        if (stack.name === stackName) {
          stack.addVariable(variable);
          break;
        }
      }
    } else if (param2 instanceof UniVariableDec && value !== undefined && depth !== undefined) {
      const decVar: UniVariableDec = param2;
      for (let i = this.stacks.length - 1; 0 <= i; --i) {
        const stack = this.stacks[i];
        if (stack.name === stackName) {
          for (const v of decVar.variables) {
            stack.addVariable(decVar.type, v.name, value, depth);
          }
          break;
        }
      }
    }
  }

  // 引数(variables)あり版も必要
  addStack(nameArg: string): string {
    let name = nameArg;
    if (this.stacks.isEmpty()) {
      const stack: Stack = new Stack(name, this.stackOffset);
      this.stacks.push(stack);
    } else {
      const lastStack: Stack = this.stacks[this.stacks.length - 1];
      let lastAddress = lastStack.address;
      lastAddress += lastStack.getByteSize();
      if (this.hasStack(name)) {
        for (let i = 2; ; ++i) {
          const indexName: string = name + '.' + i;
          if (!this.hasStack(indexName)) {
            name = indexName;
            break;
          }
        }
      }
      const stack = new Stack(name, lastAddress);
      this.stacks.push(stack);
    }
    return name;
  }

  popStack(): void {
    this.stacks.pop();
  }

  // 更新
  updateVariable(stackName: string, varName: string, value: any) {
    for (let i = this.stacks.length - 1; 0 <= i; --i) {
      const stack: Stack = this.stacks[i];
      if (stack.name === stackName) {
        stack.updateVariable(varName, value);
        break;
      }
    }
  }

  removeVariables(stackName: string, depth: number) {
    if (stackName === 'main' && depth < 2) {
      return;
    }
    for (let i = this.stacks.length - 1; 0 <= i; --i) {
      const stack = this.stacks[i];
      if (stack.name === stackName) {
        stack.removeVariables(depth);
        break;
      }
    }
  }

  getCurrentValue(): any {
    return this.currentValue;
  }

  setCurrenValue(value: any) {
    this.currentValue = value;
  }

  getCurrentExpr(): UniNode {
    return this.currentExpr;
  }

  setCurrentExpr(expr: UniNode) {
    this.currentExpr = expr;
  }

  getNextExpr(): UniNode {
    return this.nextExpr;
  }

  setNextExpr(expr: UniNode) {
    this.nextExpr = expr;
  }

  getStacks(): Stack[] {
    return this.stacks;
  }

  getByteSize(): number {
    let sum = 0;
    for (const stack of this.stacks) {
      sum += stack.getByteSize();
    }
    return sum;
  }

  private makeImple(scope: Scope): ExecState {
    if (!this.hasStack(scope.name)) {
      this.addStack(scope.name);
      if (scope.name === 'GLOBAL') {
        for (let i = 10000; i < 20000; ++i) {
          if (scope.typeOnMemory.has(i)) {
            const type: string = scope.typeOnMemory.get(i);
            if (type === 'FUNCTION') {
              continue;
            }
            const value: any = scope.objectOnMemory.get(i);
            const variable = new Variable(type, 'Static:' + i, value, i, scope.depth);
            this.addVariable(scope.name, variable);
          }
        }
        for (let i = 20000; i < 50000; ++i) {
          if (scope.typeOnMemory.has(i)) {
            const type: string = scope.typeOnMemory.get(i);
            if (type === 'FUNCTION') {
              continue;
            }
            const value: any = scope.objectOnMemory.get(i);
            const variable = new Variable(type, 'Heap:' + i, value, i, scope.depth);
            this.addVariable(scope.name, variable);
          }
        }
      }
    }
    const varList: string[] = [];
    for (const key of scope.variableAddress.keys()) {
      varList.push(key);
    }
    for (const varName of varList) {
      const type: string = scope.variableTypes.get(varName);
      if (type === 'FUNCTION' || type === 'CLASS' || type === 'SYSTEM') {
        continue;
      }
      let address: number = scope.variableAddress.get(varName);
      let value: any = scope.objectOnMemory.get(address);
      if (value instanceof UniNode) {
        continue;
      }
      if (value instanceof Function) {
        continue;
      }
      // tslint:disable-next-line:no-bitwise
      if (0 <= type.indexOf('[') && 0 <= type.indexOf(']')) {
        const length = Number(type.substring(type.lastIndexOf('[') + 1, type.length - 1));
        const arrayList: any[] = [];
        for (let i = 0; i < length; ++i) {
          const arrValue = scope.objectOnMemory.get((value as number) + i);
          arrayList.push(arrValue);
        }
        address = value;
        value = arrayList;
      }
      const makeStructVariable = (structType: string, structAddr: any) => {
        const filedList: any[] = [];
        if (!scope.hasType(structType)) {
          return filedList;
        }
        const classKey = scope.getType(structType);
        if (classKey !== 'CLASS') {
          return filedList;
        }
        // class, struct
        const members: Map<string, number> = scope.get(structType);
        for (const [fieldName, offsetAndType] of members) {
          const offset = offsetAndType[0];
          const fieldType = offsetAndType[1];
          let fieldAddress = structAddr + offset;
          let fieldValue = scope.objectOnMemory.get(fieldAddress);
          const fieldValueAsStruct: any = makeStructVariable(fieldType, fieldValue);
          if (!fieldValueAsStruct.isEmpty()) {
            fieldAddress = fieldValue;
            fieldValue = fieldValueAsStruct;
          }
          const v = new Variable(fieldType, fieldName, fieldValue, fieldAddress, scope.depth);
          filedList.push(v);
        }
        return filedList;
      };
      const list = makeStructVariable(type, value);
      if (!list.isEmpty()) {
        value = list;
      }

      const variable = new Variable(type, varName, value, address, scope.depth);
      this.addVariable(scope.name, variable);
    }
    if (scope.children.length !== 0) {
      for (const child of scope.children) {
        this.makeImple(child);
      }
    }
    return this;
  }

  private hasStack(name: string): boolean {
    for (const stack of this.stacks) {
      if (stack.name === name) {
        return true;
      }
    }
    return false;
  }
}
