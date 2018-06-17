/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
/******/ })
/************************************************************************/
/******/ ({

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __values = undefined && undefined.__values || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __webpack_require__(48);
var Field = /** @class */function () {
    function Field(name, type) {
        this.name = name;
        this.type = type;
    }
    return Field;
}();
var Node = /** @class */function () {
    function Node(_a) {
        var className = _a.className,
            _b = _a.members,
            members = _b === void 0 ? null : _b,
            _c = _a.isAbstract,
            isAbstract = _c === void 0 ? false : _c,
            _d = _a.superClassName,
            superClassName = _d === void 0 ? null : _d,
            _e = _a.children,
            children = _e === void 0 ? null : _e;
        var _this = this;
        this.className = '';
        this.isAbstract = false;
        this.superClassName = null;
        this.members = [];
        this.children = [];
        this.className += "Uni" + className;
        this.isAbstract = isAbstract;
        if (superClassName) {
            this.superClassName = "" + superClassName;
        }
        if (members) {
            try {
                for (var members_1 = __values(members), members_1_1 = members_1.next(); !members_1_1.done; members_1_1 = members_1.next()) {
                    var _f = __read(members_1_1.value, 2),
                        name = _f[0],
                        type = _f[1];
                    if (this.isStartUpper(type) && !this.isNodeHepler(type)) {
                        type = "Uni" + type;
                    }
                    this.members.push(new Field(name, type));
                }
            } catch (e_1_1) {
                e_1 = { error: e_1_1 };
            } finally {
                try {
                    if (members_1_1 && !members_1_1.done && (_g = members_1.return)) _g.call(members_1);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
        }
        if (children) {
            children.forEach(function (element, index, array) {
                element.superClassName = _this.className;
            });
            this.children = children;
        }
        var e_1, _g;
    }
    Node.prototype.isStartUpper = function (str) {
        return str.charAt(0).match(/^[A-Z]+$/) ? true : false;
    };
    Node.prototype.isNodeHepler = function (str) {
        return str.includes("CodeRange");
    };
    Node.prototype.indent = function (n) {
        var space = "  ";
        var ret = "";
        for (var i = 0; i < n; ++i) {
            ret += space;
        }
        return ret;
    };
    Node.prototype.makeImportText = function () {
        var ret = '';
        var imports = [];
        if (this.superClassName) {
            imports.push(this.superClassName);
            ret += "import " + this.superClassName + " from './" + this.superClassName + "';\n";
        }
        try {
            for (var _a = __values(this.members), _b = _a.next(); !_b.done; _b = _a.next()) {
                var field = _b.value;
                var type = field.type;
                if (type.startsWith("Uni")) {
                    if (type.endsWith("[]")) {
                        var t = type.slice(0, -2);
                        if (!imports.includes(t)) {
                            imports.push(t);
                            ret += "import " + t + " from './" + t + "';\n";
                        }
                    } else {
                        if (!imports.includes(type)) {
                            imports.push(type);
                            ret += "import " + type + " from './" + type + "';\n";
                        }
                    }
                } else if (this.isNodeHepler(type)) {
                    ret += "import " + type + " from '../node_helper/" + type + "';";
                }
            }
        } catch (e_2_1) {
            e_2 = { error: e_2_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_2) throw e_2.error;
            }
        }
        if (this.className === 'UniNode') {
            ret += "require('../node_helper/Extension');";
        }
        return ret;
        var e_2, _c;
    };
    Node.prototype.makeClassDecText = function () {
        var ret = '';
        ret += "export default ";
        if (this.isAbstract) {
            ret += "abstract ";
        }
        ret += "class " + this.className + " ";
        if (this.superClassName) {
            ret += "extends " + this.superClassName + " ";
        }
        return ret;
    };
    Node.prototype.makeMemberText = function () {
        var ret = '';
        // member
        var s1 = "" + this.indent(1);
        try {
            for (var _a = __values(this.members), _b = _a.next(); !_b.done; _b = _a.next()) {
                var field = _b.value;
                ret += s1 + "public " + field.name + ": " + field.type + ";\n";
            }
        } catch (e_3_1) {
            e_3 = { error: e_3_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_3) throw e_3.error;
            }
        }
        if (this.className === 'UniNode') {
            ret += s1 + "public fields: Map<string,Function>;\n";
        }
        return ret;
        var e_3, _c;
    };
    Node.prototype.makeConstructor = function () {
        var ret = '';
        // member
        var s1 = "" + this.indent(1);
        var s2 = "" + this.indent(2);
        var s3 = "" + this.indent(3);
        // constructor
        ret += s1 + "public constructor();\n";
        ret += s1 + "public constructor(";
        try {
            for (var _a = __values(this.members), _b = _a.next(); !_b.done; _b = _a.next()) {
                var field = _b.value;
                ret += field.name + ": " + field.type + ", ";
            }
        } catch (e_4_1) {
            e_4 = { error: e_4_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_4) throw e_4.error;
            }
        }
        ret = ret.slice(0, -2);
        ret += ");\n";
        ret += s1 + "public constructor(";
        try {
            for (var _d = __values(this.members), _e = _d.next(); !_e.done; _e = _d.next()) {
                var field = _e.value;
                ret += field.name + "?: " + field.type + ", ";
            }
        } catch (e_5_1) {
            e_5 = { error: e_5_1 };
        } finally {
            try {
                if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
            } finally {
                if (e_5) throw e_5.error;
            }
        }
        ret = ret.slice(0, -2);
        ret += ") {\n";
        if (this.superClassName) {
            ret += s2 + "super();\n";
        }
        ret += s2 + "if (";
        try {
            for (var _g = __values(this.members), _h = _g.next(); !_h.done; _h = _g.next()) {
                var field = _h.value;
                ret += field.name + " === undefined && ";
            }
        } catch (e_6_1) {
            e_6 = { error: e_6_1 };
        } finally {
            try {
                if (_h && !_h.done && (_j = _g.return)) _j.call(_g);
            } finally {
                if (e_6) throw e_6.error;
            }
        }
        ret = ret.slice(0, -4);
        ret += ") {\n";
        try {
            for (var _k = __values(this.members), _l = _k.next(); !_l.done; _l = _k.next()) {
                var field = _l.value;
                // if (field.type === 'string') {
                //   ret += `${s3}this.${field.name} = '';\n`;
                // }
                if (field.type.includes('[]')) {
                    ret += s3 + "this." + field.name + " = [];\n";
                } else {
                    ret += s3 + "this." + field.name + " = null;\n";
                }
                // if (field.type.includes('Uni')) {
                //   ret += `${s3}this.${field.name} = new ${field.type}();\n`;
                // }
            }
        } catch (e_7_1) {
            e_7 = { error: e_7_1 };
        } finally {
            try {
                if (_l && !_l.done && (_m = _k.return)) _m.call(_k);
            } finally {
                if (e_7) throw e_7.error;
            }
        }
        ret += s2 + "}";
        if (1 < this.members.length) {
            ret += " else if (";
            try {
                for (var _o = __values(this.members), _p = _o.next(); !_p.done; _p = _o.next()) {
                    var field = _p.value;
                    ret += field.name + " === undefined || ";
                }
            } catch (e_8_1) {
                e_8 = { error: e_8_1 };
            } finally {
                try {
                    if (_p && !_p.done && (_q = _o.return)) _q.call(_o);
                } finally {
                    if (e_8) throw e_8.error;
                }
            }
            ret = ret.slice(0, -4);
            ret += ")";
            ret += " {\n" + s3 + "throw new Error('invalid arguments');\n" + s2 + "}";
        }
        ret += " else {\n";
        try {
            for (var _r = __values(this.members), _s = _r.next(); !_s.done; _s = _r.next()) {
                var field = _s.value;
                ret += s3 + "this." + field.name + " = " + field.name + ";\n";
            }
        } catch (e_9_1) {
            e_9 = { error: e_9_1 };
        } finally {
            try {
                if (_s && !_s.done && (_t = _r.return)) _t.call(_r);
            } finally {
                if (e_9) throw e_9.error;
            }
        }
        ret += s2 + "}\n";
        if (this.className === 'UniNode') {
            ret += s2 + "this.fields = new Map<string,Function>();\n";
            ret += s2 + "this.fields.set('comments', String);\n";
            ret += s2 + "this.fields.set('codeRange', CodeRange);\n";
        } else {
            try {
                for (var _u = __values(this.members), _v = _u.next(); !_v.done; _v = _u.next()) {
                    var field = _v.value;
                    ret += s2 + "this.fields.set('" + field.name + "', ";
                    if (field.type.includes("string")) {
                        ret += "String";
                    } else if (field.type.includes("boolean")) {
                        ret += "Boolean";
                    } else if (field.type.includes("number")) {
                        ret += "Number";
                    } else if (field.type.includes("any")) {
                        ret += "Object";
                    } else if (field.type.includes('[]')) {
                        ret += field.type.substr(0, field.type.length - 2);
                    } else {
                        ret += field.type;
                    }
                    ret += ");\n";
                }
            } catch (e_10_1) {
                e_10 = { error: e_10_1 };
            } finally {
                try {
                    if (_v && !_v.done && (_w = _u.return)) _w.call(_u);
                } finally {
                    if (e_10) throw e_10.error;
                }
            }
        }
        ret += s1 + "}\n";
        return ret;
        var e_4, _c, e_5, _f, e_6, _j, e_7, _m, e_8, _q, e_9, _t, e_10, _w;
    };
    Node.prototype.makeToStringText = function () {
        // member
        var s1 = "" + this.indent(1);
        var s2 = "" + this.indent(2);
        var ret = s1 + "public toString(): string {\n";
        ret += s2 + "return '" + this.className.substr(3) + "('";
        var isFirst = true;
        try {
            for (var _a = __values(this.members), _b = _a.next(); !_b.done; _b = _a.next()) {
                var field = _b.value;
                if (field.type === 'string') {
                    if (isFirst) {
                        ret += " + ";
                        isFirst = false;
                    } else if (!isFirst) {
                        ret += " + ', ' + ";
                    }
                    ret += "this." + field.name;
                }
            }
        } catch (e_11_1) {
            e_11 = { error: e_11_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_11) throw e_11.error;
            }
        }
        ret += " + ')';\n" + s1 + "}\n";
        return ret;
        var e_11, _c;
    };
    Node.prototype.makeToEqualsText = function () {
        // member
        var s1 = "" + this.indent(1);
        var s2 = "" + this.indent(2);
        var s4 = "" + this.indent(4);
        var ret = s1 + "public equals(obj: any): boolean {\n";
        ret += s2 + "if (obj == null || !(obj instanceof " + this.className + ")) return false;\n";
        ret += s2 + "const that: " + this.className + " = <" + this.className + ">obj;\n";
        if (this.superClassName) {
            ret += s2 + "return super.equals(that)";
        } else {
            ret += s2 + "return that !== null";
        }
        try {
            for (var _a = __values(this.members), _b = _a.next(); !_b.done; _b = _a.next()) {
                var field = _b.value;
                if (field.type === 'string' || field.type === 'number' || field.type === 'boolean' || field.type === 'any') {
                    ret += "\n" + s4 + "&& (this." + field.name + " == null ? that." + field.name + " == null : this." + field.name + " === that." + field.name + ")";
                } else {
                    ret += "\n" + s4 + "&& (this." + field.name + " == null ? that." + field.name + " == null : this." + field.name + ".equals(that." + field.name + "))";
                }
            }
        } catch (e_12_1) {
            e_12 = { error: e_12_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_12) throw e_12.error;
            }
        }
        ret += ";\n" + s1 + "}\n";
        return ret;
        var e_12, _c;
    };
    Node.prototype.makeMergeText = function () {
        // member
        var s1 = "" + this.indent(1);
        var s2 = "" + this.indent(2);
        var s3 = "" + this.indent(3);
        var s4 = "" + this.indent(4);
        var ret = s1 + "public merge(that: " + this.className + ") {\n";
        if (this.superClassName) {
            ret += s2 + "super.merge(that);\n";
        }
        try {
            for (var _a = __values(this.members), _b = _a.next(); !_b.done; _b = _a.next()) {
                var field = _b.value;
                ret += s2 + "if (that." + field.name + " != null) {\n";
                if (field.type.includes("[]")) {
                    ret += s3 + "if (this." + field.name + " == null) {\n";
                    ret += s4 + "this." + field.name + " = that." + field.name + ";\n";
                    ret += s3 + "} else {\n";
                    ret += s4 + "this." + field.name + ".push(...that." + field.name + ");\n";
                    ret += s3 + "}\n";
                } else {
                    ret += s3 + "this." + field.name + " = that." + field.name + ";\n";
                }
                ret += s2 + "}\n";
            }
        } catch (e_13_1) {
            e_13 = { error: e_13_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_13) throw e_13.error;
            }
        }
        ret += s1 + "}\n";
        return ret;
        var e_13, _c;
    };
    Node.prototype.toString = function () {
        var ret = '';
        ret += this.makeImportText() + "\n";
        ret += "" + this.makeClassDecText();
        ret += "{\n";
        if (0 < this.members.length) {
            ret += this.makeMemberText() + "\n";
            ret += this.makeConstructor() + "\n";
            ret += this.makeToStringText() + "\n";
            ret += this.makeToEqualsText() + "\n";
            ret += "" + this.makeMergeText();
        } else if (!this.isAbstract) {
            ret += this.makeToStringText() + "\n";
            ret += this.makeToEqualsText() + "\n";
        }
        ret += "}\n";
        return ret;
    };
    Node.prototype.write = function () {
        fs.writeFile("src/node/" + this.className + ".ts", this.toString(), function (err) {
            if (err) {
                return console.error(err);
            }
        });
        try {
            for (var _a = __values(this.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                var child = _b.value;
                child.write();
            }
        } catch (e_14_1) {
            e_14 = { error: e_14_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_14) throw e_14.error;
            }
        }
        var e_14, _c;
    };
    return Node;
}();
var Generator = /** @class */function () {
    function Generator() {}
    Generator.generate = function () {
        var node = new Node({ className: "Node", isAbstract: true,
            members: [["comments", "string[]"], ["codeRange", "CodeRange"]], children: [new Node({ className: "Program",
                members: [["block", "Block"]] }), new Node({ className: "Expr", isAbstract: true,
                children: [new Node({ className: "NumberLiteral",
                    members: [["value", "any"], ["signed", "boolean"], ["bytes", "number"], ["isFloat", "boolean"], ["type", "string"], ["prefix", "string"], ["sufix", "string"]],
                    children: [new Node({ className: "IntLiteral",
                        members: [["value", "number"]]
                    }), new Node({ className: "DoubleLiteral",
                        members: [["value", "number"]]
                    }), new Node({ className: "CharacterLiteral",
                        members: [["value", "string"]]
                    })]
                }), new Node({ className: "StringLiteral",
                    members: [["value", "string"]] }), new Node({ className: "BoolLiteral",
                    members: [["value", "boolean"]] }), new Node({ className: "Cast",
                    members: [["type", "string"], ["value", "Expr"]] }), new Node({ className: "Ident",
                    members: [["name", "string"]] }), new Node({ className: "Array",
                    members: [["items", "Expr[]"]] }),
                // new Node({ className :`FieldAccess`,
                //   members:[
                //   [`receiver`, `Expr`],
                //   [`fieldName`, `string`],
                //   [`index`, `Expr`],
                //   ]}),
                new Node({ className: "MethodCall",
                    members: [["receiver", "Expr"], ["methodName", "Ident"], ["args", "Expr[]"]] }), new Node({ className: "UnaryOp",
                    members: [["operator", "string"], ["expr", "Expr"]] }), new Node({ className: "BinOp",
                    members: [["operator", "string"], ["left", "Expr"], ["right", "Expr"]] }), new Node({ className: "TernaryOp",
                    members: [["cond", "Expr"], ["trueExpr", "Expr"], ["falseExpr", "Expr"]] }), new Node({ className: "Statement", isAbstract: true,
                    children: [new Node({ className: "Break" }), new Node({ className: "Continue" }), new Node({ className: "EmptyStatement" }), new Node({ className: "Return",
                        members: [["value", "Expr"]] }), new Node({ className: "Jump",
                        members: [["dest", "string"]] }), new Node({ className: "Label",
                        members: [["name", "string"]] }), new Node({ className: "Block",
                        members: [["blockLabel", "string"], ["body", "Statement[]"]] }), new Node({ className: "If",
                        members: [["cond", "Expr"], ["trueStatement", "Statement"], ["falseStatement", "Statement"]] }), new Node({ className: "For",
                        members: [["init", "Expr"], ["cond", "Expr"], ["step", "Expr"], ["statement", "Statement"]] }), new Node({ className: "EnhancedFor",
                        members: [["modifiers", "string[]"], ["type", "string"], ["name", "string"], ["container", "Expr"], ["statement", "Statement"]] }), new Node({ className: "While",
                        members: [["cond", "Expr"], ["statement", "Statement"]],
                        children: [new Node({ className: "DoWhile" })]
                    }), new Node({ className: "Switch",
                        members: [["cond", "Expr"], ["cases", "SwitchUnit[]"]]
                    }), new Node({ className: "SwitchUnit",
                        members: [["label", "string"], ["cond", "Expr"], ["statement", "Statement[]"]]
                    })]
                }), new Node({ className: "Decralation", isAbstract: true,
                    children: [new Node({ className: "ClassDec",
                        members: [["className", "string"], ["modifiers", "string[]"], ["members", "Decralation[]"], ["superClass", "string[]"], ["interfaces", "string[]"]] }), new Node({ className: "FunctionDec",
                        members: [["name", "string"], ["modifiers", "string[]"], ["returnType", "string"], ["params", "Param[]"], ["block", "Block"]] }), new Node({ className: "VariableDef",
                        members: [["name", "string"], ["value", "Expr"], ["typeSuffix", "string"]] }), new Node({ className: "VariableDec",
                        members: [["modifiers", "string[]"], ["type", "string"], ["variables", "VariableDef[]"]],
                        children: [new Node({ className: "Param" })] })]
                })]
            })] });
        node.write();
    };
    return Generator;
}();
exports.default = Generator;
Generator.generate();

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIDA1MTI0MGQ5OTRmMDQ5ZTI5ZTMxIiwiQzpcXGRldmVsb3BcXHVuaWNvZW4udHNcXHNyY1xcbm9kZVxcR2VuZXJhdG9yLnRzIiwiZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLDZCQUF5QjtBQUN6QjtBQUNFLG1CQUFxQyxNQUFvQjtBQUEvQixhQUFJLE9BQU87QUFBUyxhQUFJLE9BQVU7QUFBQztBQUMvRCxXQUFDO0FBQUE7QUFFRDtBQU9FLGtCQUNzSDtZQURoRyxlQUFTO1lBQUUsUUFBYztZQUFkLGlDQUFjO1lBQUUsUUFBa0I7WUFBbEIscUNBQWtCO1lBQUUsUUFBcUI7WUFBckIsd0NBQXFCO1lBQUUsUUFBZTtZQUFmLGtDQUFlO0FBQTNHLG9CQXFCQztBQTNCTSxhQUFTLFlBQWE7QUFDdEIsYUFBVSxhQUFpQjtBQUMzQixhQUFjLGlCQUFlO0FBQzdCLGFBQU8sVUFBYztBQUNyQixhQUFRLFdBQWE7QUFJdEIsYUFBVSxhQUFJLFFBQWtCO0FBQ2hDLGFBQVcsYUFBYztBQUMxQixZQUFnQixnQkFBRTtBQUNmLGlCQUFlLGlCQUFHLEtBQ3hCO0FBQUM7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YUFDYjtBQUNPLGtDQUFDLENBQ1AsSUFBUSxLQUFDLEVBQVcsV0FFdEI7QUFSTyxxQkFBVCxDQTFDUSxNQW1EQSxPQUFZLFdBQVU7QUFDckIsaUNBQUMsQ0FDTixDQUFPLFFBQVMsU0FDaEIsQ0FBUSxTQUVWO0FBTE8scUJBQVQsT0FNUSxPQUFZLFdBQWM7QUFDekIsaUNBQUMsQ0FDUixDQUFRLFNBQVcsV0FDbkIsQ0FBTyxRQUFTLFNBQ2hCLENBQVksYUFJaEI7QUFSVyxxQkFBVDtBQTFESyxpQkFBVCxPQW1FUSxPQUFZLFdBQWUsZUFBWSxZQUFNO0FBQzNDLDhCQUFFLENBQ1IsSUFBUSxLQUFDLEVBQVcsV0FBWTtBQUN2QixpQ0FBQyxDQUNOLENBQVksYUFBVyxXQUN2QixDQUFZLGFBQWEsYUFDekIsQ0FBVSxXQUFrQixrQkFDNUIsQ0FBYSxjQUFhLGFBQzFCLENBQWEsY0FDWixxQkFDRyxPQUFZLFdBQWU7QUFDMUIsaUNBQUMsQ0FDTixDQUFPLFFBQVcsV0FDbEIsQ0FBWSxhQUFhLGFBQ3pCLENBQWEsY0FBVyxXQUN4QixDQUFTLFVBQVksWUFDckIsQ0FBUSxTQUNQLFNBUEksRUFBVCxPQVFRLE9BQVksV0FBZTtBQUMxQixpQ0FBQyxDQUNOLENBQU8sUUFBVyxXQUNsQixDQUFRLFNBQVMsU0FDakIsQ0FBYSxjQUNaLFVBTEksRUFBVCxPQU1RLE9BQVksV0FBZTtBQUMxQixpQ0FBQyxDQUNOLENBQVksYUFBYSxhQUN6QixDQUFPLFFBQVcsV0FDbEIsQ0FBWSxhQUNiO0FBQ08sa0NBQUMsQ0FDUCxJQUFRLEtBQUMsRUFBVyxXQU05QixXQWJlLEVBQVQ7QUF4QkssaUJBQVQ7QUFuSkssYUFBVCxDQUxVLENBSkwsRUFBVDtBQWtNRSxhQUNOO0FBQUM7QUFDSCxXQUFDO0FBQUE7O0FBQ1EsVUFBWSxXOzs7Ozs7O0FDM2ZyQiwrQiIsImZpbGUiOiJnZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA1MTI0MGQ5OTRmMDQ5ZTI5ZTMxIiwiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5jbGFzcyBGaWVsZCB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOnN0cmluZywgcHVibGljIHR5cGU6c3RyaW5nKSB7fVxyXG59XHJcblxyXG5jbGFzcyBOb2RlIHsgXHJcbiAgcHVibGljIGNsYXNzTmFtZTpzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgaXNBYnN0cmFjdDpib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHN1cGVyQ2xhc3NOYW1lOnN0cmluZyA9IG51bGw7XHJcbiAgcHVibGljIG1lbWJlcnM6RmllbGRbXSA9IFtdO1xyXG4gIHB1YmxpYyBjaGlsZHJlbjpOb2RlW10gPSBbXTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yICh7IGNsYXNzTmFtZSwgbWVtYmVycyA9IG51bGwsIGlzQWJzdHJhY3QgPSBmYWxzZSwgc3VwZXJDbGFzc05hbWUgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwgfSBcclxuICAgIDoge2NsYXNzTmFtZTogc3RyaW5nLCBtZW1iZXJzPzogW3N0cmluZywgc3RyaW5nXVtdLCBpc0Fic3RyYWN0PzogYm9vbGVhbiwgc3VwZXJDbGFzc05hbWU/OnN0cmluZywgY2hpbGRyZW4/OiBOb2RlW119KSB7XHJcbiAgICB0aGlzLmNsYXNzTmFtZSArPSBgVW5pJHtjbGFzc05hbWV9YDtcclxuICAgIHRoaXMuaXNBYnN0cmFjdCA9IGlzQWJzdHJhY3Q7XHJcbiAgICBpZiAoc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgdGhpcy5zdXBlckNsYXNzTmFtZSA9IGAke3N1cGVyQ2xhc3NOYW1lfWA7XHJcbiAgICB9XHJcbiAgICBpZiAobWVtYmVycykge1xyXG4gICAgICBmb3IgKGxldCBbbmFtZSx0eXBlXSBvZiBtZW1iZXJzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydFVwcGVyKHR5cGUpICYmICF0aGlzLmlzTm9kZUhlcGxlcih0eXBlKSkge1xyXG4gICAgICAgICAgdHlwZSA9IGBVbmkke3R5cGV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZW1iZXJzLnB1c2gobmV3IEZpZWxkKG5hbWUsdHlwZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgsIGFycmF5KSA9PiB7IFxyXG4gICAgICAgIGVsZW1lbnQuc3VwZXJDbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZTsgXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzU3RhcnRVcHBlcihzdHI6c3RyaW5nKTpib29sZWFuIHtcclxuICAgIHJldHVybiBzdHIuY2hhckF0KDApLm1hdGNoKC9eW0EtWl0rJC8pID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc05vZGVIZXBsZXIoc3RyOnN0cmluZyk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gc3RyLmluY2x1ZGVzKGBDb2RlUmFuZ2VgKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBpbmRlbnQobjpudW1iZXIpOnN0cmluZyB7XHJcbiAgICBjb25zdCBzcGFjZSA9IGBcXHUwMDIwXFx1MDAyMGA7XHJcbiAgICBsZXQgcmV0ID0gYGA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xyXG4gICAgICByZXQgKz0gc3BhY2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlSW1wb3J0VGV4dCgpOnN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgY29uc3QgaW1wb3J0czpzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgaW1wb3J0cy5wdXNoKHRoaXMuc3VwZXJDbGFzc05hbWUpO1xyXG4gICAgICByZXQgKz0gYGltcG9ydCAke3RoaXMuc3VwZXJDbGFzc05hbWV9IGZyb20gJy4vJHt0aGlzLnN1cGVyQ2xhc3NOYW1lfSc7XFxuYDtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWVsZC50eXBlO1xyXG4gICAgICBpZiAodHlwZS5zdGFydHNXaXRoKGBVbmlgKSkge1xyXG4gICAgICAgIGlmICh0eXBlLmVuZHNXaXRoKGBbXWApKSB7XHJcbiAgICAgICAgICBjb25zdCB0ID0gdHlwZS5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgICBpZiAoIWltcG9ydHMuaW5jbHVkZXModCkpIHtcclxuICAgICAgICAgICAgaW1wb3J0cy5wdXNoKHQpO1xyXG4gICAgICAgICAgICByZXQgKz0gYGltcG9ydCAke3R9IGZyb20gJy4vJHt0fSc7XFxuYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCFpbXBvcnRzLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgIGltcG9ydHMucHVzaCh0eXBlKTtcclxuICAgICAgICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0eXBlfSBmcm9tICcuLyR7dHlwZX0nO1xcbmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNOb2RlSGVwbGVyKHR5cGUpKSB7XHJcbiAgICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0eXBlfSBmcm9tICcuLi9ub2RlX2hlbHBlci8ke3R5cGV9JztgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWUgPT09ICdVbmlOb2RlJykge1xyXG4gICAgICByZXQgKz0gYHJlcXVpcmUoJy4uL25vZGVfaGVscGVyL0V4dGVuc2lvbicpO2A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlQ2xhc3NEZWNUZXh0KCk6c3RyaW5nIHtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gJyc7XHJcbiAgICByZXQgKz0gYGV4cG9ydCBkZWZhdWx0IGA7XHJcbiAgICBpZiAodGhpcy5pc0Fic3RyYWN0KSB7XHJcbiAgICAgIHJldCArPSBgYWJzdHJhY3QgYDtcclxuICAgIH1cclxuICAgIHJldCArPSBgY2xhc3MgJHt0aGlzLmNsYXNzTmFtZX0gYDtcclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldCArPSBgZXh0ZW5kcyAke3RoaXMuc3VwZXJDbGFzc05hbWV9IGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlTWVtYmVyVGV4dCgpOnN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czF9cHVibGljICR7ZmllbGQubmFtZX06ICR7ZmllbGQudHlwZX07XFxuYDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PT0gJ1VuaU5vZGUnKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMX1wdWJsaWMgZmllbGRzOiBNYXA8c3RyaW5nLEZ1bmN0aW9uPjtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUNvbnN0cnVjdG9yKCk6c3RyaW5nIHtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gJyc7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGNvbnN0IHMyID0gYCR7dGhpcy5pbmRlbnQoMil9YDtcclxuICAgIGNvbnN0IHMzID0gYCR7dGhpcy5pbmRlbnQoMyl9YDtcclxuICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICByZXQgKz0gYCR7czF9cHVibGljIGNvbnN0cnVjdG9yKCk7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMX1wdWJsaWMgY29uc3RydWN0b3IoYDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtmaWVsZC5uYW1lfTogJHtmaWVsZC50eXBlfSwgYDtcclxuICAgIH1cclxuICAgIHJldCA9IHJldC5zbGljZSgwLCAtMik7XHJcbiAgICByZXQgKz0gYCk7XFxuYDtcclxuXHJcbiAgICByZXQgKz0gYCR7czF9cHVibGljIGNvbnN0cnVjdG9yKGA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7ZmllbGQubmFtZX0/OiAke2ZpZWxkLnR5cGV9LCBgO1xyXG4gICAgfVxyXG4gICAgcmV0ID0gcmV0LnNsaWNlKDAsIC0yKTtcclxuICAgIHJldCArPSBgKSB7XFxuYDtcclxuXHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYCR7czJ9c3VwZXIoKTtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGAke3MyfWlmIChgO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9ID09PSB1bmRlZmluZWQgJiYgYDtcclxuICAgIH1cclxuICAgIHJldCA9IHJldC5zbGljZSgwLCAtNCk7XHJcbiAgICByZXQgKz0gYCkge1xcbmA7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgLy8gaWYgKGZpZWxkLnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIC8vICAgcmV0ICs9IGAke3MzfXRoaXMuJHtmaWVsZC5uYW1lfSA9ICcnO1xcbmA7XHJcbiAgICAgIC8vIH1cclxuICAgICAgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoJ1tdJykpIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gW107XFxuYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gbnVsbDtcXG5gO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKCdVbmknKSkge1xyXG4gICAgICAvLyAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSBuZXcgJHtmaWVsZC50eXBlfSgpO1xcbmA7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICByZXQgKz0gYCR7czJ9fWA7XHJcblxyXG4gICAgaWYgKDEgPCB0aGlzLm1lbWJlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldCArPSBgIGVsc2UgaWYgKGA7XHJcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9ID09PSB1bmRlZmluZWQgfHwgYDtcclxuICAgICAgfVxyXG4gICAgICByZXQgPSByZXQuc2xpY2UoMCwgLTQpO1xyXG4gICAgICByZXQgKz0gYClgO1xyXG4gICAgICByZXQgKz0gYCB7XFxuJHtzM310aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXJndW1lbnRzJyk7XFxuJHtzMn19YDtcclxuICAgIH1cclxuICAgIHJldCArPSBgIGVsc2Uge1xcbmA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gJHtmaWVsZC5uYW1lfTtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGAke3MyfX1cXG5gO1xyXG5cclxuICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PT0gJ1VuaU5vZGUnKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn10aGlzLmZpZWxkcyA9IG5ldyBNYXA8c3RyaW5nLEZ1bmN0aW9uPigpO1xcbmA7XHJcbiAgICAgIHJldCArPSBgJHtzMn10aGlzLmZpZWxkcy5zZXQoJ2NvbW1lbnRzJywgU3RyaW5nKTtcXG5gO1xyXG4gICAgICByZXQgKz0gYCR7czJ9dGhpcy5maWVsZHMuc2V0KCdjb2RlUmFuZ2UnLCBDb2RlUmFuZ2UpO1xcbmA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIHJldCArPSBgJHtzMn10aGlzLmZpZWxkcy5zZXQoJyR7ZmllbGQubmFtZX0nLCBgO1xyXG4gICAgICAgIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKGBzdHJpbmdgKSkge1xyXG4gICAgICAgICAgcmV0ICs9IGBTdHJpbmdgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgYm9vbGVhbmApKSB7XHJcbiAgICAgICAgICByZXQgKz0gYEJvb2xlYW5gO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgbnVtYmVyYCkpIHtcclxuICAgICAgICAgIHJldCArPSBgTnVtYmVyYDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYGFueWApKSB7XHJcbiAgICAgICAgICByZXQgKz0gYE9iamVjdGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKCdbXScpKSB7XHJcbiAgICAgICAgICByZXQgKz0gZmllbGQudHlwZS5zdWJzdHIoMCxmaWVsZC50eXBlLmxlbmd0aCAtIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXQgKz0gZmllbGQudHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0ICs9IGApO1xcbmA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldCArPSBgJHtzMX19XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VUb1N0cmluZ1RleHQoKTpzdHJpbmcge1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBjb25zdCBzMiA9IGAke3RoaXMuaW5kZW50KDIpfWA7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9IGAke3MxfXB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xcbmA7XHJcbiAgICByZXQgKz0gYCR7czJ9cmV0dXJuICcke3RoaXMuY2xhc3NOYW1lLnN1YnN0cigzKX0oJ2A7XHJcbiAgICBsZXQgaXNGaXJzdCA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAoaXNGaXJzdCkge1xyXG4gICAgICAgICAgcmV0ICs9IGAgKyBgO1xyXG4gICAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWlzRmlyc3QpIHtcclxuICAgICAgICAgIHJldCArPSBgICsgJywgJyArIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldCArPSBgdGhpcy4ke2ZpZWxkLm5hbWV9YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgICsgJyknO1xcbiR7czF9fVxcbmA7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlVG9FcXVhbHNUZXh0KCk6c3RyaW5nIHtcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgY29uc3QgczQgPSBgJHt0aGlzLmluZGVudCg0KX1gO1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSBgJHtzMX1wdWJsaWMgZXF1YWxzKG9iajogYW55KTogYm9vbGVhbiB7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMn1pZiAob2JqID09IG51bGwgfHwgIShvYmogaW5zdGFuY2VvZiAke3RoaXMuY2xhc3NOYW1lfSkpIHJldHVybiBmYWxzZTtcXG5gO1xyXG4gICAgcmV0ICs9IGAke3MyfWNvbnN0IHRoYXQ6ICR7dGhpcy5jbGFzc05hbWV9ID0gPCR7dGhpcy5jbGFzc05hbWV9Pm9iajtcXG5gO1xyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgcmV0ICs9IGAke3MyfXJldHVybiBzdXBlci5lcXVhbHModGhhdClgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0ICs9IGAke3MyfXJldHVybiB0aGF0ICE9PSBudWxsYDtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIGlmIChmaWVsZC50eXBlID09PSAnc3RyaW5nJyBcclxuICAgICAgfHwgZmllbGQudHlwZSA9PT0gJ251bWJlcicgXHJcbiAgICAgIHx8IGZpZWxkLnR5cGUgPT09ICdib29sZWFuJyBcclxuICAgICAgfHwgZmllbGQudHlwZSA9PT0gJ2FueScpIHtcclxuICAgICAgICByZXQgKz0gYFxcbiR7czR9JiYgKHRoaXMuJHtmaWVsZC5uYW1lfSA9PSBudWxsID8gdGhhdC4ke2ZpZWxkLm5hbWV9ID09IG51bGwgOiB0aGlzLiR7ZmllbGQubmFtZX0gPT09IHRoYXQuJHtmaWVsZC5uYW1lfSlgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldCArPSBgXFxuJHtzNH0mJiAodGhpcy4ke2ZpZWxkLm5hbWV9ID09IG51bGwgPyB0aGF0LiR7ZmllbGQubmFtZX0gPT0gbnVsbCA6IHRoaXMuJHtmaWVsZC5uYW1lfS5lcXVhbHModGhhdC4ke2ZpZWxkLm5hbWV9KSlgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0ICs9IGA7XFxuJHtzMX19XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VNZXJnZVRleHQoKTpzdHJpbmcge1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBjb25zdCBzMiA9IGAke3RoaXMuaW5kZW50KDIpfWA7XHJcbiAgICBjb25zdCBzMyA9IGAke3RoaXMuaW5kZW50KDMpfWA7XHJcbiAgICBjb25zdCBzNCA9IGAke3RoaXMuaW5kZW50KDQpfWA7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9IGAke3MxfXB1YmxpYyBtZXJnZSh0aGF0OiAke3RoaXMuY2xhc3NOYW1lfSkge1xcbmA7XHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYCR7czJ9c3VwZXIubWVyZ2UodGhhdCk7XFxuYDtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1pZiAodGhhdC4ke2ZpZWxkLm5hbWV9ICE9IG51bGwpIHtcXG5gO1xyXG4gICAgICBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgW11gKSkge1xyXG4gICAgICAgIHJldCArPSBgJHtzM31pZiAodGhpcy4ke2ZpZWxkLm5hbWV9ID09IG51bGwpIHtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzNH10aGlzLiR7ZmllbGQubmFtZX0gPSB0aGF0LiR7ZmllbGQubmFtZX07XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czN9fSBlbHNlIHtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzNH10aGlzLiR7ZmllbGQubmFtZX0ucHVzaCguLi50aGF0LiR7ZmllbGQubmFtZX0pO1xcbmA7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfX1cXG5gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSB0aGF0LiR7ZmllbGQubmFtZX07XFxuYDtcclxuICAgICAgfVxyXG4gICAgICByZXQgKz0gYCR7czJ9fVxcbmA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0ICs9IGAke3MxfX1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgcmV0ICs9IGAke3RoaXMubWFrZUltcG9ydFRleHQoKX1cXG5gO1xyXG4gICAgcmV0ICs9IGAke3RoaXMubWFrZUNsYXNzRGVjVGV4dCgpfWA7XHJcbiAgICByZXQgKz0gYHtcXG5gO1xyXG4gICAgaWYgKDAgPCB0aGlzLm1lbWJlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VNZW1iZXJUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZUNvbnN0cnVjdG9yKCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvU3RyaW5nVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb0VxdWFsc1RleHQoKX1cXG5gO1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlTWVyZ2VUZXh0KCl9YDtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNBYnN0cmFjdCkge1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlVG9TdHJpbmdUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvRXF1YWxzVGV4dCgpfVxcbmA7ICAgICAgXHJcbiAgICB9XHJcbiAgICByZXQgKz0gYH1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbiAgcHVibGljIHdyaXRlKCkge1xyXG4gICAgZnMud3JpdGVGaWxlKGBzcmMvbm9kZS8ke3RoaXMuY2xhc3NOYW1lfS50c2AsIHRoaXMudG9TdHJpbmcoKSwgKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQud3JpdGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyYXRvciB7ICBcclxuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCkge1xyXG4gICAgY29uc3Qgbm9kZSA9IFxyXG4gICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YE5vZGVgLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgIFtgY29tbWVudHNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICBbYGNvZGVSYW5nZWAsIGBDb2RlUmFuZ2VgXSxcclxuICAgICAgICBdLGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFByb2dyYW1gLFxyXG4gICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgW2BibG9ja2AsIGBCbG9ja2BdLFxyXG4gICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEV4cHJgLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTnVtYmVyTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgYW55YF0sXHJcbiAgICAgICAgICAgICAgICBbYHNpZ25lZGAsIGBib29sZWFuYF0sXHJcbiAgICAgICAgICAgICAgICBbYGJ5dGVzYCwgYG51bWJlcmBdLFxyXG4gICAgICAgICAgICAgICAgW2Bpc0Zsb2F0YCwgYGJvb2xlYW5gXSxcclxuICAgICAgICAgICAgICAgIFtgdHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgcHJlZml4YCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2BzdWZpeGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEludExpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBudW1iZXJgXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBEb3VibGVMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgbnVtYmVyYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQ2hhcmFjdGVyTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN0cmluZ0xpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQm9vbExpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYGJvb2xlYW5gXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YENhc3RgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YElkZW50YCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2BuYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQXJyYXlgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYGl0ZW1zYCwgYEV4cHJbXWBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIC8vIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRmllbGRBY2Nlc3NgLFxyXG4gICAgICAgICAgICAgIC8vICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgLy8gICBbYHJlY2VpdmVyYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAvLyAgIFtgZmllbGROYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgIC8vICAgW2BpbmRleGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgLy8gICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBNZXRob2RDYWxsYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2ByZWNlaXZlcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBbYG1ldGhvZE5hbWVgLCBgSWRlbnRgXSxcclxuICAgICAgICAgICAgICAgIFtgYXJnc2AsIGBFeHByW11gXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFVuYXJ5T3BgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYG9wZXJhdG9yYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2BleHByYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJpbk9wYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICBbYG9wZXJhdG9yYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICBbYGxlZnRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICBbYHJpZ2h0YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFRlcm5hcnlPcGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgW2B0cnVlRXhwcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgIFtgZmFsc2VFeHByYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN0YXRlbWVudGAsIGlzQWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJyZWFrYCB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDb250aW51ZWAgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRW1wdHlTdGF0ZW1lbnRgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFJldHVybmAgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEp1bXBgICxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgZGVzdGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTGFiZWxgICxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQmxvY2tgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BibG9ja0xhYmVsYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bib2R5YCwgYFN0YXRlbWVudFtdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YElmYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHRydWVTdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGZhbHNlU3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBGb3JgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bpbml0YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN0ZXBgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLCAgICAgXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRW5oYW5jZWRGb3JgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2Btb2RpZmllcnNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29udGFpbmVyYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgc3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSwgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFdoaWxlYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN0YXRlbWVudGAsIGBTdGF0ZW1lbnRgXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOltcclxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRG9XaGlsZWAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgU3dpdGNoYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNhc2VzYCwgYFN3aXRjaFVuaXRbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN3aXRjaFVuaXRgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgIFtgbGFiZWxgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICBbYHN0YXRlbWVudGAsIGBTdGF0ZW1lbnRbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLCBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBEZWNyYWxhdGlvbmAsIGlzQWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YENsYXNzRGVjYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY2xhc3NOYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Btb2RpZmllcnNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbWVtYmVyc2AsIGBEZWNyYWxhdGlvbltdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN1cGVyQ2xhc3NgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgaW50ZXJmYWNlc2AsIGBzdHJpbmdbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBGdW5jdGlvbkRlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1vZGlmaWVyc2AsIGBzdHJpbmdbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2ByZXR1cm5UeXBlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BwYXJhbXNgLCBgUGFyYW1bXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BibG9ja2AsIGBCbG9ja2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSwgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFZhcmlhYmxlRGVmYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B0eXBlU3VmZml4YCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSwgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFZhcmlhYmxlRGVjYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhcmlhYmxlc2AsIGBWYXJpYWJsZURlZltdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFBhcmFtYCB9KSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pLCAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF19KTtcclxuICAgIG5vZGUud3JpdGUoKTtcclxuICB9XHJcbn1cclxuR2VuZXJhdG9yLmdlbmVyYXRlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ub2RlL0dlbmVyYXRvci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiJdLCJzb3VyY2VSb290IjoiIn0=