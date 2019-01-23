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

import { Java8Lexer } from './Java8Lexer';
import { Java8Parser } from './Java8Parser';
import { Java8Visitor } from './Java8Visitor';

import {
  TranslationunitContext,
  IntegerLiteralContext,
  FloatingPointLiteralContext,
  BooleanLiteralContext,
  StringLiteralContext,
  PrimitiveTypeContext,
  ClassOrInterfaceTypeContext,
  ClassTypeContext,
  InterfaceTypeContext,
  DimsContext,
  TypeNameIdentContext,
  ExpressionNameContext,
  CompilationUnitContext,
  SingleTypeImportDeclarationContext,
  TypeImportOnDemandDeclarationContext,
  SingleStaticImportDeclarationContext,
  StaticImportOnDemandDeclarationContext,
  TypeDeclarationContext,
  ClassDeclarationContext,
  NormalClassDeclarationContext,
  ClassNameContext,
  ClassModifiersContext,
  ClassModifierContext,
  SuperclassContext,
  SuperinterfacesContext,
  InterfaceTypeListContext,
  ClassBodyContext,
  ClassBodyDeclarationContext,
  ClassMemberDeclarationContext,
  FieldDeclarationContext,
  FieldModifiersContext,
  FieldModifierContext,
  VariableDeclaratorListContext,
  VariableDeclaratorContext,
  VariableDeclaratorIdContext,
  UnannTypeContext,
  MethodDeclarationContext,
  MethodModifierContext,
  MethodHeaderContext,
  ResultContext,
  MethodDeclaratorContext,
  MethodNameContext,
  FormalParameterListContext,
  FormalParametersContext,
  FormalParameterContext,
  ParameterDeclaratorIdsContext,
  ParameterDeclaratorIdContext,
  ParameterNameContext,
  MethodBodyContext,
  ConstructorDeclarationContext,
  ConstructorModifierContext,
  ConstructorDeclaratorContext,
  SimpleTypeNameContext,
  InterfaceDeclarationContext,
  NormalInterfaceDeclarationContext,
  InterfaceModifiersContext,
  InterfaceNameContext,
  InterfaceModifierContext,
  ExtendsInterfacesContext,
  InterfaceBodyContext,
  InterfaceMemberDeclarationContext,
  ConstantDeclarationContext,
  ConstantModifiersContext,
  ConstantModifierContext,
  InterfaceMethodDeclarationContext,
  InterfaceMethodModifiersContext,
  InterfaceMethodModifierContext,
  ArrayInitializerContext,
  VariableInitializerListContext,
  BlockContext,
  BlockStatementsContext,
  LocalVariableDeclarationStatementContext,
  LocalVariableDeclarationContext,
  ExpressionStatementContext,
  IfThenStatementContext,
  IfThenElseStatementContext,
  IfThenElseStatementNoShortIfContext,
  WhileStatementContext,
  WhileStatementNoShortIfContext,
  BasicForStatementContext,
  BasicForStatementNoShortIfContext,
  BreakStatementContext,
  ContinueStatementContext,
  ReturnStatementContext,
  ClassInstanceCreationExpression_lfno_primaryContext,
  ArrayAccessContext,
  ArrayAccess_lf_primaryContext,
  ArrayAccess_lfno_primaryContext,
  MethodInvocationContext,
  ReceiversContext,
  ReceiverContext,
  IdentContext,
  MethodInvocation_lfno_primaryContext,
  ArgumentListContext,
  ArrayCreationExpressionContext,
  DimExprsContext,
  DimExprContext,
  AssignmentContext,
  AssignmentOperatorContext,
  ConditionalExpressionContext,
  ConditionalOrExpressionContext,
  ConditionalAndExpressionContext,
  InclusiveOrExpressionContext,
  ExclusiveOrExpressionContext,
  AndExpressionContext,
  EqualityExpressionContext,
  RelationalExpressionContext,
  ShiftExpressionContext,
  AdditiveExpressionContext,
  MultiplicativeExpressionContext,
  UnaryExpressionContext,
  PreIncrementExpressionContext,
  PreDecrementExpressionContext,
  UnaryExpressionNotPlusMinusContext,
  PostfixExpressionContext,
  PostIncrementExpressionContext,
  PostDecrementExpressionContext,
} from './Java8Parser';

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

export class Java8Mapper extends Mapper implements Java8Visitor<any> {
  preProcess(text: string): string {
    return text;
  }

  parseToANTLRTree(code): ParserRuleContext {
    const preProcessedCode = this.preProcess(code);
    const chars = new ANTLRInputStream(preProcessedCode);
    const lexer = new Java8Lexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new Java8Parser(tokens);
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
          case 564:
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

  public visitIntegerLiteral(ctx: IntegerLiteralContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == Java8Parser.IntegerLiteral) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniIntLiteral(Number(text));
  }

  public visitFloatingPointLiteral(ctx: FloatingPointLiteralContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == Java8Parser.FloatingPointLiteral) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniDoubleLiteral(Number(text));
  }

  public visitBooleanLiteral(ctx: BooleanLiteralContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == Java8Parser.BooleanLiteral) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniBoolLiteral(Boolean(text));
  }

  public visitStringLiteral(ctx: StringLiteralContext) {
    const findFirst = (ctx) => {
      const n = ctx.childCount;
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof TerminalNode) {
          if (it.symbol.type == Java8Parser.StringLiteral) {
            return it;
          }
        }
      }
      return undefined;
    };
    const text = this.visit(findFirst(ctx)) as String;
    return new UniStringLiteral(text.substring(1, text.length - 1));
  }

  public visitPrimitiveType(ctx: PrimitiveTypeContext) {
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

  public visitClassOrInterfaceType(ctx: ClassOrInterfaceTypeContext) {
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

  public visitClassType(ctx: ClassTypeContext) {
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

  public visitInterfaceType(ctx: InterfaceTypeContext) {
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

  public visitTypeNameIdent(ctx: TypeNameIdentContext) {
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
          case 799:
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

  public visitExpressionName(ctx: ExpressionNameContext) {
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
          case Java8Parser.Identifier:
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

  public visitCompilationUnit(ctx: CompilationUnitContext) {
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
            case 830:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 833:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 839:
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

  public visitSingleTypeImportDeclaration(ctx: SingleTypeImportDeclarationContext) {
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
          case 871:
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
    const node = this.castTo(map, UniImportDec);
    return node;
  }

  public visitTypeImportOnDemandDeclaration(ctx: TypeImportOnDemandDeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const name = [];
    map.set('name', name);
    const ondemand = [];
    map.set('ondemand', ondemand);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 875:
            {
              name.push(this.visit(it));
            }
            break;
          case 877:
            {
              ondemand.push(this.visit(it));
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
    const node = this.castTo(map, UniImportDec);
    return node;
  }

  public visitSingleStaticImportDeclaration(ctx: SingleStaticImportDeclarationContext) {
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
    const node = this.castTo(map, UniImportDec);
    return node;
  }

  public visitStaticImportOnDemandDeclaration(ctx: StaticImportOnDemandDeclarationContext) {
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
    const node = this.castTo(map, UniImportDec);
    return node;
  }

  public visitTypeDeclaration(ctx: TypeDeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 894:
            {
              merge.push(this.visit(it));
            }
            break;
          case 895:
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

  public visitClassDeclaration(ctx: ClassDeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 899:
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

  public visitNormalClassDeclaration(ctx: NormalClassDeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const interfaces = [];
    map.set('interfaces', interfaces);
    const superClass = [];
    map.set('superClass', superClass);
    const members = [];
    map.set('members', members);
    const className = [];
    map.set('className', className);
    const modifiers = [];
    map.set('modifiers', modifiers);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 903:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 905:
            {
              className.push(this.visit(it));
            }
            break;
          case 909:
            {
              superClass.push(this.visit(it));
            }
            break;
          case 912:
            {
              interfaces.push(this.visit(it));
            }
            break;
          case 915:
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

  public visitClassName(ctx: ClassNameContext) {
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

  public visitClassModifiers(ctx: ClassModifiersContext) {
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
            case 919:
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
    const node = this.castToList(map, String);
    return node;
  }

  public visitClassModifier(ctx: ClassModifierContext) {
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

  public visitSuperclass(ctx: SuperclassContext) {
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
            case 948:
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
    const node = this.castToList(map, String);
    return node;
  }

  public visitSuperinterfaces(ctx: SuperinterfacesContext) {
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
            case 951:
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
    const node = this.castToList(map, String);
    return node;
  }

  public visitInterfaceTypeList(ctx: InterfaceTypeListContext) {
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
            case 953:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 955:
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
    const node = this.castToList(map, String);
    return node;
  }

  public visitClassBody(ctx: ClassBodyContext) {
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
            case 962:
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
    const node = this.castToList(map, UniDecralation);
    return node;
  }

  public visitClassBodyDeclaration(ctx: ClassBodyDeclarationContext) {
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
            case 970:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 973:
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
    const node = this.castToList(map, UniDecralation);
    return node;
  }

  public visitClassMemberDeclaration(ctx: ClassMemberDeclarationContext) {
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
            case 976:
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
    const node = this.castToList(map, UniDecralation);
    return node;
  }

  public visitFieldDeclaration(ctx: FieldDeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const add = [];
    map.set('add', add);
    const modifiers = [];
    map.set('modifiers', modifiers);
    const type = [];
    map.set('type', type);
    const n = ctx.childCount;
    if (0 < n) {
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof RuleContext) {
          switch (it.invokingState) {
            case 983:
              {
                modifiers.push(this.visit(it));
              }
              break;
            case 984:
              {
                type.push(this.visit(it));
              }
              break;
            case 985:
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

  public visitFieldModifiers(ctx: FieldModifiersContext) {
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
    const node = this.castToList(map, String);
    return node;
  }

  public visitFieldModifier(ctx: FieldModifierContext) {
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
            case 1004:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1006:
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
    const name = [];
    map.set('name', name);
    const value = [];
    map.set('value', value);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1012:
            {
              name.push(this.visit(it));
            }
            break;
          case 1014:
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
    const node = this.castTo(map, UniVariableDef);
    return node;
  }

  public visitVariableDeclaratorId(ctx: VariableDeclaratorIdContext) {
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

  public visitUnannType(ctx: UnannTypeContext) {
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

  public visitMethodDeclaration(ctx: MethodDeclarationContext) {
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
          case 1101:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 1107:
            {
              merge.push(this.visit(it));
            }
            break;
          case 1108:
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

  public visitMethodModifier(ctx: MethodModifierContext) {
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

  public visitMethodHeader(ctx: MethodHeaderContext) {
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
          case 1122:
            {
              returnType.push(this.visit(it));
            }
            break;
          case 1123:
            {
              merge.push(this.visit(it));
            }
            break;
          case 1134:
            {
              returnType.push(this.visit(it));
            }
            break;
          case 1135:
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

  public visitResult(ctx: ResultContext) {
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

  public visitMethodDeclarator(ctx: MethodDeclaratorContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const name = [];
    map.set('name', name);
    const params = [];
    map.set('params', params);
    const returnType = [];
    map.set('returnType', returnType);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1145:
            {
              name.push(this.visit(it));
            }
            break;
          case 1147:
            {
              params.push(this.visit(it));
            }
            break;
          case 1151:
            {
              returnType.push(this.visit(it));
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

  public visitMethodName(ctx: MethodNameContext) {
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

  public visitFormalParameterList(ctx: FormalParameterListContext) {
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
            case 1156:
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
            case 1160:
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

  public visitFormalParameters(ctx: FormalParametersContext) {
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
            case 1163:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1165:
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

  public visitFormalParameter(ctx: FormalParameterContext) {
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
          case 1181:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 1187:
            {
              type.push(this.visit(it));
            }
            break;
          case 1188:
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

  public visitParameterDeclaratorIds(ctx: ParameterDeclaratorIdsContext) {
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
            case 1190:
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

  public visitParameterDeclaratorId(ctx: ParameterDeclaratorIdContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const typeSuffix = [];
    map.set('typeSuffix', typeSuffix);
    const name = [];
    map.set('name', name);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1192:
            {
              name.push(this.visit(it));
            }
            break;
          case 1193:
            {
              typeSuffix.push(this.visit(it));
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
    const node = this.castTo(map, UniVariableDef);
    return node;
  }

  public visitParameterName(ctx: ParameterNameContext) {
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

  public visitMethodBody(ctx: MethodBodyContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1249:
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

  public visitConstructorDeclaration(ctx: ConstructorDeclarationContext) {
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
          case 1258:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 1264:
            {
              merge.push(this.visit(it));
            }
            break;
          case 1268:
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

  public visitConstructorModifier(ctx: ConstructorModifierContext) {
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

  public visitConstructorDeclarator(ctx: ConstructorDeclaratorContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const args = [];
    map.set('args', args);
    const name = [];
    map.set('name', name);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1279:
            {
              name.push(this.visit(it));
            }
            break;
          case 1281:
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
    const node = this.castTo(map, UniFunctionDec);
    return node;
  }

  public visitSimpleTypeName(ctx: SimpleTypeNameContext) {
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

  public visitInterfaceDeclaration(ctx: InterfaceDeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1404:
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

  public visitNormalInterfaceDeclaration(ctx: NormalInterfaceDeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const interfaces = [];
    map.set('interfaces', interfaces);
    const members = [];
    map.set('members', members);
    const className = [];
    map.set('className', className);
    const modifiers = [];
    map.set('modifiers', modifiers);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1408:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 1410:
            {
              className.push(this.visit(it));
            }
            break;
          case 1414:
            {
              interfaces.push(this.visit(it));
            }
            break;
          case 1417:
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

  public visitInterfaceModifiers(ctx: InterfaceModifiersContext) {
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
            case 1419:
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
    const node = this.castToList(map, String);
    return node;
  }

  public visitInterfaceName(ctx: InterfaceNameContext) {
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

  public visitInterfaceModifier(ctx: InterfaceModifierContext) {
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

  public visitExtendsInterfaces(ctx: ExtendsInterfacesContext) {
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
            case 1437:
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
    const node = this.castToList(map, String);
    return node;
  }

  public visitInterfaceBody(ctx: InterfaceBodyContext) {
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
            case 1440:
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
    const node = this.castToList(map, UniDecralation);
    return node;
  }

  public visitInterfaceMemberDeclaration(ctx: InterfaceMemberDeclarationContext) {
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
            case 1448:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1449:
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
    const node = this.castToList(map, UniDecralation);
    return node;
  }

  public visitConstantDeclaration(ctx: ConstantDeclarationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const add = [];
    map.set('add', add);
    const modifiers = [];
    map.set('modifiers', modifiers);
    const type = [];
    map.set('type', type);
    const n = ctx.childCount;
    if (0 < n) {
      for (let i = 0; i < n; ++i) {
        const it = ctx.getChild(i);
        if (it instanceof RuleContext) {
          switch (it.invokingState) {
            case 1455:
              {
                modifiers.push(this.visit(it));
              }
              break;
            case 1456:
              {
                type.push(this.visit(it));
              }
              break;
            case 1457:
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

  public visitConstantModifiers(ctx: ConstantModifiersContext) {
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
            case 1460:
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
    const node = this.castToList(map, String);
    return node;
  }

  public visitConstantModifier(ctx: ConstantModifierContext) {
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

  public visitInterfaceMethodDeclaration(ctx: InterfaceMethodDeclarationContext) {
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
          case 1472:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 1473:
            {
              merge.push(this.visit(it));
            }
            break;
          case 1474:
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

  public visitInterfaceMethodModifiers(ctx: InterfaceMethodModifiersContext) {
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
            case 1476:
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
    const node = this.castToList(map, String);
    return node;
  }

  public visitInterfaceMethodModifier(ctx: InterfaceMethodModifierContext) {
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

  public visitArrayInitializer(ctx: ArrayInitializerContext) {
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
          case 1600:
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

  public visitVariableInitializerList(ctx: VariableInitializerListContext) {
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
            case 1608:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1610:
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

  public visitBlock(ctx: BlockContext) {
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
          case 1617:
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

  public visitBlockStatements(ctx: BlockStatementsContext) {
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
            case 1622:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 1623:
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

  public visitLocalVariableDeclarationStatement(ctx: LocalVariableDeclarationStatementContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const merge = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1634:
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
    let node = this.castTo(map, UniVariableDec);
    if (typeof node === 'object' && 'merge' in node) {
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniVariableDec));
      });
    } else {
      node = new UniVariableDec();
      merge.forEach((it: any) => {
        node.merge(this.castTo(it, UniVariableDec));
      });
    }
    return node;
  }

  public visitLocalVariableDeclaration(ctx: LocalVariableDeclarationContext) {
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
          case 1637:
            {
              modifiers.push(this.visit(it));
            }
            break;
          case 1643:
            {
              type.push(this.visit(it));
            }
            break;
          case 1644:
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

  public visitExpressionStatement(ctx: ExpressionStatementContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1685:
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

  public visitIfThenStatement(ctx: IfThenStatementContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const trueStatement = [];
    map.set('trueStatement', trueStatement);
    const cond = [];
    map.set('cond', cond);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 1699:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1701:
            {
              trueStatement.push(this.visit(it));
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

  public visitIfThenElseStatement(ctx: IfThenElseStatementContext) {
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
          case 1705:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1707:
            {
              trueStatement.push(this.visit(it));
            }
            break;
          case 1709:
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

  public visitIfThenElseStatementNoShortIf(ctx: IfThenElseStatementNoShortIfContext) {
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
          case 1713:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1715:
            {
              trueStatement.push(this.visit(it));
            }
            break;
          case 1717:
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

  public visitWhileStatement(ctx: WhileStatementContext) {
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
          case 1778:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1780:
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

  public visitWhileStatementNoShortIf(ctx: WhileStatementNoShortIfContext) {
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
          case 1784:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1786:
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

  public visitBasicForStatement(ctx: BasicForStatementContext) {
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
          case 1806:
            {
              init.push(this.visit(it));
            }
            break;
          case 1810:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1814:
            {
              step.push(this.visit(it));
            }
            break;
          case 1818:
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

  public visitBasicForStatementNoShortIf(ctx: BasicForStatementNoShortIfContext) {
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
          case 1822:
            {
              init.push(this.visit(it));
            }
            break;
          case 1826:
            {
              cond.push(this.visit(it));
            }
            break;
          case 1830:
            {
              step.push(this.visit(it));
            }
            break;
          case 1834:
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
          case 1893:
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

  public visitClassInstanceCreationExpression_lfno_primary(
    ctx: ClassInstanceCreationExpression_lfno_primaryContext,
  ) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const args = [];
    map.set('args', args);
    const type = [];
    map.set('type', type);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2299:
            {
              args.push(this.visit(it));
            }
            break;
          case 2323:
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
          case Java8Parser.Identifier:
            {
              type.push(this.flatten(this.visit(it)));
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
    const node = this.castTo(map, UniNew);
    return node;
  }

  public visitArrayAccess(ctx: ArrayAccessContext) {
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
          case 2366:
            {
              left.push(this.visit(it));
            }
            break;
          case 2368:
            {
              right.push(this.visit(it));
            }
            break;
          case 2371:
            {
              left.push(this.visit(it));
            }
            break;
          case 2373:
            {
              right.push(this.visit(it));
            }
            break;
          case 2378:
            {
              left.push(this.visit(it));
            }
            break;
          case 2380:
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
          case Java8Parser.LBRACK:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case Java8Parser.RBRACK:
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

  public visitArrayAccess_lf_primary(ctx: ArrayAccess_lf_primaryContext) {
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
          case 2388:
            {
              left.push(this.visit(it));
            }
            break;
          case 2390:
            {
              right.push(this.visit(it));
            }
            break;
          case 2393:
            {
              left.push(this.visit(it));
            }
            break;
          case 2395:
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
          case Java8Parser.LBRACK:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case Java8Parser.RBRACK:
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
    return map;
  }

  public visitArrayAccess_lfno_primary(ctx: ArrayAccess_lfno_primaryContext) {
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
          case 2403:
            {
              left.push(this.visit(it));
            }
            break;
          case 2405:
            {
              right.push(this.visit(it));
            }
            break;
          case 2408:
            {
              left.push(this.visit(it));
            }
            break;
          case 2410:
            {
              right.push(this.visit(it));
            }
            break;
          case 2415:
            {
              left.push(this.visit(it));
            }
            break;
          case 2417:
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
          case Java8Parser.LBRACK:
            {
              operator.push(this.flatten(this.visit(it)));
            }
            break;
          case Java8Parser.RBRACK:
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

  public visitMethodInvocation(ctx: MethodInvocationContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const args = [];
    map.set('args', args);
    const receiver = [];
    map.set('receiver', receiver);
    const methodName = [];
    map.set('methodName', methodName);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2425:
            {
              methodName.push(this.visit(it));
            }
            break;
          case 2427:
            {
              args.push(this.visit(it));
            }
            break;
          case 2432:
            {
              receiver.push(this.visit(it));
            }
            break;
          case 2437:
            {
              methodName.push(this.visit(it));
            }
            break;
          case 2439:
            {
              args.push(this.visit(it));
            }
            break;
          case 2444:
            {
              receiver.push(this.visit(it));
            }
            break;
          case 2449:
            {
              methodName.push(this.visit(it));
            }
            break;
          case 2451:
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

  public visitReceivers(ctx: ReceiversContext) {
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
          case 2495:
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

  public visitReceiver(ctx: ReceiverContext) {
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
            case 2497:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 2499:
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
    const node = this.castToList(map, UniIdent);
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
          case Java8Parser.Identifier:
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

  public visitMethodInvocation_lfno_primary(ctx: MethodInvocation_lfno_primaryContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const args = [];
    map.set('args', args);
    const receiver = [];
    map.set('receiver', receiver);
    const methodName = [];
    map.set('methodName', methodName);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2518:
            {
              methodName.push(this.visit(it));
            }
            break;
          case 2520:
            {
              args.push(this.visit(it));
            }
            break;
          case 2525:
            {
              receiver.push(this.visit(it));
            }
            break;
          case 2527:
            {
              receiver.push(this.visit(it));
            }
            break;
          case 2530:
            {
              methodName.push(this.visit(it));
            }
            break;
          case 2532:
            {
              args.push(this.visit(it));
            }
            break;
          case 2537:
            {
              receiver.push(this.visit(it));
            }
            break;
          case 2539:
            {
              receiver.push(this.visit(it));
            }
            break;
          case 2542:
            {
              methodName.push(this.visit(it));
            }
            break;
          case 2544:
            {
              args.push(this.visit(it));
            }
            break;
          case 2551:
            {
              receiver.push(this.visit(it));
            }
            break;
          case 2554:
            {
              methodName.push(this.visit(it));
            }
            break;
          case 2556:
            {
              args.push(this.visit(it));
            }
            break;
          case 2561:
            {
              receiver.push(this.visit(it));
            }
            break;
          case 2568:
            {
              methodName.push(this.visit(it));
            }
            break;
          case 2570:
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

  public visitArgumentList(ctx: ArgumentListContext) {
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
            case 2577:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 2579:
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

  public visitArrayCreationExpression(ctx: ArrayCreationExpressionContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const elementsNum = [];
    map.set('elementsNum', elementsNum);
    const type = [];
    map.set('type', type);
    const value = [];
    map.set('value', value);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 2683:
            {
              type.push(this.visit(it));
            }
            break;
          case 2684:
            {
              elementsNum.push(this.visit(it));
            }
            break;
          case 2689:
            {
              type.push(this.visit(it));
            }
            break;
          case 2690:
            {
              elementsNum.push(this.visit(it));
            }
            break;
          case 2695:
            {
              type.push(this.visit(it));
            }
            break;
          case 2697:
            {
              value.push(this.visit(it));
            }
            break;
          case 2700:
            {
              type.push(this.visit(it));
            }
            break;
          case 2702:
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
    const node = this.castTo(map, UniNewArray);
    return node;
  }

  public visitDimExprs(ctx: DimExprsContext) {
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
            case 2706:
              {
                const results = this.flatten(this.visit(it));
                if (Array.isArray(results)) {
                  for (const result of results) add.push(result);
                } else add.push(results);
              }
              break;
            case 2707:
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

  public visitDimExpr(ctx: DimExprContext) {
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
            case 2720:
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

  public visitAssignment(ctx: AssignmentContext) {
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
          case 2761:
            {
              left.push(this.visit(it));
            }
            break;
          case 2762:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2763:
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
    const node = this.castTo(map, UniBinOp);
    return node;
  }

  public visitAssignmentOperator(ctx: AssignmentOperatorContext) {
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

  public visitConditionalExpression(ctx: ConditionalExpressionContext) {
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
          case 2772:
            {
              ret.push(this.visit(it));
            }
            break;
          case 2773:
            {
              cond.push(this.visit(it));
            }
            break;
          case 2775:
            {
              trueExpr.push(this.visit(it));
            }
            break;
          case 2777:
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

  public visitConditionalOrExpression(ctx: ConditionalOrExpressionContext) {
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
          case 2784:
            {
              ret.push(this.visit(it));
            }
            break;
          case 478:
            {
              left.push(this.visit(it));
            }
            break;
          case 2787:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2788:
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

  public visitConditionalAndExpression(ctx: ConditionalAndExpressionContext) {
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
          case 2798:
            {
              ret.push(this.visit(it));
            }
            break;
          case 482:
            {
              left.push(this.visit(it));
            }
            break;
          case 2801:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2802:
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

  public visitInclusiveOrExpression(ctx: InclusiveOrExpressionContext) {
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
          case 2812:
            {
              ret.push(this.visit(it));
            }
            break;
          case 486:
            {
              left.push(this.visit(it));
            }
            break;
          case 2815:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2816:
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

  public visitExclusiveOrExpression(ctx: ExclusiveOrExpressionContext) {
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
          case 2826:
            {
              ret.push(this.visit(it));
            }
            break;
          case 490:
            {
              left.push(this.visit(it));
            }
            break;
          case 2829:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2830:
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

  public visitAndExpression(ctx: AndExpressionContext) {
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
          case 2840:
            {
              ret.push(this.visit(it));
            }
            break;
          case 494:
            {
              left.push(this.visit(it));
            }
            break;
          case 2843:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2844:
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

  public visitEqualityExpression(ctx: EqualityExpressionContext) {
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
          case 2856:
            {
              ret.push(this.visit(it));
            }
            break;
          case 500:
            {
              left.push(this.visit(it));
            }
            break;
          case 2859:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2860:
            {
              right.push(this.visit(it));
            }
            break;
          case 2863:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2864:
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

  public visitRelationalExpression(ctx: RelationalExpressionContext) {
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
          case 2882:
            {
              ret.push(this.visit(it));
            }
            break;
          case 512:
            {
              left.push(this.visit(it));
            }
            break;
          case 2885:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2886:
            {
              right.push(this.visit(it));
            }
            break;
          case 2889:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2890:
            {
              right.push(this.visit(it));
            }
            break;
          case 2893:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2894:
            {
              right.push(this.visit(it));
            }
            break;
          case 2897:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2898:
            {
              right.push(this.visit(it));
            }
            break;
          case 2901:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2902:
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

  public visitShiftExpression(ctx: ShiftExpressionContext) {
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
          case 2920:
            {
              ret.push(this.visit(it));
            }
            break;
          case 520:
            {
              left.push(this.visit(it));
            }
            break;
          case 2923:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2924:
            {
              right.push(this.visit(it));
            }
            break;
          case 2927:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2928:
            {
              right.push(this.visit(it));
            }
            break;
          case 2931:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2932:
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

  public visitAdditiveExpression(ctx: AdditiveExpressionContext) {
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
          case 2940:
            {
              ret.push(this.visit(it));
            }
            break;
          case 522:
            {
              left.push(this.visit(it));
            }
            break;
          case 2943:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2944:
            {
              right.push(this.visit(it));
            }
            break;
          case 2947:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2948:
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

  public visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext) {
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
          case 2962:
            {
              ret.push(this.visit(it));
            }
            break;
          case 530:
            {
              left.push(this.visit(it));
            }
            break;
          case 2965:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2966:
            {
              right.push(this.visit(it));
            }
            break;
          case 2969:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2970:
            {
              right.push(this.visit(it));
            }
            break;
          case 2973:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2974:
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

  public visitUnaryExpression(ctx: UnaryExpressionContext) {
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
          case 2985:
            {
              ret.push(this.visit(it));
            }
            break;
          case 2986:
            {
              ret.push(this.visit(it));
            }
            break;
          case 2987:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2988:
            {
              expr.push(this.visit(it));
            }
            break;
          case 2990:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2991:
            {
              expr.push(this.visit(it));
            }
            break;
          case 2993:
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

  public visitPreIncrementExpression(ctx: PreIncrementExpressionContext) {
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
          case 2998:
            {
              operator.push(this.visit(it));
            }
            break;
          case 2999:
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

  public visitPreDecrementExpression(ctx: PreDecrementExpressionContext) {
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
          case 3003:
            {
              operator.push(this.visit(it));
            }
            break;
          case 3004:
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

  public visitUnaryExpressionNotPlusMinus(ctx: UnaryExpressionNotPlusMinusContext) {
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
          case 3010:
            {
              ret.push(this.visit(it));
            }
            break;
          case 3011:
            {
              operator.push(this.visit(it));
            }
            break;
          case 3012:
            {
              expr.push(this.visit(it));
            }
            break;
          case 3014:
            {
              operator.push(this.visit(it));
            }
            break;
          case 3015:
            {
              expr.push(this.visit(it));
            }
            break;
          case 3017:
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

  public visitPostfixExpression(ctx: PostfixExpressionContext) {
    const map = new Map<string, any>();
    const none = [];
    map.set('none', none);
    const ret = [];
    const left = [];
    map.set('left', left);
    const operator = [];
    map.set('operator', operator);
    const n = ctx.childCount;
    for (let i = 0; i < n; ++i) {
      const it = ctx.getChild(i);
      if (it instanceof RuleContext) {
        switch (it.invokingState) {
          case 3020:
            {
              ret.push(this.visit(it));
            }
            break;
          case 3021:
            {
              ret.push(this.visit(it));
            }
            break;
          case 3022:
            {
              left.push(this.visit(it));
            }
            break;
          case 3023:
            {
              left.push(this.visit(it));
            }
            break;
          case 3026:
            {
              operator.push(this.visit(it));
            }
            break;
          case 3027:
            {
              operator.push(this.visit(it));
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

  public visitPostIncrementExpression(ctx: PostIncrementExpressionContext) {
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
          case 3035:
            {
              expr.push(this.visit(it));
            }
            break;
          case 3036:
            {
              operator.push(this.visit(it));
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
    const node = this.castTo(map, UniUnaryOp);
    return node;
  }

  public visitPostDecrementExpression(ctx: PostDecrementExpressionContext) {
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
          case 3040:
            {
              expr.push(this.visit(it));
            }
            break;
          case 3041:
            {
              operator.push(this.visit(it));
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
    const node = this.castTo(map, UniUnaryOp);
    return node;
  }
}
