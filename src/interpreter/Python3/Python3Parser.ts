// Generated from C:\develop\UniMapperGeneratorForTS\net.unicoen\..\UniMapperGenerator\src-gen\Python3.g4 by ANTLR 4.6-SNAPSHOT
// @ts-nocheck
import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { Python3Visitor } from './Python3Visitor';

export class Python3Parser extends Parser {
  public static readonly Shifts = 1;
  public static readonly AddMinus = 2;
  public static readonly TermOp = 3;
  public static readonly FactorOp = 4;
  public static readonly STRING = 5;
  public static readonly INTEGER = 6;
  public static readonly DEF = 7;
  public static readonly RETURN = 8;
  public static readonly RAISE = 9;
  public static readonly FROM = 10;
  public static readonly IMPORT = 11;
  public static readonly AS = 12;
  public static readonly GLOBAL = 13;
  public static readonly NONLOCAL = 14;
  public static readonly ASSERT = 15;
  public static readonly IF = 16;
  public static readonly ELIF = 17;
  public static readonly ELSE = 18;
  public static readonly WHILE = 19;
  public static readonly FOR = 20;
  public static readonly IN = 21;
  public static readonly TRY = 22;
  public static readonly FINALLY = 23;
  public static readonly WITH = 24;
  public static readonly EXCEPT = 25;
  public static readonly LAMBDA = 26;
  public static readonly OR = 27;
  public static readonly AND = 28;
  public static readonly NOT = 29;
  public static readonly IS = 30;
  public static readonly NONE = 31;
  public static readonly TRUE = 32;
  public static readonly FALSE = 33;
  public static readonly CLASS = 34;
  public static readonly YIELD = 35;
  public static readonly DEL = 36;
  public static readonly PASS = 37;
  public static readonly CONTINUE = 38;
  public static readonly BREAK = 39;
  public static readonly ASYNC = 40;
  public static readonly AWAIT = 41;
  public static readonly NEWLINE = 42;
  public static readonly NAME = 43;
  public static readonly STRING_LITERAL = 44;
  public static readonly BYTES_LITERAL = 45;
  public static readonly DECIMAL_INTEGER = 46;
  public static readonly OCT_INTEGER = 47;
  public static readonly HEX_INTEGER = 48;
  public static readonly BIN_INTEGER = 49;
  public static readonly FLOAT_NUMBER = 50;
  public static readonly IMAG_NUMBER = 51;
  public static readonly DOT = 52;
  public static readonly ELLIPSIS = 53;
  public static readonly STAR = 54;
  public static readonly OPEN_PAREN = 55;
  public static readonly CLOSE_PAREN = 56;
  public static readonly COMMA = 57;
  public static readonly COLON = 58;
  public static readonly SEMI_COLON = 59;
  public static readonly POWER = 60;
  public static readonly ASSIGN = 61;
  public static readonly OPEN_BRACK = 62;
  public static readonly CLOSE_BRACK = 63;
  public static readonly OR_OP = 64;
  public static readonly XOR = 65;
  public static readonly AND_OP = 66;
  public static readonly LEFT_SHIFT = 67;
  public static readonly RIGHT_SHIFT = 68;
  public static readonly ADD = 69;
  public static readonly MINUS = 70;
  public static readonly DIV = 71;
  public static readonly MOD = 72;
  public static readonly IDIV = 73;
  public static readonly NOT_OP = 74;
  public static readonly OPEN_BRACE = 75;
  public static readonly CLOSE_BRACE = 76;
  public static readonly LESS_THAN = 77;
  public static readonly GREATER_THAN = 78;
  public static readonly EQUALS = 79;
  public static readonly GT_EQ = 80;
  public static readonly LT_EQ = 81;
  public static readonly NOT_EQ_1 = 82;
  public static readonly NOT_EQ_2 = 83;
  public static readonly AT = 84;
  public static readonly ARROW = 85;
  public static readonly ADD_ASSIGN = 86;
  public static readonly SUB_ASSIGN = 87;
  public static readonly MULT_ASSIGN = 88;
  public static readonly AT_ASSIGN = 89;
  public static readonly DIV_ASSIGN = 90;
  public static readonly MOD_ASSIGN = 91;
  public static readonly AND_ASSIGN = 92;
  public static readonly OR_ASSIGN = 93;
  public static readonly XOR_ASSIGN = 94;
  public static readonly LEFT_SHIFT_ASSIGN = 95;
  public static readonly RIGHT_SHIFT_ASSIGN = 96;
  public static readonly POWER_ASSIGN = 97;
  public static readonly IDIV_ASSIGN = 98;
  public static readonly SKIP_ = 99;
  public static readonly UNKNOWN_CHAR = 100;
  public static readonly INDENT = 101;
  public static readonly DEDENT = 102;
  public static readonly RULE_translationunit = 0;
  public static readonly RULE_single_input = 1;
  public static readonly RULE_file_input = 2;
  public static readonly RULE_decorator = 3;
  public static readonly RULE_decorators = 4;
  public static readonly RULE_decorated = 5;
  public static readonly RULE_async_funcdef = 6;
  public static readonly RULE_funcdef = 7;
  public static readonly RULE_parameters = 8;
  public static readonly RULE_typedargslist = 9;
  public static readonly RULE_tfpdef = 10;
  public static readonly RULE_varargslist = 11;
  public static readonly RULE_vfpdef = 12;
  public static readonly RULE_stmts = 13;
  public static readonly RULE_stmt = 14;
  public static readonly RULE_simple_stmt = 15;
  public static readonly RULE_small_stmt = 16;
  public static readonly RULE_expr_stmt = 17;
  public static readonly RULE_expr_stmt_right = 18;
  public static readonly RULE_test_star_expr = 19;
  public static readonly RULE_testlist_star_expr_array = 20;
  public static readonly RULE_testlist_star_expr = 21;
  public static readonly RULE_augassign = 22;
  public static readonly RULE_del_stmt = 23;
  public static readonly RULE_pass_stmt = 24;
  public static readonly RULE_flow_stmt = 25;
  public static readonly RULE_break_stmt = 26;
  public static readonly RULE_continue_stmt = 27;
  public static readonly RULE_return_stmt = 28;
  public static readonly RULE_yield_stmt = 29;
  public static readonly RULE_raise_stmt = 30;
  public static readonly RULE_import_stmt = 31;
  public static readonly RULE_import_name = 32;
  public static readonly RULE_import_from = 33;
  public static readonly RULE_import_as_name = 34;
  public static readonly RULE_dotted_as_name = 35;
  public static readonly RULE_import_as_names = 36;
  public static readonly RULE_dotted_as_names = 37;
  public static readonly RULE_dotted_name = 38;
  public static readonly RULE_global_stmt = 39;
  public static readonly RULE_nonlocal_stmt = 40;
  public static readonly RULE_assert_stmt = 41;
  public static readonly RULE_compound_stmt = 42;
  public static readonly RULE_async_stmt = 43;
  public static readonly RULE_if_stmt = 44;
  public static readonly RULE_while_stmt = 45;
  public static readonly RULE_for_stmt = 46;
  public static readonly RULE_try_stmt = 47;
  public static readonly RULE_with_stmt = 48;
  public static readonly RULE_with_item = 49;
  public static readonly RULE_except_clause = 50;
  public static readonly RULE_suite = 51;
  public static readonly RULE_test = 52;
  public static readonly RULE_test_nocond = 53;
  public static readonly RULE_lambdef = 54;
  public static readonly RULE_lambdef_nocond = 55;
  public static readonly RULE_or_test = 56;
  public static readonly RULE_and_test = 57;
  public static readonly RULE_not_test = 58;
  public static readonly RULE_comparison = 59;
  public static readonly RULE_comp_op = 60;
  public static readonly RULE_star_expr = 61;
  public static readonly RULE_expr = 62;
  public static readonly RULE_xor_expr = 63;
  public static readonly RULE_and_expr = 64;
  public static readonly RULE_shift_expr = 65;
  public static readonly RULE_arith_expr = 66;
  public static readonly RULE_term = 67;
  public static readonly RULE_factor = 68;
  public static readonly RULE_power = 69;
  public static readonly RULE_atom_expr = 70;
  public static readonly RULE_atom = 71;
  public static readonly RULE_array = 72;
  public static readonly RULE_ident = 73;
  public static readonly RULE_bool = 74;
  public static readonly RULE_testlist_comp = 75;
  public static readonly RULE_trailer = 76;
  public static readonly RULE_method_call_of_method_return = 77;
  public static readonly RULE_method_call_no_arg = 78;
  public static readonly RULE_method_call = 79;
  public static readonly RULE_array_access = 80;
  public static readonly RULE_field_access = 81;
  public static readonly RULE_subscriptlist = 82;
  public static readonly RULE_subscript = 83;
  public static readonly RULE_sliceop = 84;
  public static readonly RULE_exprlist = 85;
  public static readonly RULE_testlist_array = 86;
  public static readonly RULE_testlist = 87;
  public static readonly RULE_dictorsetmaker = 88;
  public static readonly RULE_classdef = 89;
  public static readonly RULE_arglist = 90;
  public static readonly RULE_argument = 91;
  public static readonly RULE_comp_iter = 92;
  public static readonly RULE_comp_for = 93;
  public static readonly RULE_comp_if = 94;
  public static readonly RULE_encoding_decl = 95;
  public static readonly RULE_yield_expr = 96;
  public static readonly RULE_yield_arg = 97;
  public static readonly RULE_number = 98;
  public static readonly RULE_integer = 99;
  public static readonly RULE_float = 100;
  public static readonly RULE_imaginary = 101;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'translationunit',
    'single_input',
    'file_input',
    'decorator',
    'decorators',
    'decorated',
    'async_funcdef',
    'funcdef',
    'parameters',
    'typedargslist',
    'tfpdef',
    'varargslist',
    'vfpdef',
    'stmts',
    'stmt',
    'simple_stmt',
    'small_stmt',
    'expr_stmt',
    'expr_stmt_right',
    'test_star_expr',
    'testlist_star_expr_array',
    'testlist_star_expr',
    'augassign',
    'del_stmt',
    'pass_stmt',
    'flow_stmt',
    'break_stmt',
    'continue_stmt',
    'return_stmt',
    'yield_stmt',
    'raise_stmt',
    'import_stmt',
    'import_name',
    'import_from',
    'import_as_name',
    'dotted_as_name',
    'import_as_names',
    'dotted_as_names',
    'dotted_name',
    'global_stmt',
    'nonlocal_stmt',
    'assert_stmt',
    'compound_stmt',
    'async_stmt',
    'if_stmt',
    'while_stmt',
    'for_stmt',
    'try_stmt',
    'with_stmt',
    'with_item',
    'except_clause',
    'suite',
    'test',
    'test_nocond',
    'lambdef',
    'lambdef_nocond',
    'or_test',
    'and_test',
    'not_test',
    'comparison',
    'comp_op',
    'star_expr',
    'expr',
    'xor_expr',
    'and_expr',
    'shift_expr',
    'arith_expr',
    'term',
    'factor',
    'power',
    'atom_expr',
    'atom',
    'array',
    'ident',
    'bool',
    'testlist_comp',
    'trailer',
    'method_call_of_method_return',
    'method_call_no_arg',
    'method_call',
    'array_access',
    'field_access',
    'subscriptlist',
    'subscript',
    'sliceop',
    'exprlist',
    'testlist_array',
    'testlist',
    'dictorsetmaker',
    'classdef',
    'arglist',
    'argument',
    'comp_iter',
    'comp_for',
    'comp_if',
    'encoding_decl',
    'yield_expr',
    'yield_arg',
    'number',
    'integer',
    'float',
    'imaginary',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'def'",
    "'return'",
    "'raise'",
    "'from'",
    "'import'",
    "'as'",
    "'global'",
    "'nonlocal'",
    "'assert'",
    "'if'",
    "'elif'",
    "'else'",
    "'while'",
    "'for'",
    "'in'",
    "'try'",
    "'finally'",
    "'with'",
    "'except'",
    "'lambda'",
    "'or'",
    "'and'",
    "'not'",
    "'is'",
    "'None'",
    "'True'",
    "'False'",
    "'class'",
    "'yield'",
    "'del'",
    "'pass'",
    "'continue'",
    "'break'",
    "'async'",
    "'await'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'.'",
    "'...'",
    "'*'",
    "'('",
    "')'",
    "','",
    "':'",
    "';'",
    "'**'",
    "'='",
    "'['",
    "']'",
    "'|'",
    "'^'",
    "'&'",
    "'<<'",
    "'>>'",
    "'+'",
    "'-'",
    "'/'",
    "'%'",
    "'//'",
    "'~'",
    "'{'",
    "'}'",
    "'<'",
    "'>'",
    "'=='",
    "'>='",
    "'<='",
    "'<>'",
    "'!='",
    "'@'",
    "'->'",
    "'+='",
    "'-='",
    "'*='",
    "'@='",
    "'/='",
    "'%='",
    "'&='",
    "'|='",
    "'^='",
    "'<<='",
    "'>>='",
    "'**='",
    "'//='",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'Shifts',
    'AddMinus',
    'TermOp',
    'FactorOp',
    'STRING',
    'INTEGER',
    'DEF',
    'RETURN',
    'RAISE',
    'FROM',
    'IMPORT',
    'AS',
    'GLOBAL',
    'NONLOCAL',
    'ASSERT',
    'IF',
    'ELIF',
    'ELSE',
    'WHILE',
    'FOR',
    'IN',
    'TRY',
    'FINALLY',
    'WITH',
    'EXCEPT',
    'LAMBDA',
    'OR',
    'AND',
    'NOT',
    'IS',
    'NONE',
    'TRUE',
    'FALSE',
    'CLASS',
    'YIELD',
    'DEL',
    'PASS',
    'CONTINUE',
    'BREAK',
    'ASYNC',
    'AWAIT',
    'NEWLINE',
    'NAME',
    'STRING_LITERAL',
    'BYTES_LITERAL',
    'DECIMAL_INTEGER',
    'OCT_INTEGER',
    'HEX_INTEGER',
    'BIN_INTEGER',
    'FLOAT_NUMBER',
    'IMAG_NUMBER',
    'DOT',
    'ELLIPSIS',
    'STAR',
    'OPEN_PAREN',
    'CLOSE_PAREN',
    'COMMA',
    'COLON',
    'SEMI_COLON',
    'POWER',
    'ASSIGN',
    'OPEN_BRACK',
    'CLOSE_BRACK',
    'OR_OP',
    'XOR',
    'AND_OP',
    'LEFT_SHIFT',
    'RIGHT_SHIFT',
    'ADD',
    'MINUS',
    'DIV',
    'MOD',
    'IDIV',
    'NOT_OP',
    'OPEN_BRACE',
    'CLOSE_BRACE',
    'LESS_THAN',
    'GREATER_THAN',
    'EQUALS',
    'GT_EQ',
    'LT_EQ',
    'NOT_EQ_1',
    'NOT_EQ_2',
    'AT',
    'ARROW',
    'ADD_ASSIGN',
    'SUB_ASSIGN',
    'MULT_ASSIGN',
    'AT_ASSIGN',
    'DIV_ASSIGN',
    'MOD_ASSIGN',
    'AND_ASSIGN',
    'OR_ASSIGN',
    'XOR_ASSIGN',
    'LEFT_SHIFT_ASSIGN',
    'RIGHT_SHIFT_ASSIGN',
    'POWER_ASSIGN',
    'IDIV_ASSIGN',
    'SKIP_',
    'UNKNOWN_CHAR',
    'INDENT',
    'DEDENT',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    Python3Parser._LITERAL_NAMES,
    Python3Parser._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return Python3Parser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'Python3.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return Python3Parser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return Python3Parser._serializedATN;
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(Python3Parser._ATN, this);
  }
  // @RuleVersion(0)
  public translationunit(): TranslationunitContext {
    let _localctx: TranslationunitContext = new TranslationunitContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, Python3Parser.RULE_translationunit);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 205;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
          case 1:
            {
              this.state = 204;
              this.file_input();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public single_input(): Single_inputContext {
    let _localctx: Single_inputContext = new Single_inputContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, Python3Parser.RULE_single_input);
    try {
      this.state = 212;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 207;
            this.match(Python3Parser.NEWLINE);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 208;
            this.simple_stmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 209;
            this.compound_stmt();
            this.state = 210;
            this.match(Python3Parser.NEWLINE);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public file_input(): File_inputContext {
    let _localctx: File_inputContext = new File_inputContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, Python3Parser.RULE_file_input);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 218;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              this.state = 216;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                  {
                    this.state = 214;
                    this.match(Python3Parser.NEWLINE);
                  }
                  break;

                case 2:
                  {
                    this.state = 215;
                    this.stmt();
                  }
                  break;
              }
            }
          }
          this.state = 220;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public decorator(): DecoratorContext {
    let _localctx: DecoratorContext = new DecoratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, Python3Parser.RULE_decorator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 221;
        this.match(Python3Parser.AT);
        this.state = 222;
        this.dotted_name();
        this.state = 228;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.OPEN_PAREN) {
          {
            this.state = 223;
            this.match(Python3Parser.OPEN_PAREN);
            this.state = 225;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
              case 1:
                {
                  this.state = 224;
                  this.arglist();
                }
                break;
            }
            this.state = 227;
            this.match(Python3Parser.CLOSE_PAREN);
          }
        }

        this.state = 230;
        this.match(Python3Parser.NEWLINE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public decorators(): DecoratorsContext {
    let _localctx: DecoratorsContext = new DecoratorsContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, Python3Parser.RULE_decorators);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 232;
              this.decorator();
            }
          }
          this.state = 235;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === Python3Parser.AT);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public decorated(): DecoratedContext {
    let _localctx: DecoratedContext = new DecoratedContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, Python3Parser.RULE_decorated);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 237;
        this.decorators();
        this.state = 241;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Python3Parser.CLASS:
            {
              this.state = 238;
              this.classdef();
            }
            break;
          case Python3Parser.DEF:
            {
              this.state = 239;
              this.funcdef();
            }
            break;
          case Python3Parser.ASYNC:
            {
              this.state = 240;
              this.async_funcdef();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public async_funcdef(): Async_funcdefContext {
    let _localctx: Async_funcdefContext = new Async_funcdefContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, Python3Parser.RULE_async_funcdef);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 243;
        this.match(Python3Parser.ASYNC);
        this.state = 244;
        this.funcdef();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public funcdef(): FuncdefContext {
    let _localctx: FuncdefContext = new FuncdefContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, Python3Parser.RULE_funcdef);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 246;
        this.match(Python3Parser.DEF);
        this.state = 247;
        this.match(Python3Parser.NAME);
        this.state = 248;
        this.parameters();
        this.state = 251;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.ARROW) {
          {
            this.state = 249;
            this.match(Python3Parser.ARROW);
            this.state = 250;
            this.test();
          }
        }

        this.state = 253;
        this.match(Python3Parser.COLON);
        this.state = 254;
        this.suite();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public parameters(): ParametersContext {
    let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, Python3Parser.RULE_parameters);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 256;
        this.match(Python3Parser.OPEN_PAREN);
        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la - 43) & ~0x1f) === 0 &&
          ((1 << (_la - 43)) &
            ((1 << (Python3Parser.NAME - 43)) |
              (1 << (Python3Parser.STAR - 43)) |
              (1 << (Python3Parser.POWER - 43)))) !==
            0
        ) {
          {
            this.state = 257;
            this.typedargslist();
          }
        }

        this.state = 260;
        this.match(Python3Parser.CLOSE_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public typedargslist(): TypedargslistContext {
    let _localctx: TypedargslistContext = new TypedargslistContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, Python3Parser.RULE_typedargslist);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 343;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Python3Parser.NAME:
            {
              this.state = 262;
              this.tfpdef();
              this.state = 265;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.ASSIGN) {
                {
                  this.state = 263;
                  this.match(Python3Parser.ASSIGN);
                  this.state = 264;
                  this.test();
                }
              }

              this.state = 275;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 267;
                      this.match(Python3Parser.COMMA);
                      this.state = 268;
                      this.tfpdef();
                      this.state = 271;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (_la === Python3Parser.ASSIGN) {
                        {
                          this.state = 269;
                          this.match(Python3Parser.ASSIGN);
                          this.state = 270;
                          this.test();
                        }
                      }
                    }
                  }
                }
                this.state = 277;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
              }
              this.state = 311;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.COMMA) {
                {
                  this.state = 278;
                  this.match(Python3Parser.COMMA);
                  this.state = 309;
                  this._errHandler.sync(this);
                  switch (this._input.LA(1)) {
                    case Python3Parser.STAR:
                      {
                        this.state = 279;
                        this.match(Python3Parser.STAR);
                        this.state = 281;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.NAME) {
                          {
                            this.state = 280;
                            this.tfpdef();
                          }
                        }

                        this.state = 291;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                          if (_alt === 1) {
                            {
                              {
                                this.state = 283;
                                this.match(Python3Parser.COMMA);
                                this.state = 284;
                                this.tfpdef();
                                this.state = 287;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === Python3Parser.ASSIGN) {
                                  {
                                    this.state = 285;
                                    this.match(Python3Parser.ASSIGN);
                                    this.state = 286;
                                    this.test();
                                  }
                                }
                              }
                            }
                          }
                          this.state = 293;
                          this._errHandler.sync(this);
                          _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                        }
                        this.state = 302;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.COMMA) {
                          {
                            this.state = 294;
                            this.match(Python3Parser.COMMA);
                            this.state = 300;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Python3Parser.POWER) {
                              {
                                this.state = 295;
                                this.match(Python3Parser.POWER);
                                this.state = 296;
                                this.tfpdef();
                                this.state = 298;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === Python3Parser.COMMA) {
                                  {
                                    this.state = 297;
                                    this.match(Python3Parser.COMMA);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      break;
                    case Python3Parser.POWER:
                      {
                        this.state = 304;
                        this.match(Python3Parser.POWER);
                        this.state = 305;
                        this.tfpdef();
                        this.state = 307;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.COMMA) {
                          {
                            this.state = 306;
                            this.match(Python3Parser.COMMA);
                          }
                        }
                      }
                      break;
                    case Python3Parser.CLOSE_PAREN:
                      break;
                    default:
                      break;
                  }
                }
              }
            }
            break;
          case Python3Parser.STAR:
            {
              this.state = 313;
              this.match(Python3Parser.STAR);
              this.state = 315;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.NAME) {
                {
                  this.state = 314;
                  this.tfpdef();
                }
              }

              this.state = 325;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 317;
                      this.match(Python3Parser.COMMA);
                      this.state = 318;
                      this.tfpdef();
                      this.state = 321;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (_la === Python3Parser.ASSIGN) {
                        {
                          this.state = 319;
                          this.match(Python3Parser.ASSIGN);
                          this.state = 320;
                          this.test();
                        }
                      }
                    }
                  }
                }
                this.state = 327;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
              }
              this.state = 336;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.COMMA) {
                {
                  this.state = 328;
                  this.match(Python3Parser.COMMA);
                  this.state = 334;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === Python3Parser.POWER) {
                    {
                      this.state = 329;
                      this.match(Python3Parser.POWER);
                      this.state = 330;
                      this.tfpdef();
                      this.state = 332;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (_la === Python3Parser.COMMA) {
                        {
                          this.state = 331;
                          this.match(Python3Parser.COMMA);
                        }
                      }
                    }
                  }
                }
              }
            }
            break;
          case Python3Parser.POWER:
            {
              this.state = 338;
              this.match(Python3Parser.POWER);
              this.state = 339;
              this.tfpdef();
              this.state = 341;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.COMMA) {
                {
                  this.state = 340;
                  this.match(Python3Parser.COMMA);
                }
              }
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tfpdef(): TfpdefContext {
    let _localctx: TfpdefContext = new TfpdefContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, Python3Parser.RULE_tfpdef);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 345;
        this.match(Python3Parser.NAME);
        this.state = 348;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.COLON) {
          {
            this.state = 346;
            this.match(Python3Parser.COLON);
            this.state = 347;
            this.test();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public varargslist(): VarargslistContext {
    let _localctx: VarargslistContext = new VarargslistContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, Python3Parser.RULE_varargslist);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 431;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Python3Parser.NAME:
            {
              this.state = 350;
              this.vfpdef();
              this.state = 353;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.ASSIGN) {
                {
                  this.state = 351;
                  this.match(Python3Parser.ASSIGN);
                  this.state = 352;
                  this.test();
                }
              }

              this.state = 363;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 355;
                      this.match(Python3Parser.COMMA);
                      this.state = 356;
                      this.vfpdef();
                      this.state = 359;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (_la === Python3Parser.ASSIGN) {
                        {
                          this.state = 357;
                          this.match(Python3Parser.ASSIGN);
                          this.state = 358;
                          this.test();
                        }
                      }
                    }
                  }
                }
                this.state = 365;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
              }
              this.state = 399;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.COMMA) {
                {
                  this.state = 366;
                  this.match(Python3Parser.COMMA);
                  this.state = 397;
                  this._errHandler.sync(this);
                  switch (this._input.LA(1)) {
                    case Python3Parser.STAR:
                      {
                        this.state = 367;
                        this.match(Python3Parser.STAR);
                        this.state = 369;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.NAME) {
                          {
                            this.state = 368;
                            this.vfpdef();
                          }
                        }

                        this.state = 379;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                          if (_alt === 1) {
                            {
                              {
                                this.state = 371;
                                this.match(Python3Parser.COMMA);
                                this.state = 372;
                                this.vfpdef();
                                this.state = 375;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === Python3Parser.ASSIGN) {
                                  {
                                    this.state = 373;
                                    this.match(Python3Parser.ASSIGN);
                                    this.state = 374;
                                    this.test();
                                  }
                                }
                              }
                            }
                          }
                          this.state = 381;
                          this._errHandler.sync(this);
                          _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        }
                        this.state = 390;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.COMMA) {
                          {
                            this.state = 382;
                            this.match(Python3Parser.COMMA);
                            this.state = 388;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Python3Parser.POWER) {
                              {
                                this.state = 383;
                                this.match(Python3Parser.POWER);
                                this.state = 384;
                                this.vfpdef();
                                this.state = 386;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === Python3Parser.COMMA) {
                                  {
                                    this.state = 385;
                                    this.match(Python3Parser.COMMA);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      break;
                    case Python3Parser.POWER:
                      {
                        this.state = 392;
                        this.match(Python3Parser.POWER);
                        this.state = 393;
                        this.vfpdef();
                        this.state = 395;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.COMMA) {
                          {
                            this.state = 394;
                            this.match(Python3Parser.COMMA);
                          }
                        }
                      }
                      break;
                    case Python3Parser.COLON:
                      break;
                    default:
                      break;
                  }
                }
              }
            }
            break;
          case Python3Parser.STAR:
            {
              this.state = 401;
              this.match(Python3Parser.STAR);
              this.state = 403;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.NAME) {
                {
                  this.state = 402;
                  this.vfpdef();
                }
              }

              this.state = 413;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 405;
                      this.match(Python3Parser.COMMA);
                      this.state = 406;
                      this.vfpdef();
                      this.state = 409;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (_la === Python3Parser.ASSIGN) {
                        {
                          this.state = 407;
                          this.match(Python3Parser.ASSIGN);
                          this.state = 408;
                          this.test();
                        }
                      }
                    }
                  }
                }
                this.state = 415;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
              }
              this.state = 424;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.COMMA) {
                {
                  this.state = 416;
                  this.match(Python3Parser.COMMA);
                  this.state = 422;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === Python3Parser.POWER) {
                    {
                      this.state = 417;
                      this.match(Python3Parser.POWER);
                      this.state = 418;
                      this.vfpdef();
                      this.state = 420;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (_la === Python3Parser.COMMA) {
                        {
                          this.state = 419;
                          this.match(Python3Parser.COMMA);
                        }
                      }
                    }
                  }
                }
              }
            }
            break;
          case Python3Parser.POWER:
            {
              this.state = 426;
              this.match(Python3Parser.POWER);
              this.state = 427;
              this.vfpdef();
              this.state = 429;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.COMMA) {
                {
                  this.state = 428;
                  this.match(Python3Parser.COMMA);
                }
              }
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public vfpdef(): VfpdefContext {
    let _localctx: VfpdefContext = new VfpdefContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, Python3Parser.RULE_vfpdef);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 433;
        this.match(Python3Parser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public stmts(): StmtsContext {
    let _localctx: StmtsContext = new StmtsContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, Python3Parser.RULE_stmts);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 436;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 435;
                  this.stmt();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 438;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public stmt(): StmtContext {
    let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, Python3Parser.RULE_stmt);
    try {
      this.state = 442;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 440;
            this.simple_stmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 441;
            this.compound_stmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public simple_stmt(): Simple_stmtContext {
    let _localctx: Simple_stmtContext = new Simple_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 30, Python3Parser.RULE_simple_stmt);
    let _la: number;
    try {
      let _alt: number;
      this.state = 459;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 444;
            this.small_stmt();
            this.state = 445;
            this.match(Python3Parser.NEWLINE);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 447;
            this.small_stmt();
            this.state = 450;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 448;
                      this.match(Python3Parser.SEMI_COLON);
                      this.state = 449;
                      this.small_stmt();
                    }
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 452;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            this.state = 455;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === Python3Parser.SEMI_COLON) {
              {
                this.state = 454;
                this.match(Python3Parser.SEMI_COLON);
              }
            }

            this.state = 457;
            this.match(Python3Parser.NEWLINE);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public small_stmt(): Small_stmtContext {
    let _localctx: Small_stmtContext = new Small_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 32, Python3Parser.RULE_small_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 469;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
          case 1:
            {
              this.state = 461;
              this.expr_stmt();
            }
            break;

          case 2:
            {
              this.state = 462;
              this.del_stmt();
            }
            break;

          case 3:
            {
              this.state = 463;
              this.pass_stmt();
            }
            break;

          case 4:
            {
              this.state = 464;
              this.flow_stmt();
            }
            break;

          case 5:
            {
              this.state = 465;
              this.import_stmt();
            }
            break;

          case 6:
            {
              this.state = 466;
              this.global_stmt();
            }
            break;

          case 7:
            {
              this.state = 467;
              this.nonlocal_stmt();
            }
            break;

          case 8:
            {
              this.state = 468;
              this.assert_stmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public expr_stmt(): Expr_stmtContext {
    let _localctx: Expr_stmtContext = new Expr_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, Python3Parser.RULE_expr_stmt);
    try {
      this.state = 480;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 471;
            this.test_star_expr();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 472;
            this.testlist_star_expr();
            this.state = 473;
            this.augassign();
            this.state = 474;
            this.expr_stmt_right(0);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 476;
            this.testlist_star_expr();
            this.state = 477;
            this.match(Python3Parser.ASSIGN);
            this.state = 478;
            this.expr_stmt_right(0);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public expr_stmt_right(): Expr_stmt_rightContext;
  public expr_stmt_right(_p: number): Expr_stmt_rightContext;
  // @RuleVersion(0)
  public expr_stmt_right(_p?: number): Expr_stmt_rightContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Expr_stmt_rightContext = new Expr_stmt_rightContext(this._ctx, _parentState);
    let _prevctx: Expr_stmt_rightContext = _localctx;
    let _startState: number = 36;
    this.enterRecursionRule(_localctx, 36, Python3Parser.RULE_expr_stmt_right, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 483;
          this.test_star_expr();
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 502;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 500;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                case 1:
                  {
                    _localctx = new Expr_stmt_rightContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      Python3Parser.RULE_expr_stmt_right,
                    );
                    this.state = 485;
                    if (!this.precpred(this._ctx, 3)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 3)');
                    }
                    this.state = 486;
                    this.match(Python3Parser.COLON);
                    this.state = 487;
                    this.test();
                  }
                  break;

                case 2:
                  {
                    _localctx = new Expr_stmt_rightContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      Python3Parser.RULE_expr_stmt_right,
                    );
                    this.state = 488;
                    if (!this.precpred(this._ctx, 2)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 2)');
                    }
                    this.state = 489;
                    this.augassign();
                    this.state = 492;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                      case 1:
                        {
                          this.state = 490;
                          this.yield_expr();
                        }
                        break;

                      case 2:
                        {
                          this.state = 491;
                          this.testlist();
                        }
                        break;
                    }
                  }
                  break;

                case 3:
                  {
                    _localctx = new Expr_stmt_rightContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      Python3Parser.RULE_expr_stmt_right,
                    );
                    this.state = 494;
                    if (!this.precpred(this._ctx, 1)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 1)');
                    }
                    {
                      this.state = 495;
                      this.match(Python3Parser.ASSIGN);
                      this.state = 498;
                      this._errHandler.sync(this);
                      switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                        case 1:
                          {
                            this.state = 496;
                            this.yield_expr();
                          }
                          break;

                        case 2:
                          {
                            this.state = 497;
                            this.testlist_star_expr();
                          }
                          break;
                      }
                    }
                  }
                  break;
              }
            }
          }
          this.state = 504;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public test_star_expr(): Test_star_exprContext {
    let _localctx: Test_star_exprContext = new Test_star_exprContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, Python3Parser.RULE_test_star_expr);
    try {
      this.state = 507;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 505;
            this.test();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 506;
            this.star_expr();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public testlist_star_expr_array(): Testlist_star_expr_arrayContext {
    let _localctx: Testlist_star_expr_arrayContext = new Testlist_star_expr_arrayContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 40, Python3Parser.RULE_testlist_star_expr_array);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 509;
        this.test_star_expr();
        this.state = 514;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 510;
                this.match(Python3Parser.COMMA);
                this.state = 511;
                this.test_star_expr();
              }
            }
          }
          this.state = 516;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
        }
        this.state = 518;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
          case 1:
            {
              this.state = 517;
              this.match(Python3Parser.COMMA);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public testlist_star_expr(): Testlist_star_exprContext {
    let _localctx: Testlist_star_exprContext = new Testlist_star_exprContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, Python3Parser.RULE_testlist_star_expr);
    try {
      this.state = 522;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 520;
            this.test_star_expr();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 521;
            this.testlist_star_expr_array();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public augassign(): AugassignContext {
    let _localctx: AugassignContext = new AugassignContext(this._ctx, this.state);
    this.enterRule(_localctx, 44, Python3Parser.RULE_augassign);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 524;
        _la = this._input.LA(1);
        if (
          !(
            ((_la - 86) & ~0x1f) === 0 &&
            ((1 << (_la - 86)) &
              ((1 << (Python3Parser.ADD_ASSIGN - 86)) |
                (1 << (Python3Parser.SUB_ASSIGN - 86)) |
                (1 << (Python3Parser.MULT_ASSIGN - 86)) |
                (1 << (Python3Parser.AT_ASSIGN - 86)) |
                (1 << (Python3Parser.DIV_ASSIGN - 86)) |
                (1 << (Python3Parser.MOD_ASSIGN - 86)) |
                (1 << (Python3Parser.AND_ASSIGN - 86)) |
                (1 << (Python3Parser.OR_ASSIGN - 86)) |
                (1 << (Python3Parser.XOR_ASSIGN - 86)) |
                (1 << (Python3Parser.LEFT_SHIFT_ASSIGN - 86)) |
                (1 << (Python3Parser.RIGHT_SHIFT_ASSIGN - 86)) |
                (1 << (Python3Parser.POWER_ASSIGN - 86)) |
                (1 << (Python3Parser.IDIV_ASSIGN - 86)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public del_stmt(): Del_stmtContext {
    let _localctx: Del_stmtContext = new Del_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 46, Python3Parser.RULE_del_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 526;
        this.match(Python3Parser.DEL);
        this.state = 527;
        this.exprlist();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public pass_stmt(): Pass_stmtContext {
    let _localctx: Pass_stmtContext = new Pass_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 48, Python3Parser.RULE_pass_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 529;
        this.match(Python3Parser.PASS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public flow_stmt(): Flow_stmtContext {
    let _localctx: Flow_stmtContext = new Flow_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 50, Python3Parser.RULE_flow_stmt);
    try {
      this.state = 536;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Python3Parser.BREAK:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 531;
            this.break_stmt();
          }
          break;
        case Python3Parser.CONTINUE:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 532;
            this.continue_stmt();
          }
          break;
        case Python3Parser.RETURN:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 533;
            this.return_stmt();
          }
          break;
        case Python3Parser.RAISE:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 534;
            this.raise_stmt();
          }
          break;
        case Python3Parser.YIELD:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 535;
            this.yield_stmt();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public break_stmt(): Break_stmtContext {
    let _localctx: Break_stmtContext = new Break_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 52, Python3Parser.RULE_break_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 538;
        this.match(Python3Parser.BREAK);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public continue_stmt(): Continue_stmtContext {
    let _localctx: Continue_stmtContext = new Continue_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 54, Python3Parser.RULE_continue_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 540;
        this.match(Python3Parser.CONTINUE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public return_stmt(): Return_stmtContext {
    let _localctx: Return_stmtContext = new Return_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 56, Python3Parser.RULE_return_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 542;
        this.match(Python3Parser.RETURN);
        this.state = 544;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
          case 1:
            {
              this.state = 543;
              this.testlist();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public yield_stmt(): Yield_stmtContext {
    let _localctx: Yield_stmtContext = new Yield_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 58, Python3Parser.RULE_yield_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 546;
        this.yield_expr();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public raise_stmt(): Raise_stmtContext {
    let _localctx: Raise_stmtContext = new Raise_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 60, Python3Parser.RULE_raise_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 548;
        this.match(Python3Parser.RAISE);
        this.state = 554;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
          case 1:
            {
              this.state = 549;
              this.test();
              this.state = 552;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.FROM) {
                {
                  this.state = 550;
                  this.match(Python3Parser.FROM);
                  this.state = 551;
                  this.test();
                }
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public import_stmt(): Import_stmtContext {
    let _localctx: Import_stmtContext = new Import_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 62, Python3Parser.RULE_import_stmt);
    try {
      this.state = 558;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Python3Parser.IMPORT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 556;
            this.import_name();
          }
          break;
        case Python3Parser.FROM:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 557;
            this.import_from();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public import_name(): Import_nameContext {
    let _localctx: Import_nameContext = new Import_nameContext(this._ctx, this.state);
    this.enterRule(_localctx, 64, Python3Parser.RULE_import_name);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 560;
        this.match(Python3Parser.IMPORT);
        this.state = 561;
        this.dotted_as_names();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public import_from(): Import_fromContext {
    let _localctx: Import_fromContext = new Import_fromContext(this._ctx, this.state);
    this.enterRule(_localctx, 66, Python3Parser.RULE_import_from);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 563;
          this.match(Python3Parser.FROM);
          this.state = 576;
          this._errHandler.sync(this);
          switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
            case 1:
              {
                this.state = 567;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS) {
                  {
                    {
                      this.state = 564;
                      _la = this._input.LA(1);
                      if (!(_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS)) {
                        this._errHandler.recoverInline(this);
                      } else {
                        if (this._input.LA(1) === Token.EOF) {
                          this.matchedEOF = true;
                        }

                        this._errHandler.reportMatch(this);
                        this.consume();
                      }
                    }
                  }
                  this.state = 569;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                }
                this.state = 570;
                this.dotted_name();
              }
              break;

            case 2:
              {
                this.state = 572;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                  {
                    {
                      this.state = 571;
                      _la = this._input.LA(1);
                      if (!(_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS)) {
                        this._errHandler.recoverInline(this);
                      } else {
                        if (this._input.LA(1) === Token.EOF) {
                          this.matchedEOF = true;
                        }

                        this._errHandler.reportMatch(this);
                        this.consume();
                      }
                    }
                  }
                  this.state = 574;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                } while (_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS);
              }
              break;
          }
          this.state = 578;
          this.match(Python3Parser.IMPORT);
          this.state = 585;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case Python3Parser.STAR:
              {
                this.state = 579;
                this.match(Python3Parser.STAR);
              }
              break;
            case Python3Parser.OPEN_PAREN:
              {
                this.state = 580;
                this.match(Python3Parser.OPEN_PAREN);
                this.state = 581;
                this.import_as_names();
                this.state = 582;
                this.match(Python3Parser.CLOSE_PAREN);
              }
              break;
            case Python3Parser.NAME:
              {
                this.state = 584;
                this.import_as_names();
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public import_as_name(): Import_as_nameContext {
    let _localctx: Import_as_nameContext = new Import_as_nameContext(this._ctx, this.state);
    this.enterRule(_localctx, 68, Python3Parser.RULE_import_as_name);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 587;
        this.match(Python3Parser.NAME);
        this.state = 590;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.AS) {
          {
            this.state = 588;
            this.match(Python3Parser.AS);
            this.state = 589;
            this.match(Python3Parser.NAME);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public dotted_as_name(): Dotted_as_nameContext {
    let _localctx: Dotted_as_nameContext = new Dotted_as_nameContext(this._ctx, this.state);
    this.enterRule(_localctx, 70, Python3Parser.RULE_dotted_as_name);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 592;
        this.dotted_name();
        this.state = 595;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.AS) {
          {
            this.state = 593;
            this.match(Python3Parser.AS);
            this.state = 594;
            this.match(Python3Parser.NAME);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public import_as_names(): Import_as_namesContext {
    let _localctx: Import_as_namesContext = new Import_as_namesContext(this._ctx, this.state);
    this.enterRule(_localctx, 72, Python3Parser.RULE_import_as_names);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 597;
        this.import_as_name();
        this.state = 602;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 598;
                this.match(Python3Parser.COMMA);
                this.state = 599;
                this.import_as_name();
              }
            }
          }
          this.state = 604;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
        }
        this.state = 606;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.COMMA) {
          {
            this.state = 605;
            this.match(Python3Parser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public dotted_as_names(): Dotted_as_namesContext {
    let _localctx: Dotted_as_namesContext = new Dotted_as_namesContext(this._ctx, this.state);
    this.enterRule(_localctx, 74, Python3Parser.RULE_dotted_as_names);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 608;
        this.dotted_as_name();
        this.state = 613;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === Python3Parser.COMMA) {
          {
            {
              this.state = 609;
              this.match(Python3Parser.COMMA);
              this.state = 610;
              this.dotted_as_name();
            }
          }
          this.state = 615;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public dotted_name(): Dotted_nameContext {
    let _localctx: Dotted_nameContext = new Dotted_nameContext(this._ctx, this.state);
    this.enterRule(_localctx, 76, Python3Parser.RULE_dotted_name);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 616;
        this.match(Python3Parser.NAME);
        this.state = 621;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === Python3Parser.DOT) {
          {
            {
              this.state = 617;
              this.match(Python3Parser.DOT);
              this.state = 618;
              this.match(Python3Parser.NAME);
            }
          }
          this.state = 623;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public global_stmt(): Global_stmtContext {
    let _localctx: Global_stmtContext = new Global_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 78, Python3Parser.RULE_global_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 624;
        this.match(Python3Parser.GLOBAL);
        this.state = 625;
        this.match(Python3Parser.NAME);
        this.state = 630;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === Python3Parser.COMMA) {
          {
            {
              this.state = 626;
              this.match(Python3Parser.COMMA);
              this.state = 627;
              this.match(Python3Parser.NAME);
            }
          }
          this.state = 632;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public nonlocal_stmt(): Nonlocal_stmtContext {
    let _localctx: Nonlocal_stmtContext = new Nonlocal_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 80, Python3Parser.RULE_nonlocal_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 633;
        this.match(Python3Parser.NONLOCAL);
        this.state = 634;
        this.match(Python3Parser.NAME);
        this.state = 639;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === Python3Parser.COMMA) {
          {
            {
              this.state = 635;
              this.match(Python3Parser.COMMA);
              this.state = 636;
              this.match(Python3Parser.NAME);
            }
          }
          this.state = 641;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public assert_stmt(): Assert_stmtContext {
    let _localctx: Assert_stmtContext = new Assert_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 82, Python3Parser.RULE_assert_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 642;
        this.match(Python3Parser.ASSERT);
        this.state = 643;
        this.test();
        this.state = 646;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.COMMA) {
          {
            this.state = 644;
            this.match(Python3Parser.COMMA);
            this.state = 645;
            this.test();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public compound_stmt(): Compound_stmtContext {
    let _localctx: Compound_stmtContext = new Compound_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 84, Python3Parser.RULE_compound_stmt);
    try {
      this.state = 657;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Python3Parser.IF:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 648;
            this.if_stmt();
          }
          break;
        case Python3Parser.WHILE:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 649;
            this.while_stmt();
          }
          break;
        case Python3Parser.FOR:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 650;
            this.for_stmt();
          }
          break;
        case Python3Parser.TRY:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 651;
            this.try_stmt();
          }
          break;
        case Python3Parser.WITH:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 652;
            this.with_stmt();
          }
          break;
        case Python3Parser.DEF:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 653;
            this.funcdef();
          }
          break;
        case Python3Parser.CLASS:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 654;
            this.classdef();
          }
          break;
        case Python3Parser.AT:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 655;
            this.decorated();
          }
          break;
        case Python3Parser.ASYNC:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 656;
            this.async_stmt();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public async_stmt(): Async_stmtContext {
    let _localctx: Async_stmtContext = new Async_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 86, Python3Parser.RULE_async_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 659;
        this.match(Python3Parser.ASYNC);
        this.state = 663;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Python3Parser.DEF:
            {
              this.state = 660;
              this.funcdef();
            }
            break;
          case Python3Parser.WITH:
            {
              this.state = 661;
              this.with_stmt();
            }
            break;
          case Python3Parser.FOR:
            {
              this.state = 662;
              this.for_stmt();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public if_stmt(): If_stmtContext {
    let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 88, Python3Parser.RULE_if_stmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 665;
        this.match(Python3Parser.IF);
        this.state = 666;
        this.test();
        this.state = 667;
        this.match(Python3Parser.COLON);
        this.state = 668;
        this.suite();
        this.state = 676;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 669;
                this.match(Python3Parser.ELIF);
                this.state = 670;
                this.test();
                this.state = 671;
                this.match(Python3Parser.COLON);
                this.state = 672;
                this.suite();
              }
            }
          }
          this.state = 678;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
        }
        this.state = 682;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
          case 1:
            {
              this.state = 679;
              this.match(Python3Parser.ELSE);
              this.state = 680;
              this.match(Python3Parser.COLON);
              this.state = 681;
              this.suite();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public while_stmt(): While_stmtContext {
    let _localctx: While_stmtContext = new While_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 90, Python3Parser.RULE_while_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 684;
        this.match(Python3Parser.WHILE);
        this.state = 685;
        this.test();
        this.state = 686;
        this.match(Python3Parser.COLON);
        this.state = 687;
        this.suite();
        this.state = 691;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
          case 1:
            {
              this.state = 688;
              this.match(Python3Parser.ELSE);
              this.state = 689;
              this.match(Python3Parser.COLON);
              this.state = 690;
              this.suite();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public for_stmt(): For_stmtContext {
    let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 92, Python3Parser.RULE_for_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 693;
        this.match(Python3Parser.FOR);
        this.state = 694;
        this.exprlist();
        this.state = 695;
        this.match(Python3Parser.IN);
        this.state = 696;
        this.testlist();
        this.state = 697;
        this.match(Python3Parser.COLON);
        this.state = 698;
        this.suite();
        this.state = 702;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
          case 1:
            {
              this.state = 699;
              this.match(Python3Parser.ELSE);
              this.state = 700;
              this.match(Python3Parser.COLON);
              this.state = 701;
              this.suite();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public try_stmt(): Try_stmtContext {
    let _localctx: Try_stmtContext = new Try_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 94, Python3Parser.RULE_try_stmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 704;
          this.match(Python3Parser.TRY);
          this.state = 705;
          this.match(Python3Parser.COLON);
          this.state = 706;
          this.suite();
          this.state = 728;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case Python3Parser.EXCEPT:
              {
                this.state = 711;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                  switch (_alt) {
                    case 1:
                      {
                        {
                          this.state = 707;
                          this.except_clause();
                          this.state = 708;
                          this.match(Python3Parser.COLON);
                          this.state = 709;
                          this.suite();
                        }
                      }
                      break;
                    default:
                      throw new NoViableAltException(this);
                  }
                  this.state = 713;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                this.state = 718;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                  case 1:
                    {
                      this.state = 715;
                      this.match(Python3Parser.ELSE);
                      this.state = 716;
                      this.match(Python3Parser.COLON);
                      this.state = 717;
                      this.suite();
                    }
                    break;
                }
                this.state = 723;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
                  case 1:
                    {
                      this.state = 720;
                      this.match(Python3Parser.FINALLY);
                      this.state = 721;
                      this.match(Python3Parser.COLON);
                      this.state = 722;
                      this.suite();
                    }
                    break;
                }
              }
              break;
            case Python3Parser.FINALLY:
              {
                this.state = 725;
                this.match(Python3Parser.FINALLY);
                this.state = 726;
                this.match(Python3Parser.COLON);
                this.state = 727;
                this.suite();
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public with_stmt(): With_stmtContext {
    let _localctx: With_stmtContext = new With_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 96, Python3Parser.RULE_with_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 730;
        this.match(Python3Parser.WITH);
        this.state = 731;
        this.with_item();
        this.state = 736;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === Python3Parser.COMMA) {
          {
            {
              this.state = 732;
              this.match(Python3Parser.COMMA);
              this.state = 733;
              this.with_item();
            }
          }
          this.state = 738;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 739;
        this.match(Python3Parser.COLON);
        this.state = 740;
        this.suite();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public with_item(): With_itemContext {
    let _localctx: With_itemContext = new With_itemContext(this._ctx, this.state);
    this.enterRule(_localctx, 98, Python3Parser.RULE_with_item);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 742;
        this.test();
        this.state = 745;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.AS) {
          {
            this.state = 743;
            this.match(Python3Parser.AS);
            this.state = 744;
            this.expr(0);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public except_clause(): Except_clauseContext {
    let _localctx: Except_clauseContext = new Except_clauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 100, Python3Parser.RULE_except_clause);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 747;
        this.match(Python3Parser.EXCEPT);
        this.state = 753;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
          case 1:
            {
              this.state = 748;
              this.test();
              this.state = 751;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.AS) {
                {
                  this.state = 749;
                  this.match(Python3Parser.AS);
                  this.state = 750;
                  this.match(Python3Parser.NAME);
                }
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public suite(): SuiteContext {
    let _localctx: SuiteContext = new SuiteContext(this._ctx, this.state);
    this.enterRule(_localctx, 102, Python3Parser.RULE_suite);
    try {
      this.state = 761;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 755;
            this.simple_stmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 756;
            this.match(Python3Parser.NEWLINE);
            this.state = 757;
            this.match(Python3Parser.INDENT);
            this.state = 758;
            this.stmts();
            this.state = 759;
            this.match(Python3Parser.DEDENT);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public test(): TestContext {
    let _localctx: TestContext = new TestContext(this._ctx, this.state);
    this.enterRule(_localctx, 104, Python3Parser.RULE_test);
    try {
      this.state = 772;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 763;
            this.or_test(0);
            this.state = 769;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
              case 1:
                {
                  this.state = 764;
                  this.match(Python3Parser.IF);
                  this.state = 765;
                  this.or_test(0);
                  this.state = 766;
                  this.match(Python3Parser.ELSE);
                  this.state = 767;
                  this.test();
                }
                break;
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 771;
            this.lambdef();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public test_nocond(): Test_nocondContext {
    let _localctx: Test_nocondContext = new Test_nocondContext(this._ctx, this.state);
    this.enterRule(_localctx, 106, Python3Parser.RULE_test_nocond);
    try {
      this.state = 776;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 774;
            this.or_test(0);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 775;
            this.lambdef_nocond();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambdef(): LambdefContext {
    let _localctx: LambdefContext = new LambdefContext(this._ctx, this.state);
    this.enterRule(_localctx, 108, Python3Parser.RULE_lambdef);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 778;
        this.match(Python3Parser.LAMBDA);
        this.state = 780;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la - 43) & ~0x1f) === 0 &&
          ((1 << (_la - 43)) &
            ((1 << (Python3Parser.NAME - 43)) |
              (1 << (Python3Parser.STAR - 43)) |
              (1 << (Python3Parser.POWER - 43)))) !==
            0
        ) {
          {
            this.state = 779;
            this.varargslist();
          }
        }

        this.state = 782;
        this.match(Python3Parser.COLON);
        this.state = 783;
        this.test();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambdef_nocond(): Lambdef_nocondContext {
    let _localctx: Lambdef_nocondContext = new Lambdef_nocondContext(this._ctx, this.state);
    this.enterRule(_localctx, 110, Python3Parser.RULE_lambdef_nocond);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 785;
        this.match(Python3Parser.LAMBDA);
        this.state = 787;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la - 43) & ~0x1f) === 0 &&
          ((1 << (_la - 43)) &
            ((1 << (Python3Parser.NAME - 43)) |
              (1 << (Python3Parser.STAR - 43)) |
              (1 << (Python3Parser.POWER - 43)))) !==
            0
        ) {
          {
            this.state = 786;
            this.varargslist();
          }
        }

        this.state = 789;
        this.match(Python3Parser.COLON);
        this.state = 790;
        this.test_nocond();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public or_test(): Or_testContext;
  public or_test(_p: number): Or_testContext;
  // @RuleVersion(0)
  public or_test(_p?: number): Or_testContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Or_testContext = new Or_testContext(this._ctx, _parentState);
    let _prevctx: Or_testContext = _localctx;
    let _startState: number = 112;
    this.enterRecursionRule(_localctx, 112, Python3Parser.RULE_or_test, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 793;
          this.and_test(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 800;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new Or_testContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, Python3Parser.RULE_or_test);
                this.state = 795;
                if (!this.precpred(this._ctx, 1)) {
                  throw new FailedPredicateException(this, 'this.precpred(this._ctx, 1)');
                }
                this.state = 796;
                this.match(Python3Parser.OR);
                this.state = 797;
                this.and_test(0);
              }
            }
          }
          this.state = 802;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public and_test(): And_testContext;
  public and_test(_p: number): And_testContext;
  // @RuleVersion(0)
  public and_test(_p?: number): And_testContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: And_testContext = new And_testContext(this._ctx, _parentState);
    let _prevctx: And_testContext = _localctx;
    let _startState: number = 114;
    this.enterRecursionRule(_localctx, 114, Python3Parser.RULE_and_test, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 804;
          this.not_test();
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 811;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new And_testContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, Python3Parser.RULE_and_test);
                this.state = 806;
                if (!this.precpred(this._ctx, 1)) {
                  throw new FailedPredicateException(this, 'this.precpred(this._ctx, 1)');
                }
                this.state = 807;
                this.match(Python3Parser.AND);
                this.state = 808;
                this.not_test();
              }
            }
          }
          this.state = 813;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public not_test(): Not_testContext {
    let _localctx: Not_testContext = new Not_testContext(this._ctx, this.state);
    this.enterRule(_localctx, 116, Python3Parser.RULE_not_test);
    try {
      this.state = 817;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 814;
            this.comparison(0);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 815;
            this.match(Python3Parser.NOT);
            this.state = 816;
            this.not_test();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public comparison(): ComparisonContext;
  public comparison(_p: number): ComparisonContext;
  // @RuleVersion(0)
  public comparison(_p?: number): ComparisonContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: ComparisonContext = new ComparisonContext(this._ctx, _parentState);
    let _prevctx: ComparisonContext = _localctx;
    let _startState: number = 118;
    this.enterRecursionRule(_localctx, 118, Python3Parser.RULE_comparison, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 820;
          this.expr(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 828;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new ComparisonContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, Python3Parser.RULE_comparison);
                this.state = 822;
                if (!this.precpred(this._ctx, 1)) {
                  throw new FailedPredicateException(this, 'this.precpred(this._ctx, 1)');
                }
                this.state = 823;
                this.comp_op();
                this.state = 824;
                this.expr(0);
              }
            }
          }
          this.state = 830;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public comp_op(): Comp_opContext {
    let _localctx: Comp_opContext = new Comp_opContext(this._ctx, this.state);
    this.enterRule(_localctx, 120, Python3Parser.RULE_comp_op);
    try {
      this.state = 844;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 831;
            this.match(Python3Parser.LESS_THAN);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 832;
            this.match(Python3Parser.GREATER_THAN);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 833;
            this.match(Python3Parser.EQUALS);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 834;
            this.match(Python3Parser.GT_EQ);
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 835;
            this.match(Python3Parser.LT_EQ);
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 836;
            this.match(Python3Parser.NOT_EQ_1);
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 837;
            this.match(Python3Parser.NOT_EQ_2);
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 838;
            this.match(Python3Parser.IN);
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 839;
            this.match(Python3Parser.NOT);
            this.state = 840;
            this.match(Python3Parser.IN);
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 841;
            this.match(Python3Parser.IS);
          }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 842;
            this.match(Python3Parser.IS);
            this.state = 843;
            this.match(Python3Parser.NOT);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_expr(): Star_exprContext {
    let _localctx: Star_exprContext = new Star_exprContext(this._ctx, this.state);
    this.enterRule(_localctx, 122, Python3Parser.RULE_star_expr);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 846;
        this.match(Python3Parser.STAR);
        this.state = 847;
        this.expr(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public expr(): ExprContext;
  public expr(_p: number): ExprContext;
  // @RuleVersion(0)
  public expr(_p?: number): ExprContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
    let _prevctx: ExprContext = _localctx;
    let _startState: number = 124;
    this.enterRecursionRule(_localctx, 124, Python3Parser.RULE_expr, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 850;
          this.xor_expr(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 857;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new ExprContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, Python3Parser.RULE_expr);
                this.state = 852;
                if (!this.precpred(this._ctx, 1)) {
                  throw new FailedPredicateException(this, 'this.precpred(this._ctx, 1)');
                }
                this.state = 853;
                this.match(Python3Parser.OR_OP);
                this.state = 854;
                this.xor_expr(0);
              }
            }
          }
          this.state = 859;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public xor_expr(): Xor_exprContext;
  public xor_expr(_p: number): Xor_exprContext;
  // @RuleVersion(0)
  public xor_expr(_p?: number): Xor_exprContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Xor_exprContext = new Xor_exprContext(this._ctx, _parentState);
    let _prevctx: Xor_exprContext = _localctx;
    let _startState: number = 126;
    this.enterRecursionRule(_localctx, 126, Python3Parser.RULE_xor_expr, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 861;
          this.and_expr(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 868;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new Xor_exprContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, Python3Parser.RULE_xor_expr);
                this.state = 863;
                if (!this.precpred(this._ctx, 1)) {
                  throw new FailedPredicateException(this, 'this.precpred(this._ctx, 1)');
                }
                this.state = 864;
                this.match(Python3Parser.XOR);
                this.state = 865;
                this.and_expr(0);
              }
            }
          }
          this.state = 870;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public and_expr(): And_exprContext;
  public and_expr(_p: number): And_exprContext;
  // @RuleVersion(0)
  public and_expr(_p?: number): And_exprContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: And_exprContext = new And_exprContext(this._ctx, _parentState);
    let _prevctx: And_exprContext = _localctx;
    let _startState: number = 128;
    this.enterRecursionRule(_localctx, 128, Python3Parser.RULE_and_expr, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 872;
          this.shift_expr(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 879;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new And_exprContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, Python3Parser.RULE_and_expr);
                this.state = 874;
                if (!this.precpred(this._ctx, 1)) {
                  throw new FailedPredicateException(this, 'this.precpred(this._ctx, 1)');
                }
                this.state = 875;
                this.match(Python3Parser.AND_OP);
                this.state = 876;
                this.shift_expr(0);
              }
            }
          }
          this.state = 881;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public shift_expr(): Shift_exprContext;
  public shift_expr(_p: number): Shift_exprContext;
  // @RuleVersion(0)
  public shift_expr(_p?: number): Shift_exprContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Shift_exprContext = new Shift_exprContext(this._ctx, _parentState);
    let _prevctx: Shift_exprContext = _localctx;
    let _startState: number = 130;
    this.enterRecursionRule(_localctx, 130, Python3Parser.RULE_shift_expr, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 883;
          this.arith_expr(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 890;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new Shift_exprContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, Python3Parser.RULE_shift_expr);
                this.state = 885;
                if (!this.precpred(this._ctx, 1)) {
                  throw new FailedPredicateException(this, 'this.precpred(this._ctx, 1)');
                }
                this.state = 886;
                this.match(Python3Parser.Shifts);
                this.state = 887;
                this.arith_expr(0);
              }
            }
          }
          this.state = 892;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public arith_expr(): Arith_exprContext;
  public arith_expr(_p: number): Arith_exprContext;
  // @RuleVersion(0)
  public arith_expr(_p?: number): Arith_exprContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Arith_exprContext = new Arith_exprContext(this._ctx, _parentState);
    let _prevctx: Arith_exprContext = _localctx;
    let _startState: number = 132;
    this.enterRecursionRule(_localctx, 132, Python3Parser.RULE_arith_expr, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 894;
          this.term(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 901;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new Arith_exprContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, Python3Parser.RULE_arith_expr);
                this.state = 896;
                if (!this.precpred(this._ctx, 1)) {
                  throw new FailedPredicateException(this, 'this.precpred(this._ctx, 1)');
                }
                this.state = 897;
                this.match(Python3Parser.AddMinus);
                this.state = 898;
                this.term(0);
              }
            }
          }
          this.state = 903;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public term(): TermContext;
  public term(_p: number): TermContext;
  // @RuleVersion(0)
  public term(_p?: number): TermContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: TermContext = new TermContext(this._ctx, _parentState);
    let _prevctx: TermContext = _localctx;
    let _startState: number = 134;
    this.enterRecursionRule(_localctx, 134, Python3Parser.RULE_term, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 905;
          this.factor();
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 912;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new TermContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, Python3Parser.RULE_term);
                this.state = 907;
                if (!this.precpred(this._ctx, 1)) {
                  throw new FailedPredicateException(this, 'this.precpred(this._ctx, 1)');
                }
                this.state = 908;
                this.match(Python3Parser.TermOp);
                this.state = 909;
                this.factor();
              }
            }
          }
          this.state = 914;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public factor(): FactorContext {
    let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
    this.enterRule(_localctx, 136, Python3Parser.RULE_factor);
    try {
      this.state = 918;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 915;
            this.power();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 916;
            this.match(Python3Parser.FactorOp);
            this.state = 917;
            this.factor();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public power(): PowerContext {
    let _localctx: PowerContext = new PowerContext(this._ctx, this.state);
    this.enterRule(_localctx, 138, Python3Parser.RULE_power);
    try {
      this.state = 925;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 920;
            this.atom_expr();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 921;
            this.atom_expr();
            this.state = 922;
            this.match(Python3Parser.POWER);
            this.state = 923;
            this.factor();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public atom_expr(): Atom_exprContext {
    let _localctx: Atom_exprContext = new Atom_exprContext(this._ctx, this.state);
    this.enterRule(_localctx, 140, Python3Parser.RULE_atom_expr);
    try {
      this.state = 936;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 927;
            this.atom();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 928;
            this.method_call_of_method_return();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 929;
            this.method_call_no_arg();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 931;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
              case 1:
                {
                  this.state = 930;
                  this.match(Python3Parser.AWAIT);
                }
                break;
            }
            this.state = 933;
            this.atom();
            this.state = 934;
            this.trailer();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public atom(): AtomContext {
    let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
    this.enterRule(_localctx, 142, Python3Parser.RULE_atom);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 960;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
          case 1:
            {
              this.state = 938;
              this.match(Python3Parser.OPEN_PAREN);
              this.state = 941;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                case 1:
                  {
                    this.state = 939;
                    this.yield_expr();
                  }
                  break;

                case 2:
                  {
                    this.state = 940;
                    this.testlist_comp();
                  }
                  break;
              }
              this.state = 943;
              this.match(Python3Parser.CLOSE_PAREN);
            }
            break;

          case 2:
            {
              this.state = 944;
              this.array();
            }
            break;

          case 3:
            {
              this.state = 945;
              this.match(Python3Parser.OPEN_BRACE);
              this.state = 947;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                case 1:
                  {
                    this.state = 946;
                    this.dictorsetmaker();
                  }
                  break;
              }
              this.state = 949;
              this.match(Python3Parser.CLOSE_BRACE);
            }
            break;

          case 4:
            {
              this.state = 950;
              this.ident();
            }
            break;

          case 5:
            {
              this.state = 951;
              this.number();
            }
            break;

          case 6:
            {
              this.state = 953;
              this._errHandler.sync(this);
              _alt = 1;
              do {
                switch (_alt) {
                  case 1:
                    {
                      {
                        this.state = 952;
                        this.match(Python3Parser.STRING);
                      }
                    }
                    break;
                  default:
                    throw new NoViableAltException(this);
                }
                this.state = 955;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
              } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
            break;

          case 7:
            {
              this.state = 957;
              this.match(Python3Parser.ELLIPSIS);
            }
            break;

          case 8:
            {
              this.state = 958;
              this.match(Python3Parser.NONE);
            }
            break;

          case 9:
            {
              this.state = 959;
              this.bool();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public array(): ArrayContext {
    let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
    this.enterRule(_localctx, 144, Python3Parser.RULE_array);
    try {
      this.state = 968;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 962;
            this.match(Python3Parser.OPEN_BRACK);
            this.state = 964;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
              case 1:
                {
                  this.state = 963;
                  this.testlist_comp();
                }
                break;
            }
            this.state = 966;
            this.match(Python3Parser.CLOSE_BRACK);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          // tslint:disable-next-line:no-empty
          {
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public ident(): IdentContext {
    let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
    this.enterRule(_localctx, 146, Python3Parser.RULE_ident);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 970;
        this.match(Python3Parser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public bool(): BoolContext {
    let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
    this.enterRule(_localctx, 148, Python3Parser.RULE_bool);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 972;
        _la = this._input.LA(1);
        if (!(_la === Python3Parser.TRUE || _la === Python3Parser.FALSE)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public testlist_comp(): Testlist_compContext {
    let _localctx: Testlist_compContext = new Testlist_compContext(this._ctx, this.state);
    this.enterRule(_localctx, 150, Python3Parser.RULE_testlist_comp);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 974;
        this.test_star_expr();
        this.state = 986;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Python3Parser.FOR:
          case Python3Parser.ASYNC:
            {
              this.state = 975;
              this.comp_for();
            }
            break;
          case Python3Parser.CLOSE_PAREN:
          case Python3Parser.COMMA:
          case Python3Parser.CLOSE_BRACK:
            {
              this.state = 980;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 976;
                      this.match(Python3Parser.COMMA);
                      this.state = 977;
                      this.test_star_expr();
                    }
                  }
                }
                this.state = 982;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
              }
              this.state = 984;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.COMMA) {
                {
                  this.state = 983;
                  this.match(Python3Parser.COMMA);
                }
              }
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public trailer(): TrailerContext {
    let _localctx: TrailerContext = new TrailerContext(this._ctx, this.state);
    this.enterRule(_localctx, 152, Python3Parser.RULE_trailer);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 993;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              this.state = 991;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case Python3Parser.OPEN_PAREN:
                  {
                    this.state = 988;
                    this.method_call();
                  }
                  break;
                case Python3Parser.OPEN_BRACK:
                  {
                    this.state = 989;
                    this.array_access();
                  }
                  break;
                case Python3Parser.DOT:
                  {
                    this.state = 990;
                    this.field_access();
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
          }
          this.state = 995;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public method_call_of_method_return(): Method_call_of_method_returnContext {
    let _localctx: Method_call_of_method_returnContext = new Method_call_of_method_returnContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 154, Python3Parser.RULE_method_call_of_method_return);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 996;
        this.method_call_no_arg();
        this.state = 997;
        this.match(Python3Parser.DOT);
        this.state = 998;
        this.method_call_no_arg();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public method_call_no_arg(): Method_call_no_argContext {
    let _localctx: Method_call_no_argContext = new Method_call_no_argContext(this._ctx, this.state);
    this.enterRule(_localctx, 156, Python3Parser.RULE_method_call_no_arg);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1000;
        this.atom();
        this.state = 1001;
        this.match(Python3Parser.OPEN_PAREN);
        this.state = 1002;
        this.match(Python3Parser.CLOSE_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public method_call(): Method_callContext {
    let _localctx: Method_callContext = new Method_callContext(this._ctx, this.state);
    this.enterRule(_localctx, 158, Python3Parser.RULE_method_call);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1004;
        this.match(Python3Parser.OPEN_PAREN);
        {
          this.state = 1005;
          this.arglist();
        }
        this.state = 1006;
        this.match(Python3Parser.CLOSE_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public array_access(): Array_accessContext {
    let _localctx: Array_accessContext = new Array_accessContext(this._ctx, this.state);
    this.enterRule(_localctx, 160, Python3Parser.RULE_array_access);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1008;
        this.match(Python3Parser.OPEN_BRACK);
        this.state = 1009;
        this.subscriptlist();
        this.state = 1010;
        this.match(Python3Parser.CLOSE_BRACK);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public field_access(): Field_accessContext {
    let _localctx: Field_accessContext = new Field_accessContext(this._ctx, this.state);
    this.enterRule(_localctx, 162, Python3Parser.RULE_field_access);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1012;
        this.match(Python3Parser.DOT);
        this.state = 1013;
        this.atom_expr();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public subscriptlist(): SubscriptlistContext {
    let _localctx: SubscriptlistContext = new SubscriptlistContext(this._ctx, this.state);
    this.enterRule(_localctx, 164, Python3Parser.RULE_subscriptlist);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1015;
        this.subscript();
        this.state = 1020;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1016;
                this.match(Python3Parser.COMMA);
                this.state = 1017;
                this.subscript();
              }
            }
          }
          this.state = 1022;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
        }
        this.state = 1024;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.COMMA) {
          {
            this.state = 1023;
            this.match(Python3Parser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public subscript(): SubscriptContext {
    let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
    this.enterRule(_localctx, 166, Python3Parser.RULE_subscript);
    let _la: number;
    try {
      this.state = 1037;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1026;
            this.test();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1028;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
              case 1:
                {
                  this.state = 1027;
                  this.test();
                }
                break;
            }
            this.state = 1030;
            this.match(Python3Parser.COLON);
            this.state = 1032;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
              case 1:
                {
                  this.state = 1031;
                  this.test();
                }
                break;
            }
            this.state = 1035;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === Python3Parser.COLON) {
              {
                this.state = 1034;
                this.sliceop();
              }
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public sliceop(): SliceopContext {
    let _localctx: SliceopContext = new SliceopContext(this._ctx, this.state);
    this.enterRule(_localctx, 168, Python3Parser.RULE_sliceop);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1039;
        this.match(Python3Parser.COLON);
        this.state = 1041;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
          case 1:
            {
              this.state = 1040;
              this.test();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public exprlist(): ExprlistContext {
    let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
    this.enterRule(_localctx, 170, Python3Parser.RULE_exprlist);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1045;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
          case 1:
            {
              this.state = 1043;
              this.expr(0);
            }
            break;

          case 2:
            {
              this.state = 1044;
              this.star_expr();
            }
            break;
        }
        this.state = 1054;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1047;
                this.match(Python3Parser.COMMA);
                this.state = 1050;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                  case 1:
                    {
                      this.state = 1048;
                      this.expr(0);
                    }
                    break;

                  case 2:
                    {
                      this.state = 1049;
                      this.star_expr();
                    }
                    break;
                }
              }
            }
          }
          this.state = 1056;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
        }
        this.state = 1058;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.COMMA) {
          {
            this.state = 1057;
            this.match(Python3Parser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public testlist_array(): Testlist_arrayContext {
    let _localctx: Testlist_arrayContext = new Testlist_arrayContext(this._ctx, this.state);
    this.enterRule(_localctx, 172, Python3Parser.RULE_testlist_array);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1060;
        this.test();
        this.state = 1065;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1061;
                this.match(Python3Parser.COMMA);
                this.state = 1062;
                this.test();
              }
            }
          }
          this.state = 1067;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
        }
        this.state = 1069;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
          case 1:
            {
              this.state = 1068;
              this.match(Python3Parser.COMMA);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public testlist(): TestlistContext {
    let _localctx: TestlistContext = new TestlistContext(this._ctx, this.state);
    this.enterRule(_localctx, 174, Python3Parser.RULE_testlist);
    try {
      this.state = 1073;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1071;
            this.test();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1072;
            this.testlist_array();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public dictorsetmaker(): DictorsetmakerContext {
    let _localctx: DictorsetmakerContext = new DictorsetmakerContext(this._ctx, this.state);
    this.enterRule(_localctx, 176, Python3Parser.RULE_dictorsetmaker);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1123;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
          case 1:
            {
              {
                this.state = 1081;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                  case 1:
                    {
                      this.state = 1075;
                      this.test();
                      this.state = 1076;
                      this.match(Python3Parser.COLON);
                      this.state = 1077;
                      this.test();
                    }
                    break;

                  case 2:
                    {
                      this.state = 1079;
                      this.match(Python3Parser.POWER);
                      this.state = 1080;
                      this.expr(0);
                    }
                    break;
                }
                this.state = 1101;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                  case Python3Parser.FOR:
                  case Python3Parser.ASYNC:
                    {
                      this.state = 1083;
                      this.comp_for();
                    }
                    break;
                  case Python3Parser.COMMA:
                  case Python3Parser.CLOSE_BRACE:
                    {
                      this.state = 1095;
                      this._errHandler.sync(this);
                      _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                      while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                          {
                            {
                              this.state = 1084;
                              this.match(Python3Parser.COMMA);
                              this.state = 1091;
                              this._errHandler.sync(this);
                              switch (
                                this.interpreter.adaptivePredict(this._input, 145, this._ctx)
                              ) {
                                case 1:
                                  {
                                    this.state = 1085;
                                    this.test();
                                    this.state = 1086;
                                    this.match(Python3Parser.COLON);
                                    this.state = 1087;
                                    this.test();
                                  }
                                  break;

                                case 2:
                                  {
                                    this.state = 1089;
                                    this.match(Python3Parser.POWER);
                                    this.state = 1090;
                                    this.expr(0);
                                  }
                                  break;
                              }
                            }
                          }
                        }
                        this.state = 1097;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                      }
                      this.state = 1099;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (_la === Python3Parser.COMMA) {
                        {
                          this.state = 1098;
                          this.match(Python3Parser.COMMA);
                        }
                      }
                    }
                    break;
                  default:
                    throw new NoViableAltException(this);
                }
              }
            }
            break;

          case 2:
            {
              {
                this.state = 1105;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 149, this._ctx)) {
                  case 1:
                    {
                      this.state = 1103;
                      this.test();
                    }
                    break;

                  case 2:
                    {
                      this.state = 1104;
                      this.star_expr();
                    }
                    break;
                }
                this.state = 1121;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                  case Python3Parser.FOR:
                  case Python3Parser.ASYNC:
                    {
                      this.state = 1107;
                      this.comp_for();
                    }
                    break;
                  case Python3Parser.COMMA:
                  case Python3Parser.CLOSE_BRACE:
                    {
                      this.state = 1115;
                      this._errHandler.sync(this);
                      _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                      while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                          {
                            {
                              this.state = 1108;
                              this.match(Python3Parser.COMMA);
                              this.state = 1111;
                              this._errHandler.sync(this);
                              switch (
                                this.interpreter.adaptivePredict(this._input, 150, this._ctx)
                              ) {
                                case 1:
                                  {
                                    this.state = 1109;
                                    this.test();
                                  }
                                  break;

                                case 2:
                                  {
                                    this.state = 1110;
                                    this.star_expr();
                                  }
                                  break;
                              }
                            }
                          }
                        }
                        this.state = 1117;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                      }
                      this.state = 1119;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (_la === Python3Parser.COMMA) {
                        {
                          this.state = 1118;
                          this.match(Python3Parser.COMMA);
                        }
                      }
                    }
                    break;
                  default:
                    throw new NoViableAltException(this);
                }
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public classdef(): ClassdefContext {
    let _localctx: ClassdefContext = new ClassdefContext(this._ctx, this.state);
    this.enterRule(_localctx, 178, Python3Parser.RULE_classdef);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1125;
        this.match(Python3Parser.CLASS);
        this.state = 1126;
        this.match(Python3Parser.NAME);
        this.state = 1132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.OPEN_PAREN) {
          {
            this.state = 1127;
            this.match(Python3Parser.OPEN_PAREN);
            this.state = 1129;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
              case 1:
                {
                  this.state = 1128;
                  this.arglist();
                }
                break;
            }
            this.state = 1131;
            this.match(Python3Parser.CLOSE_PAREN);
          }
        }

        this.state = 1134;
        this.match(Python3Parser.COLON);
        this.state = 1135;
        this.suite();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public arglist(): ArglistContext {
    let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
    this.enterRule(_localctx, 180, Python3Parser.RULE_arglist);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1137;
        this.argument();
        this.state = 1142;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1138;
                this.match(Python3Parser.COMMA);
                this.state = 1139;
                this.argument();
              }
            }
          }
          this.state = 1144;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
        }
        this.state = 1146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.COMMA) {
          {
            this.state = 1145;
            this.match(Python3Parser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public argument(): ArgumentContext {
    let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
    this.enterRule(_localctx, 182, Python3Parser.RULE_argument);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1160;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
          case 1:
            {
              this.state = 1148;
              this.test();
              this.state = 1150;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === Python3Parser.FOR || _la === Python3Parser.ASYNC) {
                {
                  this.state = 1149;
                  this.comp_for();
                }
              }
            }
            break;

          case 2:
            {
              this.state = 1152;
              this.test();
              this.state = 1153;
              this.match(Python3Parser.ASSIGN);
              this.state = 1154;
              this.test();
            }
            break;

          case 3:
            {
              this.state = 1156;
              this.match(Python3Parser.POWER);
              this.state = 1157;
              this.test();
            }
            break;

          case 4:
            {
              this.state = 1158;
              this.match(Python3Parser.STAR);
              this.state = 1159;
              this.test();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public comp_iter(): Comp_iterContext {
    let _localctx: Comp_iterContext = new Comp_iterContext(this._ctx, this.state);
    this.enterRule(_localctx, 184, Python3Parser.RULE_comp_iter);
    try {
      this.state = 1164;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Python3Parser.FOR:
        case Python3Parser.ASYNC:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1162;
            this.comp_for();
          }
          break;
        case Python3Parser.IF:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1163;
            this.comp_if();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public comp_for(): Comp_forContext {
    let _localctx: Comp_forContext = new Comp_forContext(this._ctx, this.state);
    this.enterRule(_localctx, 186, Python3Parser.RULE_comp_for);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Python3Parser.ASYNC) {
          {
            this.state = 1166;
            this.match(Python3Parser.ASYNC);
          }
        }

        this.state = 1169;
        this.match(Python3Parser.FOR);
        this.state = 1170;
        this.exprlist();
        this.state = 1171;
        this.match(Python3Parser.IN);
        this.state = 1172;
        this.or_test(0);
        this.state = 1174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la - 16) & ~0x1f) === 0 &&
          ((1 << (_la - 16)) &
            ((1 << (Python3Parser.IF - 16)) |
              (1 << (Python3Parser.FOR - 16)) |
              (1 << (Python3Parser.ASYNC - 16)))) !==
            0
        ) {
          {
            this.state = 1173;
            this.comp_iter();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public comp_if(): Comp_ifContext {
    let _localctx: Comp_ifContext = new Comp_ifContext(this._ctx, this.state);
    this.enterRule(_localctx, 188, Python3Parser.RULE_comp_if);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1176;
        this.match(Python3Parser.IF);
        this.state = 1177;
        this.test_nocond();
        this.state = 1179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la - 16) & ~0x1f) === 0 &&
          ((1 << (_la - 16)) &
            ((1 << (Python3Parser.IF - 16)) |
              (1 << (Python3Parser.FOR - 16)) |
              (1 << (Python3Parser.ASYNC - 16)))) !==
            0
        ) {
          {
            this.state = 1178;
            this.comp_iter();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public encoding_decl(): Encoding_declContext {
    let _localctx: Encoding_declContext = new Encoding_declContext(this._ctx, this.state);
    this.enterRule(_localctx, 190, Python3Parser.RULE_encoding_decl);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1181;
        this.match(Python3Parser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public yield_expr(): Yield_exprContext {
    let _localctx: Yield_exprContext = new Yield_exprContext(this._ctx, this.state);
    this.enterRule(_localctx, 192, Python3Parser.RULE_yield_expr);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1183;
        this.match(Python3Parser.YIELD);
        this.state = 1185;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
          case 1:
            {
              this.state = 1184;
              this.yield_arg();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public yield_arg(): Yield_argContext {
    let _localctx: Yield_argContext = new Yield_argContext(this._ctx, this.state);
    this.enterRule(_localctx, 194, Python3Parser.RULE_yield_arg);
    try {
      this.state = 1190;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1187;
            this.match(Python3Parser.FROM);
            this.state = 1188;
            this.test();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1189;
            this.testlist();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public number(): NumberContext {
    let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
    this.enterRule(_localctx, 196, Python3Parser.RULE_number);
    try {
      this.state = 1195;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Python3Parser.INTEGER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1192;
            this.integer();
          }
          break;
        case Python3Parser.FLOAT_NUMBER:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1193;
            this.float();
          }
          break;
        case Python3Parser.IMAG_NUMBER:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1194;
            this.imaginary();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public integer(): IntegerContext {
    let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
    this.enterRule(_localctx, 198, Python3Parser.RULE_integer);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1197;
        this.match(Python3Parser.INTEGER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public float(): FloatContext {
    let _localctx: FloatContext = new FloatContext(this._ctx, this.state);
    this.enterRule(_localctx, 200, Python3Parser.RULE_float);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1199;
        this.match(Python3Parser.FLOAT_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public imaginary(): ImaginaryContext {
    let _localctx: ImaginaryContext = new ImaginaryContext(this._ctx, this.state);
    this.enterRule(_localctx, 202, Python3Parser.RULE_imaginary);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1201;
        this.match(Python3Parser.IMAG_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 18:
        return this.expr_stmt_right_sempred(_localctx as Expr_stmt_rightContext, predIndex);

      case 56:
        return this.or_test_sempred(_localctx as Or_testContext, predIndex);

      case 57:
        return this.and_test_sempred(_localctx as And_testContext, predIndex);

      case 59:
        return this.comparison_sempred(_localctx as ComparisonContext, predIndex);

      case 62:
        return this.expr_sempred(_localctx as ExprContext, predIndex);

      case 63:
        return this.xor_expr_sempred(_localctx as Xor_exprContext, predIndex);

      case 64:
        return this.and_expr_sempred(_localctx as And_exprContext, predIndex);

      case 65:
        return this.shift_expr_sempred(_localctx as Shift_exprContext, predIndex);

      case 66:
        return this.arith_expr_sempred(_localctx as Arith_exprContext, predIndex);

      case 67:
        return this.term_sempred(_localctx as TermContext, predIndex);
    }
    return true;
  }
  private expr_stmt_right_sempred(_localctx: Expr_stmt_rightContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 3);

      case 1:
        return this.precpred(this._ctx, 2);

      case 2:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private or_test_sempred(_localctx: Or_testContext, predIndex: number): boolean {
    switch (predIndex) {
      case 3:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private and_test_sempred(_localctx: And_testContext, predIndex: number): boolean {
    switch (predIndex) {
      case 4:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private comparison_sempred(_localctx: ComparisonContext, predIndex: number): boolean {
    switch (predIndex) {
      case 5:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
    switch (predIndex) {
      case 6:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private xor_expr_sempred(_localctx: Xor_exprContext, predIndex: number): boolean {
    switch (predIndex) {
      case 7:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private and_expr_sempred(_localctx: And_exprContext, predIndex: number): boolean {
    switch (predIndex) {
      case 8:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private shift_expr_sempred(_localctx: Shift_exprContext, predIndex: number): boolean {
    switch (predIndex) {
      case 9:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private arith_expr_sempred(_localctx: Arith_exprContext, predIndex: number): boolean {
    switch (predIndex) {
      case 10:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private term_sempred(_localctx: TermContext, predIndex: number): boolean {
    switch (predIndex) {
      case 11:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }

  private static readonly _serializedATNSegments: number = 3;
  private static readonly _serializedATNSegment0: string =
    '\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03h\u04B6\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    '\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044' +
    '\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
    '=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04' +
    'F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04' +
    'O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04' +
    'X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t' +
    '`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x03\x02\x05' +
    '\x02\xD0\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xD7\n\x03' +
    '\x03\x04\x03\x04\x07\x04\xDB\n\x04\f\x04\x0E\x04\xDE\v\x04\x03\x05\x03' +
    '\x05\x03\x05\x03\x05\x05\x05\xE4\n\x05\x03\x05\x05\x05\xE7\n\x05\x03\x05' +
    '\x03\x05\x03\x06\x06\x06\xEC\n\x06\r\x06\x0E\x06\xED\x03\x07\x03\x07\x03' +
    '\x07\x03\x07\x05\x07\xF4\n\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03' +
    '\t\x03\t\x05\t\xFE\n\t\x03\t\x03\t\x03\t\x03\n\x03\n\x05\n\u0105\n\n\x03' +
    '\n\x03\n\x03\v\x03\v\x03\v\x05\v\u010C\n\v\x03\v\x03\v\x03\v\x03\v\x05' +
    '\v\u0112\n\v\x07\v\u0114\n\v\f\v\x0E\v\u0117\v\v\x03\v\x03\v\x03\v\x05' +
    '\v\u011C\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0122\n\v\x07\v\u0124\n\v\f' +
    '\v\x0E\v\u0127\v\v\x03\v\x03\v\x03\v\x03\v\x05\v\u012D\n\v\x05\v\u012F' +
    '\n\v\x05\v\u0131\n\v\x03\v\x03\v\x03\v\x05\v\u0136\n\v\x05\v\u0138\n\v' +
    '\x05\v\u013A\n\v\x03\v\x03\v\x05\v\u013E\n\v\x03\v\x03\v\x03\v\x03\v\x05' +
    '\v\u0144\n\v\x07\v\u0146\n\v\f\v\x0E\v\u0149\v\v\x03\v\x03\v\x03\v\x03' +
    '\v\x05\v\u014F\n\v\x05\v\u0151\n\v\x05\v\u0153\n\v\x03\v\x03\v\x03\v\x05' +
    '\v\u0158\n\v\x05\v\u015A\n\v\x03\f\x03\f\x03\f\x05\f\u015F\n\f\x03\r\x03' +
    '\r\x03\r\x05\r\u0164\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u016A\n\r\x07\r' +
    '\u016C\n\r\f\r\x0E\r\u016F\v\r\x03\r\x03\r\x03\r\x05\r\u0174\n\r\x03\r' +
    '\x03\r\x03\r\x03\r\x05\r\u017A\n\r\x07\r\u017C\n\r\f\r\x0E\r\u017F\v\r' +
    '\x03\r\x03\r\x03\r\x03\r\x05\r\u0185\n\r\x05\r\u0187\n\r\x05\r\u0189\n' +
    '\r\x03\r\x03\r\x03\r\x05\r\u018E\n\r\x05\r\u0190\n\r\x05\r\u0192\n\r\x03' +
    '\r\x03\r\x05\r\u0196\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u019C\n\r\x07\r' +
    '\u019E\n\r\f\r\x0E\r\u01A1\v\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01A7\n\r' +
    '\x05\r\u01A9\n\r\x05\r\u01AB\n\r\x03\r\x03\r\x03\r\x05\r\u01B0\n\r\x05' +
    '\r\u01B2\n\r\x03\x0E\x03\x0E\x03\x0F\x06\x0F\u01B7\n\x0F\r\x0F\x0E\x0F' +
    '\u01B8\x03\x10\x03\x10\x05\x10\u01BD\n\x10\x03\x11\x03\x11\x03\x11\x03' +
    '\x11\x03\x11\x03\x11\x06\x11\u01C5\n\x11\r\x11\x0E\x11\u01C6\x03\x11\x05' +
    '\x11\u01CA\n\x11\x03\x11\x03\x11\x05\x11\u01CE\n\x11\x03\x12\x03\x12\x03' +
    '\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01D8\n\x12\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13' +
    '\u01E3\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x05\x14\u01EF\n\x14\x03\x14\x03\x14\x03\x14\x03\x14' +
    '\x05\x14\u01F5\n\x14\x07\x14\u01F7\n\x14\f\x14\x0E\x14\u01FA\v\x14\x03' +
    '\x15\x03\x15\x05\x15\u01FE\n\x15\x03\x16\x03\x16\x03\x16\x07\x16\u0203' +
    '\n\x16\f\x16\x0E\x16\u0206\v\x16\x03\x16\x05\x16\u0209\n\x16\x03\x17\x03' +
    '\x17\x05\x17\u020D\n\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A' +
    '\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u021B\n\x1B\x03' +
    '\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u0223\n\x1E\x03\x1F' +
    '\x03\x1F\x03 \x03 \x03 \x03 \x05 \u022B\n \x05 \u022D\n \x03!\x03!\x05' +
    '!\u0231\n!\x03"\x03"\x03"\x03#\x03#\x07#\u0238\n#\f#\x0E#\u023B\v#' +
    '\x03#\x03#\x06#\u023F\n#\r#\x0E#\u0240\x05#\u0243\n#\x03#\x03#\x03#\x03' +
    '#\x03#\x03#\x03#\x05#\u024C\n#\x03$\x03$\x03$\x05$\u0251\n$\x03%\x03%' +
    '\x03%\x05%\u0256\n%\x03&\x03&\x03&\x07&\u025B\n&\f&\x0E&\u025E\v&\x03' +
    "&\x05&\u0261\n&\x03'\x03'\x03'\x07'\u0266\n'\f'\x0E'\u0269\v'" +
    '\x03(\x03(\x03(\x07(\u026E\n(\f(\x0E(\u0271\v(\x03)\x03)\x03)\x03)\x07' +
    ')\u0277\n)\f)\x0E)\u027A\v)\x03*\x03*\x03*\x03*\x07*\u0280\n*\f*\x0E*' +
    '\u0283\v*\x03+\x03+\x03+\x03+\x05+\u0289\n+\x03,\x03,\x03,\x03,\x03,\x03' +
    ',\x03,\x03,\x03,\x05,\u0294\n,\x03-\x03-\x03-\x03-\x05-\u029A\n-\x03.' +
    '\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u02A5\n.\f.\x0E.\u02A8\v' +
    '.\x03.\x03.\x03.\x05.\u02AD\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05' +
    '/\u02B6\n/\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u02C1\n0' +
    '\x031\x031\x031\x031\x031\x031\x031\x061\u02CA\n1\r1\x0E1\u02CB\x031\x03' +
    '1\x031\x051\u02D1\n1\x031\x031\x031\x051\u02D6\n1\x031\x031\x031\x051' +
    '\u02DB\n1\x032\x032\x032\x032\x072\u02E1\n2\f2\x0E2\u02E4\v2\x032\x03' +
    '2\x032\x033\x033\x033\x053\u02EC\n3\x034\x034\x034\x034\x054\u02F2\n4' +
    '\x054\u02F4\n4\x035\x035\x035\x035\x035\x035\x055\u02FC\n5\x036\x036\x03' +
    '6\x036\x036\x036\x056\u0304\n6\x036\x056\u0307\n6\x037\x037\x057\u030B' +
    '\n7\x038\x038\x058\u030F\n8\x038\x038\x038\x039\x039\x059\u0316\n9\x03' +
    '9\x039\x039\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u0321\n:\f:\x0E:\u0324' +
    '\v:\x03;\x03;\x03;\x03;\x03;\x03;\x07;\u032C\n;\f;\x0E;\u032F\v;\x03<' +
    '\x03<\x03<\x05<\u0334\n<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u033D' +
    '\n=\f=\x0E=\u0340\v=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03' +
    '>\x03>\x03>\x03>\x05>\u034F\n>\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03' +
    '@\x03@\x07@\u035A\n@\f@\x0E@\u035D\v@\x03A\x03A\x03A\x03A\x03A\x03A\x07' +
    'A\u0365\nA\fA\x0EA\u0368\vA\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u0370\n' +
    'B\fB\x0EB\u0373\vB\x03C\x03C\x03C\x03C\x03C\x03C\x07C\u037B\nC\fC\x0E' +
    'C\u037E\vC\x03D\x03D\x03D\x03D\x03D\x03D\x07D\u0386\nD\fD\x0ED\u0389\v' +
    'D\x03E\x03E\x03E\x03E\x03E\x03E\x07E\u0391\nE\fE\x0EE\u0394\vE\x03F\x03' +
    'F\x03F\x05F\u0399\nF\x03G\x03G\x03G\x03G\x03G\x05G\u03A0\nG\x03H\x03H' +
    '\x03H\x03H\x05H\u03A6\nH\x03H\x03H\x03H\x05H\u03AB\nH\x03I\x03I\x03I\x05' +
    'I\u03B0\nI\x03I\x03I\x03I\x03I\x05I\u03B6\nI\x03I\x03I\x03I\x03I\x06I' +
    '\u03BC\nI\rI\x0EI\u03BD\x03I\x03I\x03I\x05I\u03C3\nI\x03J\x03J\x05J\u03C7' +
    '\nJ\x03J\x03J\x05J\u03CB\nJ\x03K\x03K\x03L\x03L\x03M\x03M\x03M\x03M\x07' +
    'M\u03D5\nM\fM\x0EM\u03D8\vM\x03M\x05M\u03DB\nM\x05M\u03DD\nM\x03N\x03' +
    'N\x03N\x07N\u03E2\nN\fN\x0EN\u03E5\vN\x03O\x03O\x03O\x03O\x03P\x03P\x03' +
    'P\x03P\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03T\x03' +
    'T\x03T\x07T\u03FD\nT\fT\x0ET\u0400\vT\x03T\x05T\u0403\nT\x03U\x03U\x05' +
    'U\u0407\nU\x03U\x03U\x05U\u040B\nU\x03U\x05U\u040E\nU\x05U\u0410\nU\x03' +
    'V\x03V\x05V\u0414\nV\x03W\x03W\x05W\u0418\nW\x03W\x03W\x03W\x05W\u041D' +
    '\nW\x07W\u041F\nW\fW\x0EW\u0422\vW\x03W\x05W\u0425\nW\x03X\x03X\x03X\x07' +
    'X\u042A\nX\fX\x0EX\u042D\vX\x03X\x05X\u0430\nX\x03Y\x03Y\x05Y\u0434\n' +
    'Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u043C\nZ\x03Z\x03Z\x03Z\x03Z\x03' +
    'Z\x03Z\x03Z\x03Z\x05Z\u0446\nZ\x07Z\u0448\nZ\fZ\x0EZ\u044B\vZ\x03Z\x05' +
    'Z\u044E\nZ\x05Z\u0450\nZ\x03Z\x03Z\x05Z\u0454\nZ\x03Z\x03Z\x03Z\x03Z\x05' +
    'Z\u045A\nZ\x07Z\u045C\nZ\fZ\x0EZ\u045F\vZ\x03Z\x05Z\u0462\nZ\x05Z\u0464' +
    '\nZ\x05Z\u0466\nZ\x03[\x03[\x03[\x03[\x05[\u046C\n[\x03[\x05[\u046F\n' +
    '[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x07\\\u0477\n\\\f\\\x0E\\\u047A\v\\' +
    '\x03\\\x05\\\u047D\n\\\x03]\x03]\x05]\u0481\n]\x03]\x03]\x03]\x03]\x03' +
    ']\x03]\x03]\x03]\x05]\u048B\n]\x03^\x03^\x05^\u048F\n^\x03_\x05_\u0492' +
    '\n_\x03_\x03_\x03_\x03_\x03_\x05_\u0499\n_\x03`\x03`\x03`\x05`\u049E\n' +
    '`\x03a\x03a\x03b\x03b\x05b\u04A4\nb\x03c\x03c\x03c\x05c\u04A9\nc\x03d' +
    '\x03d\x03d\x05d\u04AE\nd\x03e\x03e\x03f\x03f\x03g\x03g\x03g\x02\x02\f' +
    '&rtx~\x80\x82\x84\x86\x88h\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E' +
    '\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 ' +
    '\x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02' +
    '<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02' +
    'X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02' +
    't\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02' +
    '\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02' +
    '\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02' +
    '\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02' +
    '\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\x02\x05\x03\x02' +
    'Xd\x03\x0267\x03\x02"#\u0528\x02\xCF\x03\x02\x02\x02\x04\xD6\x03\x02' +
    '\x02\x02\x06\xDC\x03\x02\x02\x02\b\xDF\x03\x02\x02\x02\n\xEB\x03\x02\x02' +
    '\x02\f\xEF\x03\x02\x02\x02\x0E\xF5\x03\x02\x02\x02\x10\xF8\x03\x02\x02' +
    '\x02\x12\u0102\x03\x02\x02\x02\x14\u0159\x03\x02\x02\x02\x16\u015B\x03' +
    '\x02\x02\x02\x18\u01B1\x03\x02\x02\x02\x1A\u01B3\x03\x02\x02\x02\x1C\u01B6' +
    '\x03\x02\x02\x02\x1E\u01BC\x03\x02\x02\x02 \u01CD\x03\x02\x02\x02"\u01D7' +
    '\x03\x02\x02\x02$\u01E2\x03\x02\x02\x02&\u01E4\x03\x02\x02\x02(\u01FD' +
    '\x03\x02\x02\x02*\u01FF\x03\x02\x02\x02,\u020C\x03\x02\x02\x02.\u020E' +
    '\x03\x02\x02\x020\u0210\x03\x02\x02\x022\u0213\x03\x02\x02\x024\u021A' +
    '\x03\x02\x02\x026\u021C\x03\x02\x02\x028\u021E\x03\x02\x02\x02:\u0220' +
    '\x03\x02\x02\x02<\u0224\x03\x02\x02\x02>\u0226\x03\x02\x02\x02@\u0230' +
    '\x03\x02\x02\x02B\u0232\x03\x02\x02\x02D\u0235\x03\x02\x02\x02F\u024D' +
    '\x03\x02\x02\x02H\u0252\x03\x02\x02\x02J\u0257\x03\x02\x02\x02L\u0262' +
    '\x03\x02\x02\x02N\u026A\x03\x02\x02\x02P\u0272\x03\x02\x02\x02R\u027B' +
    '\x03\x02\x02\x02T\u0284\x03\x02\x02\x02V\u0293\x03\x02\x02\x02X\u0295' +
    '\x03\x02\x02\x02Z\u029B\x03\x02\x02\x02\\\u02AE\x03\x02\x02\x02^\u02B7' +
    '\x03\x02\x02\x02`\u02C2\x03\x02\x02\x02b\u02DC\x03\x02\x02\x02d\u02E8' +
    '\x03\x02\x02\x02f\u02ED\x03\x02\x02\x02h\u02FB\x03\x02\x02\x02j\u0306' +
    '\x03\x02\x02\x02l\u030A\x03\x02\x02\x02n\u030C\x03\x02\x02\x02p\u0313' +
    '\x03\x02\x02\x02r\u031A\x03\x02\x02\x02t\u0325\x03\x02\x02\x02v\u0333' +
    '\x03\x02\x02\x02x\u0335\x03\x02\x02\x02z\u034E\x03\x02\x02\x02|\u0350' +
    '\x03\x02\x02\x02~\u0353\x03\x02\x02\x02\x80\u035E\x03\x02\x02\x02\x82' +
    '\u0369\x03\x02\x02\x02\x84\u0374\x03\x02\x02\x02\x86\u037F\x03\x02\x02' +
    '\x02\x88\u038A\x03\x02\x02\x02\x8A\u0398\x03\x02\x02\x02\x8C\u039F\x03' +
    '\x02\x02\x02\x8E\u03AA\x03\x02\x02\x02\x90\u03C2\x03\x02\x02\x02\x92\u03CA' +
    '\x03\x02\x02\x02\x94\u03CC\x03\x02\x02\x02\x96\u03CE\x03\x02\x02\x02\x98' +
    '\u03D0\x03\x02\x02\x02\x9A\u03E3\x03\x02\x02\x02\x9C\u03E6\x03\x02\x02' +
    '\x02\x9E\u03EA\x03\x02\x02\x02\xA0\u03EE\x03\x02\x02\x02\xA2\u03F2\x03' +
    '\x02\x02\x02\xA4\u03F6\x03\x02\x02\x02\xA6\u03F9\x03\x02\x02\x02\xA8\u040F' +
    '\x03\x02\x02\x02\xAA\u0411\x03\x02\x02\x02\xAC\u0417\x03\x02\x02\x02\xAE' +
    '\u0426\x03\x02\x02\x02\xB0\u0433\x03\x02\x02\x02\xB2\u0465\x03\x02\x02' +
    '\x02\xB4\u0467\x03\x02\x02\x02\xB6\u0473\x03\x02\x02\x02\xB8\u048A\x03' +
    '\x02\x02\x02\xBA\u048E\x03\x02\x02\x02\xBC\u0491\x03\x02\x02\x02\xBE\u049A' +
    '\x03\x02\x02\x02\xC0\u049F\x03\x02\x02\x02\xC2\u04A1\x03\x02\x02\x02\xC4' +
    '\u04A8\x03\x02\x02\x02\xC6\u04AD\x03\x02\x02\x02\xC8\u04AF\x03\x02\x02' +
    '\x02\xCA\u04B1\x03\x02\x02\x02\xCC\u04B3\x03\x02\x02\x02\xCE\xD0\x05\x06' +
    '\x04\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\x03\x03\x02' +
    '\x02\x02\xD1\xD7\x07,\x02\x02\xD2\xD7\x05 \x11\x02\xD3\xD4\x05V,\x02\xD4' +
    '\xD5\x07,\x02\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD1\x03\x02\x02\x02\xD6' +
    '\xD2\x03\x02\x02\x02\xD6\xD3\x03\x02\x02\x02\xD7\x05\x03\x02\x02\x02\xD8' +
    '\xDB\x07,\x02\x02\xD9\xDB\x05\x1E\x10\x02\xDA\xD8\x03\x02\x02\x02\xDA' +
    '\xD9\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC' +
    '\xDD\x03\x02\x02\x02\xDD\x07\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF' +
    '\xE0\x07V\x02\x02\xE0\xE6\x05N(\x02\xE1\xE3\x079\x02\x02\xE2\xE4\x05\xB6' +
    '\\\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02' +
    '\x02\x02\xE5\xE7\x07:\x02\x02\xE6\xE1\x03\x02\x02\x02\xE6\xE7\x03\x02' +
    '\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x07,\x02\x02\xE9\t\x03\x02\x02' +
    '\x02\xEA\xEC\x05\b\x05\x02\xEB\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02' +
    '\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\v\x03\x02\x02' +
    '\x02\xEF\xF3\x05\n\x06\x02\xF0\xF4\x05\xB4[\x02\xF1\xF4\x05\x10\t\x02' +
    '\xF2\xF4\x05\x0E\b\x02\xF3\xF0\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02' +
    '\xF3\xF2\x03\x02\x02\x02\xF4\r\x03\x02\x02\x02\xF5\xF6\x07*\x02\x02\xF6' +
    '\xF7\x05\x10\t\x02\xF7\x0F\x03\x02\x02\x02\xF8\xF9\x07\t\x02\x02\xF9\xFA' +
    '\x07-\x02\x02\xFA\xFD\x05\x12\n\x02\xFB\xFC\x07W\x02\x02\xFC\xFE\x05j' +
    '6\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x03\x02' +
    '\x02\x02\xFF\u0100\x07<\x02\x02\u0100\u0101\x05h5\x02\u0101\x11\x03\x02' +
    '\x02\x02\u0102\u0104\x079\x02\x02\u0103\u0105\x05\x14\v\x02\u0104\u0103' +
    '\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02' +
    '\u0106\u0107\x07:\x02\x02\u0107\x13\x03\x02\x02\x02\u0108\u010B\x05\x16' +
    '\f\x02\u0109\u010A\x07?\x02\x02\u010A\u010C\x05j6\x02\u010B\u0109\x03' +
    '\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u0115\x03\x02\x02\x02\u010D' +
    '\u010E\x07;\x02\x02\u010E\u0111\x05\x16\f\x02\u010F\u0110\x07?\x02\x02' +
    '\u0110\u0112\x05j6\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02' +
    '\x02\x02\u0112\u0114\x03\x02\x02\x02\u0113\u010D\x03\x02\x02\x02\u0114' +
    '\u0117\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02' +
    '\x02\x02\u0116\u0139\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118' +
    '\u0137\x07;\x02\x02\u0119\u011B\x078\x02\x02\u011A\u011C\x05\x16\f\x02' +
    '\u011B\u011A\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u0125\x03' +
    '\x02\x02\x02\u011D\u011E\x07;\x02\x02\u011E\u0121\x05\x16\f\x02\u011F' +
    '\u0120\x07?\x02\x02\u0120\u0122\x05j6\x02\u0121\u011F\x03\x02\x02\x02' +
    '\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123\u011D\x03' +
    '\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125' +
    '\u0126\x03\x02\x02\x02\u0126\u0130\x03\x02\x02\x02\u0127\u0125\x03\x02' +
    '\x02\x02\u0128\u012E\x07;\x02\x02\u0129\u012A\x07>\x02\x02\u012A\u012C' +
    '\x05\x16\f\x02\u012B\u012D\x07;\x02\x02\u012C\u012B\x03\x02\x02\x02\u012C' +
    '\u012D\x03\x02\x02\x02\u012D\u012F\x03\x02\x02\x02\u012E\u0129\x03\x02' +
    '\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130' +
    '\u0128\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0138\x03\x02' +
    '\x02\x02\u0132\u0133\x07>\x02\x02\u0133\u0135\x05\x16\f\x02\u0134\u0136' +
    '\x07;\x02\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02' +
    '\u0136\u0138\x03\x02\x02\x02\u0137\u0119\x03\x02\x02\x02\u0137\u0132\x03' +
    '\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139' +
    '\u0118\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u015A\x03\x02' +
    '\x02\x02\u013B\u013D\x078\x02\x02\u013C\u013E\x05\x16\f\x02\u013D\u013C' +
    '\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0147\x03\x02\x02\x02' +
    '\u013F\u0140\x07;\x02\x02\u0140\u0143\x05\x16\f\x02\u0141\u0142\x07?\x02' +
    '\x02\u0142\u0144\x05j6\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03' +
    '\x02\x02\x02\u0144\u0146\x03\x02\x02\x02\u0145\u013F\x03\x02\x02\x02\u0146' +
    '\u0149\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02' +
    '\x02\x02\u0148\u0152\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A' +
    '\u0150\x07;\x02\x02\u014B\u014C\x07>\x02\x02\u014C\u014E\x05\x16\f\x02' +
    '\u014D\u014F\x07;\x02\x02\u014E\u014D\x03\x02\x02\x02\u014E\u014F\x03' +
    '\x02\x02\x02\u014F\u0151\x03\x02\x02\x02\u0150\u014B\x03\x02\x02\x02\u0150' +
    '\u0151\x03\x02\x02\x02\u0151\u0153\x03\x02\x02\x02\u0152\u014A\x03\x02' +
    '\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u015A\x03\x02\x02\x02\u0154' +
    '\u0155\x07>\x02\x02\u0155\u0157\x05\x16\f\x02\u0156\u0158\x07;\x02\x02' +
    '\u0157\u0156\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03' +
    '\x02\x02\x02\u0159\u0108\x03\x02\x02\x02\u0159\u013B\x03\x02\x02\x02\u0159' +
    '\u0154\x03\x02\x02\x02\u015A\x15\x03\x02\x02\x02\u015B\u015E\x07-\x02' +
    '\x02\u015C\u015D\x07<\x02\x02\u015D\u015F\x05j6\x02\u015E\u015C\x03\x02' +
    '\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\x17\x03\x02\x02\x02\u0160\u0163' +
    '\x05\x1A\x0E\x02\u0161\u0162\x07?\x02\x02\u0162\u0164\x05j6\x02\u0163' +
    '\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u016D\x03\x02' +
    '\x02\x02\u0165\u0166\x07;\x02\x02\u0166\u0169\x05\x1A\x0E\x02\u0167\u0168' +
    '\x07?\x02\x02\u0168\u016A\x05j6\x02\u0169\u0167\x03\x02\x02\x02\u0169' +
    '\u016A\x03\x02\x02\x02\u016A\u016C\x03\x02\x02\x02\u016B\u0165\x03\x02' +
    '\x02\x02\u016C\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D' +
    '\u016E\x03\x02\x02\x02\u016E\u0191\x03\x02\x02\x02\u016F\u016D\x03\x02' +
    '\x02\x02\u0170\u018F\x07;\x02\x02\u0171\u0173\x078\x02\x02\u0172\u0174' +
    '\x05\x1A\x0E\x02\u0173\u0172\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02' +
    '\u0174\u017D\x03\x02\x02\x02\u0175\u0176\x07;\x02\x02\u0176\u0179\x05' +
    '\x1A\x0E\x02\u0177\u0178\x07?\x02\x02\u0178\u017A\x05j6\x02\u0179\u0177' +
    '\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017C\x03\x02\x02\x02' +
    '\u017B\u0175\x03\x02\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D\u017B\x03' +
    '\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0188\x03\x02\x02\x02\u017F' +
    '\u017D\x03\x02\x02\x02\u0180\u0186\x07;\x02\x02\u0181\u0182\x07>\x02\x02' +
    '\u0182\u0184\x05\x1A\x0E\x02\u0183\u0185\x07;\x02\x02\u0184\u0183\x03' +
    '\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0187\x03\x02\x02\x02\u0186' +
    '\u0181\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x03\x02' +
    '\x02\x02\u0188\u0180\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189' +
    '\u0190\x03\x02\x02\x02\u018A\u018B\x07>\x02\x02\u018B\u018D\x05\x1A\x0E' +
    '\x02\u018C\u018E\x07;\x02\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E' +
    '\x03\x02\x02\x02\u018E\u0190\x03\x02\x02\x02\u018F\u0171\x03\x02\x02\x02' +
    '\u018F\u018A\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03' +
    '\x02\x02\x02\u0191\u0170\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192' +
    '\u01B2\x03\x02\x02\x02\u0193\u0195\x078\x02\x02\u0194\u0196\x05\x1A\x0E' +
    '\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u019F' +
    '\x03\x02\x02\x02\u0197\u0198\x07;\x02\x02\u0198\u019B\x05\x1A\x0E\x02' +
    '\u0199\u019A\x07?\x02\x02\u019A\u019C\x05j6\x02\u019B\u0199\x03\x02\x02' +
    '\x02';
  private static readonly _serializedATNSegment1: string =
    '\u019B\u019C\x03\x02\x02\x02\u019C\u019E\x03\x02\x02\x02\u019D\u0197\x03' +
    '\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F' +
    '\u01A0\x03\x02\x02\x02\u01A0\u01AA\x03\x02\x02\x02\u01A1\u019F\x03\x02' +
    '\x02\x02\u01A2\u01A8\x07;\x02\x02\u01A3\u01A4\x07>\x02\x02\u01A4\u01A6' +
    '\x05\x1A\x0E\x02\u01A5\u01A7\x07;\x02\x02\u01A6\u01A5\x03\x02\x02\x02' +
    '\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A9\x03\x02\x02\x02\u01A8\u01A3\x03' +
    '\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA' +
    '\u01A2\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01B2\x03\x02' +
    '\x02\x02\u01AC\u01AD\x07>\x02\x02\u01AD\u01AF\x05\x1A\x0E\x02\u01AE\u01B0' +
    '\x07;\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02' +
    '\u01B0\u01B2\x03\x02\x02\x02\u01B1\u0160\x03\x02\x02\x02\u01B1\u0193\x03' +
    '\x02\x02\x02\u01B1\u01AC\x03\x02\x02\x02\u01B2\x19\x03\x02\x02\x02\u01B3' +
    '\u01B4\x07-\x02\x02\u01B4\x1B\x03\x02\x02\x02\u01B5\u01B7\x05\x1E\x10' +
    '\x02\u01B6\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B6' +
    '\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\x1D\x03\x02\x02\x02' +
    '\u01BA\u01BD\x05 \x11\x02\u01BB\u01BD\x05V,\x02\u01BC\u01BA\x03\x02\x02' +
    '\x02\u01BC\u01BB\x03\x02\x02\x02\u01BD\x1F\x03\x02\x02\x02\u01BE\u01BF' +
    '\x05"\x12\x02\u01BF\u01C0\x07,\x02\x02\u01C0\u01CE\x03\x02\x02\x02\u01C1' +
    '\u01C4\x05"\x12\x02\u01C2\u01C3\x07=\x02\x02\u01C3\u01C5\x05"\x12\x02' +
    '\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C4\x03' +
    '\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03\x02\x02\x02\u01C8' +
    '\u01CA\x07=\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02' +
    '\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC\x07,\x02\x02\u01CC\u01CE' +
    '\x03\x02\x02\x02\u01CD\u01BE\x03\x02\x02\x02\u01CD\u01C1\x03\x02\x02\x02' +
    '\u01CE!\x03\x02\x02\x02\u01CF\u01D8\x05$\x13\x02\u01D0\u01D8\x050\x19' +
    '\x02\u01D1\u01D8\x052\x1A\x02\u01D2\u01D8\x054\x1B\x02\u01D3\u01D8\x05' +
    '@!\x02\u01D4\u01D8\x05P)\x02\u01D5\u01D8\x05R*\x02\u01D6\u01D8\x05T+\x02' +
    '\u01D7\u01CF\x03\x02\x02\x02\u01D7\u01D0\x03\x02\x02\x02\u01D7\u01D1\x03' +
    '\x02\x02\x02\u01D7\u01D2\x03\x02\x02\x02\u01D7\u01D3\x03\x02\x02\x02\u01D7' +
    '\u01D4\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D6\x03\x02' +
    '\x02\x02\u01D8#\x03\x02\x02\x02\u01D9\u01E3\x05(\x15\x02\u01DA\u01DB\x05' +
    ',\x17\x02\u01DB\u01DC\x05.\x18\x02\u01DC\u01DD\x05&\x14\x02\u01DD\u01E3' +
    '\x03\x02\x02\x02\u01DE\u01DF\x05,\x17\x02\u01DF\u01E0\x07?\x02\x02\u01E0' +
    '\u01E1\x05&\x14\x02\u01E1\u01E3\x03\x02\x02\x02\u01E2\u01D9\x03\x02\x02' +
    '\x02\u01E2\u01DA\x03\x02\x02\x02\u01E2\u01DE\x03\x02\x02\x02\u01E3%\x03' +
    '\x02\x02\x02\u01E4\u01E5\b\x14\x01\x02\u01E5\u01E6\x05(\x15\x02\u01E6' +
    '\u01F8\x03\x02\x02\x02\u01E7\u01E8\f\x05\x02\x02\u01E8\u01E9\x07<\x02' +
    '\x02\u01E9\u01F7\x05j6\x02\u01EA\u01EB\f\x04\x02\x02\u01EB\u01EE\x05.' +
    '\x18\x02\u01EC\u01EF\x05\xC2b\x02\u01ED\u01EF\x05\xB0Y\x02\u01EE\u01EC' +
    '\x03\x02\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EF\u01F7\x03\x02\x02\x02' +
    '\u01F0\u01F1\f\x03\x02\x02\u01F1\u01F4\x07?\x02\x02\u01F2\u01F5\x05\xC2' +
    'b\x02\u01F3\u01F5\x05,\x17\x02\u01F4\u01F2\x03\x02\x02\x02\u01F4\u01F3' +
    '\x03\x02\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6\u01E7\x03\x02\x02\x02' +
    '\u01F6\u01EA\x03\x02\x02\x02\u01F6\u01F0\x03\x02\x02\x02\u01F7\u01FA\x03' +
    '\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9' +
    "'\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB\u01FE\x05j6\x02\u01FC" +
    '\u01FE\x05|?\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FC\x03\x02\x02\x02' +
    '\u01FE)\x03\x02\x02\x02\u01FF\u0204\x05(\x15\x02\u0200\u0201\x07;\x02' +
    '\x02\u0201\u0203\x05(\x15\x02\u0202\u0200\x03\x02\x02\x02\u0203\u0206' +
    '\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02' +
    '\u0205\u0208\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0207\u0209\x07' +
    ';\x02\x02\u0208\u0207\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209' +
    '+\x03\x02\x02\x02\u020A\u020D\x05(\x15\x02\u020B\u020D\x05*\x16\x02\u020C' +
    '\u020A\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D-\x03\x02\x02' +
    '\x02\u020E\u020F\t\x02\x02\x02\u020F/\x03\x02\x02\x02\u0210\u0211\x07' +
    '&\x02\x02\u0211\u0212\x05\xACW\x02\u02121\x03\x02\x02\x02\u0213\u0214' +
    "\x07'\x02\x02\u02143\x03\x02\x02\x02\u0215\u021B\x056\x1C\x02\u0216\u021B" +
    '\x058\x1D\x02\u0217\u021B\x05:\x1E\x02\u0218\u021B\x05> \x02\u0219\u021B' +
    '\x05<\x1F\x02\u021A\u0215\x03\x02\x02\x02\u021A\u0216\x03\x02\x02\x02' +
    '\u021A\u0217\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u0219\x03' +
    '\x02\x02\x02\u021B5\x03\x02\x02\x02\u021C\u021D\x07)\x02\x02\u021D7\x03' +
    '\x02\x02\x02\u021E\u021F\x07(\x02\x02\u021F9\x03\x02\x02\x02\u0220\u0222' +
    '\x07\n\x02\x02\u0221\u0223\x05\xB0Y\x02\u0222\u0221\x03\x02\x02\x02\u0222' +
    '\u0223\x03\x02\x02\x02\u0223;\x03\x02\x02\x02\u0224\u0225\x05\xC2b\x02' +
    '\u0225=\x03\x02\x02\x02\u0226\u022C\x07\v\x02\x02\u0227\u022A\x05j6\x02' +
    '\u0228\u0229\x07\f\x02\x02\u0229\u022B\x05j6\x02\u022A\u0228\x03\x02\x02' +
    '\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022D\x03\x02\x02\x02\u022C\u0227' +
    '\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D?\x03\x02\x02\x02\u022E' +
    '\u0231\x05B"\x02\u022F\u0231\x05D#\x02\u0230\u022E\x03\x02\x02\x02\u0230' +
    '\u022F\x03\x02\x02\x02\u0231A\x03\x02\x02\x02\u0232\u0233\x07\r\x02\x02' +
    "\u0233\u0234\x05L'\x02\u0234C\x03\x02\x02\x02\u0235\u0242\x07\f\x02\x02" +
    '\u0236\u0238\t\x03\x02\x02\u0237\u0236\x03\x02\x02\x02\u0238\u023B\x03' +
    '\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A' +
    '\u023C\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023C\u0243\x05N(\x02' +
    '\u023D\u023F\t\x03\x02\x02\u023E\u023D\x03\x02\x02\x02\u023F\u0240\x03' +
    '\x02\x02\x02\u0240\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241' +
    '\u0243\x03\x02\x02\x02\u0242\u0239\x03\x02\x02\x02\u0242\u023E\x03\x02' +
    '\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u024B\x07\r\x02\x02\u0245\u024C' +
    '\x078\x02\x02\u0246\u0247\x079\x02\x02\u0247\u0248\x05J&\x02\u0248\u0249' +
    '\x07:\x02\x02\u0249\u024C\x03\x02\x02\x02\u024A\u024C\x05J&\x02\u024B' +
    '\u0245\x03\x02\x02\x02\u024B\u0246\x03\x02\x02\x02\u024B\u024A\x03\x02' +
    '\x02\x02\u024CE\x03\x02\x02\x02\u024D\u0250\x07-\x02\x02\u024E\u024F\x07' +
    '\x0E\x02\x02\u024F\u0251\x07-\x02\x02\u0250\u024E\x03\x02\x02\x02\u0250' +
    '\u0251\x03\x02\x02\x02\u0251G\x03\x02\x02\x02\u0252\u0255\x05N(\x02\u0253' +
    '\u0254\x07\x0E\x02\x02\u0254\u0256\x07-\x02\x02\u0255\u0253\x03\x02\x02' +
    '\x02\u0255\u0256\x03\x02\x02\x02\u0256I\x03\x02\x02\x02\u0257\u025C\x05' +
    'F$\x02\u0258\u0259\x07;\x02\x02\u0259\u025B\x05F$\x02\u025A\u0258\x03' +
    '\x02\x02\x02\u025B\u025E\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C' +
    '\u025D\x03\x02\x02\x02\u025D\u0260\x03\x02\x02\x02\u025E\u025C\x03\x02' +
    '\x02\x02\u025F\u0261\x07;\x02\x02\u0260\u025F\x03\x02\x02\x02\u0260\u0261' +
    '\x03\x02\x02\x02\u0261K\x03\x02\x02\x02\u0262\u0267\x05H%\x02\u0263\u0264' +
    '\x07;\x02\x02\u0264\u0266\x05H%\x02\u0265\u0263\x03\x02\x02\x02\u0266' +
    '\u0269\x03\x02\x02\x02\u0267\u0265\x03\x02\x02\x02\u0267\u0268\x03\x02' +
    '\x02\x02\u0268M\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A\u026F' +
    '\x07-\x02\x02\u026B\u026C\x076\x02\x02\u026C\u026E\x07-\x02\x02\u026D' +
    '\u026B\x03\x02\x02\x02\u026E\u0271\x03\x02\x02\x02\u026F\u026D\x03\x02' +
    '\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270O\x03\x02\x02\x02\u0271\u026F' +
    '\x03\x02\x02\x02\u0272\u0273\x07\x0F\x02\x02\u0273\u0278\x07-\x02\x02' +
    '\u0274\u0275\x07;\x02\x02\u0275\u0277\x07-\x02\x02\u0276\u0274\x03\x02' +
    '\x02\x02\u0277\u027A\x03\x02\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278' +
    '\u0279\x03\x02\x02\x02\u0279Q\x03\x02\x02\x02\u027A\u0278\x03\x02\x02' +
    '\x02\u027B\u027C\x07\x10\x02\x02\u027C\u0281\x07-\x02\x02\u027D\u027E' +
    '\x07;\x02\x02\u027E\u0280\x07-\x02\x02\u027F\u027D\x03\x02\x02\x02\u0280' +
    '\u0283\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02' +
    '\x02\x02\u0282S\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0284\u0285' +
    '\x07\x11\x02\x02\u0285\u0288\x05j6\x02\u0286\u0287\x07;\x02\x02\u0287' +
    '\u0289\x05j6\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02' +
    '\u0289U\x03\x02\x02\x02\u028A\u0294\x05Z.\x02\u028B\u0294\x05\\/\x02\u028C' +
    '\u0294\x05^0\x02\u028D\u0294\x05`1\x02\u028E\u0294\x05b2\x02\u028F\u0294' +
    '\x05\x10\t\x02\u0290\u0294\x05\xB4[\x02\u0291\u0294\x05\f\x07\x02\u0292' +
    '\u0294\x05X-\x02\u0293\u028A\x03\x02\x02\x02\u0293\u028B\x03\x02\x02\x02' +
    '\u0293\u028C\x03\x02\x02\x02\u0293\u028D\x03\x02\x02\x02\u0293\u028E\x03' +
    '\x02\x02\x02\u0293\u028F\x03\x02\x02\x02\u0293\u0290\x03\x02\x02\x02\u0293' +
    '\u0291\x03\x02\x02\x02\u0293\u0292\x03\x02\x02\x02\u0294W\x03\x02\x02' +
    '\x02\u0295\u0299\x07*\x02\x02\u0296\u029A\x05\x10\t\x02\u0297\u029A\x05' +
    'b2\x02\u0298\u029A\x05^0\x02\u0299\u0296\x03\x02\x02\x02\u0299\u0297\x03' +
    '\x02\x02\x02\u0299\u0298\x03\x02\x02\x02\u029AY\x03\x02\x02\x02\u029B' +
    '\u029C\x07\x12\x02\x02\u029C\u029D\x05j6\x02\u029D\u029E\x07<\x02\x02' +
    '\u029E\u02A6\x05h5\x02\u029F\u02A0\x07\x13\x02\x02\u02A0\u02A1\x05j6\x02' +
    '\u02A1\u02A2\x07<\x02\x02\u02A2\u02A3\x05h5\x02\u02A3\u02A5\x03\x02\x02' +
    '\x02\u02A4\u029F\x03\x02\x02\x02\u02A5\u02A8\x03\x02\x02\x02\u02A6\u02A4' +
    '\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02AC\x03\x02\x02\x02' +
    '\u02A8\u02A6\x03\x02\x02\x02\u02A9\u02AA\x07\x14\x02\x02\u02AA\u02AB\x07' +
    '<\x02\x02\u02AB\u02AD\x05h5\x02\u02AC\u02A9\x03\x02\x02\x02\u02AC\u02AD' +
    '\x03\x02\x02\x02\u02AD[\x03\x02\x02\x02\u02AE\u02AF\x07\x15\x02\x02\u02AF' +
    '\u02B0\x05j6\x02\u02B0\u02B1\x07<\x02\x02\u02B1\u02B5\x05h5\x02\u02B2' +
    '\u02B3\x07\x14\x02\x02\u02B3\u02B4\x07<\x02\x02\u02B4\u02B6\x05h5\x02' +
    '\u02B5\u02B2\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6]\x03\x02' +
    '\x02\x02\u02B7\u02B8\x07\x16\x02\x02\u02B8\u02B9\x05\xACW\x02\u02B9\u02BA' +
    '\x07\x17\x02\x02\u02BA\u02BB\x05\xB0Y\x02\u02BB\u02BC\x07<\x02\x02\u02BC' +
    '\u02C0\x05h5\x02\u02BD\u02BE\x07\x14\x02\x02\u02BE\u02BF\x07<\x02\x02' +
    '\u02BF\u02C1\x05h5\x02\u02C0\u02BD\x03\x02\x02\x02\u02C0\u02C1\x03\x02' +
    '\x02\x02\u02C1_\x03\x02\x02\x02\u02C2\u02C3\x07\x18\x02\x02\u02C3\u02C4' +
    '\x07<\x02\x02\u02C4\u02DA\x05h5\x02\u02C5\u02C6\x05f4\x02\u02C6\u02C7' +
    '\x07<\x02\x02\u02C7\u02C8\x05h5\x02\u02C8\u02CA\x03\x02\x02\x02\u02C9' +
    '\u02C5\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02C9\x03\x02' +
    '\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02D0\x03\x02\x02\x02\u02CD' +
    '\u02CE\x07\x14\x02\x02\u02CE\u02CF\x07<\x02\x02\u02CF\u02D1\x05h5\x02' +
    '\u02D0\u02CD\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D5\x03' +
    '\x02\x02\x02\u02D2\u02D3\x07\x19\x02\x02\u02D3\u02D4\x07<\x02\x02\u02D4' +
    '\u02D6\x05h5\x02\u02D5\u02D2\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02' +
    '\u02D6\u02DB\x03\x02\x02\x02\u02D7\u02D8\x07\x19\x02\x02\u02D8\u02D9\x07' +
    '<\x02\x02\u02D9\u02DB\x05h5\x02\u02DA\u02C9\x03\x02\x02\x02\u02DA\u02D7' +
    '\x03\x02\x02\x02\u02DBa\x03\x02\x02\x02\u02DC\u02DD\x07\x1A\x02\x02\u02DD' +
    '\u02E2\x05d3\x02\u02DE\u02DF\x07;\x02\x02\u02DF\u02E1\x05d3\x02\u02E0' +
    '\u02DE\x03\x02\x02\x02\u02E1\u02E4\x03\x02\x02\x02\u02E2\u02E0\x03\x02' +
    '\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02E5\x03\x02\x02\x02\u02E4' +
    '\u02E2\x03\x02\x02\x02\u02E5\u02E6\x07<\x02\x02\u02E6\u02E7\x05h5\x02' +
    '\u02E7c\x03\x02\x02\x02\u02E8\u02EB\x05j6\x02\u02E9\u02EA\x07\x0E\x02' +
    '\x02\u02EA\u02EC\x05~@\x02\u02EB\u02E9\x03\x02\x02\x02\u02EB\u02EC\x03' +
    '\x02\x02\x02\u02ECe\x03\x02\x02\x02\u02ED\u02F3\x07\x1B\x02\x02\u02EE' +
    '\u02F1\x05j6\x02\u02EF\u02F0\x07\x0E\x02\x02\u02F0\u02F2\x07-\x02\x02' +
    '\u02F1\u02EF\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F4\x03' +
    '\x02\x02\x02\u02F3\u02EE\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4' +
    'g\x03\x02\x02\x02\u02F5\u02FC\x05 \x11\x02\u02F6\u02F7\x07,\x02\x02\u02F7' +
    '\u02F8\x07g\x02\x02\u02F8\u02F9\x05\x1C\x0F\x02\u02F9\u02FA\x07h\x02\x02' +
    '\u02FA\u02FC\x03\x02\x02\x02\u02FB\u02F5\x03\x02\x02\x02\u02FB\u02F6\x03' +
    '\x02\x02\x02\u02FCi\x03\x02\x02\x02\u02FD\u0303\x05r:\x02\u02FE\u02FF' +
    '\x07\x12\x02\x02\u02FF\u0300\x05r:\x02\u0300\u0301\x07\x14\x02\x02\u0301' +
    '\u0302\x05j6\x02\u0302\u0304\x03\x02\x02\x02\u0303\u02FE\x03\x02\x02\x02' +
    '\u0303\u0304\x03\x02\x02\x02\u0304\u0307\x03\x02\x02\x02\u0305\u0307\x05' +
    'n8\x02\u0306\u02FD\x03\x02\x02\x02\u0306\u0305\x03\x02\x02\x02\u0307k' +
    '\x03\x02\x02\x02\u0308\u030B\x05r:\x02\u0309\u030B\x05p9\x02\u030A\u0308' +
    '\x03\x02\x02\x02\u030A\u0309\x03\x02\x02\x02\u030Bm\x03\x02\x02\x02\u030C' +
    '\u030E\x07\x1C\x02\x02\u030D\u030F\x05\x18\r\x02\u030E\u030D\x03\x02\x02' +
    '\x02\u030E\u030F\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0311' +
    '\x07<\x02\x02\u0311\u0312\x05j6\x02\u0312o\x03\x02\x02\x02\u0313\u0315' +
    '\x07\x1C\x02\x02\u0314\u0316\x05\x18\r\x02\u0315\u0314\x03\x02\x02\x02' +
    '\u0315\u0316\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0318\x07' +
    '<\x02\x02\u0318\u0319\x05l7\x02\u0319q\x03\x02\x02\x02\u031A\u031B\b:' +
    '\x01\x02\u031B\u031C\x05t;\x02\u031C\u0322\x03\x02\x02\x02\u031D\u031E' +
    '\f\x03\x02\x02\u031E\u031F\x07\x1D\x02\x02\u031F\u0321\x05t;\x02\u0320' +
    '\u031D\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02\u0322\u0320\x03\x02' +
    '\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323s\x03\x02\x02\x02\u0324\u0322' +
    '\x03\x02\x02\x02\u0325\u0326\b;\x01\x02\u0326\u0327\x05v<\x02\u0327\u032D' +
    '\x03\x02\x02\x02\u0328\u0329\f\x03\x02\x02\u0329\u032A\x07\x1E\x02\x02' +
    '\u032A\u032C\x05v<\x02\u032B\u0328\x03\x02\x02\x02\u032C\u032F\x03\x02' +
    '\x02\x02\u032D\u032B\x03\x02\x02\x02\u032D\u032E\x03\x02\x02\x02\u032E' +
    'u\x03\x02\x02\x02\u032F\u032D\x03\x02\x02\x02\u0330\u0334\x05x=\x02\u0331' +
    '\u0332\x07\x1F\x02\x02\u0332\u0334\x05v<\x02\u0333\u0330\x03\x02\x02\x02' +
    '\u0333\u0331\x03\x02\x02\x02\u0334w\x03\x02\x02\x02\u0335\u0336\b=\x01' +
    '\x02\u0336\u0337\x05~@\x02\u0337\u033E\x03\x02\x02\x02\u0338\u0339\f\x03' +
    '\x02\x02\u0339\u033A\x05z>\x02\u033A\u033B\x05~@\x02\u033B\u033D\x03\x02' +
    '\x02\x02\u033C\u0338\x03\x02\x02\x02\u033D\u0340\x03\x02\x02\x02\u033E' +
    '\u033C\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033Fy\x03\x02\x02' +
    '\x02\u0340\u033E\x03\x02\x02\x02\u0341\u034F\x07O\x02\x02\u0342\u034F' +
    '\x07P\x02\x02\u0343\u034F\x07Q\x02\x02\u0344\u034F\x07R\x02\x02\u0345' +
    '\u034F\x07S\x02\x02\u0346\u034F\x07T\x02\x02\u0347\u034F\x07U\x02\x02' +
    '\u0348\u034F\x07\x17\x02\x02\u0349\u034A\x07\x1F\x02\x02\u034A\u034F\x07' +
    '\x17\x02\x02\u034B\u034F\x07 \x02\x02\u034C\u034D\x07 \x02\x02\u034D\u034F' +
    '\x07\x1F\x02\x02\u034E\u0341\x03\x02\x02\x02\u034E\u0342\x03\x02\x02\x02' +
    '\u034E\u0343\x03\x02\x02\x02\u034E\u0344\x03\x02\x02\x02\u034E\u0345\x03' +
    '\x02\x02\x02\u034E\u0346\x03\x02\x02\x02\u034E\u0347\x03\x02\x02\x02\u034E' +
    '\u0348\x03\x02\x02\x02\u034E\u0349\x03\x02\x02\x02\u034E\u034B\x03\x02' +
    '\x02\x02\u034E\u034C\x03\x02\x02\x02\u034F{\x03\x02\x02\x02\u0350\u0351' +
    '\x078\x02\x02\u0351\u0352\x05~@\x02\u0352}\x03\x02\x02\x02\u0353\u0354' +
    '\b@\x01\x02\u0354\u0355\x05\x80A\x02\u0355\u035B\x03\x02\x02\x02\u0356' +
    '\u0357\f\x03\x02\x02\u0357\u0358\x07B\x02\x02\u0358\u035A\x05\x80A\x02' +
    '\u0359\u0356\x03\x02\x02\x02\u035A\u035D\x03\x02\x02\x02\u035B\u0359\x03' +
    '\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\x7F\x03\x02\x02\x02\u035D' +
    '\u035B\x03\x02\x02\x02\u035E\u035F\bA\x01\x02\u035F\u0360\x05\x82B\x02' +
    '\u0360\u0366\x03\x02\x02\x02\u0361\u0362\f\x03\x02\x02\u0362\u0363\x07' +
    'C\x02\x02\u0363\u0365\x05\x82B\x02\u0364\u0361\x03\x02\x02\x02\u0365\u0368' +
    '\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02' +
    '\u0367\x81\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0369\u036A\bB' +
    '\x01\x02\u036A\u036B\x05\x84C\x02\u036B\u0371\x03\x02\x02\x02\u036C\u036D' +
    '\f\x03\x02\x02\u036D\u036E\x07D\x02\x02\u036E\u0370\x05\x84C\x02\u036F' +
    '\u036C\x03\x02\x02\x02\u0370\u0373\x03\x02\x02\x02\u0371\u036F\x03\x02' +
    '\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372\x83\x03\x02\x02\x02\u0373\u0371' +
    '\x03\x02\x02\x02\u0374\u0375\bC\x01\x02\u0375\u0376\x05\x86D\x02\u0376' +
    '\u037C\x03\x02\x02\x02\u0377\u0378\f\x03\x02\x02\u0378\u0379\x07\x03\x02' +
    '\x02\u0379\u037B\x05\x86D\x02\u037A\u0377\x03\x02\x02\x02\u037B\u037E' +
    '\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02' +
    '\u037D\x85\x03\x02\x02\x02\u037E\u037C\x03\x02\x02\x02\u037F\u0380\bD' +
    '\x01\x02\u0380\u0381\x05\x88E\x02\u0381\u0387\x03\x02\x02\x02\u0382\u0383' +
    '\f\x03\x02\x02\u0383\u0384\x07\x04\x02\x02\u0384\u0386\x05\x88E\x02\u0385' +
    '\u0382\x03\x02\x02\x02\u0386\u0389\x03\x02\x02\x02\u0387\u0385\x03\x02' +
    '\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\x87\x03\x02\x02\x02\u0389\u0387' +
    '\x03\x02\x02\x02\u038A\u038B\bE\x01\x02\u038B\u038C\x05\x8AF\x02\u038C' +
    '\u0392\x03\x02\x02\x02\u038D\u038E\f\x03\x02\x02\u038E\u038F\x07\x05\x02' +
    '\x02\u038F\u0391\x05\x8AF\x02\u0390\u038D\x03\x02\x02\x02\u0391\u0394' +
    '\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02' +
    '\u0393\x89\x03\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0395\u0399\x05' +
    '\x8CG\x02\u0396\u0397\x07\x06\x02\x02\u0397\u0399\x05\x8AF\x02\u0398\u0395' +
    '\x03\x02\x02\x02\u0398\u0396\x03\x02\x02\x02\u0399\x8B\x03\x02\x02\x02' +
    '\u039A\u03A0\x05\x8EH\x02\u039B\u039C\x05\x8EH\x02\u039C\u039D\x07>\x02' +
    '\x02\u039D\u039E\x05\x8AF\x02\u039E\u03A0\x03\x02\x02\x02\u039F\u039A' +
    '\x03\x02\x02\x02\u039F\u039B\x03\x02\x02\x02\u03A0\x8D\x03\x02\x02\x02' +
    '\u03A1\u03AB\x05\x90I\x02\u03A2\u03AB\x05\x9CO\x02\u03A3\u03AB\x05\x9E' +
    'P\x02\u03A4\u03A6\x07+\x02\x02\u03A5\u03A4\x03\x02\x02\x02\u03A5\u03A6' +
    '\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7\u03A8\x05\x90I\x02' +
    '\u03A8\u03A9\x05\x9AN\x02\u03A9\u03AB\x03\x02\x02\x02\u03AA\u03A1\x03' +
    '\x02\x02\x02\u03AA\u03A2\x03\x02\x02\x02\u03AA\u03A3\x03\x02\x02\x02\u03AA' +
    '\u03A5\x03\x02\x02\x02\u03AB\x8F\x03\x02\x02\x02\u03AC\u03AF\x079\x02' +
    '\x02\u03AD\u03B0\x05\xC2b\x02\u03AE\u03B0\x05\x98M\x02\u03AF\u03AD\x03' +
    '\x02\x02\x02\u03AF\u03AE\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0' +
    '\u03B1\x03\x02\x02\x02\u03B1\u03C3\x07:\x02\x02\u03B2\u03C3\x05\x92J\x02' +
    '\u03B3\u03B5\x07M\x02\x02\u03B4\u03B6\x05\xB2Z\x02\u03B5\u03B4\x03\x02' +
    '\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7' +
    '\u03C3\x07N\x02\x02\u03B8\u03C3\x05\x94K\x02\u03B9\u03C3\x05\xC6d\x02' +
    '\u03BA\u03BC\x07\x07\x02\x02\u03BB\u03BA\x03\x02\x02\x02\u03BC\u03BD\x03' +
    '\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE' +
    '\u03C3\x03\x02\x02\x02\u03BF\u03C3\x077\x02\x02\u03C0\u03C3\x07!\x02\x02' +
    '\u03C1\u03C3\x05\x96L\x02\u03C2\u03AC\x03\x02\x02\x02\u03C2\u03B2\x03' +
    '\x02\x02\x02\u03C2\u03B3\x03\x02\x02\x02\u03C2\u03B8\x03\x02\x02\x02\u03C2' +
    '\u03B9\x03\x02\x02\x02\u03C2\u03BB\x03\x02\x02\x02\u03C2\u03BF\x03\x02' +
    '\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C2\u03C1\x03\x02\x02\x02\u03C3' +
    '\x91\x03\x02\x02\x02\u03C4\u03C6\x07@\x02\x02\u03C5\u03C7\x05\x98M\x02' +
    '\u03C6\u03C5\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03C8\x03' +
    '\x02\x02\x02\u03C8\u03CB\x07A\x02\x02\u03C9\u03CB\x03\x02\x02\x02\u03CA' +
    '\u03C4\x03\x02\x02\x02\u03CA\u03C9\x03\x02\x02\x02\u03CB\x93\x03\x02\x02' +
    '\x02\u03CC\u03CD\x07-\x02\x02\u03CD\x95\x03\x02\x02\x02\u03CE\u03CF\t' +
    '\x04\x02\x02\u03CF\x97\x03\x02\x02\x02\u03D0\u03DC\x05(\x15\x02\u03D1' +
    '\u03DD\x05\xBC_\x02\u03D2\u03D3\x07;\x02\x02\u03D3\u03D5\x05(\x15\x02' +
    '\u03D4\u03D2\x03\x02\x02\x02\u03D5\u03D8\x03\x02\x02\x02\u03D6\u03D4\x03' +
    '\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03DA\x03\x02\x02\x02\u03D8' +
    '\u03D6\x03\x02\x02\x02\u03D9\u03DB\x07;\x02\x02\u03DA\u03D9\x03\x02\x02' +
    '\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DD\x03\x02\x02\x02\u03DC\u03D1' +
    '\x03\x02\x02\x02\u03DC\u03D6\x03\x02\x02\x02\u03DD\x99\x03\x02\x02\x02' +
    '\u03DE\u03E2\x05\xA0Q\x02\u03DF\u03E2\x05\xA2R\x02\u03E0\u03E2\x05\xA4' +
    'S\x02\u03E1\u03DE\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E1\u03E0' +
    '\x03\x02\x02\x02\u03E2\u03E5\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02' +
    '\u03E3\u03E4\x03\x02\x02\x02\u03E4\x9B\x03\x02\x02\x02\u03E5\u03E3\x03' +
    '\x02\x02\x02\u03E6\u03E7\x05\x9EP\x02\u03E7\u03E8\x076\x02\x02\u03E8\u03E9' +
    '\x05\x9EP\x02\u03E9\x9D\x03\x02\x02\x02\u03EA\u03EB\x05\x90I\x02\u03EB' +
    '\u03EC\x079\x02\x02\u03EC\u03ED\x07:\x02\x02\u03ED\x9F\x03\x02\x02\x02' +
    '\u03EE\u03EF\x079\x02\x02\u03EF\u03F0\x05\xB6\\\x02\u03F0\u03F1\x07:\x02' +
    '\x02\u03F1\xA1\x03\x02\x02\x02\u03F2\u03F3\x07@\x02\x02\u03F3\u03F4\x05' +
    '\xA6T\x02\u03F4\u03F5\x07A\x02\x02\u03F5\xA3\x03\x02\x02\x02\u03F6\u03F7' +
    '\x076\x02\x02\u03F7\u03F8\x05\x8EH\x02\u03F8\xA5\x03\x02\x02\x02\u03F9' +
    '\u03FE\x05\xA8U\x02\u03FA\u03FB\x07;\x02\x02\u03FB\u03FD\x05\xA8U\x02' +
    '\u03FC\u03FA\x03\x02\x02\x02\u03FD\u0400\x03\x02\x02\x02\u03FE\u03FC\x03' +
    '\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\u0402\x03\x02\x02\x02\u0400' +
    '\u03FE\x03\x02\x02\x02\u0401\u0403\x07;\x02\x02\u0402\u0401\x03\x02\x02' +
    '\x02\u0402\u0403\x03\x02\x02\x02\u0403\xA7\x03\x02\x02\x02\u0404\u0410' +
    '\x05j6\x02\u0405\u0407\x05j6\x02\u0406\u0405\x03\x02\x02\x02\u0406\u0407' +
    '\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u040A\x07<\x02\x02' +
    '\u0409\u040B\x05j6\x02\u040A\u0409\x03\x02\x02\x02\u040A\u040B\x03\x02' +
    '\x02\x02\u040B\u040D\x03\x02\x02\x02\u040C\u040E\x05\xAAV\x02\u040D\u040C' +
    '\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u0410\x03\x02\x02\x02' +
    '\u040F\u0404\x03\x02\x02\x02\u040F\u0406\x03\x02\x02\x02\u0410\xA9\x03' +
    '\x02\x02\x02\u0411\u0413\x07<\x02\x02\u0412\u0414\x05j6\x02\u0413\u0412' +
    '\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\xAB\x03\x02\x02\x02' +
    '\u0415\u0418\x05~@\x02\u0416\u0418\x05|?\x02\u0417\u0415\x03\x02\x02\x02' +
    '\u0417\u0416\x03\x02\x02\x02\u0418\u0420\x03\x02\x02\x02\u0419\u041C\x07' +
    ';\x02\x02\u041A\u041D\x05~@\x02\u041B\u041D\x05|?\x02\u041C\u041A\x03' +
    '\x02\x02\x02\u041C\u041B\x03\x02\x02\x02\u041D\u041F\x03\x02\x02\x02\u041E' +
    '\u0419\x03\x02\x02\x02\u041F\u0422\x03\x02\x02\x02\u0420\u041E\x03\x02' +
    '\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0424\x03\x02\x02\x02\u0422' +
    '\u0420\x03\x02\x02\x02\u0423\u0425\x07;\x02\x02\u0424\u0423\x03\x02\x02' +
    '\x02\u0424\u0425\x03\x02\x02\x02\u0425\xAD\x03\x02\x02\x02\u0426\u042B' +
    '\x05j6\x02\u0427\u0428\x07;\x02\x02\u0428\u042A\x05j6\x02\u0429\u0427' +
    '\x03\x02\x02\x02\u042A\u042D\x03\x02\x02\x02\u042B\u0429\x03\x02\x02\x02' +
    '\u042B\u042C\x03\x02\x02\x02\u042C\u042F\x03\x02\x02\x02\u042D\u042B\x03' +
    '\x02\x02\x02\u042E\u0430\x07;\x02\x02\u042F\u042E\x03\x02\x02\x02\u042F' +
    '\u0430\x03\x02\x02\x02\u0430\xAF\x03\x02\x02\x02\u0431\u0434\x05j6\x02' +
    '\u0432\u0434\x05\xAEX\x02\u0433\u0431\x03\x02\x02\x02\u0433\u0432\x03' +
    '\x02\x02\x02\u0434\xB1\x03\x02\x02\x02\u0435\u0436\x05j6\x02\u0436\u0437' +
    '\x07<\x02\x02\u0437\u0438\x05j6\x02\u0438\u043C\x03\x02\x02\x02\u0439' +
    '\u043A\x07>\x02\x02\u043A\u043C\x05~@\x02\u043B\u0435\x03\x02\x02\x02' +
    '\u043B\u0439\x03\x02\x02\x02\u043C\u044F\x03\x02\x02\x02\u043D\u0450\x05' +
    '\xBC_\x02\u043E\u0445\x07;\x02\x02\u043F\u0440\x05j6\x02\u0440\u0441\x07' +
    '<\x02\x02\u0441\u0442\x05j6\x02\u0442\u0446\x03\x02\x02\x02\u0443\u0444' +
    '\x07>\x02\x02\u0444\u0446\x05~@\x02\u0445\u043F\x03\x02\x02\x02\u0445' +
    '\u0443\x03\x02\x02\x02\u0446\u0448\x03\x02\x02\x02\u0447\u043E\x03\x02' +
    '\x02\x02\u0448\u044B\x03\x02\x02\x02\u0449\u0447\x03\x02\x02\x02\u0449' +
    '\u044A\x03\x02\x02\x02\u044A\u044D\x03\x02\x02\x02\u044B\u0449\x03\x02' +
    '\x02\x02\u044C\u044E\x07;\x02\x02\u044D\u044C';
  private static readonly _serializedATNSegment2: string =
    '\x03\x02\x02\x02\u044D\u044E\x03\x02\x02\x02\u044E\u0450\x03\x02\x02\x02' +
    '\u044F\u043D\x03\x02\x02\x02\u044F\u0449\x03\x02\x02\x02\u0450\u0466\x03' +
    '\x02\x02\x02\u0451\u0454\x05j6\x02\u0452\u0454\x05|?\x02\u0453\u0451\x03' +
    '\x02\x02\x02\u0453\u0452\x03\x02\x02\x02\u0454\u0463\x03\x02\x02\x02\u0455' +
    '\u0464\x05\xBC_\x02\u0456\u0459\x07;\x02\x02\u0457\u045A\x05j6\x02\u0458' +
    '\u045A\x05|?\x02\u0459\u0457\x03\x02\x02\x02\u0459\u0458\x03\x02\x02\x02' +
    '\u045A\u045C\x03\x02\x02\x02\u045B\u0456\x03\x02\x02\x02\u045C\u045F\x03' +
    '\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E' +
    '\u0461\x03\x02\x02\x02\u045F\u045D\x03\x02\x02\x02\u0460\u0462\x07;\x02' +
    '\x02\u0461\u0460\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0464' +
    '\x03\x02\x02\x02\u0463\u0455\x03\x02\x02\x02\u0463\u045D\x03\x02\x02\x02' +
    '\u0464\u0466\x03\x02\x02\x02\u0465\u043B\x03\x02\x02\x02\u0465\u0453\x03' +
    '\x02\x02\x02\u0466\xB3\x03\x02\x02\x02\u0467\u0468\x07$\x02\x02\u0468' +
    '\u046E\x07-\x02\x02\u0469\u046B\x079\x02\x02\u046A\u046C\x05\xB6\\\x02' +
    '\u046B\u046A\x03\x02\x02\x02\u046B\u046C\x03\x02\x02\x02\u046C\u046D\x03' +
    '\x02\x02\x02\u046D\u046F\x07:\x02\x02\u046E\u0469\x03\x02\x02\x02\u046E' +
    '\u046F\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02\u0470\u0471\x07<\x02' +
    '\x02\u0471\u0472\x05h5\x02\u0472\xB5\x03\x02\x02\x02\u0473\u0478\x05\xB8' +
    ']\x02\u0474\u0475\x07;\x02\x02\u0475\u0477\x05\xB8]\x02\u0476\u0474\x03' +
    '\x02\x02\x02\u0477\u047A\x03\x02\x02\x02\u0478\u0476\x03\x02\x02\x02\u0478' +
    '\u0479\x03\x02\x02\x02\u0479\u047C\x03\x02\x02\x02\u047A\u0478\x03\x02' +
    '\x02\x02\u047B\u047D\x07;\x02\x02\u047C\u047B\x03\x02\x02\x02\u047C\u047D' +
    '\x03\x02\x02\x02\u047D\xB7\x03\x02\x02\x02\u047E\u0480\x05j6\x02\u047F' +
    '\u0481\x05\xBC_\x02\u0480\u047F\x03\x02\x02\x02\u0480\u0481\x03\x02\x02' +
    '\x02\u0481\u048B\x03\x02\x02\x02\u0482\u0483\x05j6\x02\u0483\u0484\x07' +
    '?\x02\x02\u0484\u0485\x05j6\x02\u0485\u048B\x03\x02\x02\x02\u0486\u0487' +
    '\x07>\x02\x02\u0487\u048B\x05j6\x02\u0488\u0489\x078\x02\x02\u0489\u048B' +
    '\x05j6\x02\u048A\u047E\x03\x02\x02\x02\u048A\u0482\x03\x02\x02\x02\u048A' +
    '\u0486\x03\x02\x02\x02\u048A\u0488\x03\x02\x02\x02\u048B\xB9\x03\x02\x02' +
    '\x02\u048C\u048F\x05\xBC_\x02\u048D\u048F\x05\xBE`\x02\u048E\u048C\x03' +
    '\x02\x02\x02\u048E\u048D\x03\x02\x02\x02\u048F\xBB\x03\x02\x02\x02\u0490' +
    '\u0492\x07*\x02\x02\u0491\u0490\x03\x02\x02\x02\u0491\u0492\x03\x02\x02' +
    '\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494\x07\x16\x02\x02\u0494\u0495' +
    '\x05\xACW\x02\u0495\u0496\x07\x17\x02\x02\u0496\u0498\x05r:\x02\u0497' +
    '\u0499\x05\xBA^\x02\u0498\u0497\x03\x02\x02\x02\u0498\u0499\x03\x02\x02' +
    '\x02\u0499\xBD\x03\x02\x02\x02\u049A\u049B\x07\x12\x02\x02\u049B\u049D' +
    '\x05l7\x02\u049C\u049E\x05\xBA^\x02\u049D\u049C\x03\x02\x02\x02\u049D' +
    '\u049E\x03\x02\x02\x02\u049E\xBF\x03\x02\x02\x02\u049F\u04A0\x07-\x02' +
    '\x02\u04A0\xC1\x03\x02\x02\x02\u04A1\u04A3\x07%\x02\x02\u04A2\u04A4\x05' +
    '\xC4c\x02\u04A3\u04A2\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4' +
    '\xC3\x03\x02\x02\x02\u04A5\u04A6\x07\f\x02\x02\u04A6\u04A9\x05j6\x02\u04A7' +
    '\u04A9\x05\xB0Y\x02\u04A8\u04A5\x03\x02\x02\x02\u04A8\u04A7\x03\x02\x02' +
    '\x02\u04A9\xC5\x03\x02\x02\x02\u04AA\u04AE\x05\xC8e\x02\u04AB\u04AE\x05' +
    '\xCAf\x02\u04AC\u04AE\x05\xCCg\x02\u04AD\u04AA\x03\x02\x02\x02\u04AD\u04AB' +
    '\x03\x02\x02\x02\u04AD\u04AC\x03\x02\x02\x02\u04AE\xC7\x03\x02\x02\x02' +
    '\u04AF\u04B0\x07\b\x02\x02\u04B0\xC9\x03\x02\x02\x02\u04B1\u04B2\x074' +
    '\x02\x02\u04B2\xCB\x03\x02\x02\x02\u04B3\u04B4\x075\x02\x02\u04B4\xCD' +
    '\x03\x02\x02\x02\xAA\xCF\xD6\xDA\xDC\xE3\xE6\xED\xF3\xFD\u0104\u010B\u0111' +
    '\u0115\u011B\u0121\u0125\u012C\u012E\u0130\u0135\u0137\u0139\u013D\u0143' +
    '\u0147\u014E\u0150\u0152\u0157\u0159\u015E\u0163\u0169\u016D\u0173\u0179' +
    '\u017D\u0184\u0186\u0188\u018D\u018F\u0191\u0195\u019B\u019F\u01A6\u01A8' +
    '\u01AA\u01AF\u01B1\u01B8\u01BC\u01C6\u01C9\u01CD\u01D7\u01E2\u01EE\u01F4' +
    '\u01F6\u01F8\u01FD\u0204\u0208\u020C\u021A\u0222\u022A\u022C\u0230\u0239' +
    '\u0240\u0242\u024B\u0250\u0255\u025C\u0260\u0267\u026F\u0278\u0281\u0288' +
    '\u0293\u0299\u02A6\u02AC\u02B5\u02C0\u02CB\u02D0\u02D5\u02DA\u02E2\u02EB' +
    '\u02F1\u02F3\u02FB\u0303\u0306\u030A\u030E\u0315\u0322\u032D\u0333\u033E' +
    '\u034E\u035B\u0366\u0371\u037C\u0387\u0392\u0398\u039F\u03A5\u03AA\u03AF' +
    '\u03B5\u03BD\u03C2\u03C6\u03CA\u03D6\u03DA\u03DC\u03E1\u03E3\u03FE\u0402' +
    '\u0406\u040A\u040D\u040F\u0413\u0417\u041C\u0420\u0424\u042B\u042F\u0433' +
    '\u043B\u0445\u0449\u044D\u044F\u0453\u0459\u045D\u0461\u0463\u0465\u046B' +
    '\u046E\u0478\u047C\u0480\u048A\u048E\u0491\u0498\u049D\u04A3\u04A8\u04AD';
  public static readonly _serializedATN: string = Utils.join(
    [
      Python3Parser._serializedATNSegment0,
      Python3Parser._serializedATNSegment1,
      Python3Parser._serializedATNSegment2,
    ],
    '',
  );
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!Python3Parser.__ATN) {
      Python3Parser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(Python3Parser._serializedATN),
      );
    }

    return Python3Parser.__ATN;
  }
}

export class TranslationunitContext extends ParserRuleContext {
  public file_input(): File_inputContext | undefined {
    return this.tryGetRuleContext(0, File_inputContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_translationunit;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTranslationunit) {
      return visitor.visitTranslationunit(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Single_inputContext extends ParserRuleContext {
  public NEWLINE(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.NEWLINE, 0);
  }
  public simple_stmt(): Simple_stmtContext | undefined {
    return this.tryGetRuleContext(0, Simple_stmtContext);
  }
  public compound_stmt(): Compound_stmtContext | undefined {
    return this.tryGetRuleContext(0, Compound_stmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_single_input;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitSingle_input) {
      return visitor.visitSingle_input(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class File_inputContext extends ParserRuleContext {
  public NEWLINE(): TerminalNode[];
  public NEWLINE(i: number): TerminalNode;
  public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(Python3Parser.NEWLINE);
    } else {
      return this.getToken(Python3Parser.NEWLINE, i);
    }
  }
  public stmt(): StmtContext[];
  public stmt(i: number): StmtContext;
  public stmt(i?: number): StmtContext | StmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StmtContext);
    } else {
      return this.getRuleContext(i, StmtContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_file_input;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitFile_input) {
      return visitor.visitFile_input(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class DecoratorContext extends ParserRuleContext {
  public dotted_name(): Dotted_nameContext {
    return this.getRuleContext(0, Dotted_nameContext);
  }
  public NEWLINE(): TerminalNode {
    return this.getToken(Python3Parser.NEWLINE, 0);
  }
  public arglist(): ArglistContext | undefined {
    return this.tryGetRuleContext(0, ArglistContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_decorator;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitDecorator) {
      return visitor.visitDecorator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class DecoratorsContext extends ParserRuleContext {
  public decorator(): DecoratorContext[];
  public decorator(i: number): DecoratorContext;
  public decorator(i?: number): DecoratorContext | DecoratorContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DecoratorContext);
    } else {
      return this.getRuleContext(i, DecoratorContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_decorators;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitDecorators) {
      return visitor.visitDecorators(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class DecoratedContext extends ParserRuleContext {
  public decorators(): DecoratorsContext {
    return this.getRuleContext(0, DecoratorsContext);
  }
  public classdef(): ClassdefContext | undefined {
    return this.tryGetRuleContext(0, ClassdefContext);
  }
  public funcdef(): FuncdefContext | undefined {
    return this.tryGetRuleContext(0, FuncdefContext);
  }
  public async_funcdef(): Async_funcdefContext | undefined {
    return this.tryGetRuleContext(0, Async_funcdefContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_decorated;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitDecorated) {
      return visitor.visitDecorated(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Async_funcdefContext extends ParserRuleContext {
  public ASYNC(): TerminalNode {
    return this.getToken(Python3Parser.ASYNC, 0);
  }
  public funcdef(): FuncdefContext {
    return this.getRuleContext(0, FuncdefContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_async_funcdef;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitAsync_funcdef) {
      return visitor.visitAsync_funcdef(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FuncdefContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(Python3Parser.NAME, 0);
  }
  public parameters(): ParametersContext {
    return this.getRuleContext(0, ParametersContext);
  }
  public suite(): SuiteContext {
    return this.getRuleContext(0, SuiteContext);
  }
  public test(): TestContext | undefined {
    return this.tryGetRuleContext(0, TestContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_funcdef;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitFuncdef) {
      return visitor.visitFuncdef(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ParametersContext extends ParserRuleContext {
  public typedargslist(): TypedargslistContext | undefined {
    return this.tryGetRuleContext(0, TypedargslistContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_parameters;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitParameters) {
      return visitor.visitParameters(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypedargslistContext extends ParserRuleContext {
  public tfpdef(): TfpdefContext[];
  public tfpdef(i: number): TfpdefContext;
  public tfpdef(i?: number): TfpdefContext | TfpdefContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TfpdefContext);
    } else {
      return this.getRuleContext(i, TfpdefContext);
    }
  }
  public test(): TestContext[];
  public test(i: number): TestContext;
  public test(i?: number): TestContext | TestContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TestContext);
    } else {
      return this.getRuleContext(i, TestContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_typedargslist;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTypedargslist) {
      return visitor.visitTypedargslist(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TfpdefContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(Python3Parser.NAME, 0);
  }
  public test(): TestContext | undefined {
    return this.tryGetRuleContext(0, TestContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_tfpdef;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTfpdef) {
      return visitor.visitTfpdef(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VarargslistContext extends ParserRuleContext {
  public vfpdef(): VfpdefContext[];
  public vfpdef(i: number): VfpdefContext;
  public vfpdef(i?: number): VfpdefContext | VfpdefContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VfpdefContext);
    } else {
      return this.getRuleContext(i, VfpdefContext);
    }
  }
  public test(): TestContext[];
  public test(i: number): TestContext;
  public test(i?: number): TestContext | TestContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TestContext);
    } else {
      return this.getRuleContext(i, TestContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_varargslist;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitVarargslist) {
      return visitor.visitVarargslist(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VfpdefContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(Python3Parser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_vfpdef;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitVfpdef) {
      return visitor.visitVfpdef(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StmtsContext extends ParserRuleContext {
  public stmt(): StmtContext[];
  public stmt(i: number): StmtContext;
  public stmt(i?: number): StmtContext | StmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StmtContext);
    } else {
      return this.getRuleContext(i, StmtContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_stmts;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitStmts) {
      return visitor.visitStmts(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StmtContext extends ParserRuleContext {
  public simple_stmt(): Simple_stmtContext | undefined {
    return this.tryGetRuleContext(0, Simple_stmtContext);
  }
  public compound_stmt(): Compound_stmtContext | undefined {
    return this.tryGetRuleContext(0, Compound_stmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitStmt) {
      return visitor.visitStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Simple_stmtContext extends ParserRuleContext {
  public small_stmt(): Small_stmtContext[];
  public small_stmt(i: number): Small_stmtContext;
  public small_stmt(i?: number): Small_stmtContext | Small_stmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Small_stmtContext);
    } else {
      return this.getRuleContext(i, Small_stmtContext);
    }
  }
  public NEWLINE(): TerminalNode {
    return this.getToken(Python3Parser.NEWLINE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_simple_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitSimple_stmt) {
      return visitor.visitSimple_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Small_stmtContext extends ParserRuleContext {
  public expr_stmt(): Expr_stmtContext | undefined {
    return this.tryGetRuleContext(0, Expr_stmtContext);
  }
  public del_stmt(): Del_stmtContext | undefined {
    return this.tryGetRuleContext(0, Del_stmtContext);
  }
  public pass_stmt(): Pass_stmtContext | undefined {
    return this.tryGetRuleContext(0, Pass_stmtContext);
  }
  public flow_stmt(): Flow_stmtContext | undefined {
    return this.tryGetRuleContext(0, Flow_stmtContext);
  }
  public import_stmt(): Import_stmtContext | undefined {
    return this.tryGetRuleContext(0, Import_stmtContext);
  }
  public global_stmt(): Global_stmtContext | undefined {
    return this.tryGetRuleContext(0, Global_stmtContext);
  }
  public nonlocal_stmt(): Nonlocal_stmtContext | undefined {
    return this.tryGetRuleContext(0, Nonlocal_stmtContext);
  }
  public assert_stmt(): Assert_stmtContext | undefined {
    return this.tryGetRuleContext(0, Assert_stmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_small_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitSmall_stmt) {
      return visitor.visitSmall_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Expr_stmtContext extends ParserRuleContext {
  public test_star_expr(): Test_star_exprContext | undefined {
    return this.tryGetRuleContext(0, Test_star_exprContext);
  }
  public testlist_star_expr(): Testlist_star_exprContext | undefined {
    return this.tryGetRuleContext(0, Testlist_star_exprContext);
  }
  public augassign(): AugassignContext | undefined {
    return this.tryGetRuleContext(0, AugassignContext);
  }
  public expr_stmt_right(): Expr_stmt_rightContext | undefined {
    return this.tryGetRuleContext(0, Expr_stmt_rightContext);
  }
  public ASSIGN(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.ASSIGN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_expr_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitExpr_stmt) {
      return visitor.visitExpr_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Expr_stmt_rightContext extends ParserRuleContext {
  public test_star_expr(): Test_star_exprContext | undefined {
    return this.tryGetRuleContext(0, Test_star_exprContext);
  }
  public expr_stmt_right(): Expr_stmt_rightContext | undefined {
    return this.tryGetRuleContext(0, Expr_stmt_rightContext);
  }
  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.COLON, 0);
  }
  public test(): TestContext | undefined {
    return this.tryGetRuleContext(0, TestContext);
  }
  public augassign(): AugassignContext | undefined {
    return this.tryGetRuleContext(0, AugassignContext);
  }
  public yield_expr(): Yield_exprContext | undefined {
    return this.tryGetRuleContext(0, Yield_exprContext);
  }
  public testlist(): TestlistContext | undefined {
    return this.tryGetRuleContext(0, TestlistContext);
  }
  public ASSIGN(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.ASSIGN, 0);
  }
  public testlist_star_expr(): Testlist_star_exprContext | undefined {
    return this.tryGetRuleContext(0, Testlist_star_exprContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_expr_stmt_right;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitExpr_stmt_right) {
      return visitor.visitExpr_stmt_right(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Test_star_exprContext extends ParserRuleContext {
  public test(): TestContext | undefined {
    return this.tryGetRuleContext(0, TestContext);
  }
  public star_expr(): Star_exprContext | undefined {
    return this.tryGetRuleContext(0, Star_exprContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_test_star_expr;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTest_star_expr) {
      return visitor.visitTest_star_expr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Testlist_star_expr_arrayContext extends ParserRuleContext {
  public test_star_expr(): Test_star_exprContext[];
  public test_star_expr(i: number): Test_star_exprContext;
  public test_star_expr(i?: number): Test_star_exprContext | Test_star_exprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Test_star_exprContext);
    } else {
      return this.getRuleContext(i, Test_star_exprContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_testlist_star_expr_array;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTestlist_star_expr_array) {
      return visitor.visitTestlist_star_expr_array(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Testlist_star_exprContext extends ParserRuleContext {
  public test_star_expr(): Test_star_exprContext | undefined {
    return this.tryGetRuleContext(0, Test_star_exprContext);
  }
  public testlist_star_expr_array(): Testlist_star_expr_arrayContext | undefined {
    return this.tryGetRuleContext(0, Testlist_star_expr_arrayContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_testlist_star_expr;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTestlist_star_expr) {
      return visitor.visitTestlist_star_expr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AugassignContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_augassign;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitAugassign) {
      return visitor.visitAugassign(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Del_stmtContext extends ParserRuleContext {
  public exprlist(): ExprlistContext {
    return this.getRuleContext(0, ExprlistContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_del_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitDel_stmt) {
      return visitor.visitDel_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Pass_stmtContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_pass_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitPass_stmt) {
      return visitor.visitPass_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Flow_stmtContext extends ParserRuleContext {
  public break_stmt(): Break_stmtContext | undefined {
    return this.tryGetRuleContext(0, Break_stmtContext);
  }
  public continue_stmt(): Continue_stmtContext | undefined {
    return this.tryGetRuleContext(0, Continue_stmtContext);
  }
  public return_stmt(): Return_stmtContext | undefined {
    return this.tryGetRuleContext(0, Return_stmtContext);
  }
  public raise_stmt(): Raise_stmtContext | undefined {
    return this.tryGetRuleContext(0, Raise_stmtContext);
  }
  public yield_stmt(): Yield_stmtContext | undefined {
    return this.tryGetRuleContext(0, Yield_stmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_flow_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitFlow_stmt) {
      return visitor.visitFlow_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Break_stmtContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_break_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitBreak_stmt) {
      return visitor.visitBreak_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Continue_stmtContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_continue_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitContinue_stmt) {
      return visitor.visitContinue_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Return_stmtContext extends ParserRuleContext {
  public testlist(): TestlistContext | undefined {
    return this.tryGetRuleContext(0, TestlistContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_return_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitReturn_stmt) {
      return visitor.visitReturn_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Yield_stmtContext extends ParserRuleContext {
  public yield_expr(): Yield_exprContext {
    return this.getRuleContext(0, Yield_exprContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_yield_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitYield_stmt) {
      return visitor.visitYield_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Raise_stmtContext extends ParserRuleContext {
  public test(): TestContext[];
  public test(i: number): TestContext;
  public test(i?: number): TestContext | TestContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TestContext);
    } else {
      return this.getRuleContext(i, TestContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_raise_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitRaise_stmt) {
      return visitor.visitRaise_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Import_stmtContext extends ParserRuleContext {
  public import_name(): Import_nameContext | undefined {
    return this.tryGetRuleContext(0, Import_nameContext);
  }
  public import_from(): Import_fromContext | undefined {
    return this.tryGetRuleContext(0, Import_fromContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_import_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitImport_stmt) {
      return visitor.visitImport_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Import_nameContext extends ParserRuleContext {
  public dotted_as_names(): Dotted_as_namesContext {
    return this.getRuleContext(0, Dotted_as_namesContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_import_name;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitImport_name) {
      return visitor.visitImport_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Import_fromContext extends ParserRuleContext {
  public dotted_name(): Dotted_nameContext | undefined {
    return this.tryGetRuleContext(0, Dotted_nameContext);
  }
  public import_as_names(): Import_as_namesContext | undefined {
    return this.tryGetRuleContext(0, Import_as_namesContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_import_from;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitImport_from) {
      return visitor.visitImport_from(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Import_as_nameContext extends ParserRuleContext {
  public NAME(): TerminalNode[];
  public NAME(i: number): TerminalNode;
  public NAME(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(Python3Parser.NAME);
    } else {
      return this.getToken(Python3Parser.NAME, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_import_as_name;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitImport_as_name) {
      return visitor.visitImport_as_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Dotted_as_nameContext extends ParserRuleContext {
  public dotted_name(): Dotted_nameContext {
    return this.getRuleContext(0, Dotted_nameContext);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_dotted_as_name;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitDotted_as_name) {
      return visitor.visitDotted_as_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Import_as_namesContext extends ParserRuleContext {
  public import_as_name(): Import_as_nameContext[];
  public import_as_name(i: number): Import_as_nameContext;
  public import_as_name(i?: number): Import_as_nameContext | Import_as_nameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Import_as_nameContext);
    } else {
      return this.getRuleContext(i, Import_as_nameContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_import_as_names;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitImport_as_names) {
      return visitor.visitImport_as_names(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Dotted_as_namesContext extends ParserRuleContext {
  public dotted_as_name(): Dotted_as_nameContext[];
  public dotted_as_name(i: number): Dotted_as_nameContext;
  public dotted_as_name(i?: number): Dotted_as_nameContext | Dotted_as_nameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Dotted_as_nameContext);
    } else {
      return this.getRuleContext(i, Dotted_as_nameContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_dotted_as_names;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitDotted_as_names) {
      return visitor.visitDotted_as_names(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Dotted_nameContext extends ParserRuleContext {
  public NAME(): TerminalNode[];
  public NAME(i: number): TerminalNode;
  public NAME(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(Python3Parser.NAME);
    } else {
      return this.getToken(Python3Parser.NAME, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_dotted_name;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitDotted_name) {
      return visitor.visitDotted_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Global_stmtContext extends ParserRuleContext {
  public NAME(): TerminalNode[];
  public NAME(i: number): TerminalNode;
  public NAME(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(Python3Parser.NAME);
    } else {
      return this.getToken(Python3Parser.NAME, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_global_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitGlobal_stmt) {
      return visitor.visitGlobal_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Nonlocal_stmtContext extends ParserRuleContext {
  public NAME(): TerminalNode[];
  public NAME(i: number): TerminalNode;
  public NAME(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(Python3Parser.NAME);
    } else {
      return this.getToken(Python3Parser.NAME, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_nonlocal_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitNonlocal_stmt) {
      return visitor.visitNonlocal_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Assert_stmtContext extends ParserRuleContext {
  public test(): TestContext[];
  public test(i: number): TestContext;
  public test(i?: number): TestContext | TestContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TestContext);
    } else {
      return this.getRuleContext(i, TestContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_assert_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitAssert_stmt) {
      return visitor.visitAssert_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Compound_stmtContext extends ParserRuleContext {
  public if_stmt(): If_stmtContext | undefined {
    return this.tryGetRuleContext(0, If_stmtContext);
  }
  public while_stmt(): While_stmtContext | undefined {
    return this.tryGetRuleContext(0, While_stmtContext);
  }
  public for_stmt(): For_stmtContext | undefined {
    return this.tryGetRuleContext(0, For_stmtContext);
  }
  public try_stmt(): Try_stmtContext | undefined {
    return this.tryGetRuleContext(0, Try_stmtContext);
  }
  public with_stmt(): With_stmtContext | undefined {
    return this.tryGetRuleContext(0, With_stmtContext);
  }
  public funcdef(): FuncdefContext | undefined {
    return this.tryGetRuleContext(0, FuncdefContext);
  }
  public classdef(): ClassdefContext | undefined {
    return this.tryGetRuleContext(0, ClassdefContext);
  }
  public decorated(): DecoratedContext | undefined {
    return this.tryGetRuleContext(0, DecoratedContext);
  }
  public async_stmt(): Async_stmtContext | undefined {
    return this.tryGetRuleContext(0, Async_stmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_compound_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitCompound_stmt) {
      return visitor.visitCompound_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Async_stmtContext extends ParserRuleContext {
  public ASYNC(): TerminalNode {
    return this.getToken(Python3Parser.ASYNC, 0);
  }
  public funcdef(): FuncdefContext | undefined {
    return this.tryGetRuleContext(0, FuncdefContext);
  }
  public with_stmt(): With_stmtContext | undefined {
    return this.tryGetRuleContext(0, With_stmtContext);
  }
  public for_stmt(): For_stmtContext | undefined {
    return this.tryGetRuleContext(0, For_stmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_async_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitAsync_stmt) {
      return visitor.visitAsync_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class If_stmtContext extends ParserRuleContext {
  public test(): TestContext[];
  public test(i: number): TestContext;
  public test(i?: number): TestContext | TestContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TestContext);
    } else {
      return this.getRuleContext(i, TestContext);
    }
  }
  public suite(): SuiteContext[];
  public suite(i: number): SuiteContext;
  public suite(i?: number): SuiteContext | SuiteContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SuiteContext);
    } else {
      return this.getRuleContext(i, SuiteContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_if_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitIf_stmt) {
      return visitor.visitIf_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class While_stmtContext extends ParserRuleContext {
  public test(): TestContext {
    return this.getRuleContext(0, TestContext);
  }
  public suite(): SuiteContext[];
  public suite(i: number): SuiteContext;
  public suite(i?: number): SuiteContext | SuiteContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SuiteContext);
    } else {
      return this.getRuleContext(i, SuiteContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_while_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitWhile_stmt) {
      return visitor.visitWhile_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class For_stmtContext extends ParserRuleContext {
  public exprlist(): ExprlistContext {
    return this.getRuleContext(0, ExprlistContext);
  }
  public testlist(): TestlistContext {
    return this.getRuleContext(0, TestlistContext);
  }
  public suite(): SuiteContext[];
  public suite(i: number): SuiteContext;
  public suite(i?: number): SuiteContext | SuiteContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SuiteContext);
    } else {
      return this.getRuleContext(i, SuiteContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_for_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitFor_stmt) {
      return visitor.visitFor_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Try_stmtContext extends ParserRuleContext {
  public suite(): SuiteContext[];
  public suite(i: number): SuiteContext;
  public suite(i?: number): SuiteContext | SuiteContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SuiteContext);
    } else {
      return this.getRuleContext(i, SuiteContext);
    }
  }
  public except_clause(): Except_clauseContext[];
  public except_clause(i: number): Except_clauseContext;
  public except_clause(i?: number): Except_clauseContext | Except_clauseContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Except_clauseContext);
    } else {
      return this.getRuleContext(i, Except_clauseContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_try_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTry_stmt) {
      return visitor.visitTry_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class With_stmtContext extends ParserRuleContext {
  public with_item(): With_itemContext[];
  public with_item(i: number): With_itemContext;
  public with_item(i?: number): With_itemContext | With_itemContext[] {
    if (i === undefined) {
      return this.getRuleContexts(With_itemContext);
    } else {
      return this.getRuleContext(i, With_itemContext);
    }
  }
  public suite(): SuiteContext {
    return this.getRuleContext(0, SuiteContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_with_stmt;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitWith_stmt) {
      return visitor.visitWith_stmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class With_itemContext extends ParserRuleContext {
  public test(): TestContext {
    return this.getRuleContext(0, TestContext);
  }
  public expr(): ExprContext | undefined {
    return this.tryGetRuleContext(0, ExprContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_with_item;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitWith_item) {
      return visitor.visitWith_item(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Except_clauseContext extends ParserRuleContext {
  public test(): TestContext | undefined {
    return this.tryGetRuleContext(0, TestContext);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_except_clause;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitExcept_clause) {
      return visitor.visitExcept_clause(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SuiteContext extends ParserRuleContext {
  public simple_stmt(): Simple_stmtContext | undefined {
    return this.tryGetRuleContext(0, Simple_stmtContext);
  }
  public NEWLINE(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.NEWLINE, 0);
  }
  public INDENT(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.INDENT, 0);
  }
  public stmts(): StmtsContext | undefined {
    return this.tryGetRuleContext(0, StmtsContext);
  }
  public DEDENT(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.DEDENT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_suite;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitSuite) {
      return visitor.visitSuite(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TestContext extends ParserRuleContext {
  public or_test(): Or_testContext[];
  public or_test(i: number): Or_testContext;
  public or_test(i?: number): Or_testContext | Or_testContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Or_testContext);
    } else {
      return this.getRuleContext(i, Or_testContext);
    }
  }
  public test(): TestContext | undefined {
    return this.tryGetRuleContext(0, TestContext);
  }
  public lambdef(): LambdefContext | undefined {
    return this.tryGetRuleContext(0, LambdefContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_test;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTest) {
      return visitor.visitTest(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Test_nocondContext extends ParserRuleContext {
  public or_test(): Or_testContext | undefined {
    return this.tryGetRuleContext(0, Or_testContext);
  }
  public lambdef_nocond(): Lambdef_nocondContext | undefined {
    return this.tryGetRuleContext(0, Lambdef_nocondContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_test_nocond;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTest_nocond) {
      return visitor.visitTest_nocond(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LambdefContext extends ParserRuleContext {
  public test(): TestContext {
    return this.getRuleContext(0, TestContext);
  }
  public varargslist(): VarargslistContext | undefined {
    return this.tryGetRuleContext(0, VarargslistContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_lambdef;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitLambdef) {
      return visitor.visitLambdef(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Lambdef_nocondContext extends ParserRuleContext {
  public test_nocond(): Test_nocondContext {
    return this.getRuleContext(0, Test_nocondContext);
  }
  public varargslist(): VarargslistContext | undefined {
    return this.tryGetRuleContext(0, VarargslistContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_lambdef_nocond;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitLambdef_nocond) {
      return visitor.visitLambdef_nocond(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Or_testContext extends ParserRuleContext {
  public and_test(): And_testContext {
    return this.getRuleContext(0, And_testContext);
  }
  public or_test(): Or_testContext | undefined {
    return this.tryGetRuleContext(0, Or_testContext);
  }
  public OR(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.OR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_or_test;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitOr_test) {
      return visitor.visitOr_test(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class And_testContext extends ParserRuleContext {
  public not_test(): Not_testContext {
    return this.getRuleContext(0, Not_testContext);
  }
  public and_test(): And_testContext | undefined {
    return this.tryGetRuleContext(0, And_testContext);
  }
  public AND(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.AND, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_and_test;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitAnd_test) {
      return visitor.visitAnd_test(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Not_testContext extends ParserRuleContext {
  public comparison(): ComparisonContext | undefined {
    return this.tryGetRuleContext(0, ComparisonContext);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.NOT, 0);
  }
  public not_test(): Not_testContext | undefined {
    return this.tryGetRuleContext(0, Not_testContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_not_test;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitNot_test) {
      return visitor.visitNot_test(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ComparisonContext extends ParserRuleContext {
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  public comparison(): ComparisonContext | undefined {
    return this.tryGetRuleContext(0, ComparisonContext);
  }
  public comp_op(): Comp_opContext | undefined {
    return this.tryGetRuleContext(0, Comp_opContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_comparison;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitComparison) {
      return visitor.visitComparison(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Comp_opContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_comp_op;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitComp_op) {
      return visitor.visitComp_op(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Star_exprContext extends ParserRuleContext {
  public STAR(): TerminalNode {
    return this.getToken(Python3Parser.STAR, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_star_expr;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitStar_expr) {
      return visitor.visitStar_expr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExprContext extends ParserRuleContext {
  public xor_expr(): Xor_exprContext {
    return this.getRuleContext(0, Xor_exprContext);
  }
  public expr(): ExprContext | undefined {
    return this.tryGetRuleContext(0, ExprContext);
  }
  public OR_OP(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.OR_OP, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_expr;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitExpr) {
      return visitor.visitExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Xor_exprContext extends ParserRuleContext {
  public and_expr(): And_exprContext {
    return this.getRuleContext(0, And_exprContext);
  }
  public xor_expr(): Xor_exprContext | undefined {
    return this.tryGetRuleContext(0, Xor_exprContext);
  }
  public XOR(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.XOR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_xor_expr;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitXor_expr) {
      return visitor.visitXor_expr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class And_exprContext extends ParserRuleContext {
  public shift_expr(): Shift_exprContext {
    return this.getRuleContext(0, Shift_exprContext);
  }
  public and_expr(): And_exprContext | undefined {
    return this.tryGetRuleContext(0, And_exprContext);
  }
  public AND_OP(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.AND_OP, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_and_expr;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitAnd_expr) {
      return visitor.visitAnd_expr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Shift_exprContext extends ParserRuleContext {
  public arith_expr(): Arith_exprContext {
    return this.getRuleContext(0, Arith_exprContext);
  }
  public shift_expr(): Shift_exprContext | undefined {
    return this.tryGetRuleContext(0, Shift_exprContext);
  }
  public Shifts(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.Shifts, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_shift_expr;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitShift_expr) {
      return visitor.visitShift_expr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Arith_exprContext extends ParserRuleContext {
  public term(): TermContext {
    return this.getRuleContext(0, TermContext);
  }
  public arith_expr(): Arith_exprContext | undefined {
    return this.tryGetRuleContext(0, Arith_exprContext);
  }
  public AddMinus(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.AddMinus, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_arith_expr;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitArith_expr) {
      return visitor.visitArith_expr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TermContext extends ParserRuleContext {
  public factor(): FactorContext {
    return this.getRuleContext(0, FactorContext);
  }
  public term(): TermContext | undefined {
    return this.tryGetRuleContext(0, TermContext);
  }
  public TermOp(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.TermOp, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_term;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTerm) {
      return visitor.visitTerm(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FactorContext extends ParserRuleContext {
  public power(): PowerContext | undefined {
    return this.tryGetRuleContext(0, PowerContext);
  }
  public FactorOp(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.FactorOp, 0);
  }
  public factor(): FactorContext | undefined {
    return this.tryGetRuleContext(0, FactorContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_factor;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitFactor) {
      return visitor.visitFactor(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PowerContext extends ParserRuleContext {
  public atom_expr(): Atom_exprContext {
    return this.getRuleContext(0, Atom_exprContext);
  }
  public POWER(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.POWER, 0);
  }
  public factor(): FactorContext | undefined {
    return this.tryGetRuleContext(0, FactorContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_power;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitPower) {
      return visitor.visitPower(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Atom_exprContext extends ParserRuleContext {
  public atom(): AtomContext | undefined {
    return this.tryGetRuleContext(0, AtomContext);
  }
  public method_call_of_method_return(): Method_call_of_method_returnContext | undefined {
    return this.tryGetRuleContext(0, Method_call_of_method_returnContext);
  }
  public method_call_no_arg(): Method_call_no_argContext | undefined {
    return this.tryGetRuleContext(0, Method_call_no_argContext);
  }
  public trailer(): TrailerContext | undefined {
    return this.tryGetRuleContext(0, TrailerContext);
  }
  public AWAIT(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.AWAIT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_atom_expr;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitAtom_expr) {
      return visitor.visitAtom_expr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AtomContext extends ParserRuleContext {
  public array(): ArrayContext | undefined {
    return this.tryGetRuleContext(0, ArrayContext);
  }
  public ident(): IdentContext | undefined {
    return this.tryGetRuleContext(0, IdentContext);
  }
  public number(): NumberContext | undefined {
    return this.tryGetRuleContext(0, NumberContext);
  }
  public bool(): BoolContext | undefined {
    return this.tryGetRuleContext(0, BoolContext);
  }
  public yield_expr(): Yield_exprContext | undefined {
    return this.tryGetRuleContext(0, Yield_exprContext);
  }
  public testlist_comp(): Testlist_compContext | undefined {
    return this.tryGetRuleContext(0, Testlist_compContext);
  }
  public dictorsetmaker(): DictorsetmakerContext | undefined {
    return this.tryGetRuleContext(0, DictorsetmakerContext);
  }
  public STRING(): TerminalNode[];
  public STRING(i: number): TerminalNode;
  public STRING(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(Python3Parser.STRING);
    } else {
      return this.getToken(Python3Parser.STRING, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_atom;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitAtom) {
      return visitor.visitAtom(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArrayContext extends ParserRuleContext {
  public testlist_comp(): Testlist_compContext | undefined {
    return this.tryGetRuleContext(0, Testlist_compContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_array;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitArray) {
      return visitor.visitArray(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IdentContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(Python3Parser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_ident;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitIdent) {
      return visitor.visitIdent(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BoolContext extends ParserRuleContext {
  public TRUE(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.TRUE, 0);
  }
  public FALSE(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.FALSE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_bool;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitBool) {
      return visitor.visitBool(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Testlist_compContext extends ParserRuleContext {
  public test_star_expr(): Test_star_exprContext[];
  public test_star_expr(i: number): Test_star_exprContext;
  public test_star_expr(i?: number): Test_star_exprContext | Test_star_exprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Test_star_exprContext);
    } else {
      return this.getRuleContext(i, Test_star_exprContext);
    }
  }
  public comp_for(): Comp_forContext | undefined {
    return this.tryGetRuleContext(0, Comp_forContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_testlist_comp;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTestlist_comp) {
      return visitor.visitTestlist_comp(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TrailerContext extends ParserRuleContext {
  public method_call(): Method_callContext[];
  public method_call(i: number): Method_callContext;
  public method_call(i?: number): Method_callContext | Method_callContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Method_callContext);
    } else {
      return this.getRuleContext(i, Method_callContext);
    }
  }
  public array_access(): Array_accessContext[];
  public array_access(i: number): Array_accessContext;
  public array_access(i?: number): Array_accessContext | Array_accessContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Array_accessContext);
    } else {
      return this.getRuleContext(i, Array_accessContext);
    }
  }
  public field_access(): Field_accessContext[];
  public field_access(i: number): Field_accessContext;
  public field_access(i?: number): Field_accessContext | Field_accessContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Field_accessContext);
    } else {
      return this.getRuleContext(i, Field_accessContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_trailer;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTrailer) {
      return visitor.visitTrailer(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Method_call_of_method_returnContext extends ParserRuleContext {
  public method_call_no_arg(): Method_call_no_argContext[];
  public method_call_no_arg(i: number): Method_call_no_argContext;
  public method_call_no_arg(i?: number): Method_call_no_argContext | Method_call_no_argContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Method_call_no_argContext);
    } else {
      return this.getRuleContext(i, Method_call_no_argContext);
    }
  }
  public DOT(): TerminalNode {
    return this.getToken(Python3Parser.DOT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_method_call_of_method_return;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitMethod_call_of_method_return) {
      return visitor.visitMethod_call_of_method_return(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Method_call_no_argContext extends ParserRuleContext {
  public atom(): AtomContext {
    return this.getRuleContext(0, AtomContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_method_call_no_arg;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitMethod_call_no_arg) {
      return visitor.visitMethod_call_no_arg(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Method_callContext extends ParserRuleContext {
  public arglist(): ArglistContext | undefined {
    return this.tryGetRuleContext(0, ArglistContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_method_call;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitMethod_call) {
      return visitor.visitMethod_call(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Array_accessContext extends ParserRuleContext {
  public OPEN_BRACK(): TerminalNode {
    return this.getToken(Python3Parser.OPEN_BRACK, 0);
  }
  public subscriptlist(): SubscriptlistContext {
    return this.getRuleContext(0, SubscriptlistContext);
  }
  public CLOSE_BRACK(): TerminalNode {
    return this.getToken(Python3Parser.CLOSE_BRACK, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_array_access;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitArray_access) {
      return visitor.visitArray_access(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Field_accessContext extends ParserRuleContext {
  public DOT(): TerminalNode {
    return this.getToken(Python3Parser.DOT, 0);
  }
  public atom_expr(): Atom_exprContext {
    return this.getRuleContext(0, Atom_exprContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_field_access;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitField_access) {
      return visitor.visitField_access(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SubscriptlistContext extends ParserRuleContext {
  public subscript(): SubscriptContext[];
  public subscript(i: number): SubscriptContext;
  public subscript(i?: number): SubscriptContext | SubscriptContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubscriptContext);
    } else {
      return this.getRuleContext(i, SubscriptContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_subscriptlist;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitSubscriptlist) {
      return visitor.visitSubscriptlist(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SubscriptContext extends ParserRuleContext {
  public test(): TestContext[];
  public test(i: number): TestContext;
  public test(i?: number): TestContext | TestContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TestContext);
    } else {
      return this.getRuleContext(i, TestContext);
    }
  }
  public sliceop(): SliceopContext | undefined {
    return this.tryGetRuleContext(0, SliceopContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_subscript;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitSubscript) {
      return visitor.visitSubscript(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SliceopContext extends ParserRuleContext {
  public test(): TestContext | undefined {
    return this.tryGetRuleContext(0, TestContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_sliceop;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitSliceop) {
      return visitor.visitSliceop(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExprlistContext extends ParserRuleContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public star_expr(): Star_exprContext[];
  public star_expr(i: number): Star_exprContext;
  public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Star_exprContext);
    } else {
      return this.getRuleContext(i, Star_exprContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_exprlist;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitExprlist) {
      return visitor.visitExprlist(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Testlist_arrayContext extends ParserRuleContext {
  public test(): TestContext[];
  public test(i: number): TestContext;
  public test(i?: number): TestContext | TestContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TestContext);
    } else {
      return this.getRuleContext(i, TestContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_testlist_array;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTestlist_array) {
      return visitor.visitTestlist_array(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TestlistContext extends ParserRuleContext {
  public test(): TestContext | undefined {
    return this.tryGetRuleContext(0, TestContext);
  }
  public testlist_array(): Testlist_arrayContext | undefined {
    return this.tryGetRuleContext(0, Testlist_arrayContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_testlist;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitTestlist) {
      return visitor.visitTestlist(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class DictorsetmakerContext extends ParserRuleContext {
  public test(): TestContext[];
  public test(i: number): TestContext;
  public test(i?: number): TestContext | TestContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TestContext);
    } else {
      return this.getRuleContext(i, TestContext);
    }
  }
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public comp_for(): Comp_forContext | undefined {
    return this.tryGetRuleContext(0, Comp_forContext);
  }
  public star_expr(): Star_exprContext[];
  public star_expr(i: number): Star_exprContext;
  public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Star_exprContext);
    } else {
      return this.getRuleContext(i, Star_exprContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_dictorsetmaker;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitDictorsetmaker) {
      return visitor.visitDictorsetmaker(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ClassdefContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(Python3Parser.NAME, 0);
  }
  public suite(): SuiteContext {
    return this.getRuleContext(0, SuiteContext);
  }
  public arglist(): ArglistContext | undefined {
    return this.tryGetRuleContext(0, ArglistContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_classdef;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitClassdef) {
      return visitor.visitClassdef(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArglistContext extends ParserRuleContext {
  public argument(): ArgumentContext[];
  public argument(i: number): ArgumentContext;
  public argument(i?: number): ArgumentContext | ArgumentContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ArgumentContext);
    } else {
      return this.getRuleContext(i, ArgumentContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_arglist;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitArglist) {
      return visitor.visitArglist(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArgumentContext extends ParserRuleContext {
  public test(): TestContext[];
  public test(i: number): TestContext;
  public test(i?: number): TestContext | TestContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TestContext);
    } else {
      return this.getRuleContext(i, TestContext);
    }
  }
  public comp_for(): Comp_forContext | undefined {
    return this.tryGetRuleContext(0, Comp_forContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_argument;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitArgument) {
      return visitor.visitArgument(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Comp_iterContext extends ParserRuleContext {
  public comp_for(): Comp_forContext | undefined {
    return this.tryGetRuleContext(0, Comp_forContext);
  }
  public comp_if(): Comp_ifContext | undefined {
    return this.tryGetRuleContext(0, Comp_ifContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_comp_iter;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitComp_iter) {
      return visitor.visitComp_iter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Comp_forContext extends ParserRuleContext {
  public exprlist(): ExprlistContext {
    return this.getRuleContext(0, ExprlistContext);
  }
  public or_test(): Or_testContext {
    return this.getRuleContext(0, Or_testContext);
  }
  public ASYNC(): TerminalNode | undefined {
    return this.tryGetToken(Python3Parser.ASYNC, 0);
  }
  public comp_iter(): Comp_iterContext | undefined {
    return this.tryGetRuleContext(0, Comp_iterContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_comp_for;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitComp_for) {
      return visitor.visitComp_for(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Comp_ifContext extends ParserRuleContext {
  public test_nocond(): Test_nocondContext {
    return this.getRuleContext(0, Test_nocondContext);
  }
  public comp_iter(): Comp_iterContext | undefined {
    return this.tryGetRuleContext(0, Comp_iterContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_comp_if;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitComp_if) {
      return visitor.visitComp_if(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Encoding_declContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(Python3Parser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_encoding_decl;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitEncoding_decl) {
      return visitor.visitEncoding_decl(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Yield_exprContext extends ParserRuleContext {
  public yield_arg(): Yield_argContext | undefined {
    return this.tryGetRuleContext(0, Yield_argContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_yield_expr;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitYield_expr) {
      return visitor.visitYield_expr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Yield_argContext extends ParserRuleContext {
  public test(): TestContext | undefined {
    return this.tryGetRuleContext(0, TestContext);
  }
  public testlist(): TestlistContext | undefined {
    return this.tryGetRuleContext(0, TestlistContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_yield_arg;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitYield_arg) {
      return visitor.visitYield_arg(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class NumberContext extends ParserRuleContext {
  public integer(): IntegerContext | undefined {
    return this.tryGetRuleContext(0, IntegerContext);
  }
  public float(): FloatContext | undefined {
    return this.tryGetRuleContext(0, FloatContext);
  }
  public imaginary(): ImaginaryContext | undefined {
    return this.tryGetRuleContext(0, ImaginaryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_number;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitNumber) {
      return visitor.visitNumber(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IntegerContext extends ParserRuleContext {
  public INTEGER(): TerminalNode {
    return this.getToken(Python3Parser.INTEGER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_integer;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitInteger) {
      return visitor.visitInteger(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FloatContext extends ParserRuleContext {
  public FLOAT_NUMBER(): TerminalNode {
    return this.getToken(Python3Parser.FLOAT_NUMBER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_float;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitFloat) {
      return visitor.visitFloat(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ImaginaryContext extends ParserRuleContext {
  public IMAG_NUMBER(): TerminalNode {
    return this.getToken(Python3Parser.IMAG_NUMBER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Python3Parser.RULE_imaginary;
  }
  // @Override
  public accept<Result>(visitor: Python3Visitor<Result>): Result {
    if (visitor.visitImaginary) {
      return visitor.visitImaginary(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
