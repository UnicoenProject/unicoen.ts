import { ParseTree } from 'antlr4ts/tree/ParseTree';

export class NodeComment {
  constructor(readonly contents: string[], public parent: ParseTree) {}
}
