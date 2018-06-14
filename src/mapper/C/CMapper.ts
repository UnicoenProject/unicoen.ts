// tslint:disable
import CodeLocation from '../../node_helper/CodeLocation';
import CodeRange from '../../node_helper/CodeRange';
import UniNode from '../../node/UniNode';
import UniParam from '../../node/UniParam';
import UniExpr from '../../node/UniExpr';
import UniArray from '../../node/UniArray';
import UniNumberLiteral from '../../node/UniNumberLiteral';
import UniBinOp from '../../node/UniBinOp';
import UniBlock from '../../node/UniBlock';
import UniBoolLiteral from '../../node/UniBoolLiteral';
import UniBreak from '../../node/UniBreak';
import UniCast from '../../node/UniCast';
import UniContinue from '../../node/UniContinue';
import UniDoWhile from '../../node/UniDoWhile';
import UniEmptyStatement from '../../node/UniEmptyStatement';
import UniFunctionDec from '../../node/UniFunctionDec';
import UniFor from '../../node/UniFor';
import UniIdent from '../../node/UniIdent';
import UniIf from '../../node/UniIf';
import UniIntLiteral from '../../node/UniIntLiteral';
import UniWhile from '../../node/UniWhile';
import UniUnaryOp from '../../node/UniUnaryOp';
import UniTernaryOp from '../../node/UniTernaryOp';
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
import { RuleContext }from 'antlr4/RuleContext';
import { TerminalNode, TerminalNodeImpl, RuleNode, ParseTree }from 'antlr4/tree/Tree';
import { CLexer } from './CLexer';
import { CParser } from './CParser';
import { CVisitor } from './CVisitor';

export default class CMapper extends CVisitor {

	private isDebugMode:boolean = false;
	private parser:CParser;
	// val List<Comment> _comments = new ArrayList<Comment>;
	// var CommonTokenStream _stream;
	// var UniNode _lastNode;
	// var int _nextTokenIndex;

	/*static class Comment {
		val List<String> contents
		var ParseTree parent

		new(List<String> contents, ParseTree parent) {
			this.contents = contents
			this.parent = parent
		}
	}*/

	setIsDebugMode(isDebugMode:boolean) {
	    this.isDebugMode = isDebugMode;
	}

	parse(code) {
	    const chars = new InputStream(code);
	    const [tree, parser] = this.parseCore(chars);
	    return new UniProgram(this.visit(tree));
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
	
	/*def parseFile(String path) {
		val inputStream = new FileInputStream(path)
		try {
			parseCore(new ANTLRInputStream(inputStream))
		} finally {
			inputStream.close
		}
	}

	def parseCore(CharStream chars) {
		parseCore(chars, [parser|parser.compilationUnit])
	}

	def parse(String code, Function1<CParser, ParseTree> parseAction) {
		parseCore(new ANTLRInputStream(code), parseAction)
	}

	def parseFile(String path, Function1<CParser, ParseTree> parseAction) {
		val inputStream = new FileInputStream(path)
		try {
			parseCore(new ANTLRInputStream(inputStream), parseAction)
		} finally {
			inputStream.close
		}
	}

	def parseCore(CharStream chars, Function1<CParser, ParseTree> parseAction) {
		val lexer = new CLexer(chars)
		val tokens = new CommonTokenStream(lexer)
		val parser = new CParser(tokens)
		val tree = parseAction.apply(parser) // parse
		_comments.clear()
		_stream = tokens
		_lastNode = null
		_nextTokenIndex = 0

		val ret = tree.visit.flatten

		if (_lastNode !== null) {
			val count = _stream.size - 1
			for (var i = _nextTokenIndex; i < count; i++) {
				val hiddenToken = _stream.get(i) // Includes skipped tokens (maybe)
				if (_lastNode.comments === null) {
					_lastNode.comments = newArrayList
				}
				_lastNode.comments += hiddenToken.text
			}
		}
		ret
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

	public visit(node:ParseTree) {
	    if (!this.isDebugMode) {
	      return node.accept(this);
	    }
	    if (!(node instanceof RuleContext)) {
	      return node.accept(this);
	    }
	    const ruleName = this.getRuleName(node);
	    console.log('*** visit Rule : ' + ruleName + ' ***');
	    const ret = node.accept(this);
	    console.log('returned: ' + ret);
	    return ret;

		/*val node = if (result instanceof List<?>) {
				if(result.size == 1) result.get(0) else result
			} else {
				result
			}
		if (node instanceof UniNode) {
			if (tree instanceof RuleContext)
			{
				val start = (tree as ParserRuleContext).start
				val stop = (tree as ParserRuleContext).stop
				val begin = new CodeLocation(start.charPositionInLine,start.line)
				val endPos = stop.charPositionInLine
				val length = 1 + stop.stopIndex - stop.startIndex
				val end = new CodeLocation(endPos + length, stop.line)
				node.codeRange = new CodeRange(begin,end)
			}
			var List<String> contents = newArrayList
			for (var i = _comments.size - 1; i >= 0 && _comments.get(i).parent == tree; i--) {
				_comments.get(i).contents += contents
				contents = _comments.get(i).contents
				_comments.remove(i)
			}
			if (contents.size > 0) {
				if (node.comments === null) {
					node.comments = contents
				} else {
					node.comments += contents
				}
			}
			_lastNode = node
		} else {
			for (var i = _comments.size - 1; i >= 0 && _comments.get(i).parent == tree; i--) {
				_comments.get(i).parent = _comments.get(i).parent.parent
			}
			_lastNode = null
		}

		result*/
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
		/*if (token.type > 0) {
			val count = token.tokenIndex
			val List<String> contents = newArrayList
			var i = _nextTokenIndex
			for (; i < count; i++) {
				val hiddenToken = _stream.get(i) // Includes skipped tokens (maybe)
				if (_lastNode !== null && _stream.get(_nextTokenIndex - 1).line == hiddenToken.line) {
					if (_lastNode.comments === null) {
						_lastNode.comments = newArrayList
					}
					_lastNode.comments += hiddenToken.text
				} else {
					contents += hiddenToken.text
				}
			}
			val count2 = _stream.size - 1
			for (i = count + 1; i < count2 && _stream.get(i).channel == Token.HIDDEN_CHANNEL &&
				_stream.get(count).line == _stream.get(i).line; i++) {
				contents += _stream.get(i).text
			}
			if (contents.size > 0) {
				_comments.add(new Comment(contents, node.parent))
			}
			_nextTokenIndex = i
		}*/
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
	        return this.flatten(obj.get(obj.keys[0]));
	      }
	      const ret = new Map<any, any>();
	      obj.forEach((value: any, key: any) => {
	        ret.set(key, this.flatten(value));
	      });
	      return ret;
	    }
	
	    return obj;
	}

	// tslint:disable-next-line:prefer-array-literal
	public castToList<T extends Function|String>(obj:any, clazz:T):Array<T> {
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
	    if (clazz instanceof String) {
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
	       	  const list  = this.flatten(this.castToList(value, field));
	          if(!Array.isArray(list)) {
				instance[key] = [list];
			  } else {
				instance[key] = list;
			  }
	        } else {
	          instance[key] = this.castTo(value, field);
	        }
	      }
	    });
	    return instance;
	  }
	  if (Array.isArray(temp)) {
	    if (clazz instanceof String) {
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

	public visitUnaryExpression(ctx:CParser.UnaryExpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 311: {
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
		if (ret != []) {
			return ret;
		}
		const node = this.castTo(map, UniUnaryOp);
		return node;
	}

	public visitAdditiveExpression(ctx:CParser.AdditiveExpressionContext) {
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
					case 370: {
						ret.push(this.visit(it));
					}
					break;
					case 20: {
						left.push(this.visit(it));
					}
					break;
					case 374: {
						right.push(this.visit(it));
					}
					break;
					case 377: {
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
					case CParser.Plus: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CParser.Minus: {
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
		if (ret != []) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitDeclarator(ctx:CParser.DeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 714: {
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
		const node = this.castTo(map, UniFunctionDec);
		merge.forEach((it:any) => { node.merge(this.castTo(it, UniFunctionDec));});
		return node;
	}

	public visitDirectDeclarator(ctx:CParser.DirectDeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const name = [];
		map.set("name", name);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 96: {
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
					case CParser.Identifier: {
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
		const node = this.castTo(map, UniFunctionDec);
		merge.forEach((it:any) => { node.merge(this.castTo(it, UniFunctionDec));});
		return node;
	}

	public visitCompoundStatement(ctx:CParser.CompoundStatementContext) {
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
					case 1126: {
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

	public visitBlockItemList(ctx:CParser.BlockItemListContext) {
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
						case 1132: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 146: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1135: {
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

	public visitJumpStatement(ctx:CParser.JumpStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const value = [];
		map.set("value", value);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1236: {
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

	public visitCompilationUnit(ctx:CParser.CompilationUnitContext) {
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
					case 1246: {
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

	public visitTranslationUnit(ctx:CParser.TranslationUnitContext) {
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
						case 1250: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 166: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1253: {
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

	public visitFunctionDefinition(ctx:CParser.FunctionDefinitionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const block = [];
		map.set("block", block);
		const returnType = [];
		map.set("returnType", returnType);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1264: {
						returnType.push(this.visit(it));
					}
					break;
					case 1267: {
						merge.push(this.visit(it));
					}
					break;
					case 1271: {
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
		const node = this.castTo(map, UniFunctionDec);
		merge.forEach((it:any) => { node.merge(this.castTo(it, UniFunctionDec));});
		return node;
	}

	public visitConstant(ctx:CParser.ConstantContext) {
		const findFirst = (ctx) => {
			const n = ctx.getChildCount();
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);	
				if (it instanceof TerminalNodeImpl) {
					if (it.symbol.type == CParser.Constant) {
						return it;
					}
				}
			}
			return undefined;
		};
		const text = this.visit(findFirst(ctx)) as String;
		return new UniIntLiteral(Number(text));
	}

}
