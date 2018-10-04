// tslint:disable
import { 
	ANTLRInputStream, 
	CommonTokenStream, 
	ParserRuleContext, 
	RuleContext, 
	Token 
} from 'antlr4ts';

import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

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
	} from "./CPP14Parser";

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
import { UniProgram } from '../../node/UniProgram';

class Comment {
	constructor(readonly contents:string[], public parent:ParseTree){
	}
}

export class CPP14Mapper implements CPP14Visitor<any> {

	private isDebugMode:boolean = false;
	private parser:CPP14Parser;
	private	_comments:Comment[] = [];
	private _lastNode:UniNode;
	private _nextTokenIndex:number;
	private _stream:CommonTokenStream;

	setIsDebugMode(isDebugMode:boolean) {
		this.isDebugMode = isDebugMode;
	}
	
	getRawTree(code) {
		const chars = new ANTLRInputStream(code);
		const lexer = new CPP14Lexer(chars);
		const tokens = new CommonTokenStream(lexer);
		this.parser = new CPP14Parser(tokens);
		const tree = this.parser.translationunit();
		return [tree, this.parser];
	}

	parse(code:string) {
		return this.parseCore(new ANTLRInputStream(code));
	}

	
	parseCore(chars:ANTLRInputStream) {
		const lexer = new CPP14Lexer(chars);
		const tokens = new CommonTokenStream(lexer);
		this.parser = new CPP14Parser(tokens);
		const tree = this.parser.translationunit();

		this._comments = [];
		this._stream = tokens;
		this._lastNode = null;
		this._nextTokenIndex = 0;
		const ret = new UniProgram(this.visit(tree));
		ret.codeRange = ret.block.codeRange;
		
		if (this._lastNode !== null) {
			const count = this._stream.getTokens().length - 1
			for (var i = this._nextTokenIndex; i < count; i++) {
				const hiddenToken = this._stream.getTokens()[i]; // Includes skipped tokens (maybe)
				if (this._lastNode.comments === null) {
					this._lastNode.comments = [];
				}
				this._lastNode.comments.push(hiddenToken.text);
			}
		}
		return ret;
	}
	
	/*def parseFile(String path) {
		val inputStream = new FileInputStream(path)
		try {
			parseCore(new ANTLRInputStream(inputStream))
		} finally {
			inputStream.close
		}
	}
	
	def parseFile(String path, Function1<CPP14Parser, ParseTree> parseAction) {
		val inputStream = new FileInputStream(path)
		try {
			parseCore(new ANTLRInputStream(inputStream), parseAction)
		} finally {
			inputStream.close
		}
	}*/

	public visitChildren(node:RuleNode) {
		const n = node.childCount;
		const list:any[] = [];
		for (let i = 0; i < n;++i) {
			const c = node.getChild(i);
			const childResult = this.visit(c);
			list.push(childResult);
		}
		const flatten = this.flatten(list);
		return flatten;
	}

	public visit(tree:ParseTree) {
		const result = (() => {
			if (!this.isDebugMode) {
				return tree.accept(this);
			}
	 		if (!(tree instanceof RuleContext)) {
				return tree.accept(this);
			}
			const ruleName = this.getRuleName(tree);
			console.log('*** visit Rule : ' + ruleName + ' ***');
			const result = tree.accept(this);
			console.log('returned: ' + result);
			return result;
		})();

		const node = (Array.isArray(result) && result.length == 1) ? result[0] : result;
		if (node instanceof UniNode) {
			if(tree instanceof ParserRuleContext) {
				const start = tree.start;
				const begin = new CodeLocation(start.charPositionInLine,start.line);
				const stop = tree.stop;
				const endPos = stop.charPositionInLine;
				const length = 1 + stop.stopIndex - stop.startIndex;
				const end = new CodeLocation(endPos + length, stop.line);
				node.codeRange = new CodeRange(begin,end);
			}
			let contents:string[]  = [];
			for (let i = this._comments.length - 1; i >= 0 && this._comments[i].parent == tree; i--) {
				for(const content of contents) {
					this._comments[i].contents.push(content);
				}
				contents = this._comments[i].contents;
				this._comments.splice(i, 1);
			}
			if (contents.length > 0) {
				if (node.comments === null) {
					node.comments = contents;
				} else {
					node.comments = node.comments.concat(contents);
				}
			}
			this._lastNode = node;
		} else {
			for (var i = this._comments.length - 1; i >= 0 && this._comments[i].parent == tree; i--) {
				this._comments[i].parent = this._comments[i].parent.parent
			}
			this._lastNode = null
		}
		return result;
	}

	isNonEmptyNode(node:ParseTree):boolean {
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
	
	visitErrorNode(node: ErrorNode): UniNode{
		return null;
	}			
	
	getRuleName(node) {
		return this.parser.ruleNames[node.ruleIndex];
	}

	public visitTerminal(node:TerminalNode) {
		if (this.isDebugMode) {
			console.log("visit TERMINAL : " + node.text);
		}

		const token = node.symbol;
		if (token.type > 0) {
			const count = token.tokenIndex;
			const contents:string[] = [];
			let i = this._nextTokenIndex;
			for (; i < count; i++) {
				const hiddenToken = this._stream.getTokens()[i]; // Includes skipped tokens (maybe)
				if (this._lastNode !== null && this._stream.getTokens()[this._nextTokenIndex - 1].line == hiddenToken.line) {
					if (this._lastNode.comments === null) {
						this._lastNode.comments = [];
					}
					this._lastNode.comments.push(hiddenToken.text);
				} else {
					contents.push(hiddenToken.text);
				}
			}
			const count2 = this._stream.getTokens().length - 1;
			for (i = count + 1; i < count2 && this._stream.getTokens()[i].channel == Token.HIDDEN_CHANNEL &&
				this._stream.getTokens()[count].line == this._stream.getTokens()[i].line; i++) {
				contents.push(this._stream.getTokens()[i].text);
			}
			if (contents.length > 0) {
				this._comments.push(new Comment(contents, node.parent));
			}
			this._nextTokenIndex = i;
		}
		return token.text;
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

	public castToList<T extends Function|String>(obj:any, clazz:T):T[] {
		const temp = this.flatten(obj);
		const ret = [];
		if (temp instanceof Map) {
			const add = temp.has('add');
			temp.forEach((value: any, key: any) => {
				switch (key) {
				case 'add': {
					if (value instanceof Map) {
						ret.push(this.castTo<T>(value, clazz));
					} else if (Array.isArray(value)) {
						value.forEach((it:any) => {
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
			temp.forEach((it:any) => {
				ret.push(this.castToList(it, clazz));
			});
		} else {
			ret.push(this.castTo(temp, clazz));
		}
		return ret;
	}
	public castTo<T extends Function|String>(obj:any, clazz:any) {
		const temp = this.flatten(obj);
		const instance = new clazz();
		const fields = instance.fields;
		const fieldsName = [];
		for (let it in instance) {
			fieldsName.push(it);
		}
		if (temp instanceof Map) {
			if (clazz === String) {
				let builder = '';
				const hasAdd = temp.has('add');
				temp.forEach((value: any, key: any) => {
				switch (key) {
					case 'add': {
						builder += this.castTo<T>(value, clazz);
					}
					break;
					default: {
						if (!hasAdd) {
							builder += this.castTo<T>(value, clazz);
						}
					}
					break;
				}
				});
				return (builder.length > 0) ? builder : null;
			}
			temp.forEach((value: any, key: any) => {
				if (fieldsName.includes(key)) {
					const field:Function = fields.get(key);
					if (Array.isArray(instance[key])) {
						const list	= this.flatten(this.castToList(value, field));
						if(!Array.isArray(list)) {
							instance[key] = [list];
						} else {
							instance[key] = list;
						}
					} else if (value.length == 0
						&& (field == UniExpr || field == UniStatement )){
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
				temp.forEach((it:any) => {
					builder += (this.castTo(it, clazz));
				});
				return (builder.length > 0) ? builder : null;
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
				return this.castTo<T>(first,clazz);
			}
		}
		if(temp != null) {
			return temp as T;
		}
		return instance;
	}

	public visitTranslationunit(ctx:TranslationunitContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const body = [];
		map.set("body", body);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 474: {
						body.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniBlock);
		return node;
	}

	public visitPrimaryexpression(ctx:PrimaryexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 477: {
						ret.push(this.visit(it));
					}
					break;
					case 480: {
						ret.push(this.visit(it));
					}
					break;
					case 483: {
						ret.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
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

	public visitIdentexpression(ctx:IdentexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const name = [];
		map.set("name", name);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 491: {
						name.push(this.visit(it));
					}
					break;
					case 492: {
						name.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniIdent);
		return node;
	}

	public visitIdexpressionlapper(ctx:IdexpressionlapperContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const name = [];
		map.set("name", name);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 610: {
						name.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniIdent);
		return node;
	}

	public visitFunctioncallexpression(ctx:FunctioncallexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const args = [];
		map.set("args", args);
		const methodName = [];
		map.set("methodName", methodName);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 612: {
						methodName.push(this.visit(it));
					}
					break;
					case 614: {
						args.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniMethodCall);
		return node;
	}

	public visitPostfixexpression(ctx:PostfixexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 620: {
						ret.push(this.visit(it));
					}
					break;
					case 621: {
						ret.push(this.visit(it));
					}
					break;
					case 36: {
						left.push(this.visit(it));
					}
					break;
					case 688: {
						right.push(this.visit(it));
					}
					break;
					case 701: {
						right.push(this.visit(it));
					}
					break;
					case 707: {
						right.push(this.visit(it));
					}
					break;
					case 710: {
						right.push(this.visit(it));
					}
					break;
					case 713: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.LeftBracket: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.RightBracket: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.Dot: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.Arrow: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.PlusPlus: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.MinusMinus: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitExpressionlist(ctx:ExpressionlistContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const items = [];
		map.set("items", items);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 723: {
						items.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniArray);
		return node;
	}

	public visitBinaryexpression(ctx:BinaryexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 749: {
						ret.push(this.visit(it));
					}
					break;
					case 750: {
						ret.push(this.visit(it));
					}
					break;
					case 751: {
						ret.push(this.visit(it));
					}
					break;
					case 752: {
						ret.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
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

	public visitUnaryexpression(ctx:UnaryexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const expr = [];
		map.set("expr", expr);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 756: {
						expr.push(this.visit(it));
					}
					break;
					case 758: {
						expr.push(this.visit(it));
					}
					break;
					case 759: {
						operator.push(this.visit(it));
					}
					break;
					case 760: {
						expr.push(this.visit(it));
					}
					break;
					case 763: {
						expr.push(this.visit(it));
					}
					break;
					case 766: {
						expr.push(this.visit(it));
					}
					break;
					case 771: {
						expr.push(this.visit(it));
					}
					break;
					case 781: {
						expr.push(this.visit(it));
					}
					break;
					case 784: {
						ret.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.PlusPlus: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.MinusMinus: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.Sizeof: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.Identifier: {
						expr.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.Alignof: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitTypeidlapper(ctx:TypeidlapperContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const name = [];
		map.set("name", name);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 787: {
						name.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniIdent);
		return node;
	}

	public visitCastexpression(ctx:CastexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const type = [];
		map.set("type", type);
		const value = [];
		map.set("value", value);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 878: {
						ret.push(this.visit(it));
					}
					break;
					case 880: {
						type.push(this.visit(it));
					}
					break;
					case 882: {
						value.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.RightParen: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitPmexpression(ctx:PmexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 887: {
						ret.push(this.visit(it));
					}
					break;
					case 68: {
						left.push(this.visit(it));
					}
					break;
					case 891: {
						right.push(this.visit(it));
					}
					break;
					case 894: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.DotStar: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.ArrowStar: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitMultiplicativeexpression(ctx:MultiplicativeexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 901: {
						ret.push(this.visit(it));
					}
					break;
					case 70: {
						left.push(this.visit(it));
					}
					break;
					case 905: {
						right.push(this.visit(it));
					}
					break;
					case 908: {
						right.push(this.visit(it));
					}
					break;
					case 911: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.Star: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.Div: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.Mod: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitAdditiveexpression(ctx:AdditiveexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 918: {
						ret.push(this.visit(it));
					}
					break;
					case 72: {
						left.push(this.visit(it));
					}
					break;
					case 922: {
						right.push(this.visit(it));
					}
					break;
					case 925: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.Plus: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.Minus: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitShiftexpression(ctx:ShiftexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 932: {
						ret.push(this.visit(it));
					}
					break;
					case 74: {
						left.push(this.visit(it));
					}
					break;
					case 936: {
						right.push(this.visit(it));
					}
					break;
					case 938: {
						operator.push(this.visit(it));
					}
					break;
					case 939: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.LeftShift: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitRelationalexpression(ctx:RelationalexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 947: {
						ret.push(this.visit(it));
					}
					break;
					case 76: {
						left.push(this.visit(it));
					}
					break;
					case 951: {
						right.push(this.visit(it));
					}
					break;
					case 954: {
						right.push(this.visit(it));
					}
					break;
					case 957: {
						right.push(this.visit(it));
					}
					break;
					case 960: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.Less: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.Greater: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.LessEqual: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.GreaterEqual: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitEqualityexpression(ctx:EqualityexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 967: {
						ret.push(this.visit(it));
					}
					break;
					case 78: {
						left.push(this.visit(it));
					}
					break;
					case 971: {
						right.push(this.visit(it));
					}
					break;
					case 974: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.Equal: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.NotEqual: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitAndexpression(ctx:AndexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 981: {
						ret.push(this.visit(it));
					}
					break;
					case 80: {
						left.push(this.visit(it));
					}
					break;
					case 985: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.And: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitExclusiveorexpression(ctx:ExclusiveorexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 992: {
						ret.push(this.visit(it));
					}
					break;
					case 82: {
						left.push(this.visit(it));
					}
					break;
					case 996: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.Caret: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitInclusiveorexpression(ctx:InclusiveorexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1003: {
						ret.push(this.visit(it));
					}
					break;
					case 84: {
						left.push(this.visit(it));
					}
					break;
					case 1007: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.Or: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitLogicalandexpression(ctx:LogicalandexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1014: {
						ret.push(this.visit(it));
					}
					break;
					case 86: {
						left.push(this.visit(it));
					}
					break;
					case 1018: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.AndAnd: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitLogicalorexpression(ctx:LogicalorexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1025: {
						ret.push(this.visit(it));
					}
					break;
					case 88: {
						left.push(this.visit(it));
					}
					break;
					case 1029: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.OrOr: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitConditionalexpression(ctx:ConditionalexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const trueExpr = [];
		map.set("trueExpr", trueExpr);
		const cond = [];
		map.set("cond", cond);
		const falseExpr = [];
		map.set("falseExpr", falseExpr);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1035: {
						ret.push(this.visit(it));
					}
					break;
					case 1036: {
						cond.push(this.visit(it));
					}
					break;
					case 1038: {
						trueExpr.push(this.visit(it));
					}
					break;
					case 1040: {
						falseExpr.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
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

	public visitAssignmentexpression(ctx:AssignmentexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1044: {
						ret.push(this.visit(it));
					}
					break;
					case 1045: {
						left.push(this.visit(it));
					}
					break;
					case 1046: {
						operator.push(this.visit(it));
					}
					break;
					case 1047: {
						right.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
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

	public visitSwitchunitstatement(ctx:SwitchunitstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const statement = [];
		map.set("statement", statement);
		const label = [];
		map.set("label", label);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1148: {
						cond.push(this.visit(it));
					}
					break;
					case 1153: {
						statement.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.Case: {
						label.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.Default: {
						label.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniSwitchUnit);
		return node;
	}

	public visitStatementWithoutLabeldstatementseq(ctx:StatementWithoutLabeldstatementseqContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1155: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1156: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniExpr)
		return node;
	}

	public visitExpressionstatement(ctx:ExpressionstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const endWith = [];
		map.set("endWith", endWith);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1162: {
						ret.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.Semi: {
						endWith.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitCompoundstatement(ctx:CompoundstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const body = [];
		map.set("body", body);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1168: {
						body.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniBlock);
		return node;
	}

	public visitStatementseq(ctx:StatementseqContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1173: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1174: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniExpr)
		return node;
	}

	public visitSelectionstatement(ctx:SelectionstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const trueStatement = [];
		map.set("trueStatement", trueStatement);
		const falseStatement = [];
		map.set("falseStatement", falseStatement);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1182: {
						cond.push(this.visit(it));
					}
					break;
					case 1184: {
						trueStatement.push(this.visit(it));
					}
					break;
					case 1188: {
						cond.push(this.visit(it));
					}
					break;
					case 1190: {
						trueStatement.push(this.visit(it));
					}
					break;
					case 1192: {
						falseStatement.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniIf);
		return node;
	}

	public visitSwitchstatement(ctx:SwitchstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const cases = [];
		map.set("cases", cases);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1198: {
						cond.push(this.visit(it));
					}
					break;
					case 1201: {
						cases.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniSwitch);
		return node;
	}

	public visitSwitchunitseq(ctx:SwitchunitseqContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1204: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1205: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniStatement)
		return node;
	}

	public visitWhilestatement(ctx:WhilestatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const statement = [];
		map.set("statement", statement);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1231: {
						cond.push(this.visit(it));
					}
					break;
					case 1233: {
						statement.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniWhile);
		return node;
	}

	public visitDowhilestatement(ctx:DowhilestatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const statement = [];
		map.set("statement", statement);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1236: {
						statement.push(this.visit(it));
					}
					break;
					case 1239: {
						cond.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniDoWhile);
		return node;
	}

	public visitIterationstatement(ctx:IterationstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const init = [];
		map.set("init", init);
		const statement = [];
		map.set("statement", statement);
		const step = [];
		map.set("step", step);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1245: {
						init.push(this.visit(it));
					}
					break;
					case 1246: {
						cond.push(this.visit(it));
					}
					break;
					case 1250: {
						step.push(this.visit(it));
					}
					break;
					case 1254: {
						statement.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniFor);
		return node;
	}

	public visitEnhancedForStatement(ctx:EnhancedForStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const container = [];
		map.set("container", container);
		const statement = [];
		map.set("statement", statement);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1258: {
						merge.push(this.visit(it));
					}
					break;
					case 1260: {
						container.push(this.visit(it));
					}
					break;
					case 1262: {
						statement.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		let node = this.castTo(map, UniEnhancedFor);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniEnhancedFor));});
		} else {
			node = new UniEnhancedFor();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniEnhancedFor));});
		}
		return node;
	}

	public visitBreakStatement(ctx:BreakStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniBreak);
		return node;
	}

	public visitContinueStatement(ctx:ContinueStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniContinue);
		return node;
	}

	public visitReturnStatement(ctx:ReturnStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const value = [];
		map.set("value", value);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1290: {
						value.push(this.visit(it));
					}
					break;
					case 1295: {
						value.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniReturn);
		return node;
	}

	public visitDeclarationseq(ctx:DeclarationseqContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1305: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 148: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1308: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniExpr)
		return node;
	}

	public visitMyclassbody(ctx:MyclassbodyContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1314: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniVariableDec)
		return node;
	}

	public visitMyclassspecifier(ctx:MyclassspecifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const members = [];
		map.set("members", members);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1317: {
						merge.push(this.visit(it));
					}
					break;
					case 1319: {
						members.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		let node = this.castTo(map, UniClassDec);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		} else {
			node = new UniClassDec();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		}
		return node;
	}

	public visitMyclasshead(ctx:MyclassheadContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const className = [];
		map.set("className", className);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1330: {
						className.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniClassDec);
		return node;
	}

	public visitVariabledeclarationstatement(ctx:VariabledeclarationstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1382: {
							ret.push(this.visit(it));
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
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
		const node = this.castToList(map, UniVariableDec)
		return node;
	}

	public visitVariabledeclaration(ctx:VariabledeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const variables = [];
		map.set("variables", variables);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const type = [];
		map.set("type", type);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1388: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1391: {
						type.push(this.visit(it));
					}
					break;
					case 1392: {
						variables.push(this.visit(it));
					}
					break;
					case 1395: {
						type.push(this.visit(it));
					}
					break;
					case 1396: {
						variables.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniVariableDec);
		return node;
	}

	public visitStructspecifier(ctx:StructspecifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const members = [];
		map.set("members", members);
		const className = [];
		map.set("className", className);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1401: {
						className.push(this.visit(it));
					}
					break;
					case 1403: {
						members.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniClassDec);
		return node;
	}

	public visitVariableDeclaratorList(ctx:VariableDeclaratorListContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1406: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1408: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniVariableDef)
		return node;
	}

	public visitVariableDeclarator(ctx:VariableDeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const typeSuffix = [];
		map.set("typeSuffix", typeSuffix);
		const name = [];
		map.set("name", name);
		const value = [];
		map.set("value", value);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1414: {
						name.push(this.visit(it));
					}
					break;
					case 1420: {
						name.push(this.visit(it));
					}
					break;
					case 1432: {
						value.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.LeftBracket: {
						typeSuffix.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.Integerliteral: {
						typeSuffix.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.RightBracket: {
						typeSuffix.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniVariableDef);
		return node;
	}

	public visitDims(ctx:DimsContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, String);
		return node;
	}

	public visitFunctiondeclarationstatement(ctx:FunctiondeclarationstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1441: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1444: {
						merge.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		let node = this.castTo(map, UniFunctionDec);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniFunctionDec));});
		} else {
			node = new UniFunctionDec();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniFunctionDec));});
		}
		return node;
	}

	public visitEmptydeclaration(ctx:EmptydeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const endWith = [];
		map.set("endWith", endWith);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.Semi: {
						endWith.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniEmptyStatement);
		return node;
	}

	public visitSimpletypespecifier(ctx:SimpletypespecifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, String);
		return node;
	}

	public visitElaboratedtypespecifier(ctx:ElaboratedtypespecifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.Identifier: {
						ret.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
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

	public visitInitdeclaratorlist(ctx:InitdeclaratorlistContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1897: {
						add.push(this.visit(it));
					}
					break;
					case 1899: {
						add.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		return map;
	}

	public visitDeclaratorid(ctx:DeclaratoridContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, String);
		return node;
	}

	public visitParameterdeclarationclause(ctx:ParameterdeclarationclauseContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 2087: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2093: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniParam)
		return node;
	}

	public visitParameterdeclarationlist(ctx:ParameterdeclarationlistContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 2100: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 324: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2104: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniParam)
		return node;
	}

	public visitParameterdeclaration(ctx:ParameterdeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const variables = [];
		map.set("variables", variables);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const type = [];
		map.set("type", type);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2113: {
						modifiers.push(this.visit(it));
					}
					break;
					case 2116: {
						type.push(this.visit(it));
					}
					break;
					case 2117: {
						variables.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniParam);
		return node;
	}

	public visitFunctiondefinition(ctx:FunctiondefinitionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const block = [];
		map.set("block", block);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2123: {
						modifiers.push(this.visit(it));
					}
					break;
					case 2126: {
						merge.push(this.visit(it));
					}
					break;
					case 2130: {
						block.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		let node = this.castTo(map, UniFunctionDec);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniFunctionDec));});
		} else {
			node = new UniFunctionDec();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniFunctionDec));});
		}
		return node;
	}

	public visitFunctionheader(ctx:FunctionheaderContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const returnType = [];
		map.set("returnType", returnType);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2132: {
						returnType.push(this.visit(it));
					}
					break;
					case 2135: {
						returnType.push(this.visit(it));
					}
					break;
					case 2141: {
						merge.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		let node = this.castTo(map, UniFunctionDec);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniFunctionDec));});
		} else {
			node = new UniFunctionDec();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniFunctionDec));});
		}
		return node;
	}

	public visitFunctiondeclarator(ctx:FunctiondeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const name = [];
		map.set("name", name);
		const params = [];
		map.set("params", params);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2143: {
						name.push(this.visit(it));
					}
					break;
					case 2145: {
						params.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniFunctionDec);
		return node;
	}

	public visitFunctionbody(ctx:FunctionbodyContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2151: {
						merge.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		let node = this.castTo(map, UniBlock);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniBlock));});
		} else {
			node = new UniBlock();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniBlock));});
		}
		return node;
	}

	public visitInitializerlist(ctx:InitializerlistContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 2177: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2179: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniExpr)
		return node;
	}

	public visitBracedinitlist(ctx:BracedinitlistContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const items = [];
		map.set("items", items);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2186: {
						items.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniArray);
		return node;
	}

	public visitMyclassname(ctx:MyclassnameContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, String);
		return node;
	}

	public visitClassspecifier(ctx:ClassspecifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const members = [];
		map.set("members", members);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2200: {
						merge.push(this.visit(it));
					}
					break;
					case 2201: {
						members.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		let node = this.castTo(map, UniClassDec);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		} else {
			node = new UniClassDec();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		}
		return node;
	}

	public visitClassbody(ctx:ClassbodyContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 2204: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniVariableDec)
		return node;
	}

	public visitClasshead(ctx:ClassheadContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const className = [];
		map.set("className", className);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2216: {
						className.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniClassDec);
		return node;
	}

	public visitMemberspecification(ctx:MemberspecificationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 2241: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2242: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2245: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2247: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniVariableDec)
		return node;
	}

	public visitMembervariabledeclarationstatement(ctx:MembervariabledeclarationstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2261: {
						ret.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
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

	public visitMembervariabledeclaration(ctx:MembervariabledeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const variables = [];
		map.set("variables", variables);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const type = [];
		map.set("type", type);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2267: {
						modifiers.push(this.visit(it));
					}
					break;
					case 2270: {
						type.push(this.visit(it));
					}
					break;
					case 2271: {
						type.push(this.visit(it));
					}
					break;
					case 2277: {
						variables.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniVariableDec);
		return node;
	}

	public visitMemberdeclaratorlist(ctx:MemberdeclaratorlistContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 2281: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 368: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2285: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				} else if (it instanceof TerminalNode) {
					switch (it.symbol.type) {
						default: {
							none.push(this.visit(it));
						}
						break;
					}
				}
			}
		}
		const node = this.castToList(map, UniVariableDef)
		return node;
	}

	public visitMemberdeclarator(ctx:MemberdeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const typeSuffix = [];
		map.set("typeSuffix", typeSuffix);
		const name = [];
		map.set("name", name);
		const value = [];
		map.set("value", value);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2291: {
						name.push(this.visit(it));
					}
					break;
					case 2292: {
						typeSuffix.push(this.visit(it));
					}
					break;
					case 2298: {
						name.push(this.visit(it));
					}
					break;
					case 2300: {
						value.push(this.visit(it));
					}
					break;
					case 2303: {
						name.push(this.visit(it));
					}
					break;
					case 2304: {
						value.push(this.visit(it));
					}
					break;
					case 2314: {
						value.push(this.visit(it));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case CPP14Parser.Identifier: {
						name.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniVariableDef);
		return node;
	}

	public visitIntegerliteral(ctx:IntegerliteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.childCount;
			for (let i = 0; i < n;++i) {
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

	public visitCharacterliteral(ctx:CharacterliteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.childCount;
			for (let i = 0; i < n;++i) {
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

	public visitFloatingliteral(ctx:FloatingliteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.childCount;
			for (let i = 0; i < n;++i) {
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

	public visitStringliteral(ctx:StringliteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.childCount;
			for (let i = 0; i < n;++i) {
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

	public visitBooleanliteral(ctx:BooleanliteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.childCount;
			for (let i = 0; i < n;++i) {
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
