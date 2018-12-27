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

import { CPP14Lexer } from './CPP14Lexer';
import { CPP14Parser } from './CPP14Parser';
import { CPP14Visitor } from './CPP14Visitor';

import {
  TranslationunitContext,
  PrimaryexpressionContext,
  IdentexpressionContext,
  IdexpressionlapperContext,
  FunctioncallexpressionContext,
  PostfixexpressionContext,
  ExpressionlistContext,
  BinaryexpressionContext,
  UnaryexpressionContext,
  TypeidlapperContext,
  CastexpressionContext,
  PmexpressionContext,
  MultiplicativeexpressionContext,
  AdditiveexpressionContext,
  ShiftexpressionContext,
  RelationalexpressionContext,
  EqualityexpressionContext,
  AndexpressionContext,
  ExclusiveorexpressionContext,
  InclusiveorexpressionContext,
  LogicalandexpressionContext,
  LogicalorexpressionContext,
  ConditionalexpressionContext,
  AssignmentexpressionContext,
  ExpressionContext,
  SwitchunitstatementContext,
  StatementWithoutLabeldstatementseqContext,
  ExpressionstatementContext,
  CompoundstatementContext,
  StatementseqContext,
  SelectionstatementContext,
  SwitchstatementContext,
  SwitchunitseqContext,
  WhilestatementContext,
  DowhilestatementContext,
  IterationstatementContext,
  EnhancedForStatementContext,
  BreakStatementContext,
  ContinueStatementContext,
  ReturnStatementContext,
  DeclarationseqContext,
  MyclassbodyContext,
  MyclassspecifierContext,
  MyclassspecifierstatementContext,
  MyclassheadContext,
  VariabledeclarationstatementContext,
  VariabledeclarationContext,
  StructspecifierContext,
  VariableDeclaratorListContext,
  VariableDeclaratorContext,
  DimsContext,
  FunctiondeclarationstatementContext,
  EmptydeclarationContext,
  SimpletypespecifierContext,
  ElaboratedtypespecifierContext,
  InitdeclaratorlistContext,
  DeclaratoridContext,
  ParameterdeclarationclauseContext,
  ParameterdeclarationlistContext,
  ParameterdeclarationContext,
  FunctiondefinitionContext,
  FunctionheaderContext,
  FunctiondeclaratorContext,
  FunctionbodyContext,
  InitializerlistContext,
  BracedinitlistContext,
  MyclassnameContext,
  ClassspecifierContext,
  ClassbodyContext,
  ClassheadContext,
  MemberspecificationContext,
  MembervariabledeclarationstatementContext,
  MembervariabledeclarationContext,
  MemberdeclaratorlistContext,
  MemberdeclaratorContext,
  IntegerliteralContext,
  CharacterliteralContext,
  FloatingliteralContext,
  StringliteralContext,
  BooleanliteralContext,
} from './CPP14Parser';

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
import { UniIntLiteral } from '../../node/UniIntLiteral';
import { UniMethodCall } from '../../node/UniMethodCall';
import { UniNew } from '../../node/UniNew';
import { UniNewArray } from '../../node/UniNewArray';
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

export class CPP14Mapper extends Mapper implements CPP14Visitor<any> {
  preProcess(text: string): string {
    return text;
  }

  parseToANTLRTree(code): ParserRuleContext {
    const preProcessedCode = this.preProcess(code);
    const chars = new ANTLRInputStream(preProcessedCode);
    const lexer = new CPP14Lexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new CPP14Parser(tokens);
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
          case 476:
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

  public visitPrimaryexpression(ctx: PrimaryexpressionContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 479:
            {
              ret.push(this.visit(it));
            }
            break;
          case 482:
            {
              ret.push(this.visit(it));
            }
            break;
          case 485:
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
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniUnaryOp);
    return node;
  }

  public visitIdentexpression(ctx: IdentexpressionContext) {
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
          case 493:
            {
              name.push(this.visit(it));
            }
            break;
          case 494:
            {
              name.push(this.visit(it));
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
    const node = this.castTo(map, UniIdent);
    return node;
  }

  public visitIdexpressionlapper(ctx: IdexpressionlapperContext) {
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
          case 612:
            {
              name.push(this.visit(it));
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
    const node = this.castTo(map, UniIdent);
    return node;
  }

  public visitFunctioncallexpression(ctx: FunctioncallexpressionContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const args = [];
    map.set('args', args);
    const methodName = [];
    map.set('methodName', methodName);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 614:
            {
              methodName.push(this.visit(it));
            }
            break;
          case 616:
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

  public visitPostfixexpression(ctx: PostfixexpressionContext) {
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
          case 622:
            {
              ret.push(this.visit(it));
            }
            break;
          case 623:
            {
              ret.push(this.visit(it));
            }
            break;
          case 36:
            {
              left.push(this.visit(it));
            }
            break;
          case 690:
            {
              right.push(this.visit(it));
            }
            break;
          case 703:
            {
              right.push(this.visit(it));
            }
            break;
          case 709:
            {
              right.push(this.visit(it));
            }
            break;
          case 712:
            {
              right.push(this.visit(it));
            }
            break;
          case 715:
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
          case CPP14Parser.LeftBracket:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.RightBracket:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.Dot:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.Arrow:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.PlusPlus:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.MinusMinus:
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

  public visitExpressionlist(ctx: ExpressionlistContext) {
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
          case 725:
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

  public visitBinaryexpression(ctx: BinaryexpressionContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 751:
            {
              ret.push(this.visit(it));
            }
            break;
          case 752:
            {
              ret.push(this.visit(it));
            }
            break;
          case 753:
            {
              ret.push(this.visit(it));
            }
            break;
          case 754:
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
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitUnaryexpression(ctx: UnaryexpressionContext) {
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
          case 758:
            {
              expr.push(this.visit(it));
            }
            break;
          case 760:
            {
              expr.push(this.visit(it));
            }
            break;
          case 761:
            {
              operator.push(this.visit(it));
            }
            break;
          case 762:
            {
              expr.push(this.visit(it));
            }
            break;
          case 765:
            {
              expr.push(this.visit(it));
            }
            break;
          case 768:
            {
              expr.push(this.visit(it));
            }
            break;
          case 773:
            {
              expr.push(this.visit(it));
            }
            break;
          case 783:
            {
              expr.push(this.visit(it));
            }
            break;
          case 786:
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
          case CPP14Parser.PlusPlus:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.MinusMinus:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.Sizeof:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.Identifier:
            {
              expr.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.Alignof:
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

  public visitTypeidlapper(ctx: TypeidlapperContext) {
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
          case 789:
            {
              name.push(this.visit(it));
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
    const node = this.castTo(map, UniIdent);
    return node;
  }

  public visitCastexpression(ctx: CastexpressionContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const type = [];
    map.set('type', type);
    const value = [];
    map.set('value', value);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 880:
            {
              ret.push(this.visit(it));
            }
            break;
          case 882:
            {
              type.push(this.visit(it));
            }
            break;
          case 884:
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
          case CPP14Parser.RightParen:
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
    const node = this.castTo(map, UniCast);
    return node;
  }

  public visitPmexpression(ctx: PmexpressionContext) {
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
          case 889:
            {
              ret.push(this.visit(it));
            }
            break;
          case 68:
            {
              left.push(this.visit(it));
            }
            break;
          case 893:
            {
              right.push(this.visit(it));
            }
            break;
          case 896:
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
          case CPP14Parser.DotStar:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.ArrowStar:
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

  public visitMultiplicativeexpression(ctx: MultiplicativeexpressionContext) {
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
          case 903:
            {
              ret.push(this.visit(it));
            }
            break;
          case 70:
            {
              left.push(this.visit(it));
            }
            break;
          case 907:
            {
              right.push(this.visit(it));
            }
            break;
          case 910:
            {
              right.push(this.visit(it));
            }
            break;
          case 913:
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
          case CPP14Parser.Star:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.Div:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.Mod:
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

  public visitAdditiveexpression(ctx: AdditiveexpressionContext) {
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
          case 72:
            {
              left.push(this.visit(it));
            }
            break;
          case 924:
            {
              right.push(this.visit(it));
            }
            break;
          case 927:
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
          case CPP14Parser.Plus:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.Minus:
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

  public visitShiftexpression(ctx: ShiftexpressionContext) {
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
          case 934:
            {
              ret.push(this.visit(it));
            }
            break;
          case 74:
            {
              left.push(this.visit(it));
            }
            break;
          case 938:
            {
              right.push(this.visit(it));
            }
            break;
          case 940:
            {
              operator.push(this.visit(it));
            }
            break;
          case 941:
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
          case CPP14Parser.LeftShift:
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

  public visitRelationalexpression(ctx: RelationalexpressionContext) {
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
          case 949:
            {
              ret.push(this.visit(it));
            }
            break;
          case 76:
            {
              left.push(this.visit(it));
            }
            break;
          case 953:
            {
              right.push(this.visit(it));
            }
            break;
          case 956:
            {
              right.push(this.visit(it));
            }
            break;
          case 959:
            {
              right.push(this.visit(it));
            }
            break;
          case 962:
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
          case CPP14Parser.Less:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.Greater:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.LessEqual:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.GreaterEqual:
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

  public visitEqualityexpression(ctx: EqualityexpressionContext) {
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
          case 969:
            {
              ret.push(this.visit(it));
            }
            break;
          case 78:
            {
              left.push(this.visit(it));
            }
            break;
          case 973:
            {
              right.push(this.visit(it));
            }
            break;
          case 976:
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
          case CPP14Parser.Equal:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.NotEqual:
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

  public visitAndexpression(ctx: AndexpressionContext) {
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
          case 983:
            {
              ret.push(this.visit(it));
            }
            break;
          case 80:
            {
              left.push(this.visit(it));
            }
            break;
          case 987:
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
          case CPP14Parser.And:
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

  public visitExclusiveorexpression(ctx: ExclusiveorexpressionContext) {
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
          case 994:
            {
              ret.push(this.visit(it));
            }
            break;
          case 82:
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
          case CPP14Parser.Caret:
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

  public visitInclusiveorexpression(ctx: InclusiveorexpressionContext) {
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
          case 1005:
            {
              ret.push(this.visit(it));
            }
            break;
          case 84:
            {
              left.push(this.visit(it));
            }
            break;
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
          case CPP14Parser.Or:
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

  public visitLogicalandexpression(ctx: LogicalandexpressionContext) {
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
          case 1016:
            {
              ret.push(this.visit(it));
            }
            break;
          case 86:
            {
              left.push(this.visit(it));
            }
            break;
          case 1020:
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
          case CPP14Parser.AndAnd:
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

  public visitLogicalorexpression(ctx: LogicalorexpressionContext) {
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
          case 1027:
            {
              ret.push(this.visit(it));
            }
            break;
          case 88:
            {
              left.push(this.visit(it));
            }
            break;
          case 1031:
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
          case CPP14Parser.OrOr:
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

  public visitConditionalexpression(ctx: ConditionalexpressionContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const trueExpr = [];
    map.set('trueExpr', trueExpr);
    const cond = [];
    map.set('cond', cond);
    const falseExpr = [];
    map.set('falseExpr', falseExpr);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1037:
            {
              ret.push(this.visit(it));
            }
            break;
          case 1038:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1040:
            {
              trueExpr.push(this.visit(it));
            }
            break;
          case 1042:
            {
              falseExpr.push(this.visit(it));
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
    const node = this.castTo(map, UniTernaryOp);
    return node;
  }

  public visitAssignmentexpression(ctx: AssignmentexpressionContext) {
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
          case 1046:
            {
              ret.push(this.visit(it));
            }
            break;
          case 1047:
            {
              left.push(this.visit(it));
            }
            break;
          case 1048:
            {
              operator.push(this.visit(it));
            }
            break;
          case 1049:
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

  public visitExpression(ctx: ExpressionContext) {
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
          case 1068:
            {
              ret.push(this.visit(it));
            }
            break;
          case 96:
            {
              left.push(this.visit(it));
            }
            break;
          case 1072:
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
          case CPP14Parser.Comma:
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

  public visitSwitchunitstatement(ctx: SwitchunitstatementContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const statement = [];
    map.set('statement', statement);
    const label = [];
    map.set('label', label);
    const cond = [];
    map.set('cond', cond);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1150:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1155:
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
          case CPP14Parser.Case:
            {
              label.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.Default:
            {
              label.push(this.flatten(this.visit(it)));
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
    const node = this.castTo(map, UniSwitchUnit);
    return node;
  }

  public visitStatementWithoutLabeldstatementseq(ctx: StatementWithoutLabeldstatementseqContext) {
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
            case 1157:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1158:
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

  public visitExpressionstatement(ctx: ExpressionstatementContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const endWith = [];
    map.set('endWith', endWith);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1164:
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
          case CPP14Parser.Semi:
            {
              endWith.push(this.flatten(this.visit(it)));
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
    const node = this.castTo(map, UniEmptyStatement);
    return node;
  }

  public visitCompoundstatement(ctx: CompoundstatementContext) {
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
          case 1170:
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

  public visitStatementseq(ctx: StatementseqContext) {
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
            case 1175:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1176:
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

  public visitSelectionstatement(ctx: SelectionstatementContext) {
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
          case 1184:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1186:
            {
              trueStatement.push(this.visit(it));
            }
            break;
          case 1190:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1192:
            {
              trueStatement.push(this.visit(it));
            }
            break;
          case 1194:
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

  public visitSwitchstatement(ctx: SwitchstatementContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const cases = [];
    map.set('cases', cases);
    const cond = [];
    map.set('cond', cond);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1200:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1203:
            {
              cases.push(this.visit(it));
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
    const node = this.castTo(map, UniSwitch);
    return node;
  }

  public visitSwitchunitseq(ctx: SwitchunitseqContext) {
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
            case 1206:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1207:
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
    const node = this.castToList(map, UniStatement);
    return node;
  }

  public visitWhilestatement(ctx: WhilestatementContext) {
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
          case 1233:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1235:
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

  public visitDowhilestatement(ctx: DowhilestatementContext) {
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
          case 1238:
            {
              statement.push(this.visit(it));
            }
            break;
          case 1241:
            {
              cond.push(this.visit(it));
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
    const node = this.castTo(map, UniDoWhile);
    return node;
  }

  public visitIterationstatement(ctx: IterationstatementContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const init = [];
    map.set('init', init);
    const statement = [];
    map.set('statement', statement);
    const step = [];
    map.set('step', step);
    const cond = [];
    map.set('cond', cond);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1247:
            {
              init.push(this.visit(it));
            }
            break;
          case 1248:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1252:
            {
              step.push(this.visit(it));
            }
            break;
          case 1256:
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
    const node = this.castTo(map, UniFor);
    return node;
  }

  public visitEnhancedForStatement(ctx: EnhancedForStatementContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const container = [];
    map.set('container', container);
    const statement = [];
    map.set('statement', statement);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1260:
            {
              merge.push(this.visit(it));
            }
            break;
          case 1262:
            {
              container.push(this.visit(it));
            }
            break;
          case 1264:
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
    let node = this.castTo(map, UniEnhancedFor);
    if (typeof node === 'object' && 'merge' in node) {
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniEnhancedFor));
      });
    } else {
      node = new UniEnhancedFor();
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniEnhancedFor));
      });
    }
    return node;
  }

  public visitBreakStatement(ctx: BreakStatementContext) {
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

  public visitContinueStatement(ctx: ContinueStatementContext) {
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

  public visitReturnStatement(ctx: ReturnStatementContext) {
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
          case 1292:
            {
              value.push(this.visit(it));
            }
            break;
          case 1297:
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

  public visitDeclarationseq(ctx: DeclarationseqContext) {
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
            case 1307:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 148:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1310:
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

  public visitMyclassbody(ctx: MyclassbodyContext) {
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
            case 1316:
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
    const node = this.castToList(map, UniVariableDec);
    return node;
  }

  public visitMyclassspecifier(ctx: MyclassspecifierContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const members = [];
    map.set('members', members);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1319:
            {
              merge.push(this.visit(it));
            }
            break;
          case 1321:
            {
              members.push(this.visit(it));
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
    let node = this.castTo(map, UniClassDec);
    if (typeof node === 'object' && 'merge' in node) {
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniClassDec));
      });
    } else {
      node = new UniClassDec();
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniClassDec));
      });
    }
    return node;
  }

  public visitMyclassspecifierstatement(ctx: MyclassspecifierstatementContext) {
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
    const node = this.castTo(map, UniClassDec);
    return node;
  }

  public visitMyclasshead(ctx: MyclassheadContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const className = [];
    map.set('className', className);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1334:
            {
              className.push(this.visit(it));
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
    const node = this.castTo(map, UniClassDec);
    return node;
  }

  public visitVariabledeclarationstatement(ctx: VariabledeclarationstatementContext) {
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
            case 1386:
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
    const node = this.castToList(map, UniVariableDec);
    return node;
  }

  public visitVariabledeclaration(ctx: VariabledeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const variables = [];
    map.set('variables', variables);
    const modifiers = [];
    map.set('modifiers', modifiers);
    const type = [];
    map.set('type', type);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1392:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 1395:
            {
              type.push(this.visit(it));
            }
            break;
          case 1396:
            {
              variables.push(this.visit(it));
            }
            break;
          case 1399:
            {
              type.push(this.visit(it));
            }
            break;
          case 1400:
            {
              variables.push(this.visit(it));
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
    const node = this.castTo(map, UniVariableDec);
    return node;
  }

  public visitStructspecifier(ctx: StructspecifierContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const members = [];
    map.set('members', members);
    const className = [];
    map.set('className', className);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1405:
            {
              className.push(this.visit(it));
            }
            break;
          case 1407:
            {
              members.push(this.visit(it));
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
    const node = this.castTo(map, UniClassDec);
    return node;
  }

  public visitVariableDeclaratorList(ctx: VariableDeclaratorListContext) {
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
            case 1410:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1412:
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
    const node = this.castToList(map, UniVariableDef);
    return node;
  }

  public visitVariableDeclarator(ctx: VariableDeclaratorContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const typeSuffix = [];
    map.set('typeSuffix', typeSuffix);
    const name = [];
    map.set('name', name);
    const value = [];
    map.set('value', value);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1418:
            {
              name.push(this.visit(it));
            }
            break;
          case 1424:
            {
              name.push(this.visit(it));
            }
            break;
          case 1436:
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
          case CPP14Parser.LeftBracket:
            {
              typeSuffix.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.Integerliteral:
            {
              typeSuffix.push(this.flatten(this.visit(it)));
            }
            break;
          case CPP14Parser.RightBracket:
            {
              typeSuffix.push(this.flatten(this.visit(it)));
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
    const node = this.castTo(map, UniVariableDef);
    return node;
  }

  public visitDims(ctx: DimsContext) {
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
    const node = this.castTo(map, String);
    return node;
  }

  public visitFunctiondeclarationstatement(ctx: FunctiondeclarationstatementContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const modifiers = [];
    map.set('modifiers', modifiers);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1445:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 1448:
            {
              merge.push(this.visit(it));
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
    let node = this.castTo(map, UniFunctionDec);
    if (typeof node === 'object' && 'merge' in node) {
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniFunctionDec));
      });
    } else {
      node = new UniFunctionDec();
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniFunctionDec));
      });
    }
    return node;
  }

  public visitEmptydeclaration(ctx: EmptydeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const endWith = [];
    map.set('endWith', endWith);
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
          case CPP14Parser.Semi:
            {
              endWith.push(this.flatten(this.visit(it)));
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
    const node = this.castTo(map, UniEmptyStatement);
    return node;
  }

  public visitSimpletypespecifier(ctx: SimpletypespecifierContext) {
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
    const node = this.castTo(map, String);
    return node;
  }

  public visitElaboratedtypespecifier(ctx: ElaboratedtypespecifierContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
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
          case CPP14Parser.Identifier:
            {
              ret.push(this.flatten(this.visit(it)));
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
    return map;
  }

  public visitInitdeclaratorlist(ctx: InitdeclaratorlistContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const add = [];
    map.set('add', add);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1901:
            {
              add.push(this.visit(it));
            }
            break;
          case 1903:
            {
              add.push(this.visit(it));
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
    return map;
  }

  public visitDeclaratorid(ctx: DeclaratoridContext) {
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
    const node = this.castTo(map, String);
    return node;
  }

  public visitParameterdeclarationclause(ctx: ParameterdeclarationclauseContext) {
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
            case 2091:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 2097:
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
    const node = this.castToList(map, UniParam);
    return node;
  }

  public visitParameterdeclarationlist(ctx: ParameterdeclarationlistContext) {
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
            case 2104:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 326:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 2108:
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
    const node = this.castToList(map, UniParam);
    return node;
  }

  public visitParameterdeclaration(ctx: ParameterdeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const variables = [];
    map.set('variables', variables);
    const modifiers = [];
    map.set('modifiers', modifiers);
    const type = [];
    map.set('type', type);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2117:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 2120:
            {
              type.push(this.visit(it));
            }
            break;
          case 2121:
            {
              variables.push(this.visit(it));
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
    const node = this.castTo(map, UniParam);
    return node;
  }

  public visitFunctiondefinition(ctx: FunctiondefinitionContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const block = [];
    map.set('block', block);
    const modifiers = [];
    map.set('modifiers', modifiers);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2127:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 2130:
            {
              merge.push(this.visit(it));
            }
            break;
          case 2134:
            {
              block.push(this.visit(it));
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
    let node = this.castTo(map, UniFunctionDec);
    if (typeof node === 'object' && 'merge' in node) {
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniFunctionDec));
      });
    } else {
      node = new UniFunctionDec();
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniFunctionDec));
      });
    }
    return node;
  }

  public visitFunctionheader(ctx: FunctionheaderContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const returnType = [];
    map.set('returnType', returnType);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2136:
            {
              returnType.push(this.visit(it));
            }
            break;
          case 2139:
            {
              returnType.push(this.visit(it));
            }
            break;
          case 2145:
            {
              merge.push(this.visit(it));
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
    let node = this.castTo(map, UniFunctionDec);
    if (typeof node === 'object' && 'merge' in node) {
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniFunctionDec));
      });
    } else {
      node = new UniFunctionDec();
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniFunctionDec));
      });
    }
    return node;
  }

  public visitFunctiondeclarator(ctx: FunctiondeclaratorContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const name = [];
    map.set('name', name);
    const params = [];
    map.set('params', params);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2147:
            {
              name.push(this.visit(it));
            }
            break;
          case 2149:
            {
              params.push(this.visit(it));
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
    const node = this.castTo(map, UniFunctionDec);
    return node;
  }

  public visitFunctionbody(ctx: FunctionbodyContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2155:
            {
              merge.push(this.visit(it));
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
    let node = this.castTo(map, UniBlock);
    if (typeof node === 'object' && 'merge' in node) {
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniBlock));
      });
    } else {
      node = new UniBlock();
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniBlock));
      });
    }
    return node;
  }

  public visitInitializerlist(ctx: InitializerlistContext) {
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
            case 2181:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 2183:
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

  public visitBracedinitlist(ctx: BracedinitlistContext) {
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
          case 2190:
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

  public visitMyclassname(ctx: MyclassnameContext) {
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
    const node = this.castTo(map, String);
    return node;
  }

  public visitClassspecifier(ctx: ClassspecifierContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const members = [];
    map.set('members', members);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2204:
            {
              merge.push(this.visit(it));
            }
            break;
          case 2205:
            {
              members.push(this.visit(it));
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
    let node = this.castTo(map, UniClassDec);
    if (typeof node === 'object' && 'merge' in node) {
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniClassDec));
      });
    } else {
      node = new UniClassDec();
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniClassDec));
      });
    }
    return node;
  }

  public visitClassbody(ctx: ClassbodyContext) {
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
            case 2208:
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
    const node = this.castToList(map, UniVariableDec);
    return node;
  }

  public visitClasshead(ctx: ClassheadContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const className = [];
    map.set('className', className);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2220:
            {
              className.push(this.visit(it));
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
    const node = this.castTo(map, UniClassDec);
    return node;
  }

  public visitMemberspecification(ctx: MemberspecificationContext) {
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
            case 2245:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 2246:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 2249:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 2251:
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
    const node = this.castToList(map, UniVariableDec);
    return node;
  }

  public visitMembervariabledeclarationstatement(ctx: MembervariabledeclarationstatementContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2265:
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
    if (!ret.isEmpty()) {
      return ret;
    }
    const node = this.castTo(map, UniVariableDec);
    return node;
  }

  public visitMembervariabledeclaration(ctx: MembervariabledeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const variables = [];
    map.set('variables', variables);
    const modifiers = [];
    map.set('modifiers', modifiers);
    const type = [];
    map.set('type', type);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2271:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 2274:
            {
              type.push(this.visit(it));
            }
            break;
          case 2275:
            {
              type.push(this.visit(it));
            }
            break;
          case 2281:
            {
              variables.push(this.visit(it));
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
    const node = this.castTo(map, UniVariableDec);
    return node;
  }

  public visitMemberdeclaratorlist(ctx: MemberdeclaratorlistContext) {
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
            case 2285:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 370:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 2289:
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
    const node = this.castToList(map, UniVariableDef);
    return node;
  }

  public visitMemberdeclarator(ctx: MemberdeclaratorContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const typeSuffix = [];
    map.set('typeSuffix', typeSuffix);
    const name = [];
    map.set('name', name);
    const value = [];
    map.set('value', value);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2295:
            {
              name.push(this.visit(it));
            }
            break;
          case 2296:
            {
              typeSuffix.push(this.visit(it));
            }
            break;
          case 2302:
            {
              name.push(this.visit(it));
            }
            break;
          case 2304:
            {
              value.push(this.visit(it));
            }
            break;
          case 2307:
            {
              name.push(this.visit(it));
            }
            break;
          case 2308:
            {
              value.push(this.visit(it));
            }
            break;
          case 2318:
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
          case CPP14Parser.Identifier:
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
    const node = this.castTo(map, UniVariableDef);
    return node;
  }

  public visitIntegerliteral(ctx: IntegerliteralContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == CPP14Parser.Integerliteral) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniIntLiteral(Number(text));
  }

  public visitCharacterliteral(ctx: CharacterliteralContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == CPP14Parser.Characterliteral) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniCharacterLiteral(text.substring(1, text.length - 1));
  }

  public visitFloatingliteral(ctx: FloatingliteralContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == CPP14Parser.Floatingliteral) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniDoubleLiteral(Number(text));
  }

  public visitStringliteral(ctx: StringliteralContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == CPP14Parser.Stringliteral) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniStringLiteral(text.substring(1, text.length - 1));
  }

  public visitBooleanliteral(ctx: BooleanliteralContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == CPP14Parser.Booleanliteral) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniBoolLiteral(Boolean(text));
  }
}
