// tslint:disable
import {
  ANTLRInputStream,
  CommonTokenStream,
  ParserRuleContext,
  RuleContext,
  Token,
} from 'antlr4ts';

import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { Python3Lexer } from './Python3Lexer';
import { Python3Parser } from './Python3Parser';
import { Python3Visitor } from './Python3Visitor';

import {
  TranslationunitContext,
  File_inputContext,
  StmtsContext,
  Simple_stmtContext,
  Expr_stmtContext,
  Expr_stmt_rightContext,
  Testlist_star_expr_arrayContext,
  Testlist_star_exprContext,
  Break_stmtContext,
  Continue_stmtContext,
  Return_stmtContext,
  If_stmtContext,
  While_stmtContext,
  For_stmtContext,
  SuiteContext,
  Or_testContext,
  And_testContext,
  Not_testContext,
  ComparisonContext,
  Star_exprContext,
  ExprContext,
  Xor_exprContext,
  And_exprContext,
  Shift_exprContext,
  Arith_exprContext,
  TermContext,
  FactorContext,
  PowerContext,
  Atom_exprContext,
  ArrayContext,
  IdentContext,
  BoolContext,
  Testlist_compContext,
  TrailerContext,
  Method_call_of_method_returnContext,
  Method_call_no_argContext,
  Method_callContext,
  Array_accessContext,
  Field_accessContext,
  Testlist_arrayContext,
  TestlistContext,
  ArglistContext,
  IntegerContext,
  FloatContext,
  ImaginaryContext,
} from './Python3Parser';

import { CodeLocation } from '../../node_helper/CodeLocation';
import { CodeRange } from '../../node_helper/CodeRange';
import { UniNode } from '../../node/UniNode';
import { UniParam } from '../../node/UniParam';
import { UniEnhancedFor } from '../../node/UniEnhancedFor';
import { UniExpr } from '../../node/UniExpr';
import { UniArray } from '../../node/UniArray';
import { UniNumberLiteral } from '../../node/UniNumberLiteral';
import { UniBinOp } from '../../node/UniBinOp';
import { UniBlock } from '../../node/UniBlock';
import { UniBoolLiteral } from '../../node/UniBoolLiteral';
import { UniBreak } from '../../node/UniBreak';
import { UniCharacterLiteral } from '../../node/UniCharacterLiteral';
import { UniCast } from '../../node/UniCast';
import { UniContinue } from '../../node/UniContinue';
import { UniClassDec } from '../../node/UniClassDec';
import { UniDecralation } from '../../node/UniDecralation';
import { UniDoubleLiteral } from '../../node/UniDoubleLiteral';
import { UniDoWhile } from '../../node/UniDoWhile';
import { UniEmptyStatement } from '../../node/UniEmptyStatement';
import { UniFunctionDec } from '../../node/UniFunctionDec';
import { UniFor } from '../../node/UniFor';
import { UniIdent } from '../../node/UniIdent';
import { UniIf } from '../../node/UniIf';
import { UniImportDec } from '../../node/UniImportDec';
import { UniIntLiteral } from '../../node/UniIntLiteral';
import { UniMethodCall } from '../../node/UniMethodCall';
import { UniNew } from '../../node/UniNew';
import { UniNewArray } from '../../node/UniNewArray';
import { UniNoneLiteral } from '../../node/UniNoneLiteral';
import { UniWhile } from '../../node/UniWhile';
import { UniUnaryOp } from '../../node/UniUnaryOp';
import { UniTernaryOp } from '../../node/UniTernaryOp';
import { UniStatement } from '../../node/UniStatement';
import { UniStringLiteral } from '../../node/UniStringLiteral';
import { UniReturn } from '../../node/UniReturn';
import { UniVariableDec } from '../../node/UniVariableDec';
import { UniVariableDef } from '../../node/UniVariableDef';
import { UniSwitchUnit } from '../../node/UniSwitchUnit';
import { UniSwitch } from '../../node/UniSwitch';
import { SyntaxErrorListener } from '../mapper/SyntaxErrorListener';
import { SyntaxErrorData } from '../mapper/SyntaxErrorData';
import { NodeComment } from '../mapper/NodeComment';
import { Mapper } from '../mapper/Mapper';

import '../../node_helper/Extension';
import { RuntimeException } from '../Engine/RuntimeException';

export class Python3Mapper extends Mapper implements Python3Visitor<any> {
  preProcess(text: string): string {
    return text;
  }

  parseToANTLRTree(code): ParserRuleContext {
    const preProcessedCode = this.preProcess(code);
    const chars = new ANTLRInputStream(preProcessedCode);
    const lexer = new Python3Lexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new Python3Parser(tokens);
    parser.addErrorListener(new SyntaxErrorListener<any>());
    const tree = parser.translationunit();
    this.parser = parser;
    return tree;
  }

  public visitTranslationunit(ctx: TranslationunitContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const body = [];
    map.set('body', body);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 204:
            {
              body.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniBlock);
    return node;
  }

  public visitFile_input(ctx: File_inputContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const add = [];
    map.set('add', add);
    const n = ctx.childCount;
    if (0 < n) {
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof RuleContext) {
          switch (it.invokingState) {
            case 215:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        } else if (it instanceof TerminalNode) {
          switch (it.symbol.type) {
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        }
      }
    }
    const node = this.castToList(map, UniExpr);
    return node;
  }

  public visitStmts(ctx: StmtsContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const add = [];
    map.set('add', add);
    const n = ctx.childCount;
    if (0 < n) {
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof RuleContext) {
          switch (it.invokingState) {
            case 435:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        } else if (it instanceof TerminalNode) {
          switch (it.symbol.type) {
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        }
      }
    }
    const node = this.castToList(map, UniExpr);
    return node;
  }

  public visitSimple_stmt(ctx: Simple_stmtContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const n = ctx.childCount;
    if (0 < n) {
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof RuleContext) {
          switch (it.invokingState) {
            case 444:
              {
                ret.push(this.visit(it));
              }
              break;
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        } else if (it instanceof TerminalNode) {
          switch (it.symbol.type) {
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castToList(map, UniExpr);
    return node;
  }

  public visitExpr_stmt(ctx: Expr_stmtContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 471:
            {
              ret.push(this.visit(it));
            }
            break;
          case 472:
            {
              left.push(this.visit(it));
            }
            break;
          case 473:
            {
              operator.push(this.visit(it));
            }
            break;
          case 474:
            {
              right.push(this.visit(it));
            }
            break;
          case 476:
            {
              left.push(this.visit(it));
            }
            break;
          case 478:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.ASSIGN:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitExpr_stmt_right(ctx: Expr_stmt_rightContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 483:
            {
              ret.push(this.visit(it));
            }
            break;
          case 36:
            {
              left.push(this.visit(it));
            }
            break;
          case 487:
            {
              right.push(this.visit(it));
            }
            break;
          case 489:
            {
              operator.push(this.visit(it));
            }
            break;
          case 491:
            {
              right.push(this.visit(it));
            }
            break;
          case 497:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.COLON:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case Python3Parser.ASSIGN:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitTestlist_star_expr_array(ctx: Testlist_star_expr_arrayContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const add = [];
    map.set('add', add);
    const n = ctx.childCount;
    if (0 < n) {
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof RuleContext) {
          switch (it.invokingState) {
            case 509:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 511:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        } else if (it instanceof TerminalNode) {
          switch (it.symbol.type) {
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        }
      }
    }
    const node = this.castToList(map, UniExpr);
    return node;
  }

  public visitTestlist_star_expr(ctx: Testlist_star_exprContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const items = [];
    map.set('items', items);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 520:
            {
              ret.push(this.visit(it));
            }
            break;
          case 521:
            {
              items.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniArray);
    return node;
  }

  public visitBreak_stmt(ctx: Break_stmtContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniBreak);
    return node;
  }

  public visitContinue_stmt(ctx: Continue_stmtContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniContinue);
    return node;
  }

  public visitReturn_stmt(ctx: Return_stmtContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const value = [];
    map.set('value', value);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 543:
            {
              value.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniReturn);
    return node;
  }

  public visitIf_stmt(ctx: If_stmtContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const trueStatement = [];
    map.set('trueStatement', trueStatement);
    const falseStatement = [];
    map.set('falseStatement', falseStatement);
    const cond = [];
    map.set('cond', cond);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 666:
            {
              cond.push(this.visit(it));
            }
            break;
          case 668:
            {
              trueStatement.push(this.visit(it));
            }
            break;
          case 672:
            {
              falseStatement.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniIf);
    return node;
  }

  public visitWhile_stmt(ctx: While_stmtContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const statement = [];
    map.set('statement', statement);
    const cond = [];
    map.set('cond', cond);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 685:
            {
              cond.push(this.visit(it));
            }
            break;
          case 687:
            {
              statement.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniWhile);
    return node;
  }

  public visitFor_stmt(ctx: For_stmtContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const container = [];
    map.set('container', container);
    const name = [];
    map.set('name', name);
    const statement = [];
    map.set('statement', statement);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 694:
            {
              name.push(this.visit(it));
            }
            break;
          case 696:
            {
              container.push(this.visit(it));
            }
            break;
          case 698:
            {
              statement.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniEnhancedFor);
    return node;
  }

  public visitSuite(ctx: SuiteContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const body = [];
    map.set('body', body);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 755:
            {
              ret.push(this.visit(it));
            }
            break;
          case 758:
            {
              body.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBlock);
    return node;
  }

  public visitOr_test(ctx: Or_testContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 793:
            {
              ret.push(this.visit(it));
            }
            break;
          case 112:
            {
              left.push(this.visit(it));
            }
            break;
          case 797:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.OR:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitAnd_test(ctx: And_testContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 804:
            {
              ret.push(this.visit(it));
            }
            break;
          case 114:
            {
              left.push(this.visit(it));
            }
            break;
          case 808:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.AND:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitNot_test(ctx: Not_testContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const expr = [];
    map.set('expr', expr);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 814:
            {
              ret.push(this.visit(it));
            }
            break;
          case 816:
            {
              expr.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.NOT:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniUnaryOp);
    return node;
  }

  public visitComparison(ctx: ComparisonContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 820:
            {
              ret.push(this.visit(it));
            }
            break;
          case 118:
            {
              left.push(this.visit(it));
            }
            break;
          case 823:
            {
              operator.push(this.visit(it));
            }
            break;
          case 824:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitStar_expr(ctx: Star_exprContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const expr = [];
    map.set('expr', expr);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 847:
            {
              expr.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.STAR:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniUnaryOp);
    return node;
  }

  public visitExpr(ctx: ExprContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 850:
            {
              ret.push(this.visit(it));
            }
            break;
          case 124:
            {
              left.push(this.visit(it));
            }
            break;
          case 854:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.OR_OP:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitXor_expr(ctx: Xor_exprContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 861:
            {
              ret.push(this.visit(it));
            }
            break;
          case 126:
            {
              left.push(this.visit(it));
            }
            break;
          case 865:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.XOR:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitAnd_expr(ctx: And_exprContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 872:
            {
              ret.push(this.visit(it));
            }
            break;
          case 128:
            {
              left.push(this.visit(it));
            }
            break;
          case 876:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.AND_OP:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitShift_expr(ctx: Shift_exprContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 883:
            {
              ret.push(this.visit(it));
            }
            break;
          case 130:
            {
              left.push(this.visit(it));
            }
            break;
          case 887:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.Shifts:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitArith_expr(ctx: Arith_exprContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 894:
            {
              ret.push(this.visit(it));
            }
            break;
          case 132:
            {
              left.push(this.visit(it));
            }
            break;
          case 898:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.AddMinus:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitTerm(ctx: TermContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 905:
            {
              ret.push(this.visit(it));
            }
            break;
          case 134:
            {
              left.push(this.visit(it));
            }
            break;
          case 909:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.TermOp:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitFactor(ctx: FactorContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const expr = [];
    map.set('expr', expr);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 915:
            {
              ret.push(this.visit(it));
            }
            break;
          case 917:
            {
              expr.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.FactorOp:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniUnaryOp);
    return node;
  }

  public visitPower(ctx: PowerContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 920:
            {
              ret.push(this.visit(it));
            }
            break;
          case 921:
            {
              left.push(this.visit(it));
            }
            break;
          case 923:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.POWER:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitAtom_expr(ctx: Atom_exprContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 927:
            {
              ret.push(this.visit(it));
            }
            break;
          case 928:
            {
              ret.push(this.visit(it));
            }
            break;
          case 929:
            {
              ret.push(this.visit(it));
            }
            break;
          case 933:
            {
              left.push(this.visit(it));
            }
            break;
          case 934:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitArray(ctx: ArrayContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const items = [];
    map.set('items', items);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 963:
            {
              items.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniArray);
    return node;
  }

  public visitIdent(ctx: IdentContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const name = [];
    map.set('name', name);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.NAME:
            {
              name.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniIdent);
    return node;
  }

  public visitBool(ctx: BoolContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == Python3Parser.TRUE) {
            return it;
          }
          if (it.symbol.type == Python3Parser.FALSE) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniBoolLiteral(Boolean(text));
  }

  public visitTestlist_comp(ctx: Testlist_compContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const add = [];
    map.set('add', add);
    const n = ctx.childCount;
    if (0 < n) {
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof RuleContext) {
          switch (it.invokingState) {
            case 974:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 977:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        } else if (it instanceof TerminalNode) {
          switch (it.symbol.type) {
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        }
      }
    }
    const node = this.castToList(map, UniExpr);
    return node;
  }

  public visitTrailer(ctx: TrailerContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const add = [];
    map.set('add', add);
    const n = ctx.childCount;
    if (0 < n) {
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof RuleContext) {
          switch (it.invokingState) {
            case 988:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 989:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 990:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        } else if (it instanceof TerminalNode) {
          switch (it.symbol.type) {
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        }
      }
    }
    const node = this.castToList(map, UniExpr);
    return node;
  }

  public visitMethod_call_of_method_return(ctx: Method_call_of_method_returnContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const left = [];
    map.set('left', left);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 996:
            {
              left.push(this.visit(it));
            }
            break;
          case 998:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.DOT:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitMethod_call_no_arg(ctx: Method_call_no_argContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const methodName = [];
    map.set('methodName', methodName);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1000:
            {
              methodName.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniMethodCall);
    return node;
  }

  public visitMethod_call(ctx: Method_callContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const args = [];
    map.set('args', args);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1005:
            {
              args.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniMethodCall);
    return node;
  }

  public visitArray_access(ctx: Array_accessContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1009:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.OPEN_BRACK:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case Python3Parser.CLOSE_BRACK:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitField_access(ctx: Field_accessContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const right = [];
    map.set('right', right);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1013:
            {
              right.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          case Python3Parser.DOT:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitTestlist_array(ctx: Testlist_arrayContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const add = [];
    map.set('add', add);
    const n = ctx.childCount;
    if (0 < n) {
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof RuleContext) {
          switch (it.invokingState) {
            case 1060:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1062:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        } else if (it instanceof TerminalNode) {
          switch (it.symbol.type) {
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        }
      }
    }
    const node = this.castToList(map, UniExpr);
    return node;
  }

  public visitTestlist(ctx: TestlistContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const items = [];
    map.set('items', items);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1071:
            {
              ret.push(this.visit(it));
            }
            break;
          case 1072:
            {
              items.push(this.visit(it));
            }
            break;
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      } else if (it instanceof TerminalNode) {
        switch (it.symbol.type) {
          default:
            {
              none.push(this.visit(it));
            }
            break;
        }
      }
    }
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniArray);
    return node;
  }

  public visitArglist(ctx: ArglistContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const add = [];
    map.set('add', add);
    const n = ctx.childCount;
    if (0 < n) {
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof RuleContext) {
          switch (it.invokingState) {
            case 1137:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1139:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        } else if (it instanceof TerminalNode) {
          switch (it.symbol.type) {
            default:
              {
                none.push(this.visit(it));
              }
              break;
          }
        }
      }
    }
    const node = this.castToList(map, UniExpr);
    return node;
  }

  public visitInteger(ctx: IntegerContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == Python3Parser.INTEGER) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniIntLiteral(Number(text));
  }

  public visitFloat(ctx: FloatContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == Python3Parser.FLOAT_NUMBER) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniDoubleLiteral(Number(text));
  }

  public visitImaginary(ctx: ImaginaryContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == Python3Parser.IMAG_NUMBER) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniDoubleLiteral(Number(text));
  }
}
