export class SyntaxErrorData {
  constructor(readonly line: number, readonly charPositionInLine: number, readonly msg: string) {}
  getMsg = () => `line ${this.line}:${this.charPositionInLine} ${this.msg}`;
}
