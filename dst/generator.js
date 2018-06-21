!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=720)}({115:function(e,t){e.exports=require("fs")},720:function(e,t,r){"use strict";var n=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}},s=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,s,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){s={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(s)throw s.error}}return i};Object.defineProperty(t,"__esModule",{value:!0});var a=r(115),i=function(){return function(e,t){this.name=e,this.type=t}}(),l=function(){function e(e){var t,r,a=e.className,l=e.members,o=void 0===l?null:l,m=e.isAbstract,c=void 0!==m&&m,u=e.superClassName,h=void 0===u?null:u,f=e.children,p=void 0===f?null:f,d=this;if(this.className="",this.isAbstract=!1,this.superClassName=null,this.members=[],this.children=[],this.className+="Uni"+a,this.isAbstract=c,h&&(this.superClassName=""+h),o)try{for(var y=n(o),b=y.next();!b.done;b=y.next()){var v=s(b.value,2),x=v[0],N=v[1];this.isStartUpper(N)&&!this.isNodeHepler(N)&&(N="Uni"+N),this.members.push(new i(x,N))}}catch(e){t={error:e}}finally{try{b&&!b.done&&(r=y.return)&&r.call(y)}finally{if(t)throw t.error}}p&&(p.forEach(function(e,t,r){e.superClassName=d.className}),this.children=p)}return e.prototype.isStartUpper=function(e){return!!e.charAt(0).match(/^[A-Z]+$/)},e.prototype.isNodeHepler=function(e){return e.includes("CodeRange")},e.prototype.indent=function(e){for(var t="",r=0;r<e;++r)t+="  ";return t},e.prototype.makeImportText=function(){var e,t,r="",s=[];this.superClassName&&(s.push(this.superClassName),r+="import "+this.superClassName+" from './"+this.superClassName+"';\n");try{for(var a=n(this.members),i=a.next();!i.done;i=a.next()){var l=i.value.type;if(l.startsWith("Uni"))if(l.endsWith("[]")){var o=l.slice(0,-2);s.includes(o)||(s.push(o),r+="import "+o+" from './"+o+"';\n")}else s.includes(l)||(s.push(l),r+="import "+l+" from './"+l+"';\n");else this.isNodeHepler(l)&&(r+="import "+l+" from '../node_helper/"+l+"';")}}catch(t){e={error:t}}finally{try{i&&!i.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return"UniNode"===this.className&&(r+="require('../node_helper/Extension');"),r},e.prototype.makeClassDecText=function(){var e="";return e+="export default ",this.isAbstract&&(e+="abstract "),e+="class "+this.className+" ",this.superClassName&&(e+="extends "+this.superClassName+" "),e},e.prototype.makeMemberText=function(){var e,t,r="",s=""+this.indent(1);try{for(var a=n(this.members),i=a.next();!i.done;i=a.next()){var l=i.value;r+=s+"public "+l.name+": "+l.type+";\n"}}catch(t){e={error:t}}finally{try{i&&!i.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return"UniNode"===this.className&&(r+=s+"public fields: Map<string,Function>;\n"),r},e.prototype.makeConstructor=function(){var e,t,r,s,a,i,l,o,m,c,u,h,f,p,d="",y=""+this.indent(1),b=""+this.indent(2),v=""+this.indent(3);d+=y+"public constructor();\n",d+=y+"public constructor(";try{for(var x=n(this.members),N=x.next();!N.done;N=x.next()){d+=(D=N.value).name+": "+D.type+", "}}catch(t){e={error:t}}finally{try{N&&!N.done&&(t=x.return)&&t.call(x)}finally{if(e)throw e.error}}d=d.slice(0,-2),d+=");\n",d+=y+"public constructor(";try{for(var g=n(this.members),w=g.next();!w.done;w=g.next()){d+=(D=w.value).name+"?: "+D.type+", "}}catch(e){r={error:e}}finally{try{w&&!w.done&&(s=g.return)&&s.call(g)}finally{if(r)throw r.error}}d=d.slice(0,-2),d+=") {\n",this.superClassName&&(d+=b+"super();\n"),d+=b+"if (";try{for(var S=n(this.members),E=S.next();!E.done;E=S.next()){d+=(D=E.value).name+" === undefined && "}}catch(e){a={error:e}}finally{try{E&&!E.done&&(i=S.return)&&i.call(S)}finally{if(a)throw a.error}}d=d.slice(0,-4),d+=") {\n";try{for(var C=n(this.members),T=C.next();!T.done;T=C.next()){(D=T.value).type.includes("[]")?d+=v+"this."+D.name+" = [];\n":d+=v+"this."+D.name+" = null;\n"}}catch(e){l={error:e}}finally{try{T&&!T.done&&(o=C.return)&&o.call(C)}finally{if(l)throw l.error}}if(d+=b+"}",1<this.members.length){d+=" else if (";try{for(var k=n(this.members),j=k.next();!j.done;j=k.next()){d+=(D=j.value).name+" === undefined || "}}catch(e){m={error:e}}finally{try{j&&!j.done&&(c=k.return)&&c.call(k)}finally{if(m)throw m.error}}d=d.slice(0,-4),d+=")",d+=" {\n"+v+"throw new Error('invalid arguments');\n"+b+"}"}d+=" else {\n";try{for(var A=n(this.members),M=A.next();!M.done;M=A.next()){d+=v+"this."+(D=M.value).name+" = "+D.name+";\n"}}catch(e){u={error:e}}finally{try{M&&!M.done&&(h=A.return)&&h.call(A)}finally{if(u)throw u.error}}if(d+=b+"}\n","UniNode"===this.className)d+=b+"this.fields = new Map<string,Function>();\n",d+=b+"this.fields.set('comments', String);\n",d+=b+"this.fields.set('codeRange', CodeRange);\n";else try{for(var O=n(this.members),U=O.next();!U.done;U=O.next()){var D;d+=b+"this.fields.set('"+(D=U.value).name+"', ",D.type.includes("string")?d+="String":D.type.includes("boolean")?d+="Boolean":D.type.includes("number")?d+="Number":D.type.includes("any")?d+="Object":D.type.includes("[]")?d+=D.type.substr(0,D.type.length-2):d+=D.type,d+=");\n"}}catch(e){f={error:e}}finally{try{U&&!U.done&&(p=O.return)&&p.call(O)}finally{if(f)throw f.error}}return d+=y+"}\n"},e.prototype.makeToStringText=function(){var e=""+this.indent(1),t=e+"public toString(): string {\n";t+=""+this.indent(2)+"return '"+this.className.substr(3)+"('";var r,s,a=!0;try{for(var i=n(this.members),l=i.next();!l.done;l=i.next()){var o=l.value;"string"===o.type&&(a?(t+=" + ",a=!1):a||(t+=" + ', ' + "),t+="this."+o.name)}}catch(e){r={error:e}}finally{try{l&&!l.done&&(s=i.return)&&s.call(i)}finally{if(r)throw r.error}}return t+=" + ')';\n"+e+"}\n"},e.prototype.makeToEqualsText=function(){var e,t,r=""+this.indent(1),s=""+this.indent(2),a=""+this.indent(4),i=r+"public equals(obj: any): boolean {\n";if(i+=s+"if (obj == null || !(obj instanceof "+this.className+")) return false;\n",i+=s+"const that: "+this.className+" = <"+this.className+">obj;\n",this.superClassName?i+=s+"return super.equals(that)":i+=s+"return that !== null","UniNode"!==this.className)try{for(var l=n(this.members),o=l.next();!o.done;o=l.next()){var m=o.value;"string"===m.type||"number"===m.type||"boolean"===m.type||"any"===m.type?i+="\n"+a+"&& (this."+m.name+" == null ? that."+m.name+" == null : this."+m.name+" === that."+m.name+")":i+="\n"+a+"&& (this."+m.name+" == null ? that."+m.name+" == null : this."+m.name+".equals(that."+m.name+"))"}}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=l.return)&&t.call(l)}finally{if(e)throw e.error}}return i+=";\n"+r+"}\n"},e.prototype.makeMergeText=function(){var e,t,r=""+this.indent(1),s=""+this.indent(2),a=""+this.indent(3),i=""+this.indent(4),l=r+"public merge(that: "+this.className+") {\n";this.superClassName&&(l+=s+"super.merge(that);\n");try{for(var o=n(this.members),m=o.next();!m.done;m=o.next()){var c=m.value;l+=s+"if (that."+c.name+" != null) {\n",c.type.includes("[]")?(l+=a+"if (this."+c.name+" == null) {\n",l+=i+"this."+c.name+" = that."+c.name+";\n",l+=a+"} else {\n",l+=i+"this."+c.name+".push(...that."+c.name+");\n",l+=a+"}\n"):l+=a+"this."+c.name+" = that."+c.name+";\n",l+=s+"}\n"}}catch(t){e={error:t}}finally{try{m&&!m.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return l+=r+"}\n"},e.prototype.toString=function(){var e="";return e+=this.makeImportText()+"\n",e+=""+this.makeClassDecText(),e+="{\n",0<this.members.length?(e+=this.makeMemberText()+"\n",e+=this.makeConstructor()+"\n",e+=this.makeToStringText()+"\n",e+=this.makeToEqualsText()+"\n",e+=""+this.makeMergeText()):this.isAbstract||(e+=this.makeToStringText()+"\n",e+=this.makeToEqualsText()+"\n"),e+="}\n"},e.prototype.write=function(){a.writeFile("src/node/"+this.className+".ts",this.toString(),function(e){});try{for(var e=n(this.children),t=e.next();!t.done;t=e.next()){t.value.write()}}catch(e){r={error:e}}finally{try{t&&!t.done&&(s=e.return)&&s.call(e)}finally{if(r)throw r.error}}var r,s},e}(),o=function(){function e(){}return e.generate=function(){new l({className:"Node",isAbstract:!0,members:[["comments","string[]"],["codeRange","CodeRange"]],children:[new l({className:"Program",members:[["block","Block"]]}),new l({className:"Expr",isAbstract:!0,children:[new l({className:"NumberLiteral",members:[["value","any"],["signed","boolean"],["bytes","number"],["isFloat","boolean"],["type","string"],["prefix","string"],["sufix","string"]],children:[new l({className:"IntLiteral",members:[["value","number"]]}),new l({className:"DoubleLiteral",members:[["value","number"]]}),new l({className:"CharacterLiteral",members:[["value","string"]]})]}),new l({className:"StringLiteral",members:[["value","string"]]}),new l({className:"BoolLiteral",members:[["value","boolean"]]}),new l({className:"Cast",members:[["type","string"],["value","Expr"]]}),new l({className:"Ident",members:[["name","string"]]}),new l({className:"Array",members:[["items","Expr[]"]]}),new l({className:"MethodCall",members:[["receiver","Expr"],["methodName","Ident"],["args","Expr[]"]]}),new l({className:"UnaryOp",members:[["operator","string"],["expr","Expr"]]}),new l({className:"BinOp",members:[["operator","string"],["left","Expr"],["right","Expr"]]}),new l({className:"TernaryOp",members:[["cond","Expr"],["trueExpr","Expr"],["falseExpr","Expr"]]}),new l({className:"Statement",isAbstract:!0,children:[new l({className:"Break"}),new l({className:"Continue"}),new l({className:"EmptyStatement"}),new l({className:"Return",members:[["value","Expr"]]}),new l({className:"Jump",members:[["dest","string"]]}),new l({className:"Label",members:[["name","string"]]}),new l({className:"Block",members:[["blockLabel","string"],["body","Statement[]"]]}),new l({className:"If",members:[["cond","Expr"],["trueStatement","Statement"],["falseStatement","Statement"]]}),new l({className:"For",members:[["init","Expr"],["cond","Expr"],["step","Expr"],["statement","Statement"]]}),new l({className:"EnhancedFor",members:[["modifiers","string[]"],["type","string"],["name","string"],["container","Expr"],["statement","Statement"]]}),new l({className:"While",members:[["cond","Expr"],["statement","Statement"]],children:[new l({className:"DoWhile"})]}),new l({className:"Switch",members:[["cond","Expr"],["cases","SwitchUnit[]"]]}),new l({className:"SwitchUnit",members:[["label","string"],["cond","Expr"],["statement","Statement[]"]]})]}),new l({className:"Decralation",isAbstract:!0,children:[new l({className:"ClassDec",members:[["className","string"],["modifiers","string[]"],["members","Decralation[]"],["superClass","string[]"],["interfaces","string[]"]]}),new l({className:"FunctionDec",members:[["name","string"],["modifiers","string[]"],["returnType","string"],["params","Param[]"],["block","Block"]]}),new l({className:"VariableDef",members:[["name","string"],["value","Expr"],["typeSuffix","string"]]}),new l({className:"VariableDec",members:[["modifiers","string[]"],["type","string"],["variables","VariableDef[]"]],children:[new l({className:"Param"})]})]})]})]}).write()},e}();t.default=o,o.generate()}});