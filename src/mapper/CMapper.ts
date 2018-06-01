import UniProgram from '../node/UniProgram';
import UniParam from '../node/UniParam';
import UniBlock from '../node/UniBlock';
import UniFunctionDec from '../node/UniFunctionDec';
import UniStringLiteral from '../node/UniStringLiteral';
import UniIntLiteral from '../node/UniIntLiteral';
import UniNumberLiteral from '../node/UniNumberLiteral';
import UniReturn from '../node/UniReturn';
import UniStatement from '../node/UniStatement';

import { InputStream, CommonTokenStream, ParserRuleContext } from 'antlr4';
import { RuleContext }from 'antlr4/RuleContext';
import { TerminalNode, RuleNode, ParseTree }from 'antlr4/tree/Tree';
import { CLexer } from './CLexer';
import { CParser } from './CParser';
import { CVisitor } from './CVisitor';

export default class CMapper extends CVisitor {

  private isDebugMode:boolean = false;
  private parser:CParser;
  
  setIsDebugMode(isDebugMode:boolean) {
    this.isDebugMode = isDebugMode;
  }

  parse(code) {
    const chars = new InputStream(code);
    const [tree, parser] = this.parseCore(chars);
    return this.visit(tree);
  }

  getRawTree(code) {
    const chars = new InputStream(code);
    return this.parseCore(chars);
  }

  parseCore(chars) {
    const lexer = new CLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    this.parser = new CParser(tokens);
    this.parser.buildParseTrees = true;
    const tree = this.parser.compilationUnit();
    return [tree, this.parser];
  }

  visitChildren(node:RuleNode) {
    const n = node.getChildCount();
    const list:any[] = [];
    for (let i = 0; i < n;++i) {
      const c = node.getChild(i);
      const childResult = this.visit(c);
      list.push(childResult);
    }
    const flatten = this.flatten(list);
    return flatten;
  }

  public visit(node:ParseTree) {
    if (!this.isDebugMode) {
      return node.accept(this);
    }
    if (!this.isInstanceofRuleContext(node)) {
      return node.accept(this);
    }
    const ruleName = this.getRuleName(node);
    console.log('*** visit Rule : ' + ruleName + ' ***');
    const ret = node.accept(this);
    console.log('returned: ' + ret);
    return ret;
  }

  isNonEmptyNode(node:ParseTree):boolean {
    if (node instanceof ParserRuleContext) {
      const n = node.getChildCount();
      if (n > 1) {
        return true;
      }
      // n === 1 && node.children.exists[isNonEmptyNode]
      return n === 1;
    } else {
      return true;
    }
  }

  visitTerminal(node:TerminalNode) {
    const text = node.getText();
    if (this.isDebugMode) {
      const _plus = 'visit TERMINAL : ' + text;
      console.log(_plus);
    }
    const symbol = node.getSymbol();
    const symbolName = this.getSymbolicName(symbol);
    if (symbolName === 'Constant') {
      const filterInt =  (value) => {
        if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
          return Number(value);
        return NaN;
      };
      const number = filterInt(text);
      if (isNaN(number)) {
        return new UniNumberLiteral(Number(text),null,null,null,null,null,null);
      }
      return new UniIntLiteral(number);
    }
    return text;
  }

  private flatten(obj:any) {
    if (Array.isArray(obj)) {
      if (obj.length === 1) {
        return this.flatten(obj[0]);
      }
      const ret = [];
      obj.forEach((it:any) => {
        ret.push(this.flatten(it));
      });
      return ret;
    }

    if (obj instanceof Map) {
      if (obj.size === 1) {
        return this.flatten(obj.get(obj.keys[0]));
      }
      const ret = new Map<any, any>();
      obj.forEach((value: any, key: any) => {
        ret.set(key, this.flatten(value));
      });
      return ret;
    }

    return obj;
  }

  // tslint:disable-next-line:prefer-array-literal
  public castToList<T>(obj:any):Array<T> {
    const temp = this.flatten(obj);
    const ret = [];
    if (temp instanceof Map) {
      const add = temp.has('add');
      temp.forEach((value: any, key: any) => {
        switch (key) {
          case 'add': {
            if (value instanceof Map) {
              ret.push(this.castTo<T>(value));
            } else if (Array.isArray(value)) {
              value.forEach((it:any) => {
                const t = this.castTo(it);
                if (t != null) {
                  ret.push(t);
                }
              });
            } else {
              ret.push(this.castToList(value));
            }
          } 
            break;
          default:
            if (!add) {
              ret.push(this.castToList(value));
            }
            break;
        }    
      });
    } else if (Array.isArray(temp)) {
      temp.forEach((it:any) => {
        ret.push(this.castToList(it));
      });
    } else {
      ret.push(this.castTo(it));
    }
    return ret;
  }
  
  public castTo<T>(obj:any):T {
    const v:T = null;
    return v;
  }

  visitCompilationUnit(node) {
    const [block, eof] = super.visitCompilationUnit(node);
    const program = new UniProgram(block);
    return program;
  }

  visitTranslationUnit(node) {
    const block: UniBlock = new UniBlock('global', []);
    if (Array.isArray(node.children)) {
      node.children.map(function (n) {
        const ruleName = this.getRuleName(n);
        const ret = this.visit(n);
        if (ruleName === 'externalDeclaration') {
          block.body.push(ret);
        } else if (ruleName === 'translationUnit') {
          block.merge(ret);
        }
      },                this);
    }
    return block;
  }

  visitDirectDeclarator(node) {
    let name: string = null;
    const modifiers: string[] = null;
    const returnType: string = null;
    let params: UniParam[] = null;
    const block: UniBlock = null;
    let marge:UniFunctionDec;
    if (Array.isArray(node.children)) {
      node.children.map(function (n) {
        const ruleName = this.getRuleName(n);
        const ret = this.visit(n);
        if (ruleName === 'directDeclarator') {
          marge = ret;
        } else if (ruleName === 'parameterTypeList') {
          params = ret;
        } else {
          const symbol = n.getSymbol();
          const symbolName = this.getSymbolicName(symbol);
          if (symbolName === 'Identifier') {
            name = ret;
          }
        }
      },                this);
    }
    const funcDec = new UniFunctionDec(name, modifiers, returnType, params, block);    
    if (marge) {
      funcDec.merge(marge);
    }
    return funcDec;
  }

  visitDeclarator(node) {
    const text:string = super.visitDeclaration(node);
    return text;
  }

  visitFunctionDefinition(node) {
    const name: string = null;
    const modifiers: string[] = [];
    let returnType: string = null;
    const params: UniParam[] = [];
    let block: UniBlock = null;
    let marge:UniFunctionDec;
    if (Array.isArray(node.children)) {
      node.children.map(function (n) {
        const ruleName = this.getRuleName(n);
        const ret = this.visit(n);
        if (ruleName === 'declarationSpecifiers') {
          returnType = ret;
        } else if (ruleName === 'declarator') {
          marge = ret;
        } else if (ruleName === 'compoundStatement') {
          block = ret;
        }
      },                this);
    }
    const funcDec = new UniFunctionDec(name, modifiers, returnType, params, block);
    if (marge) {
      funcDec.merge(marge);
    }
    funcDec.block.blockLabel = funcDec.name;
    return funcDec;
  }

  public visitCompoundStatement(node) {
    const map = {};
    let none = [];
    map['none'] = none;
    const body:UniStatement[] = [];
    map['body'] = body;

    const n = node.getChildCount();
    for (let i = 0; i < n;++i) {
      const c = node.getChild(i);
      if (this.isInstanceofRuleContext(c)) {
        if (c.invokingState === 1124) {
          body.push(this.visit(c));
        }else {
          none += this.visit(c);
        }
      } else {
        none += this.visit(c);
      }
    }
    const block = new UniBlock(null, body);
    return block;
  }
  visitJumpStatement(node) {
    const n = node.getChildCount();
    let list;
    for (let i = 0; i < n;++i) {
      const c = node.getChild(i);
      if (this.isInstanceofRuleContext(c)) {
        if (c.invokingState === 1234) {
          const ret = this.visit(c);
          return new UniReturn(ret);
        }else {
          list += this.visit(c);
        }
      } else {
        const symbol = c.getSymbol();
        if (this.getSymbolicName(symbol) === 'Return') {
          
        }else if (this.getSymbolicName(symbol) === 'Continue') {
        }else if (this.getSymbolicName(symbol) === 'Break') {
        }
      }
    }
    return list;
  }

  visitPrimaryExpression(node) {
    const ret = super.visitPrimaryExpression(node);
    return ret;
  }

  visitTypeSpecifier(node) {
    const type:string = super.visitTypeSpecifier(node);
    return type;
  }

  // public visitStringLiteral(ctx) {
  //   const target = ctx.children.find((child) => {
  //     if (child instanceof TerminalNode) {
  //       if (child.symbol.type === CParser.StringLiteral) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   });
  //   const text = this.visit(target);
  //   return new UniStringLiteral(text.substring(1, text.length - 1));
  // }
    
  getSymbolicName(symbol) {
    return this.parser.symbolicNames[symbol.type];
  }
  getRuleName(node) {
    return this.parser.ruleNames[node.ruleIndex];
  }
  private isInstanceofRuleContext(ctx) {
    return ctx instanceof RuleContext;
  }

}
