import UniProgram from '../node/UniProgram';
import UniParam from '../node/UniParam';
import UniBlock from '../node/UniBlock';
import UniFunctionDec from '../node/UniFunctionDec';
import UniStringLiteral from '../node/UniStringLiteral';
import UniNumberLiteral from '../node/UniNumberLiteral';
import UniReturn from '../node/UniReturn';
import UniStatement from '../node/UniStatement';

import { InputStream, CommonTokenStream } from 'antlr4';
import { RuleContext }from 'antlr4/RuleContext';
import { TerminalNode }from 'antlr4/tree/Tree';
import { CLexer } from './CLexer';
import { CParser } from './CParser';
import { CVisitor } from './CVisitor';
import UniIntLiteral from '../node/UniIntLiteral';

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
  getSymbolicName(symbol) {
    return this.parser.symbolicNames[symbol.type];
  }
  getRuleName(node) {
    return this.parser.ruleNames[node.ruleIndex];
  }
  private isInstanceofRuleContext(ctx) {
    return ctx instanceof RuleContext;
  }
  public visit(node) {
    if (!this.isDebugMode) {
      return node.accept(this);
    }
    if (!this.isInstanceofRuleContext(node)) {
      return node.accept(this);
    }
    // if (Array.isArray(node)) {
    //   return node.map(function (element) {
    //     return this.visit(element);
    //   },              this);
    // }
    const ruleName = this.getRuleName(node);
    console.log('*** visit Rule : ' + ruleName + ' ***');
    const ret = node.accept(this);
    console.log('returned: ' + ret);
    return ret;
  }

  visitChildren(node) {
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

  visitTerminal(node) {
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

  private flatten(array) {
    if (!Array.isArray(array)) {
      return array;
    }
    if (array.length === 1) {
      return array[0];
    }
    return array.reduce((a, c) => {
      if (Array.isArray(c)) {
        return a.concat(this.flatten(c));
      }
      return a.concat(c);
    },                  []);
  }
}
