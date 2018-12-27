import { UniNode } from '../node/UniNode';
import { Engine } from './Engine/Engine';
import { ExecState } from './Engine/ExecState';
import { Mapper } from './mapper/Mapper';
import { SyntaxErrorData } from './mapper/SyntaxErrorData';

export abstract class Interpreter {
  constructor(protected readonly engine: Engine, protected readonly mapper: Mapper) {}
  setDebugMode(enable: boolean): void {
    this.engine.setDebugMode(enable);
  }
  getCurrentValue(): ExecState {
    return this.engine.getCurrentValue();
  }
  getCurrentExpr(): UniNode {
    return this.engine.getCurrentExpr();
  }
  getCurrentState(): ExecState {
    return this.engine.getCurrentState();
  }
  getStdout(): string {
    return this.engine.getStdout();
  }
  stdin(text: string): void {
    this.engine.stdin(text);
  }
  getIsWaitingForStdin(): boolean {
    return this.engine.getIsWaitingForStdin();
  }
  isStepExecutionRunning(): boolean {
    return this.engine.isStepExecutionRunning();
  }
  setFileList(filelist: Map<string, ArrayBuffer>): void {
    this.engine.setFileList(filelist);
  }
  preProcess(code: string): string {
    return code;
  }
  startStepExecution(code: string): ExecState {
    const preProcessedCode = this.preProcess(code);
    const tree = this.mapper.parseToUniTree(preProcessedCode);
    return this.engine.startStepExecution(tree);
  }
  stepExecute(): ExecState {
    return this.engine.stepExecute();
  }
  execute(code: string): any {
    const preProcessedCode = this.preProcess(code);
    const tree = this.mapper.parseToUniTree(preProcessedCode);
    return this.engine.execute(tree);
  }
  checkSyntaxError(code: string): SyntaxErrorData[] {
    return this.mapper.checkSyntaxError(code);
  }
}
