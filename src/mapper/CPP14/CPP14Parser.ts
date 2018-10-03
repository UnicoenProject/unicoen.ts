// Generated from C:\Users\RYOSUKE\eclipse\java-oxygen\eclipse\..\..\..\..\..\develop\UniMapperGeneratorForTS\net.unicoen\..\UniMapperGenerator\src-gen\CPP14.g4 by ANTLR 4.6-SNAPSHOT


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
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { CPP14Visitor } from './CPP14Visitor';


export class CPP14Parser extends Parser {
	public static readonly Directive=1;
	public static readonly Alignas=2;
	public static readonly Alignof=3;
	public static readonly Asm=4;
	public static readonly Auto=5;
	public static readonly Bool=6;
	public static readonly Break=7;
	public static readonly Case=8;
	public static readonly Catch=9;
	public static readonly Char=10;
	public static readonly Char16=11;
	public static readonly Char32=12;
	public static readonly Class=13;
	public static readonly Const=14;
	public static readonly Constexpr=15;
	public static readonly Const_cast=16;
	public static readonly Continue=17;
	public static readonly Decltype=18;
	public static readonly Default=19;
	public static readonly Delete=20;
	public static readonly Do=21;
	public static readonly Double=22;
	public static readonly File=23;
	public static readonly Dynamic_cast=24;
	public static readonly Else=25;
	public static readonly Enum=26;
	public static readonly Explicit=27;
	public static readonly Export=28;
	public static readonly Extern=29;
	public static readonly False=30;
	public static readonly Final=31;
	public static readonly Float=32;
	public static readonly For=33;
	public static readonly Friend=34;
	public static readonly Goto=35;
	public static readonly If=36;
	public static readonly Inline=37;
	public static readonly Int=38;
	public static readonly Long=39;
	public static readonly Mutable=40;
	public static readonly Namespace=41;
	public static readonly New=42;
	public static readonly Noexcept=43;
	public static readonly Nullptr=44;
	public static readonly Operator=45;
	public static readonly Override=46;
	public static readonly Private=47;
	public static readonly Protected=48;
	public static readonly Public=49;
	public static readonly Register=50;
	public static readonly Reinterpret_cast=51;
	public static readonly Return=52;
	public static readonly Short=53;
	public static readonly Signed=54;
	public static readonly Sizeof=55;
	public static readonly Static=56;
	public static readonly Static_assert=57;
	public static readonly Static_cast=58;
	public static readonly Struct=59;
	public static readonly Switch=60;
	public static readonly Template=61;
	public static readonly This=62;
	public static readonly Thread_local=63;
	public static readonly Throw=64;
	public static readonly True=65;
	public static readonly Try=66;
	public static readonly Typedef=67;
	public static readonly Typeid=68;
	public static readonly Typename=69;
	public static readonly Union=70;
	public static readonly Unsigned=71;
	public static readonly Using=72;
	public static readonly Virtual=73;
	public static readonly Void=74;
	public static readonly Volatile=75;
	public static readonly Wchar=76;
	public static readonly While=77;
	public static readonly LeftParen=78;
	public static readonly RightParen=79;
	public static readonly LeftBracket=80;
	public static readonly RightBracket=81;
	public static readonly LeftBrace=82;
	public static readonly RightBrace=83;
	public static readonly Plus=84;
	public static readonly Minus=85;
	public static readonly Star=86;
	public static readonly Div=87;
	public static readonly Mod=88;
	public static readonly Caret=89;
	public static readonly And=90;
	public static readonly Or=91;
	public static readonly Tilde=92;
	public static readonly Not=93;
	public static readonly Assign=94;
	public static readonly Less=95;
	public static readonly Greater=96;
	public static readonly PlusAssign=97;
	public static readonly MinusAssign=98;
	public static readonly StarAssign=99;
	public static readonly DivAssign=100;
	public static readonly ModAssign=101;
	public static readonly XorAssign=102;
	public static readonly AndAssign=103;
	public static readonly OrAssign=104;
	public static readonly LeftShift=105;
	public static readonly LeftShiftAssign=106;
	public static readonly Equal=107;
	public static readonly NotEqual=108;
	public static readonly LessEqual=109;
	public static readonly GreaterEqual=110;
	public static readonly AndAnd=111;
	public static readonly OrOr=112;
	public static readonly PlusPlus=113;
	public static readonly MinusMinus=114;
	public static readonly Comma=115;
	public static readonly ArrowStar=116;
	public static readonly Arrow=117;
	public static readonly Question=118;
	public static readonly Colon=119;
	public static readonly Doublecolon=120;
	public static readonly Semi=121;
	public static readonly Dot=122;
	public static readonly DotStar=123;
	public static readonly Ellipsis=124;
	public static readonly Identifier=125;
	public static readonly Integerliteral=126;
	public static readonly Decimalliteral=127;
	public static readonly Octalliteral=128;
	public static readonly Hexadecimalliteral=129;
	public static readonly Binaryliteral=130;
	public static readonly Integersuffix=131;
	public static readonly Characterliteral=132;
	public static readonly Floatingliteral=133;
	public static readonly Stringliteral=134;
	public static readonly Booleanliteral=135;
	public static readonly Userdefinedintegerliteral=136;
	public static readonly Userdefinedfloatingliteral=137;
	public static readonly Userdefinedstringliteral=138;
	public static readonly Userdefinedcharacterliteral=139;
	public static readonly Whitespace=140;
	public static readonly Newline=141;
	public static readonly BlockComment=142;
	public static readonly LineComment=143;
	public static readonly RULE_translationunit = 0;
	public static readonly RULE_primaryexpression = 1;
	public static readonly RULE_idexpression = 2;
	public static readonly RULE_identexpression = 3;
	public static readonly RULE_unqualifiedid = 4;
	public static readonly RULE_qualifiedid = 5;
	public static readonly RULE_nestednamespecifier = 6;
	public static readonly RULE_lambdaexpression = 7;
	public static readonly RULE_lambdaintroducer = 8;
	public static readonly RULE_lambdacapture = 9;
	public static readonly RULE_capturedefault = 10;
	public static readonly RULE_capturelist = 11;
	public static readonly RULE_capture = 12;
	public static readonly RULE_simplecapture = 13;
	public static readonly RULE_initcapture = 14;
	public static readonly RULE_lambdadeclarator = 15;
	public static readonly RULE_idexpressionlapper = 16;
	public static readonly RULE_functioncallexpression = 17;
	public static readonly RULE_postfixexpression = 18;
	public static readonly RULE_expressionlist = 19;
	public static readonly RULE_pseudodestructorname = 20;
	public static readonly RULE_binaryexpression = 21;
	public static readonly RULE_unaryexpression = 22;
	public static readonly RULE_typeidlapper = 23;
	public static readonly RULE_unaryoperator = 24;
	public static readonly RULE_newexpression = 25;
	public static readonly RULE_newplacement = 26;
	public static readonly RULE_newtypeid = 27;
	public static readonly RULE_newdeclarator = 28;
	public static readonly RULE_noptrnewdeclarator = 29;
	public static readonly RULE_newinitializer = 30;
	public static readonly RULE_deleteexpression = 31;
	public static readonly RULE_noexceptexpression = 32;
	public static readonly RULE_castexpression = 33;
	public static readonly RULE_pmexpression = 34;
	public static readonly RULE_multiplicativeexpression = 35;
	public static readonly RULE_additiveexpression = 36;
	public static readonly RULE_shiftexpression = 37;
	public static readonly RULE_relationalexpression = 38;
	public static readonly RULE_equalityexpression = 39;
	public static readonly RULE_andexpression = 40;
	public static readonly RULE_exclusiveorexpression = 41;
	public static readonly RULE_inclusiveorexpression = 42;
	public static readonly RULE_logicalandexpression = 43;
	public static readonly RULE_logicalorexpression = 44;
	public static readonly RULE_conditionalexpression = 45;
	public static readonly RULE_assignmentexpression = 46;
	public static readonly RULE_assignmentoperator = 47;
	public static readonly RULE_expression = 48;
	public static readonly RULE_constantexpression = 49;
	public static readonly RULE_statement = 50;
	public static readonly RULE_statementWithoutLabeldstatement = 51;
	public static readonly RULE_labeledstatement = 52;
	public static readonly RULE_switchunitstatement = 53;
	public static readonly RULE_statementWithoutLabeldstatementseq = 54;
	public static readonly RULE_expressionstatement = 55;
	public static readonly RULE_compoundstatement = 56;
	public static readonly RULE_statementseq = 57;
	public static readonly RULE_selectionstatement = 58;
	public static readonly RULE_switchstatement = 59;
	public static readonly RULE_switchunitseq = 60;
	public static readonly RULE_condition = 61;
	public static readonly RULE_whilestatement = 62;
	public static readonly RULE_dowhilestatement = 63;
	public static readonly RULE_iterationstatement = 64;
	public static readonly RULE_enhancedForStatement = 65;
	public static readonly RULE_forinitstatement = 66;
	public static readonly RULE_forrangedeclaration = 67;
	public static readonly RULE_forrangeinitializer = 68;
	public static readonly RULE_jumpstatement = 69;
	public static readonly RULE_breakStatement = 70;
	public static readonly RULE_continueStatement = 71;
	public static readonly RULE_returnStatement = 72;
	public static readonly RULE_declarationstatement = 73;
	public static readonly RULE_declarationseq = 74;
	public static readonly RULE_myclassbody = 75;
	public static readonly RULE_myclassspecifier = 76;
	public static readonly RULE_myclasshead = 77;
	public static readonly RULE_declaration = 78;
	public static readonly RULE_blockdeclarationwithoutsimpledeclaration = 79;
	public static readonly RULE_blockdeclaration = 80;
	public static readonly RULE_aliasdeclaration = 81;
	public static readonly RULE_variabledeclarationstatement = 82;
	public static readonly RULE_variabledeclaration = 83;
	public static readonly RULE_variableDeclaratorList = 84;
	public static readonly RULE_variableDeclarator = 85;
	public static readonly RULE_dims = 86;
	public static readonly RULE_functiondeclarationstatement = 87;
	public static readonly RULE_simpledeclaration = 88;
	public static readonly RULE_static_assertdeclaration = 89;
	public static readonly RULE_emptydeclaration = 90;
	public static readonly RULE_attributedeclaration = 91;
	public static readonly RULE_declspecifier = 92;
	public static readonly RULE_declspecifierseq = 93;
	public static readonly RULE_declspecifierwithouttype = 94;
	public static readonly RULE_declspecifierseqwithouttype = 95;
	public static readonly RULE_storageclassspecifier = 96;
	public static readonly RULE_functionspecifier = 97;
	public static readonly RULE_typedefname = 98;
	public static readonly RULE_typespecifier = 99;
	public static readonly RULE_trailingtypespecifier = 100;
	public static readonly RULE_typespecifierseq = 101;
	public static readonly RULE_trailingtypespecifierseq = 102;
	public static readonly RULE_simpletypespecifier = 103;
	public static readonly RULE_typename = 104;
	public static readonly RULE_decltypespecifier = 105;
	public static readonly RULE_elaboratedtypespecifier = 106;
	public static readonly RULE_enumname = 107;
	public static readonly RULE_enumspecifier = 108;
	public static readonly RULE_enumhead = 109;
	public static readonly RULE_opaqueenumdeclaration = 110;
	public static readonly RULE_enumkey = 111;
	public static readonly RULE_enumbase = 112;
	public static readonly RULE_enumeratorlist = 113;
	public static readonly RULE_enumeratordefinition = 114;
	public static readonly RULE_enumerator = 115;
	public static readonly RULE_namespacename = 116;
	public static readonly RULE_originalnamespacename = 117;
	public static readonly RULE_namespacedefinition = 118;
	public static readonly RULE_namednamespacedefinition = 119;
	public static readonly RULE_originalnamespacedefinition = 120;
	public static readonly RULE_extensionnamespacedefinition = 121;
	public static readonly RULE_unnamednamespacedefinition = 122;
	public static readonly RULE_namespacebody = 123;
	public static readonly RULE_namespacealias = 124;
	public static readonly RULE_namespacealiasdefinition = 125;
	public static readonly RULE_qualifiednamespacespecifier = 126;
	public static readonly RULE_usingdeclaration = 127;
	public static readonly RULE_usingdirective = 128;
	public static readonly RULE_asmdefinition = 129;
	public static readonly RULE_linkagespecification = 130;
	public static readonly RULE_attributespecifierseq = 131;
	public static readonly RULE_attributespecifier = 132;
	public static readonly RULE_alignmentspecifier = 133;
	public static readonly RULE_attributelist = 134;
	public static readonly RULE_attribute = 135;
	public static readonly RULE_attributetoken = 136;
	public static readonly RULE_attributescopedtoken = 137;
	public static readonly RULE_attributenamespace = 138;
	public static readonly RULE_attributeargumentclause = 139;
	public static readonly RULE_balancedtokenseq = 140;
	public static readonly RULE_balancedtoken = 141;
	public static readonly RULE_initdeclaratorlist = 142;
	public static readonly RULE_initdeclarator = 143;
	public static readonly RULE_declarator = 144;
	public static readonly RULE_ptrdeclarator = 145;
	public static readonly RULE_noptrdeclarator = 146;
	public static readonly RULE_parametersandqualifiers = 147;
	public static readonly RULE_trailingreturntype = 148;
	public static readonly RULE_ptroperator = 149;
	public static readonly RULE_cvqualifierseq = 150;
	public static readonly RULE_cvqualifier = 151;
	public static readonly RULE_refqualifier = 152;
	public static readonly RULE_declaratorid = 153;
	public static readonly RULE_typeid = 154;
	public static readonly RULE_abstractdeclarator = 155;
	public static readonly RULE_ptrabstractdeclarator = 156;
	public static readonly RULE_noptrabstractdeclarator = 157;
	public static readonly RULE_abstractpackdeclarator = 158;
	public static readonly RULE_noptrabstractpackdeclarator = 159;
	public static readonly RULE_parameterdeclarationclause = 160;
	public static readonly RULE_parameterdeclarationlist = 161;
	public static readonly RULE_parameterdeclaration = 162;
	public static readonly RULE_functiondefinition = 163;
	public static readonly RULE_functionheader = 164;
	public static readonly RULE_functiondeclarator = 165;
	public static readonly RULE_functionbody = 166;
	public static readonly RULE_initializer = 167;
	public static readonly RULE_braceorequalinitializer = 168;
	public static readonly RULE_initializerclause = 169;
	public static readonly RULE_initializerlist = 170;
	public static readonly RULE_bracedinitlist = 171;
	public static readonly RULE_myclassname = 172;
	public static readonly RULE_classspecifier = 173;
	public static readonly RULE_classbody = 174;
	public static readonly RULE_classhead = 175;
	public static readonly RULE_classheadname = 176;
	public static readonly RULE_classvirtspecifier = 177;
	public static readonly RULE_classkey = 178;
	public static readonly RULE_memberspecification = 179;
	public static readonly RULE_memberdeclaration = 180;
	public static readonly RULE_membervariabledeclarationstatement = 181;
	public static readonly RULE_membervariabledeclaration = 182;
	public static readonly RULE_memberdeclaratorlist = 183;
	public static readonly RULE_memberdeclarator = 184;
	public static readonly RULE_virtspecifierseq = 185;
	public static readonly RULE_virtspecifier = 186;
	public static readonly RULE_purespecifier = 187;
	public static readonly RULE_baseclause = 188;
	public static readonly RULE_basespecifierlist = 189;
	public static readonly RULE_basespecifier = 190;
	public static readonly RULE_classordecltype = 191;
	public static readonly RULE_basetypespecifier = 192;
	public static readonly RULE_accessspecifier = 193;
	public static readonly RULE_conversionfunctionid = 194;
	public static readonly RULE_conversiontypeid = 195;
	public static readonly RULE_conversiondeclarator = 196;
	public static readonly RULE_ctorinitializer = 197;
	public static readonly RULE_meminitializerlist = 198;
	public static readonly RULE_meminitializer = 199;
	public static readonly RULE_meminitializerid = 200;
	public static readonly RULE_operatorfunctionid = 201;
	public static readonly RULE_literaloperatorid = 202;
	public static readonly RULE_templatedeclaration = 203;
	public static readonly RULE_templateparameterlist = 204;
	public static readonly RULE_templateparameter = 205;
	public static readonly RULE_typeparameter = 206;
	public static readonly RULE_simpletemplateid = 207;
	public static readonly RULE_templateid = 208;
	public static readonly RULE_templatename = 209;
	public static readonly RULE_templateargumentlist = 210;
	public static readonly RULE_templateargument = 211;
	public static readonly RULE_typenamespecifier = 212;
	public static readonly RULE_explicitinstantiation = 213;
	public static readonly RULE_explicitspecialization = 214;
	public static readonly RULE_tryblock = 215;
	public static readonly RULE_functiontryblock = 216;
	public static readonly RULE_handlerseq = 217;
	public static readonly RULE_handler = 218;
	public static readonly RULE_exceptiondeclaration = 219;
	public static readonly RULE_throwexpression = 220;
	public static readonly RULE_exceptionspecification = 221;
	public static readonly RULE_dynamicexceptionspecification = 222;
	public static readonly RULE_typeidlist = 223;
	public static readonly RULE_noexceptspecification = 224;
	public static readonly RULE_rightShift = 225;
	public static readonly RULE_rightShiftAssign = 226;
	public static readonly RULE_operator = 227;
	public static readonly RULE_literal = 228;
	public static readonly RULE_integerliteral = 229;
	public static readonly RULE_characterliteral = 230;
	public static readonly RULE_floatingliteral = 231;
	public static readonly RULE_stringliteral = 232;
	public static readonly RULE_booleanliteral = 233;
	public static readonly RULE_pointerliteral = 234;
	public static readonly RULE_userdefinedliteral = 235;
	public static readonly ruleNames: string[] = [
		"translationunit", "primaryexpression", "idexpression", "identexpression", 
		"unqualifiedid", "qualifiedid", "nestednamespecifier", "lambdaexpression", 
		"lambdaintroducer", "lambdacapture", "capturedefault", "capturelist", 
		"capture", "simplecapture", "initcapture", "lambdadeclarator", "idexpressionlapper", 
		"functioncallexpression", "postfixexpression", "expressionlist", "pseudodestructorname", 
		"binaryexpression", "unaryexpression", "typeidlapper", "unaryoperator", 
		"newexpression", "newplacement", "newtypeid", "newdeclarator", "noptrnewdeclarator", 
		"newinitializer", "deleteexpression", "noexceptexpression", "castexpression", 
		"pmexpression", "multiplicativeexpression", "additiveexpression", "shiftexpression", 
		"relationalexpression", "equalityexpression", "andexpression", "exclusiveorexpression", 
		"inclusiveorexpression", "logicalandexpression", "logicalorexpression", 
		"conditionalexpression", "assignmentexpression", "assignmentoperator", 
		"expression", "constantexpression", "statement", "statementWithoutLabeldstatement", 
		"labeledstatement", "switchunitstatement", "statementWithoutLabeldstatementseq", 
		"expressionstatement", "compoundstatement", "statementseq", "selectionstatement", 
		"switchstatement", "switchunitseq", "condition", "whilestatement", "dowhilestatement", 
		"iterationstatement", "enhancedForStatement", "forinitstatement", "forrangedeclaration", 
		"forrangeinitializer", "jumpstatement", "breakStatement", "continueStatement", 
		"returnStatement", "declarationstatement", "declarationseq", "myclassbody", 
		"myclassspecifier", "myclasshead", "declaration", "blockdeclarationwithoutsimpledeclaration", 
		"blockdeclaration", "aliasdeclaration", "variabledeclarationstatement", 
		"variabledeclaration", "variableDeclaratorList", "variableDeclarator", 
		"dims", "functiondeclarationstatement", "simpledeclaration", "static_assertdeclaration", 
		"emptydeclaration", "attributedeclaration", "declspecifier", "declspecifierseq", 
		"declspecifierwithouttype", "declspecifierseqwithouttype", "storageclassspecifier", 
		"functionspecifier", "typedefname", "typespecifier", "trailingtypespecifier", 
		"typespecifierseq", "trailingtypespecifierseq", "simpletypespecifier", 
		"typename", "decltypespecifier", "elaboratedtypespecifier", "enumname", 
		"enumspecifier", "enumhead", "opaqueenumdeclaration", "enumkey", "enumbase", 
		"enumeratorlist", "enumeratordefinition", "enumerator", "namespacename", 
		"originalnamespacename", "namespacedefinition", "namednamespacedefinition", 
		"originalnamespacedefinition", "extensionnamespacedefinition", "unnamednamespacedefinition", 
		"namespacebody", "namespacealias", "namespacealiasdefinition", "qualifiednamespacespecifier", 
		"usingdeclaration", "usingdirective", "asmdefinition", "linkagespecification", 
		"attributespecifierseq", "attributespecifier", "alignmentspecifier", "attributelist", 
		"attribute", "attributetoken", "attributescopedtoken", "attributenamespace", 
		"attributeargumentclause", "balancedtokenseq", "balancedtoken", "initdeclaratorlist", 
		"initdeclarator", "declarator", "ptrdeclarator", "noptrdeclarator", "parametersandqualifiers", 
		"trailingreturntype", "ptroperator", "cvqualifierseq", "cvqualifier", 
		"refqualifier", "declaratorid", "typeid", "abstractdeclarator", "ptrabstractdeclarator", 
		"noptrabstractdeclarator", "abstractpackdeclarator", "noptrabstractpackdeclarator", 
		"parameterdeclarationclause", "parameterdeclarationlist", "parameterdeclaration", 
		"functiondefinition", "functionheader", "functiondeclarator", "functionbody", 
		"initializer", "braceorequalinitializer", "initializerclause", "initializerlist", 
		"bracedinitlist", "myclassname", "classspecifier", "classbody", "classhead", 
		"classheadname", "classvirtspecifier", "classkey", "memberspecification", 
		"memberdeclaration", "membervariabledeclarationstatement", "membervariabledeclaration", 
		"memberdeclaratorlist", "memberdeclarator", "virtspecifierseq", "virtspecifier", 
		"purespecifier", "baseclause", "basespecifierlist", "basespecifier", "classordecltype", 
		"basetypespecifier", "accessspecifier", "conversionfunctionid", "conversiontypeid", 
		"conversiondeclarator", "ctorinitializer", "meminitializerlist", "meminitializer", 
		"meminitializerid", "operatorfunctionid", "literaloperatorid", "templatedeclaration", 
		"templateparameterlist", "templateparameter", "typeparameter", "simpletemplateid", 
		"templateid", "templatename", "templateargumentlist", "templateargument", 
		"typenamespecifier", "explicitinstantiation", "explicitspecialization", 
		"tryblock", "functiontryblock", "handlerseq", "handler", "exceptiondeclaration", 
		"throwexpression", "exceptionspecification", "dynamicexceptionspecification", 
		"typeidlist", "noexceptspecification", "rightShift", "rightShiftAssign", 
		"operator", "literal", "integerliteral", "characterliteral", "floatingliteral", 
		"stringliteral", "booleanliteral", "pointerliteral", "userdefinedliteral"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, "'alignas'", "'alignof'", "'asm'", "'auto'", "'bool'", 
		"'break'", "'case'", "'catch'", "'char'", "'char16_t'", "'char32_t'", 
		"'class'", "'const'", "'constexpr'", "'const_cast'", "'continue'", "'decltype'", 
		"'default'", "'delete'", "'do'", "'double'", "'FILE'", "'dynamic_cast'", 
		"'else'", "'enum'", "'explicit'", "'export'", "'extern'", "'false'", "'final'", 
		"'float'", "'for'", "'friend'", "'goto'", "'if'", "'inline'", "'int'", 
		"'long'", "'mutable'", "'namespace'", "'new'", "'noexcept'", "'nullptr'", 
		"'operator'", "'override'", "'private'", "'protected'", "'public'", "'register'", 
		"'reinterpret_cast'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
		"'static_assert'", "'static_cast'", "'struct'", "'switch'", "'template'", 
		"'this'", "'thread_local'", "'throw'", "'true'", "'try'", "'typedef'", 
		"'typeid'", "'typename'", "'union'", "'unsigned'", "'using'", "'virtual'", 
		"'void'", "'volatile'", "'wchar_t'", "'while'", "'('", "')'", "'['", "']'", 
		"'{'", "'}'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'&'", "'|'", 
		"'~'", "'!'", "'='", "'<'", "'>'", "'+='", "'-='", "'*='", "'/='", "'%='", 
		"'^='", "'&='", "'|='", "'<<'", "'<<='", "'=='", "'!='", "'<='", "'>='", 
		"'&&'", "'||'", "'++'", "'--'", "','", "'->*'", "'->'", "'?'", "':'", 
		"'::'", "';'", "'.'", "'.*'", "'...'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "Directive", "Alignas", "Alignof", "Asm", "Auto", "Bool", "Break", 
		"Case", "Catch", "Char", "Char16", "Char32", "Class", "Const", "Constexpr", 
		"Const_cast", "Continue", "Decltype", "Default", "Delete", "Do", "Double", 
		"File", "Dynamic_cast", "Else", "Enum", "Explicit", "Export", "Extern", 
		"False", "Final", "Float", "For", "Friend", "Goto", "If", "Inline", "Int", 
		"Long", "Mutable", "Namespace", "New", "Noexcept", "Nullptr", "Operator", 
		"Override", "Private", "Protected", "Public", "Register", "Reinterpret_cast", 
		"Return", "Short", "Signed", "Sizeof", "Static", "Static_assert", "Static_cast", 
		"Struct", "Switch", "Template", "This", "Thread_local", "Throw", "True", 
		"Try", "Typedef", "Typeid", "Typename", "Union", "Unsigned", "Using", 
		"Virtual", "Void", "Volatile", "Wchar", "While", "LeftParen", "RightParen", 
		"LeftBracket", "RightBracket", "LeftBrace", "RightBrace", "Plus", "Minus", 
		"Star", "Div", "Mod", "Caret", "And", "Or", "Tilde", "Not", "Assign", 
		"Less", "Greater", "PlusAssign", "MinusAssign", "StarAssign", "DivAssign", 
		"ModAssign", "XorAssign", "AndAssign", "OrAssign", "LeftShift", "LeftShiftAssign", 
		"Equal", "NotEqual", "LessEqual", "GreaterEqual", "AndAnd", "OrOr", "PlusPlus", 
		"MinusMinus", "Comma", "ArrowStar", "Arrow", "Question", "Colon", "Doublecolon", 
		"Semi", "Dot", "DotStar", "Ellipsis", "Identifier", "Integerliteral", 
		"Decimalliteral", "Octalliteral", "Hexadecimalliteral", "Binaryliteral", 
		"Integersuffix", "Characterliteral", "Floatingliteral", "Stringliteral", 
		"Booleanliteral", "Userdefinedintegerliteral", "Userdefinedfloatingliteral", 
		"Userdefinedstringliteral", "Userdefinedcharacterliteral", "Whitespace", 
		"Newline", "BlockComment", "LineComment"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CPP14Parser._LITERAL_NAMES, CPP14Parser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return CPP14Parser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "CPP14.g4"; }

	@Override
	public get ruleNames(): string[] { return CPP14Parser.ruleNames; }

	@Override
	public get serializedATN(): string { return CPP14Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CPP14Parser._ATN, this);
	}
	@RuleVersion(0)
	public translationunit(): TranslationunitContext {
		let _localctx: TranslationunitContext = new TranslationunitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CPP14Parser.RULE_translationunit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
				{
				this.state = 472;
				this.declarationseq(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primaryexpression(): PrimaryexpressionContext {
		let _localctx: PrimaryexpressionContext = new PrimaryexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CPP14Parser.RULE_primaryexpression);
		try {
			this.state = 483;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Nullptr:
			case CPP14Parser.Integerliteral:
			case CPP14Parser.Characterliteral:
			case CPP14Parser.Floatingliteral:
			case CPP14Parser.Stringliteral:
			case CPP14Parser.Booleanliteral:
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 475;
				this.literal();
				}
				break;
			case CPP14Parser.This:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 476;
				this.match(CPP14Parser.This);
				}
				break;
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 477;
				this.match(CPP14Parser.LeftParen);
				this.state = 478;
				this.expression(0);
				this.state = 479;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Operator:
			case CPP14Parser.Tilde:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 481;
				this.identexpression();
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 482;
				this.lambdaexpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public idexpression(): IdexpressionContext {
		let _localctx: IdexpressionContext = new IdexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CPP14Parser.RULE_idexpression);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,2,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 485;
				this.unqualifiedid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 486;
				this.qualifiedid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public identexpression(): IdentexpressionContext {
		let _localctx: IdentexpressionContext = new IdentexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CPP14Parser.RULE_identexpression);
		try {
			this.state = 491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,3,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 489;
				this.unqualifiedid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 490;
				this.qualifiedid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unqualifiedid(): UnqualifiedidContext {
		let _localctx: UnqualifiedidContext = new UnqualifiedidContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CPP14Parser.RULE_unqualifiedid);
		try {
			this.state = 502;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 493;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 494;
				this.operatorfunctionid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 495;
				this.conversionfunctionid();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 496;
				this.literaloperatorid();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 497;
				this.match(CPP14Parser.Tilde);
				this.state = 498;
				this.myclassname();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 499;
				this.match(CPP14Parser.Tilde);
				this.state = 500;
				this.decltypespecifier();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 501;
				this.templateid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qualifiedid(): QualifiedidContext {
		let _localctx: QualifiedidContext = new QualifiedidContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CPP14Parser.RULE_qualifiedid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.nestednamespecifier(0);
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Template) {
				{
				this.state = 505;
				this.match(CPP14Parser.Template);
				}
			}

			this.state = 508;
			this.unqualifiedid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public nestednamespecifier(): NestednamespecifierContext;
	public nestednamespecifier(_p: number): NestednamespecifierContext;
	@RuleVersion(0)
	public nestednamespecifier(_p?: number): NestednamespecifierContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NestednamespecifierContext = new NestednamespecifierContext(this._ctx, _parentState);
		let _prevctx: NestednamespecifierContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, CPP14Parser.RULE_nestednamespecifier, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,6,this._ctx) ) {
			case 1:
				{
				this.state = 511;
				this.match(CPP14Parser.Doublecolon);
				}
				break;

			case 2:
				{
				this.state = 512;
				this.typename();
				this.state = 513;
				this.match(CPP14Parser.Doublecolon);
				}
				break;

			case 3:
				{
				this.state = 515;
				this.namespacename();
				this.state = 516;
				this.match(CPP14Parser.Doublecolon);
				}
				break;

			case 4:
				{
				this.state = 518;
				this.decltypespecifier();
				this.state = 519;
				this.match(CPP14Parser.Doublecolon);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 535;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,9,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 533;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
					case 1:
						{
						_localctx = new NestednamespecifierContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_nestednamespecifier);
						this.state = 523;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 524;
						this.match(CPP14Parser.Identifier);
						this.state = 525;
						this.match(CPP14Parser.Doublecolon);
						}
						break;

					case 2:
						{
						_localctx = new NestednamespecifierContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_nestednamespecifier);
						this.state = 526;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 528;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===CPP14Parser.Template) {
							{
							this.state = 527;
							this.match(CPP14Parser.Template);
							}
						}

						this.state = 530;
						this.simpletemplateid();
						this.state = 531;
						this.match(CPP14Parser.Doublecolon);
						}
						break;
					}
					} 
				}
				this.state = 537;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,9,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdaexpression(): LambdaexpressionContext {
		let _localctx: LambdaexpressionContext = new LambdaexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CPP14Parser.RULE_lambdaexpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			this.lambdaintroducer();
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.LeftParen) {
				{
				this.state = 539;
				this.lambdadeclarator();
				}
			}

			this.state = 542;
			this.compoundstatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdaintroducer(): LambdaintroducerContext {
		let _localctx: LambdaintroducerContext = new LambdaintroducerContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CPP14Parser.RULE_lambdaintroducer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this.match(CPP14Parser.LeftBracket);
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.This || _la===CPP14Parser.And || _la===CPP14Parser.Assign || _la===CPP14Parser.Identifier) {
				{
				this.state = 545;
				this.lambdacapture();
				}
			}

			this.state = 548;
			this.match(CPP14Parser.RightBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdacapture(): LambdacaptureContext {
		let _localctx: LambdacaptureContext = new LambdacaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CPP14Parser.RULE_lambdacapture);
		try {
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,12,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 550;
				this.capturedefault();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 551;
				this.capturelist(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 552;
				this.capturedefault();
				this.state = 553;
				this.match(CPP14Parser.Comma);
				this.state = 554;
				this.capturelist(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public capturedefault(): CapturedefaultContext {
		let _localctx: CapturedefaultContext = new CapturedefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CPP14Parser.RULE_capturedefault);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			_la = this._input.LA(1);
			if ( !(_la===CPP14Parser.And || _la===CPP14Parser.Assign) ) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public capturelist(): CapturelistContext;
	public capturelist(_p: number): CapturelistContext;
	@RuleVersion(0)
	public capturelist(_p?: number): CapturelistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CapturelistContext = new CapturelistContext(this._ctx, _parentState);
		let _prevctx: CapturelistContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, CPP14Parser.RULE_capturelist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 561;
			this.capture();
			this.state = 563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
			case 1:
				{
				this.state = 562;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 573;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,15,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new CapturelistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_capturelist);
					this.state = 565;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 566;
					this.match(CPP14Parser.Comma);
					this.state = 567;
					this.capture();
					this.state = 569;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,14,this._ctx) ) {
					case 1:
						{
						this.state = 568;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					} 
				}
				this.state = 575;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,15,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public capture(): CaptureContext {
		let _localctx: CaptureContext = new CaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CPP14Parser.RULE_capture);
		try {
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 576;
				this.simplecapture();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 577;
				this.initcapture();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public simplecapture(): SimplecaptureContext {
		let _localctx: SimplecaptureContext = new SimplecaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CPP14Parser.RULE_simplecapture);
		try {
			this.state = 584;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 580;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.And:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 581;
				this.match(CPP14Parser.And);
				this.state = 582;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.This:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 583;
				this.match(CPP14Parser.This);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initcapture(): InitcaptureContext {
		let _localctx: InitcaptureContext = new InitcaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CPP14Parser.RULE_initcapture);
		try {
			this.state = 591;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 586;
				this.match(CPP14Parser.Identifier);
				this.state = 587;
				this.initializer();
				}
				break;
			case CPP14Parser.And:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 588;
				this.match(CPP14Parser.And);
				this.state = 589;
				this.match(CPP14Parser.Identifier);
				this.state = 590;
				this.initializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdadeclarator(): LambdadeclaratorContext {
		let _localctx: LambdadeclaratorContext = new LambdadeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CPP14Parser.RULE_lambdadeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.match(CPP14Parser.LeftParen);
			this.state = 594;
			this.parameterdeclarationclause();
			this.state = 595;
			this.match(CPP14Parser.RightParen);
			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Mutable) {
				{
				this.state = 596;
				this.match(CPP14Parser.Mutable);
				}
			}

			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Noexcept || _la===CPP14Parser.Throw) {
				{
				this.state = 599;
				this.exceptionspecification();
				}
			}

			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
				{
				this.state = 602;
				this.attributespecifierseq(0);
				}
			}

			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Arrow) {
				{
				this.state = 605;
				this.trailingreturntype();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public idexpressionlapper(): IdexpressionlapperContext {
		let _localctx: IdexpressionlapperContext = new IdexpressionlapperContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CPP14Parser.RULE_idexpressionlapper);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
			this.idexpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functioncallexpression(): FunctioncallexpressionContext {
		let _localctx: FunctioncallexpressionContext = new FunctioncallexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CPP14Parser.RULE_functioncallexpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this.primaryexpression();
			this.state = 611;
			this.match(CPP14Parser.LeftParen);
			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
				{
				this.state = 612;
				this.initializerlist();
				}
			}

			this.state = 615;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public postfixexpression(): PostfixexpressionContext;
	public postfixexpression(_p: number): PostfixexpressionContext;
	@RuleVersion(0)
	public postfixexpression(_p?: number): PostfixexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PostfixexpressionContext = new PostfixexpressionContext(this._ctx, _parentState);
		let _prevctx: PostfixexpressionContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, CPP14Parser.RULE_postfixexpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,26,this._ctx) ) {
			case 1:
				{
				this.state = 618;
				this.primaryexpression();
				}
				break;

			case 2:
				{
				this.state = 619;
				this.functioncallexpression();
				}
				break;

			case 3:
				{
				this.state = 620;
				this.simpletypespecifier();
				this.state = 621;
				this.match(CPP14Parser.LeftParen);
				this.state = 623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 622;
					this.expressionlist();
					}
				}

				this.state = 625;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 4:
				{
				this.state = 627;
				this.typenamespecifier();
				this.state = 628;
				this.match(CPP14Parser.LeftParen);
				this.state = 630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 629;
					this.expressionlist();
					}
				}

				this.state = 632;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 5:
				{
				this.state = 634;
				this.simpletypespecifier();
				this.state = 635;
				this.bracedinitlist();
				}
				break;

			case 6:
				{
				this.state = 637;
				this.typenamespecifier();
				this.state = 638;
				this.bracedinitlist();
				}
				break;

			case 7:
				{
				this.state = 640;
				this.match(CPP14Parser.Dynamic_cast);
				this.state = 641;
				this.match(CPP14Parser.Less);
				this.state = 642;
				this.typeid();
				this.state = 643;
				this.match(CPP14Parser.Greater);
				this.state = 644;
				this.match(CPP14Parser.LeftParen);
				this.state = 645;
				this.expression(0);
				this.state = 646;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 8:
				{
				this.state = 648;
				this.match(CPP14Parser.Static_cast);
				this.state = 649;
				this.match(CPP14Parser.Less);
				this.state = 650;
				this.typeid();
				this.state = 651;
				this.match(CPP14Parser.Greater);
				this.state = 652;
				this.match(CPP14Parser.LeftParen);
				this.state = 653;
				this.expression(0);
				this.state = 654;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 9:
				{
				this.state = 656;
				this.match(CPP14Parser.Reinterpret_cast);
				this.state = 657;
				this.match(CPP14Parser.Less);
				this.state = 658;
				this.typeid();
				this.state = 659;
				this.match(CPP14Parser.Greater);
				this.state = 660;
				this.match(CPP14Parser.LeftParen);
				this.state = 661;
				this.expression(0);
				this.state = 662;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 10:
				{
				this.state = 664;
				this.match(CPP14Parser.Const_cast);
				this.state = 665;
				this.match(CPP14Parser.Less);
				this.state = 666;
				this.typeid();
				this.state = 667;
				this.match(CPP14Parser.Greater);
				this.state = 668;
				this.match(CPP14Parser.LeftParen);
				this.state = 669;
				this.expression(0);
				this.state = 670;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 11:
				{
				this.state = 672;
				this.match(CPP14Parser.Typeid);
				this.state = 673;
				this.match(CPP14Parser.LeftParen);
				this.state = 674;
				this.expression(0);
				this.state = 675;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 12:
				{
				this.state = 677;
				this.match(CPP14Parser.Typeid);
				this.state = 678;
				this.match(CPP14Parser.LeftParen);
				this.state = 679;
				this.typeid();
				this.state = 680;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 718;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,30,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 716;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,29,this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 684;
						if (!(this.precpred(this._ctx, 18))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						this.state = 685;
						this.match(CPP14Parser.LeftBracket);
						this.state = 686;
						this.assignmentexpression();
						this.state = 687;
						this.match(CPP14Parser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 689;
						if (!(this.precpred(this._ctx, 17))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						this.state = 690;
						this.match(CPP14Parser.LeftBracket);
						this.state = 691;
						this.bracedinitlist();
						this.state = 692;
						this.match(CPP14Parser.RightBracket);
						}
						break;

					case 3:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 694;
						if (!(this.precpred(this._ctx, 12))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						this.state = 695;
						this.match(CPP14Parser.Dot);
						this.state = 697;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===CPP14Parser.Template) {
							{
							this.state = 696;
							this.match(CPP14Parser.Template);
							}
						}

						this.state = 699;
						this.idexpressionlapper();
						}
						break;

					case 4:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 700;
						if (!(this.precpred(this._ctx, 11))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						this.state = 701;
						this.match(CPP14Parser.Arrow);
						this.state = 703;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===CPP14Parser.Template) {
							{
							this.state = 702;
							this.match(CPP14Parser.Template);
							}
						}

						this.state = 705;
						this.idexpressionlapper();
						}
						break;

					case 5:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 706;
						if (!(this.precpred(this._ctx, 10))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						this.state = 707;
						this.match(CPP14Parser.Dot);
						this.state = 708;
						this.pseudodestructorname();
						}
						break;

					case 6:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 709;
						if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						this.state = 710;
						this.match(CPP14Parser.Arrow);
						this.state = 711;
						this.pseudodestructorname();
						}
						break;

					case 7:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 712;
						if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						this.state = 713;
						this.match(CPP14Parser.PlusPlus);
						}
						break;

					case 8:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 714;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 715;
						this.match(CPP14Parser.MinusMinus);
						}
						break;
					}
					} 
				}
				this.state = 720;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,30,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expressionlist(): ExpressionlistContext {
		let _localctx: ExpressionlistContext = new ExpressionlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CPP14Parser.RULE_expressionlist);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this.initializerlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public pseudodestructorname(): PseudodestructornameContext {
		let _localctx: PseudodestructornameContext = new PseudodestructornameContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CPP14Parser.RULE_pseudodestructorname);
		let _la: number;
		try {
			this.state = 745;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,33,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 724;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,31,this._ctx) ) {
				case 1:
					{
					this.state = 723;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 726;
				this.typename();
				this.state = 727;
				this.match(CPP14Parser.Doublecolon);
				this.state = 728;
				this.match(CPP14Parser.Tilde);
				this.state = 729;
				this.typename();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 731;
				this.nestednamespecifier(0);
				this.state = 732;
				this.match(CPP14Parser.Template);
				this.state = 733;
				this.simpletemplateid();
				this.state = 734;
				this.match(CPP14Parser.Doublecolon);
				this.state = 735;
				this.match(CPP14Parser.Tilde);
				this.state = 736;
				this.typename();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Decltype || _la===CPP14Parser.Doublecolon || _la===CPP14Parser.Identifier) {
					{
					this.state = 738;
					this.nestednamespecifier(0);
					}
				}

				this.state = 741;
				this.match(CPP14Parser.Tilde);
				this.state = 742;
				this.typename();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 743;
				this.match(CPP14Parser.Tilde);
				this.state = 744;
				this.decltypespecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public binaryexpression(): BinaryexpressionContext {
		let _localctx: BinaryexpressionContext = new BinaryexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CPP14Parser.RULE_binaryexpression);
		try {
			this.state = 751;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,34,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 747;
				this.postfixexpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 748;
				this.unaryexpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 749;
				this.newexpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 750;
				this.deleteexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unaryexpression(): UnaryexpressionContext {
		let _localctx: UnaryexpressionContext = new UnaryexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CPP14Parser.RULE_unaryexpression);
		try {
			this.state = 783;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,35,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 753;
				this.match(CPP14Parser.PlusPlus);
				this.state = 754;
				this.castexpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 755;
				this.match(CPP14Parser.MinusMinus);
				this.state = 756;
				this.castexpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 757;
				this.unaryoperator();
				this.state = 758;
				this.castexpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 760;
				this.match(CPP14Parser.Sizeof);
				this.state = 761;
				this.binaryexpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 762;
				this.match(CPP14Parser.Sizeof);
				this.state = 763;
				this.match(CPP14Parser.LeftParen);
				this.state = 764;
				this.typeidlapper();
				this.state = 765;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 767;
				this.match(CPP14Parser.Sizeof);
				this.state = 768;
				this.match(CPP14Parser.LeftParen);
				this.state = 769;
				this.typeid();
				this.state = 770;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 772;
				this.match(CPP14Parser.Sizeof);
				this.state = 773;
				this.match(CPP14Parser.Ellipsis);
				this.state = 774;
				this.match(CPP14Parser.LeftParen);
				this.state = 775;
				this.match(CPP14Parser.Identifier);
				this.state = 776;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 777;
				this.match(CPP14Parser.Alignof);
				this.state = 778;
				this.match(CPP14Parser.LeftParen);
				this.state = 779;
				this.typeid();
				this.state = 780;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 782;
				this.noexceptexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeidlapper(): TypeidlapperContext {
		let _localctx: TypeidlapperContext = new TypeidlapperContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CPP14Parser.RULE_typeidlapper);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.typeid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unaryoperator(): UnaryoperatorContext {
		let _localctx: UnaryoperatorContext = new UnaryoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CPP14Parser.RULE_unaryoperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			_la = this._input.LA(1);
			if ( !(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CPP14Parser.Plus - 84)) | (1 << (CPP14Parser.Minus - 84)) | (1 << (CPP14Parser.Star - 84)) | (1 << (CPP14Parser.And - 84)) | (1 << (CPP14Parser.Or - 84)) | (1 << (CPP14Parser.Tilde - 84)) | (1 << (CPP14Parser.Not - 84)))) !== 0)) ) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public newexpression(): NewexpressionContext {
		let _localctx: NewexpressionContext = new NewexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CPP14Parser.RULE_newexpression);
		let _la: number;
		try {
			this.state = 813;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,42,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Doublecolon) {
					{
					this.state = 789;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 792;
				this.match(CPP14Parser.New);
				this.state = 794;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.LeftParen) {
					{
					this.state = 793;
					this.newplacement();
					}
				}

				this.state = 796;
				this.newtypeid();
				this.state = 798;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,38,this._ctx) ) {
				case 1:
					{
					this.state = 797;
					this.newinitializer();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Doublecolon) {
					{
					this.state = 800;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 803;
				this.match(CPP14Parser.New);
				this.state = 805;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,40,this._ctx) ) {
				case 1:
					{
					this.state = 804;
					this.newplacement();
					}
					break;
				}
				this.state = 807;
				this.match(CPP14Parser.LeftParen);
				this.state = 808;
				this.typeid();
				this.state = 809;
				this.match(CPP14Parser.RightParen);
				this.state = 811;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,41,this._ctx) ) {
				case 1:
					{
					this.state = 810;
					this.newinitializer();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public newplacement(): NewplacementContext {
		let _localctx: NewplacementContext = new NewplacementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CPP14Parser.RULE_newplacement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.match(CPP14Parser.LeftParen);
			this.state = 816;
			this.expressionlist();
			this.state = 817;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public newtypeid(): NewtypeidContext {
		let _localctx: NewtypeidContext = new NewtypeidContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CPP14Parser.RULE_newtypeid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this.typespecifierseq();
			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,43,this._ctx) ) {
			case 1:
				{
				this.state = 820;
				this.newdeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public newdeclarator(): NewdeclaratorContext {
		let _localctx: NewdeclaratorContext = new NewdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CPP14Parser.RULE_newdeclarator);
		try {
			this.state = 828;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 823;
				this.ptroperator();
				this.state = 825;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,44,this._ctx) ) {
				case 1:
					{
					this.state = 824;
					this.newdeclarator();
					}
					break;
				}
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 827;
				this.noptrnewdeclarator(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noptrnewdeclarator(): NoptrnewdeclaratorContext;
	public noptrnewdeclarator(_p: number): NoptrnewdeclaratorContext;
	@RuleVersion(0)
	public noptrnewdeclarator(_p?: number): NoptrnewdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrnewdeclaratorContext = new NoptrnewdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrnewdeclaratorContext = _localctx;
		let _startState: number = 58;
		this.enterRecursionRule(_localctx, 58, CPP14Parser.RULE_noptrnewdeclarator, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 831;
			this.match(CPP14Parser.LeftBracket);
			this.state = 832;
			this.expression(0);
			this.state = 833;
			this.match(CPP14Parser.RightBracket);
			this.state = 835;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,46,this._ctx) ) {
			case 1:
				{
				this.state = 834;
				this.attributespecifierseq(0);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 846;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,48,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new NoptrnewdeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrnewdeclarator);
					this.state = 837;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 838;
					this.match(CPP14Parser.LeftBracket);
					this.state = 839;
					this.constantexpression();
					this.state = 840;
					this.match(CPP14Parser.RightBracket);
					this.state = 842;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,47,this._ctx) ) {
					case 1:
						{
						this.state = 841;
						this.attributespecifierseq(0);
						}
						break;
					}
					}
					} 
				}
				this.state = 848;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,48,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public newinitializer(): NewinitializerContext {
		let _localctx: NewinitializerContext = new NewinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CPP14Parser.RULE_newinitializer);
		let _la: number;
		try {
			this.state = 855;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 849;
				this.match(CPP14Parser.LeftParen);
				this.state = 851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 850;
					this.expressionlist();
					}
				}

				this.state = 853;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 854;
				this.bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public deleteexpression(): DeleteexpressionContext {
		let _localctx: DeleteexpressionContext = new DeleteexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CPP14Parser.RULE_deleteexpression);
		let _la: number;
		try {
			this.state = 869;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 858;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Doublecolon) {
					{
					this.state = 857;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 860;
				this.match(CPP14Parser.Delete);
				this.state = 861;
				this.castexpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Doublecolon) {
					{
					this.state = 862;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 865;
				this.match(CPP14Parser.Delete);
				this.state = 866;
				this.match(CPP14Parser.LeftBracket);
				this.state = 867;
				this.match(CPP14Parser.RightBracket);
				this.state = 868;
				this.castexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public noexceptexpression(): NoexceptexpressionContext {
		let _localctx: NoexceptexpressionContext = new NoexceptexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CPP14Parser.RULE_noexceptexpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this.match(CPP14Parser.Noexcept);
			this.state = 872;
			this.match(CPP14Parser.LeftParen);
			this.state = 873;
			this.expression(0);
			this.state = 874;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public castexpression(): CastexpressionContext {
		let _localctx: CastexpressionContext = new CastexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CPP14Parser.RULE_castexpression);
		try {
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,54,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 876;
				this.binaryexpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 877;
				this.match(CPP14Parser.LeftParen);
				this.state = 878;
				this.typeid();
				this.state = 879;
				this.match(CPP14Parser.RightParen);
				this.state = 880;
				this.castexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public pmexpression(): PmexpressionContext;
	public pmexpression(_p: number): PmexpressionContext;
	@RuleVersion(0)
	public pmexpression(_p?: number): PmexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PmexpressionContext = new PmexpressionContext(this._ctx, _parentState);
		let _prevctx: PmexpressionContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, CPP14Parser.RULE_pmexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 885;
			this.castexpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 895;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,56,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 893;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,55,this._ctx) ) {
					case 1:
						{
						_localctx = new PmexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_pmexpression);
						this.state = 887;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 888;
						this.match(CPP14Parser.DotStar);
						this.state = 889;
						this.castexpression();
						}
						break;

					case 2:
						{
						_localctx = new PmexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_pmexpression);
						this.state = 890;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 891;
						this.match(CPP14Parser.ArrowStar);
						this.state = 892;
						this.castexpression();
						}
						break;
					}
					} 
				}
				this.state = 897;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,56,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public multiplicativeexpression(): MultiplicativeexpressionContext;
	public multiplicativeexpression(_p: number): MultiplicativeexpressionContext;
	@RuleVersion(0)
	public multiplicativeexpression(_p?: number): MultiplicativeexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeexpressionContext = new MultiplicativeexpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeexpressionContext = _localctx;
		let _startState: number = 70;
		this.enterRecursionRule(_localctx, 70, CPP14Parser.RULE_multiplicativeexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 899;
			this.pmexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 912;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,58,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 910;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,57,this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
						this.state = 901;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 902;
						this.match(CPP14Parser.Star);
						this.state = 903;
						this.pmexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
						this.state = 904;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 905;
						this.match(CPP14Parser.Div);
						this.state = 906;
						this.pmexpression(0);
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
						this.state = 907;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 908;
						this.match(CPP14Parser.Mod);
						this.state = 909;
						this.pmexpression(0);
						}
						break;
					}
					} 
				}
				this.state = 914;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,58,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additiveexpression(): AdditiveexpressionContext;
	public additiveexpression(_p: number): AdditiveexpressionContext;
	@RuleVersion(0)
	public additiveexpression(_p?: number): AdditiveexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveexpressionContext = new AdditiveexpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveexpressionContext = _localctx;
		let _startState: number = 72;
		this.enterRecursionRule(_localctx, 72, CPP14Parser.RULE_additiveexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 916;
			this.multiplicativeexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 926;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,60,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 924;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,59,this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_additiveexpression);
						this.state = 918;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 919;
						this.match(CPP14Parser.Plus);
						this.state = 920;
						this.multiplicativeexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_additiveexpression);
						this.state = 921;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 922;
						this.match(CPP14Parser.Minus);
						this.state = 923;
						this.multiplicativeexpression(0);
						}
						break;
					}
					} 
				}
				this.state = 928;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,60,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public shiftexpression(): ShiftexpressionContext;
	public shiftexpression(_p: number): ShiftexpressionContext;
	@RuleVersion(0)
	public shiftexpression(_p?: number): ShiftexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ShiftexpressionContext = new ShiftexpressionContext(this._ctx, _parentState);
		let _prevctx: ShiftexpressionContext = _localctx;
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, CPP14Parser.RULE_shiftexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 930;
			this.additiveexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 941;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,62,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 939;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,61,this._ctx) ) {
					case 1:
						{
						_localctx = new ShiftexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_shiftexpression);
						this.state = 932;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 933;
						this.match(CPP14Parser.LeftShift);
						this.state = 934;
						this.additiveexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new ShiftexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_shiftexpression);
						this.state = 935;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 936;
						this.rightShift();
						this.state = 937;
						this.additiveexpression(0);
						}
						break;
					}
					} 
				}
				this.state = 943;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,62,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public relationalexpression(): RelationalexpressionContext;
	public relationalexpression(_p: number): RelationalexpressionContext;
	@RuleVersion(0)
	public relationalexpression(_p?: number): RelationalexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalexpressionContext = new RelationalexpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalexpressionContext = _localctx;
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, CPP14Parser.RULE_relationalexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 945;
			this.shiftexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 961;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,64,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 959;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,63,this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 947;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 948;
						this.match(CPP14Parser.Less);
						this.state = 949;
						this.shiftexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 950;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 951;
						this.match(CPP14Parser.Greater);
						this.state = 952;
						this.shiftexpression(0);
						}
						break;

					case 3:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 953;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 954;
						this.match(CPP14Parser.LessEqual);
						this.state = 955;
						this.shiftexpression(0);
						}
						break;

					case 4:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 956;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 957;
						this.match(CPP14Parser.GreaterEqual);
						this.state = 958;
						this.shiftexpression(0);
						}
						break;
					}
					} 
				}
				this.state = 963;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,64,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equalityexpression(): EqualityexpressionContext;
	public equalityexpression(_p: number): EqualityexpressionContext;
	@RuleVersion(0)
	public equalityexpression(_p?: number): EqualityexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityexpressionContext = new EqualityexpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityexpressionContext = _localctx;
		let _startState: number = 78;
		this.enterRecursionRule(_localctx, 78, CPP14Parser.RULE_equalityexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 965;
			this.relationalexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 975;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,66,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 973;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,65,this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_equalityexpression);
						this.state = 967;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 968;
						this.match(CPP14Parser.Equal);
						this.state = 969;
						this.relationalexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new EqualityexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_equalityexpression);
						this.state = 970;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 971;
						this.match(CPP14Parser.NotEqual);
						this.state = 972;
						this.relationalexpression(0);
						}
						break;
					}
					} 
				}
				this.state = 977;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,66,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public andexpression(): AndexpressionContext;
	public andexpression(_p: number): AndexpressionContext;
	@RuleVersion(0)
	public andexpression(_p?: number): AndexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndexpressionContext = new AndexpressionContext(this._ctx, _parentState);
		let _prevctx: AndexpressionContext = _localctx;
		let _startState: number = 80;
		this.enterRecursionRule(_localctx, 80, CPP14Parser.RULE_andexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 979;
			this.equalityexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 986;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,67,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AndexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_andexpression);
					this.state = 981;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 982;
					this.match(CPP14Parser.And);
					this.state = 983;
					this.equalityexpression(0);
					}
					} 
				}
				this.state = 988;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,67,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public exclusiveorexpression(): ExclusiveorexpressionContext;
	public exclusiveorexpression(_p: number): ExclusiveorexpressionContext;
	@RuleVersion(0)
	public exclusiveorexpression(_p?: number): ExclusiveorexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExclusiveorexpressionContext = new ExclusiveorexpressionContext(this._ctx, _parentState);
		let _prevctx: ExclusiveorexpressionContext = _localctx;
		let _startState: number = 82;
		this.enterRecursionRule(_localctx, 82, CPP14Parser.RULE_exclusiveorexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 990;
			this.andexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 997;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,68,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExclusiveorexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_exclusiveorexpression);
					this.state = 992;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 993;
					this.match(CPP14Parser.Caret);
					this.state = 994;
					this.andexpression(0);
					}
					} 
				}
				this.state = 999;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,68,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public inclusiveorexpression(): InclusiveorexpressionContext;
	public inclusiveorexpression(_p: number): InclusiveorexpressionContext;
	@RuleVersion(0)
	public inclusiveorexpression(_p?: number): InclusiveorexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InclusiveorexpressionContext = new InclusiveorexpressionContext(this._ctx, _parentState);
		let _prevctx: InclusiveorexpressionContext = _localctx;
		let _startState: number = 84;
		this.enterRecursionRule(_localctx, 84, CPP14Parser.RULE_inclusiveorexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1001;
			this.exclusiveorexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1008;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new InclusiveorexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_inclusiveorexpression);
					this.state = 1003;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 1004;
					this.match(CPP14Parser.Or);
					this.state = 1005;
					this.exclusiveorexpression(0);
					}
					} 
				}
				this.state = 1010;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logicalandexpression(): LogicalandexpressionContext;
	public logicalandexpression(_p: number): LogicalandexpressionContext;
	@RuleVersion(0)
	public logicalandexpression(_p?: number): LogicalandexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalandexpressionContext = new LogicalandexpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalandexpressionContext = _localctx;
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, CPP14Parser.RULE_logicalandexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1012;
			this.inclusiveorexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1019;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalandexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalandexpression);
					this.state = 1014;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 1015;
					this.match(CPP14Parser.AndAnd);
					this.state = 1016;
					this.inclusiveorexpression(0);
					}
					} 
				}
				this.state = 1021;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logicalorexpression(): LogicalorexpressionContext;
	public logicalorexpression(_p: number): LogicalorexpressionContext;
	@RuleVersion(0)
	public logicalorexpression(_p?: number): LogicalorexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalorexpressionContext = new LogicalorexpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalorexpressionContext = _localctx;
		let _startState: number = 88;
		this.enterRecursionRule(_localctx, 88, CPP14Parser.RULE_logicalorexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1023;
			this.logicalandexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1030;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,71,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalorexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalorexpression);
					this.state = 1025;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 1026;
					this.match(CPP14Parser.OrOr);
					this.state = 1027;
					this.logicalandexpression(0);
					}
					} 
				}
				this.state = 1032;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,71,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public conditionalexpression(): ConditionalexpressionContext {
		let _localctx: ConditionalexpressionContext = new ConditionalexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CPP14Parser.RULE_conditionalexpression);
		try {
			this.state = 1040;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,72,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1033;
				this.logicalorexpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1034;
				this.logicalorexpression(0);
				this.state = 1035;
				this.match(CPP14Parser.Question);
				this.state = 1036;
				this.expression(0);
				this.state = 1037;
				this.match(CPP14Parser.Colon);
				this.state = 1038;
				this.assignmentexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentexpression(): AssignmentexpressionContext {
		let _localctx: AssignmentexpressionContext = new AssignmentexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CPP14Parser.RULE_assignmentexpression);
		try {
			this.state = 1048;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,73,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1042;
				this.conditionalexpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1043;
				this.logicalorexpression(0);
				this.state = 1044;
				this.assignmentoperator();
				this.state = 1045;
				this.initializerclause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1047;
				this.throwexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentoperator(): AssignmentoperatorContext {
		let _localctx: AssignmentoperatorContext = new AssignmentoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CPP14Parser.RULE_assignmentoperator);
		try {
			this.state = 1061;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1050;
				this.match(CPP14Parser.Assign);
				}
				break;
			case CPP14Parser.StarAssign:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1051;
				this.match(CPP14Parser.StarAssign);
				}
				break;
			case CPP14Parser.DivAssign:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1052;
				this.match(CPP14Parser.DivAssign);
				}
				break;
			case CPP14Parser.ModAssign:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1053;
				this.match(CPP14Parser.ModAssign);
				}
				break;
			case CPP14Parser.PlusAssign:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1054;
				this.match(CPP14Parser.PlusAssign);
				}
				break;
			case CPP14Parser.MinusAssign:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1055;
				this.match(CPP14Parser.MinusAssign);
				}
				break;
			case CPP14Parser.Greater:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1056;
				this.rightShiftAssign();
				}
				break;
			case CPP14Parser.LeftShiftAssign:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1057;
				this.match(CPP14Parser.LeftShiftAssign);
				}
				break;
			case CPP14Parser.AndAssign:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1058;
				this.match(CPP14Parser.AndAssign);
				}
				break;
			case CPP14Parser.XorAssign:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1059;
				this.match(CPP14Parser.XorAssign);
				}
				break;
			case CPP14Parser.OrAssign:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1060;
				this.match(CPP14Parser.OrAssign);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	@RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 96;
		this.enterRecursionRule(_localctx, 96, CPP14Parser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1064;
			this.assignmentexpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1071;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,75,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_expression);
					this.state = 1066;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 1067;
					this.match(CPP14Parser.Comma);
					this.state = 1068;
					this.assignmentexpression();
					}
					} 
				}
				this.state = 1073;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,75,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constantexpression(): ConstantexpressionContext {
		let _localctx: ConstantexpressionContext = new ConstantexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CPP14Parser.RULE_constantexpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this.conditionalexpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CPP14Parser.RULE_statement);
		try {
			this.state = 1078;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,76,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1076;
				this.labeledstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1077;
				this.statementWithoutLabeldstatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statementWithoutLabeldstatement(): StatementWithoutLabeldstatementContext {
		let _localctx: StatementWithoutLabeldstatementContext = new StatementWithoutLabeldstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CPP14Parser.RULE_statementWithoutLabeldstatement);
		let _la: number;
		try {
			this.state = 1131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,89,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1080;
				this.emptydeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1082;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,77,this._ctx) ) {
				case 1:
					{
					this.state = 1081;
					this.attributespecifierseq(0);
					}
					break;
				}
				this.state = 1084;
				this.expressionstatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1086;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1085;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1088;
				this.compoundstatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1090;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1089;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1092;
				this.selectionstatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1093;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1096;
				this.switchstatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1098;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1097;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1100;
				this.iterationstatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1101;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1104;
				this.whilestatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1105;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1108;
				this.dowhilestatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1109;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1112;
				this.jumpstatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1113;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1116;
				this.breakStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1117;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1120;
				this.continueStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1121;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1124;
				this.returnStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1125;
				this.variabledeclarationstatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1126;
				this.declarationstatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1127;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1130;
				this.tryblock();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public labeledstatement(): LabeledstatementContext {
		let _localctx: LabeledstatementContext = new LabeledstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CPP14Parser.RULE_labeledstatement);
		let _la: number;
		try {
			this.state = 1140;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,91,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1133;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1136;
				this.match(CPP14Parser.Identifier);
				this.state = 1137;
				this.match(CPP14Parser.Colon);
				this.state = 1138;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1139;
				this.switchunitstatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public switchunitstatement(): SwitchunitstatementContext {
		let _localctx: SwitchunitstatementContext = new SwitchunitstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CPP14Parser.RULE_switchunitstatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
				{
				this.state = 1142;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1148;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Case:
				{
				this.state = 1145;
				this.match(CPP14Parser.Case);
				this.state = 1146;
				this.constantexpression();
				}
				break;
			case CPP14Parser.Default:
				{
				this.state = 1147;
				this.match(CPP14Parser.Default);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1150;
			this.match(CPP14Parser.Colon);
			this.state = 1151;
			this.statementWithoutLabeldstatementseq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statementWithoutLabeldstatementseq(): StatementWithoutLabeldstatementseqContext {
		let _localctx: StatementWithoutLabeldstatementseqContext = new StatementWithoutLabeldstatementseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CPP14Parser.RULE_statementWithoutLabeldstatementseq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1153;
			this.statementWithoutLabeldstatement();
			this.state = 1157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,94,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1154;
					this.statementWithoutLabeldstatement();
					}
					} 
				}
				this.state = 1159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,94,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expressionstatement(): ExpressionstatementContext {
		let _localctx: ExpressionstatementContext = new ExpressionstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CPP14Parser.RULE_expressionstatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
				{
				this.state = 1160;
				this.expression(0);
				}
			}

			this.state = 1163;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public compoundstatement(): CompoundstatementContext {
		let _localctx: CompoundstatementContext = new CompoundstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CPP14Parser.RULE_compoundstatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.For - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Goto - 32)) | (1 << (CPP14Parser.If - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Return - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Switch - 32)) | (1 << (CPP14Parser.This - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Try - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Using - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.While - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.PlusPlus - 111)) | (1 << (CPP14Parser.MinusMinus - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)) | (1 << (CPP14Parser.Integerliteral - 111)) | (1 << (CPP14Parser.Characterliteral - 111)) | (1 << (CPP14Parser.Floatingliteral - 111)) | (1 << (CPP14Parser.Stringliteral - 111)) | (1 << (CPP14Parser.Booleanliteral - 111)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 111)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 111)) | (1 << (CPP14Parser.Userdefinedstringliteral - 111)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 111)))) !== 0)) {
				{
				this.state = 1166;
				this.statementseq();
				}
			}

			this.state = 1169;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statementseq(): StatementseqContext {
		let _localctx: StatementseqContext = new StatementseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CPP14Parser.RULE_statementseq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1171;
			this.statement();
			this.state = 1175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.For - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Goto - 32)) | (1 << (CPP14Parser.If - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Return - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Switch - 32)) | (1 << (CPP14Parser.This - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Try - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Using - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.While - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.PlusPlus - 111)) | (1 << (CPP14Parser.MinusMinus - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)) | (1 << (CPP14Parser.Integerliteral - 111)) | (1 << (CPP14Parser.Characterliteral - 111)) | (1 << (CPP14Parser.Floatingliteral - 111)) | (1 << (CPP14Parser.Stringliteral - 111)) | (1 << (CPP14Parser.Booleanliteral - 111)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 111)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 111)) | (1 << (CPP14Parser.Userdefinedstringliteral - 111)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 111)))) !== 0)) {
				{
				{
				this.state = 1172;
				this.statement();
				}
				}
				this.state = 1177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public selectionstatement(): SelectionstatementContext {
		let _localctx: SelectionstatementContext = new SelectionstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CPP14Parser.RULE_selectionstatement);
		try {
			this.state = 1192;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,98,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1178;
				this.match(CPP14Parser.If);
				this.state = 1179;
				this.match(CPP14Parser.LeftParen);
				this.state = 1180;
				this.condition();
				this.state = 1181;
				this.match(CPP14Parser.RightParen);
				this.state = 1182;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1184;
				this.match(CPP14Parser.If);
				this.state = 1185;
				this.match(CPP14Parser.LeftParen);
				this.state = 1186;
				this.condition();
				this.state = 1187;
				this.match(CPP14Parser.RightParen);
				this.state = 1188;
				this.statement();
				this.state = 1189;
				this.match(CPP14Parser.Else);
				this.state = 1190;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public switchstatement(): SwitchstatementContext {
		let _localctx: SwitchstatementContext = new SwitchstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CPP14Parser.RULE_switchstatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1194;
			this.match(CPP14Parser.Switch);
			this.state = 1195;
			this.match(CPP14Parser.LeftParen);
			this.state = 1196;
			this.condition();
			this.state = 1197;
			this.match(CPP14Parser.RightParen);
			{
			this.state = 1198;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1199;
			this.switchunitseq();
			this.state = 1200;
			this.match(CPP14Parser.RightBrace);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public switchunitseq(): SwitchunitseqContext {
		let _localctx: SwitchunitseqContext = new SwitchunitseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CPP14Parser.RULE_switchunitseq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1202;
			this.switchunitstatement();
			this.state = 1206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Default))) !== 0) || _la===CPP14Parser.LeftBracket) {
				{
				{
				this.state = 1203;
				this.switchunitstatement();
				}
				}
				this.state = 1208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CPP14Parser.RULE_condition);
		let _la: number;
		try {
			this.state = 1225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,102,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1209;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1210;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1213;
				this.declspecifierseq();
				this.state = 1214;
				this.declarator();
				this.state = 1215;
				this.match(CPP14Parser.Assign);
				this.state = 1216;
				this.initializerclause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1218;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1221;
				this.declspecifierseq();
				this.state = 1222;
				this.declarator();
				this.state = 1223;
				this.bracedinitlist();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whilestatement(): WhilestatementContext {
		let _localctx: WhilestatementContext = new WhilestatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CPP14Parser.RULE_whilestatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1227;
			this.match(CPP14Parser.While);
			this.state = 1228;
			this.match(CPP14Parser.LeftParen);
			this.state = 1229;
			this.condition();
			this.state = 1230;
			this.match(CPP14Parser.RightParen);
			this.state = 1231;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dowhilestatement(): DowhilestatementContext {
		let _localctx: DowhilestatementContext = new DowhilestatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CPP14Parser.RULE_dowhilestatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1233;
			this.match(CPP14Parser.Do);
			this.state = 1234;
			this.compoundstatement();
			this.state = 1235;
			this.match(CPP14Parser.While);
			this.state = 1236;
			this.match(CPP14Parser.LeftParen);
			this.state = 1237;
			this.expression(0);
			this.state = 1238;
			this.match(CPP14Parser.RightParen);
			this.state = 1239;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public iterationstatement(): IterationstatementContext {
		let _localctx: IterationstatementContext = new IterationstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CPP14Parser.RULE_iterationstatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1241;
			this.match(CPP14Parser.For);
			this.state = 1242;
			this.match(CPP14Parser.LeftParen);
			this.state = 1243;
			this.forinitstatement();
			this.state = 1245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
				{
				this.state = 1244;
				this.condition();
				}
			}

			this.state = 1247;
			this.match(CPP14Parser.Semi);
			this.state = 1249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
				{
				this.state = 1248;
				this.expression(0);
				}
			}

			this.state = 1251;
			this.match(CPP14Parser.RightParen);
			this.state = 1252;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enhancedForStatement(): EnhancedForStatementContext {
		let _localctx: EnhancedForStatementContext = new EnhancedForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CPP14Parser.RULE_enhancedForStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1254;
			this.match(CPP14Parser.For);
			this.state = 1255;
			this.match(CPP14Parser.LeftParen);
			this.state = 1256;
			this.forrangedeclaration();
			this.state = 1257;
			this.match(CPP14Parser.Colon);
			this.state = 1258;
			this.forrangeinitializer();
			this.state = 1259;
			this.match(CPP14Parser.RightParen);
			this.state = 1260;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forinitstatement(): ForinitstatementContext {
		let _localctx: ForinitstatementContext = new ForinitstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CPP14Parser.RULE_forinitstatement);
		try {
			this.state = 1265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,105,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1262;
				this.expressionstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1263;
				this.variabledeclarationstatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1264;
				this.simpledeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forrangedeclaration(): ForrangedeclarationContext {
		let _localctx: ForrangedeclarationContext = new ForrangedeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CPP14Parser.RULE_forrangedeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
				{
				this.state = 1267;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1270;
			this.declspecifierseq();
			this.state = 1271;
			this.declarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forrangeinitializer(): ForrangeinitializerContext {
		let _localctx: ForrangeinitializerContext = new ForrangeinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CPP14Parser.RULE_forrangeinitializer);
		try {
			this.state = 1275;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Alignof:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Const_cast:
			case CPP14Parser.Decltype:
			case CPP14Parser.Delete:
			case CPP14Parser.Double:
			case CPP14Parser.File:
			case CPP14Parser.Dynamic_cast:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.New:
			case CPP14Parser.Noexcept:
			case CPP14Parser.Nullptr:
			case CPP14Parser.Operator:
			case CPP14Parser.Reinterpret_cast:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Sizeof:
			case CPP14Parser.Static_cast:
			case CPP14Parser.This:
			case CPP14Parser.Throw:
			case CPP14Parser.Typeid:
			case CPP14Parser.Typename:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Plus:
			case CPP14Parser.Minus:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Or:
			case CPP14Parser.Tilde:
			case CPP14Parser.Not:
			case CPP14Parser.PlusPlus:
			case CPP14Parser.MinusMinus:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
			case CPP14Parser.Integerliteral:
			case CPP14Parser.Characterliteral:
			case CPP14Parser.Floatingliteral:
			case CPP14Parser.Stringliteral:
			case CPP14Parser.Booleanliteral:
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1273;
				this.expression(0);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1274;
				this.bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public jumpstatement(): JumpstatementContext {
		let _localctx: JumpstatementContext = new JumpstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CPP14Parser.RULE_jumpstatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1277;
			this.match(CPP14Parser.Goto);
			this.state = 1278;
			this.match(CPP14Parser.Identifier);
			this.state = 1279;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CPP14Parser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1281;
			this.match(CPP14Parser.Break);
			this.state = 1282;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CPP14Parser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1284;
			this.match(CPP14Parser.Continue);
			this.state = 1285;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CPP14Parser.RULE_returnStatement);
		let _la: number;
		try {
			this.state = 1296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,109,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1287;
				this.match(CPP14Parser.Return);
				this.state = 1289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 1288;
					this.expression(0);
					}
				}

				this.state = 1291;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1292;
				this.match(CPP14Parser.Return);
				this.state = 1293;
				this.bracedinitlist();
				this.state = 1294;
				this.match(CPP14Parser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declarationstatement(): DeclarationstatementContext {
		let _localctx: DeclarationstatementContext = new DeclarationstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CPP14Parser.RULE_declarationstatement);
		try {
			this.state = 1300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,110,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1298;
				this.simpledeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1299;
				this.blockdeclarationwithoutsimpledeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public declarationseq(): DeclarationseqContext;
	public declarationseq(_p: number): DeclarationseqContext;
	@RuleVersion(0)
	public declarationseq(_p?: number): DeclarationseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DeclarationseqContext = new DeclarationseqContext(this._ctx, _parentState);
		let _prevctx: DeclarationseqContext = _localctx;
		let _startState: number = 148;
		this.enterRecursionRule(_localctx, 148, CPP14Parser.RULE_declarationseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1303;
			this.declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1309;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,111,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new DeclarationseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_declarationseq);
					this.state = 1305;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 1306;
					this.declaration();
					}
					} 
				}
				this.state = 1311;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,111,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public myclassbody(): MyclassbodyContext {
		let _localctx: MyclassbodyContext = new MyclassbodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CPP14Parser.RULE_myclassbody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
				{
				this.state = 1312;
				this.memberspecification();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public myclassspecifier(): MyclassspecifierContext {
		let _localctx: MyclassspecifierContext = new MyclassspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CPP14Parser.RULE_myclassspecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1315;
			this.myclasshead();
			this.state = 1316;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1317;
			this.myclassbody();
			this.state = 1318;
			this.match(CPP14Parser.RightBrace);
			this.state = 1319;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public myclasshead(): MyclassheadContext {
		let _localctx: MyclassheadContext = new MyclassheadContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CPP14Parser.RULE_myclasshead);
		let _la: number;
		try {
			this.state = 1342;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,119,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1321;
				this.classkey();
				this.state = 1323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1322;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1326;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,114,this._ctx) ) {
				case 1:
					{
					this.state = 1325;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 1328;
				this.classheadname();
				this.state = 1330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Final) {
					{
					this.state = 1329;
					this.classvirtspecifier();
					}
				}

				this.state = 1333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Colon) {
					{
					this.state = 1332;
					this.baseclause();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1335;
				this.classkey();
				this.state = 1337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1336;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Colon) {
					{
					this.state = 1339;
					this.baseclause();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CPP14Parser.RULE_declaration);
		try {
			this.state = 1356;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,120,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1344;
				this.variabledeclarationstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1345;
				this.functiondeclarationstatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1346;
				this.blockdeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1347;
				this.myclassspecifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1348;
				this.functiondefinition();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1349;
				this.templatedeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1350;
				this.explicitinstantiation();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1351;
				this.explicitspecialization();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1352;
				this.linkagespecification();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1353;
				this.namespacedefinition();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1354;
				this.emptydeclaration();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1355;
				this.attributedeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public blockdeclarationwithoutsimpledeclaration(): BlockdeclarationwithoutsimpledeclarationContext {
		let _localctx: BlockdeclarationwithoutsimpledeclarationContext = new BlockdeclarationwithoutsimpledeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CPP14Parser.RULE_blockdeclarationwithoutsimpledeclaration);
		try {
			this.state = 1365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,121,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1358;
				this.asmdefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1359;
				this.namespacealiasdefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1360;
				this.usingdeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1361;
				this.usingdirective();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1362;
				this.static_assertdeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1363;
				this.aliasdeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1364;
				this.opaqueenumdeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public blockdeclaration(): BlockdeclarationContext {
		let _localctx: BlockdeclarationContext = new BlockdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CPP14Parser.RULE_blockdeclaration);
		try {
			this.state = 1369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,122,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1367;
				this.simpledeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1368;
				this.blockdeclarationwithoutsimpledeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public aliasdeclaration(): AliasdeclarationContext {
		let _localctx: AliasdeclarationContext = new AliasdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CPP14Parser.RULE_aliasdeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1371;
			this.match(CPP14Parser.Using);
			this.state = 1372;
			this.match(CPP14Parser.Identifier);
			this.state = 1374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
				{
				this.state = 1373;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1376;
			this.match(CPP14Parser.Assign);
			this.state = 1377;
			this.typeid();
			this.state = 1378;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variabledeclarationstatement(): VariabledeclarationstatementContext {
		let _localctx: VariabledeclarationstatementContext = new VariabledeclarationstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CPP14Parser.RULE_variabledeclarationstatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1380;
			this.variabledeclaration();
			this.state = 1381;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variabledeclaration(): VariabledeclarationContext {
		let _localctx: VariabledeclarationContext = new VariabledeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CPP14Parser.RULE_variabledeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
				{
				this.state = 1383;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (CPP14Parser.Constexpr - 15)) | (1 << (CPP14Parser.Explicit - 15)) | (1 << (CPP14Parser.Extern - 15)) | (1 << (CPP14Parser.Friend - 15)) | (1 << (CPP14Parser.Inline - 15)) | (1 << (CPP14Parser.Mutable - 15)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (CPP14Parser.Register - 50)) | (1 << (CPP14Parser.Static - 50)) | (1 << (CPP14Parser.Thread_local - 50)) | (1 << (CPP14Parser.Typedef - 50)) | (1 << (CPP14Parser.Virtual - 50)))) !== 0)) {
				{
				this.state = 1386;
				this.declspecifierseqwithouttype();
				}
			}

			this.state = 1389;
			this.typespecifier();
			this.state = 1391;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,126,this._ctx) ) {
			case 1:
				{
				this.state = 1390;
				this.variableDeclaratorList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variableDeclaratorList(): VariableDeclaratorListContext {
		let _localctx: VariableDeclaratorListContext = new VariableDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CPP14Parser.RULE_variableDeclaratorList);
		try {
			let _alt: number;
			this.state = 1402;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,128,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1394;
				this.variableDeclarator();
				this.state = 1399;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,127,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1395;
						this.match(CPP14Parser.Comma);
						this.state = 1396;
						this.variableDeclarator();
						}
						} 
					}
					this.state = 1401;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,127,this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CPP14Parser.RULE_variableDeclarator);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1407;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,129,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1404;
					this.ptroperator();
					}
					} 
				}
				this.state = 1409;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,129,this._ctx);
			}
			this.state = 1410;
			this.declaratorid();
			this.state = 1418;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,131,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1411;
					this.match(CPP14Parser.LeftBracket);
					this.state = 1413;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===CPP14Parser.Integerliteral) {
						{
						this.state = 1412;
						this.match(CPP14Parser.Integerliteral);
						}
					}

					this.state = 1415;
					this.match(CPP14Parser.RightBracket);
					}
					} 
				}
				this.state = 1420;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,131,this._ctx);
			}
			this.state = 1423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,132,this._ctx) ) {
			case 1:
				{
				this.state = 1421;
				this.match(CPP14Parser.Assign);
				this.state = 1422;
				this.initializerclause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dims(): DimsContext {
		let _localctx: DimsContext = new DimsContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CPP14Parser.RULE_dims);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1425;
			this.match(CPP14Parser.LeftBracket);
			this.state = 1426;
			this.match(CPP14Parser.RightBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functiondeclarationstatement(): FunctiondeclarationstatementContext {
		let _localctx: FunctiondeclarationstatementContext = new FunctiondeclarationstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CPP14Parser.RULE_functiondeclarationstatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
				{
				this.state = 1428;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (CPP14Parser.Constexpr - 15)) | (1 << (CPP14Parser.Explicit - 15)) | (1 << (CPP14Parser.Extern - 15)) | (1 << (CPP14Parser.Friend - 15)) | (1 << (CPP14Parser.Inline - 15)) | (1 << (CPP14Parser.Mutable - 15)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (CPP14Parser.Register - 50)) | (1 << (CPP14Parser.Static - 50)) | (1 << (CPP14Parser.Thread_local - 50)) | (1 << (CPP14Parser.Typedef - 50)) | (1 << (CPP14Parser.Virtual - 50)))) !== 0)) {
				{
				this.state = 1431;
				this.declspecifierseqwithouttype();
				}
			}

			this.state = 1434;
			this.functionheader();
			this.state = 1436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Final || _la===CPP14Parser.Override) {
				{
				this.state = 1435;
				this.virtspecifierseq(0);
				}
			}

			this.state = 1438;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public simpledeclaration(): SimpledeclarationContext {
		let _localctx: SimpledeclarationContext = new SimpledeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CPP14Parser.RULE_simpledeclaration);
		let _la: number;
		try {
			this.state = 1454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Constexpr:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.File:
			case CPP14Parser.Enum:
			case CPP14Parser.Explicit:
			case CPP14Parser.Extern:
			case CPP14Parser.Float:
			case CPP14Parser.Friend:
			case CPP14Parser.Inline:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Mutable:
			case CPP14Parser.Operator:
			case CPP14Parser.Register:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Static:
			case CPP14Parser.Struct:
			case CPP14Parser.Thread_local:
			case CPP14Parser.Typedef:
			case CPP14Parser.Typename:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Virtual:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Tilde:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Semi:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1441;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,136,this._ctx) ) {
				case 1:
					{
					this.state = 1440;
					this.declspecifierseq();
					}
					break;
				}
				this.state = 1444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Decltype || _la===CPP14Parser.Operator || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CPP14Parser.LeftParen - 78)) | (1 << (CPP14Parser.Star - 78)) | (1 << (CPP14Parser.And - 78)) | (1 << (CPP14Parser.Tilde - 78)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 1443;
					this.initdeclaratorlist();
					}
				}

				this.state = 1446;
				this.match(CPP14Parser.Semi);
				}
				break;
			case CPP14Parser.Alignas:
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1447;
				this.attributespecifierseq(0);
				this.state = 1449;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,138,this._ctx) ) {
				case 1:
					{
					this.state = 1448;
					this.declspecifierseq();
					}
					break;
				}
				this.state = 1451;
				this.initdeclaratorlist();
				this.state = 1452;
				this.match(CPP14Parser.Semi);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public static_assertdeclaration(): Static_assertdeclarationContext {
		let _localctx: Static_assertdeclarationContext = new Static_assertdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, CPP14Parser.RULE_static_assertdeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1456;
			this.match(CPP14Parser.Static_assert);
			this.state = 1457;
			this.match(CPP14Parser.LeftParen);
			this.state = 1458;
			this.constantexpression();
			this.state = 1459;
			this.match(CPP14Parser.Comma);
			this.state = 1460;
			this.match(CPP14Parser.Stringliteral);
			this.state = 1461;
			this.match(CPP14Parser.RightParen);
			this.state = 1462;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public emptydeclaration(): EmptydeclarationContext {
		let _localctx: EmptydeclarationContext = new EmptydeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CPP14Parser.RULE_emptydeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1464;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public attributedeclaration(): AttributedeclarationContext {
		let _localctx: AttributedeclarationContext = new AttributedeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, CPP14Parser.RULE_attributedeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1466;
			this.attributespecifierseq(0);
			this.state = 1467;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declspecifier(): DeclspecifierContext {
		let _localctx: DeclspecifierContext = new DeclspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, CPP14Parser.RULE_declspecifier);
		try {
			this.state = 1471;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Constexpr:
			case CPP14Parser.Explicit:
			case CPP14Parser.Extern:
			case CPP14Parser.Friend:
			case CPP14Parser.Inline:
			case CPP14Parser.Mutable:
			case CPP14Parser.Register:
			case CPP14Parser.Static:
			case CPP14Parser.Thread_local:
			case CPP14Parser.Typedef:
			case CPP14Parser.Virtual:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1469;
				this.declspecifierwithouttype();
				}
				break;
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.File:
			case CPP14Parser.Enum:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Struct:
			case CPP14Parser.Typename:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1470;
				this.typespecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declspecifierseq(): DeclspecifierseqContext {
		let _localctx: DeclspecifierseqContext = new DeclspecifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, CPP14Parser.RULE_declspecifierseq);
		let _la: number;
		try {
			this.state = 1480;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,142,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1473;
				this.declspecifier();
				this.state = 1475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1474;
					this.attributespecifierseq(0);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1477;
				this.declspecifier();
				this.state = 1478;
				this.declspecifierseq();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declspecifierwithouttype(): DeclspecifierwithouttypeContext {
		let _localctx: DeclspecifierwithouttypeContext = new DeclspecifierwithouttypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, CPP14Parser.RULE_declspecifierwithouttype);
		try {
			this.state = 1487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Extern:
			case CPP14Parser.Mutable:
			case CPP14Parser.Register:
			case CPP14Parser.Static:
			case CPP14Parser.Thread_local:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1482;
				this.storageclassspecifier();
				}
				break;
			case CPP14Parser.Explicit:
			case CPP14Parser.Inline:
			case CPP14Parser.Virtual:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1483;
				this.functionspecifier();
				}
				break;
			case CPP14Parser.Friend:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1484;
				this.match(CPP14Parser.Friend);
				}
				break;
			case CPP14Parser.Typedef:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1485;
				this.match(CPP14Parser.Typedef);
				}
				break;
			case CPP14Parser.Constexpr:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1486;
				this.match(CPP14Parser.Constexpr);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declspecifierseqwithouttype(): DeclspecifierseqwithouttypeContext {
		let _localctx: DeclspecifierseqwithouttypeContext = new DeclspecifierseqwithouttypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, CPP14Parser.RULE_declspecifierseqwithouttype);
		let _la: number;
		try {
			this.state = 1496;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,145,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1489;
				this.declspecifierwithouttype();
				this.state = 1491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1490;
					this.attributespecifierseq(0);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1493;
				this.declspecifierwithouttype();
				this.state = 1494;
				this.declspecifierseq();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public storageclassspecifier(): StorageclassspecifierContext {
		let _localctx: StorageclassspecifierContext = new StorageclassspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, CPP14Parser.RULE_storageclassspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1498;
			_la = this._input.LA(1);
			if ( !(_la===CPP14Parser.Extern || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CPP14Parser.Mutable - 40)) | (1 << (CPP14Parser.Register - 40)) | (1 << (CPP14Parser.Static - 40)) | (1 << (CPP14Parser.Thread_local - 40)))) !== 0)) ) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionspecifier(): FunctionspecifierContext {
		let _localctx: FunctionspecifierContext = new FunctionspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, CPP14Parser.RULE_functionspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1500;
			_la = this._input.LA(1);
			if ( !(_la===CPP14Parser.Explicit || _la===CPP14Parser.Inline || _la===CPP14Parser.Virtual) ) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typedefname(): TypedefnameContext {
		let _localctx: TypedefnameContext = new TypedefnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, CPP14Parser.RULE_typedefname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1502;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typespecifier(): TypespecifierContext {
		let _localctx: TypespecifierContext = new TypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, CPP14Parser.RULE_typespecifier);
		try {
			this.state = 1507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,146,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1504;
				this.trailingtypespecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1505;
				this.myclassspecifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1506;
				this.enumspecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public trailingtypespecifier(): TrailingtypespecifierContext {
		let _localctx: TrailingtypespecifierContext = new TrailingtypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, CPP14Parser.RULE_trailingtypespecifier);
		try {
			this.state = 1513;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.File:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1509;
				this.simpletypespecifier();
				}
				break;
			case CPP14Parser.Class:
			case CPP14Parser.Enum:
			case CPP14Parser.Struct:
			case CPP14Parser.Union:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1510;
				this.elaboratedtypespecifier();
				}
				break;
			case CPP14Parser.Typename:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1511;
				this.typenamespecifier();
				}
				break;
			case CPP14Parser.Const:
			case CPP14Parser.Volatile:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1512;
				this.cvqualifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typespecifierseq(): TypespecifierseqContext {
		let _localctx: TypespecifierseqContext = new TypespecifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, CPP14Parser.RULE_typespecifierseq);
		try {
			this.state = 1522;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,149,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1515;
				this.typespecifier();
				this.state = 1517;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,148,this._ctx) ) {
				case 1:
					{
					this.state = 1516;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1519;
				this.typespecifier();
				this.state = 1520;
				this.typespecifierseq();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public trailingtypespecifierseq(): TrailingtypespecifierseqContext {
		let _localctx: TrailingtypespecifierseqContext = new TrailingtypespecifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, CPP14Parser.RULE_trailingtypespecifierseq);
		try {
			this.state = 1531;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,151,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1524;
				this.trailingtypespecifier();
				this.state = 1526;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,150,this._ctx) ) {
				case 1:
					{
					this.state = 1525;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1528;
				this.trailingtypespecifier();
				this.state = 1529;
				this.trailingtypespecifierseq();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public simpletypespecifier(): SimpletypespecifierContext {
		let _localctx: SimpletypespecifierContext = new SimpletypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, CPP14Parser.RULE_simpletypespecifier);
		try {
			this.state = 1560;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,154,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1534;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,152,this._ctx) ) {
				case 1:
					{
					this.state = 1533;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 1536;
				this.typename();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1537;
				this.nestednamespecifier(0);
				this.state = 1538;
				this.match(CPP14Parser.Template);
				this.state = 1539;
				this.simpletemplateid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1541;
				this.match(CPP14Parser.Char);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1542;
				this.match(CPP14Parser.Char16);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1543;
				this.match(CPP14Parser.Char32);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1544;
				this.match(CPP14Parser.Wchar);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1545;
				this.match(CPP14Parser.Bool);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1546;
				this.match(CPP14Parser.Short);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1547;
				this.match(CPP14Parser.Int);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1548;
				this.match(CPP14Parser.Long);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1549;
				this.match(CPP14Parser.Signed);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1550;
				this.match(CPP14Parser.Unsigned);
				this.state = 1552;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,153,this._ctx) ) {
				case 1:
					{
					this.state = 1551;
					this.simpletypespecifier();
					}
					break;
				}
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1554;
				this.match(CPP14Parser.Float);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1555;
				this.match(CPP14Parser.Double);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1556;
				this.match(CPP14Parser.Void);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1557;
				this.match(CPP14Parser.Auto);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1558;
				this.decltypespecifier();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1559;
				this.match(CPP14Parser.File);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typename(): TypenameContext {
		let _localctx: TypenameContext = new TypenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, CPP14Parser.RULE_typename);
		try {
			this.state = 1566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,155,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1562;
				this.myclassname();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1563;
				this.enumname();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1564;
				this.typedefname();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1565;
				this.simpletemplateid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public decltypespecifier(): DecltypespecifierContext {
		let _localctx: DecltypespecifierContext = new DecltypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, CPP14Parser.RULE_decltypespecifier);
		try {
			this.state = 1577;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,156,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1568;
				this.match(CPP14Parser.Decltype);
				this.state = 1569;
				this.match(CPP14Parser.LeftParen);
				this.state = 1570;
				this.expression(0);
				this.state = 1571;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1573;
				this.match(CPP14Parser.Decltype);
				this.state = 1574;
				this.match(CPP14Parser.LeftParen);
				this.state = 1575;
				this.match(CPP14Parser.Auto);
				this.state = 1576;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elaboratedtypespecifier(): ElaboratedtypespecifierContext {
		let _localctx: ElaboratedtypespecifierContext = new ElaboratedtypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, CPP14Parser.RULE_elaboratedtypespecifier);
		let _la: number;
		try {
			this.state = 1603;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,161,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1579;
				this.classkey();
				this.state = 1581;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1580;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1584;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,158,this._ctx) ) {
				case 1:
					{
					this.state = 1583;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 1586;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1588;
				this.classkey();
				this.state = 1589;
				this.simpletemplateid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1591;
				this.classkey();
				this.state = 1592;
				this.nestednamespecifier(0);
				this.state = 1594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Template) {
					{
					this.state = 1593;
					this.match(CPP14Parser.Template);
					}
				}

				this.state = 1596;
				this.simpletemplateid();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1598;
				this.match(CPP14Parser.Enum);
				this.state = 1600;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,160,this._ctx) ) {
				case 1:
					{
					this.state = 1599;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 1602;
				this.match(CPP14Parser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumname(): EnumnameContext {
		let _localctx: EnumnameContext = new EnumnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, CPP14Parser.RULE_enumname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1605;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumspecifier(): EnumspecifierContext {
		let _localctx: EnumspecifierContext = new EnumspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, CPP14Parser.RULE_enumspecifier);
		let _la: number;
		try {
			this.state = 1620;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,163,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1607;
				this.enumhead();
				this.state = 1608;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Identifier) {
					{
					this.state = 1609;
					this.enumeratorlist(0);
					}
				}

				this.state = 1612;
				this.match(CPP14Parser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1614;
				this.enumhead();
				this.state = 1615;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1616;
				this.enumeratorlist(0);
				this.state = 1617;
				this.match(CPP14Parser.Comma);
				this.state = 1618;
				this.match(CPP14Parser.RightBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumhead(): EnumheadContext {
		let _localctx: EnumheadContext = new EnumheadContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, CPP14Parser.RULE_enumhead);
		let _la: number;
		try {
			this.state = 1641;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,169,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1622;
				this.enumkey();
				this.state = 1624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1623;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Identifier) {
					{
					this.state = 1626;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 1630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Colon) {
					{
					this.state = 1629;
					this.enumbase();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1632;
				this.enumkey();
				this.state = 1634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 1633;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1636;
				this.nestednamespecifier(0);
				this.state = 1637;
				this.match(CPP14Parser.Identifier);
				this.state = 1639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Colon) {
					{
					this.state = 1638;
					this.enumbase();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public opaqueenumdeclaration(): OpaqueenumdeclarationContext {
		let _localctx: OpaqueenumdeclarationContext = new OpaqueenumdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, CPP14Parser.RULE_opaqueenumdeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1643;
			this.enumkey();
			this.state = 1645;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
				{
				this.state = 1644;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1647;
			this.match(CPP14Parser.Identifier);
			this.state = 1649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Colon) {
				{
				this.state = 1648;
				this.enumbase();
				}
			}

			this.state = 1651;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumkey(): EnumkeyContext {
		let _localctx: EnumkeyContext = new EnumkeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, CPP14Parser.RULE_enumkey);
		try {
			this.state = 1658;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,172,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1653;
				this.match(CPP14Parser.Enum);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1654;
				this.match(CPP14Parser.Enum);
				this.state = 1655;
				this.match(CPP14Parser.Class);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1656;
				this.match(CPP14Parser.Enum);
				this.state = 1657;
				this.match(CPP14Parser.Struct);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumbase(): EnumbaseContext {
		let _localctx: EnumbaseContext = new EnumbaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, CPP14Parser.RULE_enumbase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1660;
			this.match(CPP14Parser.Colon);
			this.state = 1661;
			this.typespecifierseq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public enumeratorlist(): EnumeratorlistContext;
	public enumeratorlist(_p: number): EnumeratorlistContext;
	@RuleVersion(0)
	public enumeratorlist(_p?: number): EnumeratorlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EnumeratorlistContext = new EnumeratorlistContext(this._ctx, _parentState);
		let _prevctx: EnumeratorlistContext = _localctx;
		let _startState: number = 226;
		this.enterRecursionRule(_localctx, 226, CPP14Parser.RULE_enumeratorlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1664;
			this.enumeratordefinition();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1671;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,173,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new EnumeratorlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_enumeratorlist);
					this.state = 1666;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 1667;
					this.match(CPP14Parser.Comma);
					this.state = 1668;
					this.enumeratordefinition();
					}
					} 
				}
				this.state = 1673;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,173,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumeratordefinition(): EnumeratordefinitionContext {
		let _localctx: EnumeratordefinitionContext = new EnumeratordefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, CPP14Parser.RULE_enumeratordefinition);
		try {
			this.state = 1679;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,174,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1674;
				this.enumerator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1675;
				this.enumerator();
				this.state = 1676;
				this.match(CPP14Parser.Assign);
				this.state = 1677;
				this.constantexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumerator(): EnumeratorContext {
		let _localctx: EnumeratorContext = new EnumeratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, CPP14Parser.RULE_enumerator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1681;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public namespacename(): NamespacenameContext {
		let _localctx: NamespacenameContext = new NamespacenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, CPP14Parser.RULE_namespacename);
		try {
			this.state = 1685;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,175,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1683;
				this.originalnamespacename();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1684;
				this.namespacealias();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public originalnamespacename(): OriginalnamespacenameContext {
		let _localctx: OriginalnamespacenameContext = new OriginalnamespacenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, CPP14Parser.RULE_originalnamespacename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1687;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public namespacedefinition(): NamespacedefinitionContext {
		let _localctx: NamespacedefinitionContext = new NamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, CPP14Parser.RULE_namespacedefinition);
		try {
			this.state = 1691;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,176,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1689;
				this.namednamespacedefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1690;
				this.unnamednamespacedefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public namednamespacedefinition(): NamednamespacedefinitionContext {
		let _localctx: NamednamespacedefinitionContext = new NamednamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, CPP14Parser.RULE_namednamespacedefinition);
		try {
			this.state = 1695;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,177,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1693;
				this.originalnamespacedefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1694;
				this.extensionnamespacedefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public originalnamespacedefinition(): OriginalnamespacedefinitionContext {
		let _localctx: OriginalnamespacedefinitionContext = new OriginalnamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, CPP14Parser.RULE_originalnamespacedefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1698;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Inline) {
				{
				this.state = 1697;
				this.match(CPP14Parser.Inline);
				}
			}

			this.state = 1700;
			this.match(CPP14Parser.Namespace);
			this.state = 1701;
			this.match(CPP14Parser.Identifier);
			this.state = 1702;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1703;
			this.namespacebody();
			this.state = 1704;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public extensionnamespacedefinition(): ExtensionnamespacedefinitionContext {
		let _localctx: ExtensionnamespacedefinitionContext = new ExtensionnamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, CPP14Parser.RULE_extensionnamespacedefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Inline) {
				{
				this.state = 1706;
				this.match(CPP14Parser.Inline);
				}
			}

			this.state = 1709;
			this.match(CPP14Parser.Namespace);
			this.state = 1710;
			this.originalnamespacename();
			this.state = 1711;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1712;
			this.namespacebody();
			this.state = 1713;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unnamednamespacedefinition(): UnnamednamespacedefinitionContext {
		let _localctx: UnnamednamespacedefinitionContext = new UnnamednamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, CPP14Parser.RULE_unnamednamespacedefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Inline) {
				{
				this.state = 1715;
				this.match(CPP14Parser.Inline);
				}
			}

			this.state = 1718;
			this.match(CPP14Parser.Namespace);
			this.state = 1719;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1720;
			this.namespacebody();
			this.state = 1721;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public namespacebody(): NamespacebodyContext {
		let _localctx: NamespacebodyContext = new NamespacebodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, CPP14Parser.RULE_namespacebody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
				{
				this.state = 1723;
				this.declarationseq(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public namespacealias(): NamespacealiasContext {
		let _localctx: NamespacealiasContext = new NamespacealiasContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, CPP14Parser.RULE_namespacealias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1726;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public namespacealiasdefinition(): NamespacealiasdefinitionContext {
		let _localctx: NamespacealiasdefinitionContext = new NamespacealiasdefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, CPP14Parser.RULE_namespacealiasdefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1728;
			this.match(CPP14Parser.Namespace);
			this.state = 1729;
			this.match(CPP14Parser.Identifier);
			this.state = 1730;
			this.match(CPP14Parser.Assign);
			this.state = 1731;
			this.qualifiednamespacespecifier();
			this.state = 1732;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
		let _localctx: QualifiednamespacespecifierContext = new QualifiednamespacespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, CPP14Parser.RULE_qualifiednamespacespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1735;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,182,this._ctx) ) {
			case 1:
				{
				this.state = 1734;
				this.nestednamespecifier(0);
				}
				break;
			}
			this.state = 1737;
			this.namespacename();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public usingdeclaration(): UsingdeclarationContext {
		let _localctx: UsingdeclarationContext = new UsingdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, CPP14Parser.RULE_usingdeclaration);
		let _la: number;
		try {
			this.state = 1752;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,184,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1739;
				this.match(CPP14Parser.Using);
				this.state = 1741;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Typename) {
					{
					this.state = 1740;
					this.match(CPP14Parser.Typename);
					}
				}

				this.state = 1743;
				this.nestednamespecifier(0);
				this.state = 1744;
				this.unqualifiedid();
				this.state = 1745;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1747;
				this.match(CPP14Parser.Using);
				this.state = 1748;
				this.match(CPP14Parser.Doublecolon);
				this.state = 1749;
				this.unqualifiedid();
				this.state = 1750;
				this.match(CPP14Parser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public usingdirective(): UsingdirectiveContext {
		let _localctx: UsingdirectiveContext = new UsingdirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, CPP14Parser.RULE_usingdirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
				{
				this.state = 1754;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1757;
			this.match(CPP14Parser.Using);
			this.state = 1758;
			this.match(CPP14Parser.Namespace);
			this.state = 1760;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,186,this._ctx) ) {
			case 1:
				{
				this.state = 1759;
				this.nestednamespecifier(0);
				}
				break;
			}
			this.state = 1762;
			this.namespacename();
			this.state = 1763;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public asmdefinition(): AsmdefinitionContext {
		let _localctx: AsmdefinitionContext = new AsmdefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, CPP14Parser.RULE_asmdefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1765;
			this.match(CPP14Parser.Asm);
			this.state = 1766;
			this.match(CPP14Parser.LeftParen);
			this.state = 1767;
			this.match(CPP14Parser.Stringliteral);
			this.state = 1768;
			this.match(CPP14Parser.RightParen);
			this.state = 1769;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public linkagespecification(): LinkagespecificationContext {
		let _localctx: LinkagespecificationContext = new LinkagespecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, CPP14Parser.RULE_linkagespecification);
		let _la: number;
		try {
			this.state = 1781;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,188,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1771;
				this.match(CPP14Parser.Extern);
				this.state = 1772;
				this.match(CPP14Parser.Stringliteral);
				this.state = 1773;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1775;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 1774;
					this.declarationseq(0);
					}
				}

				this.state = 1777;
				this.match(CPP14Parser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1778;
				this.match(CPP14Parser.Extern);
				this.state = 1779;
				this.match(CPP14Parser.Stringliteral);
				this.state = 1780;
				this.declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public attributespecifierseq(): AttributespecifierseqContext;
	public attributespecifierseq(_p: number): AttributespecifierseqContext;
	@RuleVersion(0)
	public attributespecifierseq(_p?: number): AttributespecifierseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AttributespecifierseqContext = new AttributespecifierseqContext(this._ctx, _parentState);
		let _prevctx: AttributespecifierseqContext = _localctx;
		let _startState: number = 262;
		this.enterRecursionRule(_localctx, 262, CPP14Parser.RULE_attributespecifierseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1784;
			this.attributespecifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1790;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,189,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AttributespecifierseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributespecifierseq);
					this.state = 1786;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 1787;
					this.attributespecifier();
					}
					} 
				}
				this.state = 1792;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,189,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public attributespecifier(): AttributespecifierContext {
		let _localctx: AttributespecifierContext = new AttributespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, CPP14Parser.RULE_attributespecifier);
		try {
			this.state = 1800;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1793;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1794;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1795;
				this.attributelist(0);
				this.state = 1796;
				this.match(CPP14Parser.RightBracket);
				this.state = 1797;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			case CPP14Parser.Alignas:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1799;
				this.alignmentspecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alignmentspecifier(): AlignmentspecifierContext {
		let _localctx: AlignmentspecifierContext = new AlignmentspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, CPP14Parser.RULE_alignmentspecifier);
		let _la: number;
		try {
			this.state = 1818;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,193,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1802;
				this.match(CPP14Parser.Alignas);
				this.state = 1803;
				this.match(CPP14Parser.LeftParen);
				this.state = 1804;
				this.typeid();
				this.state = 1806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Ellipsis) {
					{
					this.state = 1805;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				this.state = 1808;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1810;
				this.match(CPP14Parser.Alignas);
				this.state = 1811;
				this.match(CPP14Parser.LeftParen);
				this.state = 1812;
				this.constantexpression();
				this.state = 1814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Ellipsis) {
					{
					this.state = 1813;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				this.state = 1816;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public attributelist(): AttributelistContext;
	public attributelist(_p: number): AttributelistContext;
	@RuleVersion(0)
	public attributelist(_p?: number): AttributelistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AttributelistContext = new AttributelistContext(this._ctx, _parentState);
		let _prevctx: AttributelistContext = _localctx;
		let _startState: number = 268;
		this.enterRecursionRule(_localctx, 268, CPP14Parser.RULE_attributelist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1827;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,195,this._ctx) ) {
			case 1:
				{
				this.state = 1822;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,194,this._ctx) ) {
				case 1:
					{
					this.state = 1821;
					this.attribute();
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 1824;
				this.attribute();
				this.state = 1825;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1841;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,198,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 1839;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,197,this._ctx) ) {
					case 1:
						{
						_localctx = new AttributelistContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributelist);
						this.state = 1829;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 1830;
						this.match(CPP14Parser.Comma);
						this.state = 1832;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,196,this._ctx) ) {
						case 1:
							{
							this.state = 1831;
							this.attribute();
							}
							break;
						}
						}
						break;

					case 2:
						{
						_localctx = new AttributelistContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributelist);
						this.state = 1834;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 1835;
						this.match(CPP14Parser.Comma);
						this.state = 1836;
						this.attribute();
						this.state = 1837;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					} 
				}
				this.state = 1843;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,198,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, CPP14Parser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1844;
			this.attributetoken();
			this.state = 1846;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,199,this._ctx) ) {
			case 1:
				{
				this.state = 1845;
				this.attributeargumentclause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public attributetoken(): AttributetokenContext {
		let _localctx: AttributetokenContext = new AttributetokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, CPP14Parser.RULE_attributetoken);
		try {
			this.state = 1850;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,200,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1848;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1849;
				this.attributescopedtoken();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public attributescopedtoken(): AttributescopedtokenContext {
		let _localctx: AttributescopedtokenContext = new AttributescopedtokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, CPP14Parser.RULE_attributescopedtoken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1852;
			this.attributenamespace();
			this.state = 1853;
			this.match(CPP14Parser.Doublecolon);
			this.state = 1854;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public attributenamespace(): AttributenamespaceContext {
		let _localctx: AttributenamespaceContext = new AttributenamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, CPP14Parser.RULE_attributenamespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1856;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public attributeargumentclause(): AttributeargumentclauseContext {
		let _localctx: AttributeargumentclauseContext = new AttributeargumentclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, CPP14Parser.RULE_attributeargumentclause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1858;
			this.match(CPP14Parser.LeftParen);
			this.state = 1859;
			this.balancedtokenseq(0);
			this.state = 1860;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public balancedtokenseq(): BalancedtokenseqContext;
	public balancedtokenseq(_p: number): BalancedtokenseqContext;
	@RuleVersion(0)
	public balancedtokenseq(_p?: number): BalancedtokenseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BalancedtokenseqContext = new BalancedtokenseqContext(this._ctx, _parentState);
		let _prevctx: BalancedtokenseqContext = _localctx;
		let _startState: number = 280;
		this.enterRecursionRule(_localctx, 280, CPP14Parser.RULE_balancedtokenseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1864;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,201,this._ctx) ) {
			case 1:
				{
				this.state = 1863;
				this.balancedtoken();
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1870;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,202,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new BalancedtokenseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_balancedtokenseq);
					this.state = 1866;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 1867;
					this.balancedtoken();
					}
					} 
				}
				this.state = 1872;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,202,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public balancedtoken(): BalancedtokenContext {
		let _localctx: BalancedtokenContext = new BalancedtokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, CPP14Parser.RULE_balancedtoken);
		try {
			this.state = 1885;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1873;
				this.match(CPP14Parser.LeftParen);
				this.state = 1874;
				this.balancedtokenseq(0);
				this.state = 1875;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1877;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1878;
				this.balancedtokenseq(0);
				this.state = 1879;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1881;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1882;
				this.balancedtokenseq(0);
				this.state = 1883;
				this.match(CPP14Parser.RightBrace);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initdeclaratorlist(): InitdeclaratorlistContext {
		let _localctx: InitdeclaratorlistContext = new InitdeclaratorlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, CPP14Parser.RULE_initdeclaratorlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1887;
			this.initdeclarator();
			this.state = 1892;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CPP14Parser.Comma) {
				{
				{
				this.state = 1888;
				this.match(CPP14Parser.Comma);
				this.state = 1889;
				this.initdeclarator();
				}
				}
				this.state = 1894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initdeclarator(): InitdeclaratorContext {
		let _localctx: InitdeclaratorContext = new InitdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, CPP14Parser.RULE_initdeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1895;
			this.declarator();
			this.state = 1897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CPP14Parser.LeftParen - 78)) | (1 << (CPP14Parser.LeftBrace - 78)) | (1 << (CPP14Parser.Assign - 78)))) !== 0)) {
				{
				this.state = 1896;
				this.initializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, CPP14Parser.RULE_declarator);
		try {
			this.state = 1904;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,206,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1899;
				this.ptrdeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1900;
				this.noptrdeclarator(0);
				this.state = 1901;
				this.parametersandqualifiers();
				this.state = 1902;
				this.trailingreturntype();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ptrdeclarator(): PtrdeclaratorContext {
		let _localctx: PtrdeclaratorContext = new PtrdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, CPP14Parser.RULE_ptrdeclarator);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1909;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,207,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1906;
					this.ptroperator();
					}
					} 
				}
				this.state = 1911;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,207,this._ctx);
			}
			this.state = 1912;
			this.noptrdeclarator(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noptrdeclarator(): NoptrdeclaratorContext;
	public noptrdeclarator(_p: number): NoptrdeclaratorContext;
	@RuleVersion(0)
	public noptrdeclarator(_p?: number): NoptrdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrdeclaratorContext = new NoptrdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrdeclaratorContext = _localctx;
		let _startState: number = 292;
		this.enterRecursionRule(_localctx, 292, CPP14Parser.RULE_noptrdeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1923;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Decltype:
			case CPP14Parser.Operator:
			case CPP14Parser.Tilde:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				{
				this.state = 1915;
				this.declaratorid();
				this.state = 1917;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,208,this._ctx) ) {
				case 1:
					{
					this.state = 1916;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case CPP14Parser.LeftParen:
				{
				this.state = 1919;
				this.match(CPP14Parser.LeftParen);
				this.state = 1920;
				this.ptrdeclarator();
				this.state = 1921;
				this.match(CPP14Parser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1938;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,213,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 1936;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,212,this._ctx) ) {
					case 1:
						{
						_localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrdeclarator);
						this.state = 1925;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 1926;
						this.parametersandqualifiers();
						}
						break;

					case 2:
						{
						_localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrdeclarator);
						this.state = 1927;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 1928;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1930;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CPP14Parser.Typeid - 68)) | (1 << (CPP14Parser.Typename - 68)) | (1 << (CPP14Parser.Unsigned - 68)) | (1 << (CPP14Parser.Void - 68)) | (1 << (CPP14Parser.Wchar - 68)) | (1 << (CPP14Parser.LeftParen - 68)) | (1 << (CPP14Parser.LeftBracket - 68)) | (1 << (CPP14Parser.Plus - 68)) | (1 << (CPP14Parser.Minus - 68)) | (1 << (CPP14Parser.Star - 68)) | (1 << (CPP14Parser.And - 68)) | (1 << (CPP14Parser.Or - 68)) | (1 << (CPP14Parser.Tilde - 68)) | (1 << (CPP14Parser.Not - 68)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
							{
							this.state = 1929;
							this.constantexpression();
							}
						}

						this.state = 1932;
						this.match(CPP14Parser.RightBracket);
						this.state = 1934;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,211,this._ctx) ) {
						case 1:
							{
							this.state = 1933;
							this.attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					} 
				}
				this.state = 1940;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,213,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parametersandqualifiers(): ParametersandqualifiersContext {
		let _localctx: ParametersandqualifiersContext = new ParametersandqualifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, CPP14Parser.RULE_parametersandqualifiers);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1941;
			this.match(CPP14Parser.LeftParen);
			this.state = 1942;
			this.parameterdeclarationclause();
			this.state = 1943;
			this.match(CPP14Parser.RightParen);
			this.state = 1945;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,214,this._ctx) ) {
			case 1:
				{
				this.state = 1944;
				this.cvqualifierseq();
				}
				break;
			}
			this.state = 1948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,215,this._ctx) ) {
			case 1:
				{
				this.state = 1947;
				this.refqualifier();
				}
				break;
			}
			this.state = 1951;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,216,this._ctx) ) {
			case 1:
				{
				this.state = 1950;
				this.exceptionspecification();
				}
				break;
			}
			this.state = 1954;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,217,this._ctx) ) {
			case 1:
				{
				this.state = 1953;
				this.attributespecifierseq(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public trailingreturntype(): TrailingreturntypeContext {
		let _localctx: TrailingreturntypeContext = new TrailingreturntypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, CPP14Parser.RULE_trailingreturntype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1956;
			this.match(CPP14Parser.Arrow);
			this.state = 1957;
			this.trailingtypespecifierseq();
			this.state = 1959;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,218,this._ctx) ) {
			case 1:
				{
				this.state = 1958;
				this.abstractdeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ptroperator(): PtroperatorContext {
		let _localctx: PtroperatorContext = new PtroperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, CPP14Parser.RULE_ptroperator);
		try {
			this.state = 1984;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Star:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1961;
				this.match(CPP14Parser.Star);
				this.state = 1963;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,219,this._ctx) ) {
				case 1:
					{
					this.state = 1962;
					this.attributespecifierseq(0);
					}
					break;
				}
				this.state = 1966;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,220,this._ctx) ) {
				case 1:
					{
					this.state = 1965;
					this.cvqualifierseq();
					}
					break;
				}
				}
				break;
			case CPP14Parser.And:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1968;
				this.match(CPP14Parser.And);
				this.state = 1970;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,221,this._ctx) ) {
				case 1:
					{
					this.state = 1969;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case CPP14Parser.AndAnd:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1972;
				this.match(CPP14Parser.AndAnd);
				this.state = 1974;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,222,this._ctx) ) {
				case 1:
					{
					this.state = 1973;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1976;
				this.nestednamespecifier(0);
				this.state = 1977;
				this.match(CPP14Parser.Star);
				this.state = 1979;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,223,this._ctx) ) {
				case 1:
					{
					this.state = 1978;
					this.attributespecifierseq(0);
					}
					break;
				}
				this.state = 1982;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,224,this._ctx) ) {
				case 1:
					{
					this.state = 1981;
					this.cvqualifierseq();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cvqualifierseq(): CvqualifierseqContext {
		let _localctx: CvqualifierseqContext = new CvqualifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, CPP14Parser.RULE_cvqualifierseq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1986;
			this.cvqualifier();
			this.state = 1988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,226,this._ctx) ) {
			case 1:
				{
				this.state = 1987;
				this.cvqualifierseq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cvqualifier(): CvqualifierContext {
		let _localctx: CvqualifierContext = new CvqualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, CPP14Parser.RULE_cvqualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1990;
			_la = this._input.LA(1);
			if ( !(_la===CPP14Parser.Const || _la===CPP14Parser.Volatile) ) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public refqualifier(): RefqualifierContext {
		let _localctx: RefqualifierContext = new RefqualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, CPP14Parser.RULE_refqualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1992;
			_la = this._input.LA(1);
			if ( !(_la===CPP14Parser.And || _la===CPP14Parser.AndAnd) ) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declaratorid(): DeclaratoridContext {
		let _localctx: DeclaratoridContext = new DeclaratoridContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, CPP14Parser.RULE_declaratorid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1995;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Ellipsis) {
				{
				this.state = 1994;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1997;
			this.idexpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeid(): TypeidContext {
		let _localctx: TypeidContext = new TypeidContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, CPP14Parser.RULE_typeid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1999;
			this.typespecifierseq();
			this.state = 2001;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,228,this._ctx) ) {
			case 1:
				{
				this.state = 2000;
				this.abstractdeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public abstractdeclarator(): AbstractdeclaratorContext {
		let _localctx: AbstractdeclaratorContext = new AbstractdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, CPP14Parser.RULE_abstractdeclarator);
		try {
			this.state = 2011;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,230,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2003;
				this.ptrabstractdeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2005;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,229,this._ctx) ) {
				case 1:
					{
					this.state = 2004;
					this.noptrabstractdeclarator(0);
					}
					break;
				}
				this.state = 2007;
				this.parametersandqualifiers();
				this.state = 2008;
				this.trailingreturntype();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2010;
				this.abstractpackdeclarator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext {
		let _localctx: PtrabstractdeclaratorContext = new PtrabstractdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, CPP14Parser.RULE_ptrabstractdeclarator);
		try {
			this.state = 2018;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2013;
				this.noptrabstractdeclarator(0);
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2014;
				this.ptroperator();
				this.state = 2016;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,231,this._ctx) ) {
				case 1:
					{
					this.state = 2015;
					this.ptrabstractdeclarator();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext;
	public noptrabstractdeclarator(_p: number): NoptrabstractdeclaratorContext;
	@RuleVersion(0)
	public noptrabstractdeclarator(_p?: number): NoptrabstractdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrabstractdeclaratorContext = new NoptrabstractdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrabstractdeclaratorContext = _localctx;
		let _startState: number = 314;
		this.enterRecursionRule(_localctx, 314, CPP14Parser.RULE_noptrabstractdeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2034;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,235,this._ctx) ) {
			case 1:
				{
				this.state = 2021;
				this.parametersandqualifiers();
				}
				break;

			case 2:
				{
				this.state = 2022;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2024;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CPP14Parser.Typeid - 68)) | (1 << (CPP14Parser.Typename - 68)) | (1 << (CPP14Parser.Unsigned - 68)) | (1 << (CPP14Parser.Void - 68)) | (1 << (CPP14Parser.Wchar - 68)) | (1 << (CPP14Parser.LeftParen - 68)) | (1 << (CPP14Parser.LeftBracket - 68)) | (1 << (CPP14Parser.Plus - 68)) | (1 << (CPP14Parser.Minus - 68)) | (1 << (CPP14Parser.Star - 68)) | (1 << (CPP14Parser.And - 68)) | (1 << (CPP14Parser.Or - 68)) | (1 << (CPP14Parser.Tilde - 68)) | (1 << (CPP14Parser.Not - 68)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 2023;
					this.constantexpression();
					}
				}

				this.state = 2026;
				this.match(CPP14Parser.RightBracket);
				this.state = 2028;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,234,this._ctx) ) {
				case 1:
					{
					this.state = 2027;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 2030;
				this.match(CPP14Parser.LeftParen);
				this.state = 2031;
				this.ptrabstractdeclarator();
				this.state = 2032;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2049;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,239,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 2047;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,238,this._ctx) ) {
					case 1:
						{
						_localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
						this.state = 2036;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 2037;
						this.parametersandqualifiers();
						}
						break;

					case 2:
						{
						_localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
						this.state = 2038;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 2039;
						this.match(CPP14Parser.LeftBracket);
						this.state = 2041;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CPP14Parser.Typeid - 68)) | (1 << (CPP14Parser.Typename - 68)) | (1 << (CPP14Parser.Unsigned - 68)) | (1 << (CPP14Parser.Void - 68)) | (1 << (CPP14Parser.Wchar - 68)) | (1 << (CPP14Parser.LeftParen - 68)) | (1 << (CPP14Parser.LeftBracket - 68)) | (1 << (CPP14Parser.Plus - 68)) | (1 << (CPP14Parser.Minus - 68)) | (1 << (CPP14Parser.Star - 68)) | (1 << (CPP14Parser.And - 68)) | (1 << (CPP14Parser.Or - 68)) | (1 << (CPP14Parser.Tilde - 68)) | (1 << (CPP14Parser.Not - 68)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
							{
							this.state = 2040;
							this.constantexpression();
							}
						}

						this.state = 2043;
						this.match(CPP14Parser.RightBracket);
						this.state = 2045;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,237,this._ctx) ) {
						case 1:
							{
							this.state = 2044;
							this.attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					} 
				}
				this.state = 2051;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,239,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public abstractpackdeclarator(): AbstractpackdeclaratorContext {
		let _localctx: AbstractpackdeclaratorContext = new AbstractpackdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, CPP14Parser.RULE_abstractpackdeclarator);
		try {
			this.state = 2056;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Ellipsis:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2052;
				this.noptrabstractpackdeclarator(0);
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2053;
				this.ptroperator();
				this.state = 2054;
				this.abstractpackdeclarator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext;
	public noptrabstractpackdeclarator(_p: number): NoptrabstractpackdeclaratorContext;
	@RuleVersion(0)
	public noptrabstractpackdeclarator(_p?: number): NoptrabstractpackdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrabstractpackdeclaratorContext = new NoptrabstractpackdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrabstractpackdeclaratorContext = _localctx;
		let _startState: number = 318;
		this.enterRecursionRule(_localctx, 318, CPP14Parser.RULE_noptrabstractpackdeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2059;
			this.match(CPP14Parser.Ellipsis);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2074;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,244,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 2072;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,243,this._ctx) ) {
					case 1:
						{
						_localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
						this.state = 2061;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 2062;
						this.parametersandqualifiers();
						}
						break;

					case 2:
						{
						_localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
						this.state = 2063;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 2064;
						this.match(CPP14Parser.LeftBracket);
						this.state = 2066;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CPP14Parser.Typeid - 68)) | (1 << (CPP14Parser.Typename - 68)) | (1 << (CPP14Parser.Unsigned - 68)) | (1 << (CPP14Parser.Void - 68)) | (1 << (CPP14Parser.Wchar - 68)) | (1 << (CPP14Parser.LeftParen - 68)) | (1 << (CPP14Parser.LeftBracket - 68)) | (1 << (CPP14Parser.Plus - 68)) | (1 << (CPP14Parser.Minus - 68)) | (1 << (CPP14Parser.Star - 68)) | (1 << (CPP14Parser.And - 68)) | (1 << (CPP14Parser.Or - 68)) | (1 << (CPP14Parser.Tilde - 68)) | (1 << (CPP14Parser.Not - 68)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
							{
							this.state = 2065;
							this.constantexpression();
							}
						}

						this.state = 2068;
						this.match(CPP14Parser.RightBracket);
						this.state = 2070;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,242,this._ctx) ) {
						case 1:
							{
							this.state = 2069;
							this.attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					} 
				}
				this.state = 2076;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,244,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parameterdeclarationclause(): ParameterdeclarationclauseContext {
		let _localctx: ParameterdeclarationclauseContext = new ParameterdeclarationclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, CPP14Parser.RULE_parameterdeclarationclause);
		let _la: number;
		try {
			this.state = 2087;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,247,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftBracket - 67)))) !== 0) || _la===CPP14Parser.Doublecolon || _la===CPP14Parser.Identifier) {
					{
					this.state = 2077;
					this.parameterdeclarationlist(0);
					}
				}

				this.state = 2081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Ellipsis) {
					{
					this.state = 2080;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2083;
				this.parameterdeclarationlist(0);
				this.state = 2084;
				this.match(CPP14Parser.Comma);
				this.state = 2085;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public parameterdeclarationlist(): ParameterdeclarationlistContext;
	public parameterdeclarationlist(_p: number): ParameterdeclarationlistContext;
	@RuleVersion(0)
	public parameterdeclarationlist(_p?: number): ParameterdeclarationlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ParameterdeclarationlistContext = new ParameterdeclarationlistContext(this._ctx, _parentState);
		let _prevctx: ParameterdeclarationlistContext = _localctx;
		let _startState: number = 322;
		this.enterRecursionRule(_localctx, 322, CPP14Parser.RULE_parameterdeclarationlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2090;
			this.parameterdeclaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2097;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,248,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ParameterdeclarationlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_parameterdeclarationlist);
					this.state = 2092;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2093;
					this.match(CPP14Parser.Comma);
					this.state = 2094;
					this.parameterdeclaration();
					}
					} 
				}
				this.state = 2099;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,248,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parameterdeclaration(): ParameterdeclarationContext {
		let _localctx: ParameterdeclarationContext = new ParameterdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, CPP14Parser.RULE_parameterdeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
				{
				this.state = 2100;
				this.attributespecifierseq(0);
				}
			}

			this.state = 2104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (CPP14Parser.Constexpr - 15)) | (1 << (CPP14Parser.Explicit - 15)) | (1 << (CPP14Parser.Extern - 15)) | (1 << (CPP14Parser.Friend - 15)) | (1 << (CPP14Parser.Inline - 15)) | (1 << (CPP14Parser.Mutable - 15)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (CPP14Parser.Register - 50)) | (1 << (CPP14Parser.Static - 50)) | (1 << (CPP14Parser.Thread_local - 50)) | (1 << (CPP14Parser.Typedef - 50)) | (1 << (CPP14Parser.Virtual - 50)))) !== 0)) {
				{
				this.state = 2103;
				this.declspecifierseqwithouttype();
				}
			}

			this.state = 2106;
			this.typespecifier();
			this.state = 2108;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,251,this._ctx) ) {
			case 1:
				{
				this.state = 2107;
				this.variableDeclaratorList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functiondefinition(): FunctiondefinitionContext {
		let _localctx: FunctiondefinitionContext = new FunctiondefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, CPP14Parser.RULE_functiondefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
				{
				this.state = 2110;
				this.attributespecifierseq(0);
				}
			}

			this.state = 2114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (CPP14Parser.Constexpr - 15)) | (1 << (CPP14Parser.Explicit - 15)) | (1 << (CPP14Parser.Extern - 15)) | (1 << (CPP14Parser.Friend - 15)) | (1 << (CPP14Parser.Inline - 15)) | (1 << (CPP14Parser.Mutable - 15)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (CPP14Parser.Register - 50)) | (1 << (CPP14Parser.Static - 50)) | (1 << (CPP14Parser.Thread_local - 50)) | (1 << (CPP14Parser.Typedef - 50)) | (1 << (CPP14Parser.Virtual - 50)))) !== 0)) {
				{
				this.state = 2113;
				this.declspecifierseqwithouttype();
				}
			}

			this.state = 2116;
			this.functionheader();
			this.state = 2118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Final || _la===CPP14Parser.Override) {
				{
				this.state = 2117;
				this.virtspecifierseq(0);
				}
			}

			this.state = 2120;
			this.functionbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionheader(): FunctionheaderContext {
		let _localctx: FunctionheaderContext = new FunctionheaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, CPP14Parser.RULE_functionheader);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,255,this._ctx) ) {
			case 1:
				{
				this.state = 2122;
				this.typespecifier();
				}
				break;
			}
			this.state = 2128;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,256,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2125;
					this.ptroperator();
					}
					} 
				}
				this.state = 2130;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,256,this._ctx);
			}
			this.state = 2131;
			this.functiondeclarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functiondeclarator(): FunctiondeclaratorContext {
		let _localctx: FunctiondeclaratorContext = new FunctiondeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, CPP14Parser.RULE_functiondeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2133;
			this.declaratorid();
			this.state = 2134;
			this.match(CPP14Parser.LeftParen);
			this.state = 2135;
			this.parameterdeclarationclause();
			this.state = 2136;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionbody(): FunctionbodyContext {
		let _localctx: FunctionbodyContext = new FunctionbodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, CPP14Parser.RULE_functionbody);
		let _la: number;
		try {
			this.state = 2149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,258,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Colon) {
					{
					this.state = 2138;
					this.ctorinitializer();
					}
				}

				this.state = 2141;
				this.compoundstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2142;
				this.functiontryblock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2143;
				this.match(CPP14Parser.Assign);
				this.state = 2144;
				this.match(CPP14Parser.Default);
				this.state = 2145;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2146;
				this.match(CPP14Parser.Assign);
				this.state = 2147;
				this.match(CPP14Parser.Delete);
				this.state = 2148;
				this.match(CPP14Parser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, CPP14Parser.RULE_initializer);
		try {
			this.state = 2156;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBrace:
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2151;
				this.braceorequalinitializer();
				}
				break;
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2152;
				this.match(CPP14Parser.LeftParen);
				this.state = 2153;
				this.expressionlist();
				this.state = 2154;
				this.match(CPP14Parser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public braceorequalinitializer(): BraceorequalinitializerContext {
		let _localctx: BraceorequalinitializerContext = new BraceorequalinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, CPP14Parser.RULE_braceorequalinitializer);
		try {
			this.state = 2161;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2158;
				this.match(CPP14Parser.Assign);
				this.state = 2159;
				this.initializerclause();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2160;
				this.bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initializerclause(): InitializerclauseContext {
		let _localctx: InitializerclauseContext = new InitializerclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, CPP14Parser.RULE_initializerclause);
		try {
			this.state = 2165;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Alignof:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Const_cast:
			case CPP14Parser.Decltype:
			case CPP14Parser.Delete:
			case CPP14Parser.Double:
			case CPP14Parser.File:
			case CPP14Parser.Dynamic_cast:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.New:
			case CPP14Parser.Noexcept:
			case CPP14Parser.Nullptr:
			case CPP14Parser.Operator:
			case CPP14Parser.Reinterpret_cast:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Sizeof:
			case CPP14Parser.Static_cast:
			case CPP14Parser.This:
			case CPP14Parser.Throw:
			case CPP14Parser.Typeid:
			case CPP14Parser.Typename:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Plus:
			case CPP14Parser.Minus:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Or:
			case CPP14Parser.Tilde:
			case CPP14Parser.Not:
			case CPP14Parser.PlusPlus:
			case CPP14Parser.MinusMinus:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
			case CPP14Parser.Integerliteral:
			case CPP14Parser.Characterliteral:
			case CPP14Parser.Floatingliteral:
			case CPP14Parser.Stringliteral:
			case CPP14Parser.Booleanliteral:
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2163;
				this.assignmentexpression();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2164;
				this.bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initializerlist(): InitializerlistContext {
		let _localctx: InitializerlistContext = new InitializerlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, CPP14Parser.RULE_initializerlist);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2167;
			this.initializerclause();
			this.state = 2172;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,262,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2168;
					this.match(CPP14Parser.Comma);
					this.state = 2169;
					this.initializerclause();
					}
					} 
				}
				this.state = 2174;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,262,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public bracedinitlist(): BracedinitlistContext {
		let _localctx: BracedinitlistContext = new BracedinitlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, CPP14Parser.RULE_bracedinitlist);
		let _la: number;
		try {
			this.state = 2184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,264,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2175;
				this.match(CPP14Parser.LeftBrace);
				this.state = 2176;
				this.initializerlist();
				this.state = 2178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Comma) {
					{
					this.state = 2177;
					this.match(CPP14Parser.Comma);
					}
				}

				this.state = 2180;
				this.match(CPP14Parser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2182;
				this.match(CPP14Parser.LeftBrace);
				this.state = 2183;
				this.match(CPP14Parser.RightBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public myclassname(): MyclassnameContext {
		let _localctx: MyclassnameContext = new MyclassnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, CPP14Parser.RULE_myclassname);
		try {
			this.state = 2188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,265,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2186;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2187;
				this.simpletemplateid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classspecifier(): ClassspecifierContext {
		let _localctx: ClassspecifierContext = new ClassspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, CPP14Parser.RULE_classspecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2190;
			this.classhead();
			this.state = 2191;
			this.classbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classbody(): ClassbodyContext {
		let _localctx: ClassbodyContext = new ClassbodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, CPP14Parser.RULE_classbody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2193;
			this.match(CPP14Parser.LeftBrace);
			this.state = 2195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
				{
				this.state = 2194;
				this.memberspecification();
				}
			}

			this.state = 2197;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classhead(): ClassheadContext {
		let _localctx: ClassheadContext = new ClassheadContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, CPP14Parser.RULE_classhead);
		let _la: number;
		try {
			this.state = 2220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,273,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2199;
				this.classkey();
				this.state = 2201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 2200;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2204;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,268,this._ctx) ) {
				case 1:
					{
					this.state = 2203;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 2206;
				this.classheadname();
				this.state = 2208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Final) {
					{
					this.state = 2207;
					this.classvirtspecifier();
					}
				}

				this.state = 2211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Colon) {
					{
					this.state = 2210;
					this.baseclause();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2213;
				this.classkey();
				this.state = 2215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 2214;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Colon) {
					{
					this.state = 2217;
					this.baseclause();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classheadname(): ClassheadnameContext {
		let _localctx: ClassheadnameContext = new ClassheadnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, CPP14Parser.RULE_classheadname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,274,this._ctx) ) {
			case 1:
				{
				this.state = 2222;
				this.nestednamespecifier(0);
				}
				break;
			}
			this.state = 2225;
			this.myclassname();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classvirtspecifier(): ClassvirtspecifierContext {
		let _localctx: ClassvirtspecifierContext = new ClassvirtspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, CPP14Parser.RULE_classvirtspecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2227;
			this.match(CPP14Parser.Final);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classkey(): ClasskeyContext {
		let _localctx: ClasskeyContext = new ClasskeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, CPP14Parser.RULE_classkey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2229;
			_la = this._input.LA(1);
			if ( !(_la===CPP14Parser.Class || _la===CPP14Parser.Struct || _la===CPP14Parser.Union) ) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public memberspecification(): MemberspecificationContext {
		let _localctx: MemberspecificationContext = new MemberspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, CPP14Parser.RULE_memberspecification);
		let _la: number;
		try {
			this.state = 2240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Alignas:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Constexpr:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.File:
			case CPP14Parser.Enum:
			case CPP14Parser.Explicit:
			case CPP14Parser.Extern:
			case CPP14Parser.Float:
			case CPP14Parser.Friend:
			case CPP14Parser.Inline:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Mutable:
			case CPP14Parser.Operator:
			case CPP14Parser.Register:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Static:
			case CPP14Parser.Static_assert:
			case CPP14Parser.Struct:
			case CPP14Parser.Template:
			case CPP14Parser.Thread_local:
			case CPP14Parser.Typedef:
			case CPP14Parser.Typename:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Using:
			case CPP14Parser.Virtual:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Tilde:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Semi:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2231;
				this.memberdeclaration();
				this.state = 2233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 2232;
					this.memberspecification();
					}
				}

				}
				break;
			case CPP14Parser.Private:
			case CPP14Parser.Protected:
			case CPP14Parser.Public:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2235;
				this.accessspecifier();
				this.state = 2236;
				this.match(CPP14Parser.Colon);
				this.state = 2238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 2237;
					this.memberspecification();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public memberdeclaration(): MemberdeclarationContext {
		let _localctx: MemberdeclarationContext = new MemberdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, CPP14Parser.RULE_memberdeclaration);
		try {
			this.state = 2249;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,278,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2242;
				this.membervariabledeclarationstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2243;
				this.functiondefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2244;
				this.usingdeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2245;
				this.static_assertdeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2246;
				this.templatedeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2247;
				this.aliasdeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2248;
				this.emptydeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public membervariabledeclarationstatement(): MembervariabledeclarationstatementContext {
		let _localctx: MembervariabledeclarationstatementContext = new MembervariabledeclarationstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, CPP14Parser.RULE_membervariabledeclarationstatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2251;
			this.membervariabledeclaration();
			this.state = 2252;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public membervariabledeclaration(): MembervariabledeclarationContext {
		let _localctx: MembervariabledeclarationContext = new MembervariabledeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, CPP14Parser.RULE_membervariabledeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
				{
				this.state = 2254;
				this.attributespecifierseq(0);
				}
			}

			this.state = 2258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (CPP14Parser.Constexpr - 15)) | (1 << (CPP14Parser.Explicit - 15)) | (1 << (CPP14Parser.Extern - 15)) | (1 << (CPP14Parser.Friend - 15)) | (1 << (CPP14Parser.Inline - 15)) | (1 << (CPP14Parser.Mutable - 15)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (CPP14Parser.Register - 50)) | (1 << (CPP14Parser.Static - 50)) | (1 << (CPP14Parser.Thread_local - 50)) | (1 << (CPP14Parser.Typedef - 50)) | (1 << (CPP14Parser.Virtual - 50)))) !== 0)) {
				{
				this.state = 2257;
				this.declspecifierseqwithouttype();
				}
			}

			this.state = 2260;
			this.typespecifier();
			this.state = 2264;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,281,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2261;
					this.ptroperator();
					}
					} 
				}
				this.state = 2266;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,281,this._ctx);
			}
			this.state = 2268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Alignas || _la===CPP14Parser.Decltype || _la===CPP14Parser.Operator || _la===CPP14Parser.LeftBracket || _la===CPP14Parser.Tilde || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.Colon - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Ellipsis - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
				{
				this.state = 2267;
				this.memberdeclaratorlist(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public memberdeclaratorlist(): MemberdeclaratorlistContext;
	public memberdeclaratorlist(_p: number): MemberdeclaratorlistContext;
	@RuleVersion(0)
	public memberdeclaratorlist(_p?: number): MemberdeclaratorlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MemberdeclaratorlistContext = new MemberdeclaratorlistContext(this._ctx, _parentState);
		let _prevctx: MemberdeclaratorlistContext = _localctx;
		let _startState: number = 366;
		this.enterRecursionRule(_localctx, 366, CPP14Parser.RULE_memberdeclaratorlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2271;
			this.memberdeclarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2278;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,283,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new MemberdeclaratorlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_memberdeclaratorlist);
					this.state = 2273;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2274;
					this.match(CPP14Parser.Comma);
					this.state = 2275;
					this.memberdeclarator();
					}
					} 
				}
				this.state = 2280;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,283,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public memberdeclarator(): MemberdeclaratorContext {
		let _localctx: MemberdeclaratorContext = new MemberdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, CPP14Parser.RULE_memberdeclarator);
		let _la: number;
		try {
			this.state = 2305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,290,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2281;
				this.declaratorid();
				this.state = 2283;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,284,this._ctx) ) {
				case 1:
					{
					this.state = 2282;
					this.virtspecifierseq(0);
					}
					break;
				}
				this.state = 2286;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,285,this._ctx) ) {
				case 1:
					{
					this.state = 2285;
					this.purespecifier();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2288;
				this.declaratorid();
				this.state = 2291;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,286,this._ctx) ) {
				case 1:
					{
					this.state = 2289;
					this.match(CPP14Parser.Assign);
					this.state = 2290;
					this.initializerclause();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2293;
				this.declaratorid();
				this.state = 2295;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,287,this._ctx) ) {
				case 1:
					{
					this.state = 2294;
					this.bracedinitlist();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Identifier) {
					{
					this.state = 2297;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 2300;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2303;
				this.match(CPP14Parser.Colon);
				this.state = 2304;
				this.constantexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public virtspecifierseq(): VirtspecifierseqContext;
	public virtspecifierseq(_p: number): VirtspecifierseqContext;
	@RuleVersion(0)
	public virtspecifierseq(_p?: number): VirtspecifierseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: VirtspecifierseqContext = new VirtspecifierseqContext(this._ctx, _parentState);
		let _prevctx: VirtspecifierseqContext = _localctx;
		let _startState: number = 370;
		this.enterRecursionRule(_localctx, 370, CPP14Parser.RULE_virtspecifierseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2308;
			this.virtspecifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2314;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,291,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new VirtspecifierseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_virtspecifierseq);
					this.state = 2310;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2311;
					this.virtspecifier();
					}
					} 
				}
				this.state = 2316;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,291,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public virtspecifier(): VirtspecifierContext {
		let _localctx: VirtspecifierContext = new VirtspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, CPP14Parser.RULE_virtspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2317;
			_la = this._input.LA(1);
			if ( !(_la===CPP14Parser.Final || _la===CPP14Parser.Override) ) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public purespecifier(): PurespecifierContext {
		let _localctx: PurespecifierContext = new PurespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, CPP14Parser.RULE_purespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2319;
			this.match(CPP14Parser.Assign);
			this.state = 2320;
			_localctx._val = this.match(CPP14Parser.Octalliteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public baseclause(): BaseclauseContext {
		let _localctx: BaseclauseContext = new BaseclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, CPP14Parser.RULE_baseclause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2322;
			this.match(CPP14Parser.Colon);
			this.state = 2323;
			this.basespecifierlist(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public basespecifierlist(): BasespecifierlistContext;
	public basespecifierlist(_p: number): BasespecifierlistContext;
	@RuleVersion(0)
	public basespecifierlist(_p?: number): BasespecifierlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BasespecifierlistContext = new BasespecifierlistContext(this._ctx, _parentState);
		let _prevctx: BasespecifierlistContext = _localctx;
		let _startState: number = 378;
		this.enterRecursionRule(_localctx, 378, CPP14Parser.RULE_basespecifierlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2326;
			this.basespecifier();
			this.state = 2328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,292,this._ctx) ) {
			case 1:
				{
				this.state = 2327;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2338;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,294,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new BasespecifierlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_basespecifierlist);
					this.state = 2330;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2331;
					this.match(CPP14Parser.Comma);
					this.state = 2332;
					this.basespecifier();
					this.state = 2334;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,293,this._ctx) ) {
					case 1:
						{
						this.state = 2333;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					} 
				}
				this.state = 2340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,294,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public basespecifier(): BasespecifierContext {
		let _localctx: BasespecifierContext = new BasespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, CPP14Parser.RULE_basespecifier);
		let _la: number;
		try {
			this.state = 2362;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,300,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 2341;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2344;
				this.basetypespecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 2345;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2348;
				this.match(CPP14Parser.Virtual);
				this.state = 2350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CPP14Parser.Private - 47)) | (1 << (CPP14Parser.Protected - 47)) | (1 << (CPP14Parser.Public - 47)))) !== 0)) {
					{
					this.state = 2349;
					this.accessspecifier();
					}
				}

				this.state = 2352;
				this.basetypespecifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 2353;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2356;
				this.accessspecifier();
				this.state = 2358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Virtual) {
					{
					this.state = 2357;
					this.match(CPP14Parser.Virtual);
					}
				}

				this.state = 2360;
				this.basetypespecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classordecltype(): ClassordecltypeContext {
		let _localctx: ClassordecltypeContext = new ClassordecltypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, CPP14Parser.RULE_classordecltype);
		try {
			this.state = 2369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,302,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2365;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,301,this._ctx) ) {
				case 1:
					{
					this.state = 2364;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 2367;
				this.myclassname();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2368;
				this.decltypespecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public basetypespecifier(): BasetypespecifierContext {
		let _localctx: BasetypespecifierContext = new BasetypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, CPP14Parser.RULE_basetypespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2371;
			this.classordecltype();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public accessspecifier(): AccessspecifierContext {
		let _localctx: AccessspecifierContext = new AccessspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, CPP14Parser.RULE_accessspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2373;
			_la = this._input.LA(1);
			if ( !(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CPP14Parser.Private - 47)) | (1 << (CPP14Parser.Protected - 47)) | (1 << (CPP14Parser.Public - 47)))) !== 0)) ) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public conversionfunctionid(): ConversionfunctionidContext {
		let _localctx: ConversionfunctionidContext = new ConversionfunctionidContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, CPP14Parser.RULE_conversionfunctionid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2375;
			this.match(CPP14Parser.Operator);
			this.state = 2376;
			this.conversiontypeid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public conversiontypeid(): ConversiontypeidContext {
		let _localctx: ConversiontypeidContext = new ConversiontypeidContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, CPP14Parser.RULE_conversiontypeid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2378;
			this.typespecifierseq();
			this.state = 2380;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,303,this._ctx) ) {
			case 1:
				{
				this.state = 2379;
				this.conversiondeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public conversiondeclarator(): ConversiondeclaratorContext {
		let _localctx: ConversiondeclaratorContext = new ConversiondeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, CPP14Parser.RULE_conversiondeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2382;
			this.ptroperator();
			this.state = 2384;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,304,this._ctx) ) {
			case 1:
				{
				this.state = 2383;
				this.conversiondeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ctorinitializer(): CtorinitializerContext {
		let _localctx: CtorinitializerContext = new CtorinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, CPP14Parser.RULE_ctorinitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2386;
			this.match(CPP14Parser.Colon);
			this.state = 2387;
			this.meminitializerlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public meminitializerlist(): MeminitializerlistContext {
		let _localctx: MeminitializerlistContext = new MeminitializerlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, CPP14Parser.RULE_meminitializerlist);
		let _la: number;
		try {
			this.state = 2400;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,307,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2389;
				this.meminitializer();
				this.state = 2391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Ellipsis) {
					{
					this.state = 2390;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2393;
				this.meminitializer();
				this.state = 2395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Ellipsis) {
					{
					this.state = 2394;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				this.state = 2397;
				this.match(CPP14Parser.Comma);
				this.state = 2398;
				this.meminitializerlist();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public meminitializer(): MeminitializerContext {
		let _localctx: MeminitializerContext = new MeminitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, CPP14Parser.RULE_meminitializer);
		let _la: number;
		try {
			this.state = 2412;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,309,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2402;
				this.meminitializerid();
				this.state = 2403;
				this.match(CPP14Parser.LeftParen);
				this.state = 2405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 2404;
					this.expressionlist();
					}
				}

				this.state = 2407;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2409;
				this.meminitializerid();
				this.state = 2410;
				this.bracedinitlist();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public meminitializerid(): MeminitializeridContext {
		let _localctx: MeminitializeridContext = new MeminitializeridContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, CPP14Parser.RULE_meminitializerid);
		try {
			this.state = 2416;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,310,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2414;
				this.classordecltype();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2415;
				this.match(CPP14Parser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public operatorfunctionid(): OperatorfunctionidContext {
		let _localctx: OperatorfunctionidContext = new OperatorfunctionidContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, CPP14Parser.RULE_operatorfunctionid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2418;
			this.match(CPP14Parser.Operator);
			this.state = 2419;
			this.operator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literaloperatorid(): LiteraloperatoridContext {
		let _localctx: LiteraloperatoridContext = new LiteraloperatoridContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, CPP14Parser.RULE_literaloperatorid);
		try {
			this.state = 2426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,311,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2421;
				this.match(CPP14Parser.Operator);
				this.state = 2422;
				this.match(CPP14Parser.Stringliteral);
				this.state = 2423;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2424;
				this.match(CPP14Parser.Operator);
				this.state = 2425;
				this.match(CPP14Parser.Userdefinedstringliteral);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public templatedeclaration(): TemplatedeclarationContext {
		let _localctx: TemplatedeclarationContext = new TemplatedeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, CPP14Parser.RULE_templatedeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2428;
			this.match(CPP14Parser.Template);
			this.state = 2429;
			this.match(CPP14Parser.Less);
			this.state = 2430;
			this.templateparameterlist(0);
			this.state = 2431;
			this.match(CPP14Parser.Greater);
			this.state = 2432;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public templateparameterlist(): TemplateparameterlistContext;
	public templateparameterlist(_p: number): TemplateparameterlistContext;
	@RuleVersion(0)
	public templateparameterlist(_p?: number): TemplateparameterlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TemplateparameterlistContext = new TemplateparameterlistContext(this._ctx, _parentState);
		let _prevctx: TemplateparameterlistContext = _localctx;
		let _startState: number = 408;
		this.enterRecursionRule(_localctx, 408, CPP14Parser.RULE_templateparameterlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2435;
			this.templateparameter();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2442;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,312,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TemplateparameterlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_templateparameterlist);
					this.state = 2437;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2438;
					this.match(CPP14Parser.Comma);
					this.state = 2439;
					this.templateparameter();
					}
					} 
				}
				this.state = 2444;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,312,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public templateparameter(): TemplateparameterContext {
		let _localctx: TemplateparameterContext = new TemplateparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, CPP14Parser.RULE_templateparameter);
		try {
			this.state = 2447;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,313,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2445;
				this.typeparameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2446;
				this.parameterdeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeparameter(): TypeparameterContext {
		let _localctx: TypeparameterContext = new TypeparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, CPP14Parser.RULE_typeparameter);
		let _la: number;
		try {
			this.state = 2497;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,323,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2449;
				this.match(CPP14Parser.Class);
				this.state = 2451;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,314,this._ctx) ) {
				case 1:
					{
					this.state = 2450;
					this.match(CPP14Parser.Ellipsis);
					}
					break;
				}
				this.state = 2454;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,315,this._ctx) ) {
				case 1:
					{
					this.state = 2453;
					this.match(CPP14Parser.Identifier);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2456;
				this.match(CPP14Parser.Class);
				this.state = 2458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Identifier) {
					{
					this.state = 2457;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2460;
				this.match(CPP14Parser.Assign);
				this.state = 2461;
				this.typeid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2462;
				this.match(CPP14Parser.Typename);
				this.state = 2464;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,317,this._ctx) ) {
				case 1:
					{
					this.state = 2463;
					this.match(CPP14Parser.Ellipsis);
					}
					break;
				}
				this.state = 2467;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,318,this._ctx) ) {
				case 1:
					{
					this.state = 2466;
					this.match(CPP14Parser.Identifier);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2469;
				this.match(CPP14Parser.Typename);
				this.state = 2471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Identifier) {
					{
					this.state = 2470;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2473;
				this.match(CPP14Parser.Assign);
				this.state = 2474;
				this.typeid();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2475;
				this.match(CPP14Parser.Template);
				this.state = 2476;
				this.match(CPP14Parser.Less);
				this.state = 2477;
				this.templateparameterlist(0);
				this.state = 2478;
				this.match(CPP14Parser.Greater);
				this.state = 2479;
				this.match(CPP14Parser.Class);
				this.state = 2481;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,320,this._ctx) ) {
				case 1:
					{
					this.state = 2480;
					this.match(CPP14Parser.Ellipsis);
					}
					break;
				}
				this.state = 2484;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,321,this._ctx) ) {
				case 1:
					{
					this.state = 2483;
					this.match(CPP14Parser.Identifier);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2486;
				this.match(CPP14Parser.Template);
				this.state = 2487;
				this.match(CPP14Parser.Less);
				this.state = 2488;
				this.templateparameterlist(0);
				this.state = 2489;
				this.match(CPP14Parser.Greater);
				this.state = 2490;
				this.match(CPP14Parser.Class);
				this.state = 2492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Identifier) {
					{
					this.state = 2491;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2494;
				this.match(CPP14Parser.Assign);
				this.state = 2495;
				this.idexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public simpletemplateid(): SimpletemplateidContext {
		let _localctx: SimpletemplateidContext = new SimpletemplateidContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, CPP14Parser.RULE_simpletemplateid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2499;
			this.templatename();
			this.state = 2500;
			this.match(CPP14Parser.Less);
			this.state = 2502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CPP14Parser.Typeid - 68)) | (1 << (CPP14Parser.Typename - 68)) | (1 << (CPP14Parser.Union - 68)) | (1 << (CPP14Parser.Unsigned - 68)) | (1 << (CPP14Parser.Void - 68)) | (1 << (CPP14Parser.Volatile - 68)) | (1 << (CPP14Parser.Wchar - 68)) | (1 << (CPP14Parser.LeftParen - 68)) | (1 << (CPP14Parser.LeftBracket - 68)) | (1 << (CPP14Parser.Plus - 68)) | (1 << (CPP14Parser.Minus - 68)) | (1 << (CPP14Parser.Star - 68)) | (1 << (CPP14Parser.And - 68)) | (1 << (CPP14Parser.Or - 68)) | (1 << (CPP14Parser.Tilde - 68)) | (1 << (CPP14Parser.Not - 68)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
				{
				this.state = 2501;
				this.templateargumentlist(0);
				}
			}

			this.state = 2504;
			this.match(CPP14Parser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public templateid(): TemplateidContext {
		let _localctx: TemplateidContext = new TemplateidContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, CPP14Parser.RULE_templateid);
		let _la: number;
		try {
			this.state = 2521;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,327,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2506;
				this.simpletemplateid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2507;
				this.operatorfunctionid();
				this.state = 2508;
				this.match(CPP14Parser.Less);
				this.state = 2510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CPP14Parser.Typeid - 68)) | (1 << (CPP14Parser.Typename - 68)) | (1 << (CPP14Parser.Union - 68)) | (1 << (CPP14Parser.Unsigned - 68)) | (1 << (CPP14Parser.Void - 68)) | (1 << (CPP14Parser.Volatile - 68)) | (1 << (CPP14Parser.Wchar - 68)) | (1 << (CPP14Parser.LeftParen - 68)) | (1 << (CPP14Parser.LeftBracket - 68)) | (1 << (CPP14Parser.Plus - 68)) | (1 << (CPP14Parser.Minus - 68)) | (1 << (CPP14Parser.Star - 68)) | (1 << (CPP14Parser.And - 68)) | (1 << (CPP14Parser.Or - 68)) | (1 << (CPP14Parser.Tilde - 68)) | (1 << (CPP14Parser.Not - 68)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 2509;
					this.templateargumentlist(0);
					}
				}

				this.state = 2512;
				this.match(CPP14Parser.Greater);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2514;
				this.literaloperatorid();
				this.state = 2515;
				this.match(CPP14Parser.Less);
				this.state = 2517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CPP14Parser.Typeid - 68)) | (1 << (CPP14Parser.Typename - 68)) | (1 << (CPP14Parser.Union - 68)) | (1 << (CPP14Parser.Unsigned - 68)) | (1 << (CPP14Parser.Void - 68)) | (1 << (CPP14Parser.Volatile - 68)) | (1 << (CPP14Parser.Wchar - 68)) | (1 << (CPP14Parser.LeftParen - 68)) | (1 << (CPP14Parser.LeftBracket - 68)) | (1 << (CPP14Parser.Plus - 68)) | (1 << (CPP14Parser.Minus - 68)) | (1 << (CPP14Parser.Star - 68)) | (1 << (CPP14Parser.And - 68)) | (1 << (CPP14Parser.Or - 68)) | (1 << (CPP14Parser.Tilde - 68)) | (1 << (CPP14Parser.Not - 68)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Booleanliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 2516;
					this.templateargumentlist(0);
					}
				}

				this.state = 2519;
				this.match(CPP14Parser.Greater);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public templatename(): TemplatenameContext {
		let _localctx: TemplatenameContext = new TemplatenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, CPP14Parser.RULE_templatename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2523;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public templateargumentlist(): TemplateargumentlistContext;
	public templateargumentlist(_p: number): TemplateargumentlistContext;
	@RuleVersion(0)
	public templateargumentlist(_p?: number): TemplateargumentlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TemplateargumentlistContext = new TemplateargumentlistContext(this._ctx, _parentState);
		let _prevctx: TemplateargumentlistContext = _localctx;
		let _startState: number = 420;
		this.enterRecursionRule(_localctx, 420, CPP14Parser.RULE_templateargumentlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2526;
			this.templateargument();
			this.state = 2528;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,328,this._ctx) ) {
			case 1:
				{
				this.state = 2527;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2538;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,330,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TemplateargumentlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_templateargumentlist);
					this.state = 2530;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2531;
					this.match(CPP14Parser.Comma);
					this.state = 2532;
					this.templateargument();
					this.state = 2534;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,329,this._ctx) ) {
					case 1:
						{
						this.state = 2533;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					} 
				}
				this.state = 2540;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,330,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public templateargument(): TemplateargumentContext {
		let _localctx: TemplateargumentContext = new TemplateargumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, CPP14Parser.RULE_templateargument);
		try {
			this.state = 2544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,331,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2541;
				this.constantexpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2542;
				this.typeid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2543;
				this.idexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typenamespecifier(): TypenamespecifierContext {
		let _localctx: TypenamespecifierContext = new TypenamespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, CPP14Parser.RULE_typenamespecifier);
		let _la: number;
		try {
			this.state = 2557;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,333,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2546;
				this.match(CPP14Parser.Typename);
				this.state = 2547;
				this.nestednamespecifier(0);
				this.state = 2548;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2550;
				this.match(CPP14Parser.Typename);
				this.state = 2551;
				this.nestednamespecifier(0);
				this.state = 2553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Template) {
					{
					this.state = 2552;
					this.match(CPP14Parser.Template);
					}
				}

				this.state = 2555;
				this.simpletemplateid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public explicitinstantiation(): ExplicitinstantiationContext {
		let _localctx: ExplicitinstantiationContext = new ExplicitinstantiationContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, CPP14Parser.RULE_explicitinstantiation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Extern) {
				{
				this.state = 2559;
				this.match(CPP14Parser.Extern);
				}
			}

			this.state = 2562;
			this.match(CPP14Parser.Template);
			this.state = 2563;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public explicitspecialization(): ExplicitspecializationContext {
		let _localctx: ExplicitspecializationContext = new ExplicitspecializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, CPP14Parser.RULE_explicitspecialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2565;
			this.match(CPP14Parser.Template);
			this.state = 2566;
			this.match(CPP14Parser.Less);
			this.state = 2567;
			this.match(CPP14Parser.Greater);
			this.state = 2568;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tryblock(): TryblockContext {
		let _localctx: TryblockContext = new TryblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, CPP14Parser.RULE_tryblock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2570;
			this.match(CPP14Parser.Try);
			this.state = 2571;
			this.compoundstatement();
			this.state = 2572;
			this.handlerseq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functiontryblock(): FunctiontryblockContext {
		let _localctx: FunctiontryblockContext = new FunctiontryblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, CPP14Parser.RULE_functiontryblock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2574;
			this.match(CPP14Parser.Try);
			this.state = 2576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CPP14Parser.Colon) {
				{
				this.state = 2575;
				this.ctorinitializer();
				}
			}

			this.state = 2578;
			this.compoundstatement();
			this.state = 2579;
			this.handlerseq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public handlerseq(): HandlerseqContext {
		let _localctx: HandlerseqContext = new HandlerseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 434, CPP14Parser.RULE_handlerseq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2581;
			this.handler();
			this.state = 2583;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,336,this._ctx) ) {
			case 1:
				{
				this.state = 2582;
				this.handlerseq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public handler(): HandlerContext {
		let _localctx: HandlerContext = new HandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 436, CPP14Parser.RULE_handler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2585;
			this.match(CPP14Parser.Catch);
			this.state = 2586;
			this.match(CPP14Parser.LeftParen);
			this.state = 2587;
			this.exceptiondeclaration();
			this.state = 2588;
			this.match(CPP14Parser.RightParen);
			this.state = 2589;
			this.compoundstatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public exceptiondeclaration(): ExceptiondeclarationContext {
		let _localctx: ExceptiondeclarationContext = new ExceptiondeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 438, CPP14Parser.RULE_exceptiondeclaration);
		let _la: number;
		try {
			this.state = 2605;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,340,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 2591;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2594;
				this.typespecifierseq();
				this.state = 2595;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Alignas || _la===CPP14Parser.LeftBracket) {
					{
					this.state = 2597;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2600;
				this.typespecifierseq();
				this.state = 2602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CPP14Parser.Decltype || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CPP14Parser.LeftParen - 78)) | (1 << (CPP14Parser.LeftBracket - 78)) | (1 << (CPP14Parser.Star - 78)) | (1 << (CPP14Parser.And - 78)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 2601;
					this.abstractdeclarator();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2604;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public throwexpression(): ThrowexpressionContext {
		let _localctx: ThrowexpressionContext = new ThrowexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 440, CPP14Parser.RULE_throwexpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2607;
			this.match(CPP14Parser.Throw);
			this.state = 2609;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,341,this._ctx) ) {
			case 1:
				{
				this.state = 2608;
				this.assignmentexpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public exceptionspecification(): ExceptionspecificationContext {
		let _localctx: ExceptionspecificationContext = new ExceptionspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 442, CPP14Parser.RULE_exceptionspecification);
		try {
			this.state = 2613;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Throw:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2611;
				this.dynamicexceptionspecification();
				}
				break;
			case CPP14Parser.Noexcept:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2612;
				this.noexceptspecification();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dynamicexceptionspecification(): DynamicexceptionspecificationContext {
		let _localctx: DynamicexceptionspecificationContext = new DynamicexceptionspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 444, CPP14Parser.RULE_dynamicexceptionspecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2615;
			this.match(CPP14Parser.Throw);
			this.state = 2616;
			this.match(CPP14Parser.LeftParen);
			this.state = 2618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.File) | (1 << CPP14Parser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Struct - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (CPP14Parser.Typename - 69)) | (1 << (CPP14Parser.Union - 69)) | (1 << (CPP14Parser.Unsigned - 69)) | (1 << (CPP14Parser.Void - 69)) | (1 << (CPP14Parser.Volatile - 69)) | (1 << (CPP14Parser.Wchar - 69)))) !== 0) || _la===CPP14Parser.Doublecolon || _la===CPP14Parser.Identifier) {
				{
				this.state = 2617;
				this.typeidlist(0);
				}
			}

			this.state = 2620;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typeidlist(): TypeidlistContext;
	public typeidlist(_p: number): TypeidlistContext;
	@RuleVersion(0)
	public typeidlist(_p?: number): TypeidlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeidlistContext = new TypeidlistContext(this._ctx, _parentState);
		let _prevctx: TypeidlistContext = _localctx;
		let _startState: number = 446;
		this.enterRecursionRule(_localctx, 446, CPP14Parser.RULE_typeidlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2623;
			this.typeid();
			this.state = 2625;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,344,this._ctx) ) {
			case 1:
				{
				this.state = 2624;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2635;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,346,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeidlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_typeidlist);
					this.state = 2627;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2628;
					this.match(CPP14Parser.Comma);
					this.state = 2629;
					this.typeid();
					this.state = 2631;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,345,this._ctx) ) {
					case 1:
						{
						this.state = 2630;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					} 
				}
				this.state = 2637;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,346,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public noexceptspecification(): NoexceptspecificationContext {
		let _localctx: NoexceptspecificationContext = new NoexceptspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 448, CPP14Parser.RULE_noexceptspecification);
		try {
			this.state = 2644;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,347,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2638;
				this.match(CPP14Parser.Noexcept);
				this.state = 2639;
				this.match(CPP14Parser.LeftParen);
				this.state = 2640;
				this.constantexpression();
				this.state = 2641;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2643;
				this.match(CPP14Parser.Noexcept);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rightShift(): RightShiftContext {
		let _localctx: RightShiftContext = new RightShiftContext(this._ctx, this.state);
		this.enterRule(_localctx, 450, CPP14Parser.RULE_rightShift);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2646;
			this.match(CPP14Parser.Greater);
			this.state = 2647;
			this.match(CPP14Parser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rightShiftAssign(): RightShiftAssignContext {
		let _localctx: RightShiftAssignContext = new RightShiftAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 452, CPP14Parser.RULE_rightShiftAssign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2649;
			this.match(CPP14Parser.Greater);
			this.state = 2650;
			this.match(CPP14Parser.Greater);
			this.state = 2651;
			this.match(CPP14Parser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 454, CPP14Parser.RULE_operator);
		try {
			this.state = 2701;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,348,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2653;
				this.match(CPP14Parser.New);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2654;
				this.match(CPP14Parser.Delete);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2655;
				this.match(CPP14Parser.New);
				this.state = 2656;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2657;
				this.match(CPP14Parser.RightBracket);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2658;
				this.match(CPP14Parser.Delete);
				this.state = 2659;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2660;
				this.match(CPP14Parser.RightBracket);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2661;
				this.match(CPP14Parser.Plus);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2662;
				this.match(CPP14Parser.Minus);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2663;
				this.match(CPP14Parser.Star);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2664;
				this.match(CPP14Parser.Div);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2665;
				this.match(CPP14Parser.Mod);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2666;
				this.match(CPP14Parser.Caret);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2667;
				this.match(CPP14Parser.And);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2668;
				this.match(CPP14Parser.Or);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2669;
				this.match(CPP14Parser.Tilde);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2670;
				this.match(CPP14Parser.Not);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2671;
				this.match(CPP14Parser.Assign);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2672;
				this.match(CPP14Parser.Less);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2673;
				this.match(CPP14Parser.Greater);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2674;
				this.match(CPP14Parser.PlusAssign);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2675;
				this.match(CPP14Parser.MinusAssign);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 2676;
				this.match(CPP14Parser.StarAssign);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 2677;
				this.match(CPP14Parser.DivAssign);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 2678;
				this.match(CPP14Parser.ModAssign);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 2679;
				this.match(CPP14Parser.XorAssign);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 2680;
				this.match(CPP14Parser.AndAssign);
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 2681;
				this.match(CPP14Parser.OrAssign);
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 2682;
				this.match(CPP14Parser.LeftShift);
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 2683;
				this.rightShift();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 2684;
				this.rightShiftAssign();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 2685;
				this.match(CPP14Parser.LeftShiftAssign);
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 2686;
				this.match(CPP14Parser.Equal);
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 2687;
				this.match(CPP14Parser.NotEqual);
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 2688;
				this.match(CPP14Parser.LessEqual);
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 2689;
				this.match(CPP14Parser.GreaterEqual);
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 2690;
				this.match(CPP14Parser.AndAnd);
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 2691;
				this.match(CPP14Parser.OrOr);
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 2692;
				this.match(CPP14Parser.PlusPlus);
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 2693;
				this.match(CPP14Parser.MinusMinus);
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 2694;
				this.match(CPP14Parser.Comma);
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 2695;
				this.match(CPP14Parser.ArrowStar);
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 2696;
				this.match(CPP14Parser.Arrow);
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 2697;
				this.match(CPP14Parser.LeftParen);
				this.state = 2698;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 2699;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2700;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 456, CPP14Parser.RULE_literal);
		try {
			this.state = 2710;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Integerliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2703;
				this.integerliteral();
				}
				break;
			case CPP14Parser.Characterliteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2704;
				this.characterliteral();
				}
				break;
			case CPP14Parser.Floatingliteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2705;
				this.floatingliteral();
				}
				break;
			case CPP14Parser.Stringliteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2706;
				this.stringliteral();
				}
				break;
			case CPP14Parser.Booleanliteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2707;
				this.booleanliteral();
				}
				break;
			case CPP14Parser.Nullptr:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2708;
				this.pointerliteral();
				}
				break;
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2709;
				this.userdefinedliteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public integerliteral(): IntegerliteralContext {
		let _localctx: IntegerliteralContext = new IntegerliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 458, CPP14Parser.RULE_integerliteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2712;
			this.match(CPP14Parser.Integerliteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public characterliteral(): CharacterliteralContext {
		let _localctx: CharacterliteralContext = new CharacterliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 460, CPP14Parser.RULE_characterliteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2714;
			this.match(CPP14Parser.Characterliteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public floatingliteral(): FloatingliteralContext {
		let _localctx: FloatingliteralContext = new FloatingliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 462, CPP14Parser.RULE_floatingliteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2716;
			this.match(CPP14Parser.Floatingliteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stringliteral(): StringliteralContext {
		let _localctx: StringliteralContext = new StringliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 464, CPP14Parser.RULE_stringliteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2718;
			this.match(CPP14Parser.Stringliteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public booleanliteral(): BooleanliteralContext {
		let _localctx: BooleanliteralContext = new BooleanliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 466, CPP14Parser.RULE_booleanliteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2720;
			this.match(CPP14Parser.Booleanliteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public pointerliteral(): PointerliteralContext {
		let _localctx: PointerliteralContext = new PointerliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 468, CPP14Parser.RULE_pointerliteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2722;
			this.match(CPP14Parser.Nullptr);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public userdefinedliteral(): UserdefinedliteralContext {
		let _localctx: UserdefinedliteralContext = new UserdefinedliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 470, CPP14Parser.RULE_userdefinedliteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2724;
			_la = this._input.LA(1);
			if ( !(((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (CPP14Parser.Userdefinedintegerliteral - 136)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 136)) | (1 << (CPP14Parser.Userdefinedstringliteral - 136)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 136)))) !== 0)) ) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.nestednamespecifier_sempred(_localctx as NestednamespecifierContext, predIndex);

		case 11:
			return this.capturelist_sempred(_localctx as CapturelistContext, predIndex);

		case 18:
			return this.postfixexpression_sempred(_localctx as PostfixexpressionContext, predIndex);

		case 29:
			return this.noptrnewdeclarator_sempred(_localctx as NoptrnewdeclaratorContext, predIndex);

		case 34:
			return this.pmexpression_sempred(_localctx as PmexpressionContext, predIndex);

		case 35:
			return this.multiplicativeexpression_sempred(_localctx as MultiplicativeexpressionContext, predIndex);

		case 36:
			return this.additiveexpression_sempred(_localctx as AdditiveexpressionContext, predIndex);

		case 37:
			return this.shiftexpression_sempred(_localctx as ShiftexpressionContext, predIndex);

		case 38:
			return this.relationalexpression_sempred(_localctx as RelationalexpressionContext, predIndex);

		case 39:
			return this.equalityexpression_sempred(_localctx as EqualityexpressionContext, predIndex);

		case 40:
			return this.andexpression_sempred(_localctx as AndexpressionContext, predIndex);

		case 41:
			return this.exclusiveorexpression_sempred(_localctx as ExclusiveorexpressionContext, predIndex);

		case 42:
			return this.inclusiveorexpression_sempred(_localctx as InclusiveorexpressionContext, predIndex);

		case 43:
			return this.logicalandexpression_sempred(_localctx as LogicalandexpressionContext, predIndex);

		case 44:
			return this.logicalorexpression_sempred(_localctx as LogicalorexpressionContext, predIndex);

		case 48:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 74:
			return this.declarationseq_sempred(_localctx as DeclarationseqContext, predIndex);

		case 113:
			return this.enumeratorlist_sempred(_localctx as EnumeratorlistContext, predIndex);

		case 131:
			return this.attributespecifierseq_sempred(_localctx as AttributespecifierseqContext, predIndex);

		case 134:
			return this.attributelist_sempred(_localctx as AttributelistContext, predIndex);

		case 140:
			return this.balancedtokenseq_sempred(_localctx as BalancedtokenseqContext, predIndex);

		case 146:
			return this.noptrdeclarator_sempred(_localctx as NoptrdeclaratorContext, predIndex);

		case 157:
			return this.noptrabstractdeclarator_sempred(_localctx as NoptrabstractdeclaratorContext, predIndex);

		case 159:
			return this.noptrabstractpackdeclarator_sempred(_localctx as NoptrabstractpackdeclaratorContext, predIndex);

		case 161:
			return this.parameterdeclarationlist_sempred(_localctx as ParameterdeclarationlistContext, predIndex);

		case 183:
			return this.memberdeclaratorlist_sempred(_localctx as MemberdeclaratorlistContext, predIndex);

		case 185:
			return this.virtspecifierseq_sempred(_localctx as VirtspecifierseqContext, predIndex);

		case 189:
			return this.basespecifierlist_sempred(_localctx as BasespecifierlistContext, predIndex);

		case 204:
			return this.templateparameterlist_sempred(_localctx as TemplateparameterlistContext, predIndex);

		case 210:
			return this.templateargumentlist_sempred(_localctx as TemplateargumentlistContext, predIndex);

		case 223:
			return this.typeidlist_sempred(_localctx as TypeidlistContext, predIndex);
		}
		return true;
	}
	private nestednamespecifier_sempred(_localctx: NestednamespecifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private capturelist_sempred(_localctx: CapturelistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfixexpression_sempred(_localctx: PostfixexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 18);

		case 4:
			return this.precpred(this._ctx, 17);

		case 5:
			return this.precpred(this._ctx, 12);

		case 6:
			return this.precpred(this._ctx, 11);

		case 7:
			return this.precpred(this._ctx, 10);

		case 8:
			return this.precpred(this._ctx, 9);

		case 9:
			return this.precpred(this._ctx, 8);

		case 10:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}
	private noptrnewdeclarator_sempred(_localctx: NoptrnewdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private pmexpression_sempred(_localctx: PmexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 2);

		case 13:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeexpression_sempred(_localctx: MultiplicativeexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 3);

		case 15:
			return this.precpred(this._ctx, 2);

		case 16:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveexpression_sempred(_localctx: AdditiveexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 2);

		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftexpression_sempred(_localctx: ShiftexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 2);

		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalexpression_sempred(_localctx: RelationalexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.precpred(this._ctx, 4);

		case 22:
			return this.precpred(this._ctx, 3);

		case 23:
			return this.precpred(this._ctx, 2);

		case 24:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityexpression_sempred(_localctx: EqualityexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return this.precpred(this._ctx, 2);

		case 26:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andexpression_sempred(_localctx: AndexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 27:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveorexpression_sempred(_localctx: ExclusiveorexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveorexpression_sempred(_localctx: InclusiveorexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalandexpression_sempred(_localctx: LogicalandexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalorexpression_sempred(_localctx: LogicalorexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private declarationseq_sempred(_localctx: DeclarationseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 33:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private enumeratorlist_sempred(_localctx: EnumeratorlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 34:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private attributespecifierseq_sempred(_localctx: AttributespecifierseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private attributelist_sempred(_localctx: AttributelistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 36:
			return this.precpred(this._ctx, 3);

		case 37:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private balancedtokenseq_sempred(_localctx: BalancedtokenseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 38:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private noptrdeclarator_sempred(_localctx: NoptrdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 39:
			return this.precpred(this._ctx, 3);

		case 40:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private noptrabstractdeclarator_sempred(_localctx: NoptrabstractdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 41:
			return this.precpred(this._ctx, 5);

		case 42:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private noptrabstractpackdeclarator_sempred(_localctx: NoptrabstractpackdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 43:
			return this.precpred(this._ctx, 3);

		case 44:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private parameterdeclarationlist_sempred(_localctx: ParameterdeclarationlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 45:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private memberdeclaratorlist_sempred(_localctx: MemberdeclaratorlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 46:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private virtspecifierseq_sempred(_localctx: VirtspecifierseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 47:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private basespecifierlist_sempred(_localctx: BasespecifierlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 48:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private templateparameterlist_sempred(_localctx: TemplateparameterlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 49:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private templateargumentlist_sempred(_localctx: TemplateargumentlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 50:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private typeidlist_sempred(_localctx: TypeidlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 51:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x91\u0AA9\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12"+
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17"+
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C"+
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04"+
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t"+
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04"+
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t"+
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04"+
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04"+
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04"+
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81"+
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86"+
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B"+
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90"+
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95"+
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A"+
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F"+
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4"+
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9"+
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE"+
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3"+
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8"+
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD"+
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2"+
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7"+
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC"+
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1"+
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6"+
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB"+
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0"+
		"\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5"+
		"\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA"+
		"\x04\xEB\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x03\x02\x05\x02\u01DC\n\x02"+
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03"+
		"\u01E6\n\x03\x03\x04\x03\x04\x05\x04\u01EA\n\x04\x03\x05\x03\x05\x05\x05"+
		"\u01EE\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x05\x06\u01F9\n\x06\x03\x07\x03\x07\x05\x07\u01FD\n\x07\x03"+
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03"+
		"\b\x03\b\x05\b\u020C\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0213\n\b"+
		"\x03\b\x03\b\x03\b\x07\b\u0218\n\b\f\b\x0E\b\u021B\v\b\x03\t\x03\t\x05"+
		"\t\u021F\n\t\x03\t\x03\t\x03\n\x03\n\x05\n\u0225\n\n\x03\n\x03\n\x03\v"+
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u022F\n\v\x03\f\x03\f\x03\r\x03\r"+
		"\x03\r\x05\r\u0236\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u023C\n\r\x07\r\u023E"+
		"\n\r\f\r\x0E\r\u0241\v\r\x03\x0E\x03\x0E\x05\x0E\u0245\n\x0E\x03\x0F\x03"+
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u024B\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10"+
		"\x03\x10\x05\x10\u0252\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0258"+
		"\n\x11\x03\x11\x05\x11\u025B\n\x11\x03\x11\x05\x11\u025E\n\x11\x03\x11"+
		"\x05\x11\u0261\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0268"+
		"\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x05\x14\u0272\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0279"+
		"\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u02AD\n\x14\x03"+
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03"+
		"\x14\x03\x14\x03\x14\x03\x14\x05\x14\u02BC\n\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x05\x14\u02C2\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03"+
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u02CF\n\x14\f\x14"+
		"\x0E\x14\u02D2\v\x14\x03\x15\x03\x15\x03\x16\x05\x16\u02D7\n\x16\x03\x16"+
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16"+
		"\x03\x16\x03\x16\x03\x16\x05\x16\u02E6\n\x16\x03\x16\x03\x16\x03\x16\x03"+
		"\x16\x05\x16\u02EC\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02F2"+
		"\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18"+
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18"+
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18"+
		"\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0312\n\x18\x03\x19\x03\x19\x03"+
		"\x1A\x03\x1A\x03\x1B\x05\x1B\u0319\n\x1B\x03\x1B\x03\x1B\x05\x1B\u031D"+
		"\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0321\n\x1B\x03\x1B\x05\x1B\u0324\n\x1B"+
		"\x03\x1B\x03\x1B\x05\x1B\u0328\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05"+
		"\x1B\u032E\n\x1B\x05\x1B\u0330\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03"+
		"\x1D\x03\x1D\x05\x1D\u0338\n\x1D\x03\x1E\x03\x1E\x05\x1E\u033C\n\x1E\x03"+
		"\x1E\x05\x1E\u033F\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F"+
		"\u0346\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u034D\n\x1F"+
		"\x07\x1F\u034F\n\x1F\f\x1F\x0E\x1F\u0352\v\x1F\x03 \x03 \x05 \u0356\n"+
		" \x03 \x03 \x05 \u035A\n \x03!\x05!\u035D\n!\x03!\x03!\x03!\x05!\u0362"+
		"\n!\x03!\x03!\x03!\x03!\x05!\u0368\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03"+
		"#\x03#\x03#\x03#\x03#\x03#\x05#\u0375\n#\x03$\x03$\x03$\x03$\x03$\x03"+
		"$\x03$\x03$\x03$\x07$\u0380\n$\f$\x0E$\u0383\v$\x03%\x03%\x03%\x03%\x03"+
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u0391\n%\f%\x0E%\u0394\v%\x03"+
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x07&\u039F\n&\f&\x0E&\u03A2"+
		"\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'"+
		"\u03AE\n\'\f\'\x0E\'\u03B1\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03"+
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u03C2\n(\f(\x0E(\u03C5\v(\x03"+
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u03D0\n)\f)\x0E)\u03D3"+
		"\v)\x03*\x03*\x03*\x03*\x03*\x03*\x07*\u03DB\n*\f*\x0E*\u03DE\v*\x03+"+
		"\x03+\x03+\x03+\x03+\x03+\x07+\u03E6\n+\f+\x0E+\u03E9\v+\x03,\x03,\x03"+
		",\x03,\x03,\x03,\x07,\u03F1\n,\f,\x0E,\u03F4\v,\x03-\x03-\x03-\x03-\x03"+
		"-\x03-\x07-\u03FC\n-\f-\x0E-\u03FF\v-\x03.\x03.\x03.\x03.\x03.\x03.\x07"+
		".\u0407\n.\f.\x0E.\u040A\v.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0413"+
		"\n/\x030\x030\x030\x030\x030\x030\x050\u041B\n0\x031\x031\x031\x031\x03"+
		"1\x031\x031\x031\x031\x031\x031\x051\u0428\n1\x032\x032\x032\x032\x03"+
		"2\x032\x072\u0430\n2\f2\x0E2\u0433\v2\x033\x033\x034\x034\x054\u0439\n"+
		"4\x035\x035\x055\u043D\n5\x035\x035\x055\u0441\n5\x035\x035\x055\u0445"+
		"\n5\x035\x035\x055\u0449\n5\x035\x035\x055\u044D\n5\x035\x035\x055\u0451"+
		"\n5\x035\x035\x055\u0455\n5\x035\x035\x055\u0459\n5\x035\x035\x055\u045D"+
		"\n5\x035\x035\x055\u0461\n5\x035\x035\x055\u0465\n5\x035\x035\x035\x03"+
		"5\x055\u046B\n5\x035\x055\u046E\n5\x036\x056\u0471\n6\x036\x036\x036\x03"+
		"6\x056\u0477\n6\x037\x057\u047A\n7\x037\x037\x037\x057\u047F\n7\x037\x03"+
		"7\x037\x038\x038\x078\u0486\n8\f8\x0E8\u0489\v8\x039\x059\u048C\n9\x03"+
		"9\x039\x03:\x03:\x05:\u0492\n:\x03:\x03:\x03;\x03;\x07;\u0498\n;\f;\x0E"+
		";\u049B\v;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03"+
		"<\x03<\x03<\x05<\u04AB\n<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03"+
		">\x03>\x07>\u04B7\n>\f>\x0E>\u04BA\v>\x03?\x03?\x05?\u04BE\n?\x03?\x03"+
		"?\x03?\x03?\x03?\x03?\x05?\u04C6\n?\x03?\x03?\x03?\x03?\x05?\u04CC\n?"+
		"\x03@\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03"+
		"A\x03B\x03B\x03B\x03B\x05B\u04E0\nB\x03B\x03B\x05B\u04E4\nB\x03B\x03B"+
		"\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x05D\u04F4"+
		"\nD\x03E\x05E\u04F7\nE\x03E\x03E\x03E\x03F\x03F\x05F\u04FE\nF\x03G\x03"+
		"G\x03G\x03G\x03H\x03H\x03H\x03I\x03I\x03I\x03J\x03J\x05J\u050C\nJ\x03"+
		"J\x03J\x03J\x03J\x03J\x05J\u0513\nJ\x03K\x03K\x05K\u0517\nK\x03L\x03L"+
		"\x03L\x03L\x03L\x07L\u051E\nL\fL\x0EL\u0521\vL\x03M\x05M\u0524\nM\x03"+
		"N\x03N\x03N\x03N\x03N\x03N\x03O\x03O\x05O\u052E\nO\x03O\x05O\u0531\nO"+
		"\x03O\x03O\x05O\u0535\nO\x03O\x05O\u0538\nO\x03O\x03O\x05O\u053C\nO\x03"+
		"O\x05O\u053F\nO\x05O\u0541\nO\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P"+
		"\x03P\x03P\x03P\x03P\x05P\u054F\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q"+
		"\x05Q\u0558\nQ\x03R\x03R\x05R\u055C\nR\x03S\x03S\x03S\x05S\u0561\nS\x03"+
		"S\x03S\x03S\x03S\x03T\x03T\x03T\x03U\x05U\u056B\nU\x03U\x05U\u056E\nU"+
		"\x03U\x03U\x05U\u0572\nU\x03V\x03V\x03V\x03V\x07V\u0578\nV\fV\x0EV\u057B"+
		"\vV\x05V\u057D\nV\x03W\x07W\u0580\nW\fW\x0EW\u0583\vW\x03W\x03W\x03W\x05"+
		"W\u0588\nW\x03W\x07W\u058B\nW\fW\x0EW\u058E\vW\x03W\x03W\x05W\u0592\n"+
		"W\x03X\x03X\x03X\x03Y\x05Y\u0598\nY\x03Y\x05Y\u059B\nY\x03Y\x03Y\x05Y"+
		"\u059F\nY\x03Y\x03Y\x03Z\x05Z\u05A4\nZ\x03Z\x05Z\u05A7\nZ\x03Z\x03Z\x03"+
		"Z\x05Z\u05AC\nZ\x03Z\x03Z\x03Z\x05Z\u05B1\nZ\x03[\x03[\x03[\x03[\x03["+
		"\x03[\x03[\x03[\x03\\\x03\\\x03]\x03]\x03]\x03^\x03^\x05^\u05C2\n^\x03"+
		"_\x03_\x05_\u05C6\n_\x03_\x03_\x03_\x05_\u05CB\n_\x03`\x03`\x03`\x03`"+
		"\x03`\x05`\u05D2\n`\x03a\x03a\x05a\u05D6\na\x03a\x03a\x03a\x05a\u05DB"+
		"\na\x03b\x03b\x03c\x03c\x03d\x03d\x03e\x03e\x03e\x05e\u05E6\ne\x03f\x03"+
		"f\x03f\x03f\x05f\u05EC\nf\x03g\x03g\x05g\u05F0\ng\x03g\x03g\x03g\x05g"+
		"\u05F5\ng\x03h\x03h\x05h\u05F9\nh\x03h\x03h\x03h\x05h\u05FE\nh\x03i\x05"+
		"i\u0601\ni\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03"+
		"i\x03i\x03i\x03i\x03i\x05i\u0613\ni\x03i\x03i\x03i\x03i\x03i\x03i\x05"+
		"i\u061B\ni\x03j\x03j\x03j\x03j\x05j\u0621\nj\x03k\x03k\x03k\x03k\x03k"+
		"\x03k\x03k\x03k\x03k\x05k\u062C\nk\x03l\x03l\x05l\u0630\nl\x03l\x05l\u0633"+
		"\nl\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x05l\u063D\nl\x03l\x03l\x03"+
		"l\x03l\x05l\u0643\nl\x03l\x05l\u0646\nl\x03m\x03m\x03n\x03n\x03n\x05n"+
		"\u064D\nn\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x05n\u0657\nn\x03o\x03"+
		"o\x05o\u065B\no\x03o\x05o\u065E\no\x03o\x05o\u0661\no\x03o\x03o\x05o\u0665"+
		"\no\x03o\x03o\x03o\x05o\u066A\no\x05o\u066C\no\x03p\x03p\x05p\u0670\n"+
		"p\x03p\x03p\x05p\u0674\np\x03p\x03p\x03q\x03q\x03q\x03q\x03q\x05q\u067D"+
		"\nq\x03r\x03r\x03r\x03s\x03s\x03s\x03s\x03s\x03s\x07s\u0688\ns\fs\x0E"+
		"s\u068B\vs\x03t\x03t\x03t\x03t\x03t\x05t\u0692\nt\x03u\x03u\x03v\x03v"+
		"\x05v\u0698\nv\x03w\x03w\x03x\x03x\x05x\u069E\nx\x03y\x03y\x05y\u06A2"+
		"\ny\x03z\x05z\u06A5\nz\x03z\x03z\x03z\x03z\x03z\x03z\x03{\x05{\u06AE\n"+
		"{\x03{\x03{\x03{\x03{\x03{\x03{\x03|\x05|\u06B7\n|\x03|\x03|\x03|\x03"+
		"|\x03|\x03}\x05}\u06BF\n}\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03"+
		"\x7F\x03\x7F\x03\x80\x05\x80\u06CA\n\x80\x03\x80\x03\x80\x03\x81\x03\x81"+
		"\x05\x81\u06D0\n\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03"+
		"\x81\x03\x81\x03\x81\x05\x81\u06DB\n\x81\x03\x82\x05\x82\u06DE\n\x82\x03"+
		"\x82\x03\x82\x03\x82\x05\x82\u06E3\n\x82\x03\x82\x03\x82\x03\x82\x03\x83"+
		"\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x03\x84"+
		"\x05\x84\u06F2\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u06F8\n\x84"+
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x07\x85\u06FF\n\x85\f\x85\x0E"+
		"\x85\u0702\v\x85\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86"+
		"\x05\x86\u070B\n\x86\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u0711\n\x87"+
		"\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u0719\n\x87\x03"+
		"\x87\x03\x87\x05\x87\u071D\n\x87\x03\x88\x03\x88\x05\x88\u0721\n\x88\x03"+
		"\x88\x03\x88\x03\x88\x05\x88\u0726\n\x88\x03\x88\x03\x88\x03\x88\x05\x88"+
		"\u072B\n\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x07\x88\u0732\n\x88"+
		"\f\x88\x0E\x88\u0735\v\x88\x03\x89\x03\x89\x05\x89\u0739\n\x89\x03\x8A"+
		"\x03\x8A\x05\x8A\u073D\n\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8C\x03"+
		"\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x05\x8E\u074B\n\x8E"+
		"\x03\x8E\x03\x8E\x07\x8E\u074F\n\x8E\f\x8E\x0E\x8E\u0752\v\x8E\x03\x8F"+
		"\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F"+
		"\x03\x8F\x03\x8F\x05\x8F\u0760\n\x8F\x03\x90\x03\x90\x03\x90\x07\x90\u0765"+
		"\n\x90\f\x90\x0E\x90\u0768\v\x90\x03\x91\x03\x91\x05\x91\u076C\n\x91\x03"+
		"\x92\x03\x92\x03\x92\x03\x92\x03\x92\x05\x92\u0773\n\x92\x03\x93\x07\x93"+
		"\u0776\n\x93\f\x93\x0E\x93\u0779\v\x93\x03\x93\x03\x93\x03\x94\x03\x94"+
		"\x03\x94\x05\x94\u0780\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u0786"+
		"\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u078D\n\x94\x03"+
		"\x94\x03\x94\x05\x94\u0791\n\x94\x07\x94\u0793\n\x94\f\x94\x0E\x94\u0796"+
		"\v\x94\x03\x95\x03\x95\x03\x95\x03\x95\x05\x95\u079C\n\x95\x03\x95\x05"+
		"\x95\u079F\n\x95\x03\x95\x05\x95\u07A2\n\x95\x03\x95\x05\x95\u07A5\n\x95"+
		"\x03\x96\x03\x96\x03\x96\x05\x96\u07AA\n\x96\x03\x97\x03\x97\x05\x97\u07AE"+
		"\n\x97\x03\x97\x05\x97\u07B1\n\x97\x03\x97\x03\x97\x05\x97\u07B5\n\x97"+
		"\x03\x97\x03\x97\x05\x97\u07B9\n\x97\x03\x97\x03\x97\x03\x97\x05\x97\u07BE"+
		"\n\x97\x03\x97\x05\x97\u07C1\n\x97\x05\x97\u07C3\n\x97\x03\x98\x03\x98"+
		"\x05\x98\u07C7\n\x98\x03\x99\x03\x99\x03\x9A\x03\x9A\x03\x9B\x05\x9B\u07CE"+
		"\n\x9B\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x05\x9C\u07D4\n\x9C\x03\x9D\x03"+
		"\x9D\x05\x9D\u07D8\n\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x05\x9D\u07DE"+
		"\n\x9D\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u07E3\n\x9E\x05\x9E\u07E5\n\x9E"+
		"\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x05\x9F\u07EB\n\x9F\x03\x9F\x03\x9F\x05"+
		"\x9F\u07EF\n\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x05\x9F\u07F5\n\x9F\x03"+
		"\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x05\x9F\u07FC\n\x9F\x03\x9F\x03\x9F"+
		"\x05\x9F\u0800\n\x9F\x07\x9F\u0802\n\x9F\f\x9F\x0E\x9F\u0805\v\x9F\x03"+
		"\xA0\x03\xA0\x03\xA0\x03\xA0\x05\xA0\u080B\n\xA0\x03\xA1\x03\xA1\x03\xA1"+
		"\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x05\xA1\u0815\n\xA1\x03\xA1\x03"+
		"\xA1\x05\xA1\u0819\n\xA1\x07\xA1\u081B\n\xA1\f\xA1\x0E\xA1\u081E\v\xA1"+
		"\x03\xA2\x05\xA2\u0821\n\xA2\x03\xA2\x05\xA2\u0824\n\xA2\x03\xA2\x03\xA2"+
		"\x03\xA2\x03\xA2\x05\xA2\u082A\n\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03"+
		"\xA3\x03\xA3\x07\xA3\u0832\n\xA3\f\xA3\x0E\xA3\u0835\v\xA3\x03\xA4\x05"+
		"\xA4\u0838\n\xA4\x03\xA4\x05\xA4\u083B\n\xA4\x03\xA4\x03\xA4\x05\xA4\u083F"+
		"\n\xA4\x03\xA5\x05\xA5\u0842\n\xA5\x03\xA5\x05\xA5\u0845\n\xA5\x03\xA5"+
		"\x03\xA5\x05\xA5\u0849\n\xA5\x03\xA5\x03\xA5\x03\xA6\x05\xA6\u084E\n\xA6"+
		"\x03\xA6\x07\xA6\u0851\n\xA6\f\xA6\x0E\xA6\u0854\v\xA6\x03\xA6\x03\xA6"+
		"\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA8\x05\xA8\u085E\n\xA8\x03"+
		"\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x05\xA8\u0868"+
		"\n\xA8\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x05\xA9\u086F\n\xA9\x03"+
		"\xAA\x03\xAA\x03\xAA\x05\xAA\u0874\n\xAA\x03\xAB\x03\xAB\x05\xAB\u0878"+
		"\n\xAB\x03\xAC\x03\xAC\x03\xAC\x07\xAC\u087D\n\xAC\f\xAC\x0E\xAC\u0880"+
		"\v\xAC\x03\xAD\x03\xAD\x03\xAD\x05\xAD\u0885\n\xAD\x03\xAD\x03\xAD\x03"+
		"\xAD\x03\xAD\x05\xAD\u088B\n\xAD\x03\xAE\x03\xAE\x05\xAE\u088F\n\xAE\x03"+
		"\xAF\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x05\xB0\u0896\n\xB0\x03\xB0\x03\xB0"+
		"\x03\xB1\x03\xB1\x05\xB1\u089C\n\xB1\x03\xB1\x05\xB1\u089F\n\xB1\x03\xB1"+
		"\x03\xB1\x05\xB1\u08A3\n\xB1\x03\xB1\x05\xB1\u08A6\n\xB1\x03\xB1\x03\xB1"+
		"\x05\xB1\u08AA\n\xB1\x03\xB1\x05\xB1\u08AD\n\xB1\x05\xB1\u08AF\n\xB1\x03"+
		"\xB2\x05\xB2\u08B2\n\xB2\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB4\x03\xB4"+
		"\x03\xB5\x03\xB5\x05\xB5\u08BC\n\xB5\x03\xB5\x03\xB5\x03\xB5\x05\xB5\u08C1"+
		"\n\xB5\x05\xB5\u08C3\n\xB5\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03"+
		"\xB6\x03\xB6\x05\xB6\u08CC\n\xB6\x03\xB7\x03\xB7\x03\xB7\x03\xB8\x05\xB8"+
		"\u08D2\n\xB8\x03\xB8\x05\xB8\u08D5\n\xB8\x03\xB8\x03\xB8\x07\xB8\u08D9"+
		"\n\xB8\f\xB8\x0E\xB8\u08DC\v\xB8\x03\xB8\x05\xB8\u08DF\n\xB8\x03\xB9\x03"+
		"\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x07\xB9\u08E7\n\xB9\f\xB9\x0E\xB9"+
		"\u08EA\v\xB9\x03\xBA\x03\xBA\x05\xBA\u08EE\n\xBA\x03\xBA\x05\xBA\u08F1"+
		"\n\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u08F6\n\xBA\x03\xBA\x03\xBA\x05"+
		"\xBA\u08FA\n\xBA\x03\xBA\x05\xBA\u08FD\n\xBA\x03\xBA\x05\xBA\u0900\n\xBA"+
		"\x03\xBA\x03\xBA\x05\xBA\u0904\n\xBA\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03"+
		"\xBB\x07\xBB\u090B\n\xBB\f\xBB\x0E\xBB\u090E\v\xBB\x03\xBC\x03\xBC\x03"+
		"\xBD\x03\xBD\x03\xBD\x03\xBE\x03\xBE\x03\xBE\x03\xBF\x03\xBF\x03\xBF\x05"+
		"\xBF\u091B\n\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x05";
	private static readonly _serializedATNSegment1: string =
		"\xBF\u0921\n\xBF\x07\xBF\u0923\n\xBF\f\xBF\x0E\xBF\u0926\v\xBF\x03\xC0"+
		"\x05\xC0\u0929\n\xC0\x03\xC0\x03\xC0\x05\xC0\u092D\n\xC0\x03\xC0\x03\xC0"+
		"\x05\xC0\u0931\n\xC0\x03\xC0\x03\xC0\x05\xC0\u0935\n\xC0\x03\xC0\x03\xC0"+
		"\x05\xC0\u0939\n\xC0\x03\xC0\x03\xC0\x05\xC0\u093D\n\xC0\x03\xC1\x05\xC1"+
		"\u0940\n\xC1\x03\xC1\x03\xC1\x05\xC1\u0944\n\xC1\x03\xC2\x03\xC2\x03\xC3"+
		"\x03\xC3\x03\xC4\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x05\xC5\u094F\n\xC5\x03"+
		"\xC6\x03\xC6\x05\xC6\u0953\n\xC6\x03\xC7\x03\xC7\x03\xC7\x03\xC8\x03\xC8"+
		"\x05\xC8\u095A\n\xC8\x03\xC8\x03\xC8\x05\xC8\u095E\n\xC8\x03\xC8\x03\xC8"+
		"\x03\xC8\x05\xC8\u0963\n\xC8\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u0968\n\xC9"+
		"\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u096F\n\xC9\x03\xCA\x03"+
		"\xCA\x05\xCA\u0973\n\xCA\x03\xCB\x03\xCB\x03\xCB\x03\xCC\x03\xCC\x03\xCC"+
		"\x03\xCC\x03\xCC\x05\xCC\u097D\n\xCC\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x03"+
		"\xCD\x03\xCD\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x07\xCE\u098B"+
		"\n\xCE\f\xCE\x0E\xCE\u098E\v\xCE\x03\xCF\x03\xCF\x05\xCF\u0992\n\xCF\x03"+
		"\xD0\x03\xD0\x05\xD0\u0996\n\xD0\x03\xD0\x05\xD0\u0999\n\xD0\x03\xD0\x03"+
		"\xD0\x05\xD0\u099D\n\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x05\xD0\u09A3"+
		"\n\xD0\x03\xD0\x05\xD0\u09A6\n\xD0\x03\xD0\x03\xD0\x05\xD0\u09AA\n\xD0"+
		"\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x05\xD0"+
		"\u09B4\n\xD0\x03\xD0\x05\xD0\u09B7\n\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0"+
		"\x03\xD0\x03\xD0\x05\xD0\u09BF\n\xD0\x03\xD0\x03\xD0\x03\xD0\x05\xD0\u09C4"+
		"\n\xD0\x03\xD1\x03\xD1\x03\xD1\x05\xD1\u09C9\n\xD1\x03\xD1\x03\xD1\x03"+
		"\xD2\x03\xD2\x03\xD2\x03\xD2\x05\xD2\u09D1\n\xD2\x03\xD2\x03\xD2\x03\xD2"+
		"\x03\xD2\x03\xD2\x05\xD2\u09D8\n\xD2\x03\xD2\x03\xD2\x05\xD2\u09DC\n\xD2"+
		"\x03\xD3\x03\xD3\x03\xD4\x03\xD4\x03\xD4\x05\xD4\u09E3\n\xD4\x03\xD4\x03"+
		"\xD4\x03\xD4\x03\xD4\x05\xD4\u09E9\n\xD4\x07\xD4\u09EB\n\xD4\f\xD4\x0E"+
		"\xD4\u09EE\v\xD4\x03\xD5\x03\xD5\x03\xD5\x05\xD5\u09F3\n\xD5\x03\xD6\x03"+
		"\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x05\xD6\u09FC\n\xD6\x03\xD6"+
		"\x03\xD6\x05\xD6\u0A00\n\xD6\x03\xD7\x05\xD7\u0A03\n\xD7\x03\xD7\x03\xD7"+
		"\x03\xD7\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD9\x03\xD9\x03\xD9"+
		"\x03\xD9\x03\xDA\x03\xDA\x05\xDA\u0A13\n\xDA\x03\xDA\x03\xDA\x03\xDA\x03"+
		"\xDB\x03\xDB\x05\xDB\u0A1A\n\xDB\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC"+
		"\x03\xDC\x03\xDD\x05\xDD\u0A23\n\xDD\x03\xDD\x03\xDD\x03\xDD\x03\xDD\x05"+
		"\xDD\u0A29\n\xDD\x03\xDD\x03\xDD\x05\xDD\u0A2D\n\xDD\x03\xDD\x05\xDD\u0A30"+
		"\n\xDD\x03\xDE\x03\xDE\x05\xDE\u0A34\n\xDE\x03\xDF\x03\xDF\x05\xDF\u0A38"+
		"\n\xDF\x03\xE0\x03\xE0\x03\xE0\x05\xE0\u0A3D\n\xE0\x03\xE0\x03\xE0\x03"+
		"\xE1\x03\xE1\x03\xE1\x05\xE1\u0A44\n\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1"+
		"\x05\xE1\u0A4A\n\xE1\x07\xE1\u0A4C\n\xE1\f\xE1\x0E\xE1\u0A4F\v\xE1\x03"+
		"\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x05\xE2\u0A57\n\xE2\x03\xE3"+
		"\x03\xE3\x03\xE3\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE5\x03\xE5\x03\xE5"+
		"\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5"+
		"\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5"+
		"\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5"+
		"\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5"+
		"\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5"+
		"\x05\xE5\u0A90\n\xE5\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03"+
		"\xE6\x05\xE6\u0A99\n\xE6\x03\xE7\x03\xE7\x03\xE8\x03\xE8\x03\xE9\x03\xE9"+
		"\x03\xEA\x03\xEA\x03\xEB\x03\xEB\x03\xEC\x03\xEC\x03\xED\x03\xED\x03\xED"+
		"\x02\x02!\x0E\x18&<FHJLNPRTVXZb\x96\xE4\u0108\u010E\u011A\u0126\u013C"+
		"\u0140\u0144\u0170\u0174\u017C\u019A\u01A6\u01C0\xEE\x02\x02\x04\x02\x06"+
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02"+
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02"+
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02"+
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02"+
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02"+
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02"+
		"\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02"+
		"\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02"+
		"\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02"+
		"\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02"+
		"\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02"+
		"\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100"+
		"\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E"+
		"\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C"+
		"\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A"+
		"\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138"+
		"\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146"+
		"\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154"+
		"\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162"+
		"\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170"+
		"\x02\u0172\x02\u0174\x02\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E"+
		"\x02\u0180\x02\u0182\x02\u0184\x02\u0186\x02\u0188\x02\u018A\x02\u018C"+
		"\x02\u018E\x02\u0190\x02\u0192\x02\u0194\x02\u0196\x02\u0198\x02\u019A"+
		"\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2\x02\u01A4\x02\u01A6\x02\u01A8"+
		"\x02\u01AA\x02\u01AC\x02\u01AE\x02\u01B0\x02\u01B2\x02\u01B4\x02\u01B6"+
		"\x02\u01B8\x02\u01BA\x02\u01BC\x02\u01BE\x02\u01C0\x02\u01C2\x02\u01C4"+
		"\x02\u01C6\x02\u01C8\x02\u01CA\x02\u01CC\x02\u01CE\x02\u01D0\x02\u01D2"+
		"\x02\u01D4\x02\u01D6\x02\u01D8\x02\x02\f\x04\x02\\\\``\x04\x02VX\\_\x07"+
		"\x02\x1F\x1F**44::AA\x05\x02\x1D\x1D\'\'KK\x04\x02\x10\x10MM\x04\x02\\"+
		"\\qq\x05\x02\x0F\x0F==HH\x04\x02!!00\x03\x0213\x03\x02\x8A\x8D\u0BCA\x02"+
		"\u01DB\x03\x02\x02\x02\x04\u01E5\x03\x02\x02\x02\x06\u01E9\x03\x02\x02"+
		"\x02\b\u01ED\x03\x02\x02\x02\n\u01F8\x03\x02\x02\x02\f\u01FA\x03\x02\x02"+
		"\x02\x0E\u020B\x03\x02\x02\x02\x10\u021C\x03\x02\x02\x02\x12\u0222\x03"+
		"\x02\x02\x02\x14\u022E\x03\x02\x02\x02\x16\u0230\x03\x02\x02\x02\x18\u0232"+
		"\x03\x02\x02\x02\x1A\u0244\x03\x02\x02\x02\x1C\u024A\x03\x02\x02\x02\x1E"+
		"\u0251\x03\x02\x02\x02 \u0253\x03\x02\x02\x02\"\u0262\x03\x02\x02\x02"+
		"$\u0264\x03\x02\x02\x02&\u02AC\x03\x02\x02\x02(\u02D3\x03\x02\x02\x02"+
		"*\u02EB\x03\x02\x02\x02,\u02F1\x03\x02\x02\x02.\u0311\x03\x02\x02\x02"+
		"0\u0313\x03\x02\x02\x022\u0315\x03\x02\x02\x024\u032F\x03\x02\x02\x02"+
		"6\u0331\x03\x02\x02\x028\u0335\x03\x02\x02\x02:\u033E\x03\x02\x02\x02"+
		"<\u0340\x03\x02\x02\x02>\u0359\x03\x02\x02\x02@\u0367\x03\x02\x02\x02"+
		"B\u0369\x03\x02\x02\x02D\u0374\x03\x02\x02\x02F\u0376\x03\x02\x02\x02"+
		"H\u0384\x03\x02\x02\x02J\u0395\x03\x02\x02\x02L\u03A3\x03\x02\x02\x02"+
		"N\u03B2\x03\x02\x02\x02P\u03C6\x03\x02\x02\x02R\u03D4\x03\x02\x02\x02"+
		"T\u03DF\x03\x02\x02\x02V\u03EA\x03\x02\x02\x02X\u03F5\x03\x02\x02\x02"+
		"Z\u0400\x03\x02\x02\x02\\\u0412\x03\x02\x02\x02^\u041A\x03\x02\x02\x02"+
		"`\u0427\x03\x02\x02\x02b\u0429\x03\x02\x02\x02d\u0434\x03\x02\x02\x02"+
		"f\u0438\x03\x02\x02\x02h\u046D\x03\x02\x02\x02j\u0476\x03\x02\x02\x02"+
		"l\u0479\x03\x02\x02\x02n\u0483\x03\x02\x02\x02p\u048B\x03\x02\x02\x02"+
		"r\u048F\x03\x02\x02\x02t\u0495\x03\x02\x02\x02v\u04AA\x03\x02\x02\x02"+
		"x\u04AC\x03\x02\x02\x02z\u04B4\x03\x02\x02\x02|\u04CB\x03\x02\x02\x02"+
		"~\u04CD\x03\x02\x02\x02\x80\u04D3\x03\x02\x02\x02\x82\u04DB\x03\x02\x02"+
		"\x02\x84\u04E8\x03\x02\x02\x02\x86\u04F3\x03\x02\x02\x02\x88\u04F6\x03"+
		"\x02\x02\x02\x8A\u04FD\x03\x02\x02\x02\x8C\u04FF\x03\x02\x02\x02\x8E\u0503"+
		"\x03\x02\x02\x02\x90\u0506\x03\x02\x02\x02\x92\u0512\x03\x02\x02\x02\x94"+
		"\u0516\x03\x02\x02\x02\x96\u0518\x03\x02\x02\x02\x98\u0523\x03\x02\x02"+
		"\x02\x9A\u0525\x03\x02\x02\x02\x9C\u0540\x03\x02\x02\x02\x9E\u054E\x03"+
		"\x02\x02\x02\xA0\u0557\x03\x02\x02\x02\xA2\u055B\x03\x02\x02\x02\xA4\u055D"+
		"\x03\x02\x02\x02\xA6\u0566\x03\x02\x02\x02\xA8\u056A\x03\x02\x02\x02\xAA"+
		"\u057C\x03\x02\x02\x02\xAC\u0581\x03\x02\x02\x02\xAE\u0593\x03\x02\x02"+
		"\x02\xB0\u0597\x03\x02\x02\x02\xB2\u05B0\x03\x02\x02\x02\xB4\u05B2\x03"+
		"\x02\x02\x02\xB6\u05BA\x03\x02\x02\x02\xB8\u05BC\x03\x02\x02\x02\xBA\u05C1"+
		"\x03\x02\x02\x02\xBC\u05CA\x03\x02\x02\x02\xBE\u05D1\x03\x02\x02\x02\xC0"+
		"\u05DA\x03\x02\x02\x02\xC2\u05DC\x03\x02\x02\x02\xC4\u05DE\x03\x02\x02"+
		"\x02\xC6\u05E0\x03\x02\x02\x02\xC8\u05E5\x03\x02\x02\x02\xCA\u05EB\x03"+
		"\x02\x02\x02\xCC\u05F4\x03\x02\x02\x02\xCE\u05FD\x03\x02\x02\x02\xD0\u061A"+
		"\x03\x02\x02\x02\xD2\u0620\x03\x02\x02\x02\xD4\u062B\x03\x02\x02\x02\xD6"+
		"\u0645\x03\x02\x02\x02\xD8\u0647\x03\x02\x02\x02\xDA\u0656\x03\x02\x02"+
		"\x02\xDC\u066B\x03\x02\x02\x02\xDE\u066D\x03\x02\x02\x02\xE0\u067C\x03"+
		"\x02\x02\x02\xE2\u067E\x03\x02\x02\x02\xE4\u0681\x03\x02\x02\x02\xE6\u0691"+
		"\x03\x02\x02\x02\xE8\u0693\x03\x02\x02\x02\xEA\u0697\x03\x02\x02\x02\xEC"+
		"\u0699\x03\x02\x02\x02\xEE\u069D\x03\x02\x02\x02\xF0\u06A1\x03\x02\x02"+
		"\x02\xF2\u06A4\x03\x02\x02\x02\xF4\u06AD\x03\x02\x02\x02\xF6\u06B6\x03"+
		"\x02\x02\x02\xF8\u06BE\x03\x02\x02\x02\xFA\u06C0\x03\x02\x02\x02\xFC\u06C2"+
		"\x03\x02\x02\x02\xFE\u06C9\x03\x02\x02\x02\u0100\u06DA\x03\x02\x02\x02"+
		"\u0102\u06DD\x03\x02\x02\x02\u0104\u06E7\x03\x02\x02\x02\u0106\u06F7\x03"+
		"\x02\x02\x02\u0108\u06F9\x03\x02\x02\x02\u010A\u070A\x03\x02\x02\x02\u010C"+
		"\u071C\x03\x02\x02\x02\u010E\u0725\x03\x02\x02\x02\u0110\u0736\x03\x02"+
		"\x02\x02\u0112\u073C\x03\x02\x02\x02\u0114\u073E\x03\x02\x02\x02\u0116"+
		"\u0742\x03\x02\x02\x02\u0118\u0744\x03\x02\x02\x02\u011A\u0748\x03\x02"+
		"\x02\x02\u011C\u075F\x03\x02\x02\x02\u011E\u0761\x03\x02\x02\x02\u0120"+
		"\u0769\x03\x02\x02\x02\u0122\u0772\x03\x02\x02\x02\u0124\u0777\x03\x02"+
		"\x02\x02\u0126\u0785\x03\x02\x02\x02\u0128\u0797\x03\x02\x02\x02\u012A"+
		"\u07A6\x03\x02\x02\x02\u012C\u07C2\x03\x02\x02\x02\u012E\u07C4\x03\x02"+
		"\x02\x02\u0130\u07C8\x03\x02\x02\x02\u0132\u07CA\x03\x02\x02\x02\u0134"+
		"\u07CD\x03\x02\x02\x02\u0136\u07D1\x03\x02\x02\x02\u0138\u07DD\x03\x02"+
		"\x02\x02\u013A\u07E4\x03\x02\x02\x02\u013C\u07F4\x03\x02\x02\x02\u013E"+
		"\u080A\x03\x02\x02\x02\u0140\u080C\x03\x02\x02\x02\u0142\u0829\x03\x02"+
		"\x02\x02\u0144\u082B\x03\x02\x02\x02\u0146\u0837\x03\x02\x02\x02\u0148"+
		"\u0841\x03\x02\x02\x02\u014A\u084D\x03\x02\x02\x02\u014C\u0857\x03\x02"+
		"\x02\x02\u014E\u0867\x03\x02\x02\x02\u0150\u086E\x03\x02\x02\x02\u0152"+
		"\u0873\x03\x02\x02\x02\u0154\u0877\x03\x02\x02\x02\u0156\u0879\x03\x02"+
		"\x02\x02\u0158\u088A\x03\x02\x02\x02\u015A\u088E\x03\x02\x02\x02\u015C"+
		"\u0890\x03\x02\x02\x02\u015E\u0893\x03\x02\x02\x02\u0160\u08AE\x03\x02"+
		"\x02\x02\u0162\u08B1\x03\x02\x02\x02\u0164\u08B5\x03\x02\x02\x02\u0166"+
		"\u08B7\x03\x02\x02\x02\u0168\u08C2\x03\x02\x02\x02\u016A\u08CB\x03\x02"+
		"\x02\x02\u016C\u08CD\x03\x02\x02\x02\u016E\u08D1\x03\x02\x02\x02\u0170"+
		"\u08E0\x03\x02\x02\x02\u0172\u0903\x03\x02\x02\x02\u0174\u0905\x03\x02"+
		"\x02\x02\u0176\u090F\x03\x02\x02\x02\u0178\u0911\x03\x02\x02\x02\u017A"+
		"\u0914\x03\x02\x02\x02\u017C\u0917\x03\x02\x02\x02\u017E\u093C\x03\x02"+
		"\x02\x02\u0180\u0943\x03\x02\x02\x02\u0182\u0945\x03\x02\x02\x02\u0184"+
		"\u0947\x03\x02\x02\x02\u0186\u0949\x03\x02\x02\x02\u0188\u094C\x03\x02"+
		"\x02\x02\u018A\u0950\x03\x02\x02\x02\u018C\u0954\x03\x02\x02\x02\u018E"+
		"\u0962\x03\x02\x02\x02\u0190\u096E\x03\x02\x02\x02\u0192\u0972\x03\x02"+
		"\x02\x02\u0194\u0974\x03\x02\x02\x02\u0196\u097C\x03\x02\x02\x02\u0198"+
		"\u097E\x03\x02\x02\x02\u019A\u0984\x03\x02\x02\x02\u019C\u0991\x03\x02"+
		"\x02\x02\u019E\u09C3\x03\x02\x02\x02\u01A0\u09C5\x03\x02\x02\x02\u01A2"+
		"\u09DB\x03\x02\x02\x02\u01A4\u09DD\x03\x02\x02\x02\u01A6\u09DF\x03\x02"+
		"\x02\x02\u01A8\u09F2\x03\x02\x02\x02\u01AA\u09FF\x03\x02\x02\x02\u01AC"+
		"\u0A02\x03\x02\x02\x02\u01AE\u0A07\x03\x02\x02\x02\u01B0\u0A0C\x03\x02"+
		"\x02\x02\u01B2\u0A10\x03\x02\x02\x02\u01B4\u0A17\x03\x02\x02\x02\u01B6"+
		"\u0A1B\x03\x02\x02\x02\u01B8\u0A2F\x03\x02\x02\x02\u01BA\u0A31\x03\x02"+
		"\x02\x02\u01BC\u0A37\x03\x02\x02\x02\u01BE\u0A39\x03\x02\x02\x02\u01C0"+
		"\u0A40\x03\x02\x02\x02\u01C2\u0A56\x03\x02\x02\x02\u01C4\u0A58\x03\x02"+
		"\x02\x02\u01C6\u0A5B\x03\x02\x02\x02\u01C8\u0A8F\x03\x02\x02\x02\u01CA"+
		"\u0A98\x03\x02\x02\x02\u01CC\u0A9A\x03\x02\x02\x02\u01CE\u0A9C\x03\x02"+
		"\x02\x02\u01D0\u0A9E\x03\x02\x02\x02\u01D2\u0AA0\x03\x02\x02\x02\u01D4"+
		"\u0AA2\x03\x02\x02\x02\u01D6\u0AA4\x03\x02\x02\x02\u01D8\u0AA6\x03\x02"+
		"\x02\x02\u01DA\u01DC\x05\x96L\x02\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC"+
		"\x03\x02\x02\x02\u01DC\x03\x03\x02\x02\x02\u01DD\u01E6\x05\u01CA\xE6\x02"+
		"\u01DE\u01E6\x07@\x02\x02\u01DF\u01E0\x07P\x02\x02\u01E0\u01E1\x05b2\x02"+
		"\u01E1\u01E2\x07Q\x02\x02\u01E2\u01E6\x03\x02\x02\x02\u01E3\u01E6\x05"+
		"\b\x05\x02\u01E4\u01E6\x05\x10\t\x02\u01E5\u01DD\x03\x02\x02\x02\u01E5"+
		"\u01DE\x03\x02\x02\x02\u01E5\u01DF\x03\x02\x02\x02\u01E5\u01E3\x03\x02"+
		"\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6\x05\x03\x02\x02\x02\u01E7\u01EA"+
		"\x05\n\x06\x02\u01E8\u01EA\x05\f\x07\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9"+
		"\u01E8\x03\x02\x02\x02\u01EA\x07\x03\x02\x02\x02\u01EB\u01EE\x05\n\x06"+
		"\x02\u01EC\u01EE\x05\f\x07\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EC"+
		"\x03\x02\x02\x02\u01EE\t\x03\x02\x02\x02\u01EF\u01F9\x07\x7F\x02\x02\u01F0"+
		"\u01F9\x05\u0194\xCB\x02\u01F1\u01F9\x05\u0186\xC4\x02\u01F2\u01F9\x05"+
		"\u0196\xCC\x02\u01F3\u01F4\x07^\x02\x02\u01F4\u01F9\x05\u015A\xAE\x02"+
		"\u01F5\u01F6\x07^\x02\x02\u01F6\u01F9\x05\xD4k\x02\u01F7\u01F9\x05\u01A2"+
		"\xD2\x02\u01F8\u01EF\x03\x02\x02\x02\u01F8\u01F0\x03\x02\x02\x02\u01F8"+
		"\u01F1\x03\x02\x02\x02\u01F8\u01F2\x03\x02\x02\x02\u01F8\u01F3\x03\x02"+
		"\x02\x02\u01F8\u01F5\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9"+
		"\v\x03\x02\x02\x02\u01FA\u01FC\x05\x0E\b\x02\u01FB\u01FD\x07?\x02\x02"+
		"\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FE\x03"+
		"\x02\x02\x02\u01FE\u01FF\x05\n\x06\x02\u01FF\r\x03\x02\x02\x02\u0200\u0201"+
		"\b\b\x01\x02\u0201\u020C\x07z\x02\x02\u0202\u0203\x05\xD2j\x02\u0203\u0204"+
		"\x07z\x02\x02\u0204\u020C\x03\x02\x02\x02\u0205\u0206\x05\xEAv\x02\u0206"+
		"\u0207\x07z\x02\x02\u0207\u020C\x03\x02\x02\x02\u0208\u0209\x05\xD4k\x02"+
		"\u0209\u020A\x07z\x02\x02\u020A\u020C\x03\x02\x02\x02\u020B\u0200\x03"+
		"\x02\x02\x02\u020B\u0202\x03\x02\x02\x02\u020B\u0205\x03\x02\x02\x02\u020B"+
		"\u0208\x03\x02\x02\x02\u020C\u0219\x03\x02\x02\x02\u020D\u020E\f\x04\x02"+
		"\x02\u020E\u020F\x07\x7F\x02\x02\u020F\u0218\x07z\x02\x02\u0210\u0212"+
		"\f\x03\x02\x02\u0211\u0213\x07?\x02\x02\u0212\u0211\x03\x02\x02\x02\u0212"+
		"\u0213\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x05\u01A0"+
		"\xD1\x02\u0215\u0216\x07z\x02\x02\u0216\u0218\x03\x02\x02\x02\u0217\u020D"+
		"\x03\x02\x02\x02\u0217\u0210\x03\x02\x02\x02\u0218\u021B\x03\x02\x02\x02"+
		"\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\x0F\x03"+
		"\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u021E\x05\x12\n\x02\u021D"+
		"\u021F\x05 \x11\x02\u021E\u021D\x03\x02\x02\x02\u021E\u021F\x03\x02\x02"+
		"\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0221\x05r:\x02\u0221\x11\x03\x02"+
		"\x02\x02\u0222\u0224\x07R\x02\x02\u0223\u0225\x05\x14\v\x02\u0224\u0223"+
		"\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02"+
		"\u0226\u0227\x07S\x02\x02\u0227\x13\x03\x02\x02\x02\u0228\u022F\x05\x16"+
		"\f\x02\u0229\u022F\x05\x18\r\x02\u022A\u022B\x05\x16\f\x02\u022B\u022C"+
		"\x07u\x02\x02\u022C\u022D\x05\x18\r\x02\u022D\u022F\x03\x02\x02\x02\u022E"+
		"\u0228\x03\x02\x02\x02\u022E\u0229\x03\x02\x02\x02\u022E\u022A\x03\x02"+
		"\x02\x02\u022F\x15\x03\x02\x02\x02\u0230\u0231\t\x02\x02\x02\u0231\x17"+
		"\x03\x02\x02\x02\u0232\u0233\b\r\x01\x02\u0233\u0235\x05\x1A\x0E\x02\u0234"+
		"\u0236\x07~\x02\x02\u0235\u0234\x03\x02\x02\x02\u0235\u0236\x03\x02\x02"+
		"\x02\u0236\u023F\x03\x02\x02\x02\u0237\u0238\f\x03\x02\x02\u0238\u0239"+
		"\x07u\x02\x02\u0239\u023B\x05\x1A\x0E\x02\u023A\u023C\x07~\x02\x02\u023B"+
		"\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023E\x03\x02"+
		"\x02\x02\u023D\u0237\x03\x02\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F"+
		"\u023D\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\x19\x03\x02\x02"+
		"\x02\u0241\u023F\x03\x02\x02\x02\u0242\u0245\x05\x1C\x0F\x02\u0243\u0245"+
		"\x05\x1E\x10\x02\u0244\u0242\x03\x02\x02\x02\u0244\u0243\x03\x02\x02\x02"+
		"\u0245\x1B\x03\x02\x02\x02\u0246\u024B\x07\x7F\x02\x02\u0247\u0248\x07"+
		"\\\x02\x02\u0248\u024B\x07\x7F\x02\x02\u0249\u024B\x07@\x02\x02\u024A"+
		"\u0246\x03\x02\x02\x02\u024A\u0247\x03\x02\x02\x02\u024A\u0249\x03\x02"+
		"\x02\x02\u024B\x1D\x03\x02\x02\x02\u024C\u024D\x07\x7F\x02\x02\u024D\u0252"+
		"\x05\u0150\xA9\x02\u024E\u024F\x07\\\x02\x02\u024F\u0250\x07\x7F\x02\x02"+
		"\u0250\u0252\x05\u0150\xA9\x02\u0251\u024C\x03\x02\x02\x02\u0251\u024E"+
		"\x03\x02\x02\x02\u0252\x1F\x03\x02\x02\x02\u0253\u0254\x07P\x02\x02\u0254"+
		"\u0255\x05\u0142\xA2\x02\u0255\u0257\x07Q\x02\x02\u0256\u0258\x07*\x02"+
		"\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u025A"+
		"\x03\x02\x02\x02\u0259\u025B\x05\u01BC\xDF\x02\u025A\u0259\x03\x02\x02"+
		"\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u025E"+
		"\x05\u0108\x85\x02\u025D\u025C\x03\x02\x02\x02\u025D\u025E\x03\x02\x02"+
		"\x02\u025E\u0260\x03\x02\x02\x02\u025F\u0261\x05\u012A\x96\x02\u0260\u025F"+
		"\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261!\x03\x02\x02\x02\u0262"+
		"\u0263\x05\x06\x04\x02\u0263#\x03\x02\x02\x02\u0264\u0265\x05\x04\x03"+
		"\x02\u0265\u0267\x07P\x02\x02\u0266\u0268\x05\u0156\xAC\x02\u0267\u0266"+
		"\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02"+
		"\u0269\u026A\x07Q\x02\x02\u026A%\x03\x02\x02\x02\u026B\u026C\b\x14\x01"+
		"\x02\u026C\u02AD\x05\x04\x03\x02\u026D\u02AD\x05$\x13\x02\u026E\u026F"+
		"\x05\xD0i\x02\u026F\u0271\x07P\x02\x02\u0270\u0272\x05(\x15\x02\u0271"+
		"\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0273\x03\x02"+
		"\x02\x02\u0273\u0274\x07Q\x02\x02\u0274\u02AD\x03\x02\x02\x02\u0275\u0276"+
		"\x05\u01AA\xD6\x02\u0276\u0278\x07P\x02\x02\u0277\u0279\x05(\x15\x02\u0278"+
		"\u0277\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027A\x03\x02"+
		"\x02\x02\u027A\u027B\x07Q\x02\x02\u027B\u02AD\x03\x02\x02\x02\u027C\u027D"+
		"\x05\xD0i\x02\u027D\u027E\x05\u0158\xAD\x02\u027E\u02AD\x03\x02\x02\x02"+
		"\u027F\u0280\x05\u01AA\xD6\x02\u0280\u0281\x05\u0158\xAD\x02\u0281\u02AD"+
		"\x03\x02\x02\x02\u0282\u0283\x07\x1A\x02\x02\u0283\u0284\x07a\x02\x02"+
		"\u0284\u0285\x05\u0136\x9C\x02\u0285\u0286\x07b\x02\x02\u0286\u0287\x07"+
		"P\x02\x02\u0287\u0288\x05b2\x02\u0288\u0289\x07Q\x02\x02\u0289\u02AD\x03"+
		"\x02\x02\x02\u028A\u028B\x07<\x02\x02\u028B\u028C\x07a\x02\x02\u028C\u028D"+
		"\x05\u0136\x9C\x02\u028D\u028E\x07b\x02\x02\u028E\u028F\x07P\x02\x02\u028F"+
		"\u0290\x05b2\x02\u0290\u0291\x07Q\x02\x02\u0291\u02AD\x03\x02\x02\x02"+
		"\u0292\u0293\x075\x02\x02\u0293\u0294\x07a\x02\x02\u0294\u0295\x05\u0136"+
		"\x9C\x02\u0295\u0296\x07b\x02\x02\u0296\u0297\x07P\x02\x02\u0297\u0298"+
		"\x05b2\x02\u0298\u0299\x07Q\x02\x02\u0299\u02AD\x03\x02\x02\x02\u029A"+
		"\u029B\x07\x12\x02\x02\u029B\u029C\x07a\x02\x02\u029C\u029D\x05\u0136"+
		"\x9C\x02\u029D\u029E\x07b\x02\x02\u029E\u029F\x07P\x02\x02\u029F\u02A0"+
		"\x05b2\x02\u02A0\u02A1\x07Q\x02\x02\u02A1\u02AD\x03\x02\x02\x02\u02A2"+
		"\u02A3\x07F\x02\x02\u02A3\u02A4\x07P\x02\x02\u02A4\u02A5\x05b2\x02\u02A5"+
		"\u02A6\x07Q\x02\x02\u02A6\u02AD\x03\x02\x02\x02\u02A7\u02A8\x07F\x02\x02"+
		"\u02A8\u02A9\x07P\x02\x02\u02A9\u02AA\x05\u0136\x9C\x02\u02AA\u02AB\x07"+
		"Q\x02\x02\u02AB\u02AD\x03\x02\x02\x02\u02AC\u026B\x03\x02\x02\x02\u02AC"+
		"\u026D\x03\x02\x02\x02\u02AC\u026E\x03\x02\x02\x02\u02AC\u0275\x03\x02"+
		"\x02\x02\u02AC\u027C\x03\x02\x02\x02\u02AC\u027F\x03\x02\x02\x02\u02AC"+
		"\u0282\x03\x02\x02\x02\u02AC\u028A\x03\x02\x02\x02\u02AC\u0292\x03\x02"+
		"\x02\x02\u02AC\u029A\x03\x02\x02\x02\u02AC\u02A2\x03\x02\x02\x02\u02AC"+
		"\u02A7\x03\x02\x02\x02\u02AD\u02D0\x03\x02\x02\x02\u02AE\u02AF\f\x14\x02"+
		"\x02\u02AF\u02B0\x07R\x02\x02\u02B0\u02B1\x05^0\x02\u02B1\u02B2\x07S\x02"+
		"\x02\u02B2\u02CF\x03\x02\x02\x02\u02B3\u02B4\f\x13\x02\x02\u02B4\u02B5"+
		"\x07R\x02\x02\u02B5\u02B6\x05\u0158\xAD\x02\u02B6\u02B7\x07S\x02\x02\u02B7"+
		"\u02CF\x03\x02\x02\x02\u02B8\u02B9\f\x0E\x02\x02\u02B9\u02BB\x07|\x02"+
		"\x02\u02BA\u02BC\x07?\x02\x02\u02BB\u02BA\x03\x02\x02\x02\u02BB\u02BC"+
		"\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02CF\x05\"\x12\x02"+
		"\u02BE\u02BF\f\r\x02\x02\u02BF\u02C1\x07w\x02\x02\u02C0\u02C2\x07?\x02"+
		"\x02\u02C1\u02C0\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C3"+
		"\x03\x02\x02\x02\u02C3\u02CF\x05\"\x12\x02\u02C4\u02C5\f\f\x02\x02\u02C5"+
		"\u02C6\x07|\x02\x02\u02C6\u02CF\x05*\x16\x02\u02C7\u02C8\f\v\x02\x02\u02C8"+
		"\u02C9\x07w\x02\x02\u02C9\u02CF\x05*\x16\x02\u02CA\u02CB\f\n\x02\x02\u02CB"+
		"\u02CF\x07s\x02\x02\u02CC\u02CD\f\t\x02\x02\u02CD\u02CF\x07t\x02\x02\u02CE"+
		"\u02AE\x03\x02\x02\x02\u02CE\u02B3\x03\x02\x02\x02\u02CE\u02B8\x03\x02"+
		"\x02\x02\u02CE\u02BE\x03\x02\x02\x02\u02CE\u02C4\x03\x02\x02\x02\u02CE"+
		"\u02C7\x03\x02\x02\x02\u02CE\u02CA\x03\x02\x02\x02\u02CE\u02CC\x03\x02"+
		"\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0"+
		"\u02D1\x03\x02\x02\x02\u02D1\'\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02"+
		"\x02\u02D3\u02D4\x05\u0156\xAC\x02\u02D4)\x03\x02\x02\x02\u02D5\u02D7"+
		"\x05\x0E\b\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02"+
		"\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x05\xD2j\x02\u02D9\u02DA\x07"+
		"z\x02\x02\u02DA\u02DB\x07^\x02\x02\u02DB\u02DC\x05\xD2j\x02\u02DC\u02EC"+
		"\x03\x02\x02\x02\u02DD\u02DE\x05\x0E\b\x02\u02DE\u02DF\x07?\x02\x02\u02DF"+
		"\u02E0\x05\u01A0\xD1\x02\u02E0\u02E1\x07z\x02\x02\u02E1\u02E2\x07^\x02"+
		"\x02\u02E2\u02E3\x05\xD2j\x02\u02E3\u02EC\x03\x02\x02\x02\u02E4\u02E6"+
		"\x05\x0E\b\x02\u02E5\u02E4\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02"+
		"\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E8\x07^\x02\x02\u02E8\u02EC\x05"+
		"\xD2j\x02\u02E9\u02EA\x07^\x02\x02\u02EA\u02EC\x05\xD4k\x02\u02EB\u02D6"+
		"\x03\x02\x02\x02\u02EB\u02DD\x03\x02\x02\x02\u02EB\u02E5\x03\x02\x02\x02"+
		"\u02EB\u02E9\x03\x02\x02\x02\u02EC+\x03\x02\x02\x02\u02ED\u02F2\x05&\x14"+
		"\x02\u02EE\u02F2\x05.\x18\x02\u02EF\u02F2\x054\x1B\x02\u02F0\u02F2\x05"+
		"@!\x02\u02F1\u02ED\x03\x02\x02\x02\u02F1\u02EE\x03\x02\x02\x02\u02F1\u02EF"+
		"\x03\x02\x02\x02\u02F1\u02F0\x03\x02\x02\x02\u02F2-\x03\x02\x02\x02\u02F3"+
		"\u02F4\x07s\x02\x02\u02F4\u0312\x05D#\x02\u02F5\u02F6\x07t\x02\x02\u02F6"+
		"\u0312\x05D#\x02\u02F7\u02F8\x052\x1A\x02\u02F8\u02F9\x05D#\x02\u02F9"+
		"\u0312\x03\x02\x02\x02\u02FA\u02FB\x079\x02\x02\u02FB\u0312\x05,\x17\x02"+
		"\u02FC\u02FD\x079\x02\x02\u02FD\u02FE\x07P\x02\x02\u02FE\u02FF\x050\x19"+
		"\x02\u02FF\u0300";
	private static readonly _serializedATNSegment2: string =
		"\x07Q\x02\x02\u0300\u0312\x03\x02\x02\x02\u0301\u0302\x079\x02\x02\u0302"+
		"\u0303\x07P\x02\x02\u0303\u0304\x05\u0136\x9C\x02\u0304\u0305\x07Q\x02"+
		"\x02\u0305\u0312\x03\x02\x02\x02\u0306\u0307\x079\x02\x02\u0307\u0308"+
		"\x07~\x02\x02\u0308\u0309\x07P\x02\x02\u0309\u030A\x07\x7F\x02\x02\u030A"+
		"\u0312\x07Q\x02\x02\u030B\u030C\x07\x05\x02\x02\u030C\u030D\x07P\x02\x02"+
		"\u030D\u030E\x05\u0136\x9C\x02\u030E\u030F\x07Q\x02\x02\u030F\u0312\x03"+
		"\x02\x02\x02\u0310\u0312\x05B\"\x02\u0311\u02F3\x03\x02\x02\x02\u0311"+
		"\u02F5\x03\x02\x02\x02\u0311\u02F7\x03\x02\x02\x02\u0311\u02FA\x03\x02"+
		"\x02\x02\u0311\u02FC\x03\x02\x02\x02\u0311\u0301\x03\x02\x02\x02\u0311"+
		"\u0306\x03\x02\x02\x02\u0311\u030B\x03\x02\x02\x02\u0311\u0310\x03\x02"+
		"\x02\x02\u0312/\x03\x02\x02\x02\u0313\u0314\x05\u0136\x9C\x02\u03141\x03"+
		"\x02\x02\x02\u0315\u0316\t\x03\x02\x02\u03163\x03\x02\x02\x02\u0317\u0319"+
		"\x07z\x02\x02\u0318\u0317\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02"+
		"\u0319\u031A\x03\x02\x02\x02\u031A\u031C\x07,\x02\x02\u031B\u031D\x05"+
		"6\x1C\x02\u031C\u031B\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D"+
		"\u031E\x03\x02\x02\x02\u031E\u0320\x058\x1D\x02\u031F\u0321\x05> \x02"+
		"\u0320\u031F\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0330\x03"+
		"\x02\x02\x02\u0322\u0324\x07z\x02\x02\u0323\u0322\x03\x02\x02\x02\u0323"+
		"\u0324\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0327\x07,\x02"+
		"\x02\u0326\u0328\x056\x1C\x02\u0327\u0326\x03\x02\x02\x02\u0327\u0328"+
		"\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x07P\x02\x02"+
		"\u032A\u032B\x05\u0136\x9C\x02\u032B\u032D\x07Q\x02\x02\u032C\u032E\x05"+
		"> \x02\u032D\u032C\x03\x02\x02\x02\u032D\u032E\x03\x02\x02\x02\u032E\u0330"+
		"\x03\x02\x02\x02\u032F\u0318\x03\x02\x02\x02\u032F\u0323\x03\x02\x02\x02"+
		"\u03305\x03\x02\x02\x02\u0331\u0332\x07P\x02\x02\u0332\u0333\x05(\x15"+
		"\x02\u0333\u0334\x07Q\x02\x02\u03347\x03\x02\x02\x02\u0335\u0337\x05\xCC"+
		"g\x02\u0336\u0338\x05:\x1E\x02\u0337\u0336\x03\x02\x02\x02\u0337\u0338"+
		"\x03\x02\x02\x02\u03389\x03\x02\x02\x02\u0339\u033B\x05\u012C\x97\x02"+
		"\u033A\u033C\x05:\x1E\x02\u033B\u033A\x03\x02\x02\x02\u033B\u033C\x03"+
		"\x02\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033F\x05<\x1F\x02\u033E"+
		"\u0339\x03\x02\x02\x02\u033E\u033D\x03\x02\x02\x02\u033F;\x03\x02\x02"+
		"\x02\u0340\u0341\b\x1F\x01\x02\u0341\u0342\x07R\x02\x02\u0342\u0343\x05"+
		"b2\x02\u0343\u0345\x07S\x02\x02\u0344\u0346\x05\u0108\x85\x02\u0345\u0344"+
		"\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0350\x03\x02\x02\x02"+
		"\u0347\u0348\f\x03\x02\x02\u0348\u0349\x07R\x02\x02\u0349\u034A\x05d3"+
		"\x02\u034A\u034C\x07S\x02\x02\u034B\u034D\x05\u0108\x85\x02\u034C\u034B"+
		"\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034F\x03\x02\x02\x02"+
		"\u034E\u0347\x03\x02\x02\x02\u034F\u0352\x03\x02\x02\x02\u0350\u034E\x03"+
		"\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351=\x03\x02\x02\x02\u0352"+
		"\u0350\x03\x02\x02\x02\u0353\u0355\x07P\x02\x02\u0354\u0356\x05(\x15\x02"+
		"\u0355\u0354\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0357\x03"+
		"\x02\x02\x02\u0357\u035A\x07Q\x02\x02\u0358\u035A\x05\u0158\xAD\x02\u0359"+
		"\u0353\x03\x02\x02\x02\u0359\u0358\x03\x02\x02\x02\u035A?\x03\x02\x02"+
		"\x02\u035B\u035D\x07z\x02\x02\u035C\u035B\x03\x02\x02\x02\u035C\u035D"+
		"\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u035F\x07\x16\x02\x02"+
		"\u035F\u0368\x05D#\x02\u0360\u0362\x07z\x02\x02\u0361\u0360\x03\x02\x02"+
		"\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0364"+
		"\x07\x16\x02\x02\u0364\u0365\x07R\x02\x02\u0365\u0366\x07S\x02\x02\u0366"+
		"\u0368\x05D#\x02\u0367\u035C\x03\x02\x02\x02\u0367\u0361\x03\x02\x02\x02"+
		"\u0368A\x03\x02\x02\x02\u0369\u036A\x07-\x02\x02\u036A\u036B\x07P\x02"+
		"\x02\u036B\u036C\x05b2\x02\u036C\u036D\x07Q\x02\x02\u036DC\x03\x02\x02"+
		"\x02\u036E\u0375\x05,\x17\x02\u036F\u0370\x07P\x02\x02\u0370\u0371\x05"+
		"\u0136\x9C\x02\u0371\u0372\x07Q\x02\x02\u0372\u0373\x05D#\x02\u0373\u0375"+
		"\x03\x02\x02\x02\u0374\u036E\x03\x02\x02\x02\u0374\u036F\x03\x02\x02\x02"+
		"\u0375E\x03\x02\x02\x02\u0376\u0377\b$\x01\x02\u0377\u0378\x05D#\x02\u0378"+
		"\u0381\x03\x02\x02\x02\u0379\u037A\f\x04\x02\x02\u037A\u037B\x07}\x02"+
		"\x02\u037B\u0380\x05D#\x02\u037C\u037D\f\x03\x02\x02\u037D\u037E\x07v"+
		"\x02\x02\u037E\u0380\x05D#\x02\u037F\u0379\x03\x02\x02\x02\u037F\u037C"+
		"\x03\x02\x02\x02\u0380\u0383\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02"+
		"\u0381\u0382\x03\x02\x02\x02\u0382G\x03\x02\x02\x02\u0383\u0381\x03\x02"+
		"\x02\x02\u0384\u0385\b%\x01\x02\u0385\u0386\x05F$\x02\u0386\u0392\x03"+
		"\x02\x02\x02\u0387\u0388\f\x05\x02\x02\u0388\u0389\x07X\x02\x02\u0389"+
		"\u0391\x05F$\x02\u038A\u038B\f\x04\x02\x02\u038B\u038C\x07Y\x02\x02\u038C"+
		"\u0391\x05F$\x02\u038D\u038E\f\x03\x02\x02\u038E\u038F\x07Z\x02\x02\u038F"+
		"\u0391\x05F$\x02\u0390\u0387\x03\x02\x02\x02\u0390\u038A\x03\x02\x02\x02"+
		"\u0390\u038D\x03\x02\x02\x02\u0391\u0394\x03\x02\x02\x02\u0392\u0390\x03"+
		"\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393I\x03\x02\x02\x02\u0394"+
		"\u0392\x03\x02\x02\x02\u0395\u0396\b&\x01\x02\u0396\u0397\x05H%\x02\u0397"+
		"\u03A0\x03\x02\x02\x02\u0398\u0399\f\x04\x02\x02\u0399\u039A\x07V\x02"+
		"\x02\u039A\u039F\x05H%\x02\u039B\u039C\f\x03\x02\x02\u039C\u039D\x07W"+
		"\x02\x02\u039D\u039F\x05H%\x02\u039E\u0398\x03\x02\x02\x02\u039E\u039B"+
		"\x03\x02\x02\x02\u039F\u03A2\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02"+
		"\u03A0\u03A1\x03\x02\x02\x02\u03A1K\x03\x02\x02\x02\u03A2\u03A0\x03\x02"+
		"\x02\x02\u03A3\u03A4\b\'\x01\x02\u03A4\u03A5\x05J&\x02\u03A5\u03AF\x03"+
		"\x02\x02\x02\u03A6\u03A7\f\x04\x02\x02\u03A7\u03A8\x07k\x02\x02\u03A8"+
		"\u03AE\x05J&\x02\u03A9\u03AA\f\x03\x02\x02\u03AA\u03AB\x05\u01C4\xE3\x02"+
		"\u03AB\u03AC\x05J&\x02\u03AC\u03AE\x03\x02\x02\x02\u03AD\u03A6\x03\x02"+
		"\x02\x02\u03AD\u03A9\x03\x02\x02\x02\u03AE\u03B1\x03\x02\x02\x02\u03AF"+
		"\u03AD\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0M\x03\x02\x02"+
		"\x02\u03B1\u03AF\x03\x02\x02\x02\u03B2\u03B3\b(\x01\x02\u03B3\u03B4\x05"+
		"L\'\x02\u03B4\u03C3\x03\x02\x02\x02\u03B5\u03B6\f\x06\x02\x02\u03B6\u03B7"+
		"\x07a\x02\x02\u03B7\u03C2\x05L\'\x02\u03B8\u03B9\f\x05\x02\x02\u03B9\u03BA"+
		"\x07b\x02\x02\u03BA\u03C2\x05L\'\x02\u03BB\u03BC\f\x04\x02\x02\u03BC\u03BD"+
		"\x07o\x02\x02\u03BD\u03C2\x05L\'\x02\u03BE\u03BF\f\x03\x02\x02\u03BF\u03C0"+
		"\x07p\x02\x02\u03C0\u03C2\x05L\'\x02\u03C1\u03B5\x03\x02\x02\x02\u03C1"+
		"\u03B8\x03\x02\x02\x02\u03C1\u03BB\x03\x02\x02\x02\u03C1\u03BE\x03\x02"+
		"\x02\x02\u03C2\u03C5\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C3"+
		"\u03C4\x03\x02\x02\x02\u03C4O\x03\x02\x02\x02\u03C5\u03C3\x03\x02\x02"+
		"\x02\u03C6\u03C7\b)\x01\x02\u03C7\u03C8\x05N(\x02\u03C8\u03D1\x03\x02"+
		"\x02\x02\u03C9\u03CA\f\x04\x02\x02\u03CA\u03CB\x07m\x02\x02\u03CB\u03D0"+
		"\x05N(\x02\u03CC\u03CD\f\x03\x02\x02\u03CD\u03CE\x07n\x02\x02\u03CE\u03D0"+
		"\x05N(\x02\u03CF\u03C9\x03\x02\x02\x02\u03CF\u03CC\x03\x02\x02\x02\u03D0"+
		"\u03D3\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03\x02"+
		"\x02\x02\u03D2Q\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D4\u03D5"+
		"\b*\x01\x02\u03D5\u03D6\x05P)\x02\u03D6\u03DC\x03\x02\x02\x02\u03D7\u03D8"+
		"\f\x03\x02\x02\u03D8\u03D9\x07\\\x02\x02\u03D9\u03DB\x05P)\x02\u03DA\u03D7"+
		"\x03\x02\x02\x02\u03DB\u03DE\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02"+
		"\u03DC\u03DD\x03\x02\x02\x02\u03DDS\x03\x02\x02\x02\u03DE\u03DC\x03\x02"+
		"\x02\x02\u03DF\u03E0\b+\x01\x02\u03E0\u03E1\x05R*\x02\u03E1\u03E7\x03"+
		"\x02\x02\x02\u03E2\u03E3\f\x03\x02\x02\u03E3\u03E4\x07[\x02\x02\u03E4"+
		"\u03E6\x05R*\x02\u03E5\u03E2\x03\x02\x02\x02\u03E6\u03E9\x03\x02\x02\x02"+
		"\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8U\x03\x02"+
		"\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03EA\u03EB\b,\x01\x02\u03EB\u03EC"+
		"\x05T+\x02\u03EC\u03F2\x03\x02\x02\x02\u03ED\u03EE\f\x03\x02\x02\u03EE"+
		"\u03EF\x07]\x02\x02\u03EF\u03F1\x05T+\x02\u03F0\u03ED\x03\x02\x02\x02"+
		"\u03F1\u03F4\x03\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03"+
		"\x02\x02\x02\u03F3W\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F5"+
		"\u03F6\b-\x01\x02\u03F6\u03F7\x05V,\x02\u03F7\u03FD\x03\x02\x02\x02\u03F8"+
		"\u03F9\f\x03\x02\x02\u03F9\u03FA\x07q\x02\x02\u03FA\u03FC\x05V,\x02\u03FB"+
		"\u03F8\x03\x02\x02\x02\u03FC\u03FF\x03\x02\x02\x02\u03FD\u03FB\x03\x02"+
		"\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FEY\x03\x02\x02\x02\u03FF\u03FD"+
		"\x03\x02\x02\x02\u0400\u0401\b.\x01\x02\u0401\u0402\x05X-\x02\u0402\u0408"+
		"\x03\x02\x02\x02\u0403\u0404\f\x03\x02\x02\u0404\u0405\x07r\x02\x02\u0405"+
		"\u0407\x05X-\x02\u0406\u0403\x03\x02\x02\x02\u0407\u040A\x03\x02\x02\x02"+
		"\u0408\u0406\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409[\x03\x02"+
		"\x02\x02\u040A\u0408\x03\x02\x02\x02\u040B\u0413\x05Z.\x02\u040C\u040D"+
		"\x05Z.\x02\u040D\u040E\x07x\x02\x02\u040E\u040F\x05b2\x02\u040F\u0410"+
		"\x07y\x02\x02\u0410\u0411\x05^0\x02\u0411\u0413\x03\x02\x02\x02\u0412"+
		"\u040B\x03\x02\x02\x02\u0412\u040C\x03\x02\x02\x02\u0413]\x03\x02\x02"+
		"\x02\u0414\u041B\x05\\/\x02\u0415\u0416\x05Z.\x02\u0416\u0417\x05`1\x02"+
		"\u0417\u0418\x05\u0154\xAB\x02\u0418\u041B\x03\x02\x02\x02\u0419\u041B"+
		"\x05\u01BA\xDE\x02\u041A\u0414\x03\x02\x02\x02\u041A\u0415\x03\x02\x02"+
		"\x02\u041A\u0419\x03\x02\x02\x02\u041B_\x03\x02\x02\x02\u041C\u0428\x07"+
		"`\x02\x02\u041D\u0428\x07e\x02\x02\u041E\u0428\x07f\x02\x02\u041F\u0428"+
		"\x07g\x02\x02\u0420\u0428\x07c\x02\x02\u0421\u0428\x07d\x02\x02\u0422"+
		"\u0428\x05\u01C6\xE4\x02\u0423\u0428\x07l\x02\x02\u0424\u0428\x07i\x02"+
		"\x02\u0425\u0428\x07h\x02\x02\u0426\u0428\x07j\x02\x02\u0427\u041C\x03"+
		"\x02\x02\x02\u0427\u041D\x03\x02\x02\x02\u0427\u041E\x03\x02\x02\x02\u0427"+
		"\u041F\x03\x02\x02\x02\u0427\u0420\x03\x02\x02\x02\u0427\u0421\x03\x02"+
		"\x02\x02\u0427\u0422\x03\x02\x02\x02\u0427\u0423\x03\x02\x02\x02\u0427"+
		"\u0424\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0427\u0426\x03\x02"+
		"\x02\x02\u0428a\x03\x02\x02\x02\u0429\u042A\b2\x01\x02\u042A\u042B\x05"+
		"^0\x02\u042B\u0431\x03\x02\x02\x02\u042C\u042D\f\x03\x02\x02\u042D\u042E"+
		"\x07u\x02\x02\u042E\u0430\x05^0\x02\u042F\u042C\x03\x02\x02\x02\u0430"+
		"\u0433\x03\x02\x02\x02\u0431\u042F\x03\x02\x02\x02\u0431\u0432\x03\x02"+
		"\x02\x02\u0432c\x03\x02\x02\x02\u0433\u0431\x03\x02\x02\x02\u0434\u0435"+
		"\x05\\/\x02\u0435e\x03\x02\x02\x02\u0436\u0439\x05j6\x02\u0437\u0439\x05"+
		"h5\x02\u0438\u0436\x03\x02\x02\x02\u0438\u0437\x03\x02\x02\x02\u0439g"+
		"\x03\x02\x02\x02\u043A\u046E\x05\xB6\\\x02\u043B\u043D\x05\u0108\x85\x02"+
		"\u043C\u043B\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043E\x03"+
		"\x02\x02\x02\u043E\u046E\x05p9\x02\u043F\u0441\x05\u0108\x85\x02\u0440"+
		"\u043F\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441\u0442\x03\x02"+
		"\x02\x02\u0442\u046E\x05r:\x02\u0443\u0445\x05\u0108\x85\x02\u0444\u0443"+
		"\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02"+
		"\u0446\u046E\x05v<\x02\u0447\u0449\x05\u0108\x85\x02\u0448\u0447\x03\x02"+
		"\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A"+
		"\u046E\x05x=\x02\u044B\u044D\x05\u0108\x85\x02\u044C\u044B\x03\x02\x02"+
		"\x02\u044C\u044D\x03\x02\x02\x02\u044D\u044E\x03\x02\x02\x02\u044E\u046E"+
		"\x05\x82B\x02\u044F\u0451\x05\u0108\x85\x02\u0450\u044F\x03\x02\x02\x02"+
		"\u0450\u0451\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\u046E\x05"+
		"~@\x02\u0453\u0455\x05\u0108\x85\x02\u0454\u0453\x03\x02\x02\x02\u0454"+
		"\u0455\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u046E\x05\x80"+
		"A\x02\u0457\u0459\x05\u0108\x85\x02\u0458\u0457\x03\x02\x02\x02\u0458"+
		"\u0459\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u046E\x05\x8C"+
		"G\x02\u045B\u045D\x05\u0108\x85\x02\u045C\u045B\x03\x02\x02\x02\u045C"+
		"\u045D\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u046E\x05\x8E"+
		"H\x02\u045F\u0461\x05\u0108\x85\x02\u0460\u045F\x03\x02\x02\x02\u0460"+
		"\u0461\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u046E\x05\x90"+
		"I\x02\u0463\u0465\x05\u0108\x85\x02\u0464\u0463\x03\x02\x02\x02\u0464"+
		"\u0465\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466\u046E\x05\x92"+
		"J\x02\u0467\u046E\x05\xA6T\x02\u0468\u046E\x05\x94K\x02\u0469\u046B\x05"+
		"\u0108\x85\x02\u046A\u0469\x03\x02\x02\x02\u046A\u046B\x03\x02\x02\x02"+
		"\u046B\u046C\x03\x02\x02\x02\u046C\u046E\x05\u01B0\xD9\x02\u046D\u043A"+
		"\x03\x02\x02\x02\u046D\u043C\x03\x02\x02\x02\u046D\u0440\x03\x02\x02\x02"+
		"\u046D\u0444\x03\x02\x02\x02\u046D\u0448\x03\x02\x02\x02\u046D\u044C\x03"+
		"\x02\x02\x02\u046D\u0450\x03\x02\x02\x02\u046D\u0454\x03\x02\x02\x02\u046D"+
		"\u0458\x03\x02\x02\x02\u046D\u045C\x03\x02\x02\x02\u046D\u0460\x03\x02"+
		"\x02\x02\u046D\u0464\x03\x02\x02\x02\u046D\u0467\x03\x02\x02\x02\u046D"+
		"\u0468\x03\x02\x02\x02\u046D\u046A\x03\x02\x02\x02\u046Ei\x03\x02\x02"+
		"\x02\u046F\u0471\x05\u0108\x85\x02\u0470\u046F\x03\x02\x02\x02\u0470\u0471"+
		"\x03\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0473\x07\x7F\x02\x02"+
		"\u0473\u0474\x07y\x02\x02\u0474\u0477\x05f4\x02\u0475\u0477\x05l7\x02"+
		"\u0476\u0470\x03\x02\x02\x02\u0476\u0475\x03\x02\x02\x02\u0477k\x03\x02"+
		"\x02\x02\u0478\u047A\x05\u0108\x85\x02\u0479\u0478\x03\x02\x02\x02\u0479"+
		"\u047A\x03\x02\x02\x02\u047A\u047E\x03\x02\x02\x02\u047B\u047C\x07\n\x02"+
		"\x02\u047C\u047F\x05d3\x02\u047D\u047F\x07\x15\x02\x02\u047E\u047B\x03"+
		"\x02\x02\x02\u047E\u047D\x03\x02\x02\x02\u047F\u0480\x03\x02\x02\x02\u0480"+
		"\u0481\x07y\x02\x02\u0481\u0482\x05n8\x02\u0482m\x03\x02\x02\x02\u0483"+
		"\u0487\x05h5\x02\u0484\u0486\x05h5\x02\u0485\u0484\x03\x02\x02\x02\u0486"+
		"\u0489\x03\x02\x02\x02\u0487\u0485\x03\x02\x02\x02\u0487\u0488\x03\x02"+
		"\x02\x02\u0488o\x03\x02\x02\x02\u0489\u0487\x03\x02\x02\x02\u048A\u048C"+
		"\x05b2\x02\u048B\u048A\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02\u048C"+
		"\u048D\x03\x02\x02\x02\u048D\u048E\x07{\x02\x02\u048Eq\x03\x02\x02\x02"+
		"\u048F\u0491\x07T\x02\x02\u0490\u0492\x05t;\x02\u0491\u0490\x03\x02\x02"+
		"\x02\u0491\u0492\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494"+
		"\x07U\x02\x02\u0494s\x03\x02\x02\x02\u0495\u0499\x05f4\x02\u0496\u0498"+
		"\x05f4\x02\u0497\u0496\x03\x02\x02\x02\u0498\u049B\x03\x02\x02\x02\u0499"+
		"\u0497\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049Au\x03\x02\x02"+
		"\x02\u049B\u0499\x03\x02\x02\x02\u049C\u049D\x07&\x02\x02\u049D\u049E"+
		"\x07P\x02\x02\u049E\u049F\x05|?\x02\u049F\u04A0\x07Q\x02\x02\u04A0\u04A1"+
		"\x05f4\x02\u04A1\u04AB\x03\x02\x02\x02\u04A2\u04A3\x07&\x02\x02\u04A3"+
		"\u04A4\x07P\x02\x02\u04A4\u04A5\x05|?\x02\u04A5\u04A6\x07Q\x02\x02\u04A6"+
		"\u04A7\x05f4\x02\u04A7\u04A8\x07\x1B\x02\x02\u04A8\u04A9\x05f4\x02\u04A9"+
		"\u04AB\x03\x02\x02\x02\u04AA\u049C\x03\x02\x02\x02\u04AA\u04A2\x03\x02"+
		"\x02\x02\u04ABw\x03\x02\x02\x02\u04AC\u04AD\x07>\x02\x02\u04AD\u04AE\x07"+
		"P\x02\x02\u04AE\u04AF\x05|?\x02\u04AF\u04B0\x07Q\x02\x02\u04B0\u04B1\x07"+
		"T\x02\x02\u04B1\u04B2\x05z>\x02\u04B2\u04B3\x07U\x02\x02\u04B3y\x03\x02"+
		"\x02\x02\u04B4\u04B8\x05l7\x02\u04B5\u04B7\x05l7\x02\u04B6\u04B5\x03\x02"+
		"\x02\x02\u04B7\u04BA\x03\x02\x02\x02\u04B8\u04B6\x03\x02\x02\x02\u04B8"+
		"\u04B9\x03\x02\x02\x02\u04B9{\x03\x02\x02\x02\u04BA\u04B8\x03\x02\x02"+
		"\x02\u04BB\u04CC\x05b2\x02\u04BC\u04BE\x05\u0108\x85\x02\u04BD\u04BC\x03"+
		"\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF"+
		"\u04C0\x05\xBC_\x02\u04C0\u04C1\x05\u0122\x92\x02\u04C1\u04C2\x07`\x02"+
		"\x02\u04C2\u04C3\x05\u0154\xAB\x02\u04C3\u04CC\x03\x02\x02\x02\u04C4\u04C6"+
		"\x05\u0108\x85\x02\u04C5\u04C4\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02"+
		"\x02\u04C6\u04C7\x03\x02\x02\x02\u04C7\u04C8\x05\xBC_\x02\u04C8\u04C9"+
		"\x05\u0122\x92\x02\u04C9\u04CA\x05\u0158\xAD\x02\u04CA\u04CC\x03\x02\x02"+
		"\x02\u04CB\u04BB\x03\x02\x02\x02\u04CB\u04BD\x03\x02\x02\x02\u04CB\u04C5"+
		"\x03\x02\x02\x02\u04CC}\x03\x02\x02\x02\u04CD\u04CE\x07O\x02\x02\u04CE"+
		"\u04CF\x07P\x02\x02\u04CF\u04D0\x05|?\x02\u04D0\u04D1\x07Q\x02\x02\u04D1"+
		"\u04D2\x05f4\x02\u04D2\x7F\x03\x02\x02\x02\u04D3\u04D4\x07\x17\x02\x02"+
		"\u04D4\u04D5\x05r:\x02\u04D5\u04D6\x07O\x02\x02\u04D6\u04D7\x07P\x02\x02"+
		"\u04D7\u04D8\x05b2\x02\u04D8\u04D9\x07Q\x02\x02\u04D9\u04DA\x07{\x02\x02"+
		"\u04DA\x81\x03\x02\x02\x02\u04DB\u04DC\x07#\x02\x02\u04DC\u04DD\x07P\x02"+
		"\x02\u04DD\u04DF\x05\x86D\x02\u04DE\u04E0\x05|?\x02\u04DF\u04DE\x03\x02"+
		"\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1"+
		"\u04E3\x07{\x02\x02\u04E2\u04E4\x05b2\x02\u04E3\u04E2\x03\x02\x02\x02"+
		"\u04E3\u04E4\x03\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\u04E6\x07"+
		"Q\x02\x02\u04E6\u04E7\x05f4\x02\u04E7\x83\x03\x02\x02\x02\u04E8\u04E9"+
		"\x07#\x02\x02\u04E9\u04EA\x07P\x02\x02\u04EA\u04EB\x05\x88E\x02\u04EB"+
		"\u04EC\x07y\x02\x02\u04EC\u04ED\x05\x8AF\x02\u04ED\u04EE\x07Q\x02\x02"+
		"\u04EE\u04EF\x05f4\x02\u04EF\x85\x03\x02\x02\x02\u04F0\u04F4\x05p9\x02"+
		"\u04F1\u04F4\x05\xA6T\x02\u04F2\u04F4\x05\xB2Z\x02\u04F3\u04F0\x03\x02"+
		"\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F3\u04F2\x03\x02\x02\x02\u04F4"+
		"\x87\x03\x02\x02\x02\u04F5\u04F7\x05\u0108\x85\x02\u04F6\u04F5\x03\x02"+
		"\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8"+
		"\u04F9\x05\xBC_\x02\u04F9\u04FA\x05\u0122\x92\x02\u04FA\x89\x03\x02\x02"+
		"\x02\u04FB\u04FE\x05b2\x02\u04FC\u04FE\x05\u0158\xAD\x02\u04FD\u04FB\x03"+
		"\x02\x02\x02\u04FD\u04FC\x03\x02\x02\x02\u04FE\x8B\x03\x02\x02\x02\u04FF"+
		"\u0500\x07%\x02\x02\u0500\u0501\x07\x7F\x02\x02\u0501\u0502\x07{\x02\x02"+
		"\u0502\x8D\x03\x02\x02\x02\u0503\u0504\x07\t\x02\x02\u0504\u0505\x07{"+
		"\x02\x02\u0505\x8F\x03\x02\x02\x02\u0506\u0507\x07\x13\x02\x02\u0507\u0508"+
		"\x07{\x02\x02\u0508\x91\x03\x02\x02\x02\u0509\u050B\x076\x02\x02\u050A"+
		"\u050C\x05b2\x02\u050B\u050A\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02"+
		"\u050C\u050D\x03\x02\x02\x02\u050D\u0513\x07{\x02\x02\u050E\u050F\x07"+
		"6\x02\x02\u050F\u0510\x05\u0158\xAD\x02\u0510\u0511\x07{\x02\x02\u0511"+
		"\u0513\x03\x02\x02\x02\u0512\u0509\x03\x02\x02\x02\u0512\u050E\x03\x02"+
		"\x02\x02\u0513\x93\x03\x02\x02\x02\u0514\u0517\x05\xB2Z\x02\u0515\u0517"+
		"\x05\xA0Q\x02\u0516\u0514\x03\x02\x02\x02\u0516\u0515\x03\x02\x02\x02"+
		"\u0517\x95\x03\x02\x02\x02\u0518\u0519\bL\x01\x02\u0519\u051A\x05\x9E"+
		"P\x02\u051A\u051F\x03\x02\x02\x02\u051B\u051C\f\x03\x02\x02\u051C\u051E"+
		"\x05\x9EP\x02\u051D\u051B\x03\x02\x02\x02\u051E\u0521\x03\x02\x02\x02"+
		"\u051F\u051D\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520\x97\x03"+
		"\x02\x02\x02\u0521\u051F\x03\x02\x02\x02\u0522\u0524\x05\u0168\xB5\x02"+
		"\u0523\u0522\x03\x02\x02\x02\u0523\u0524\x03\x02\x02\x02\u0524\x99\x03"+
		"\x02\x02\x02\u0525\u0526\x05\x9CO\x02\u0526\u0527\x07T\x02\x02\u0527\u0528"+
		"\x05\x98M\x02\u0528\u0529\x07U\x02\x02\u0529\u052A\x07{\x02\x02\u052A"+
		"\x9B\x03\x02\x02\x02\u052B\u052D\x05\u0166\xB4\x02\u052C\u052E\x05\u0108"+
		"\x85\x02\u052D\u052C\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E"+
		"\u0530\x03\x02\x02\x02\u052F\u0531\x05\x0E\b\x02\u0530\u052F\x03\x02\x02"+
		"\x02\u0530\u0531\x03\x02\x02\x02\u0531\u0532\x03\x02\x02\x02\u0532\u0534"+
		"\x05\u0162\xB2\x02\u0533\u0535\x05\u0164\xB3\x02\u0534\u0533\x03\x02\x02"+
		"\x02\u0534\u0535\x03\x02\x02\x02\u0535\u0537\x03\x02\x02\x02\u0536\u0538"+
		"\x05\u017A\xBE\x02\u0537\u0536\x03\x02\x02\x02\u0537\u0538\x03\x02\x02"+
		"\x02\u0538\u0541\x03\x02\x02\x02\u0539\u053B\x05\u0166\xB4\x02\u053A\u053C"+
		"\x05\u0108\x85\x02\u053B\u053A\x03\x02\x02\x02\u053B\u053C\x03\x02\x02"+
		"\x02\u053C\u053E\x03\x02\x02\x02\u053D\u053F\x05\u017A\xBE\x02\u053E\u053D"+
		"\x03\x02\x02\x02\u053E\u053F\x03\x02\x02\x02\u053F\u0541\x03\x02\x02\x02"+
		"\u0540\u052B\x03\x02\x02\x02\u0540\u0539\x03\x02\x02\x02\u0541\x9D\x03"+
		"\x02\x02\x02\u0542\u054F\x05\xA6T\x02\u0543\u054F\x05\xB0Y\x02\u0544\u054F"+
		"\x05\xA2R\x02\u0545\u054F\x05\x9AN\x02\u0546\u054F\x05\u0148\xA5\x02\u0547"+
		"\u054F\x05\u0198\xCD\x02\u0548\u054F\x05\u01AC\xD7\x02\u0549\u054F\x05"+
		"\u01AE\xD8\x02\u054A\u054F\x05\u0106\x84\x02\u054B\u054F\x05\xEEx\x02"+
		"\u054C\u054F\x05\xB6\\\x02\u054D\u054F\x05\xB8]\x02\u054E\u0542\x03\x02"+
		"\x02\x02\u054E\u0543\x03\x02\x02\x02\u054E\u0544\x03\x02\x02\x02\u054E"+
		"\u0545\x03\x02\x02\x02\u054E\u0546\x03\x02\x02\x02\u054E\u0547\x03\x02"+
		"\x02\x02\u054E\u0548\x03\x02\x02\x02\u054E\u0549\x03\x02\x02\x02\u054E"+
		"\u054A\x03\x02\x02\x02\u054E\u054B\x03\x02\x02\x02\u054E\u054C\x03\x02"+
		"\x02\x02\u054E\u054D\x03\x02\x02\x02\u054F\x9F\x03\x02\x02\x02\u0550\u0558"+
		"\x05\u0104\x83\x02\u0551\u0558\x05\xFC\x7F\x02\u0552\u0558\x05\u0100\x81"+
		"\x02\u0553\u0558\x05\u0102\x82\x02\u0554\u0558\x05\xB4[\x02\u0555\u0558"+
		"\x05\xA4S\x02\u0556\u0558\x05\xDEp\x02\u0557\u0550\x03\x02\x02\x02\u0557"+
		"\u0551\x03\x02\x02\x02\u0557\u0552\x03\x02\x02\x02\u0557\u0553\x03\x02"+
		"\x02\x02\u0557\u0554\x03\x02\x02\x02\u0557\u0555\x03\x02\x02\x02\u0557"+
		"\u0556\x03\x02\x02\x02\u0558\xA1\x03\x02\x02\x02\u0559\u055C\x05\xB2Z"+
		"\x02\u055A\u055C\x05\xA0Q\x02\u055B\u0559\x03\x02\x02\x02\u055B\u055A"+
		"\x03\x02\x02\x02\u055C\xA3\x03\x02\x02\x02\u055D\u055E\x07J\x02\x02\u055E"+
		"\u0560\x07\x7F\x02\x02\u055F\u0561\x05\u0108\x85\x02\u0560\u055F\x03\x02"+
		"\x02\x02\u0560\u0561\x03\x02\x02\x02\u0561\u0562\x03\x02\x02\x02\u0562"+
		"\u0563\x07`\x02\x02\u0563\u0564\x05\u0136\x9C\x02\u0564\u0565\x07{\x02"+
		"\x02\u0565\xA5\x03\x02\x02\x02\u0566\u0567\x05\xA8U\x02\u0567\u0568\x07"+
		"{\x02\x02\u0568\xA7\x03\x02\x02\x02\u0569\u056B\x05\u0108\x85\x02\u056A"+
		"\u0569\x03\x02\x02\x02\u056A\u056B\x03\x02\x02\x02\u056B\u056D\x03\x02"+
		"\x02\x02\u056C\u056E\x05\xC0a\x02\u056D\u056C\x03\x02\x02\x02\u056D\u056E"+
		"\x03\x02\x02\x02\u056E\u056F\x03\x02\x02\x02\u056F\u0571\x05\xC8e\x02"+
		"\u0570\u0572\x05\xAAV\x02\u0571\u0570\x03\x02\x02\x02\u0571\u0572\x03"+
		"\x02\x02\x02\u0572\xA9\x03\x02\x02\x02\u0573\u057D\x03\x02\x02\x02\u0574"+
		"\u0579\x05\xACW\x02\u0575\u0576\x07u\x02\x02\u0576\u0578\x05\xACW\x02"+
		"\u0577\u0575\x03\x02\x02\x02\u0578\u057B\x03\x02\x02\x02\u0579\u0577\x03"+
		"\x02\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057D\x03\x02\x02\x02\u057B"+
		"\u0579\x03\x02\x02\x02\u057C\u0573\x03\x02\x02\x02\u057C\u0574\x03\x02"+
		"\x02\x02\u057D\xAB\x03\x02\x02\x02\u057E\u0580\x05\u012C\x97\x02\u057F"+
		"\u057E\x03\x02\x02\x02\u0580\u0583\x03\x02\x02\x02\u0581\u057F\x03\x02"+
		"\x02\x02\u0581\u0582\x03\x02\x02\x02\u0582\u0584\x03\x02\x02\x02\u0583"+
		"\u0581\x03\x02\x02\x02\u0584\u058C\x05\u0134\x9B\x02\u0585\u0587\x07R"+
		"\x02\x02\u0586\u0588\x07\x80\x02\x02\u0587\u0586\x03\x02\x02\x02\u0587"+
		"\u0588\x03\x02\x02\x02\u0588\u0589\x03\x02\x02\x02\u0589\u058B\x07S\x02"+
		"\x02\u058A\u0585\x03\x02\x02\x02\u058B\u058E\x03\x02\x02\x02\u058C\u058A"+
		"\x03\x02\x02\x02\u058C\u058D\x03\x02\x02\x02\u058D\u0591\x03\x02\x02\x02"+
		"\u058E\u058C\x03\x02\x02\x02\u058F\u0590\x07`\x02\x02\u0590\u0592\x05"+
		"\u0154\xAB\x02\u0591\u058F\x03\x02\x02\x02\u0591\u0592\x03\x02\x02\x02"+
		"\u0592\xAD\x03\x02\x02\x02\u0593\u0594\x07R\x02\x02\u0594\u0595\x07S\x02"+
		"\x02\u0595\xAF\x03\x02\x02\x02\u0596\u0598\x05\u0108\x85\x02\u0597\u0596"+
		"\x03\x02\x02\x02\u0597\u0598\x03\x02\x02\x02\u0598\u059A\x03\x02\x02\x02"+
		"\u0599\u059B\x05\xC0a\x02\u059A\u0599\x03\x02\x02\x02\u059A\u059B\x03"+
		"\x02\x02\x02\u059B\u059C\x03\x02\x02\x02\u059C\u059E\x05\u014A\xA6\x02"+
		"\u059D\u059F\x05\u0174\xBB\x02\u059E\u059D\x03\x02\x02\x02\u059E\u059F"+
		"\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A1\x07{\x02\x02"+
		"\u05A1\xB1\x03\x02\x02\x02\u05A2\u05A4\x05\xBC_\x02\u05A3\u05A2\x03\x02"+
		"\x02\x02\u05A3\u05A4\x03\x02\x02\x02\u05A4\u05A6\x03\x02\x02\x02\u05A5"+
		"\u05A7\x05\u011E\x90\x02\u05A6\u05A5\x03\x02\x02\x02\u05A6\u05A7\x03\x02"+
		"\x02\x02\u05A7\u05A8\x03\x02";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\u05A8\u05B1\x07{\x02\x02\u05A9\u05AB\x05\u0108\x85\x02\u05AA"+
		"\u05AC\x05\xBC_\x02\u05AB\u05AA\x03\x02\x02\x02\u05AB\u05AC\x03\x02\x02"+
		"\x02\u05AC\u05AD\x03\x02\x02\x02\u05AD\u05AE\x05\u011E\x90\x02\u05AE\u05AF"+
		"\x07{\x02\x02\u05AF\u05B1\x03\x02\x02\x02\u05B0\u05A3\x03\x02\x02\x02"+
		"\u05B0\u05A9\x03\x02\x02\x02\u05B1\xB3\x03\x02\x02\x02\u05B2\u05B3\x07"+
		";\x02\x02\u05B3\u05B4\x07P\x02\x02\u05B4\u05B5\x05d3\x02\u05B5\u05B6\x07"+
		"u\x02\x02\u05B6\u05B7\x07\x88\x02\x02\u05B7\u05B8\x07Q\x02\x02\u05B8\u05B9"+
		"\x07{\x02\x02\u05B9\xB5\x03\x02\x02\x02\u05BA\u05BB\x07{\x02\x02\u05BB"+
		"\xB7\x03\x02\x02\x02\u05BC\u05BD\x05\u0108\x85\x02\u05BD\u05BE\x07{\x02"+
		"\x02\u05BE\xB9\x03\x02\x02\x02\u05BF\u05C2\x05\xBE`\x02\u05C0\u05C2\x05"+
		"\xC8e\x02\u05C1\u05BF\x03\x02\x02\x02\u05C1\u05C0\x03\x02\x02\x02\u05C2"+
		"\xBB\x03\x02\x02\x02\u05C3\u05C5\x05\xBA^\x02\u05C4\u05C6\x05\u0108\x85"+
		"\x02\u05C5\u05C4\x03\x02\x02\x02\u05C5\u05C6\x03\x02\x02\x02\u05C6\u05CB"+
		"\x03\x02\x02\x02\u05C7\u05C8\x05\xBA^\x02\u05C8\u05C9\x05\xBC_\x02\u05C9"+
		"\u05CB\x03\x02\x02\x02\u05CA\u05C3\x03\x02\x02\x02\u05CA\u05C7\x03\x02"+
		"\x02\x02\u05CB\xBD\x03\x02\x02\x02\u05CC\u05D2\x05\xC2b\x02\u05CD\u05D2"+
		"\x05\xC4c\x02\u05CE\u05D2\x07$\x02\x02\u05CF\u05D2\x07E\x02\x02\u05D0"+
		"\u05D2\x07\x11\x02\x02\u05D1\u05CC\x03\x02\x02\x02\u05D1\u05CD\x03\x02"+
		"\x02\x02\u05D1\u05CE\x03\x02\x02\x02\u05D1\u05CF\x03\x02\x02\x02\u05D1"+
		"\u05D0\x03\x02\x02\x02\u05D2\xBF\x03\x02\x02\x02\u05D3\u05D5\x05\xBE`"+
		"\x02\u05D4\u05D6\x05\u0108\x85\x02\u05D5\u05D4\x03\x02\x02\x02\u05D5\u05D6"+
		"\x03\x02\x02\x02\u05D6\u05DB\x03\x02\x02\x02\u05D7\u05D8\x05\xBE`\x02"+
		"\u05D8\u05D9\x05\xBC_\x02\u05D9\u05DB\x03\x02\x02\x02\u05DA\u05D3\x03"+
		"\x02\x02\x02\u05DA\u05D7\x03\x02\x02\x02\u05DB\xC1\x03\x02\x02\x02\u05DC"+
		"\u05DD\t\x04\x02\x02\u05DD\xC3\x03\x02\x02\x02\u05DE\u05DF\t\x05\x02\x02"+
		"\u05DF\xC5\x03\x02\x02\x02\u05E0\u05E1\x07\x7F\x02\x02\u05E1\xC7\x03\x02"+
		"\x02\x02\u05E2\u05E6\x05\xCAf\x02\u05E3\u05E6\x05\x9AN\x02\u05E4\u05E6"+
		"\x05\xDAn\x02\u05E5\u05E2\x03\x02\x02\x02\u05E5\u05E3\x03\x02\x02\x02"+
		"\u05E5\u05E4\x03\x02\x02\x02\u05E6\xC9\x03\x02\x02\x02\u05E7\u05EC\x05"+
		"\xD0i\x02\u05E8\u05EC\x05\xD6l\x02\u05E9\u05EC\x05\u01AA\xD6\x02\u05EA"+
		"\u05EC\x05\u0130\x99\x02\u05EB\u05E7\x03\x02\x02\x02\u05EB\u05E8\x03\x02"+
		"\x02\x02\u05EB\u05E9\x03\x02\x02\x02\u05EB\u05EA\x03\x02\x02\x02\u05EC"+
		"\xCB\x03\x02\x02\x02\u05ED\u05EF\x05\xC8e\x02\u05EE\u05F0\x05\u0108\x85"+
		"\x02\u05EF\u05EE\x03\x02\x02\x02\u05EF\u05F0\x03\x02\x02\x02\u05F0\u05F5"+
		"\x03\x02\x02\x02\u05F1\u05F2\x05\xC8e\x02\u05F2\u05F3\x05\xCCg\x02\u05F3"+
		"\u05F5\x03\x02\x02\x02\u05F4\u05ED\x03\x02\x02\x02\u05F4\u05F1\x03\x02"+
		"\x02\x02\u05F5\xCD\x03\x02\x02\x02\u05F6\u05F8\x05\xCAf\x02\u05F7\u05F9"+
		"\x05\u0108\x85\x02\u05F8\u05F7\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02"+
		"\x02\u05F9\u05FE\x03\x02\x02\x02\u05FA\u05FB\x05\xCAf\x02\u05FB\u05FC"+
		"\x05\xCEh\x02\u05FC\u05FE\x03\x02\x02\x02\u05FD\u05F6\x03\x02\x02\x02"+
		"\u05FD\u05FA\x03\x02\x02\x02\u05FE\xCF\x03\x02\x02\x02\u05FF\u0601\x05"+
		"\x0E\b\x02\u0600\u05FF\x03\x02\x02\x02\u0600\u0601\x03\x02\x02\x02\u0601"+
		"\u0602\x03\x02\x02\x02\u0602\u061B\x05\xD2j\x02\u0603\u0604\x05\x0E\b"+
		"\x02\u0604\u0605\x07?\x02\x02\u0605\u0606\x05\u01A0\xD1\x02\u0606\u061B"+
		"\x03\x02\x02\x02\u0607\u061B\x07\f\x02\x02\u0608\u061B\x07\r\x02\x02\u0609"+
		"\u061B\x07\x0E\x02\x02\u060A\u061B\x07N\x02\x02\u060B\u061B\x07\b\x02"+
		"\x02\u060C\u061B\x077\x02\x02\u060D\u061B\x07(\x02\x02\u060E\u061B\x07"+
		")\x02\x02\u060F\u061B\x078\x02\x02\u0610\u0612\x07I\x02\x02\u0611\u0613"+
		"\x05\xD0i\x02\u0612\u0611\x03\x02\x02\x02\u0612\u0613\x03\x02\x02\x02"+
		"\u0613\u061B\x03\x02\x02\x02\u0614\u061B\x07\"\x02\x02\u0615\u061B\x07"+
		"\x18\x02\x02\u0616\u061B\x07L\x02\x02\u0617\u061B\x07\x07\x02\x02\u0618"+
		"\u061B\x05\xD4k\x02\u0619\u061B\x07\x19\x02\x02\u061A\u0600\x03\x02\x02"+
		"\x02\u061A\u0603\x03\x02\x02\x02\u061A\u0607\x03\x02\x02\x02\u061A\u0608"+
		"\x03\x02\x02\x02\u061A\u0609\x03\x02\x02\x02\u061A\u060A\x03\x02\x02\x02"+
		"\u061A\u060B\x03\x02\x02\x02\u061A\u060C\x03\x02\x02\x02\u061A\u060D\x03"+
		"\x02\x02\x02\u061A\u060E\x03\x02\x02\x02\u061A\u060F\x03\x02\x02\x02\u061A"+
		"\u0610\x03\x02\x02\x02\u061A\u0614\x03\x02\x02\x02\u061A\u0615\x03\x02"+
		"\x02\x02\u061A\u0616\x03\x02\x02\x02\u061A\u0617\x03\x02\x02\x02\u061A"+
		"\u0618\x03\x02\x02\x02\u061A\u0619\x03\x02\x02\x02\u061B\xD1\x03\x02\x02"+
		"\x02\u061C\u0621\x05\u015A\xAE\x02\u061D\u0621\x05\xD8m\x02\u061E\u0621"+
		"\x05\xC6d\x02\u061F\u0621\x05\u01A0\xD1\x02\u0620\u061C\x03\x02\x02\x02"+
		"\u0620\u061D\x03\x02\x02\x02\u0620\u061E\x03\x02\x02\x02\u0620\u061F\x03"+
		"\x02\x02\x02\u0621\xD3\x03\x02\x02\x02\u0622\u0623\x07\x14\x02\x02\u0623"+
		"\u0624\x07P\x02\x02\u0624\u0625\x05b2\x02\u0625\u0626\x07Q\x02\x02\u0626"+
		"\u062C\x03\x02\x02\x02\u0627\u0628\x07\x14\x02\x02\u0628\u0629\x07P\x02"+
		"\x02\u0629\u062A\x07\x07\x02\x02\u062A\u062C\x07Q\x02\x02\u062B\u0622"+
		"\x03\x02\x02\x02\u062B\u0627\x03\x02\x02\x02\u062C\xD5\x03\x02\x02\x02"+
		"\u062D\u062F\x05\u0166\xB4\x02\u062E\u0630\x05\u0108\x85\x02\u062F\u062E"+
		"\x03\x02\x02\x02\u062F\u0630\x03\x02\x02\x02\u0630\u0632\x03\x02\x02\x02"+
		"\u0631\u0633\x05\x0E\b\x02\u0632\u0631\x03\x02\x02\x02\u0632\u0633\x03"+
		"\x02\x02\x02\u0633\u0634\x03\x02\x02\x02\u0634\u0635\x07\x7F\x02\x02\u0635"+
		"\u0646\x03\x02\x02\x02\u0636\u0637\x05\u0166\xB4\x02\u0637\u0638\x05\u01A0"+
		"\xD1\x02\u0638\u0646\x03\x02\x02\x02\u0639\u063A\x05\u0166\xB4\x02\u063A"+
		"\u063C\x05\x0E\b\x02\u063B\u063D\x07?\x02\x02\u063C\u063B\x03\x02\x02"+
		"\x02\u063C\u063D\x03\x02\x02\x02\u063D\u063E\x03\x02\x02\x02\u063E\u063F"+
		"\x05\u01A0\xD1\x02\u063F\u0646\x03\x02\x02\x02\u0640\u0642\x07\x1C\x02"+
		"\x02\u0641\u0643\x05\x0E\b\x02\u0642\u0641\x03\x02\x02\x02\u0642\u0643"+
		"\x03\x02\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0646\x07\x7F\x02\x02"+
		"\u0645\u062D\x03\x02\x02\x02\u0645\u0636\x03\x02\x02\x02\u0645\u0639\x03"+
		"\x02\x02\x02\u0645\u0640\x03\x02\x02\x02\u0646\xD7\x03\x02\x02\x02\u0647"+
		"\u0648\x07\x7F\x02\x02\u0648\xD9\x03\x02\x02\x02\u0649\u064A\x05\xDCo"+
		"\x02\u064A\u064C\x07T\x02\x02\u064B\u064D\x05\xE4s\x02\u064C\u064B\x03"+
		"\x02\x02\x02\u064C\u064D\x03\x02\x02\x02\u064D\u064E\x03\x02\x02\x02\u064E"+
		"\u064F\x07U\x02\x02\u064F\u0657\x03\x02\x02\x02\u0650\u0651\x05\xDCo\x02"+
		"\u0651\u0652\x07T\x02\x02\u0652\u0653\x05\xE4s\x02\u0653\u0654\x07u\x02"+
		"\x02\u0654\u0655\x07U\x02\x02\u0655\u0657\x03\x02\x02\x02\u0656\u0649"+
		"\x03\x02\x02\x02\u0656\u0650\x03\x02\x02\x02\u0657\xDB\x03\x02\x02\x02"+
		"\u0658\u065A\x05\xE0q\x02\u0659\u065B\x05\u0108\x85\x02\u065A\u0659\x03"+
		"\x02\x02\x02\u065A\u065B\x03\x02\x02\x02\u065B\u065D\x03\x02\x02\x02\u065C"+
		"\u065E\x07\x7F\x02\x02\u065D\u065C\x03\x02\x02\x02\u065D\u065E\x03\x02"+
		"\x02\x02\u065E\u0660\x03\x02\x02\x02\u065F\u0661\x05\xE2r\x02\u0660\u065F"+
		"\x03\x02\x02\x02\u0660\u0661\x03\x02\x02\x02\u0661\u066C\x03\x02\x02\x02"+
		"\u0662\u0664\x05\xE0q\x02\u0663\u0665\x05\u0108\x85\x02\u0664\u0663\x03"+
		"\x02\x02\x02\u0664\u0665\x03\x02\x02\x02\u0665\u0666\x03\x02\x02\x02\u0666"+
		"\u0667\x05\x0E\b\x02\u0667\u0669\x07\x7F\x02\x02\u0668\u066A\x05\xE2r"+
		"\x02\u0669\u0668\x03\x02\x02\x02\u0669\u066A\x03\x02\x02\x02\u066A\u066C"+
		"\x03\x02\x02\x02\u066B\u0658\x03\x02\x02\x02\u066B\u0662\x03\x02\x02\x02"+
		"\u066C\xDD\x03\x02\x02\x02\u066D\u066F\x05\xE0q\x02\u066E\u0670\x05\u0108"+
		"\x85\x02\u066F\u066E\x03\x02\x02\x02\u066F\u0670\x03\x02\x02\x02\u0670"+
		"\u0671\x03\x02\x02\x02\u0671\u0673\x07\x7F\x02\x02\u0672\u0674\x05\xE2"+
		"r\x02\u0673\u0672\x03\x02\x02\x02\u0673\u0674\x03\x02\x02\x02\u0674\u0675"+
		"\x03\x02\x02\x02\u0675\u0676\x07{\x02\x02\u0676\xDF\x03\x02\x02\x02\u0677"+
		"\u067D\x07\x1C\x02\x02\u0678\u0679\x07\x1C\x02\x02\u0679\u067D\x07\x0F"+
		"\x02\x02\u067A\u067B\x07\x1C\x02\x02\u067B\u067D\x07=\x02\x02\u067C\u0677"+
		"\x03\x02\x02\x02\u067C\u0678\x03\x02\x02\x02\u067C\u067A\x03\x02\x02\x02"+
		"\u067D\xE1\x03\x02\x02\x02\u067E\u067F\x07y\x02\x02\u067F\u0680\x05\xCC"+
		"g\x02\u0680\xE3\x03\x02\x02\x02\u0681\u0682\bs\x01\x02\u0682\u0683\x05"+
		"\xE6t\x02\u0683\u0689\x03\x02\x02\x02\u0684\u0685\f\x03\x02\x02\u0685"+
		"\u0686\x07u\x02\x02\u0686\u0688\x05\xE6t\x02\u0687\u0684\x03\x02\x02\x02"+
		"\u0688\u068B\x03\x02\x02\x02\u0689\u0687\x03\x02\x02\x02\u0689\u068A\x03"+
		"\x02\x02\x02\u068A\xE5\x03\x02\x02\x02\u068B\u0689\x03\x02\x02\x02\u068C"+
		"\u0692\x05\xE8u\x02\u068D\u068E\x05\xE8u\x02\u068E\u068F\x07`\x02\x02"+
		"\u068F\u0690\x05d3\x02\u0690\u0692\x03\x02\x02\x02\u0691\u068C\x03\x02"+
		"\x02\x02\u0691\u068D\x03\x02\x02\x02\u0692\xE7\x03\x02\x02\x02\u0693\u0694"+
		"\x07\x7F\x02\x02\u0694\xE9\x03\x02\x02\x02\u0695\u0698\x05\xECw\x02\u0696"+
		"\u0698\x05\xFA~\x02\u0697\u0695\x03\x02\x02\x02\u0697\u0696\x03\x02\x02"+
		"\x02\u0698\xEB\x03\x02\x02\x02\u0699\u069A\x07\x7F\x02\x02\u069A\xED\x03"+
		"\x02\x02\x02\u069B\u069E\x05\xF0y\x02\u069C\u069E\x05\xF6|\x02\u069D\u069B"+
		"\x03\x02\x02\x02\u069D\u069C\x03\x02\x02\x02\u069E\xEF\x03\x02\x02\x02"+
		"\u069F\u06A2\x05\xF2z\x02\u06A0\u06A2\x05\xF4{\x02\u06A1\u069F\x03\x02"+
		"\x02\x02\u06A1\u06A0\x03\x02\x02\x02\u06A2\xF1\x03\x02\x02\x02\u06A3\u06A5"+
		"\x07\'\x02\x02\u06A4\u06A3\x03\x02\x02\x02\u06A4\u06A5\x03\x02\x02\x02"+
		"\u06A5\u06A6\x03\x02\x02\x02\u06A6\u06A7\x07+\x02\x02\u06A7\u06A8\x07"+
		"\x7F\x02\x02\u06A8\u06A9\x07T\x02\x02\u06A9\u06AA\x05\xF8}\x02\u06AA\u06AB"+
		"\x07U\x02\x02\u06AB\xF3\x03\x02\x02\x02\u06AC\u06AE\x07\'\x02\x02\u06AD"+
		"\u06AC\x03\x02\x02\x02\u06AD\u06AE\x03\x02\x02\x02\u06AE\u06AF\x03\x02"+
		"\x02\x02\u06AF\u06B0\x07+\x02\x02\u06B0\u06B1\x05\xECw\x02\u06B1\u06B2"+
		"\x07T\x02\x02\u06B2\u06B3\x05\xF8}\x02\u06B3\u06B4\x07U\x02\x02\u06B4"+
		"\xF5\x03\x02\x02\x02\u06B5\u06B7\x07\'\x02\x02\u06B6\u06B5\x03\x02\x02"+
		"\x02\u06B6\u06B7\x03\x02\x02\x02\u06B7\u06B8\x03\x02\x02\x02\u06B8\u06B9"+
		"\x07+\x02\x02\u06B9\u06BA\x07T\x02\x02\u06BA\u06BB\x05\xF8}\x02\u06BB"+
		"\u06BC\x07U\x02\x02\u06BC\xF7\x03\x02\x02\x02\u06BD\u06BF\x05\x96L\x02"+
		"\u06BE\u06BD\x03\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02\u06BF\xF9\x03"+
		"\x02\x02\x02\u06C0\u06C1\x07\x7F\x02\x02\u06C1\xFB\x03\x02\x02\x02\u06C2"+
		"\u06C3\x07+\x02\x02\u06C3\u06C4\x07\x7F\x02\x02\u06C4\u06C5\x07`\x02\x02"+
		"\u06C5\u06C6\x05\xFE\x80\x02\u06C6\u06C7\x07{\x02\x02\u06C7\xFD\x03\x02"+
		"\x02\x02\u06C8\u06CA\x05\x0E\b\x02\u06C9\u06C8\x03\x02\x02\x02\u06C9\u06CA"+
		"\x03\x02\x02\x02\u06CA\u06CB\x03\x02\x02\x02\u06CB\u06CC\x05\xEAv\x02"+
		"\u06CC\xFF\x03\x02\x02\x02\u06CD\u06CF\x07J\x02\x02\u06CE\u06D0\x07G\x02"+
		"\x02\u06CF\u06CE\x03\x02\x02\x02\u06CF\u06D0\x03\x02\x02\x02\u06D0\u06D1"+
		"\x03\x02\x02\x02\u06D1\u06D2\x05\x0E\b\x02\u06D2\u06D3\x05\n\x06\x02\u06D3"+
		"\u06D4\x07{\x02\x02\u06D4\u06DB\x03\x02\x02\x02\u06D5\u06D6\x07J\x02\x02"+
		"\u06D6\u06D7\x07z\x02\x02\u06D7\u06D8\x05\n\x06\x02\u06D8\u06D9\x07{\x02"+
		"\x02\u06D9\u06DB\x03\x02\x02\x02\u06DA\u06CD\x03\x02\x02\x02\u06DA\u06D5"+
		"\x03\x02\x02\x02\u06DB\u0101\x03\x02\x02\x02\u06DC\u06DE\x05\u0108\x85"+
		"\x02\u06DD\u06DC\x03\x02\x02\x02\u06DD\u06DE\x03\x02\x02\x02\u06DE\u06DF"+
		"\x03\x02\x02\x02\u06DF\u06E0\x07J\x02\x02\u06E0\u06E2\x07+\x02\x02\u06E1"+
		"\u06E3\x05\x0E\b\x02\u06E2\u06E1\x03\x02\x02\x02\u06E2\u06E3\x03\x02\x02"+
		"\x02\u06E3\u06E4\x03\x02\x02\x02\u06E4\u06E5\x05\xEAv\x02\u06E5\u06E6"+
		"\x07{\x02\x02\u06E6\u0103\x03\x02\x02\x02\u06E7\u06E8\x07\x06\x02\x02"+
		"\u06E8\u06E9\x07P\x02\x02\u06E9\u06EA\x07\x88\x02\x02\u06EA\u06EB\x07"+
		"Q\x02\x02\u06EB\u06EC\x07{\x02\x02\u06EC\u0105\x03\x02\x02\x02\u06ED\u06EE"+
		"\x07\x1F\x02\x02\u06EE\u06EF\x07\x88\x02\x02\u06EF\u06F1\x07T\x02\x02"+
		"\u06F0\u06F2\x05\x96L\x02\u06F1\u06F0\x03\x02\x02\x02\u06F1\u06F2\x03"+
		"\x02\x02\x02\u06F2\u06F3\x03\x02\x02\x02\u06F3\u06F8\x07U\x02\x02\u06F4"+
		"\u06F5\x07\x1F\x02\x02\u06F5\u06F6\x07\x88\x02\x02\u06F6\u06F8\x05\x9E"+
		"P\x02\u06F7\u06ED\x03\x02\x02\x02\u06F7\u06F4\x03\x02\x02\x02\u06F8\u0107"+
		"\x03\x02\x02\x02\u06F9\u06FA\b\x85\x01\x02\u06FA\u06FB\x05\u010A\x86\x02"+
		"\u06FB\u0700\x03\x02\x02\x02\u06FC\u06FD\f\x03\x02\x02\u06FD\u06FF\x05"+
		"\u010A\x86\x02\u06FE\u06FC\x03\x02\x02\x02\u06FF\u0702\x03\x02\x02\x02"+
		"\u0700\u06FE\x03\x02\x02\x02\u0700\u0701\x03\x02\x02\x02\u0701\u0109\x03"+
		"\x02\x02\x02\u0702\u0700\x03\x02\x02\x02\u0703\u0704\x07R\x02\x02\u0704"+
		"\u0705\x07R\x02\x02\u0705\u0706\x05\u010E\x88\x02\u0706\u0707\x07S\x02"+
		"\x02\u0707\u0708\x07S\x02\x02\u0708\u070B\x03\x02\x02\x02\u0709\u070B"+
		"\x05\u010C\x87\x02\u070A\u0703\x03\x02\x02\x02\u070A\u0709\x03\x02\x02"+
		"\x02\u070B\u010B\x03\x02\x02\x02\u070C\u070D\x07\x04\x02\x02\u070D\u070E"+
		"\x07P\x02\x02\u070E\u0710\x05\u0136\x9C\x02\u070F\u0711\x07~\x02\x02\u0710"+
		"\u070F\x03\x02\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711\u0712\x03\x02"+
		"\x02\x02\u0712\u0713\x07Q\x02\x02\u0713\u071D\x03\x02\x02\x02\u0714\u0715"+
		"\x07\x04\x02\x02\u0715\u0716\x07P\x02\x02\u0716\u0718\x05d3\x02\u0717"+
		"\u0719\x07~\x02\x02\u0718\u0717\x03\x02\x02\x02\u0718\u0719\x03\x02\x02"+
		"\x02\u0719\u071A\x03\x02\x02\x02\u071A\u071B\x07Q\x02\x02\u071B\u071D"+
		"\x03\x02\x02\x02\u071C\u070C\x03\x02\x02\x02\u071C\u0714\x03\x02\x02\x02"+
		"\u071D\u010D\x03\x02\x02\x02\u071E\u0720\b\x88\x01\x02\u071F\u0721\x05"+
		"\u0110\x89\x02\u0720\u071F\x03\x02\x02\x02\u0720\u0721\x03\x02\x02\x02"+
		"\u0721\u0726\x03\x02\x02\x02\u0722\u0723\x05\u0110\x89\x02\u0723\u0724"+
		"\x07~\x02\x02\u0724\u0726\x03\x02\x02\x02\u0725\u071E\x03\x02\x02\x02"+
		"\u0725\u0722\x03\x02\x02\x02\u0726\u0733\x03\x02\x02\x02\u0727\u0728\f"+
		"\x05\x02\x02\u0728\u072A\x07u\x02\x02\u0729\u072B\x05\u0110\x89\x02\u072A"+
		"\u0729\x03\x02\x02\x02\u072A\u072B\x03\x02\x02\x02\u072B\u0732\x03\x02"+
		"\x02\x02\u072C\u072D\f\x03\x02\x02\u072D\u072E\x07u\x02\x02\u072E\u072F"+
		"\x05\u0110\x89\x02\u072F\u0730\x07~\x02\x02\u0730\u0732\x03\x02\x02\x02"+
		"\u0731\u0727\x03\x02\x02\x02\u0731\u072C\x03\x02\x02\x02\u0732\u0735\x03"+
		"\x02\x02\x02\u0733\u0731\x03\x02\x02\x02\u0733\u0734\x03\x02\x02\x02\u0734"+
		"\u010F\x03\x02\x02\x02\u0735\u0733\x03\x02\x02\x02\u0736\u0738\x05\u0112"+
		"\x8A\x02\u0737\u0739\x05\u0118\x8D\x02\u0738\u0737\x03\x02\x02\x02\u0738"+
		"\u0739\x03\x02\x02\x02\u0739\u0111\x03\x02\x02\x02\u073A\u073D\x07\x7F"+
		"\x02\x02\u073B\u073D\x05\u0114\x8B\x02\u073C\u073A\x03\x02\x02\x02\u073C"+
		"\u073B\x03\x02\x02\x02\u073D\u0113\x03\x02\x02\x02\u073E\u073F\x05\u0116"+
		"\x8C\x02\u073F\u0740\x07z\x02\x02\u0740\u0741\x07\x7F\x02\x02\u0741\u0115"+
		"\x03\x02\x02\x02\u0742\u0743\x07\x7F\x02\x02\u0743\u0117\x03\x02\x02\x02"+
		"\u0744\u0745\x07P\x02\x02\u0745\u0746\x05\u011A\x8E\x02\u0746\u0747\x07"+
		"Q\x02\x02\u0747\u0119\x03\x02\x02\x02\u0748\u074A\b\x8E\x01\x02\u0749"+
		"\u074B\x05\u011C\x8F\x02\u074A\u0749\x03\x02\x02\x02\u074A\u074B\x03\x02"+
		"\x02\x02\u074B\u0750\x03\x02\x02\x02\u074C\u074D\f\x03\x02\x02\u074D\u074F"+
		"\x05\u011C\x8F\x02\u074E\u074C\x03\x02\x02\x02\u074F\u0752\x03\x02\x02"+
		"\x02\u0750\u074E\x03\x02\x02\x02\u0750\u0751\x03\x02\x02\x02\u0751\u011B"+
		"\x03\x02\x02\x02\u0752\u0750\x03\x02\x02\x02\u0753\u0754\x07P\x02\x02"+
		"\u0754\u0755\x05\u011A\x8E\x02\u0755\u0756\x07Q\x02\x02\u0756\u0760\x03"+
		"\x02\x02\x02\u0757\u0758\x07R\x02\x02\u0758\u0759\x05\u011A\x8E\x02\u0759"+
		"\u075A\x07S\x02\x02\u075A\u0760\x03\x02\x02\x02\u075B\u075C\x07T\x02\x02"+
		"\u075C\u075D\x05\u011A\x8E\x02\u075D\u075E\x07U\x02\x02\u075E\u0760\x03"+
		"\x02\x02\x02\u075F\u0753\x03\x02\x02\x02\u075F\u0757\x03\x02\x02\x02\u075F"+
		"\u075B\x03\x02\x02\x02\u0760\u011D\x03\x02\x02\x02\u0761\u0766\x05\u0120"+
		"\x91\x02\u0762\u0763\x07u\x02\x02\u0763\u0765\x05\u0120\x91\x02\u0764"+
		"\u0762\x03\x02\x02\x02\u0765\u0768\x03\x02\x02\x02\u0766\u0764\x03\x02"+
		"\x02\x02\u0766\u0767\x03\x02\x02\x02\u0767\u011F\x03\x02\x02\x02\u0768"+
		"\u0766\x03\x02\x02\x02\u0769\u076B\x05\u0122\x92\x02\u076A\u076C\x05\u0150"+
		"\xA9\x02\u076B\u076A\x03\x02\x02\x02\u076B\u076C\x03\x02\x02\x02\u076C"+
		"\u0121\x03\x02\x02\x02\u076D\u0773\x05\u0124\x93\x02\u076E\u076F\x05\u0126"+
		"\x94\x02\u076F\u0770\x05\u0128\x95\x02\u0770\u0771\x05\u012A\x96\x02\u0771"+
		"\u0773\x03\x02\x02\x02\u0772\u076D\x03\x02\x02\x02\u0772\u076E\x03\x02"+
		"\x02\x02\u0773\u0123\x03\x02\x02\x02\u0774\u0776\x05\u012C\x97\x02\u0775"+
		"\u0774\x03\x02\x02\x02\u0776\u0779\x03\x02\x02\x02\u0777\u0775\x03\x02"+
		"\x02\x02\u0777\u0778\x03\x02\x02\x02\u0778\u077A\x03\x02\x02\x02\u0779"+
		"\u0777\x03\x02\x02\x02\u077A\u077B\x05\u0126\x94\x02\u077B\u0125\x03\x02"+
		"\x02\x02\u077C\u077D\b\x94\x01\x02\u077D\u077F\x05\u0134\x9B\x02\u077E"+
		"\u0780\x05\u0108\x85\x02\u077F\u077E\x03\x02\x02\x02\u077F\u0780\x03\x02"+
		"\x02\x02\u0780\u0786\x03\x02\x02\x02\u0781\u0782\x07P\x02\x02\u0782\u0783"+
		"\x05\u0124\x93\x02\u0783\u0784\x07Q\x02\x02\u0784\u0786\x03\x02\x02\x02"+
		"\u0785\u077C\x03\x02\x02\x02\u0785\u0781\x03\x02\x02\x02\u0786\u0794\x03"+
		"\x02\x02\x02\u0787\u0788\f\x05\x02\x02\u0788\u0793\x05\u0128\x95\x02\u0789"+
		"\u078A\f\x04\x02\x02\u078A\u078C\x07R\x02\x02\u078B\u078D\x05d3\x02\u078C"+
		"\u078B\x03\x02\x02\x02\u078C\u078D\x03\x02\x02\x02\u078D\u078E\x03\x02"+
		"\x02\x02\u078E\u0790\x07S\x02\x02\u078F\u0791\x05\u0108\x85\x02\u0790"+
		"\u078F\x03\x02\x02\x02\u0790\u0791\x03\x02\x02\x02\u0791\u0793\x03\x02"+
		"\x02\x02\u0792\u0787\x03\x02\x02\x02\u0792\u0789\x03\x02\x02\x02\u0793"+
		"\u0796\x03\x02\x02\x02\u0794\u0792\x03\x02\x02\x02\u0794\u0795\x03\x02"+
		"\x02\x02\u0795\u0127\x03\x02\x02\x02\u0796\u0794\x03\x02\x02\x02\u0797"+
		"\u0798\x07P\x02\x02\u0798\u0799\x05\u0142\xA2\x02\u0799\u079B\x07Q\x02"+
		"\x02\u079A\u079C\x05\u012E\x98\x02\u079B\u079A\x03\x02\x02\x02\u079B\u079C"+
		"\x03\x02\x02\x02\u079C\u079E\x03\x02\x02\x02\u079D\u079F\x05\u0132\x9A"+
		"\x02\u079E\u079D\x03\x02\x02\x02\u079E\u079F\x03\x02\x02\x02\u079F\u07A1"+
		"\x03\x02\x02\x02\u07A0\u07A2\x05\u01BC\xDF\x02\u07A1\u07A0\x03\x02\x02"+
		"\x02\u07A1\u07A2\x03\x02\x02\x02\u07A2\u07A4\x03\x02\x02\x02\u07A3\u07A5"+
		"\x05\u0108\x85\x02\u07A4\u07A3\x03\x02\x02\x02\u07A4\u07A5\x03\x02\x02"+
		"\x02\u07A5\u0129\x03\x02\x02\x02\u07A6\u07A7\x07w\x02\x02\u07A7\u07A9"+
		"\x05\xCEh\x02\u07A8\u07AA\x05\u0138\x9D\x02\u07A9\u07A8\x03\x02\x02\x02"+
		"\u07A9\u07AA\x03\x02\x02\x02\u07AA\u012B\x03\x02\x02\x02\u07AB\u07AD\x07"+
		"X\x02\x02\u07AC\u07AE\x05\u0108\x85\x02\u07AD\u07AC\x03\x02\x02\x02\u07AD"+
		"\u07AE\x03\x02\x02\x02\u07AE\u07B0\x03\x02\x02\x02\u07AF\u07B1\x05\u012E"+
		"\x98\x02\u07B0\u07AF\x03\x02\x02\x02\u07B0\u07B1\x03\x02\x02\x02\u07B1"+
		"\u07C3\x03\x02\x02\x02\u07B2\u07B4\x07\\\x02\x02\u07B3\u07B5\x05\u0108"+
		"\x85\x02\u07B4\u07B3\x03\x02\x02\x02\u07B4\u07B5\x03\x02\x02\x02\u07B5"+
		"\u07C3\x03\x02\x02\x02\u07B6\u07B8\x07q\x02\x02\u07B7\u07B9\x05\u0108"+
		"\x85\x02\u07B8\u07B7\x03\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02\u07B9"+
		"\u07C3\x03\x02\x02\x02\u07BA\u07BB\x05\x0E\b\x02\u07BB\u07BD\x07X\x02"+
		"\x02\u07BC\u07BE\x05\u0108\x85\x02\u07BD\u07BC\x03\x02\x02\x02\u07BD\u07BE"+
		"\x03\x02\x02\x02\u07BE\u07C0\x03\x02\x02\x02\u07BF\u07C1\x05\u012E\x98"+
		"\x02\u07C0\u07BF\x03\x02\x02\x02\u07C0\u07C1\x03\x02\x02\x02\u07C1\u07C3"+
		"\x03\x02\x02\x02\u07C2\u07AB\x03\x02\x02\x02\u07C2\u07B2\x03\x02\x02\x02"+
		"\u07C2\u07B6\x03\x02\x02\x02\u07C2\u07BA\x03\x02\x02\x02\u07C3\u012D\x03"+
		"\x02\x02\x02\u07C4\u07C6\x05\u0130\x99\x02\u07C5\u07C7\x05\u012E\x98\x02"+
		"\u07C6\u07C5\x03\x02\x02\x02\u07C6\u07C7\x03\x02\x02\x02\u07C7\u012F\x03"+
		"\x02\x02\x02\u07C8\u07C9\t\x06\x02\x02\u07C9\u0131\x03\x02\x02\x02\u07CA"+
		"\u07CB\t\x07\x02\x02\u07CB\u0133\x03\x02\x02\x02\u07CC\u07CE\x07~\x02"+
		"\x02\u07CD\u07CC\x03\x02\x02\x02\u07CD\u07CE\x03\x02\x02\x02\u07CE\u07CF"+
		"\x03\x02\x02\x02\u07CF\u07D0\x05\x06\x04\x02\u07D0\u0135\x03\x02\x02\x02"+
		"\u07D1\u07D3\x05\xCCg\x02\u07D2\u07D4\x05\u0138\x9D\x02\u07D3\u07D2\x03"+
		"\x02\x02\x02\u07D3\u07D4\x03\x02\x02\x02\u07D4\u0137\x03\x02\x02\x02\u07D5"+
		"\u07DE\x05\u013A\x9E\x02\u07D6\u07D8\x05\u013C\x9F\x02\u07D7\u07D6\x03"+
		"\x02\x02\x02\u07D7\u07D8\x03\x02\x02\x02\u07D8\u07D9\x03\x02\x02\x02\u07D9"+
		"\u07DA\x05\u0128\x95\x02\u07DA\u07DB\x05\u012A\x96\x02\u07DB\u07DE\x03"+
		"\x02\x02\x02\u07DC\u07DE\x05\u013E\xA0\x02\u07DD\u07D5\x03\x02\x02\x02"+
		"\u07DD\u07D7\x03\x02\x02\x02\u07DD\u07DC\x03\x02\x02\x02\u07DE\u0139\x03"+
		"\x02\x02\x02\u07DF\u07E5\x05\u013C\x9F\x02\u07E0\u07E2\x05\u012C\x97\x02"+
		"\u07E1\u07E3\x05\u013A\x9E\x02\u07E2\u07E1\x03\x02\x02\x02\u07E2\u07E3"+
		"\x03\x02\x02\x02\u07E3\u07E5\x03\x02\x02\x02\u07E4\u07DF\x03\x02\x02\x02"+
		"\u07E4\u07E0\x03\x02\x02\x02\u07E5\u013B\x03\x02\x02\x02\u07E6\u07E7\b"+
		"\x9F\x01\x02\u07E7\u07F5\x05\u0128\x95\x02\u07E8\u07EA\x07R\x02\x02\u07E9"+
		"\u07EB\x05d3\x02\u07EA\u07E9\x03\x02\x02\x02\u07EA\u07EB\x03\x02\x02\x02"+
		"\u07EB\u07EC\x03\x02\x02\x02\u07EC\u07EE\x07S\x02\x02\u07ED\u07EF\x05"+
		"\u0108\x85\x02\u07EE\u07ED\x03\x02\x02\x02\u07EE\u07EF\x03\x02\x02\x02"+
		"\u07EF\u07F5\x03\x02\x02\x02\u07F0\u07F1\x07P\x02\x02\u07F1\u07F2\x05"+
		"\u013A\x9E\x02\u07F2\u07F3\x07Q\x02\x02\u07F3\u07F5\x03\x02\x02\x02\u07F4"+
		"\u07E6\x03\x02\x02\x02\u07F4\u07E8\x03\x02\x02\x02\u07F4\u07F0\x03\x02"+
		"\x02\x02\u07F5\u0803\x03\x02\x02\x02\u07F6\u07F7\f\x07\x02\x02\u07F7\u0802"+
		"\x05\u0128\x95\x02\u07F8\u07F9\f\x05\x02\x02\u07F9\u07FB\x07R\x02\x02"+
		"\u07FA\u07FC\x05d3\x02\u07FB\u07FA\x03\x02\x02\x02\u07FB\u07FC\x03\x02"+
		"\x02\x02\u07FC\u07FD\x03\x02\x02\x02\u07FD\u07FF\x07S\x02\x02\u07FE\u0800"+
		"\x05\u0108\x85\x02\u07FF\u07FE\x03\x02\x02\x02\u07FF\u0800\x03\x02\x02"+
		"\x02\u0800\u0802\x03\x02\x02\x02\u0801\u07F6\x03\x02\x02\x02\u0801\u07F8"+
		"\x03\x02\x02\x02\u0802\u0805\x03\x02\x02\x02\u0803\u0801\x03\x02\x02\x02"+
		"\u0803\u0804\x03\x02\x02\x02\u0804\u013D\x03\x02\x02\x02\u0805\u0803\x03"+
		"\x02\x02\x02\u0806\u080B\x05\u0140\xA1\x02\u0807\u0808\x05\u012C\x97\x02"+
		"\u0808\u0809\x05\u013E\xA0\x02\u0809\u080B\x03\x02\x02\x02\u080A\u0806"+
		"\x03\x02\x02\x02\u080A\u0807\x03\x02\x02\x02\u080B\u013F\x03\x02\x02\x02"+
		"\u080C\u080D\b\xA1\x01\x02\u080D\u080E\x07~\x02\x02\u080E\u081C\x03\x02"+
		"\x02\x02\u080F\u0810\f\x05\x02\x02\u0810\u081B\x05\u0128\x95\x02\u0811"+
		"\u0812\f\x04\x02\x02\u0812\u0814\x07R\x02\x02\u0813\u0815\x05d3\x02\u0814"+
		"\u0813\x03\x02\x02\x02\u0814\u0815\x03\x02\x02\x02\u0815\u0816\x03\x02"+
		"\x02\x02\u0816\u0818\x07S\x02\x02\u0817\u0819\x05\u0108\x85\x02\u0818"+
		"\u0817\x03\x02\x02\x02\u0818\u0819\x03\x02\x02\x02\u0819\u081B\x03\x02"+
		"\x02\x02\u081A\u080F\x03\x02\x02\x02\u081A\u0811\x03\x02\x02\x02\u081B"+
		"\u081E\x03\x02\x02\x02\u081C\u081A\x03\x02\x02\x02\u081C\u081D\x03\x02"+
		"\x02\x02\u081D\u0141\x03\x02\x02\x02\u081E\u081C\x03\x02\x02\x02\u081F"+
		"\u0821\x05\u0144\xA3\x02\u0820\u081F\x03\x02\x02\x02\u0820\u0821\x03\x02"+
		"\x02\x02\u0821\u0823\x03\x02\x02\x02\u0822\u0824\x07~\x02\x02\u0823\u0822"+
		"\x03\x02\x02\x02\u0823\u0824\x03\x02\x02\x02\u0824\u082A\x03\x02\x02\x02"+
		"\u0825\u0826\x05\u0144\xA3\x02\u0826\u0827\x07u\x02\x02\u0827\u0828\x07"+
		"~\x02\x02\u0828\u082A\x03\x02\x02\x02\u0829\u0820\x03\x02\x02\x02\u0829"+
		"\u0825\x03\x02\x02\x02\u082A\u0143\x03\x02\x02\x02\u082B\u082C\b\xA3\x01"+
		"\x02\u082C\u082D\x05\u0146\xA4\x02\u082D\u0833\x03\x02\x02\x02\u082E\u082F"+
		"\f\x03\x02\x02\u082F\u0830\x07u\x02\x02\u0830\u0832\x05\u0146\xA4\x02"+
		"\u0831\u082E\x03\x02\x02\x02\u0832\u0835\x03\x02\x02\x02\u0833\u0831\x03"+
		"\x02\x02\x02\u0833\u0834\x03\x02\x02\x02\u0834\u0145\x03\x02\x02\x02\u0835"+
		"\u0833\x03\x02\x02\x02\u0836\u0838\x05\u0108\x85\x02\u0837\u0836\x03\x02"+
		"\x02\x02\u0837\u0838\x03\x02\x02\x02\u0838\u083A\x03\x02\x02\x02\u0839"+
		"\u083B\x05\xC0a\x02\u083A\u0839\x03\x02\x02\x02\u083A\u083B\x03\x02\x02"+
		"\x02\u083B\u083C\x03\x02\x02\x02\u083C\u083E\x05\xC8e\x02\u083D\u083F"+
		"\x05\xAAV\x02\u083E\u083D\x03\x02\x02\x02\u083E\u083F\x03\x02\x02\x02"+
		"\u083F\u0147\x03\x02\x02\x02\u0840\u0842\x05\u0108\x85\x02\u0841\u0840"+
		"\x03\x02\x02\x02\u0841\u0842\x03\x02\x02\x02\u0842\u0844\x03\x02\x02\x02"+
		"\u0843\u0845\x05\xC0a\x02\u0844\u0843\x03\x02\x02\x02\u0844\u0845\x03"+
		"\x02\x02\x02\u0845\u0846\x03\x02\x02\x02\u0846\u0848\x05\u014A\xA6\x02"+
		"\u0847\u0849\x05\u0174\xBB\x02\u0848\u0847\x03\x02\x02\x02\u0848\u0849"+
		"\x03\x02\x02\x02\u0849\u084A\x03\x02\x02\x02\u084A\u084B\x05\u014E\xA8"+
		"\x02\u084B\u0149\x03\x02\x02\x02\u084C\u084E\x05\xC8e\x02\u084D\u084C"+
		"\x03\x02\x02\x02\u084D\u084E\x03\x02\x02\x02\u084E\u0852\x03\x02\x02\x02"+
		"\u084F\u0851\x05\u012C\x97\x02\u0850\u084F\x03\x02\x02\x02\u0851\u0854"+
		"\x03\x02\x02\x02\u0852\u0850\x03\x02\x02\x02";
	private static readonly _serializedATNSegment4: string =
		"\u0852\u0853\x03\x02\x02\x02\u0853\u0855\x03\x02\x02\x02\u0854\u0852\x03"+
		"\x02\x02\x02\u0855\u0856\x05\u014C\xA7\x02\u0856\u014B\x03\x02\x02\x02"+
		"\u0857\u0858\x05\u0134\x9B\x02\u0858\u0859\x07P\x02\x02\u0859\u085A\x05"+
		"\u0142\xA2\x02\u085A\u085B\x07Q\x02\x02\u085B\u014D\x03\x02\x02\x02\u085C"+
		"\u085E\x05\u018C\xC7\x02\u085D\u085C\x03\x02\x02\x02\u085D\u085E\x03\x02"+
		"\x02\x02\u085E\u085F\x03\x02\x02\x02\u085F\u0868\x05r:\x02\u0860\u0868"+
		"\x05\u01B2\xDA\x02\u0861\u0862\x07`\x02\x02\u0862\u0863\x07\x15\x02\x02"+
		"\u0863\u0868\x07{\x02\x02\u0864\u0865\x07`\x02\x02\u0865\u0866\x07\x16"+
		"\x02\x02\u0866\u0868\x07{\x02\x02\u0867\u085D\x03\x02\x02\x02\u0867\u0860"+
		"\x03\x02\x02\x02\u0867\u0861\x03\x02\x02\x02\u0867\u0864\x03\x02\x02\x02"+
		"\u0868\u014F\x03\x02\x02\x02\u0869\u086F\x05\u0152\xAA\x02\u086A\u086B"+
		"\x07P\x02\x02\u086B\u086C\x05(\x15\x02\u086C\u086D\x07Q\x02\x02\u086D"+
		"\u086F\x03\x02\x02\x02\u086E\u0869\x03\x02\x02\x02\u086E\u086A\x03\x02"+
		"\x02\x02\u086F\u0151\x03\x02\x02\x02\u0870\u0871\x07`\x02\x02\u0871\u0874"+
		"\x05\u0154\xAB\x02\u0872\u0874\x05\u0158\xAD\x02\u0873\u0870\x03\x02\x02"+
		"\x02\u0873\u0872\x03\x02\x02\x02\u0874\u0153\x03\x02\x02\x02\u0875\u0878"+
		"\x05^0\x02\u0876\u0878\x05\u0158\xAD\x02\u0877\u0875\x03\x02\x02\x02\u0877"+
		"\u0876\x03\x02\x02\x02\u0878\u0155\x03\x02\x02\x02\u0879\u087E\x05\u0154"+
		"\xAB\x02\u087A\u087B\x07u\x02\x02\u087B\u087D\x05\u0154\xAB\x02\u087C"+
		"\u087A\x03\x02\x02\x02\u087D\u0880\x03\x02\x02\x02\u087E\u087C\x03\x02"+
		"\x02\x02\u087E\u087F\x03\x02\x02\x02\u087F\u0157\x03\x02\x02\x02\u0880"+
		"\u087E\x03\x02\x02\x02\u0881\u0882\x07T\x02\x02\u0882\u0884\x05\u0156"+
		"\xAC\x02\u0883\u0885\x07u\x02\x02\u0884\u0883\x03\x02\x02\x02\u0884\u0885"+
		"\x03\x02\x02\x02\u0885\u0886\x03\x02\x02\x02\u0886\u0887\x07U\x02\x02"+
		"\u0887\u088B\x03\x02\x02\x02\u0888\u0889\x07T\x02\x02\u0889\u088B\x07"+
		"U\x02\x02\u088A\u0881\x03\x02\x02\x02\u088A\u0888\x03\x02\x02\x02\u088B"+
		"\u0159\x03\x02\x02\x02\u088C\u088F\x07\x7F\x02\x02\u088D\u088F\x05\u01A0"+
		"\xD1\x02\u088E\u088C\x03\x02\x02\x02\u088E\u088D\x03\x02\x02\x02\u088F"+
		"\u015B\x03\x02\x02\x02\u0890\u0891\x05\u0160\xB1\x02\u0891\u0892\x05\u015E"+
		"\xB0\x02\u0892\u015D\x03\x02\x02\x02\u0893\u0895\x07T\x02\x02\u0894\u0896"+
		"\x05\u0168\xB5\x02\u0895\u0894\x03\x02\x02\x02\u0895\u0896\x03\x02\x02"+
		"\x02\u0896\u0897\x03\x02\x02\x02\u0897\u0898\x07U\x02\x02\u0898\u015F"+
		"\x03\x02\x02\x02\u0899\u089B\x05\u0166\xB4\x02\u089A\u089C\x05\u0108\x85"+
		"\x02\u089B\u089A\x03\x02\x02\x02\u089B\u089C\x03\x02\x02\x02\u089C\u089E"+
		"\x03\x02\x02\x02\u089D\u089F\x05\x0E\b\x02\u089E\u089D\x03\x02\x02\x02"+
		"\u089E\u089F\x03\x02\x02\x02\u089F\u08A0\x03\x02\x02\x02\u08A0\u08A2\x05"+
		"\u0162\xB2\x02\u08A1\u08A3\x05\u0164\xB3\x02\u08A2\u08A1\x03\x02\x02\x02"+
		"\u08A2\u08A3\x03\x02\x02\x02\u08A3\u08A5\x03\x02\x02\x02\u08A4\u08A6\x05"+
		"\u017A\xBE\x02\u08A5\u08A4\x03\x02\x02\x02\u08A5\u08A6\x03\x02\x02\x02"+
		"\u08A6\u08AF\x03\x02\x02\x02\u08A7\u08A9\x05\u0166\xB4\x02\u08A8\u08AA"+
		"\x05\u0108\x85\x02\u08A9\u08A8\x03\x02\x02\x02\u08A9\u08AA\x03\x02\x02"+
		"\x02\u08AA\u08AC\x03\x02\x02\x02\u08AB\u08AD\x05\u017A\xBE\x02\u08AC\u08AB"+
		"\x03\x02\x02\x02\u08AC\u08AD\x03\x02\x02\x02\u08AD\u08AF\x03\x02\x02\x02"+
		"\u08AE\u0899\x03\x02\x02\x02\u08AE\u08A7\x03\x02\x02\x02\u08AF\u0161\x03"+
		"\x02\x02\x02\u08B0\u08B2\x05\x0E\b\x02\u08B1\u08B0\x03\x02\x02\x02\u08B1"+
		"\u08B2\x03\x02\x02\x02\u08B2\u08B3\x03\x02\x02\x02\u08B3\u08B4\x05\u015A"+
		"\xAE\x02\u08B4\u0163\x03\x02\x02\x02\u08B5\u08B6\x07!\x02\x02\u08B6\u0165"+
		"\x03\x02\x02\x02\u08B7\u08B8\t\b\x02\x02\u08B8\u0167\x03\x02\x02\x02\u08B9"+
		"\u08BB\x05\u016A\xB6\x02\u08BA\u08BC\x05\u0168\xB5\x02\u08BB\u08BA\x03"+
		"\x02\x02\x02\u08BB\u08BC\x03\x02\x02\x02\u08BC\u08C3\x03\x02\x02\x02\u08BD"+
		"\u08BE\x05\u0184\xC3\x02\u08BE\u08C0\x07y\x02\x02\u08BF\u08C1\x05\u0168"+
		"\xB5\x02\u08C0\u08BF\x03\x02\x02\x02\u08C0\u08C1\x03\x02\x02\x02\u08C1"+
		"\u08C3\x03\x02\x02\x02\u08C2\u08B9\x03\x02\x02\x02\u08C2\u08BD\x03\x02"+
		"\x02\x02\u08C3\u0169\x03\x02\x02\x02\u08C4\u08CC\x05\u016C\xB7\x02\u08C5"+
		"\u08CC\x05\u0148\xA5\x02\u08C6\u08CC\x05\u0100\x81\x02\u08C7\u08CC\x05"+
		"\xB4[\x02\u08C8\u08CC\x05\u0198\xCD\x02\u08C9\u08CC\x05\xA4S\x02\u08CA"+
		"\u08CC\x05\xB6\\\x02\u08CB\u08C4\x03\x02\x02\x02\u08CB\u08C5\x03\x02\x02"+
		"\x02\u08CB\u08C6\x03\x02\x02\x02\u08CB\u08C7\x03\x02\x02\x02\u08CB\u08C8"+
		"\x03\x02\x02\x02\u08CB\u08C9\x03\x02\x02\x02\u08CB\u08CA\x03\x02\x02\x02"+
		"\u08CC\u016B\x03\x02\x02\x02\u08CD\u08CE\x05\u016E\xB8\x02\u08CE\u08CF"+
		"\x07{\x02\x02\u08CF\u016D\x03\x02\x02\x02\u08D0\u08D2\x05\u0108\x85\x02"+
		"\u08D1\u08D0\x03\x02\x02\x02\u08D1\u08D2\x03\x02\x02\x02\u08D2\u08D4\x03"+
		"\x02\x02\x02\u08D3\u08D5\x05\xC0a\x02\u08D4\u08D3\x03\x02\x02\x02\u08D4"+
		"\u08D5\x03\x02\x02\x02\u08D5\u08D6\x03\x02\x02\x02\u08D6\u08DA\x05\xC8"+
		"e\x02\u08D7\u08D9\x05\u012C\x97\x02\u08D8\u08D7\x03\x02\x02\x02\u08D9"+
		"\u08DC\x03\x02\x02\x02\u08DA\u08D8\x03\x02\x02\x02\u08DA\u08DB\x03\x02"+
		"\x02\x02\u08DB\u08DE\x03\x02\x02\x02\u08DC\u08DA\x03\x02\x02\x02\u08DD"+
		"\u08DF\x05\u0170\xB9\x02\u08DE\u08DD\x03\x02\x02\x02\u08DE\u08DF\x03\x02"+
		"\x02\x02\u08DF\u016F\x03\x02\x02\x02\u08E0\u08E1\b\xB9\x01\x02\u08E1\u08E2"+
		"\x05\u0172\xBA\x02\u08E2\u08E8\x03\x02\x02\x02\u08E3\u08E4\f\x03\x02\x02"+
		"\u08E4\u08E5\x07u\x02\x02\u08E5\u08E7\x05\u0172\xBA\x02\u08E6\u08E3\x03"+
		"\x02\x02\x02\u08E7\u08EA\x03\x02\x02\x02\u08E8\u08E6\x03\x02\x02\x02\u08E8"+
		"\u08E9\x03\x02\x02\x02\u08E9\u0171\x03\x02\x02\x02\u08EA\u08E8\x03\x02"+
		"\x02\x02\u08EB\u08ED\x05\u0134\x9B\x02\u08EC\u08EE\x05\u0174\xBB\x02\u08ED"+
		"\u08EC\x03\x02\x02\x02\u08ED\u08EE\x03\x02\x02\x02\u08EE\u08F0\x03\x02"+
		"\x02\x02\u08EF\u08F1\x05\u0178\xBD\x02\u08F0\u08EF\x03\x02\x02\x02\u08F0"+
		"\u08F1\x03\x02\x02\x02\u08F1\u0904\x03\x02\x02\x02\u08F2\u08F5\x05\u0134"+
		"\x9B\x02\u08F3\u08F4\x07`\x02\x02\u08F4\u08F6\x05\u0154\xAB\x02\u08F5"+
		"\u08F3\x03\x02\x02\x02\u08F5\u08F6\x03\x02\x02\x02\u08F6\u0904\x03\x02"+
		"\x02\x02\u08F7\u08F9\x05\u0134\x9B\x02\u08F8\u08FA\x05\u0158\xAD\x02\u08F9"+
		"\u08F8\x03\x02\x02\x02\u08F9\u08FA\x03\x02\x02\x02\u08FA\u0904\x03\x02"+
		"\x02\x02\u08FB\u08FD\x07\x7F\x02\x02\u08FC\u08FB\x03\x02\x02\x02\u08FC"+
		"\u08FD\x03\x02\x02\x02\u08FD\u08FF\x03\x02\x02\x02\u08FE\u0900\x05\u0108"+
		"\x85\x02\u08FF\u08FE\x03\x02\x02\x02\u08FF\u0900\x03\x02\x02\x02\u0900"+
		"\u0901\x03\x02\x02\x02\u0901\u0902\x07y\x02\x02\u0902\u0904\x05d3\x02"+
		"\u0903\u08EB\x03\x02\x02\x02\u0903\u08F2\x03\x02\x02\x02\u0903\u08F7\x03"+
		"\x02\x02\x02\u0903\u08FC\x03\x02\x02\x02\u0904\u0173\x03\x02\x02\x02\u0905"+
		"\u0906\b\xBB\x01\x02\u0906\u0907\x05\u0176\xBC\x02\u0907\u090C\x03\x02"+
		"\x02\x02\u0908\u0909\f\x03\x02\x02\u0909\u090B\x05\u0176\xBC\x02\u090A"+
		"\u0908\x03\x02\x02\x02\u090B\u090E\x03\x02\x02\x02\u090C\u090A\x03\x02"+
		"\x02\x02\u090C\u090D\x03\x02\x02\x02\u090D\u0175\x03\x02\x02\x02\u090E"+
		"\u090C\x03\x02\x02\x02\u090F\u0910\t\t\x02\x02\u0910\u0177\x03\x02\x02"+
		"\x02\u0911\u0912\x07`\x02\x02\u0912\u0913\x07\x82\x02\x02\u0913\u0179"+
		"\x03\x02\x02\x02\u0914\u0915\x07y\x02\x02\u0915\u0916\x05\u017C\xBF\x02"+
		"\u0916\u017B\x03\x02\x02\x02\u0917\u0918\b\xBF\x01\x02\u0918\u091A\x05"+
		"\u017E\xC0\x02\u0919\u091B\x07~\x02\x02\u091A\u0919\x03\x02\x02\x02\u091A"+
		"\u091B\x03\x02\x02\x02\u091B\u0924\x03\x02\x02\x02\u091C\u091D\f\x03\x02"+
		"\x02\u091D\u091E\x07u\x02\x02\u091E\u0920\x05\u017E\xC0\x02\u091F\u0921"+
		"\x07~\x02\x02\u0920\u091F\x03\x02\x02\x02\u0920\u0921\x03\x02\x02\x02"+
		"\u0921\u0923\x03\x02\x02\x02\u0922\u091C\x03\x02\x02\x02\u0923\u0926\x03"+
		"\x02\x02\x02\u0924\u0922\x03\x02\x02\x02\u0924\u0925\x03\x02\x02\x02\u0925"+
		"\u017D\x03\x02\x02\x02\u0926\u0924\x03\x02\x02\x02\u0927\u0929\x05\u0108"+
		"\x85\x02\u0928\u0927\x03\x02\x02\x02\u0928\u0929\x03\x02\x02\x02\u0929"+
		"\u092A\x03\x02\x02\x02\u092A\u093D\x05\u0182\xC2\x02\u092B\u092D\x05\u0108"+
		"\x85\x02\u092C\u092B\x03\x02\x02\x02\u092C\u092D\x03\x02\x02\x02\u092D"+
		"\u092E\x03\x02\x02\x02\u092E\u0930\x07K\x02\x02\u092F\u0931\x05\u0184"+
		"\xC3\x02\u0930\u092F\x03\x02\x02\x02\u0930\u0931\x03\x02\x02\x02\u0931"+
		"\u0932\x03\x02\x02\x02\u0932\u093D\x05\u0182\xC2\x02\u0933\u0935\x05\u0108"+
		"\x85\x02\u0934\u0933\x03\x02\x02\x02\u0934\u0935\x03\x02\x02\x02\u0935"+
		"\u0936\x03\x02\x02\x02\u0936\u0938\x05\u0184\xC3\x02\u0937\u0939\x07K"+
		"\x02\x02\u0938\u0937\x03\x02\x02\x02\u0938\u0939\x03\x02\x02\x02\u0939"+
		"\u093A\x03\x02\x02\x02\u093A\u093B\x05\u0182\xC2\x02\u093B\u093D\x03\x02"+
		"\x02\x02\u093C\u0928\x03\x02\x02\x02\u093C\u092C\x03\x02\x02\x02\u093C"+
		"\u0934\x03\x02\x02\x02\u093D\u017F\x03\x02\x02\x02\u093E\u0940\x05\x0E"+
		"\b\x02\u093F\u093E\x03\x02\x02\x02\u093F\u0940\x03\x02\x02\x02\u0940\u0941"+
		"\x03\x02\x02\x02\u0941\u0944\x05\u015A\xAE\x02\u0942\u0944\x05\xD4k\x02"+
		"\u0943\u093F\x03\x02\x02\x02\u0943\u0942\x03\x02\x02\x02\u0944\u0181\x03"+
		"\x02\x02\x02\u0945\u0946\x05\u0180\xC1\x02\u0946\u0183\x03\x02\x02\x02"+
		"\u0947\u0948\t\n\x02\x02\u0948\u0185\x03\x02\x02\x02\u0949\u094A\x07/"+
		"\x02\x02\u094A\u094B\x05\u0188\xC5\x02\u094B\u0187\x03\x02\x02\x02\u094C"+
		"\u094E\x05\xCCg\x02\u094D\u094F\x05\u018A\xC6\x02\u094E\u094D\x03\x02"+
		"\x02\x02\u094E\u094F\x03\x02\x02\x02\u094F\u0189\x03\x02\x02\x02\u0950"+
		"\u0952\x05\u012C\x97\x02\u0951\u0953\x05\u018A\xC6\x02\u0952\u0951\x03"+
		"\x02\x02\x02\u0952\u0953\x03\x02\x02\x02\u0953\u018B\x03\x02\x02\x02\u0954"+
		"\u0955\x07y\x02\x02\u0955\u0956\x05\u018E\xC8\x02\u0956\u018D\x03\x02"+
		"\x02\x02\u0957\u0959\x05\u0190\xC9\x02\u0958\u095A\x07~\x02\x02\u0959"+
		"\u0958\x03\x02\x02\x02\u0959\u095A\x03\x02\x02\x02\u095A\u0963\x03\x02"+
		"\x02\x02\u095B\u095D\x05\u0190\xC9\x02\u095C\u095E\x07~\x02\x02\u095D"+
		"\u095C\x03\x02\x02\x02\u095D\u095E\x03\x02\x02\x02\u095E\u095F\x03\x02"+
		"\x02\x02\u095F\u0960\x07u\x02\x02\u0960\u0961\x05\u018E\xC8\x02\u0961"+
		"\u0963\x03\x02\x02\x02\u0962\u0957\x03\x02\x02\x02\u0962\u095B\x03\x02"+
		"\x02\x02\u0963\u018F\x03\x02\x02\x02\u0964\u0965\x05\u0192\xCA\x02\u0965"+
		"\u0967\x07P\x02\x02\u0966\u0968\x05(\x15\x02\u0967\u0966\x03\x02\x02\x02"+
		"\u0967\u0968\x03\x02\x02\x02\u0968\u0969\x03\x02\x02\x02\u0969\u096A\x07"+
		"Q\x02\x02\u096A\u096F\x03\x02\x02\x02\u096B\u096C\x05\u0192\xCA\x02\u096C"+
		"\u096D\x05\u0158\xAD\x02\u096D\u096F\x03\x02\x02\x02\u096E\u0964\x03\x02"+
		"\x02\x02\u096E\u096B\x03\x02\x02\x02\u096F\u0191\x03\x02\x02\x02\u0970"+
		"\u0973\x05\u0180\xC1\x02\u0971\u0973\x07\x7F\x02\x02\u0972\u0970\x03\x02"+
		"\x02\x02\u0972\u0971\x03\x02\x02\x02\u0973\u0193\x03\x02\x02\x02\u0974"+
		"\u0975\x07/\x02\x02\u0975\u0976\x05\u01C8\xE5\x02\u0976\u0195\x03\x02"+
		"\x02\x02\u0977\u0978\x07/\x02\x02\u0978\u0979\x07\x88\x02\x02\u0979\u097D"+
		"\x07\x7F\x02\x02\u097A\u097B\x07/\x02\x02\u097B\u097D\x07\x8C\x02\x02"+
		"\u097C\u0977\x03\x02\x02\x02\u097C\u097A\x03\x02\x02\x02\u097D\u0197\x03"+
		"\x02\x02\x02\u097E\u097F\x07?\x02\x02\u097F\u0980\x07a\x02\x02\u0980\u0981"+
		"\x05\u019A\xCE\x02\u0981\u0982\x07b\x02\x02\u0982\u0983\x05\x9EP\x02\u0983"+
		"\u0199\x03\x02\x02\x02\u0984\u0985\b\xCE\x01\x02\u0985\u0986\x05\u019C"+
		"\xCF\x02\u0986\u098C\x03\x02\x02\x02\u0987\u0988\f\x03\x02\x02\u0988\u0989"+
		"\x07u\x02\x02\u0989\u098B\x05\u019C\xCF\x02\u098A\u0987\x03\x02\x02\x02"+
		"\u098B\u098E\x03\x02\x02\x02\u098C\u098A\x03\x02\x02\x02\u098C\u098D\x03"+
		"\x02\x02\x02\u098D\u019B\x03\x02\x02\x02\u098E\u098C\x03\x02\x02\x02\u098F"+
		"\u0992\x05\u019E\xD0\x02\u0990\u0992\x05\u0146\xA4\x02\u0991\u098F\x03"+
		"\x02\x02\x02\u0991\u0990\x03\x02\x02\x02\u0992\u019D\x03\x02\x02\x02\u0993"+
		"\u0995\x07\x0F\x02\x02\u0994\u0996\x07~\x02\x02\u0995\u0994\x03\x02\x02"+
		"\x02\u0995\u0996\x03\x02\x02\x02\u0996\u0998\x03\x02\x02\x02\u0997\u0999"+
		"\x07\x7F\x02\x02\u0998\u0997\x03\x02\x02\x02\u0998\u0999\x03\x02\x02\x02"+
		"\u0999\u09C4\x03\x02\x02\x02\u099A\u099C\x07\x0F\x02\x02\u099B\u099D\x07"+
		"\x7F\x02\x02\u099C\u099B\x03\x02\x02\x02\u099C\u099D\x03\x02\x02\x02\u099D"+
		"\u099E\x03\x02\x02\x02\u099E\u099F\x07`\x02\x02\u099F\u09C4\x05\u0136"+
		"\x9C\x02\u09A0\u09A2\x07G\x02\x02\u09A1\u09A3\x07~\x02\x02\u09A2\u09A1"+
		"\x03\x02\x02\x02\u09A2\u09A3\x03\x02\x02\x02\u09A3\u09A5\x03\x02\x02\x02"+
		"\u09A4\u09A6\x07\x7F\x02\x02\u09A5\u09A4\x03\x02\x02\x02\u09A5\u09A6\x03"+
		"\x02\x02\x02\u09A6\u09C4\x03\x02\x02\x02\u09A7\u09A9\x07G\x02\x02\u09A8"+
		"\u09AA\x07\x7F\x02\x02\u09A9\u09A8\x03\x02\x02\x02\u09A9\u09AA\x03\x02"+
		"\x02\x02\u09AA\u09AB\x03\x02\x02\x02\u09AB\u09AC\x07`\x02\x02\u09AC\u09C4"+
		"\x05\u0136\x9C\x02\u09AD\u09AE\x07?\x02\x02\u09AE\u09AF\x07a\x02\x02\u09AF"+
		"\u09B0\x05\u019A\xCE\x02\u09B0\u09B1\x07b\x02\x02\u09B1\u09B3\x07\x0F"+
		"\x02\x02\u09B2\u09B4\x07~\x02\x02\u09B3\u09B2\x03\x02\x02\x02\u09B3\u09B4"+
		"\x03\x02\x02\x02\u09B4\u09B6\x03\x02\x02\x02\u09B5\u09B7\x07\x7F\x02\x02"+
		"\u09B6\u09B5\x03\x02\x02\x02\u09B6\u09B7\x03\x02\x02\x02\u09B7\u09C4\x03"+
		"\x02\x02\x02\u09B8\u09B9\x07?\x02\x02\u09B9\u09BA\x07a\x02\x02\u09BA\u09BB"+
		"\x05\u019A\xCE\x02\u09BB\u09BC\x07b\x02\x02\u09BC\u09BE\x07\x0F\x02\x02"+
		"\u09BD\u09BF\x07\x7F\x02\x02\u09BE\u09BD\x03\x02\x02\x02\u09BE\u09BF\x03"+
		"\x02\x02\x02\u09BF\u09C0\x03\x02\x02\x02\u09C0\u09C1\x07`\x02\x02\u09C1"+
		"\u09C2\x05\x06\x04\x02\u09C2\u09C4\x03\x02\x02\x02\u09C3\u0993\x03\x02"+
		"\x02\x02\u09C3\u099A\x03\x02\x02\x02\u09C3\u09A0\x03\x02\x02\x02\u09C3"+
		"\u09A7\x03\x02\x02\x02\u09C3\u09AD\x03\x02\x02\x02\u09C3\u09B8\x03\x02"+
		"\x02\x02\u09C4\u019F\x03\x02\x02\x02\u09C5\u09C6\x05\u01A4\xD3\x02\u09C6"+
		"\u09C8\x07a\x02\x02\u09C7\u09C9\x05\u01A6\xD4\x02\u09C8\u09C7\x03\x02"+
		"\x02\x02\u09C8\u09C9\x03\x02\x02\x02\u09C9\u09CA\x03\x02\x02\x02\u09CA"+
		"\u09CB\x07b\x02\x02\u09CB\u01A1\x03\x02\x02\x02\u09CC\u09DC\x05\u01A0"+
		"\xD1\x02\u09CD\u09CE\x05\u0194\xCB\x02\u09CE\u09D0\x07a\x02\x02\u09CF"+
		"\u09D1\x05\u01A6\xD4\x02\u09D0\u09CF\x03\x02\x02\x02\u09D0\u09D1\x03\x02"+
		"\x02\x02\u09D1\u09D2\x03\x02\x02\x02\u09D2\u09D3\x07b\x02\x02\u09D3\u09DC"+
		"\x03\x02\x02\x02\u09D4\u09D5\x05\u0196\xCC\x02\u09D5\u09D7\x07a\x02\x02"+
		"\u09D6\u09D8\x05\u01A6\xD4\x02\u09D7\u09D6\x03\x02\x02\x02\u09D7\u09D8"+
		"\x03\x02\x02\x02\u09D8\u09D9\x03\x02\x02\x02\u09D9\u09DA\x07b\x02\x02"+
		"\u09DA\u09DC\x03\x02\x02\x02\u09DB\u09CC\x03\x02\x02\x02\u09DB\u09CD\x03"+
		"\x02\x02\x02\u09DB\u09D4\x03\x02\x02\x02\u09DC\u01A3\x03\x02\x02\x02\u09DD"+
		"\u09DE\x07\x7F\x02\x02\u09DE\u01A5\x03\x02\x02\x02\u09DF\u09E0\b\xD4\x01"+
		"\x02\u09E0\u09E2\x05\u01A8\xD5\x02\u09E1\u09E3\x07~\x02\x02\u09E2\u09E1"+
		"\x03\x02\x02\x02\u09E2\u09E3\x03\x02\x02\x02\u09E3\u09EC\x03\x02\x02\x02"+
		"\u09E4\u09E5\f\x03\x02\x02\u09E5\u09E6\x07u\x02\x02\u09E6\u09E8\x05\u01A8"+
		"\xD5\x02\u09E7\u09E9\x07~\x02\x02\u09E8\u09E7\x03\x02\x02\x02\u09E8\u09E9"+
		"\x03\x02\x02\x02\u09E9\u09EB\x03\x02\x02\x02\u09EA\u09E4\x03\x02\x02\x02"+
		"\u09EB\u09EE\x03\x02\x02\x02\u09EC\u09EA\x03\x02\x02\x02\u09EC\u09ED\x03"+
		"\x02\x02\x02\u09ED\u01A7\x03\x02\x02\x02\u09EE\u09EC\x03\x02\x02\x02\u09EF"+
		"\u09F3\x05d3\x02\u09F0\u09F3\x05\u0136\x9C\x02\u09F1\u09F3\x05\x06\x04"+
		"\x02\u09F2\u09EF\x03\x02\x02\x02\u09F2\u09F0\x03\x02\x02\x02\u09F2\u09F1"+
		"\x03\x02\x02\x02\u09F3\u01A9\x03\x02\x02\x02\u09F4\u09F5\x07G\x02\x02"+
		"\u09F5\u09F6\x05\x0E\b\x02\u09F6\u09F7\x07\x7F\x02\x02\u09F7\u0A00\x03"+
		"\x02\x02\x02\u09F8\u09F9\x07G\x02\x02\u09F9\u09FB\x05\x0E\b\x02\u09FA"+
		"\u09FC\x07?\x02\x02\u09FB\u09FA\x03\x02\x02\x02\u09FB\u09FC\x03\x02\x02"+
		"\x02\u09FC\u09FD\x03\x02\x02\x02\u09FD\u09FE\x05\u01A0\xD1\x02\u09FE\u0A00"+
		"\x03\x02\x02\x02\u09FF\u09F4\x03\x02\x02\x02\u09FF\u09F8\x03\x02\x02\x02"+
		"\u0A00\u01AB\x03\x02\x02\x02\u0A01\u0A03\x07\x1F\x02\x02\u0A02\u0A01\x03"+
		"\x02\x02\x02\u0A02\u0A03\x03\x02\x02\x02\u0A03\u0A04\x03\x02\x02\x02\u0A04"+
		"\u0A05\x07?\x02\x02\u0A05\u0A06\x05\x9EP\x02\u0A06\u01AD\x03\x02\x02\x02"+
		"\u0A07\u0A08\x07?\x02\x02\u0A08\u0A09\x07a\x02\x02\u0A09\u0A0A\x07b\x02"+
		"\x02\u0A0A\u0A0B\x05\x9EP\x02\u0A0B\u01AF\x03\x02\x02\x02\u0A0C\u0A0D"+
		"\x07D\x02\x02\u0A0D\u0A0E\x05r:\x02\u0A0E\u0A0F\x05\u01B4\xDB\x02\u0A0F"+
		"\u01B1\x03\x02\x02\x02\u0A10\u0A12\x07D\x02\x02\u0A11\u0A13\x05\u018C"+
		"\xC7\x02\u0A12\u0A11\x03\x02\x02\x02\u0A12\u0A13\x03\x02\x02\x02\u0A13"+
		"\u0A14\x03\x02\x02\x02\u0A14\u0A15\x05r:\x02\u0A15\u0A16\x05\u01B4\xDB"+
		"\x02\u0A16\u01B3\x03\x02\x02\x02\u0A17\u0A19\x05\u01B6\xDC\x02\u0A18\u0A1A"+
		"\x05\u01B4\xDB\x02\u0A19\u0A18\x03\x02\x02\x02\u0A19\u0A1A\x03\x02\x02"+
		"\x02\u0A1A\u01B5\x03\x02\x02\x02\u0A1B\u0A1C\x07\v\x02\x02\u0A1C\u0A1D"+
		"\x07P\x02\x02\u0A1D\u0A1E\x05\u01B8\xDD\x02\u0A1E\u0A1F\x07Q\x02\x02\u0A1F"+
		"\u0A20\x05r:\x02\u0A20\u01B7\x03\x02\x02\x02\u0A21\u0A23\x05\u0108\x85"+
		"\x02\u0A22\u0A21\x03\x02\x02\x02\u0A22\u0A23\x03\x02\x02\x02\u0A23\u0A24"+
		"\x03\x02\x02\x02\u0A24\u0A25\x05\xCCg\x02\u0A25\u0A26\x05\u0122\x92\x02"+
		"\u0A26\u0A30\x03\x02\x02\x02\u0A27\u0A29\x05\u0108\x85\x02\u0A28\u0A27"+
		"\x03\x02\x02\x02\u0A28\u0A29\x03\x02\x02\x02\u0A29\u0A2A\x03\x02\x02\x02"+
		"\u0A2A\u0A2C\x05\xCCg\x02\u0A2B\u0A2D\x05\u0138\x9D\x02\u0A2C\u0A2B\x03"+
		"\x02\x02\x02\u0A2C\u0A2D\x03\x02\x02\x02\u0A2D\u0A30\x03\x02\x02\x02\u0A2E"+
		"\u0A30\x07~\x02\x02\u0A2F\u0A22\x03\x02\x02\x02\u0A2F\u0A28\x03\x02\x02"+
		"\x02\u0A2F\u0A2E\x03\x02\x02\x02\u0A30\u01B9\x03\x02\x02\x02\u0A31\u0A33"+
		"\x07B\x02\x02\u0A32\u0A34\x05^0\x02\u0A33\u0A32\x03\x02\x02\x02\u0A33"+
		"\u0A34\x03\x02\x02\x02\u0A34\u01BB\x03\x02\x02\x02\u0A35\u0A38\x05\u01BE"+
		"\xE0\x02\u0A36\u0A38\x05\u01C2\xE2\x02\u0A37\u0A35\x03\x02\x02\x02\u0A37"+
		"\u0A36\x03\x02\x02\x02\u0A38\u01BD\x03\x02\x02\x02\u0A39\u0A3A\x07B\x02"+
		"\x02\u0A3A\u0A3C\x07P\x02\x02\u0A3B\u0A3D\x05\u01C0\xE1\x02\u0A3C\u0A3B"+
		"\x03\x02\x02\x02\u0A3C\u0A3D\x03\x02\x02\x02\u0A3D\u0A3E\x03\x02\x02\x02"+
		"\u0A3E\u0A3F\x07Q\x02\x02\u0A3F\u01BF\x03\x02\x02\x02\u0A40\u0A41\b\xE1"+
		"\x01\x02\u0A41\u0A43\x05\u0136\x9C\x02\u0A42\u0A44\x07~\x02\x02\u0A43"+
		"\u0A42\x03\x02\x02\x02\u0A43\u0A44\x03\x02\x02\x02\u0A44\u0A4D\x03\x02"+
		"\x02\x02\u0A45\u0A46\f\x03\x02\x02\u0A46\u0A47\x07u\x02\x02\u0A47\u0A49"+
		"\x05\u0136\x9C\x02\u0A48\u0A4A\x07~\x02\x02\u0A49\u0A48\x03\x02\x02\x02"+
		"\u0A49\u0A4A\x03\x02\x02\x02\u0A4A\u0A4C\x03\x02\x02\x02\u0A4B\u0A45\x03"+
		"\x02\x02\x02\u0A4C\u0A4F\x03\x02\x02\x02\u0A4D\u0A4B\x03\x02\x02\x02\u0A4D"+
		"\u0A4E\x03\x02\x02\x02\u0A4E\u01C1\x03\x02\x02\x02\u0A4F\u0A4D\x03\x02"+
		"\x02\x02\u0A50\u0A51\x07-\x02\x02\u0A51\u0A52\x07P\x02\x02\u0A52\u0A53"+
		"\x05d3\x02\u0A53\u0A54\x07Q\x02\x02\u0A54\u0A57\x03\x02\x02\x02\u0A55"+
		"\u0A57\x07-\x02\x02\u0A56\u0A50\x03\x02\x02\x02\u0A56\u0A55\x03\x02\x02"+
		"\x02\u0A57\u01C3\x03\x02\x02\x02\u0A58\u0A59\x07b\x02\x02\u0A59\u0A5A"+
		"\x07b\x02\x02\u0A5A\u01C5\x03\x02\x02\x02\u0A5B\u0A5C\x07b\x02\x02\u0A5C"+
		"\u0A5D\x07b\x02\x02\u0A5D\u0A5E\x07`\x02\x02\u0A5E\u01C7\x03\x02\x02\x02"+
		"\u0A5F\u0A90\x07,\x02\x02\u0A60\u0A90\x07\x16\x02\x02\u0A61\u0A62\x07"+
		",\x02\x02\u0A62\u0A63\x07R\x02\x02\u0A63\u0A90\x07S\x02\x02\u0A64\u0A65"+
		"\x07\x16\x02\x02\u0A65\u0A66\x07R\x02\x02\u0A66\u0A90\x07S\x02\x02\u0A67"+
		"\u0A90\x07V\x02\x02\u0A68\u0A90\x07W\x02\x02\u0A69\u0A90\x07X\x02\x02"+
		"\u0A6A\u0A90\x07Y\x02\x02\u0A6B\u0A90\x07Z\x02\x02\u0A6C\u0A90\x07[\x02"+
		"\x02\u0A6D\u0A90\x07\\\x02\x02\u0A6E\u0A90\x07]\x02\x02\u0A6F\u0A90\x07"+
		"^\x02\x02\u0A70\u0A90\x07_\x02\x02\u0A71\u0A90\x07`\x02\x02\u0A72\u0A90"+
		"\x07a\x02\x02\u0A73\u0A90\x07b\x02\x02\u0A74\u0A90\x07c\x02\x02\u0A75"+
		"\u0A90\x07d\x02\x02\u0A76\u0A90\x07e\x02\x02\u0A77\u0A90\x07f\x02\x02"+
		"\u0A78\u0A90\x07g\x02\x02\u0A79\u0A90\x07h\x02\x02\u0A7A\u0A90\x07i\x02"+
		"\x02\u0A7B\u0A90\x07j\x02\x02\u0A7C\u0A90\x07k\x02\x02\u0A7D\u0A90\x05"+
		"\u01C4\xE3\x02\u0A7E\u0A90\x05\u01C6\xE4\x02\u0A7F\u0A90\x07l\x02\x02"+
		"\u0A80\u0A90\x07m\x02\x02\u0A81\u0A90\x07n\x02\x02\u0A82\u0A90\x07o\x02"+
		"\x02\u0A83\u0A90\x07p\x02\x02\u0A84\u0A90\x07q\x02\x02\u0A85\u0A90\x07"+
		"r\x02\x02\u0A86\u0A90\x07s\x02\x02\u0A87\u0A90\x07t\x02\x02\u0A88\u0A90"+
		"\x07u\x02\x02\u0A89\u0A90\x07v\x02\x02\u0A8A\u0A90\x07w\x02\x02\u0A8B"+
		"\u0A8C\x07P\x02\x02\u0A8C\u0A90\x07Q\x02\x02\u0A8D\u0A8E\x07R\x02\x02"+
		"\u0A8E\u0A90\x07S\x02\x02\u0A8F\u0A5F\x03\x02\x02\x02\u0A8F\u0A60\x03"+
		"\x02\x02\x02\u0A8F\u0A61\x03\x02\x02\x02\u0A8F\u0A64\x03\x02\x02\x02\u0A8F"+
		"\u0A67\x03\x02\x02\x02\u0A8F\u0A68\x03\x02\x02\x02\u0A8F\u0A69\x03\x02"+
		"\x02\x02\u0A8F\u0A6A\x03\x02\x02\x02\u0A8F\u0A6B\x03\x02\x02\x02\u0A8F"+
		"\u0A6C\x03\x02\x02\x02\u0A8F\u0A6D\x03\x02\x02\x02\u0A8F\u0A6E\x03\x02"+
		"\x02\x02\u0A8F\u0A6F\x03\x02\x02\x02\u0A8F\u0A70\x03\x02\x02\x02\u0A8F"+
		"\u0A71\x03\x02\x02\x02\u0A8F\u0A72\x03\x02\x02\x02\u0A8F\u0A73\x03\x02"+
		"\x02\x02\u0A8F\u0A74\x03\x02\x02\x02\u0A8F\u0A75\x03\x02\x02\x02\u0A8F"+
		"\u0A76\x03\x02\x02\x02\u0A8F\u0A77\x03\x02\x02\x02\u0A8F\u0A78\x03\x02"+
		"\x02\x02\u0A8F\u0A79\x03\x02\x02\x02\u0A8F\u0A7A\x03\x02\x02\x02\u0A8F"+
		"\u0A7B\x03\x02\x02\x02\u0A8F\u0A7C\x03\x02\x02\x02\u0A8F\u0A7D\x03\x02"+
		"\x02\x02\u0A8F\u0A7E\x03\x02\x02\x02\u0A8F\u0A7F\x03\x02\x02\x02\u0A8F"+
		"\u0A80\x03\x02\x02\x02\u0A8F\u0A81\x03\x02\x02\x02\u0A8F\u0A82\x03\x02"+
		"\x02\x02\u0A8F\u0A83\x03\x02\x02\x02\u0A8F\u0A84\x03\x02\x02\x02\u0A8F"+
		"\u0A85\x03\x02\x02\x02\u0A8F\u0A86\x03\x02\x02\x02\u0A8F\u0A87\x03\x02"+
		"\x02\x02\u0A8F\u0A88\x03\x02\x02\x02\u0A8F\u0A89\x03\x02\x02\x02\u0A8F"+
		"\u0A8A\x03\x02\x02\x02\u0A8F\u0A8B\x03\x02\x02\x02\u0A8F\u0A8D\x03\x02"+
		"\x02\x02\u0A90\u01C9\x03\x02\x02\x02\u0A91\u0A99\x05\u01CC\xE7\x02\u0A92"+
		"\u0A99\x05\u01CE\xE8\x02\u0A93\u0A99\x05\u01D0\xE9\x02\u0A94\u0A99\x05"+
		"\u01D2\xEA\x02\u0A95\u0A99\x05\u01D4\xEB\x02\u0A96\u0A99\x05\u01D6\xEC"+
		"\x02\u0A97\u0A99\x05\u01D8\xED\x02\u0A98\u0A91\x03\x02\x02\x02\u0A98\u0A92"+
		"\x03\x02\x02\x02\u0A98\u0A93\x03\x02\x02\x02\u0A98\u0A94\x03\x02\x02\x02"+
		"\u0A98\u0A95\x03\x02\x02\x02\u0A98\u0A96\x03\x02\x02\x02\u0A98\u0A97\x03"+
		"\x02\x02\x02\u0A99\u01CB\x03\x02\x02\x02\u0A9A\u0A9B\x07\x80\x02\x02\u0A9B"+
		"\u01CD\x03\x02\x02\x02\u0A9C\u0A9D\x07\x86\x02\x02\u0A9D\u01CF\x03\x02"+
		"\x02\x02\u0A9E\u0A9F\x07\x87\x02\x02\u0A9F\u01D1\x03\x02\x02\x02\u0AA0"+
		"\u0AA1\x07\x88\x02\x02\u0AA1\u01D3\x03\x02\x02\x02\u0AA2\u0AA3\x07\x89"+
		"\x02\x02\u0AA3\u01D5\x03\x02\x02\x02\u0AA4\u0AA5\x07.\x02\x02\u0AA5\u01D7"+
		"\x03\x02\x02\x02\u0AA6\u0AA7\t\v\x02\x02\u0AA7\u01D9\x03\x02\x02\x02\u0160"+
		"\u01DB\u01E5\u01E9\u01ED\u01F8\u01FC\u020B\u0212\u0217\u0219\u021E\u0224"+
		"\u022E\u0235\u023B\u023F\u0244\u024A\u0251\u0257\u025A\u025D\u0260\u0267"+
		"\u0271\u0278\u02AC\u02BB\u02C1\u02CE\u02D0\u02D6\u02E5\u02EB\u02F1\u0311"+
		"\u0318\u031C\u0320\u0323\u0327\u032D\u032F\u0337\u033B\u033E\u0345\u034C"+
		"\u0350\u0355\u0359\u035C\u0361\u0367\u0374\u037F\u0381\u0390\u0392\u039E"+
		"\u03A0\u03AD\u03AF\u03C1\u03C3\u03CF\u03D1\u03DC\u03E7\u03F2\u03FD\u0408"+
		"\u0412\u041A\u0427\u0431\u0438\u043C\u0440\u0444\u0448\u044C\u0450\u0454"+
		"\u0458\u045C\u0460\u0464\u046A\u046D\u0470\u0476\u0479\u047E\u0487\u048B"+
		"\u0491\u0499\u04AA\u04B8\u04BD\u04C5\u04CB\u04DF\u04E3\u04F3\u04F6\u04FD"+
		"\u050B\u0512\u0516\u051F\u0523\u052D\u0530\u0534\u0537\u053B\u053E\u0540"+
		"\u054E\u0557\u055B\u0560\u056A\u056D\u0571\u0579\u057C\u0581\u0587\u058C"+
		"\u0591\u0597\u059A\u059E\u05A3\u05A6\u05AB\u05B0\u05C1\u05C5\u05CA\u05D1"+
		"\u05D5\u05DA\u05E5\u05EB\u05EF\u05F4\u05F8\u05FD\u0600\u0612\u061A\u0620"+
		"\u062B\u062F\u0632\u063C\u0642\u0645\u064C\u0656\u065A\u065D\u0660\u0664"+
		"\u0669\u066B\u066F\u0673\u067C\u0689\u0691\u0697\u069D\u06A1\u06A4\u06AD"+
		"\u06B6\u06BE\u06C9\u06CF\u06DA\u06DD\u06E2\u06F1\u06F7\u0700\u070A\u0710"+
		"\u0718\u071C\u0720\u0725\u072A\u0731\u0733\u0738\u073C\u074A\u0750\u075F"+
		"\u0766\u076B\u0772\u0777\u077F\u0785\u078C\u0790\u0792\u0794\u079B\u079E"+
		"\u07A1\u07A4\u07A9\u07AD\u07B0\u07B4\u07B8\u07BD\u07C0\u07C2\u07C6\u07CD"+
		"\u07D3\u07D7\u07DD\u07E2\u07E4\u07EA\u07EE\u07F4\u07FB\u07FF\u0801\u0803"+
		"\u080A\u0814\u0818\u081A\u081C\u0820\u0823\u0829\u0833\u0837\u083A\u083E"+
		"\u0841\u0844\u0848\u084D\u0852\u085D\u0867\u086E\u0873\u0877\u087E\u0884"+
		"\u088A\u088E\u0895\u089B\u089E\u08A2\u08A5\u08A9\u08AC\u08AE\u08B1\u08BB"+
		"\u08C0\u08C2\u08CB\u08D1\u08D4\u08DA\u08DE\u08E8\u08ED\u08F0\u08F5\u08F9"+
		"\u08FC\u08FF\u0903\u090C\u091A\u0920\u0924\u0928\u092C\u0930\u0934\u0938"+
		"\u093C\u093F\u0943\u094E\u0952\u0959\u095D\u0962\u0967\u096E\u0972\u097C"+
		"\u098C\u0991\u0995\u0998\u099C\u09A2\u09A5\u09A9\u09B3\u09B6\u09BE\u09C3"+
		"\u09C8\u09D0\u09D7\u09DB\u09E2\u09E8\u09EC\u09F2\u09FB\u09FF\u0A02\u0A12"+
		"\u0A19\u0A22\u0A28\u0A2C\u0A2F\u0A33\u0A37\u0A3C\u0A43\u0A49\u0A4D\u0A56"+
		"\u0A8F\u0A98";
	public static readonly _serializedATN: string = Utils.join(
		[
			CPP14Parser._serializedATNSegment0,
			CPP14Parser._serializedATNSegment1,
			CPP14Parser._serializedATNSegment2,
			CPP14Parser._serializedATNSegment3,
			CPP14Parser._serializedATNSegment4
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CPP14Parser.__ATN) {
			CPP14Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CPP14Parser._serializedATN));
		}

		return CPP14Parser.__ATN;
	}

}

export class TranslationunitContext extends ParserRuleContext {
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_translationunit; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTranslationunit) return visitor.visitTranslationunit(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryexpressionContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public This(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.This, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public identexpression(): IdentexpressionContext | undefined {
		return this.tryGetRuleContext(0, IdentexpressionContext);
	}
	public lambdaexpression(): LambdaexpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_primaryexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitPrimaryexpression) return visitor.visitPrimaryexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class IdexpressionContext extends ParserRuleContext {
	public unqualifiedid(): UnqualifiedidContext | undefined {
		return this.tryGetRuleContext(0, UnqualifiedidContext);
	}
	public qualifiedid(): QualifiedidContext | undefined {
		return this.tryGetRuleContext(0, QualifiedidContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_idexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitIdexpression) return visitor.visitIdexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class IdentexpressionContext extends ParserRuleContext {
	public unqualifiedid(): UnqualifiedidContext | undefined {
		return this.tryGetRuleContext(0, UnqualifiedidContext);
	}
	public qualifiedid(): QualifiedidContext | undefined {
		return this.tryGetRuleContext(0, QualifiedidContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_identexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitIdentexpression) return visitor.visitIdentexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class UnqualifiedidContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public operatorfunctionid(): OperatorfunctionidContext | undefined {
		return this.tryGetRuleContext(0, OperatorfunctionidContext);
	}
	public conversionfunctionid(): ConversionfunctionidContext | undefined {
		return this.tryGetRuleContext(0, ConversionfunctionidContext);
	}
	public literaloperatorid(): LiteraloperatoridContext | undefined {
		return this.tryGetRuleContext(0, LiteraloperatoridContext);
	}
	public myclassname(): MyclassnameContext | undefined {
		return this.tryGetRuleContext(0, MyclassnameContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	public templateid(): TemplateidContext | undefined {
		return this.tryGetRuleContext(0, TemplateidContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_unqualifiedid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitUnqualifiedid) return visitor.visitUnqualifiedid(this);
		else return visitor.visitChildren(this);
	}
}


export class QualifiedidContext extends ParserRuleContext {
	public nestednamespecifier(): NestednamespecifierContext {
		return this.getRuleContext(0, NestednamespecifierContext);
	}
	public unqualifiedid(): UnqualifiedidContext {
		return this.getRuleContext(0, UnqualifiedidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_qualifiedid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitQualifiedid) return visitor.visitQualifiedid(this);
		else return visitor.visitChildren(this);
	}
}


export class NestednamespecifierContext extends ParserRuleContext {
	public typename(): TypenameContext | undefined {
		return this.tryGetRuleContext(0, TypenameContext);
	}
	public namespacename(): NamespacenameContext | undefined {
		return this.tryGetRuleContext(0, NamespacenameContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_nestednamespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNestednamespecifier) return visitor.visitNestednamespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdaexpressionContext extends ParserRuleContext {
	public lambdaintroducer(): LambdaintroducerContext {
		return this.getRuleContext(0, LambdaintroducerContext);
	}
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	public lambdadeclarator(): LambdadeclaratorContext | undefined {
		return this.tryGetRuleContext(0, LambdadeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_lambdaexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitLambdaexpression) return visitor.visitLambdaexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdaintroducerContext extends ParserRuleContext {
	public lambdacapture(): LambdacaptureContext | undefined {
		return this.tryGetRuleContext(0, LambdacaptureContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_lambdaintroducer; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitLambdaintroducer) return visitor.visitLambdaintroducer(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdacaptureContext extends ParserRuleContext {
	public capturedefault(): CapturedefaultContext | undefined {
		return this.tryGetRuleContext(0, CapturedefaultContext);
	}
	public capturelist(): CapturelistContext | undefined {
		return this.tryGetRuleContext(0, CapturelistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_lambdacapture; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitLambdacapture) return visitor.visitLambdacapture(this);
		else return visitor.visitChildren(this);
	}
}


export class CapturedefaultContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_capturedefault; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitCapturedefault) return visitor.visitCapturedefault(this);
		else return visitor.visitChildren(this);
	}
}


export class CapturelistContext extends ParserRuleContext {
	public capture(): CaptureContext {
		return this.getRuleContext(0, CaptureContext);
	}
	public capturelist(): CapturelistContext | undefined {
		return this.tryGetRuleContext(0, CapturelistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_capturelist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitCapturelist) return visitor.visitCapturelist(this);
		else return visitor.visitChildren(this);
	}
}


export class CaptureContext extends ParserRuleContext {
	public simplecapture(): SimplecaptureContext | undefined {
		return this.tryGetRuleContext(0, SimplecaptureContext);
	}
	public initcapture(): InitcaptureContext | undefined {
		return this.tryGetRuleContext(0, InitcaptureContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_capture; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitCapture) return visitor.visitCapture(this);
		else return visitor.visitChildren(this);
	}
}


export class SimplecaptureContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.This, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_simplecapture; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitSimplecapture) return visitor.visitSimplecapture(this);
		else return visitor.visitChildren(this);
	}
}


export class InitcaptureContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_initcapture; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitInitcapture) return visitor.visitInitcapture(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdadeclaratorContext extends ParserRuleContext {
	public parameterdeclarationclause(): ParameterdeclarationclauseContext {
		return this.getRuleContext(0, ParameterdeclarationclauseContext);
	}
	public Mutable(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mutable, 0); }
	public exceptionspecification(): ExceptionspecificationContext | undefined {
		return this.tryGetRuleContext(0, ExceptionspecificationContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public trailingreturntype(): TrailingreturntypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingreturntypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_lambdadeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitLambdadeclarator) return visitor.visitLambdadeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class IdexpressionlapperContext extends ParserRuleContext {
	public idexpression(): IdexpressionContext {
		return this.getRuleContext(0, IdexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_idexpressionlapper; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitIdexpressionlapper) return visitor.visitIdexpressionlapper(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctioncallexpressionContext extends ParserRuleContext {
	public primaryexpression(): PrimaryexpressionContext {
		return this.getRuleContext(0, PrimaryexpressionContext);
	}
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public initializerlist(): InitializerlistContext | undefined {
		return this.tryGetRuleContext(0, InitializerlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_functioncallexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitFunctioncallexpression) return visitor.visitFunctioncallexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class PostfixexpressionContext extends ParserRuleContext {
	public primaryexpression(): PrimaryexpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryexpressionContext);
	}
	public functioncallexpression(): FunctioncallexpressionContext | undefined {
		return this.tryGetRuleContext(0, FunctioncallexpressionContext);
	}
	public postfixexpression(): PostfixexpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixexpressionContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public assignmentexpression(): AssignmentexpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentexpressionContext);
	}
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	public simpletypespecifier(): SimpletypespecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpletypespecifierContext);
	}
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	public typenamespecifier(): TypenamespecifierContext | undefined {
		return this.tryGetRuleContext(0, TypenamespecifierContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Dot, 0); }
	public idexpressionlapper(): IdexpressionlapperContext | undefined {
		return this.tryGetRuleContext(0, IdexpressionlapperContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Arrow, 0); }
	public pseudodestructorname(): PseudodestructornameContext | undefined {
		return this.tryGetRuleContext(0, PseudodestructornameContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusMinus, 0); }
	public Dynamic_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Dynamic_cast, 0); }
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Static_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Static_cast, 0); }
	public Reinterpret_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Reinterpret_cast, 0); }
	public Const_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Const_cast, 0); }
	public Typeid(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typeid, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_postfixexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitPostfixexpression) return visitor.visitPostfixexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionlistContext extends ParserRuleContext {
	public initializerlist(): InitializerlistContext {
		return this.getRuleContext(0, InitializerlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_expressionlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitExpressionlist) return visitor.visitExpressionlist(this);
		else return visitor.visitChildren(this);
	}
}


export class PseudodestructornameContext extends ParserRuleContext {
	public typename(): TypenameContext[];
	public typename(i: number): TypenameContext;
	public typename(i?: number): TypenameContext | TypenameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypenameContext);
		} else {
			return this.getRuleContext(i, TypenameContext);
		}
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_pseudodestructorname; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitPseudodestructorname) return visitor.visitPseudodestructorname(this);
		else return visitor.visitChildren(this);
	}
}


export class BinaryexpressionContext extends ParserRuleContext {
	public postfixexpression(): PostfixexpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixexpressionContext);
	}
	public unaryexpression(): UnaryexpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryexpressionContext);
	}
	public newexpression(): NewexpressionContext | undefined {
		return this.tryGetRuleContext(0, NewexpressionContext);
	}
	public deleteexpression(): DeleteexpressionContext | undefined {
		return this.tryGetRuleContext(0, DeleteexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_binaryexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBinaryexpression) return visitor.visitBinaryexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class UnaryexpressionContext extends ParserRuleContext {
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusPlus, 0); }
	public castexpression(): CastexpressionContext | undefined {
		return this.tryGetRuleContext(0, CastexpressionContext);
	}
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusMinus, 0); }
	public unaryoperator(): UnaryoperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryoperatorContext);
	}
	public Sizeof(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Sizeof, 0); }
	public binaryexpression(): BinaryexpressionContext | undefined {
		return this.tryGetRuleContext(0, BinaryexpressionContext);
	}
	public typeidlapper(): TypeidlapperContext | undefined {
		return this.tryGetRuleContext(0, TypeidlapperContext);
	}
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Alignof(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Alignof, 0); }
	public noexceptexpression(): NoexceptexpressionContext | undefined {
		return this.tryGetRuleContext(0, NoexceptexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_unaryexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitUnaryexpression) return visitor.visitUnaryexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeidlapperContext extends ParserRuleContext {
	public typeid(): TypeidContext {
		return this.getRuleContext(0, TypeidContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_typeidlapper; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTypeidlapper) return visitor.visitTypeidlapper(this);
		else return visitor.visitChildren(this);
	}
}


export class UnaryoperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_unaryoperator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitUnaryoperator) return visitor.visitUnaryoperator(this);
		else return visitor.visitChildren(this);
	}
}


export class NewexpressionContext extends ParserRuleContext {
	public New(): TerminalNode { return this.getToken(CPP14Parser.New, 0); }
	public newtypeid(): NewtypeidContext | undefined {
		return this.tryGetRuleContext(0, NewtypeidContext);
	}
	public newplacement(): NewplacementContext | undefined {
		return this.tryGetRuleContext(0, NewplacementContext);
	}
	public newinitializer(): NewinitializerContext | undefined {
		return this.tryGetRuleContext(0, NewinitializerContext);
	}
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_newexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNewexpression) return visitor.visitNewexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class NewplacementContext extends ParserRuleContext {
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_newplacement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNewplacement) return visitor.visitNewplacement(this);
		else return visitor.visitChildren(this);
	}
}


export class NewtypeidContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	public newdeclarator(): NewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NewdeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_newtypeid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNewtypeid) return visitor.visitNewtypeid(this);
		else return visitor.visitChildren(this);
	}
}


export class NewdeclaratorContext extends ParserRuleContext {
	public ptroperator(): PtroperatorContext | undefined {
		return this.tryGetRuleContext(0, PtroperatorContext);
	}
	public newdeclarator(): NewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NewdeclaratorContext);
	}
	public noptrnewdeclarator(): NoptrnewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrnewdeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_newdeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNewdeclarator) return visitor.visitNewdeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class NoptrnewdeclaratorContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public noptrnewdeclarator(): NoptrnewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrnewdeclaratorContext);
	}
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_noptrnewdeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNoptrnewdeclarator) return visitor.visitNoptrnewdeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class NewinitializerContext extends ParserRuleContext {
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_newinitializer; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNewinitializer) return visitor.visitNewinitializer(this);
		else return visitor.visitChildren(this);
	}
}


export class DeleteexpressionContext extends ParserRuleContext {
	public Delete(): TerminalNode { return this.getToken(CPP14Parser.Delete, 0); }
	public castexpression(): CastexpressionContext {
		return this.getRuleContext(0, CastexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_deleteexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDeleteexpression) return visitor.visitDeleteexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class NoexceptexpressionContext extends ParserRuleContext {
	public Noexcept(): TerminalNode { return this.getToken(CPP14Parser.Noexcept, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_noexceptexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNoexceptexpression) return visitor.visitNoexceptexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class CastexpressionContext extends ParserRuleContext {
	public binaryexpression(): BinaryexpressionContext | undefined {
		return this.tryGetRuleContext(0, BinaryexpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public castexpression(): CastexpressionContext | undefined {
		return this.tryGetRuleContext(0, CastexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_castexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitCastexpression) return visitor.visitCastexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class PmexpressionContext extends ParserRuleContext {
	public castexpression(): CastexpressionContext {
		return this.getRuleContext(0, CastexpressionContext);
	}
	public pmexpression(): PmexpressionContext | undefined {
		return this.tryGetRuleContext(0, PmexpressionContext);
	}
	public DotStar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.DotStar, 0); }
	public ArrowStar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ArrowStar, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_pmexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitPmexpression) return visitor.visitPmexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class MultiplicativeexpressionContext extends ParserRuleContext {
	public pmexpression(): PmexpressionContext {
		return this.getRuleContext(0, PmexpressionContext);
	}
	public multiplicativeexpression(): MultiplicativeexpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeexpressionContext);
	}
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mod, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_multiplicativeexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMultiplicativeexpression) return visitor.visitMultiplicativeexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class AdditiveexpressionContext extends ParserRuleContext {
	public multiplicativeexpression(): MultiplicativeexpressionContext {
		return this.getRuleContext(0, MultiplicativeexpressionContext);
	}
	public additiveexpression(): AdditiveexpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveexpressionContext);
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Minus, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_additiveexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAdditiveexpression) return visitor.visitAdditiveexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ShiftexpressionContext extends ParserRuleContext {
	public additiveexpression(): AdditiveexpressionContext {
		return this.getRuleContext(0, AdditiveexpressionContext);
	}
	public shiftexpression(): ShiftexpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftexpressionContext);
	}
	public LeftShift(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftShift, 0); }
	public rightShift(): RightShiftContext | undefined {
		return this.tryGetRuleContext(0, RightShiftContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_shiftexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitShiftexpression) return visitor.visitShiftexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class RelationalexpressionContext extends ParserRuleContext {
	public shiftexpression(): ShiftexpressionContext {
		return this.getRuleContext(0, ShiftexpressionContext);
	}
	public relationalexpression(): RelationalexpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalexpressionContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public LessEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LessEqual, 0); }
	public GreaterEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.GreaterEqual, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_relationalexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitRelationalexpression) return visitor.visitRelationalexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class EqualityexpressionContext extends ParserRuleContext {
	public relationalexpression(): RelationalexpressionContext {
		return this.getRuleContext(0, RelationalexpressionContext);
	}
	public equalityexpression(): EqualityexpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityexpressionContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.NotEqual, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_equalityexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitEqualityexpression) return visitor.visitEqualityexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class AndexpressionContext extends ParserRuleContext {
	public equalityexpression(): EqualityexpressionContext {
		return this.getRuleContext(0, EqualityexpressionContext);
	}
	public andexpression(): AndexpressionContext | undefined {
		return this.tryGetRuleContext(0, AndexpressionContext);
	}
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_andexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAndexpression) return visitor.visitAndexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ExclusiveorexpressionContext extends ParserRuleContext {
	public andexpression(): AndexpressionContext {
		return this.getRuleContext(0, AndexpressionContext);
	}
	public exclusiveorexpression(): ExclusiveorexpressionContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveorexpressionContext);
	}
	public Caret(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Caret, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_exclusiveorexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitExclusiveorexpression) return visitor.visitExclusiveorexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class InclusiveorexpressionContext extends ParserRuleContext {
	public exclusiveorexpression(): ExclusiveorexpressionContext {
		return this.getRuleContext(0, ExclusiveorexpressionContext);
	}
	public inclusiveorexpression(): InclusiveorexpressionContext | undefined {
		return this.tryGetRuleContext(0, InclusiveorexpressionContext);
	}
	public Or(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Or, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_inclusiveorexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitInclusiveorexpression) return visitor.visitInclusiveorexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class LogicalandexpressionContext extends ParserRuleContext {
	public inclusiveorexpression(): InclusiveorexpressionContext {
		return this.getRuleContext(0, InclusiveorexpressionContext);
	}
	public logicalandexpression(): LogicalandexpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalandexpressionContext);
	}
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAnd, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_logicalandexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitLogicalandexpression) return visitor.visitLogicalandexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class LogicalorexpressionContext extends ParserRuleContext {
	public logicalandexpression(): LogicalandexpressionContext {
		return this.getRuleContext(0, LogicalandexpressionContext);
	}
	public logicalorexpression(): LogicalorexpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalorexpressionContext);
	}
	public OrOr(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.OrOr, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_logicalorexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitLogicalorexpression) return visitor.visitLogicalorexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ConditionalexpressionContext extends ParserRuleContext {
	public logicalorexpression(): LogicalorexpressionContext {
		return this.getRuleContext(0, LogicalorexpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public assignmentexpression(): AssignmentexpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_conditionalexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitConditionalexpression) return visitor.visitConditionalexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentexpressionContext extends ParserRuleContext {
	public conditionalexpression(): ConditionalexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalexpressionContext);
	}
	public logicalorexpression(): LogicalorexpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalorexpressionContext);
	}
	public assignmentoperator(): AssignmentoperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentoperatorContext);
	}
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public throwexpression(): ThrowexpressionContext | undefined {
		return this.tryGetRuleContext(0, ThrowexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_assignmentexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAssignmentexpression) return visitor.visitAssignmentexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentoperatorContext extends ParserRuleContext {
	public rightShiftAssign(): RightShiftAssignContext | undefined {
		return this.tryGetRuleContext(0, RightShiftAssignContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_assignmentoperator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAssignmentoperator) return visitor.visitAssignmentoperator(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignmentexpression(): AssignmentexpressionContext {
		return this.getRuleContext(0, AssignmentexpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_expression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantexpressionContext extends ParserRuleContext {
	public conditionalexpression(): ConditionalexpressionContext {
		return this.getRuleContext(0, ConditionalexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_constantexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitConstantexpression) return visitor.visitConstantexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementContext extends ParserRuleContext {
	public labeledstatement(): LabeledstatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledstatementContext);
	}
	public statementWithoutLabeldstatement(): StatementWithoutLabeldstatementContext | undefined {
		return this.tryGetRuleContext(0, StatementWithoutLabeldstatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_statement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitStatement) return visitor.visitStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementWithoutLabeldstatementContext extends ParserRuleContext {
	public emptydeclaration(): EmptydeclarationContext | undefined {
		return this.tryGetRuleContext(0, EmptydeclarationContext);
	}
	public expressionstatement(): ExpressionstatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionstatementContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public compoundstatement(): CompoundstatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundstatementContext);
	}
	public selectionstatement(): SelectionstatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionstatementContext);
	}
	public switchstatement(): SwitchstatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchstatementContext);
	}
	public iterationstatement(): IterationstatementContext | undefined {
		return this.tryGetRuleContext(0, IterationstatementContext);
	}
	public whilestatement(): WhilestatementContext | undefined {
		return this.tryGetRuleContext(0, WhilestatementContext);
	}
	public dowhilestatement(): DowhilestatementContext | undefined {
		return this.tryGetRuleContext(0, DowhilestatementContext);
	}
	public jumpstatement(): JumpstatementContext | undefined {
		return this.tryGetRuleContext(0, JumpstatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public variabledeclarationstatement(): VariabledeclarationstatementContext | undefined {
		return this.tryGetRuleContext(0, VariabledeclarationstatementContext);
	}
	public declarationstatement(): DeclarationstatementContext | undefined {
		return this.tryGetRuleContext(0, DeclarationstatementContext);
	}
	public tryblock(): TryblockContext | undefined {
		return this.tryGetRuleContext(0, TryblockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_statementWithoutLabeldstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitStatementWithoutLabeldstatement) return visitor.visitStatementWithoutLabeldstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class LabeledstatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public switchunitstatement(): SwitchunitstatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchunitstatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_labeledstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitLabeledstatement) return visitor.visitLabeledstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class SwitchunitstatementContext extends ParserRuleContext {
	public statementWithoutLabeldstatementseq(): StatementWithoutLabeldstatementseqContext {
		return this.getRuleContext(0, StatementWithoutLabeldstatementseqContext);
	}
	public Case(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Case, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Default, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_switchunitstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitSwitchunitstatement) return visitor.visitSwitchunitstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementWithoutLabeldstatementseqContext extends ParserRuleContext {
	public statementWithoutLabeldstatement(): StatementWithoutLabeldstatementContext[];
	public statementWithoutLabeldstatement(i: number): StatementWithoutLabeldstatementContext;
	public statementWithoutLabeldstatement(i?: number): StatementWithoutLabeldstatementContext | StatementWithoutLabeldstatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementWithoutLabeldstatementContext);
		} else {
			return this.getRuleContext(i, StatementWithoutLabeldstatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_statementWithoutLabeldstatementseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitStatementWithoutLabeldstatementseq) return visitor.visitStatementWithoutLabeldstatementseq(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionstatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_expressionstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitExpressionstatement) return visitor.visitExpressionstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class CompoundstatementContext extends ParserRuleContext {
	public statementseq(): StatementseqContext | undefined {
		return this.tryGetRuleContext(0, StatementseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_compoundstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitCompoundstatement) return visitor.visitCompoundstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementseqContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_statementseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitStatementseq) return visitor.visitStatementseq(this);
		else return visitor.visitChildren(this);
	}
}


export class SelectionstatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(CPP14Parser.If, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Else, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_selectionstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitSelectionstatement) return visitor.visitSelectionstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class SwitchstatementContext extends ParserRuleContext {
	public Switch(): TerminalNode { return this.getToken(CPP14Parser.Switch, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public switchunitseq(): SwitchunitseqContext | undefined {
		return this.tryGetRuleContext(0, SwitchunitseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_switchstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitSwitchstatement) return visitor.visitSwitchstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class SwitchunitseqContext extends ParserRuleContext {
	public switchunitstatement(): SwitchunitstatementContext[];
	public switchunitstatement(i: number): SwitchunitstatementContext;
	public switchunitstatement(i?: number): SwitchunitstatementContext | SwitchunitstatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchunitstatementContext);
		} else {
			return this.getRuleContext(i, SwitchunitstatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_switchunitseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitSwitchunitseq) return visitor.visitSwitchunitseq(this);
		else return visitor.visitChildren(this);
	}
}


export class ConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_condition; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitCondition) return visitor.visitCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class WhilestatementContext extends ParserRuleContext {
	public While(): TerminalNode { return this.getToken(CPP14Parser.While, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_whilestatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitWhilestatement) return visitor.visitWhilestatement(this);
		else return visitor.visitChildren(this);
	}
}


export class DowhilestatementContext extends ParserRuleContext {
	public Do(): TerminalNode { return this.getToken(CPP14Parser.Do, 0); }
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	public While(): TerminalNode { return this.getToken(CPP14Parser.While, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_dowhilestatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDowhilestatement) return visitor.visitDowhilestatement(this);
		else return visitor.visitChildren(this);
	}
}


export class IterationstatementContext extends ParserRuleContext {
	public For(): TerminalNode { return this.getToken(CPP14Parser.For, 0); }
	public forinitstatement(): ForinitstatementContext {
		return this.getRuleContext(0, ForinitstatementContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_iterationstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitIterationstatement) return visitor.visitIterationstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class EnhancedForStatementContext extends ParserRuleContext {
	public For(): TerminalNode { return this.getToken(CPP14Parser.For, 0); }
	public forrangedeclaration(): ForrangedeclarationContext {
		return this.getRuleContext(0, ForrangedeclarationContext);
	}
	public forrangeinitializer(): ForrangeinitializerContext {
		return this.getRuleContext(0, ForrangeinitializerContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_enhancedForStatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitEnhancedForStatement) return visitor.visitEnhancedForStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ForinitstatementContext extends ParserRuleContext {
	public expressionstatement(): ExpressionstatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionstatementContext);
	}
	public variabledeclarationstatement(): VariabledeclarationstatementContext | undefined {
		return this.tryGetRuleContext(0, VariabledeclarationstatementContext);
	}
	public simpledeclaration(): SimpledeclarationContext | undefined {
		return this.tryGetRuleContext(0, SimpledeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_forinitstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitForinitstatement) return visitor.visitForinitstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ForrangedeclarationContext extends ParserRuleContext {
	public declspecifierseq(): DeclspecifierseqContext {
		return this.getRuleContext(0, DeclspecifierseqContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_forrangedeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitForrangedeclaration) return visitor.visitForrangedeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ForrangeinitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_forrangeinitializer; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitForrangeinitializer) return visitor.visitForrangeinitializer(this);
		else return visitor.visitChildren(this);
	}
}


export class JumpstatementContext extends ParserRuleContext {
	public Goto(): TerminalNode { return this.getToken(CPP14Parser.Goto, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_jumpstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitJumpstatement) return visitor.visitJumpstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(CPP14Parser.Break, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_breakStatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBreakStatement) return visitor.visitBreakStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(CPP14Parser.Continue, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_continueStatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitContinueStatement) return visitor.visitContinueStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Return(): TerminalNode { return this.getToken(CPP14Parser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_returnStatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitReturnStatement) return visitor.visitReturnStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclarationstatementContext extends ParserRuleContext {
	public simpledeclaration(): SimpledeclarationContext | undefined {
		return this.tryGetRuleContext(0, SimpledeclarationContext);
	}
	public blockdeclarationwithoutsimpledeclaration(): BlockdeclarationwithoutsimpledeclarationContext | undefined {
		return this.tryGetRuleContext(0, BlockdeclarationwithoutsimpledeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_declarationstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDeclarationstatement) return visitor.visitDeclarationstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclarationseqContext extends ParserRuleContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_declarationseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDeclarationseq) return visitor.visitDeclarationseq(this);
		else return visitor.visitChildren(this);
	}
}


export class MyclassbodyContext extends ParserRuleContext {
	public memberspecification(): MemberspecificationContext | undefined {
		return this.tryGetRuleContext(0, MemberspecificationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_myclassbody; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMyclassbody) return visitor.visitMyclassbody(this);
		else return visitor.visitChildren(this);
	}
}


export class MyclassspecifierContext extends ParserRuleContext {
	public myclasshead(): MyclassheadContext {
		return this.getRuleContext(0, MyclassheadContext);
	}
	public myclassbody(): MyclassbodyContext {
		return this.getRuleContext(0, MyclassbodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_myclassspecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMyclassspecifier) return visitor.visitMyclassspecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class MyclassheadContext extends ParserRuleContext {
	public classkey(): ClasskeyContext {
		return this.getRuleContext(0, ClasskeyContext);
	}
	public classheadname(): ClassheadnameContext | undefined {
		return this.tryGetRuleContext(0, ClassheadnameContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public classvirtspecifier(): ClassvirtspecifierContext | undefined {
		return this.tryGetRuleContext(0, ClassvirtspecifierContext);
	}
	public baseclause(): BaseclauseContext | undefined {
		return this.tryGetRuleContext(0, BaseclauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_myclasshead; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMyclasshead) return visitor.visitMyclasshead(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclarationContext extends ParserRuleContext {
	public variabledeclarationstatement(): VariabledeclarationstatementContext | undefined {
		return this.tryGetRuleContext(0, VariabledeclarationstatementContext);
	}
	public functiondeclarationstatement(): FunctiondeclarationstatementContext | undefined {
		return this.tryGetRuleContext(0, FunctiondeclarationstatementContext);
	}
	public blockdeclaration(): BlockdeclarationContext | undefined {
		return this.tryGetRuleContext(0, BlockdeclarationContext);
	}
	public myclassspecifier(): MyclassspecifierContext | undefined {
		return this.tryGetRuleContext(0, MyclassspecifierContext);
	}
	public functiondefinition(): FunctiondefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctiondefinitionContext);
	}
	public templatedeclaration(): TemplatedeclarationContext | undefined {
		return this.tryGetRuleContext(0, TemplatedeclarationContext);
	}
	public explicitinstantiation(): ExplicitinstantiationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitinstantiationContext);
	}
	public explicitspecialization(): ExplicitspecializationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitspecializationContext);
	}
	public linkagespecification(): LinkagespecificationContext | undefined {
		return this.tryGetRuleContext(0, LinkagespecificationContext);
	}
	public namespacedefinition(): NamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamespacedefinitionContext);
	}
	public emptydeclaration(): EmptydeclarationContext | undefined {
		return this.tryGetRuleContext(0, EmptydeclarationContext);
	}
	public attributedeclaration(): AttributedeclarationContext | undefined {
		return this.tryGetRuleContext(0, AttributedeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_declaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDeclaration) return visitor.visitDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class BlockdeclarationwithoutsimpledeclarationContext extends ParserRuleContext {
	public asmdefinition(): AsmdefinitionContext | undefined {
		return this.tryGetRuleContext(0, AsmdefinitionContext);
	}
	public namespacealiasdefinition(): NamespacealiasdefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamespacealiasdefinitionContext);
	}
	public usingdeclaration(): UsingdeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingdeclarationContext);
	}
	public usingdirective(): UsingdirectiveContext | undefined {
		return this.tryGetRuleContext(0, UsingdirectiveContext);
	}
	public static_assertdeclaration(): Static_assertdeclarationContext | undefined {
		return this.tryGetRuleContext(0, Static_assertdeclarationContext);
	}
	public aliasdeclaration(): AliasdeclarationContext | undefined {
		return this.tryGetRuleContext(0, AliasdeclarationContext);
	}
	public opaqueenumdeclaration(): OpaqueenumdeclarationContext | undefined {
		return this.tryGetRuleContext(0, OpaqueenumdeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_blockdeclarationwithoutsimpledeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBlockdeclarationwithoutsimpledeclaration) return visitor.visitBlockdeclarationwithoutsimpledeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class BlockdeclarationContext extends ParserRuleContext {
	public simpledeclaration(): SimpledeclarationContext | undefined {
		return this.tryGetRuleContext(0, SimpledeclarationContext);
	}
	public blockdeclarationwithoutsimpledeclaration(): BlockdeclarationwithoutsimpledeclarationContext | undefined {
		return this.tryGetRuleContext(0, BlockdeclarationwithoutsimpledeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_blockdeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBlockdeclaration) return visitor.visitBlockdeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class AliasdeclarationContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public typeid(): TypeidContext {
		return this.getRuleContext(0, TypeidContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_aliasdeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAliasdeclaration) return visitor.visitAliasdeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class VariabledeclarationstatementContext extends ParserRuleContext {
	public variabledeclaration(): VariabledeclarationContext {
		return this.getRuleContext(0, VariabledeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_variabledeclarationstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitVariabledeclarationstatement) return visitor.visitVariabledeclarationstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class VariabledeclarationContext extends ParserRuleContext {
	public typespecifier(): TypespecifierContext {
		return this.getRuleContext(0, TypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseqwithouttype(): DeclspecifierseqwithouttypeContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqwithouttypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_variabledeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitVariabledeclaration) return visitor.visitVariabledeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableDeclaratorListContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_variableDeclaratorList; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitVariableDeclaratorList) return visitor.visitVariableDeclaratorList(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public declaratorid(): DeclaratoridContext {
		return this.getRuleContext(0, DeclaratoridContext);
	}
	public ptroperator(): PtroperatorContext[];
	public ptroperator(i: number): PtroperatorContext;
	public ptroperator(i?: number): PtroperatorContext | PtroperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PtroperatorContext);
		} else {
			return this.getRuleContext(i, PtroperatorContext);
		}
	}
	public LeftBracket(): TerminalNode[];
	public LeftBracket(i: number): TerminalNode;
	public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.LeftBracket);
		} else {
			return this.getToken(CPP14Parser.LeftBracket, i);
		}
	}
	public RightBracket(): TerminalNode[];
	public RightBracket(i: number): TerminalNode;
	public RightBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.RightBracket);
		} else {
			return this.getToken(CPP14Parser.RightBracket, i);
		}
	}
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public Integerliteral(): TerminalNode[];
	public Integerliteral(i: number): TerminalNode;
	public Integerliteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Integerliteral);
		} else {
			return this.getToken(CPP14Parser.Integerliteral, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_variableDeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitVariableDeclarator) return visitor.visitVariableDeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class DimsContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode { return this.getToken(CPP14Parser.RightBracket, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_dims; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDims) return visitor.visitDims(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctiondeclarationstatementContext extends ParserRuleContext {
	public functionheader(): FunctionheaderContext {
		return this.getRuleContext(0, FunctionheaderContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseqwithouttype(): DeclspecifierseqwithouttypeContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqwithouttypeContext);
	}
	public virtspecifierseq(): VirtspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, VirtspecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_functiondeclarationstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitFunctiondeclarationstatement) return visitor.visitFunctiondeclarationstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class SimpledeclarationContext extends ParserRuleContext {
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	public initdeclaratorlist(): InitdeclaratorlistContext | undefined {
		return this.tryGetRuleContext(0, InitdeclaratorlistContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_simpledeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitSimpledeclaration) return visitor.visitSimpledeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class Static_assertdeclarationContext extends ParserRuleContext {
	public Static_assert(): TerminalNode { return this.getToken(CPP14Parser.Static_assert, 0); }
	public constantexpression(): ConstantexpressionContext {
		return this.getRuleContext(0, ConstantexpressionContext);
	}
	public Stringliteral(): TerminalNode { return this.getToken(CPP14Parser.Stringliteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_static_assertdeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitStatic_assertdeclaration) return visitor.visitStatic_assertdeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class EmptydeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_emptydeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitEmptydeclaration) return visitor.visitEmptydeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributedeclarationContext extends ParserRuleContext {
	public attributespecifierseq(): AttributespecifierseqContext {
		return this.getRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_attributedeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAttributedeclaration) return visitor.visitAttributedeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclspecifierContext extends ParserRuleContext {
	public declspecifierwithouttype(): DeclspecifierwithouttypeContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierwithouttypeContext);
	}
	public typespecifier(): TypespecifierContext | undefined {
		return this.tryGetRuleContext(0, TypespecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_declspecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDeclspecifier) return visitor.visitDeclspecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclspecifierseqContext extends ParserRuleContext {
	public declspecifier(): DeclspecifierContext {
		return this.getRuleContext(0, DeclspecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_declspecifierseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDeclspecifierseq) return visitor.visitDeclspecifierseq(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclspecifierwithouttypeContext extends ParserRuleContext {
	public storageclassspecifier(): StorageclassspecifierContext | undefined {
		return this.tryGetRuleContext(0, StorageclassspecifierContext);
	}
	public functionspecifier(): FunctionspecifierContext | undefined {
		return this.tryGetRuleContext(0, FunctionspecifierContext);
	}
	public Friend(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Friend, 0); }
	public Typedef(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typedef, 0); }
	public Constexpr(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Constexpr, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_declspecifierwithouttype; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDeclspecifierwithouttype) return visitor.visitDeclspecifierwithouttype(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclspecifierseqwithouttypeContext extends ParserRuleContext {
	public declspecifierwithouttype(): DeclspecifierwithouttypeContext {
		return this.getRuleContext(0, DeclspecifierwithouttypeContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_declspecifierseqwithouttype; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDeclspecifierseqwithouttype) return visitor.visitDeclspecifierseqwithouttype(this);
		else return visitor.visitChildren(this);
	}
}


export class StorageclassspecifierContext extends ParserRuleContext {
	public Register(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Register, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Static, 0); }
	public Thread_local(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Thread_local, 0); }
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Extern, 0); }
	public Mutable(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mutable, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_storageclassspecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitStorageclassspecifier) return visitor.visitStorageclassspecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionspecifierContext extends ParserRuleContext {
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	public Virtual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Virtual, 0); }
	public Explicit(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Explicit, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_functionspecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitFunctionspecifier) return visitor.visitFunctionspecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class TypedefnameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_typedefname; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTypedefname) return visitor.visitTypedefname(this);
		else return visitor.visitChildren(this);
	}
}


export class TypespecifierContext extends ParserRuleContext {
	public trailingtypespecifier(): TrailingtypespecifierContext | undefined {
		return this.tryGetRuleContext(0, TrailingtypespecifierContext);
	}
	public myclassspecifier(): MyclassspecifierContext | undefined {
		return this.tryGetRuleContext(0, MyclassspecifierContext);
	}
	public enumspecifier(): EnumspecifierContext | undefined {
		return this.tryGetRuleContext(0, EnumspecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_typespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTypespecifier) return visitor.visitTypespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class TrailingtypespecifierContext extends ParserRuleContext {
	public simpletypespecifier(): SimpletypespecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpletypespecifierContext);
	}
	public elaboratedtypespecifier(): ElaboratedtypespecifierContext | undefined {
		return this.tryGetRuleContext(0, ElaboratedtypespecifierContext);
	}
	public typenamespecifier(): TypenamespecifierContext | undefined {
		return this.tryGetRuleContext(0, TypenamespecifierContext);
	}
	public cvqualifier(): CvqualifierContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_trailingtypespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTrailingtypespecifier) return visitor.visitTrailingtypespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class TypespecifierseqContext extends ParserRuleContext {
	public typespecifier(): TypespecifierContext {
		return this.getRuleContext(0, TypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public typespecifierseq(): TypespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, TypespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_typespecifierseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTypespecifierseq) return visitor.visitTypespecifierseq(this);
		else return visitor.visitChildren(this);
	}
}


export class TrailingtypespecifierseqContext extends ParserRuleContext {
	public trailingtypespecifier(): TrailingtypespecifierContext {
		return this.getRuleContext(0, TrailingtypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public trailingtypespecifierseq(): TrailingtypespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, TrailingtypespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_trailingtypespecifierseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTrailingtypespecifierseq) return visitor.visitTrailingtypespecifierseq(this);
		else return visitor.visitChildren(this);
	}
}


export class SimpletypespecifierContext extends ParserRuleContext {
	public typename(): TypenameContext | undefined {
		return this.tryGetRuleContext(0, TypenameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Char(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char, 0); }
	public Char16(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char16, 0); }
	public Char32(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char32, 0); }
	public Wchar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Wchar, 0); }
	public Bool(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Bool, 0); }
	public Short(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Short, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Int, 0); }
	public Long(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Long, 0); }
	public Signed(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Signed, 0); }
	public Unsigned(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Unsigned, 0); }
	public simpletypespecifier(): SimpletypespecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpletypespecifierContext);
	}
	public Float(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Float, 0); }
	public Double(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Double, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Void, 0); }
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Auto, 0); }
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	public File(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.File, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_simpletypespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitSimpletypespecifier) return visitor.visitSimpletypespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class TypenameContext extends ParserRuleContext {
	public myclassname(): MyclassnameContext | undefined {
		return this.tryGetRuleContext(0, MyclassnameContext);
	}
	public enumname(): EnumnameContext | undefined {
		return this.tryGetRuleContext(0, EnumnameContext);
	}
	public typedefname(): TypedefnameContext | undefined {
		return this.tryGetRuleContext(0, TypedefnameContext);
	}
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_typename; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTypename) return visitor.visitTypename(this);
		else return visitor.visitChildren(this);
	}
}


export class DecltypespecifierContext extends ParserRuleContext {
	public Decltype(): TerminalNode { return this.getToken(CPP14Parser.Decltype, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Auto, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_decltypespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDecltypespecifier) return visitor.visitDecltypespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class ElaboratedtypespecifierContext extends ParserRuleContext {
	public classkey(): ClasskeyContext | undefined {
		return this.tryGetRuleContext(0, ClasskeyContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Enum, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_elaboratedtypespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitElaboratedtypespecifier) return visitor.visitElaboratedtypespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class EnumnameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_enumname; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitEnumname) return visitor.visitEnumname(this);
		else return visitor.visitChildren(this);
	}
}


export class EnumspecifierContext extends ParserRuleContext {
	public enumhead(): EnumheadContext {
		return this.getRuleContext(0, EnumheadContext);
	}
	public enumeratorlist(): EnumeratorlistContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_enumspecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitEnumspecifier) return visitor.visitEnumspecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class EnumheadContext extends ParserRuleContext {
	public enumkey(): EnumkeyContext {
		return this.getRuleContext(0, EnumkeyContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public enumbase(): EnumbaseContext | undefined {
		return this.tryGetRuleContext(0, EnumbaseContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_enumhead; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitEnumhead) return visitor.visitEnumhead(this);
		else return visitor.visitChildren(this);
	}
}


export class OpaqueenumdeclarationContext extends ParserRuleContext {
	public enumkey(): EnumkeyContext {
		return this.getRuleContext(0, EnumkeyContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public enumbase(): EnumbaseContext | undefined {
		return this.tryGetRuleContext(0, EnumbaseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_opaqueenumdeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitOpaqueenumdeclaration) return visitor.visitOpaqueenumdeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class EnumkeyContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(CPP14Parser.Enum, 0); }
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Struct, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_enumkey; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitEnumkey) return visitor.visitEnumkey(this);
		else return visitor.visitChildren(this);
	}
}


export class EnumbaseContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_enumbase; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitEnumbase) return visitor.visitEnumbase(this);
		else return visitor.visitChildren(this);
	}
}


export class EnumeratorlistContext extends ParserRuleContext {
	public enumeratordefinition(): EnumeratordefinitionContext {
		return this.getRuleContext(0, EnumeratordefinitionContext);
	}
	public enumeratorlist(): EnumeratorlistContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_enumeratorlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitEnumeratorlist) return visitor.visitEnumeratorlist(this);
		else return visitor.visitChildren(this);
	}
}


export class EnumeratordefinitionContext extends ParserRuleContext {
	public enumerator(): EnumeratorContext {
		return this.getRuleContext(0, EnumeratorContext);
	}
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_enumeratordefinition; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitEnumeratordefinition) return visitor.visitEnumeratordefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class EnumeratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_enumerator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitEnumerator) return visitor.visitEnumerator(this);
		else return visitor.visitChildren(this);
	}
}


export class NamespacenameContext extends ParserRuleContext {
	public originalnamespacename(): OriginalnamespacenameContext | undefined {
		return this.tryGetRuleContext(0, OriginalnamespacenameContext);
	}
	public namespacealias(): NamespacealiasContext | undefined {
		return this.tryGetRuleContext(0, NamespacealiasContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_namespacename; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNamespacename) return visitor.visitNamespacename(this);
		else return visitor.visitChildren(this);
	}
}


export class OriginalnamespacenameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_originalnamespacename; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitOriginalnamespacename) return visitor.visitOriginalnamespacename(this);
		else return visitor.visitChildren(this);
	}
}


export class NamespacedefinitionContext extends ParserRuleContext {
	public namednamespacedefinition(): NamednamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamednamespacedefinitionContext);
	}
	public unnamednamespacedefinition(): UnnamednamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, UnnamednamespacedefinitionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_namespacedefinition; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNamespacedefinition) return visitor.visitNamespacedefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class NamednamespacedefinitionContext extends ParserRuleContext {
	public originalnamespacedefinition(): OriginalnamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, OriginalnamespacedefinitionContext);
	}
	public extensionnamespacedefinition(): ExtensionnamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionnamespacedefinitionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_namednamespacedefinition; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNamednamespacedefinition) return visitor.visitNamednamespacedefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class OriginalnamespacedefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public namespacebody(): NamespacebodyContext {
		return this.getRuleContext(0, NamespacebodyContext);
	}
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_originalnamespacedefinition; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitOriginalnamespacedefinition) return visitor.visitOriginalnamespacedefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class ExtensionnamespacedefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public originalnamespacename(): OriginalnamespacenameContext {
		return this.getRuleContext(0, OriginalnamespacenameContext);
	}
	public namespacebody(): NamespacebodyContext {
		return this.getRuleContext(0, NamespacebodyContext);
	}
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_extensionnamespacedefinition; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitExtensionnamespacedefinition) return visitor.visitExtensionnamespacedefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class UnnamednamespacedefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public namespacebody(): NamespacebodyContext {
		return this.getRuleContext(0, NamespacebodyContext);
	}
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_unnamednamespacedefinition; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitUnnamednamespacedefinition) return visitor.visitUnnamednamespacedefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class NamespacebodyContext extends ParserRuleContext {
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_namespacebody; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNamespacebody) return visitor.visitNamespacebody(this);
		else return visitor.visitChildren(this);
	}
}


export class NamespacealiasContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_namespacealias; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNamespacealias) return visitor.visitNamespacealias(this);
		else return visitor.visitChildren(this);
	}
}


export class NamespacealiasdefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
		return this.getRuleContext(0, QualifiednamespacespecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_namespacealiasdefinition; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNamespacealiasdefinition) return visitor.visitNamespacealiasdefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class QualifiednamespacespecifierContext extends ParserRuleContext {
	public namespacename(): NamespacenameContext {
		return this.getRuleContext(0, NamespacenameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_qualifiednamespacespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitQualifiednamespacespecifier) return visitor.visitQualifiednamespacespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class UsingdeclarationContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public unqualifiedid(): UnqualifiedidContext {
		return this.getRuleContext(0, UnqualifiedidContext);
	}
	public Typename(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typename, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_usingdeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitUsingdeclaration) return visitor.visitUsingdeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class UsingdirectiveContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public namespacename(): NamespacenameContext {
		return this.getRuleContext(0, NamespacenameContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_usingdirective; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitUsingdirective) return visitor.visitUsingdirective(this);
		else return visitor.visitChildren(this);
	}
}


export class AsmdefinitionContext extends ParserRuleContext {
	public Asm(): TerminalNode { return this.getToken(CPP14Parser.Asm, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CPP14Parser.Stringliteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_asmdefinition; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAsmdefinition) return visitor.visitAsmdefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class LinkagespecificationContext extends ParserRuleContext {
	public Extern(): TerminalNode { return this.getToken(CPP14Parser.Extern, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CPP14Parser.Stringliteral, 0); }
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_linkagespecification; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitLinkagespecification) return visitor.visitLinkagespecification(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributespecifierseqContext extends ParserRuleContext {
	public attributespecifier(): AttributespecifierContext {
		return this.getRuleContext(0, AttributespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_attributespecifierseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAttributespecifierseq) return visitor.visitAttributespecifierseq(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributespecifierContext extends ParserRuleContext {
	public attributelist(): AttributelistContext | undefined {
		return this.tryGetRuleContext(0, AttributelistContext);
	}
	public alignmentspecifier(): AlignmentspecifierContext | undefined {
		return this.tryGetRuleContext(0, AlignmentspecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_attributespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAttributespecifier) return visitor.visitAttributespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class AlignmentspecifierContext extends ParserRuleContext {
	public Alignas(): TerminalNode { return this.getToken(CPP14Parser.Alignas, 0); }
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_alignmentspecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAlignmentspecifier) return visitor.visitAlignmentspecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributelistContext extends ParserRuleContext {
	public attribute(): AttributeContext | undefined {
		return this.tryGetRuleContext(0, AttributeContext);
	}
	public attributelist(): AttributelistContext | undefined {
		return this.tryGetRuleContext(0, AttributelistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_attributelist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAttributelist) return visitor.visitAttributelist(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributeContext extends ParserRuleContext {
	public attributetoken(): AttributetokenContext {
		return this.getRuleContext(0, AttributetokenContext);
	}
	public attributeargumentclause(): AttributeargumentclauseContext | undefined {
		return this.tryGetRuleContext(0, AttributeargumentclauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_attribute; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAttribute) return visitor.visitAttribute(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributetokenContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public attributescopedtoken(): AttributescopedtokenContext | undefined {
		return this.tryGetRuleContext(0, AttributescopedtokenContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_attributetoken; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAttributetoken) return visitor.visitAttributetoken(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributescopedtokenContext extends ParserRuleContext {
	public attributenamespace(): AttributenamespaceContext {
		return this.getRuleContext(0, AttributenamespaceContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_attributescopedtoken; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAttributescopedtoken) return visitor.visitAttributescopedtoken(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributenamespaceContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_attributenamespace; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAttributenamespace) return visitor.visitAttributenamespace(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributeargumentclauseContext extends ParserRuleContext {
	public balancedtokenseq(): BalancedtokenseqContext {
		return this.getRuleContext(0, BalancedtokenseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_attributeargumentclause; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAttributeargumentclause) return visitor.visitAttributeargumentclause(this);
		else return visitor.visitChildren(this);
	}
}


export class BalancedtokenseqContext extends ParserRuleContext {
	public balancedtoken(): BalancedtokenContext | undefined {
		return this.tryGetRuleContext(0, BalancedtokenContext);
	}
	public balancedtokenseq(): BalancedtokenseqContext | undefined {
		return this.tryGetRuleContext(0, BalancedtokenseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_balancedtokenseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBalancedtokenseq) return visitor.visitBalancedtokenseq(this);
		else return visitor.visitChildren(this);
	}
}


export class BalancedtokenContext extends ParserRuleContext {
	public balancedtokenseq(): BalancedtokenseqContext {
		return this.getRuleContext(0, BalancedtokenseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_balancedtoken; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBalancedtoken) return visitor.visitBalancedtoken(this);
		else return visitor.visitChildren(this);
	}
}


export class InitdeclaratorlistContext extends ParserRuleContext {
	public initdeclarator(): InitdeclaratorContext[];
	public initdeclarator(i: number): InitdeclaratorContext;
	public initdeclarator(i?: number): InitdeclaratorContext | InitdeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitdeclaratorContext);
		} else {
			return this.getRuleContext(i, InitdeclaratorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_initdeclaratorlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitInitdeclaratorlist) return visitor.visitInitdeclaratorlist(this);
		else return visitor.visitChildren(this);
	}
}


export class InitdeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_initdeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitInitdeclarator) return visitor.visitInitdeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public ptrdeclarator(): PtrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrdeclaratorContext);
	}
	public noptrdeclarator(): NoptrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public trailingreturntype(): TrailingreturntypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingreturntypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_declarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDeclarator) return visitor.visitDeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class PtrdeclaratorContext extends ParserRuleContext {
	public noptrdeclarator(): NoptrdeclaratorContext {
		return this.getRuleContext(0, NoptrdeclaratorContext);
	}
	public ptroperator(): PtroperatorContext[];
	public ptroperator(i: number): PtroperatorContext;
	public ptroperator(i?: number): PtroperatorContext | PtroperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PtroperatorContext);
		} else {
			return this.getRuleContext(i, PtroperatorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_ptrdeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitPtrdeclarator) return visitor.visitPtrdeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class NoptrdeclaratorContext extends ParserRuleContext {
	public declaratorid(): DeclaratoridContext | undefined {
		return this.tryGetRuleContext(0, DeclaratoridContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public noptrdeclarator(): NoptrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public ptrdeclarator(): PtrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrdeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_noptrdeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNoptrdeclarator) return visitor.visitNoptrdeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class ParametersandqualifiersContext extends ParserRuleContext {
	public parameterdeclarationclause(): ParameterdeclarationclauseContext {
		return this.getRuleContext(0, ParameterdeclarationclauseContext);
	}
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	public refqualifier(): RefqualifierContext | undefined {
		return this.tryGetRuleContext(0, RefqualifierContext);
	}
	public exceptionspecification(): ExceptionspecificationContext | undefined {
		return this.tryGetRuleContext(0, ExceptionspecificationContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_parametersandqualifiers; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitParametersandqualifiers) return visitor.visitParametersandqualifiers(this);
		else return visitor.visitChildren(this);
	}
}


export class TrailingreturntypeContext extends ParserRuleContext {
	public trailingtypespecifierseq(): TrailingtypespecifierseqContext {
		return this.getRuleContext(0, TrailingtypespecifierseqContext);
	}
	public abstractdeclarator(): AbstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_trailingreturntype; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTrailingreturntype) return visitor.visitTrailingreturntype(this);
		else return visitor.visitChildren(this);
	}
}


export class PtroperatorContext extends ParserRuleContext {
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_ptroperator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitPtroperator) return visitor.visitPtroperator(this);
		else return visitor.visitChildren(this);
	}
}


export class CvqualifierseqContext extends ParserRuleContext {
	public cvqualifier(): CvqualifierContext {
		return this.getRuleContext(0, CvqualifierContext);
	}
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_cvqualifierseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitCvqualifierseq) return visitor.visitCvqualifierseq(this);
		else return visitor.visitChildren(this);
	}
}


export class CvqualifierContext extends ParserRuleContext {
	public Const(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Const, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Volatile, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_cvqualifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitCvqualifier) return visitor.visitCvqualifier(this);
		else return visitor.visitChildren(this);
	}
}


export class RefqualifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_refqualifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitRefqualifier) return visitor.visitRefqualifier(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclaratoridContext extends ParserRuleContext {
	public idexpression(): IdexpressionContext {
		return this.getRuleContext(0, IdexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_declaratorid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDeclaratorid) return visitor.visitDeclaratorid(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeidContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	public abstractdeclarator(): AbstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_typeid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTypeid) return visitor.visitTypeid(this);
		else return visitor.visitChildren(this);
	}
}


export class AbstractdeclaratorContext extends ParserRuleContext {
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public trailingreturntype(): TrailingreturntypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingreturntypeContext);
	}
	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
	}
	public abstractpackdeclarator(): AbstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractpackdeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_abstractdeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAbstractdeclarator) return visitor.visitAbstractdeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class PtrabstractdeclaratorContext extends ParserRuleContext {
	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
	}
	public ptroperator(): PtroperatorContext | undefined {
		return this.tryGetRuleContext(0, PtroperatorContext);
	}
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_ptrabstractdeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitPtrabstractdeclarator) return visitor.visitPtrabstractdeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class NoptrabstractdeclaratorContext extends ParserRuleContext {
	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_noptrabstractdeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNoptrabstractdeclarator) return visitor.visitNoptrabstractdeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class AbstractpackdeclaratorContext extends ParserRuleContext {
	public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractpackdeclaratorContext);
	}
	public ptroperator(): PtroperatorContext | undefined {
		return this.tryGetRuleContext(0, PtroperatorContext);
	}
	public abstractpackdeclarator(): AbstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractpackdeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_abstractpackdeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAbstractpackdeclarator) return visitor.visitAbstractpackdeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class NoptrabstractpackdeclaratorContext extends ParserRuleContext {
	public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractpackdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_noptrabstractpackdeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNoptrabstractpackdeclarator) return visitor.visitNoptrabstractpackdeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class ParameterdeclarationclauseContext extends ParserRuleContext {
	public parameterdeclarationlist(): ParameterdeclarationlistContext | undefined {
		return this.tryGetRuleContext(0, ParameterdeclarationlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_parameterdeclarationclause; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitParameterdeclarationclause) return visitor.visitParameterdeclarationclause(this);
		else return visitor.visitChildren(this);
	}
}


export class ParameterdeclarationlistContext extends ParserRuleContext {
	public parameterdeclaration(): ParameterdeclarationContext {
		return this.getRuleContext(0, ParameterdeclarationContext);
	}
	public parameterdeclarationlist(): ParameterdeclarationlistContext | undefined {
		return this.tryGetRuleContext(0, ParameterdeclarationlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_parameterdeclarationlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitParameterdeclarationlist) return visitor.visitParameterdeclarationlist(this);
		else return visitor.visitChildren(this);
	}
}


export class ParameterdeclarationContext extends ParserRuleContext {
	public typespecifier(): TypespecifierContext {
		return this.getRuleContext(0, TypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseqwithouttype(): DeclspecifierseqwithouttypeContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqwithouttypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_parameterdeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitParameterdeclaration) return visitor.visitParameterdeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctiondefinitionContext extends ParserRuleContext {
	public functionheader(): FunctionheaderContext {
		return this.getRuleContext(0, FunctionheaderContext);
	}
	public functionbody(): FunctionbodyContext {
		return this.getRuleContext(0, FunctionbodyContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseqwithouttype(): DeclspecifierseqwithouttypeContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqwithouttypeContext);
	}
	public virtspecifierseq(): VirtspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, VirtspecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_functiondefinition; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitFunctiondefinition) return visitor.visitFunctiondefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionheaderContext extends ParserRuleContext {
	public functiondeclarator(): FunctiondeclaratorContext {
		return this.getRuleContext(0, FunctiondeclaratorContext);
	}
	public typespecifier(): TypespecifierContext | undefined {
		return this.tryGetRuleContext(0, TypespecifierContext);
	}
	public ptroperator(): PtroperatorContext[];
	public ptroperator(i: number): PtroperatorContext;
	public ptroperator(i?: number): PtroperatorContext | PtroperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PtroperatorContext);
		} else {
			return this.getRuleContext(i, PtroperatorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_functionheader; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitFunctionheader) return visitor.visitFunctionheader(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctiondeclaratorContext extends ParserRuleContext {
	public declaratorid(): DeclaratoridContext {
		return this.getRuleContext(0, DeclaratoridContext);
	}
	public parameterdeclarationclause(): ParameterdeclarationclauseContext {
		return this.getRuleContext(0, ParameterdeclarationclauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_functiondeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitFunctiondeclarator) return visitor.visitFunctiondeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionbodyContext extends ParserRuleContext {
	public compoundstatement(): CompoundstatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundstatementContext);
	}
	public ctorinitializer(): CtorinitializerContext | undefined {
		return this.tryGetRuleContext(0, CtorinitializerContext);
	}
	public functiontryblock(): FunctiontryblockContext | undefined {
		return this.tryGetRuleContext(0, FunctiontryblockContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Default, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Delete, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_functionbody; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitFunctionbody) return visitor.visitFunctionbody(this);
		else return visitor.visitChildren(this);
	}
}


export class InitializerContext extends ParserRuleContext {
	public braceorequalinitializer(): BraceorequalinitializerContext | undefined {
		return this.tryGetRuleContext(0, BraceorequalinitializerContext);
	}
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_initializer; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitInitializer) return visitor.visitInitializer(this);
		else return visitor.visitChildren(this);
	}
}


export class BraceorequalinitializerContext extends ParserRuleContext {
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_braceorequalinitializer; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBraceorequalinitializer) return visitor.visitBraceorequalinitializer(this);
		else return visitor.visitChildren(this);
	}
}


export class InitializerclauseContext extends ParserRuleContext {
	public assignmentexpression(): AssignmentexpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentexpressionContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_initializerclause; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitInitializerclause) return visitor.visitInitializerclause(this);
		else return visitor.visitChildren(this);
	}
}


export class InitializerlistContext extends ParserRuleContext {
	public initializerclause(): InitializerclauseContext[];
	public initializerclause(i: number): InitializerclauseContext;
	public initializerclause(i?: number): InitializerclauseContext | InitializerclauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializerclauseContext);
		} else {
			return this.getRuleContext(i, InitializerclauseContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_initializerlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitInitializerlist) return visitor.visitInitializerlist(this);
		else return visitor.visitChildren(this);
	}
}


export class BracedinitlistContext extends ParserRuleContext {
	public initializerlist(): InitializerlistContext | undefined {
		return this.tryGetRuleContext(0, InitializerlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_bracedinitlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBracedinitlist) return visitor.visitBracedinitlist(this);
		else return visitor.visitChildren(this);
	}
}


export class MyclassnameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_myclassname; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMyclassname) return visitor.visitMyclassname(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassspecifierContext extends ParserRuleContext {
	public classhead(): ClassheadContext {
		return this.getRuleContext(0, ClassheadContext);
	}
	public classbody(): ClassbodyContext {
		return this.getRuleContext(0, ClassbodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_classspecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitClassspecifier) return visitor.visitClassspecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassbodyContext extends ParserRuleContext {
	public memberspecification(): MemberspecificationContext | undefined {
		return this.tryGetRuleContext(0, MemberspecificationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_classbody; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitClassbody) return visitor.visitClassbody(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassheadContext extends ParserRuleContext {
	public classkey(): ClasskeyContext {
		return this.getRuleContext(0, ClasskeyContext);
	}
	public classheadname(): ClassheadnameContext | undefined {
		return this.tryGetRuleContext(0, ClassheadnameContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public classvirtspecifier(): ClassvirtspecifierContext | undefined {
		return this.tryGetRuleContext(0, ClassvirtspecifierContext);
	}
	public baseclause(): BaseclauseContext | undefined {
		return this.tryGetRuleContext(0, BaseclauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_classhead; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitClasshead) return visitor.visitClasshead(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassheadnameContext extends ParserRuleContext {
	public myclassname(): MyclassnameContext {
		return this.getRuleContext(0, MyclassnameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_classheadname; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitClassheadname) return visitor.visitClassheadname(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassvirtspecifierContext extends ParserRuleContext {
	public Final(): TerminalNode { return this.getToken(CPP14Parser.Final, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_classvirtspecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitClassvirtspecifier) return visitor.visitClassvirtspecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class ClasskeyContext extends ParserRuleContext {
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Struct, 0); }
	public Union(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Union, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_classkey; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitClasskey) return visitor.visitClasskey(this);
		else return visitor.visitChildren(this);
	}
}


export class MemberspecificationContext extends ParserRuleContext {
	public memberdeclaration(): MemberdeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberdeclarationContext);
	}
	public memberspecification(): MemberspecificationContext | undefined {
		return this.tryGetRuleContext(0, MemberspecificationContext);
	}
	public accessspecifier(): AccessspecifierContext | undefined {
		return this.tryGetRuleContext(0, AccessspecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_memberspecification; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMemberspecification) return visitor.visitMemberspecification(this);
		else return visitor.visitChildren(this);
	}
}


export class MemberdeclarationContext extends ParserRuleContext {
	public membervariabledeclarationstatement(): MembervariabledeclarationstatementContext | undefined {
		return this.tryGetRuleContext(0, MembervariabledeclarationstatementContext);
	}
	public functiondefinition(): FunctiondefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctiondefinitionContext);
	}
	public usingdeclaration(): UsingdeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingdeclarationContext);
	}
	public static_assertdeclaration(): Static_assertdeclarationContext | undefined {
		return this.tryGetRuleContext(0, Static_assertdeclarationContext);
	}
	public templatedeclaration(): TemplatedeclarationContext | undefined {
		return this.tryGetRuleContext(0, TemplatedeclarationContext);
	}
	public aliasdeclaration(): AliasdeclarationContext | undefined {
		return this.tryGetRuleContext(0, AliasdeclarationContext);
	}
	public emptydeclaration(): EmptydeclarationContext | undefined {
		return this.tryGetRuleContext(0, EmptydeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_memberdeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMemberdeclaration) return visitor.visitMemberdeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class MembervariabledeclarationstatementContext extends ParserRuleContext {
	public membervariabledeclaration(): MembervariabledeclarationContext {
		return this.getRuleContext(0, MembervariabledeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_membervariabledeclarationstatement; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMembervariabledeclarationstatement) return visitor.visitMembervariabledeclarationstatement(this);
		else return visitor.visitChildren(this);
	}
}


export class MembervariabledeclarationContext extends ParserRuleContext {
	public typespecifier(): TypespecifierContext {
		return this.getRuleContext(0, TypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseqwithouttype(): DeclspecifierseqwithouttypeContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqwithouttypeContext);
	}
	public ptroperator(): PtroperatorContext[];
	public ptroperator(i: number): PtroperatorContext;
	public ptroperator(i?: number): PtroperatorContext | PtroperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PtroperatorContext);
		} else {
			return this.getRuleContext(i, PtroperatorContext);
		}
	}
	public memberdeclaratorlist(): MemberdeclaratorlistContext | undefined {
		return this.tryGetRuleContext(0, MemberdeclaratorlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_membervariabledeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMembervariabledeclaration) return visitor.visitMembervariabledeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class MemberdeclaratorlistContext extends ParserRuleContext {
	public memberdeclarator(): MemberdeclaratorContext {
		return this.getRuleContext(0, MemberdeclaratorContext);
	}
	public memberdeclaratorlist(): MemberdeclaratorlistContext | undefined {
		return this.tryGetRuleContext(0, MemberdeclaratorlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_memberdeclaratorlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMemberdeclaratorlist) return visitor.visitMemberdeclaratorlist(this);
		else return visitor.visitChildren(this);
	}
}


export class MemberdeclaratorContext extends ParserRuleContext {
	public declaratorid(): DeclaratoridContext | undefined {
		return this.tryGetRuleContext(0, DeclaratoridContext);
	}
	public virtspecifierseq(): VirtspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, VirtspecifierseqContext);
	}
	public purespecifier(): PurespecifierContext | undefined {
		return this.tryGetRuleContext(0, PurespecifierContext);
	}
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_memberdeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMemberdeclarator) return visitor.visitMemberdeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class VirtspecifierseqContext extends ParserRuleContext {
	public virtspecifier(): VirtspecifierContext {
		return this.getRuleContext(0, VirtspecifierContext);
	}
	public virtspecifierseq(): VirtspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, VirtspecifierseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_virtspecifierseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitVirtspecifierseq) return visitor.visitVirtspecifierseq(this);
		else return visitor.visitChildren(this);
	}
}


export class VirtspecifierContext extends ParserRuleContext {
	public Override(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Override, 0); }
	public Final(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Final, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_virtspecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitVirtspecifier) return visitor.visitVirtspecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class PurespecifierContext extends ParserRuleContext {
	public _val: Token;
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	public Octalliteral(): TerminalNode { return this.getToken(CPP14Parser.Octalliteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_purespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitPurespecifier) return visitor.visitPurespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class BaseclauseContext extends ParserRuleContext {
	public basespecifierlist(): BasespecifierlistContext {
		return this.getRuleContext(0, BasespecifierlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_baseclause; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBaseclause) return visitor.visitBaseclause(this);
		else return visitor.visitChildren(this);
	}
}


export class BasespecifierlistContext extends ParserRuleContext {
	public basespecifier(): BasespecifierContext {
		return this.getRuleContext(0, BasespecifierContext);
	}
	public basespecifierlist(): BasespecifierlistContext | undefined {
		return this.tryGetRuleContext(0, BasespecifierlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_basespecifierlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBasespecifierlist) return visitor.visitBasespecifierlist(this);
		else return visitor.visitChildren(this);
	}
}


export class BasespecifierContext extends ParserRuleContext {
	public basetypespecifier(): BasetypespecifierContext {
		return this.getRuleContext(0, BasetypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Virtual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Virtual, 0); }
	public accessspecifier(): AccessspecifierContext | undefined {
		return this.tryGetRuleContext(0, AccessspecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_basespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBasespecifier) return visitor.visitBasespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassordecltypeContext extends ParserRuleContext {
	public myclassname(): MyclassnameContext | undefined {
		return this.tryGetRuleContext(0, MyclassnameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_classordecltype; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitClassordecltype) return visitor.visitClassordecltype(this);
		else return visitor.visitChildren(this);
	}
}


export class BasetypespecifierContext extends ParserRuleContext {
	public classordecltype(): ClassordecltypeContext {
		return this.getRuleContext(0, ClassordecltypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_basetypespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBasetypespecifier) return visitor.visitBasetypespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class AccessspecifierContext extends ParserRuleContext {
	public Private(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Private, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Protected, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Public, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_accessspecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitAccessspecifier) return visitor.visitAccessspecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class ConversionfunctionidContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public conversiontypeid(): ConversiontypeidContext {
		return this.getRuleContext(0, ConversiontypeidContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_conversionfunctionid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitConversionfunctionid) return visitor.visitConversionfunctionid(this);
		else return visitor.visitChildren(this);
	}
}


export class ConversiontypeidContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	public conversiondeclarator(): ConversiondeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ConversiondeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_conversiontypeid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitConversiontypeid) return visitor.visitConversiontypeid(this);
		else return visitor.visitChildren(this);
	}
}


export class ConversiondeclaratorContext extends ParserRuleContext {
	public ptroperator(): PtroperatorContext {
		return this.getRuleContext(0, PtroperatorContext);
	}
	public conversiondeclarator(): ConversiondeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ConversiondeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_conversiondeclarator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitConversiondeclarator) return visitor.visitConversiondeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class CtorinitializerContext extends ParserRuleContext {
	public meminitializerlist(): MeminitializerlistContext {
		return this.getRuleContext(0, MeminitializerlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_ctorinitializer; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitCtorinitializer) return visitor.visitCtorinitializer(this);
		else return visitor.visitChildren(this);
	}
}


export class MeminitializerlistContext extends ParserRuleContext {
	public meminitializer(): MeminitializerContext {
		return this.getRuleContext(0, MeminitializerContext);
	}
	public meminitializerlist(): MeminitializerlistContext | undefined {
		return this.tryGetRuleContext(0, MeminitializerlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_meminitializerlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMeminitializerlist) return visitor.visitMeminitializerlist(this);
		else return visitor.visitChildren(this);
	}
}


export class MeminitializerContext extends ParserRuleContext {
	public meminitializerid(): MeminitializeridContext {
		return this.getRuleContext(0, MeminitializeridContext);
	}
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_meminitializer; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMeminitializer) return visitor.visitMeminitializer(this);
		else return visitor.visitChildren(this);
	}
}


export class MeminitializeridContext extends ParserRuleContext {
	public classordecltype(): ClassordecltypeContext | undefined {
		return this.tryGetRuleContext(0, ClassordecltypeContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_meminitializerid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitMeminitializerid) return visitor.visitMeminitializerid(this);
		else return visitor.visitChildren(this);
	}
}


export class OperatorfunctionidContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_operatorfunctionid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitOperatorfunctionid) return visitor.visitOperatorfunctionid(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteraloperatoridContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public Stringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Stringliteral, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Userdefinedstringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedstringliteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_literaloperatorid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitLiteraloperatorid) return visitor.visitLiteraloperatorid(this);
		else return visitor.visitChildren(this);
	}
}


export class TemplatedeclarationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public templateparameterlist(): TemplateparameterlistContext {
		return this.getRuleContext(0, TemplateparameterlistContext);
	}
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_templatedeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTemplatedeclaration) return visitor.visitTemplatedeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class TemplateparameterlistContext extends ParserRuleContext {
	public templateparameter(): TemplateparameterContext {
		return this.getRuleContext(0, TemplateparameterContext);
	}
	public templateparameterlist(): TemplateparameterlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateparameterlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_templateparameterlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTemplateparameterlist) return visitor.visitTemplateparameterlist(this);
		else return visitor.visitChildren(this);
	}
}


export class TemplateparameterContext extends ParserRuleContext {
	public typeparameter(): TypeparameterContext | undefined {
		return this.tryGetRuleContext(0, TypeparameterContext);
	}
	public parameterdeclaration(): ParameterdeclarationContext | undefined {
		return this.tryGetRuleContext(0, ParameterdeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_templateparameter; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTemplateparameter) return visitor.visitTemplateparameter(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeparameterContext extends ParserRuleContext {
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public Typename(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typename, 0); }
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public templateparameterlist(): TemplateparameterlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateparameterlistContext);
	}
	public idexpression(): IdexpressionContext | undefined {
		return this.tryGetRuleContext(0, IdexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_typeparameter; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTypeparameter) return visitor.visitTypeparameter(this);
		else return visitor.visitChildren(this);
	}
}


export class SimpletemplateidContext extends ParserRuleContext {
	public templatename(): TemplatenameContext {
		return this.getRuleContext(0, TemplatenameContext);
	}
	public templateargumentlist(): TemplateargumentlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateargumentlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_simpletemplateid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitSimpletemplateid) return visitor.visitSimpletemplateid(this);
		else return visitor.visitChildren(this);
	}
}


export class TemplateidContext extends ParserRuleContext {
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public operatorfunctionid(): OperatorfunctionidContext | undefined {
		return this.tryGetRuleContext(0, OperatorfunctionidContext);
	}
	public templateargumentlist(): TemplateargumentlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateargumentlistContext);
	}
	public literaloperatorid(): LiteraloperatoridContext | undefined {
		return this.tryGetRuleContext(0, LiteraloperatoridContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_templateid; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTemplateid) return visitor.visitTemplateid(this);
		else return visitor.visitChildren(this);
	}
}


export class TemplatenameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_templatename; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTemplatename) return visitor.visitTemplatename(this);
		else return visitor.visitChildren(this);
	}
}


export class TemplateargumentlistContext extends ParserRuleContext {
	public templateargument(): TemplateargumentContext {
		return this.getRuleContext(0, TemplateargumentContext);
	}
	public templateargumentlist(): TemplateargumentlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateargumentlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_templateargumentlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTemplateargumentlist) return visitor.visitTemplateargumentlist(this);
		else return visitor.visitChildren(this);
	}
}


export class TemplateargumentContext extends ParserRuleContext {
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public idexpression(): IdexpressionContext | undefined {
		return this.tryGetRuleContext(0, IdexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_templateargument; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTemplateargument) return visitor.visitTemplateargument(this);
		else return visitor.visitChildren(this);
	}
}


export class TypenamespecifierContext extends ParserRuleContext {
	public Typename(): TerminalNode { return this.getToken(CPP14Parser.Typename, 0); }
	public nestednamespecifier(): NestednamespecifierContext {
		return this.getRuleContext(0, NestednamespecifierContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_typenamespecifier; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTypenamespecifier) return visitor.visitTypenamespecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class ExplicitinstantiationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Extern, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_explicitinstantiation; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitExplicitinstantiation) return visitor.visitExplicitinstantiation(this);
		else return visitor.visitChildren(this);
	}
}


export class ExplicitspecializationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_explicitspecialization; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitExplicitspecialization) return visitor.visitExplicitspecialization(this);
		else return visitor.visitChildren(this);
	}
}


export class TryblockContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(CPP14Parser.Try, 0); }
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	public handlerseq(): HandlerseqContext {
		return this.getRuleContext(0, HandlerseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_tryblock; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTryblock) return visitor.visitTryblock(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctiontryblockContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(CPP14Parser.Try, 0); }
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	public handlerseq(): HandlerseqContext {
		return this.getRuleContext(0, HandlerseqContext);
	}
	public ctorinitializer(): CtorinitializerContext | undefined {
		return this.tryGetRuleContext(0, CtorinitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_functiontryblock; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitFunctiontryblock) return visitor.visitFunctiontryblock(this);
		else return visitor.visitChildren(this);
	}
}


export class HandlerseqContext extends ParserRuleContext {
	public handler(): HandlerContext {
		return this.getRuleContext(0, HandlerContext);
	}
	public handlerseq(): HandlerseqContext | undefined {
		return this.tryGetRuleContext(0, HandlerseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_handlerseq; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitHandlerseq) return visitor.visitHandlerseq(this);
		else return visitor.visitChildren(this);
	}
}


export class HandlerContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(CPP14Parser.Catch, 0); }
	public exceptiondeclaration(): ExceptiondeclarationContext {
		return this.getRuleContext(0, ExceptiondeclarationContext);
	}
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_handler; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitHandler) return visitor.visitHandler(this);
		else return visitor.visitChildren(this);
	}
}


export class ExceptiondeclarationContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, TypespecifierseqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public abstractdeclarator(): AbstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_exceptiondeclaration; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitExceptiondeclaration) return visitor.visitExceptiondeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ThrowexpressionContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(CPP14Parser.Throw, 0); }
	public assignmentexpression(): AssignmentexpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_throwexpression; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitThrowexpression) return visitor.visitThrowexpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ExceptionspecificationContext extends ParserRuleContext {
	public dynamicexceptionspecification(): DynamicexceptionspecificationContext | undefined {
		return this.tryGetRuleContext(0, DynamicexceptionspecificationContext);
	}
	public noexceptspecification(): NoexceptspecificationContext | undefined {
		return this.tryGetRuleContext(0, NoexceptspecificationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_exceptionspecification; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitExceptionspecification) return visitor.visitExceptionspecification(this);
		else return visitor.visitChildren(this);
	}
}


export class DynamicexceptionspecificationContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(CPP14Parser.Throw, 0); }
	public typeidlist(): TypeidlistContext | undefined {
		return this.tryGetRuleContext(0, TypeidlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_dynamicexceptionspecification; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitDynamicexceptionspecification) return visitor.visitDynamicexceptionspecification(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeidlistContext extends ParserRuleContext {
	public typeid(): TypeidContext {
		return this.getRuleContext(0, TypeidContext);
	}
	public typeidlist(): TypeidlistContext | undefined {
		return this.tryGetRuleContext(0, TypeidlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_typeidlist; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitTypeidlist) return visitor.visitTypeidlist(this);
		else return visitor.visitChildren(this);
	}
}


export class NoexceptspecificationContext extends ParserRuleContext {
	public Noexcept(): TerminalNode { return this.getToken(CPP14Parser.Noexcept, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_noexceptspecification; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitNoexceptspecification) return visitor.visitNoexceptspecification(this);
		else return visitor.visitChildren(this);
	}
}


export class RightShiftContext extends ParserRuleContext {
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Greater);
		} else {
			return this.getToken(CPP14Parser.Greater, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_rightShift; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitRightShift) return visitor.visitRightShift(this);
		else return visitor.visitChildren(this);
	}
}


export class RightShiftAssignContext extends ParserRuleContext {
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Greater);
		} else {
			return this.getToken(CPP14Parser.Greater, i);
		}
	}
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_rightShiftAssign; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitRightShiftAssign) return visitor.visitRightShiftAssign(this);
		else return visitor.visitChildren(this);
	}
}


export class OperatorContext extends ParserRuleContext {
	public New(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.New, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Delete, 0); }
	public rightShift(): RightShiftContext | undefined {
		return this.tryGetRuleContext(0, RightShiftContext);
	}
	public rightShiftAssign(): RightShiftAssignContext | undefined {
		return this.tryGetRuleContext(0, RightShiftAssignContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_operator; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitOperator) return visitor.visitOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralContext extends ParserRuleContext {
	public integerliteral(): IntegerliteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerliteralContext);
	}
	public characterliteral(): CharacterliteralContext | undefined {
		return this.tryGetRuleContext(0, CharacterliteralContext);
	}
	public floatingliteral(): FloatingliteralContext | undefined {
		return this.tryGetRuleContext(0, FloatingliteralContext);
	}
	public stringliteral(): StringliteralContext | undefined {
		return this.tryGetRuleContext(0, StringliteralContext);
	}
	public booleanliteral(): BooleanliteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanliteralContext);
	}
	public pointerliteral(): PointerliteralContext | undefined {
		return this.tryGetRuleContext(0, PointerliteralContext);
	}
	public userdefinedliteral(): UserdefinedliteralContext | undefined {
		return this.tryGetRuleContext(0, UserdefinedliteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_literal; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitLiteral) return visitor.visitLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class IntegerliteralContext extends ParserRuleContext {
	public Integerliteral(): TerminalNode { return this.getToken(CPP14Parser.Integerliteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_integerliteral; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitIntegerliteral) return visitor.visitIntegerliteral(this);
		else return visitor.visitChildren(this);
	}
}


export class CharacterliteralContext extends ParserRuleContext {
	public Characterliteral(): TerminalNode { return this.getToken(CPP14Parser.Characterliteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_characterliteral; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitCharacterliteral) return visitor.visitCharacterliteral(this);
		else return visitor.visitChildren(this);
	}
}


export class FloatingliteralContext extends ParserRuleContext {
	public Floatingliteral(): TerminalNode { return this.getToken(CPP14Parser.Floatingliteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_floatingliteral; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitFloatingliteral) return visitor.visitFloatingliteral(this);
		else return visitor.visitChildren(this);
	}
}


export class StringliteralContext extends ParserRuleContext {
	public Stringliteral(): TerminalNode { return this.getToken(CPP14Parser.Stringliteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_stringliteral; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitStringliteral) return visitor.visitStringliteral(this);
		else return visitor.visitChildren(this);
	}
}


export class BooleanliteralContext extends ParserRuleContext {
	public Booleanliteral(): TerminalNode { return this.getToken(CPP14Parser.Booleanliteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_booleanliteral; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitBooleanliteral) return visitor.visitBooleanliteral(this);
		else return visitor.visitChildren(this);
	}
}


export class PointerliteralContext extends ParserRuleContext {
	public Nullptr(): TerminalNode { return this.getToken(CPP14Parser.Nullptr, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_pointerliteral; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitPointerliteral) return visitor.visitPointerliteral(this);
		else return visitor.visitChildren(this);
	}
}


export class UserdefinedliteralContext extends ParserRuleContext {
	public Userdefinedintegerliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedintegerliteral, 0); }
	public Userdefinedfloatingliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedfloatingliteral, 0); }
	public Userdefinedstringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedstringliteral, 0); }
	public Userdefinedcharacterliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedcharacterliteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CPP14Parser.RULE_userdefinedliteral; }
	@Override
	public accept<Result>(visitor: CPP14Visitor<Result>): Result {
		if (visitor.visitUserdefinedliteral) return visitor.visitUserdefinedliteral(this);
		else return visitor.visitChildren(this);
	}
}


