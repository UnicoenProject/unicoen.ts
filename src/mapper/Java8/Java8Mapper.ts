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
ExpressionNameContext,
CompilationUnitContext,
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
ClassInstanceCreationExpression_lfno_primaryContext,
MethodInvocationContext,
ReceiversContext,
ReceiverContext,
IdentContext,
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
	} from "./Java8Parser";

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

export class Java8Mapper implements Java8Visitor<any> {

	private isDebugMode:boolean = false;
	private parser:Java8Parser;
	private	_comments:Comment[] = [];
	private _lastNode:UniNode;
	private _nextTokenIndex:number;
	private _stream:CommonTokenStream;

	setIsDebugMode(isDebugMode:boolean) {
		this.isDebugMode = isDebugMode;
	}
	
	getRawTree(code) {
		const chars = new ANTLRInputStream(code);
		const lexer = new Java8Lexer(chars);
		const tokens = new CommonTokenStream(lexer);
		this.parser = new Java8Parser(tokens);
		const tree = this.parser.translationunit();
		return [tree, this.parser];
	}

	parse(code:string) {
		return this.parseCore(new ANTLRInputStream(code));
	}

	
	parseCore(chars:ANTLRInputStream) {
		const lexer = new Java8Lexer(chars);
		const tokens = new CommonTokenStream(lexer);
		this.parser = new Java8Parser(tokens);
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
	
	def parseFile(String path, Function1<Java8Parser, ParseTree> parseAction) {
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
					case 562: {
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

	public visitIntegerLiteral(ctx:IntegerLiteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.childCount;
			for (let i = 0; i < n;++i) {
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

	public visitFloatingPointLiteral(ctx:FloatingPointLiteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.childCount;
			for (let i = 0; i < n;++i) {
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

	public visitBooleanLiteral(ctx:BooleanLiteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.childCount;
			for (let i = 0; i < n;++i) {
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

	public visitStringLiteral(ctx:StringLiteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.childCount;
			for (let i = 0; i < n;++i) {
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

	public visitPrimitiveType(ctx:PrimitiveTypeContext) {
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

	public visitClassOrInterfaceType(ctx:ClassOrInterfaceTypeContext) {
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

	public visitClassType(ctx:ClassTypeContext) {
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

	public visitInterfaceType(ctx:InterfaceTypeContext) {
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

	public visitExpressionName(ctx:ExpressionNameContext) {
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
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case Java8Parser.Identifier: {
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
		const node = this.castTo(map, UniIdent);
		return node;
	}

	public visitCompilationUnit(ctx:CompilationUnitContext) {
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
						case 826: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 829: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 835: {
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

	public visitTypeDeclaration(ctx:TypeDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 890: {
						merge.push(this.visit(it));
					}
					break;
					case 891: {
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
		let node = this.castTo(map, UniClassDec);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		} else {
			node = new UniClassDec();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		}
		return node;
	}

	public visitClassDeclaration(ctx:ClassDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 895: {
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
		let node = this.castTo(map, UniClassDec);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		} else {
			node = new UniClassDec();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		}
		return node;
	}

	public visitNormalClassDeclaration(ctx:NormalClassDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const interfaces = [];
		map.set("interfaces", interfaces);
		const superClass = [];
		map.set("superClass", superClass);
		const members = [];
		map.set("members", members);
		const className = [];
		map.set("className", className);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 899: {
						modifiers.push(this.visit(it));
					}
					break;
					case 901: {
						className.push(this.visit(it));
					}
					break;
					case 905: {
						superClass.push(this.visit(it));
					}
					break;
					case 908: {
						interfaces.push(this.visit(it));
					}
					break;
					case 911: {
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

	public visitClassName(ctx:ClassNameContext) {
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

	public visitClassModifiers(ctx:ClassModifiersContext) {
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
						case 915: {
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
		const node = this.castToList(map, String)
		return node;
	}

	public visitClassModifier(ctx:ClassModifierContext) {
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

	public visitSuperclass(ctx:SuperclassContext) {
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
						case 944: {
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
		const node = this.castToList(map, String)
		return node;
	}

	public visitSuperinterfaces(ctx:SuperinterfacesContext) {
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
						case 947: {
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
		const node = this.castToList(map, String)
		return node;
	}

	public visitInterfaceTypeList(ctx:InterfaceTypeListContext) {
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
						case 949: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 951: {
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
		const node = this.castToList(map, String)
		return node;
	}

	public visitClassBody(ctx:ClassBodyContext) {
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
						case 958: {
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
		const node = this.castToList(map, UniDecralation)
		return node;
	}

	public visitClassBodyDeclaration(ctx:ClassBodyDeclarationContext) {
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
						case 966: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 969: {
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
		const node = this.castToList(map, UniDecralation)
		return node;
	}

	public visitClassMemberDeclaration(ctx:ClassMemberDeclarationContext) {
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
						case 972: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 973: {
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
		const node = this.castToList(map, UniDecralation)
		return node;
	}

	public visitFieldDeclaration(ctx:FieldDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const type = [];
		map.set("type", type);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 979: {
							modifiers.push(this.visit(it));
						}
						break;
						case 980: {
							type.push(this.visit(it));
						}
						break;
						case 981: {
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

	public visitFieldModifiers(ctx:FieldModifiersContext) {
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
						case 984: {
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
		const node = this.castToList(map, String)
		return node;
	}

	public visitFieldModifier(ctx:FieldModifierContext) {
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
						case 1000: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1002: {
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
		const name = [];
		map.set("name", name);
		const value = [];
		map.set("value", value);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1008: {
						name.push(this.visit(it));
					}
					break;
					case 1010: {
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
		const node = this.castTo(map, UniVariableDef);
		return node;
	}

	public visitVariableDeclaratorId(ctx:VariableDeclaratorIdContext) {
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

	public visitUnannType(ctx:UnannTypeContext) {
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

	public visitMethodDeclaration(ctx:MethodDeclarationContext) {
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
					case 1097: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1103: {
						merge.push(this.visit(it));
					}
					break;
					case 1104: {
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

	public visitMethodModifier(ctx:MethodModifierContext) {
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

	public visitMethodHeader(ctx:MethodHeaderContext) {
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
					case 1118: {
						returnType.push(this.visit(it));
					}
					break;
					case 1119: {
						merge.push(this.visit(it));
					}
					break;
					case 1130: {
						returnType.push(this.visit(it));
					}
					break;
					case 1131: {
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

	public visitResult(ctx:ResultContext) {
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

	public visitMethodDeclarator(ctx:MethodDeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const name = [];
		map.set("name", name);
		const params = [];
		map.set("params", params);
		const returnType = [];
		map.set("returnType", returnType);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1141: {
						name.push(this.visit(it));
					}
					break;
					case 1143: {
						params.push(this.visit(it));
					}
					break;
					case 1147: {
						returnType.push(this.visit(it));
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

	public visitMethodName(ctx:MethodNameContext) {
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

	public visitFormalParameterList(ctx:FormalParameterListContext) {
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
						case 1152: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1154: {
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
		const node = this.castToList(map, UniParam)
		return node;
	}

	public visitFormalParameters(ctx:FormalParametersContext) {
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
						case 1159: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1161: {
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

	public visitFormalParameter(ctx:FormalParameterContext) {
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
					case 1177: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1183: {
						type.push(this.visit(it));
					}
					break;
					case 1184: {
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

	public visitParameterDeclaratorIds(ctx:ParameterDeclaratorIdsContext) {
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
						case 1186: {
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

	public visitParameterDeclaratorId(ctx:ParameterDeclaratorIdContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const typeSuffix = [];
		map.set("typeSuffix", typeSuffix);
		const name = [];
		map.set("name", name);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1188: {
						name.push(this.visit(it));
					}
					break;
					case 1189: {
						typeSuffix.push(this.visit(it));
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
		const node = this.castTo(map, UniVariableDef);
		return node;
	}

	public visitParameterName(ctx:ParameterNameContext) {
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

	public visitMethodBody(ctx:MethodBodyContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1245: {
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

	public visitConstructorDeclaration(ctx:ConstructorDeclarationContext) {
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
					case 1254: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1260: {
						merge.push(this.visit(it));
					}
					break;
					case 1264: {
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

	public visitConstructorModifier(ctx:ConstructorModifierContext) {
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

	public visitConstructorDeclarator(ctx:ConstructorDeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const args = [];
		map.set("args", args);
		const name = [];
		map.set("name", name);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1275: {
						name.push(this.visit(it));
					}
					break;
					case 1277: {
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
		const node = this.castTo(map, UniFunctionDec);
		return node;
	}

	public visitSimpleTypeName(ctx:SimpleTypeNameContext) {
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

	public visitInterfaceDeclaration(ctx:InterfaceDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1400: {
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
		let node = this.castTo(map, UniClassDec);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		} else {
			node = new UniClassDec();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		}
		return node;
	}

	public visitNormalInterfaceDeclaration(ctx:NormalInterfaceDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const interfaces = [];
		map.set("interfaces", interfaces);
		const members = [];
		map.set("members", members);
		const className = [];
		map.set("className", className);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1404: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1406: {
						className.push(this.visit(it));
					}
					break;
					case 1410: {
						interfaces.push(this.visit(it));
					}
					break;
					case 1413: {
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

	public visitInterfaceModifiers(ctx:InterfaceModifiersContext) {
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
						case 1415: {
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
		const node = this.castToList(map, String)
		return node;
	}

	public visitInterfaceName(ctx:InterfaceNameContext) {
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

	public visitInterfaceModifier(ctx:InterfaceModifierContext) {
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

	public visitExtendsInterfaces(ctx:ExtendsInterfacesContext) {
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
						case 1433: {
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
		const node = this.castToList(map, String)
		return node;
	}

	public visitInterfaceBody(ctx:InterfaceBodyContext) {
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
						case 1436: {
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
		const node = this.castToList(map, UniDecralation)
		return node;
	}

	public visitInterfaceMemberDeclaration(ctx:InterfaceMemberDeclarationContext) {
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
						case 1444: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1445: {
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
		const node = this.castToList(map, UniDecralation)
		return node;
	}

	public visitConstantDeclaration(ctx:ConstantDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const type = [];
		map.set("type", type);
		const n = ctx.childCount;
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1451: {
							modifiers.push(this.visit(it));
						}
						break;
						case 1452: {
							type.push(this.visit(it));
						}
						break;
						case 1453: {
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

	public visitConstantModifiers(ctx:ConstantModifiersContext) {
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
						case 1456: {
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
		const node = this.castToList(map, String)
		return node;
	}

	public visitConstantModifier(ctx:ConstantModifierContext) {
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

	public visitInterfaceMethodDeclaration(ctx:InterfaceMethodDeclarationContext) {
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
					case 1468: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1469: {
						merge.push(this.visit(it));
					}
					break;
					case 1470: {
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

	public visitInterfaceMethodModifiers(ctx:InterfaceMethodModifiersContext) {
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
						case 1472: {
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
		const node = this.castToList(map, String)
		return node;
	}

	public visitInterfaceMethodModifier(ctx:InterfaceMethodModifierContext) {
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

	public visitArrayInitializer(ctx:ArrayInitializerContext) {
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
					case 1596: {
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

	public visitVariableInitializerList(ctx:VariableInitializerListContext) {
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
						case 1604: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1606: {
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

	public visitBlock(ctx:BlockContext) {
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
					case 1613: {
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

	public visitBlockStatements(ctx:BlockStatementsContext) {
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
						case 1618: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1619: {
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

	public visitLocalVariableDeclarationStatement(ctx:LocalVariableDeclarationStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1630: {
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
		let node = this.castTo(map, UniVariableDec);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniVariableDec));});
		} else {
			node = new UniVariableDec();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniVariableDec));});
		}
		return node;
	}

	public visitLocalVariableDeclaration(ctx:LocalVariableDeclarationContext) {
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
					case 1633: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1639: {
						type.push(this.visit(it));
					}
					break;
					case 1640: {
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

	public visitExpressionStatement(ctx:ExpressionStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1681: {
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

	public visitIfThenStatement(ctx:IfThenStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const trueStatement = [];
		map.set("trueStatement", trueStatement);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1695: {
						cond.push(this.visit(it));
					}
					break;
					case 1697: {
						trueStatement.push(this.visit(it));
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

	public visitIfThenElseStatement(ctx:IfThenElseStatementContext) {
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
					case 1701: {
						cond.push(this.visit(it));
					}
					break;
					case 1703: {
						trueStatement.push(this.visit(it));
					}
					break;
					case 1705: {
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

	public visitIfThenElseStatementNoShortIf(ctx:IfThenElseStatementNoShortIfContext) {
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
					case 1709: {
						cond.push(this.visit(it));
					}
					break;
					case 1711: {
						trueStatement.push(this.visit(it));
					}
					break;
					case 1713: {
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

	public visitWhileStatement(ctx:WhileStatementContext) {
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
					case 1774: {
						cond.push(this.visit(it));
					}
					break;
					case 1776: {
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

	public visitWhileStatementNoShortIf(ctx:WhileStatementNoShortIfContext) {
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
					case 1780: {
						cond.push(this.visit(it));
					}
					break;
					case 1782: {
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

	public visitBasicForStatement(ctx:BasicForStatementContext) {
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
					case 1802: {
						init.push(this.visit(it));
					}
					break;
					case 1806: {
						cond.push(this.visit(it));
					}
					break;
					case 1810: {
						step.push(this.visit(it));
					}
					break;
					case 1814: {
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

	public visitBasicForStatementNoShortIf(ctx:BasicForStatementNoShortIfContext) {
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
					case 1818: {
						init.push(this.visit(it));
					}
					break;
					case 1822: {
						cond.push(this.visit(it));
					}
					break;
					case 1826: {
						step.push(this.visit(it));
					}
					break;
					case 1830: {
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

	public visitClassInstanceCreationExpression_lfno_primary(ctx:ClassInstanceCreationExpression_lfno_primaryContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const args = [];
		map.set("args", args);
		const type = [];
		map.set("type", type);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2295: {
						args.push(this.visit(it));
					}
					break;
					case 2319: {
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
					case Java8Parser.Identifier: {
						type.push(this.flatten(this.visit(it)));
					}
					break;
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			}
		}
		const node = this.castTo(map, UniNew);
		return node;
	}

	public visitMethodInvocation(ctx:MethodInvocationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const args = [];
		map.set("args", args);
		const receiver = [];
		map.set("receiver", receiver);
		const methodName = [];
		map.set("methodName", methodName);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2421: {
						methodName.push(this.visit(it));
					}
					break;
					case 2423: {
						args.push(this.visit(it));
					}
					break;
					case 2428: {
						receiver.push(this.visit(it));
					}
					break;
					case 2433: {
						methodName.push(this.visit(it));
					}
					break;
					case 2435: {
						args.push(this.visit(it));
					}
					break;
					case 2440: {
						receiver.push(this.visit(it));
					}
					break;
					case 2445: {
						methodName.push(this.visit(it));
					}
					break;
					case 2447: {
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

	public visitReceivers(ctx:ReceiversContext) {
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
					case 2491: {
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

	public visitReceiver(ctx:ReceiverContext) {
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
						case 2493: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2495: {
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
		const node = this.castToList(map, UniIdent)
		return node;
	}

	public visitIdent(ctx:IdentContext) {
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
					default: {
						none.push(this.visit(it));
					}
					break;
				}
			} else if (it instanceof TerminalNode) {
				switch (it.symbol.type) {
					case Java8Parser.Identifier: {
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
		const node = this.castTo(map, UniIdent);
		return node;
	}

	public visitArgumentList(ctx:ArgumentListContext) {
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
						case 2572: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2574: {
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

	public visitArrayCreationExpression(ctx:ArrayCreationExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const elementsNum = [];
		map.set("elementsNum", elementsNum);
		const type = [];
		map.set("type", type);
		const value = [];
		map.set("value", value);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2678: {
						type.push(this.visit(it));
					}
					break;
					case 2679: {
						elementsNum.push(this.visit(it));
					}
					break;
					case 2684: {
						type.push(this.visit(it));
					}
					break;
					case 2685: {
						elementsNum.push(this.visit(it));
					}
					break;
					case 2690: {
						type.push(this.visit(it));
					}
					break;
					case 2692: {
						value.push(this.visit(it));
					}
					break;
					case 2695: {
						type.push(this.visit(it));
					}
					break;
					case 2697: {
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
		const node = this.castTo(map, UniNewArray);
		return node;
	}

	public visitDimExprs(ctx:DimExprsContext) {
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
						case 2701: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2702: {
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

	public visitDimExpr(ctx:DimExprContext) {
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
						case 2715: {
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

	public visitAssignment(ctx:AssignmentContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
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
					case 2756: {
						left.push(this.visit(it));
					}
					break;
					case 2757: {
						operator.push(this.visit(it));
					}
					break;
					case 2758: {
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
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitAssignmentOperator(ctx:AssignmentOperatorContext) {
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

	public visitConditionalExpression(ctx:ConditionalExpressionContext) {
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
					case 2767: {
						ret.push(this.visit(it));
					}
					break;
					case 2768: {
						cond.push(this.visit(it));
					}
					break;
					case 2770: {
						trueExpr.push(this.visit(it));
					}
					break;
					case 2772: {
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

	public visitConditionalOrExpression(ctx:ConditionalOrExpressionContext) {
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
					case 2779: {
						ret.push(this.visit(it));
					}
					break;
					case 476: {
						left.push(this.visit(it));
					}
					break;
					case 2782: {
						operator.push(this.visit(it));
					}
					break;
					case 2783: {
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

	public visitConditionalAndExpression(ctx:ConditionalAndExpressionContext) {
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
					case 2793: {
						ret.push(this.visit(it));
					}
					break;
					case 480: {
						left.push(this.visit(it));
					}
					break;
					case 2796: {
						operator.push(this.visit(it));
					}
					break;
					case 2797: {
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

	public visitInclusiveOrExpression(ctx:InclusiveOrExpressionContext) {
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
					case 2807: {
						ret.push(this.visit(it));
					}
					break;
					case 484: {
						left.push(this.visit(it));
					}
					break;
					case 2810: {
						operator.push(this.visit(it));
					}
					break;
					case 2811: {
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

	public visitExclusiveOrExpression(ctx:ExclusiveOrExpressionContext) {
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
					case 2821: {
						ret.push(this.visit(it));
					}
					break;
					case 488: {
						left.push(this.visit(it));
					}
					break;
					case 2824: {
						operator.push(this.visit(it));
					}
					break;
					case 2825: {
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

	public visitAndExpression(ctx:AndExpressionContext) {
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
					case 2835: {
						ret.push(this.visit(it));
					}
					break;
					case 492: {
						left.push(this.visit(it));
					}
					break;
					case 2838: {
						operator.push(this.visit(it));
					}
					break;
					case 2839: {
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

	public visitEqualityExpression(ctx:EqualityExpressionContext) {
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
					case 2851: {
						ret.push(this.visit(it));
					}
					break;
					case 498: {
						left.push(this.visit(it));
					}
					break;
					case 2854: {
						operator.push(this.visit(it));
					}
					break;
					case 2855: {
						right.push(this.visit(it));
					}
					break;
					case 2858: {
						operator.push(this.visit(it));
					}
					break;
					case 2859: {
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

	public visitRelationalExpression(ctx:RelationalExpressionContext) {
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
					case 2877: {
						ret.push(this.visit(it));
					}
					break;
					case 510: {
						left.push(this.visit(it));
					}
					break;
					case 2880: {
						operator.push(this.visit(it));
					}
					break;
					case 2881: {
						right.push(this.visit(it));
					}
					break;
					case 2884: {
						operator.push(this.visit(it));
					}
					break;
					case 2885: {
						right.push(this.visit(it));
					}
					break;
					case 2888: {
						operator.push(this.visit(it));
					}
					break;
					case 2889: {
						right.push(this.visit(it));
					}
					break;
					case 2892: {
						operator.push(this.visit(it));
					}
					break;
					case 2893: {
						right.push(this.visit(it));
					}
					break;
					case 2896: {
						operator.push(this.visit(it));
					}
					break;
					case 2897: {
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

	public visitShiftExpression(ctx:ShiftExpressionContext) {
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
					case 2915: {
						ret.push(this.visit(it));
					}
					break;
					case 518: {
						left.push(this.visit(it));
					}
					break;
					case 2918: {
						operator.push(this.visit(it));
					}
					break;
					case 2919: {
						right.push(this.visit(it));
					}
					break;
					case 2922: {
						operator.push(this.visit(it));
					}
					break;
					case 2923: {
						right.push(this.visit(it));
					}
					break;
					case 2926: {
						operator.push(this.visit(it));
					}
					break;
					case 2927: {
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

	public visitAdditiveExpression(ctx:AdditiveExpressionContext) {
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
					case 2935: {
						ret.push(this.visit(it));
					}
					break;
					case 520: {
						left.push(this.visit(it));
					}
					break;
					case 2938: {
						operator.push(this.visit(it));
					}
					break;
					case 2939: {
						right.push(this.visit(it));
					}
					break;
					case 2942: {
						operator.push(this.visit(it));
					}
					break;
					case 2943: {
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

	public visitMultiplicativeExpression(ctx:MultiplicativeExpressionContext) {
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
					case 2957: {
						ret.push(this.visit(it));
					}
					break;
					case 528: {
						left.push(this.visit(it));
					}
					break;
					case 2960: {
						operator.push(this.visit(it));
					}
					break;
					case 2961: {
						right.push(this.visit(it));
					}
					break;
					case 2964: {
						operator.push(this.visit(it));
					}
					break;
					case 2965: {
						right.push(this.visit(it));
					}
					break;
					case 2968: {
						operator.push(this.visit(it));
					}
					break;
					case 2969: {
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

	public visitUnaryExpression(ctx:UnaryExpressionContext) {
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
					case 2980: {
						ret.push(this.visit(it));
					}
					break;
					case 2981: {
						ret.push(this.visit(it));
					}
					break;
					case 2982: {
						operator.push(this.visit(it));
					}
					break;
					case 2983: {
						expr.push(this.visit(it));
					}
					break;
					case 2985: {
						operator.push(this.visit(it));
					}
					break;
					case 2986: {
						expr.push(this.visit(it));
					}
					break;
					case 2988: {
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

	public visitPreIncrementExpression(ctx:PreIncrementExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const expr = [];
		map.set("expr", expr);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2993: {
						operator.push(this.visit(it));
					}
					break;
					case 2994: {
						expr.push(this.visit(it));
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
		const node = this.castTo(map, UniUnaryOp);
		return node;
	}

	public visitPreDecrementExpression(ctx:PreDecrementExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const expr = [];
		map.set("expr", expr);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2998: {
						operator.push(this.visit(it));
					}
					break;
					case 2999: {
						expr.push(this.visit(it));
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
		const node = this.castTo(map, UniUnaryOp);
		return node;
	}

	public visitUnaryExpressionNotPlusMinus(ctx:UnaryExpressionNotPlusMinusContext) {
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
					case 3005: {
						ret.push(this.visit(it));
					}
					break;
					case 3006: {
						operator.push(this.visit(it));
					}
					break;
					case 3007: {
						expr.push(this.visit(it));
					}
					break;
					case 3009: {
						operator.push(this.visit(it));
					}
					break;
					case 3010: {
						expr.push(this.visit(it));
					}
					break;
					case 3012: {
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

	public visitPostfixExpression(ctx:PostfixExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 3015: {
						ret.push(this.visit(it));
					}
					break;
					case 3016: {
						ret.push(this.visit(it));
					}
					break;
					case 3017: {
						left.push(this.visit(it));
					}
					break;
					case 3018: {
						left.push(this.visit(it));
					}
					break;
					case 3021: {
						operator.push(this.visit(it));
					}
					break;
					case 3022: {
						operator.push(this.visit(it));
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

	public visitPostIncrementExpression(ctx:PostIncrementExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const expr = [];
		map.set("expr", expr);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 3030: {
						expr.push(this.visit(it));
					}
					break;
					case 3031: {
						operator.push(this.visit(it));
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
		const node = this.castTo(map, UniUnaryOp);
		return node;
	}

	public visitPostDecrementExpression(ctx:PostDecrementExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const expr = [];
		map.set("expr", expr);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.childCount;
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 3035: {
						expr.push(this.visit(it));
					}
					break;
					case 3036: {
						operator.push(this.visit(it));
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
		const node = this.castTo(map, UniUnaryOp);
		return node;
	}

}
