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
import { CPP14Lexer } from './CPP14Lexer';
import { CPP14Parser } from './CPP14Parser';
import { CPP14Visitor } from './CPP14Visitor';

export default class CPP14Mapper extends CPP14Visitor {

	private isDebugMode:boolean = false;
	private parser:CPP14Parser;
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
	    const lexer = new CPP14Lexer(chars);
	    const tokens = new CommonTokenStream(lexer);
	    this.parser = new CPP14Parser(tokens);
	    this.parser.buildParseTrees = true;
	    const tree = this.parser.translationunit();
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
		parseCore(chars, [parser|parser.translationunit])
	}

	def parse(String code, Function1<CPP14Parser, ParseTree> parseAction) {
		parseCore(new ANTLRInputStream(code), parseAction)
	}

	def parseFile(String path, Function1<CPP14Parser, ParseTree> parseAction) {
		val inputStream = new FileInputStream(path)
		try {
			parseCore(new ANTLRInputStream(inputStream), parseAction)
		} finally {
			inputStream.close
		}
	}

	def parseCore(CharStream chars, Function1<CPP14Parser, ParseTree> parseAction) {
		val lexer = new CPP14Lexer(chars)
		val tokens = new CommonTokenStream(lexer)
		val parser = new CPP14Parser(tokens)
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

	public visitTranslationunit(ctx:CPP14Parser.TranslationunitContext) {
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
					case 460: {
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

	public visitPrimaryexpression(ctx:CPP14Parser.PrimaryexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 463: {
						ret.push(this.visit(it));
					}
					break;
					case 466: {
						ret.push(this.visit(it));
					}
					break;
					case 469: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniUnaryOp);
		return node;
	}

	public visitIdentexpression(ctx:CPP14Parser.IdentexpressionContext) {
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
					case 477: {
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

	public visitIdexpressionlapper(ctx:CPP14Parser.IdexpressionlapperContext) {
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
					case 596: {
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

	public visitPostfixexpression(ctx:CPP14Parser.PostfixexpressionContext) {
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
					case 599: {
						ret.push(this.visit(it));
					}
					break;
					case 34: {
						left.push(this.visit(it));
					}
					break;
					case 666: {
						right.push(this.visit(it));
					}
					break;
					case 676: {
						right.push(this.visit(it));
					}
					break;
					case 685: {
						right.push(this.visit(it));
					}
					break;
					case 691: {
						right.push(this.visit(it));
					}
					break;
					case 694: {
						right.push(this.visit(it));
					}
					break;
					case 697: {
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
					case CPP14Parser.LeftParen: {
						operator.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.RightParen: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitExpressionlist(ctx:CPP14Parser.ExpressionlistContext) {
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
					case 707: {
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

	public visitBinaryexpression(ctx:CPP14Parser.BinaryexpressionContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 733: {
						ret.push(this.visit(it));
					}
					break;
					case 734: {
						ret.push(this.visit(it));
					}
					break;
					case 735: {
						ret.push(this.visit(it));
					}
					break;
					case 736: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitUnaryexpression(ctx:CPP14Parser.UnaryexpressionContext) {
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
					case 740: {
						expr.push(this.visit(it));
					}
					break;
					case 742: {
						expr.push(this.visit(it));
					}
					break;
					case 743: {
						operator.push(this.visit(it));
					}
					break;
					case 744: {
						expr.push(this.visit(it));
					}
					break;
					case 747: {
						expr.push(this.visit(it));
					}
					break;
					case 750: {
						expr.push(this.visit(it));
					}
					break;
					case 755: {
						expr.push(this.visit(it));
					}
					break;
					case 765: {
						expr.push(this.visit(it));
					}
					break;
					case 768: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniUnaryOp);
		return node;
	}

	public visitTypeidlapper(ctx:CPP14Parser.TypeidlapperContext) {
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
					case 771: {
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

	public visitCastexpression(ctx:CPP14Parser.CastexpressionContext) {
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
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 862: {
						ret.push(this.visit(it));
					}
					break;
					case 864: {
						type.push(this.visit(it));
					}
					break;
					case 866: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniCast);
		return node;
	}

	public visitPmexpression(ctx:CPP14Parser.PmexpressionContext) {
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
					case 871: {
						ret.push(this.visit(it));
					}
					break;
					case 66: {
						left.push(this.visit(it));
					}
					break;
					case 875: {
						right.push(this.visit(it));
					}
					break;
					case 878: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitMultiplicativeexpression(ctx:CPP14Parser.MultiplicativeexpressionContext) {
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
					case 885: {
						ret.push(this.visit(it));
					}
					break;
					case 68: {
						left.push(this.visit(it));
					}
					break;
					case 889: {
						right.push(this.visit(it));
					}
					break;
					case 892: {
						right.push(this.visit(it));
					}
					break;
					case 895: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitAdditiveexpression(ctx:CPP14Parser.AdditiveexpressionContext) {
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
					case 902: {
						ret.push(this.visit(it));
					}
					break;
					case 70: {
						left.push(this.visit(it));
					}
					break;
					case 906: {
						right.push(this.visit(it));
					}
					break;
					case 909: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitShiftexpression(ctx:CPP14Parser.ShiftexpressionContext) {
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
					case 916: {
						ret.push(this.visit(it));
					}
					break;
					case 72: {
						left.push(this.visit(it));
					}
					break;
					case 920: {
						right.push(this.visit(it));
					}
					break;
					case 922: {
						operator.push(this.visit(it));
					}
					break;
					case 923: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitRelationalexpression(ctx:CPP14Parser.RelationalexpressionContext) {
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
					case 931: {
						ret.push(this.visit(it));
					}
					break;
					case 74: {
						left.push(this.visit(it));
					}
					break;
					case 935: {
						right.push(this.visit(it));
					}
					break;
					case 938: {
						right.push(this.visit(it));
					}
					break;
					case 941: {
						right.push(this.visit(it));
					}
					break;
					case 944: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitEqualityexpression(ctx:CPP14Parser.EqualityexpressionContext) {
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
					case 951: {
						ret.push(this.visit(it));
					}
					break;
					case 76: {
						left.push(this.visit(it));
					}
					break;
					case 955: {
						right.push(this.visit(it));
					}
					break;
					case 958: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitAndexpression(ctx:CPP14Parser.AndexpressionContext) {
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
					case 965: {
						ret.push(this.visit(it));
					}
					break;
					case 78: {
						left.push(this.visit(it));
					}
					break;
					case 969: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitExclusiveorexpression(ctx:CPP14Parser.ExclusiveorexpressionContext) {
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
					case 976: {
						ret.push(this.visit(it));
					}
					break;
					case 80: {
						left.push(this.visit(it));
					}
					break;
					case 980: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitInclusiveorexpression(ctx:CPP14Parser.InclusiveorexpressionContext) {
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
					case 987: {
						ret.push(this.visit(it));
					}
					break;
					case 82: {
						left.push(this.visit(it));
					}
					break;
					case 991: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitLogicalandexpression(ctx:CPP14Parser.LogicalandexpressionContext) {
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
					case 998: {
						ret.push(this.visit(it));
					}
					break;
					case 84: {
						left.push(this.visit(it));
					}
					break;
					case 1002: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitLogicalorexpression(ctx:CPP14Parser.LogicalorexpressionContext) {
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
					case 1009: {
						ret.push(this.visit(it));
					}
					break;
					case 86: {
						left.push(this.visit(it));
					}
					break;
					case 1013: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitConditionalexpression(ctx:CPP14Parser.ConditionalexpressionContext) {
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
					case 1019: {
						ret.push(this.visit(it));
					}
					break;
					case 1020: {
						cond.push(this.visit(it));
					}
					break;
					case 1024: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniTernaryOp);
		return node;
	}

	public visitAssignmentexpression(ctx:CPP14Parser.AssignmentexpressionContext) {
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
					case 1028: {
						ret.push(this.visit(it));
					}
					break;
					case 1029: {
						left.push(this.visit(it));
					}
					break;
					case 1030: {
						operator.push(this.visit(it));
					}
					break;
					case 1031: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castTo(map, UniBinOp);
		return node;
	}

	public visitExpressionstatement(ctx:CPP14Parser.ExpressionstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1137: {
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
		if (ret.length != 0) {
			return ret;
		}
		return map;
	}

	public visitCompoundstatement(ctx:CPP14Parser.CompoundstatementContext) {
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
					case 1143: {
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

	public visitStatementseq(ctx:CPP14Parser.StatementseqContext) {
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
						case 1149: {
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

	public visitSelectionstatement(ctx:CPP14Parser.SelectionstatementContext) {
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
					case 1157: {
						cond.push(this.visit(it));
					}
					break;
					case 1159: {
						trueStatement.push(this.visit(it));
					}
					break;
					case 1163: {
						cond.push(this.visit(it));
					}
					break;
					case 1165: {
						trueStatement.push(this.visit(it));
					}
					break;
					case 1167: {
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

	public visitWhilestatement(ctx:CPP14Parser.WhilestatementContext) {
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
					case 1197: {
						cond.push(this.visit(it));
					}
					break;
					case 1199: {
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

	public visitDowhilestatement(ctx:CPP14Parser.DowhilestatementContext) {
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
					case 1202: {
						statement.push(this.visit(it));
					}
					break;
					case 1205: {
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

	public visitIterationstatement(ctx:CPP14Parser.IterationstatementContext) {
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
					case 1211: {
						init.push(this.visit(it));
					}
					break;
					case 1212: {
						cond.push(this.visit(it));
					}
					break;
					case 1216: {
						step.push(this.visit(it));
					}
					break;
					case 1220: {
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

	public visitEnhancedForStatement(ctx:CPP14Parser.EnhancedForStatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const container = [];
		map.set("container", container);
		const statement = [];
		map.set("statement", statement);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1224: {
						merge.push(this.visit(it));
					}
					break;
					case 1226: {
						container.push(this.visit(it));
					}
					break;
					case 1228: {
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
		const node = this.castTo(map, UniEnhancedFor);
		merge.forEach((it:any) => { node.merge(this.castTo(it, UniEnhancedFor));});
		return node;
	}

	public visitBreakStatement(ctx:CPP14Parser.BreakStatementContext) {
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
		const node = this.castTo(map, UniBreak);
		return node;
	}

	public visitContinueStatement(ctx:CPP14Parser.ContinueStatementContext) {
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
		const node = this.castTo(map, UniContinue);
		return node;
	}

	public visitReturnStatement(ctx:CPP14Parser.ReturnStatementContext) {
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
					case 1256: {
						value.push(this.visit(it));
					}
					break;
					case 1261: {
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

	public visitDeclarationseq(ctx:CPP14Parser.DeclarationseqContext) {
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
						case 1271: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 138: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1274: {
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

	public visitMyclassbody(ctx:CPP14Parser.MyclassbodyContext) {
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
						case 1280: {
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

	public visitMyclassspecifier(ctx:CPP14Parser.MyclassspecifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const members = [];
		map.set("members", members);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1283: {
						merge.push(this.visit(it));
					}
					break;
					case 1285: {
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
		merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		return node;
	}

	public visitMyclasshead(ctx:CPP14Parser.MyclassheadContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const className = [];
		map.set("className", className);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1296: {
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

	public visitVariabledeclarationstatement(ctx:CPP14Parser.VariabledeclarationstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 1347: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castToList(map, UniVariableDec)
		return node;
	}

	public visitVariabledeclaration(ctx:CPP14Parser.VariabledeclarationContext) {
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
					case 1353: {
						modifiers.push(this.visit(it));
					}
					break;
					case 1356: {
						type.push(this.visit(it));
					}
					break;
					case 1357: {
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

	public visitVariableDeclaratorList(ctx:CPP14Parser.VariableDeclaratorListContext) {
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
						case 1361: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 1363: {
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

	public visitVariableDeclarator(ctx:CPP14Parser.VariableDeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const arrayLength = [];
		map.set("arrayLength", arrayLength);
		const name = [];
		map.set("name", name);
		const value = [];
		map.set("value", value);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1371: {
						name.push(this.visit(it));
					}
					break;
					case 1377: {
						name.push(this.visit(it));
					}
					break;
					case 1379: {
						arrayLength.push(this.visit(it));
					}
					break;
					case 1389: {
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
						name.push(this.flatten(this.visit(it)));
					}
					break;
					case CPP14Parser.RightBracket: {
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

	public visitDims(ctx:CPP14Parser.DimsContext) {
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
		const node = this.castTo(map, String);
		return node;
	}

	public visitTrailingtypespecifier(ctx:CPP14Parser.TrailingtypespecifierContext) {
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
		const node = this.castTo(map, String);
		return node;
	}

	public visitInitdeclaratorlist(ctx:CPP14Parser.InitdeclaratorlistContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 1842: {
						add.push(this.visit(it));
					}
					break;
					case 1844: {
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

	public visitDeclaratorid(ctx:CPP14Parser.DeclaratoridContext) {
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
		const node = this.castTo(map, String);
		return node;
	}

	public visitParameterdeclarationclause(ctx:CPP14Parser.ParameterdeclarationclauseContext) {
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
						case 2032: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2038: {
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

	public visitParameterdeclarationlist(ctx:CPP14Parser.ParameterdeclarationlistContext) {
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
						case 2045: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 310: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2049: {
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

	public visitParameterdeclaration(ctx:CPP14Parser.ParameterdeclarationContext) {
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
					case 2058: {
						type.push(this.visit(it));
					}
					break;
					case 2059: {
						name.push(this.visit(it));
					}
					break;
					case 2064: {
						type.push(this.visit(it));
					}
					break;
					case 2065: {
						name.push(this.visit(it));
					}
					break;
					case 2072: {
						type.push(this.visit(it));
					}
					break;
					case 2073: {
						name.push(this.visit(it));
					}
					break;
					case 2079: {
						type.push(this.visit(it));
					}
					break;
					case 2080: {
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
		const node = this.castTo(map, UniParam);
		return node;
	}

	public visitFunctiondefinition(ctx:CPP14Parser.FunctiondefinitionContext) {
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
					case 2091: {
						modifiers.push(this.visit(it));
					}
					break;
					case 2094: {
						merge.push(this.visit(it));
					}
					break;
					case 2098: {
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

	public visitFunctionheader(ctx:CPP14Parser.FunctionheaderContext) {
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
					case 2100: {
						returnType.push(this.visit(it));
					}
					break;
					case 2103: {
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

	public visitFunctiondeclarator(ctx:CPP14Parser.FunctiondeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const name = [];
		map.set("name", name);
		const params = [];
		map.set("params", params);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2105: {
						name.push(this.visit(it));
					}
					break;
					case 2107: {
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

	public visitFunctionbody(ctx:CPP14Parser.FunctionbodyContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2113: {
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
		const node = this.castTo(map, UniBlock);
		merge.forEach((it:any) => { node.merge(this.castTo(it, UniBlock));});
		return node;
	}

	public visitInitializerlist(ctx:CPP14Parser.InitializerlistContext) {
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
						case 2139: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2141: {
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

	public visitBracedinitlist(ctx:CPP14Parser.BracedinitlistContext) {
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
					case 2148: {
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

	public visitMyclassname(ctx:CPP14Parser.MyclassnameContext) {
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
		const node = this.castTo(map, String);
		return node;
	}

	public visitClassspecifier(ctx:CPP14Parser.ClassspecifierContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const members = [];
		map.set("members", members);
		const merge = [];
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2162: {
						merge.push(this.visit(it));
					}
					break;
					case 2163: {
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
		merge.forEach((it:any) => { node.merge(this.castTo(it, UniClassDec));});
		return node;
	}

	public visitClassbody(ctx:CPP14Parser.ClassbodyContext) {
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
						case 2166: {
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

	public visitClasshead(ctx:CPP14Parser.ClassheadContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const className = [];
		map.set("className", className);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2178: {
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

	public visitMemberspecification(ctx:CPP14Parser.MemberspecificationContext) {
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
						case 2203: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
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
						case 2207: {
							const results = this.flatten(this.visit(it));
							if(Array.isArray(results)){
								for (const result of results)
									add.push(result);
							}
							else
								add.push(results);
						}
						break;
						case 2209: {
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

	public visitMembervariabledeclarationstatement(ctx:CPP14Parser.MembervariabledeclarationstatementContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const ret = [];
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 2223: {
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
		if (ret.length != 0) {
			return ret;
		}
		const node = this.castToList(map, UniVariableDec)
		return node;
	}

	public visitMembervariabledeclaration(ctx:CPP14Parser.MembervariabledeclarationContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const type = [];
		map.set("type", type);
		const merge = [];
		const n = ctx.getChildCount();
		if (0<n) {
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);
				if (it instanceof RuleContext) {
					switch (it.invokingState) {
						case 2229: {
							modifiers.push(this.visit(it));
						}
						break;
						case 2232: {
							type.push(this.visit(it));
						}
						break;
						case 2233: {
							type.push(this.visit(it));
						}
						break;
						case 2239: {
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
		}
		const node = this.castTo(map, UniVariableDec)
		const ret = [];
		this.castToList(merge, UniVariableDec).forEach( (it:any) => {
			it.merge(node);
			ret.push(it);
		});
		return ret;
	}

	public visitMemberdeclaratorlist(ctx:CPP14Parser.MemberdeclaratorlistContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const add = [];
		map.set("add", add);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2243: {
						add.push(this.visit(it));
					}
					break;
					case 354: {
						add.push(this.visit(it));
					}
					break;
					case 2247: {
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

	public visitMemberdeclarator(ctx:CPP14Parser.MemberdeclaratorContext) {
		const map = new Map<string,any>();
		const none = [];
		map.set("none", none);
		const name = [];
		map.set("name", name);
		const modifiers = [];
		map.set("modifiers", modifiers);
		const value = [];
		map.set("value", value);
		const n = ctx.getChildCount();
		for (let i = 0; i < n;++i) {
			const it = ctx.getChild(i);	
			if (it instanceof RuleContext) {
				switch (it.invokingState) {
					case 2253: {
						name.push(this.visit(it));
					}
					break;
					case 2254: {
						modifiers.push(this.visit(it));
					}
					break;
					case 2260: {
						name.push(this.visit(it));
					}
					break;
					case 2262: {
						value.push(this.visit(it));
					}
					break;
					case 2265: {
						name.push(this.visit(it));
					}
					break;
					case 2266: {
						value.push(this.visit(it));
					}
					break;
					case 2276: {
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
		return map;
	}

	public visitIntegerliteral(ctx:CPP14Parser.IntegerliteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.getChildCount();
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);	
				if (it instanceof TerminalNodeImpl) {
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

	public visitCharacterliteral(ctx:CPP14Parser.CharacterliteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.getChildCount();
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);	
				if (it instanceof TerminalNodeImpl) {
					if (it.symbol.type == CPP14Parser.Characterliteral) {
						return it;
					}
				}
			}
			return undefined;
		};
		const text = this.visit(findFirst(ctx)) as String;
		return new UniCharacterLiteral(text.substring(1, text.length - 1).charAt(0));
	}

	public visitFloatingliteral(ctx:CPP14Parser.FloatingliteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.getChildCount();
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);	
				if (it instanceof TerminalNodeImpl) {
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

	public visitStringliteral(ctx:CPP14Parser.StringliteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.getChildCount();
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);	
				if (it instanceof TerminalNodeImpl) {
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

	public visitBooleanliteral(ctx:CPP14Parser.BooleanliteralContext) {
		const findFirst = (ctx) => {
			const n = ctx.getChildCount();
			for (let i = 0; i < n;++i) {
				const it = ctx.getChild(i);	
				if (it instanceof TerminalNodeImpl) {
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
