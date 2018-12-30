// tslint:disable:ban-types
import { CommonTokenStream, Parser, ParserRuleContext, RuleContext, Token } from 'antlr4ts';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { UniExpr } from '../../node/UniExpr';
import { UniNode } from '../../node/UniNode';
import { UniProgram } from '../../node/UniProgram';
import { UniStatement } from '../../node/UniStatement';
import { CodeLocation } from '../../node_helper/CodeLocation';
import { CodeRange } from '../../node_helper/CodeRange';
import { NodeComment } from './NodeComment';
import { SyntaxErrorData } from './SyntaxErrorData';
import { SyntaxErrorListener } from './SyntaxErrorListener';

export abstract class Mapper {
  protected isDebugMode: boolean = false;
  protected parser: Parser;
  protected comments: NodeComment[] = [];
  protected lastNode: UniNode;
  protected nextTokenIndex: number;
  protected stream: CommonTokenStream;

  setIsDebugMode(isDebugMode: boolean) {
    this.isDebugMode = isDebugMode;
  }

  preProcess(text: string): string {
    return text;
  }

  abstract parseToANTLRTree(code): ParserRuleContext;

  parseToUniTree(code: string): UniProgram {
    const antTree = this.parseToANTLRTree(code);
    const uniTree = this.makeUniTree(antTree, this.parser.inputStream as CommonTokenStream);
    return uniTree;
  }

  checkSyntaxError(code: string): SyntaxErrorData[] {
    const antTree = this.parseToANTLRTree(code);
    const errorListeners = this.parser.getErrorListeners();
    for (const errorListener of errorListeners) {
      if (errorListener instanceof SyntaxErrorListener) {
        return errorListener.getErrorMessages();
      }
    }
    return [];
  }

  makeUniTree(tree: ParserRuleContext, tokens: CommonTokenStream): UniProgram {
    this.comments = [];
    this.stream = tokens;
    this.lastNode = null;
    this.nextTokenIndex = 0;
    const ret = new UniProgram(this.visit(tree));
    ret.codeRange = ret.block.codeRange;

    if (this.lastNode !== null) {
      const count = this.stream.getTokens().length - 1;
      for (let i = this.nextTokenIndex; i < count; i++) {
        const hiddenToken = this.stream.getTokens()[i]; // Includes skipped tokens (maybe)
        if (this.lastNode.comments === null) {
          this.lastNode.comments = [];
        }
        this.lastNode.comments.push(hiddenToken.text);
      }
    }
    return ret;
  }

  setNodeRangeAndComment(tree: ParseTree, ret: any) {
    const node = Array.isArray(ret) && ret.length === 1 ? ret[0] : ret;
    if (node instanceof UniNode) {
      if (tree instanceof ParserRuleContext) {
        const start = tree.start;
        const begin = new CodeLocation(start.charPositionInLine, start.line);
        const stop = tree.stop;
        const endPos = stop.charPositionInLine;
        const length = 1 + stop.stopIndex - stop.startIndex;
        const end = new CodeLocation(endPos + length, stop.line);
        node.codeRange = new CodeRange(begin, end);
      }
      let contents: string[] = [];
      for (let i = this.comments.length - 1; i >= 0 && this.comments[i].parent === tree; i--) {
        for (const content of contents) {
          this.comments[i].contents.push(content);
        }
        contents = this.comments[i].contents;
        this.comments.splice(i, 1);
      }
      if (contents.length > 0) {
        if (node.comments === null) {
          node.comments = contents;
        } else {
          node.comments = node.comments.concat(contents);
        }
      }
      this.lastNode = node;
    } else {
      for (let i = this.comments.length - 1; i >= 0 && this.comments[i].parent === tree; i--) {
        this.comments[i].parent = this.comments[i].parent.parent;
      }
      this.lastNode = null;
    }
  }

  visit(tree: ParseTree) {
    const accept = () => {
      const result = tree.accept(this);
      this.setNodeRangeAndComment(tree, result);
      return result;
    };
    if (!this.isDebugMode) {
      return accept();
    }
    if (!(tree instanceof RuleContext)) {
      return accept();
    }
    const ruleName = this.getRuleName(tree);
    console.log('*** visit Rule : ' + ruleName + ' ***');
    const ret = accept();
    console.log('returned: ' + ret);
    return ret;
  }

  visitChildren(node: RuleNode) {
    const n = node.childCount;
    const list: any[] = [];
    for (let i = 0; i < n; ++i) {
      const c = node.getChild(i);
      const childResult = this.visit(c);
      list.push(childResult);
    }
    const flatten = this.flatten(list);
    return flatten;
  }

  visitTerminal(node: TerminalNode) {
    if (this.isDebugMode) {
      console.log('visit TERMINAL : ' + node.text);
    }

    const token = node.symbol;
    if (token.type > 0) {
      const count = token.tokenIndex;
      const contents: string[] = [];
      let i = this.nextTokenIndex;
      for (; i < count; i++) {
        const hiddenToken = this.stream.getTokens()[i]; // Includes skipped tokens (maybe)
        if (
          this.lastNode !== null &&
          this.stream.getTokens()[this.nextTokenIndex - 1].line === hiddenToken.line
        ) {
          if (this.lastNode.comments === null) {
            this.lastNode.comments = [];
          }
          this.lastNode.comments.push(hiddenToken.text);
        } else {
          contents.push(hiddenToken.text);
        }
      }
      const count2 = this.stream.getTokens().length - 1;
      for (
        i = count + 1;
        i < count2 &&
        this.stream.getTokens()[i].channel === Token.HIDDEN_CHANNEL &&
        this.stream.getTokens()[count].line === this.stream.getTokens()[i].line;
        i++
      ) {
        contents.push(this.stream.getTokens()[i].text);
      }
      if (contents.length > 0) {
        this.comments.push(new NodeComment(contents, node.parent));
      }
      this.nextTokenIndex = i;
    }
    return token.text;
  }

  visitErrorNode(node: ErrorNode): UniNode {
    return null;
  }

  isNonEmptyNode(node: ParseTree): boolean {
    if (node instanceof ParserRuleContext) {
      const n = node.childCount;
      if (n > 1) {
        return true;
      }
      // n === 1 && node.children.exists[isNonEmptyNode]
      return n === 1;
    } else {
      return true;
    }
  }

  getRuleName(node) {
    return this.parser.ruleNames[node.ruleIndex];
  }

  castToList<T extends Function | String>(obj: any, clazz: T): T[] {
    const temp = this.flatten(obj);
    const ret = [];
    if (temp instanceof Map) {
      const add = temp.has('add');
      temp.forEach((value: any, key: any) => {
        switch (key) {
          case 'add':
            {
              if (value instanceof Map) {
                ret.push(this.castTo<T>(value, clazz));
              } else if (Array.isArray(value)) {
                value.forEach((it: any) => {
                  const t = this.castTo(it, clazz);
                  if (t != null) {
                    ret.push(t);
                  }
                });
              } else {
                ret.push(this.castToList(value, clazz));
              }
            }
            break;
          default:
            if (!add) {
              ret.push(this.castToList(value, clazz));
            }
            break;
        }
      });
    } else if (Array.isArray(temp)) {
      temp.forEach((it: any) => {
        ret.push(this.castToList(it, clazz));
      });
    } else {
      ret.push(this.castTo(temp, clazz));
    }
    return ret;
  }

  castTo<T extends Function | String>(obj: any, clazz: any) {
    const temp = this.flatten(obj);
    const instance = new clazz();
    const fields = instance.fields;
    const fieldsName = [];
    for (const it in instance) {
      if (it) {
        fieldsName.push(it);
      }
    }
    if (temp instanceof Map) {
      if (clazz === String) {
        let builder = '';
        const hasAdd = temp.has('add');
        temp.forEach((value: any, key: any) => {
          switch (key) {
            case 'add':
              {
                builder += this.castTo<T>(value, clazz);
              }
              break;
            default:
              {
                if (!hasAdd) {
                  builder += this.castTo<T>(value, clazz);
                }
              }
              break;
          }
        });
        return builder.length > 0 ? builder : null;
      }
      temp.forEach((value: any, key: any) => {
        if (fieldsName.includes(key)) {
          // tslint:disable-next-line:ban-types
          const field: Function = fields.get(key);
          if (Array.isArray(instance[key])) {
            const list = this.flatten(this.castToList(value, field));
            if (!Array.isArray(list)) {
              instance[key] = [list];
            } else {
              instance[key] = list;
            }
          } else if (value.length === 0 && (field === UniExpr || field === UniStatement)) {
            instance[key] = null;
          } else {
            instance[key] = this.castTo(value, field);
          }
        }
      });
      return instance;
    }
    if (Array.isArray(temp)) {
      if (clazz === String) {
        let builder = '';
        temp.forEach((it: any) => {
          builder += this.castTo(it, clazz);
        });
        return builder.length > 0 ? builder : null;
      }
      const first = temp.find((it) => {
        return it instanceof clazz;
      });
      if (first === null) {
        try {
          return instance;
        } catch (e) {
          return null;
        }
      } else {
        return this.castTo<T>(first, clazz);
      }
    }
    if (temp != null) {
      return temp as T;
    }
    return instance;
  }

  protected flatten(obj: any) {
    if (Array.isArray(obj)) {
      if (obj.length === 1) {
        return this.flatten(obj[0]);
      }
      const ret = [];
      obj.forEach((it: any) => {
        ret.push(this.flatten(it));
      });
      return ret;
    }

    if (obj instanceof Map) {
      if (obj.size === 1) {
        for (const value of obj.values()) {
          return this.flatten(value);
        }
      }
      const ret = new Map<any, any>();
      obj.forEach((value: any, key: any) => {
        ret.set(key, this.flatten(value));
      });
      return ret;
    }

    return obj;
  }
}
