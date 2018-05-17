import UniProgram from '../node/UniProgram';
import UniParam from '../node/UniParam';
import UniBlock from '../node/UniBlock';
import UniFunctionDec from '../node/UniFunctionDec';
import UniStringLiteral from '../node/UniStringLiteral';
import UniNumberLiteral from '../node/UniNumberLiteral';
import UniReturn from '../node/UniReturn';
import UniStatement from '../node/UniStatement';

const antlr4 = require('antlr4');
const CLexer = require('./CLexer');
const CParser = require('./CParser');
const CVisitor = require('./CVisitor');
const antlr4tree = require('antlr4/tree/Tree.js');
const RuleContext = require('antlr4/RuleContext');

export default class CMapper extends CVisitor.CVisitor {

  constructor(isDebugMode) {
    super();
    this._isDebugMode = isDebugMode;
  }

  parse(code) {
    const chars = new antlr4.InputStream(code);
    const [tree, parser] = this.parseCore(chars);
    return this.visit(tree);
  }

  getRawTree(code) {
    const chars = new antlr4.InputStream(code);
    return this.parseCore(chars);
  }

  parseCore(chars) {
    const lexer = new CLexer.CLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    this.parser = new CParser.CParser(tokens);
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
    return ctx instanceof RuleContext.RuleContext;
  }
  public visit(node) {
    if (!this._isDebugMode) {
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
    if (this._isDebugMode) {
      const _plus = 'visit TERMINAL : ' + text;
      console.log(_plus);
    }
    const symbol = node.getSymbol();
    if (this.getSymbolicName(symbol) === 'Constant') {
      return new UniNumberLiteral(Number(text),null,null,null,null,null,null);
    }
    return text;
  }

  visitTranslationUnit(node) {
    const block = super.visitTranslationUnit(node);
    const program = new UniProgram(block);
    return program;
  }
  visitDeclarator(node) {
    const text:string = super.visitDeclaration(node);
    return text;
  }

  visitFunctionDefinition(node) {
    let name: string = null;
    const modifiers: string[] = null;
    let returnType: string = null;
    const params: UniParam[] = null;
    let block: UniBlock = null;
    if (Array.isArray(node.children)) {
      node.children.map(function (n) {
        const ruleName = this.getRuleName(n);
        const ret = this.visit(n);
        if (ruleName === 'declarationSpecifiers') {
          returnType = ret;
        } else if (ruleName === 'declarator') {
          name = ret;
        } else if (ruleName === 'compoundStatement') {
          block = ret;
        }
      },                this);
    }
    const funcDec = new UniFunctionDec(name, modifiers, returnType, params, block);
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
  //     if (child instanceof antlr4tree.TerminalNode) {
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
// exports.CMapper = CMapper;
