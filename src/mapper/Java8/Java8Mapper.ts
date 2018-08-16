// tslint:disable
import CodeLocation from '../../node_helper/CodeLocation';
import CodeRange from '../../node_helper/CodeRange';
import UniNode from '../../node/UniNode';
import UniParam from '../../node/UniParam';
import UniEnhancedFor from '../../node/UniEnhancedFor';
import UniExpr from '../../node/UniExpr';
import UniArray from '../../node/UniArray';
import UniNumberLiteral from '../../node/UniNumberLiteral';
import UniBinOp from '../../node/UniBinOp';
import UniBlock from '../../node/UniBlock';
import UniBoolLiteral from '../../node/UniBoolLiteral';
import UniBreak from '../../node/UniBreak';
import UniCast from '../../node/UniCast';
import UniContinue from '../../node/UniContinue';
import UniClassDec from '../../node/UniClassDec';
import UniDecralation from '../../node/UniDecralation';
import UniDoWhile from '../../node/UniDoWhile';
import UniEmptyStatement from '../../node/UniEmptyStatement';
import UniFunctionDec from '../../node/UniFunctionDec';
import UniFor from '../../node/UniFor';
import UniIdent from '../../node/UniIdent';
import UniIf from '../../node/UniIf';
import UniIntLiteral from '../../node/UniIntLiteral';		
import UniDoubleLiteral from '../../node/UniDoubleLiteral';
import UniCharacterLiteral from '../../node/UniCharacterLiteral';
import UniWhile from '../../node/UniWhile';
import UniUnaryOp from '../../node/UniUnaryOp';
import UniTernaryOp from '../../node/UniTernaryOp';
import UniNewArray from '../../node/UniNewArray';
import UniNew from '../../node/UniNew';
import UniStatement from '../../node/UniStatement';
import UniStringLiteral from '../../node/UniStringLiteral';
import UniReturn from '../../node/UniReturn';
import UniVariableDec from '../../node/UniVariableDec';
import UniVariableDef from '../../node/UniVariableDef';
import UniSwitchUnit from '../../node/UniSwitchUnit';
import UniSwitch from '../../node/UniSwitch';
import UniMethodCall from '../../node/UniMethodCall';
import UniProgram from '../../node/UniProgram';

import { InputStream, CommonTokenStream, ParserRuleContext } from 'antlr4';
import { Token }from 'antlr4/Token';
import { RuleContext }from 'antlr4/RuleContext';
import { TerminalNode, TerminalNodeImpl, RuleNode, ParseTree }from 'antlr4/tree/Tree';
import { Java8Lexer } from './Java8Lexer';
import { Java8Parser } from './Java8Parser';
import { Java8Visitor } from './Java8Visitor';

class Comment {
	constructor(readonly contents:string[], public parent:ParseTree){
	}
}

export default class Java8Mapper extends Java8Visitor {

	private isDebugMode:boolean = false;
	private parser:Java8Parser;
	private _comments:Comment[] = [];
	private _lastNode:UniNode;
	private _nextTokenIndex:number;
	private _stream:CommonTokenStream;

	setIsDebugMode(isDebugMode:boolean) {
		this.isDebugMode = isDebugMode;
	}
	
	getRawTree(code) {
		const chars = new InputStream(code);
		const lexer = new Java8Lexer(chars);
		const tokens = new CommonTokenStream(lexer);
		this.parser = new Java8Parser(tokens);
		this.parser.buildParseTrees = true;
		const tree = this.parser.translationunit();
		return [tree, this.parser];
	}

	parse(code) {
		return this.parseCore(new InputStream(code));
	}

	
	parseCore(chars) {
		const lexer = new Java8Lexer(chars);
		const tokens = new CommonTokenStream(lexer);
		this.parser = new Java8Parser(tokens);
		this.parser.buildParseTrees = true;
		const tree = this.parser.compilationUnit();

		this._comments = [];
		this._stream = tokens;
		this._lastNode = null;
		this._nextTokenIndex = 0;
		const ret = new UniProgram(this.visit(tree));
		ret.codeRange = ret.block.codeRange;
		
		if (this._lastNode !== null) {
			const count = this._stream.tokens.length - 1
			for (var i = this._nextTokenIndex; i < count; i++) {
				const hiddenToken = this._stream.tokens[i]; // Includes skipped tokens (maybe)
				if (this._lastNode.comments === null) {
					this._lastNode.comments = [];
				}
				this._lastNode.comments += hiddenToken.text
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
			if(tree instanceof RuleContext) {
				const start = tree.start;
				const begin = new CodeLocation(start.column,start.line);
				const stop = tree.stop;
				const endPos = stop.column;
				const length = 1 + stop.stop - stop.start;
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
				const hiddenToken = this._stream.tokens[i]; // Includes skipped tokens (maybe)
				if (this._lastNode !== null && this._stream.tokens[this._nextTokenIndex - 1].line == hiddenToken.line) {
					if (this._lastNode.comments === null) {
						this._lastNode.comments = [];
					}
					this._lastNode.comments += hiddenToken.text;
				} else {
					contents.push(hiddenToken.text);
				}
			}
			const count2 = this._stream.tokens.length - 1;
			for (i = count + 1; i < count2 && this._stream.tokens[i].channel == Token.HIDDEN_CHANNEL &&
				this._stream.tokens[count].line == this._stream.tokens[i].line; i++) {
				contents.push(this._stream.tokens[i].text);
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

	public visitTranslationunit(ctx:Java8Parser.TranslationunitContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const body = [];
		map.set("body", body);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 554: {
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
		let node = this.castTo(map, UniBlock);
		return node;
	}

	public visitIntegerLiteral(ctx:Java8Parser.IntegerLiteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.getChildCount();
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);	
				if (it instanceof TerminalNodeImpl) {
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

	public visitFloatingPointLiteral(ctx:Java8Parser.FloatingPointLiteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.getChildCount();
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);	
				if (it instanceof TerminalNodeImpl) {
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

	public visitBooleanLiteral(ctx:Java8Parser.BooleanLiteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.getChildCount();
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);	
				if (it instanceof TerminalNodeImpl) {
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

	public visitStringLiteral(ctx:Java8Parser.StringLiteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.getChildCount();
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);	
				if (it instanceof TerminalNodeImpl) {
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

	public visitPrimitiveType(ctx:Java8Parser.PrimitiveTypeContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitClassOrInterfaceType(ctx:Java8Parser.ClassOrInterfaceTypeContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitClassType(ctx:Java8Parser.ClassTypeContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitInterfaceType(ctx:Java8Parser.InterfaceTypeContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitDims(ctx:Java8Parser.DimsContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitExpressionName(ctx:Java8Parser.ExpressionNameContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const name = [];
		map.set("name", name);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, UniIdent);
		return node;
	}

	public visitCompilationUnit(ctx:Java8Parser.CompilationUnitContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 818: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 821: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 827: {
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

	public visitTypeDeclaration(ctx:Java8Parser.TypeDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 882: {
						merge.push(this.visit(it));
					}
					break;
					case 883: {
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

	public visitClassDeclaration(ctx:Java8Parser.ClassDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 887: {
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

	public visitNormalClassDeclaration(ctx:Java8Parser.NormalClassDeclarationContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 891: {
						modifiers.push(this.visit(it));
					}
					break;
					case 893: {
						className.push(this.visit(it));
					}
					break;
					case 897: {
						superClass.push(this.visit(it));
					}
					break;
					case 900: {
						interfaces.push(this.visit(it));
					}
					break;
					case 903: {
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
		return node;
	}

	public visitClassName(ctx:Java8Parser.ClassNameContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitClassModifiers(ctx:Java8Parser.ClassModifiersContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 907: {
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

	public visitClassModifier(ctx:Java8Parser.ClassModifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitSuperclass(ctx:Java8Parser.SuperclassContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 936: {
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

	public visitSuperinterfaces(ctx:Java8Parser.SuperinterfacesContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 939: {
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

	public visitInterfaceTypeList(ctx:Java8Parser.InterfaceTypeListContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 941: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 943: {
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

	public visitClassBody(ctx:Java8Parser.ClassBodyContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 950: {
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

	public visitClassBodyDeclaration(ctx:Java8Parser.ClassBodyDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
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
						case 961: {
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

	public visitClassMemberDeclaration(ctx:Java8Parser.ClassMemberDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 964: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 965: {
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

	public visitFieldDeclaration(ctx:Java8Parser.FieldDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const type = [];
		map.set("type", type);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 971: {
							modifiers.push(this.visit(it));
						}
						break;
						case 972: {
							type.push(this.visit(it));
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
		const node = this.castToList(map, UniVariableDec)
		return node;
	}

	public visitFieldModifiers(ctx:Java8Parser.FieldModifiersContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 976: {
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

	public visitFieldModifier(ctx:Java8Parser.FieldModifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitVariableDeclaratorList(ctx:Java8Parser.VariableDeclaratorListContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 992: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 994: {
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

	public visitVariableDeclarator(ctx:Java8Parser.VariableDeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const name = [];
		map.set("name", name);
		const value = [];
		map.set("value", value);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1000: {
						name.push(this.visit(it));
					}
					break;
					case 1002: {
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
		let node = this.castTo(map, UniVariableDef);
		return node;
	}

	public visitVariableDeclaratorId(ctx:Java8Parser.VariableDeclaratorIdContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitUnannType(ctx:Java8Parser.UnannTypeContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitMethodDeclaration(ctx:Java8Parser.MethodDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const block = [];
		map.set("block", block);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1089: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1095: {
						merge.push(this.visit(it));
					}
					break;
					case 1096: {
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

	public visitMethodModifier(ctx:Java8Parser.MethodModifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitMethodHeader(ctx:Java8Parser.MethodHeaderContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const returnType = [];
		map.set("returnType", returnType);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1110: {
						returnType.push(this.visit(it));
					}
					break;
					case 1111: {
						merge.push(this.visit(it));
					}
					break;
					case 1122: {
						returnType.push(this.visit(it));
					}
					break;
					case 1123: {
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

	public visitResult(ctx:Java8Parser.ResultContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitMethodDeclarator(ctx:Java8Parser.MethodDeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const args = [];
		map.set("args", args);
		const methodName = [];
		map.set("methodName", methodName);
		const returnType = [];
		map.set("returnType", returnType);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1133: {
						methodName.push(this.visit(it));
					}
					break;
					case 1135: {
						args.push(this.visit(it));
					}
					break;
					case 1139: {
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
		let node = this.castTo(map, UniFunctionDec);
		return node;
	}

	public visitMethodName(ctx:Java8Parser.MethodNameContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitFormalParameterList(ctx:Java8Parser.FormalParameterListContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1144: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1146: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1148: {
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

	public visitFormalParameters(ctx:Java8Parser.FormalParametersContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1151: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1153: {
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

	public visitFormalParameter(ctx:Java8Parser.FormalParameterContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const type = [];
		map.set("type", type);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1175: {
						type.push(this.visit(it));
					}
					break;
					case 1176: {
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
		let node = this.castTo(map, UniParam);
		if(typeof node === 'object' && 'merge' in node){
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniParam));});
		} else {
			node = new UniParam();
			merge.forEach((it:any) => { node.merge(this.castTo(it, UniParam));});
		}
		return node;
	}

	public visitParameterDeclaratorId(ctx:Java8Parser.ParameterDeclaratorIdContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const name = [];
		map.set("name", name);
		const type = [];
		map.set("type", type);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1178: {
						name.push(this.visit(it));
					}
					break;
					case 1179: {
						type.push(this.visit(it));
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
		let node = this.castTo(map, UniParam);
		return node;
	}

	public visitParameterName(ctx:Java8Parser.ParameterNameContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitMethodBody(ctx:Java8Parser.MethodBodyContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1235: {
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

	public visitConstructorDeclaration(ctx:Java8Parser.ConstructorDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const block = [];
		map.set("block", block);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1244: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1250: {
						merge.push(this.visit(it));
					}
					break;
					case 1254: {
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

	public visitConstructorModifier(ctx:Java8Parser.ConstructorModifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitConstructorDeclarator(ctx:Java8Parser.ConstructorDeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const args = [];
		map.set("args", args);
		const methodName = [];
		map.set("methodName", methodName);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1265: {
						methodName.push(this.visit(it));
					}
					break;
					case 1267: {
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
		let node = this.castTo(map, UniFunctionDec);
		return node;
	}

	public visitSimpleTypeName(ctx:Java8Parser.SimpleTypeNameContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitInterfaceDeclaration(ctx:Java8Parser.InterfaceDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1390: {
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

	public visitNormalInterfaceDeclaration(ctx:Java8Parser.NormalInterfaceDeclarationContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1394: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1396: {
						className.push(this.visit(it));
					}
					break;
					case 1400: {
						interfaces.push(this.visit(it));
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
		let node = this.castTo(map, UniClassDec);
		return node;
	}

	public visitInterfaceModifiers(ctx:Java8Parser.InterfaceModifiersContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1405: {
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

	public visitInterfaceName(ctx:Java8Parser.InterfaceNameContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitInterfaceModifier(ctx:Java8Parser.InterfaceModifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitExtendsInterfaces(ctx:Java8Parser.ExtendsInterfacesContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1423: {
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

	public visitInterfaceBody(ctx:Java8Parser.InterfaceBodyContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1426: {
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

	public visitInterfaceMemberDeclaration(ctx:Java8Parser.InterfaceMemberDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1434: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1435: {
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

	public visitConstantDeclaration(ctx:Java8Parser.ConstantDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const type = [];
		map.set("type", type);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1441: {
							modifiers.push(this.visit(it));
						}
						break;
						case 1442: {
							type.push(this.visit(it));
						}
						break;
						case 1443: {
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

	public visitConstantModifiers(ctx:Java8Parser.ConstantModifiersContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1446: {
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

	public visitConstantModifier(ctx:Java8Parser.ConstantModifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitInterfaceMethodDeclaration(ctx:Java8Parser.InterfaceMethodDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const block = [];
		map.set("block", block);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1458: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1459: {
						merge.push(this.visit(it));
					}
					break;
					case 1460: {
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

	public visitInterfaceMethodModifiers(ctx:Java8Parser.InterfaceMethodModifiersContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1462: {
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

	public visitInterfaceMethodModifier(ctx:Java8Parser.InterfaceMethodModifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitArrayInitializer(ctx:Java8Parser.ArrayInitializerContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const items = [];
		map.set("items", items);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1586: {
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
		let node = this.castTo(map, UniArray);
		return node;
	}

	public visitVariableInitializerList(ctx:Java8Parser.VariableInitializerListContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1594: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1596: {
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

	public visitBlock(ctx:Java8Parser.BlockContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const body = [];
		map.set("body", body);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1603: {
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
		let node = this.castTo(map, UniBlock);
		return node;
	}

	public visitBlockStatements(ctx:Java8Parser.BlockStatementsContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1608: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1609: {
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

	public visitLocalVariableDeclarationStatement(ctx:Java8Parser.LocalVariableDeclarationStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1620: {
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

	public visitLocalVariableDeclaration(ctx:Java8Parser.LocalVariableDeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const variables = [];
		map.set("variables", variables);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const type = [];
		map.set("type", type);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1623: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1629: {
						type.push(this.visit(it));
					}
					break;
					case 1630: {
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
		let node = this.castTo(map, UniVariableDec);
		return node;
	}

	public visitExpressionStatement(ctx:Java8Parser.ExpressionStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1671: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitIfThenStatement(ctx:Java8Parser.IfThenStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const trueStatement = [];
		map.set("trueStatement", trueStatement);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1685: {
						cond.push(this.visit(it));
					}
					break;
					case 1687: {
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
		let node = this.castTo(map, UniIf);
		return node;
	}

	public visitIfThenElseStatement(ctx:Java8Parser.IfThenElseStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const trueStatement = [];
		map.set("trueStatement", trueStatement);
		const falseStatement = [];
		map.set("falseStatement", falseStatement);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1691: {
						cond.push(this.visit(it));
					}
					break;
					case 1693: {
						trueStatement.push(this.visit(it));
					}
					break;
					case 1695: {
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
		let node = this.castTo(map, UniIf);
		return node;
	}

	public visitIfThenElseStatementNoShortIf(ctx:Java8Parser.IfThenElseStatementNoShortIfContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const trueStatement = [];
		map.set("trueStatement", trueStatement);
		const falseStatement = [];
		map.set("falseStatement", falseStatement);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1699: {
						cond.push(this.visit(it));
					}
					break;
					case 1701: {
						trueStatement.push(this.visit(it));
					}
					break;
					case 1703: {
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
		let node = this.castTo(map, UniIf);
		return node;
	}

	public visitWhileStatement(ctx:Java8Parser.WhileStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const statement = [];
		map.set("statement", statement);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1764: {
						cond.push(this.visit(it));
					}
					break;
					case 1766: {
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
		let node = this.castTo(map, UniWhile);
		return node;
	}

	public visitWhileStatementNoShortIf(ctx:Java8Parser.WhileStatementNoShortIfContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const statement = [];
		map.set("statement", statement);
		const cond = [];
		map.set("cond", cond);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1770: {
						cond.push(this.visit(it));
					}
					break;
					case 1772: {
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
		let node = this.castTo(map, UniWhile);
		return node;
	}

	public visitBasicForStatement(ctx:Java8Parser.BasicForStatementContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1792: {
						init.push(this.visit(it));
					}
					break;
					case 1796: {
						cond.push(this.visit(it));
					}
					break;
					case 1800: {
						step.push(this.visit(it));
					}
					break;
					case 1804: {
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
		let node = this.castTo(map, UniFor);
		return node;
	}

	public visitBasicForStatementNoShortIf(ctx:Java8Parser.BasicForStatementNoShortIfContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1808: {
						init.push(this.visit(it));
					}
					break;
					case 1812: {
						cond.push(this.visit(it));
					}
					break;
					case 1816: {
						step.push(this.visit(it));
					}
					break;
					case 1820: {
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
		let node = this.castTo(map, UniFor);
		return node;
	}

	public visitClassInstanceCreationExpression_lfno_primary(ctx:Java8Parser.ClassInstanceCreationExpression_lfno_primaryContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const args = [];
		map.set("args", args);
		const type = [];
		map.set("type", type);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2285: {
						args.push(this.visit(it));
					}
					break;
					case 2309: {
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
		let node = this.castTo(map, UniNew);
		return node;
	}

	public visitArgumentList(ctx:Java8Parser.ArgumentListContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 2550: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2552: {
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

	public visitArrayCreationExpression(ctx:Java8Parser.ArrayCreationExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const elementsNum = [];
		map.set("elementsNum", elementsNum);
		const type = [];
		map.set("type", type);
		const value = [];
		map.set("value", value);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2656: {
						type.push(this.visit(it));
					}
					break;
					case 2657: {
						elementsNum.push(this.visit(it));
					}
					break;
					case 2662: {
						type.push(this.visit(it));
					}
					break;
					case 2663: {
						elementsNum.push(this.visit(it));
					}
					break;
					case 2668: {
						type.push(this.visit(it));
					}
					break;
					case 2670: {
						value.push(this.visit(it));
					}
					break;
					case 2673: {
						type.push(this.visit(it));
					}
					break;
					case 2675: {
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
		let node = this.castTo(map, UniNewArray);
		return node;
	}

	public visitDimExprs(ctx:Java8Parser.DimExprsContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 2679: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2680: {
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

	public visitDimExpr(ctx:Java8Parser.DimExprContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 2693: {
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

	public visitAssignment(ctx:Java8Parser.AssignmentContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const left = [];
		map.set("left", left);
		const right = [];
		map.set("right", right);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2734: {
						left.push(this.visit(it));
					}
					break;
					case 2735: {
						operator.push(this.visit(it));
					}
					break;
					case 2736: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitAssignmentOperator(ctx:Java8Parser.AssignmentOperatorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const n = ctx.getChildCount();
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
		let node = this.castTo(map, String);
		return node;
	}

	public visitConditionalExpression(ctx:Java8Parser.ConditionalExpressionContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2745: {
						ret.push(this.visit(it));
					}
					break;
					case 2746: {
						cond.push(this.visit(it));
					}
					break;
					case 2748: {
						trueExpr.push(this.visit(it));
					}
					break;
					case 2750: {
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
		let node = this.castTo(map, UniTernaryOp);
		return node;
	}

	public visitConditionalOrExpression(ctx:Java8Parser.ConditionalOrExpressionContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2757: {
						ret.push(this.visit(it));
					}
					break;
					case 468: {
						left.push(this.visit(it));
					}
					break;
					case 2760: {
						operator.push(this.visit(it));
					}
					break;
					case 2761: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitConditionalAndExpression(ctx:Java8Parser.ConditionalAndExpressionContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2771: {
						ret.push(this.visit(it));
					}
					break;
					case 472: {
						left.push(this.visit(it));
					}
					break;
					case 2774: {
						operator.push(this.visit(it));
					}
					break;
					case 2775: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitInclusiveOrExpression(ctx:Java8Parser.InclusiveOrExpressionContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2785: {
						ret.push(this.visit(it));
					}
					break;
					case 476: {
						left.push(this.visit(it));
					}
					break;
					case 2788: {
						operator.push(this.visit(it));
					}
					break;
					case 2789: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitExclusiveOrExpression(ctx:Java8Parser.ExclusiveOrExpressionContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2799: {
						ret.push(this.visit(it));
					}
					break;
					case 480: {
						left.push(this.visit(it));
					}
					break;
					case 2802: {
						operator.push(this.visit(it));
					}
					break;
					case 2803: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitAndExpression(ctx:Java8Parser.AndExpressionContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2813: {
						ret.push(this.visit(it));
					}
					break;
					case 484: {
						left.push(this.visit(it));
					}
					break;
					case 2816: {
						operator.push(this.visit(it));
					}
					break;
					case 2817: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitEqualityExpression(ctx:Java8Parser.EqualityExpressionContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2829: {
						ret.push(this.visit(it));
					}
					break;
					case 490: {
						left.push(this.visit(it));
					}
					break;
					case 2832: {
						operator.push(this.visit(it));
					}
					break;
					case 2833: {
						right.push(this.visit(it));
					}
					break;
					case 2836: {
						operator.push(this.visit(it));
					}
					break;
					case 2837: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitRelationalExpression(ctx:Java8Parser.RelationalExpressionContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2855: {
						ret.push(this.visit(it));
					}
					break;
					case 502: {
						left.push(this.visit(it));
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
					case 2862: {
						operator.push(this.visit(it));
					}
					break;
					case 2863: {
						right.push(this.visit(it));
					}
					break;
					case 2866: {
						operator.push(this.visit(it));
					}
					break;
					case 2867: {
						right.push(this.visit(it));
					}
					break;
					case 2870: {
						operator.push(this.visit(it));
					}
					break;
					case 2871: {
						right.push(this.visit(it));
					}
					break;
					case 2874: {
						operator.push(this.visit(it));
					}
					break;
					case 2875: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitShiftExpression(ctx:Java8Parser.ShiftExpressionContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2893: {
						ret.push(this.visit(it));
					}
					break;
					case 510: {
						left.push(this.visit(it));
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
					case 2900: {
						operator.push(this.visit(it));
					}
					break;
					case 2901: {
						right.push(this.visit(it));
					}
					break;
					case 2904: {
						operator.push(this.visit(it));
					}
					break;
					case 2905: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitAdditiveExpression(ctx:Java8Parser.AdditiveExpressionContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2913: {
						ret.push(this.visit(it));
					}
					break;
					case 512: {
						left.push(this.visit(it));
					}
					break;
					case 2916: {
						operator.push(this.visit(it));
					}
					break;
					case 2917: {
						right.push(this.visit(it));
					}
					break;
					case 2920: {
						operator.push(this.visit(it));
					}
					break;
					case 2921: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitMultiplicativeExpression(ctx:Java8Parser.MultiplicativeExpressionContext) {
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
		const n = ctx.getChildCount();
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
					case 2946: {
						operator.push(this.visit(it));
					}
					break;
					case 2947: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitUnaryExpression(ctx:Java8Parser.UnaryExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const expr = [];
		map.set("expr", expr);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2958: {
						ret.push(this.visit(it));
					}
					break;
					case 2959: {
						ret.push(this.visit(it));
					}
					break;
					case 2960: {
						operator.push(this.visit(it));
					}
					break;
					case 2961: {
						expr.push(this.visit(it));
					}
					break;
					case 2963: {
						operator.push(this.visit(it));
					}
					break;
					case 2964: {
						expr.push(this.visit(it));
					}
					break;
					case 2966: {
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
		let node = this.castTo(map, UniUnaryOp);
		return node;
	}

	public visitPreIncrementExpression(ctx:Java8Parser.PreIncrementExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const expr = [];
		map.set("expr", expr);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2971: {
						operator.push(this.visit(it));
					}
					break;
					case 2972: {
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
		let node = this.castTo(map, UniUnaryOp);
		return node;
	}

	public visitPreDecrementExpression(ctx:Java8Parser.PreDecrementExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const expr = [];
		map.set("expr", expr);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2976: {
						operator.push(this.visit(it));
					}
					break;
					case 2977: {
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
		let node = this.castTo(map, UniUnaryOp);
		return node;
	}

	public visitUnaryExpressionNotPlusMinus(ctx:Java8Parser.UnaryExpressionNotPlusMinusContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const expr = [];
		map.set("expr", expr);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2983: {
						ret.push(this.visit(it));
					}
					break;
					case 2984: {
						operator.push(this.visit(it));
					}
					break;
					case 2985: {
						expr.push(this.visit(it));
					}
					break;
					case 2987: {
						operator.push(this.visit(it));
					}
					break;
					case 2988: {
						expr.push(this.visit(it));
					}
					break;
					case 2990: {
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
		let node = this.castTo(map, UniUnaryOp);
		return node;
	}

	public visitPostfixExpression(ctx:Java8Parser.PostfixExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const left = [];
		map.set("left", left);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2993: {
						ret.push(this.visit(it));
					}
					break;
					case 2994: {
						left.push(this.visit(it));
					}
					break;
					case 2995: {
						left.push(this.visit(it));
					}
					break;
					case 2998: {
						operator.push(this.visit(it));
					}
					break;
					case 2999: {
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
		let node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitPostIncrementExpression(ctx:Java8Parser.PostIncrementExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const expr = [];
		map.set("expr", expr);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 3007: {
						expr.push(this.visit(it));
					}
					break;
					case 3008: {
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
		let node = this.castTo(map, UniUnaryOp);
		return node;
	}

	public visitPostDecrementExpression(ctx:Java8Parser.PostDecrementExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const expr = [];
		map.set("expr", expr);
		const operator = [];
		map.set("operator", operator);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 3012: {
						expr.push(this.visit(it));
					}
					break;
					case 3013: {
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
		let node = this.castTo(map, UniUnaryOp);
		return node;
	}

}
