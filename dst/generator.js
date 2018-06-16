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
var fs = __webpack_require__(43);
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
                if (field.type === 'string' || field.type === 'number' || field.type === 'boolean') {
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
                    members: [
                    // [`value`, `number`],
                    ["signed", "boolean"], ["bytes", "number"], ["isFloat", "boolean"], ["type", "string"], ["prefix", "string"], ["sufix", "string"]],
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
                    members: [["receiver", "Expr"], ["methodName", "string"], ["args", "Expr[]"]] }), new Node({ className: "UnaryOp",
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

/***/ 43:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIDg1OWI0ZDkyMDA1YWU2MDdmNTI1IiwiQzpcXGRldmVsb3BcXHVuaWNvZW4udHNcXHNyY1xcbm9kZVxcR2VuZXJhdG9yLnRzIiwiZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLDZCQUF5QjtBQUN6QjtBQUNFLG1CQUFxQyxNQUFvQjtBQUEvQixhQUFJLE9BQU87QUFBUyxhQUFJLE9BQVU7QUFBQztBQUMvRCxXQUFDO0FBQUE7QUFFRDtBQU9FLGtCQUNzSDtZQURoRyxlQUFTO1lBQUUsUUFBYztZQUFkLGlDQUFjO1lBQUUsUUFBa0I7WUFBbEIscUNBQWtCO1lBQUUsUUFBcUI7WUFBckIsd0NBQXFCO1lBQUUsUUFBZTtZQUFmLGtDQUFlO0FBQTNHLG9CQXFCQztBQTNCTSxhQUFTLFlBQWE7QUFDdEIsYUFBVSxhQUFpQjtBQUMzQixhQUFjLGlCQUFlO0FBQzdCLGFBQU8sVUFBYztBQUNyQixhQUFRLFdBQWE7QUFJdEIsYUFBVSxhQUFJLFFBQWtCO0FBQ2hDLGFBQVcsYUFBYztBQUMxQixZQUFnQixnQkFBRTtBQUNmLGlCQUFlLGlCQUFHLEtBQ3hCO0FBQUM7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VTtBQUNyQixpQ0FBQyxDQUNOLENBQU8sUUFBUyxTQUNoQixDQUFRLFNBRVY7QUFMTyxxQkFBVCxPQU1RLE9BQVksV0FBYztBQUN6QixpQ0FBQyxDQUNSLENBQVEsU0FBVyxXQUNuQixDQUFPLFFBQVMsU0FDaEIsQ0FBWSxhQUloQjtBQVJXLHFCQUFUO0FBMURLLGlCQUFULE9BbUVRLE9BQVksV0FBZSxlQUFZLFlBQU07QUFDM0MsOEJBQUUsQ0FDUixJQUFRLEtBQUMsRUFBVyxXQUFZO0FBQ3ZCLGlDQUFDLENBQ04sQ0FBWSxhQUFXLFdBQ3ZCLENBQVksYUFBYSxhQUN6QixDQUFVLFdBQWtCLGtCQUM1QixDQUFhLGNBQWEsYUFDMUIsQ0FBYSxjQUNaLHFCQUNHLE9BQVksV0FBZTtBQUMxQixpQ0FBQyxDQUNOLENBQU8sUUFBVyxXQUNsQixDQUFZLGFBQWEsYUFDekIsQ0FBYSxjQUFXLFdBQ3hCLENBQVMsVUFBWSxZQUNyQixDQUFRLFNBQ1AsU0FQSSxFQUFULE9BUVEsT0FBWSxXQUFlO0FBQzFCLGlDQUFDLENBQ04sQ0FBTyxRQUFXLFdBQ2xCLENBQVEsU0FBUyxTQUNqQixDQUFhLGNBQ1osVUFMSSxFQUFULE9BTVEsT0FBWSxXQUFlO0FBQzFCLGlDQUFDLENBQ04sQ0FBWSxhQUFhLGFBQ3pCLENBQU8sUUFBVyxXQUNsQixDQUFZLGFBQ2I7QUFDTyxrQ0FBQyxDQUNQLElBQVEsS0FBQyxFQUFXLFdBTTlCLFdBYmUsRUFBVDtBQXhCSyxpQkFBVDtBQW5KSyxhQUFULENBTFUsQ0FKTCxFQUFUO0FBa01FLGFBQ047QUFBQztBQUNILFdBQUM7QUFBQTs7QUFDUSxVQUFZLFc7Ozs7Ozs7QUN4ZnJCLCtCIiwiZmlsZSI6ImdlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODU5YjRkOTIwMDVhZTYwN2Y1MjUiLCJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmNsYXNzIEZpZWxkIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIG5hbWU6c3RyaW5nLCBwdWJsaWMgdHlwZTpzdHJpbmcpIHt9XHJcbn1cclxuXHJcbmNsYXNzIE5vZGUgeyBcclxuICBwdWJsaWMgY2xhc3NOYW1lOnN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBpc0Fic3RyYWN0OmJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgc3VwZXJDbGFzc05hbWU6c3RyaW5nID0gbnVsbDtcclxuICBwdWJsaWMgbWVtYmVyczpGaWVsZFtdID0gW107XHJcbiAgcHVibGljIGNoaWxkcmVuOk5vZGVbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IgKHsgY2xhc3NOYW1lLCBtZW1iZXJzID0gbnVsbCwgaXNBYnN0cmFjdCA9IGZhbHNlLCBzdXBlckNsYXNzTmFtZSA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCB9IFxyXG4gICAgOiB7Y2xhc3NOYW1lOiBzdHJpbmcsIG1lbWJlcnM/OiBbc3RyaW5nLCBzdHJpbmddW10sIGlzQWJzdHJhY3Q/OiBib29sZWFuLCBzdXBlckNsYXNzTmFtZT86c3RyaW5nLCBjaGlsZHJlbj86IE5vZGVbXX0pIHtcclxuICAgIHRoaXMuY2xhc3NOYW1lICs9IGBVbmkke2NsYXNzTmFtZX1gO1xyXG4gICAgdGhpcy5pc0Fic3RyYWN0ID0gaXNBYnN0cmFjdDtcclxuICAgIGlmIChzdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICB0aGlzLnN1cGVyQ2xhc3NOYW1lID0gYCR7c3VwZXJDbGFzc05hbWV9YDtcclxuICAgIH1cclxuICAgIGlmIChtZW1iZXJzKSB7XHJcbiAgICAgIGZvciAobGV0IFtuYW1lLHR5cGVdIG9mIG1lbWJlcnMpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0VXBwZXIodHlwZSkgJiYgIXRoaXMuaXNOb2RlSGVwbGVyKHR5cGUpKSB7XHJcbiAgICAgICAgICB0eXBlID0gYFVuaSR7dHlwZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lbWJlcnMucHVzaChuZXcgRmllbGQobmFtZSx0eXBlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCwgYXJyYXkpID0+IHsgXHJcbiAgICAgICAgZWxlbWVudC5zdXBlckNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lOyBcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNTdGFydFVwcGVyKHN0cjpzdHJpbmcpOmJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkubWF0Y2goL15bQS1aXSskLykgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTm9kZUhlcGxlcihzdHI6c3RyaW5nKTpib29sZWFuIHtcclxuICAgIHJldHVybiBzdHIuaW5jbHVkZXMoYENvZGVSYW5nZWApO1xyXG4gIH1cclxuICBwcml2YXRlIGluZGVudChuOm51bWJlcik6c3RyaW5nIHtcclxuICAgIGNvbnN0IHNwYWNlID0gYFxcdTAwMjBcXHUwMDIwYDtcclxuICAgIGxldCByZXQgPSBgYDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XHJcbiAgICAgIHJldCArPSBzcGFjZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VJbXBvcnRUZXh0KCk6c3RyaW5nIHtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gJyc7XHJcbiAgICBjb25zdCBpbXBvcnRzOnN0cmluZ1tdID0gW107XHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICBpbXBvcnRzLnB1c2godGhpcy5zdXBlckNsYXNzTmFtZSk7XHJcbiAgICAgIHJldCArPSBgaW1wb3J0ICR7dGhpcy5zdXBlckNsYXNzTmFtZX0gZnJvbSAnLi8ke3RoaXMuc3VwZXJDbGFzc05hbWV9JztcXG5gO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgY29uc3QgdHlwZSA9IGZpZWxkLnR5cGU7XHJcbiAgICAgIGlmICh0eXBlLnN0YXJ0c1dpdGgoYFVuaWApKSB7XHJcbiAgICAgICAgaWYgKHR5cGUuZW5kc1dpdGgoYFtdYCkpIHtcclxuICAgICAgICAgIGNvbnN0IHQgPSB0eXBlLnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAgIGlmICghaW1wb3J0cy5pbmNsdWRlcyh0KSkge1xyXG4gICAgICAgICAgICBpbXBvcnRzLnB1c2godCk7XHJcbiAgICAgICAgICAgIHJldCArPSBgaW1wb3J0ICR7dH0gZnJvbSAnLi8ke3R9JztcXG5gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoIWltcG9ydHMuaW5jbHVkZXModHlwZSkpIHtcclxuICAgICAgICAgICAgaW1wb3J0cy5wdXNoKHR5cGUpO1xyXG4gICAgICAgICAgICByZXQgKz0gYGltcG9ydCAke3R5cGV9IGZyb20gJy4vJHt0eXBlfSc7XFxuYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc05vZGVIZXBsZXIodHlwZSkpIHtcclxuICAgICAgICByZXQgKz0gYGltcG9ydCAke3R5cGV9IGZyb20gJy4uL25vZGVfaGVscGVyLyR7dHlwZX0nO2A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PT0gJ1VuaU5vZGUnKSB7XHJcbiAgICAgIHJldCArPSBgcmVxdWlyZSgnLi4vbm9kZV9oZWxwZXIvRXh0ZW5zaW9uJyk7YDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VDbGFzc0RlY1RleHQoKTpzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIHJldCArPSBgZXhwb3J0IGRlZmF1bHQgYDtcclxuICAgIGlmICh0aGlzLmlzQWJzdHJhY3QpIHtcclxuICAgICAgcmV0ICs9IGBhYnN0cmFjdCBgO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGBjbGFzcyAke3RoaXMuY2xhc3NOYW1lfSBgO1xyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgcmV0ICs9IGBleHRlbmRzICR7dGhpcy5zdXBlckNsYXNzTmFtZX0gYDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VNZW1iZXJUZXh0KCk6c3RyaW5nIHtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gJyc7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMX1wdWJsaWMgJHtmaWVsZC5uYW1lfTogJHtmaWVsZC50eXBlfTtcXG5gO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2xhc3NOYW1lID09PSAnVW5pTm9kZScpIHtcclxuICAgICAgcmV0ICs9IGAke3MxfXB1YmxpYyBmaWVsZHM6IE1hcDxzdHJpbmcsRnVuY3Rpb24+O1xcbmA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlQ29uc3RydWN0b3IoKTpzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgY29uc3QgczMgPSBgJHt0aGlzLmluZGVudCgzKX1gO1xyXG4gICAgLy8gY29uc3RydWN0b3JcclxuICAgIHJldCArPSBgJHtzMX1wdWJsaWMgY29uc3RydWN0b3IoKTtcXG5gO1xyXG4gICAgcmV0ICs9IGAke3MxfXB1YmxpYyBjb25zdHJ1Y3RvcihgO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9OiAke2ZpZWxkLnR5cGV9LCBgO1xyXG4gICAgfVxyXG4gICAgcmV0ID0gcmV0LnNsaWNlKDAsIC0yKTtcclxuICAgIHJldCArPSBgKTtcXG5gO1xyXG5cclxuICAgIHJldCArPSBgJHtzMX1wdWJsaWMgY29uc3RydWN0b3IoYDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtmaWVsZC5uYW1lfT86ICR7ZmllbGQudHlwZX0sIGA7XHJcbiAgICB9XHJcbiAgICByZXQgPSByZXQuc2xpY2UoMCwgLTIpO1xyXG4gICAgcmV0ICs9IGApIHtcXG5gO1xyXG5cclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1zdXBlcigpO1xcbmA7XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYCR7czJ9aWYgKGA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7ZmllbGQubmFtZX0gPT09IHVuZGVmaW5lZCAmJiBgO1xyXG4gICAgfVxyXG4gICAgcmV0ID0gcmV0LnNsaWNlKDAsIC00KTtcclxuICAgIHJldCArPSBgKSB7XFxuYDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICAvLyBpZiAoZmllbGQudHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgLy8gICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gJyc7XFxuYDtcclxuICAgICAgLy8gfVxyXG4gICAgICBpZiAoZmllbGQudHlwZS5pbmNsdWRlcygnW10nKSkge1xyXG4gICAgICAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSBbXTtcXG5gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSBudWxsO1xcbmA7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoJ1VuaScpKSB7XHJcbiAgICAgIC8vICAgcmV0ICs9IGAke3MzfXRoaXMuJHtmaWVsZC5uYW1lfSA9IG5ldyAke2ZpZWxkLnR5cGV9KCk7XFxuYDtcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgJHtzMn19YDtcclxuXHJcbiAgICBpZiAoMSA8IHRoaXMubWVtYmVycy5sZW5ndGgpIHtcclxuICAgICAgcmV0ICs9IGAgZWxzZSBpZiAoYDtcclxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICByZXQgKz0gYCR7ZmllbGQubmFtZX0gPT09IHVuZGVmaW5lZCB8fCBgO1xyXG4gICAgICB9XHJcbiAgICAgIHJldCA9IHJldC5zbGljZSgwLCAtNCk7XHJcbiAgICAgIHJldCArPSBgKWA7XHJcbiAgICAgIHJldCArPSBgIHtcXG4ke3MzfXRocm93IG5ldyBFcnJvcignaW52YWxpZCBhcmd1bWVudHMnKTtcXG4ke3MyfX1gO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGAgZWxzZSB7XFxuYDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSAke2ZpZWxkLm5hbWV9O1xcbmA7XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYCR7czJ9fVxcbmA7XHJcblxyXG4gICAgaWYgKHRoaXMuY2xhc3NOYW1lID09PSAnVW5pTm9kZScpIHtcclxuICAgICAgcmV0ICs9IGAke3MyfXRoaXMuZmllbGRzID0gbmV3IE1hcDxzdHJpbmcsRnVuY3Rpb24+KCk7XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3MyfXRoaXMuZmllbGRzLnNldCgnY29tbWVudHMnLCBTdHJpbmcpO1xcbmA7XHJcbiAgICAgIHJldCArPSBgJHtzMn10aGlzLmZpZWxkcy5zZXQoJ2NvZGVSYW5nZScsIENvZGVSYW5nZSk7XFxuYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgcmV0ICs9IGAke3MyfXRoaXMuZmllbGRzLnNldCgnJHtmaWVsZC5uYW1lfScsIGA7XHJcbiAgICAgICAgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYHN0cmluZ2ApKSB7XHJcbiAgICAgICAgICByZXQgKz0gYFN0cmluZ2A7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKGBib29sZWFuYCkpIHtcclxuICAgICAgICAgIHJldCArPSBgQm9vbGVhbmA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKGBudW1iZXJgKSkge1xyXG4gICAgICAgICAgcmV0ICs9IGBOdW1iZXJgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5pbmNsdWRlcygnW10nKSkge1xyXG4gICAgICAgICAgcmV0ICs9IGZpZWxkLnR5cGUuc3Vic3RyKDAsZmllbGQudHlwZS5sZW5ndGggLSAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0ICs9IGZpZWxkLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldCArPSBgKTtcXG5gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYCR7czF9fVxcbmA7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlVG9TdHJpbmdUZXh0KCk6c3RyaW5nIHtcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSBgJHtzMX1wdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcXG5gO1xyXG4gICAgcmV0ICs9IGAke3MyfXJldHVybiAnJHt0aGlzLmNsYXNzTmFtZS5zdWJzdHIoMyl9KCdgO1xyXG4gICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKGlzRmlyc3QpIHtcclxuICAgICAgICAgIHJldCArPSBgICsgYDtcclxuICAgICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc0ZpcnN0KSB7XHJcbiAgICAgICAgICByZXQgKz0gYCArICcsICcgKyBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXQgKz0gYHRoaXMuJHtmaWVsZC5uYW1lfWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXQgKz0gYCArICcpJztcXG4ke3MxfX1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVRvRXF1YWxzVGV4dCgpOnN0cmluZyB7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGNvbnN0IHMyID0gYCR7dGhpcy5pbmRlbnQoMil9YDtcclxuICAgIGNvbnN0IHM0ID0gYCR7dGhpcy5pbmRlbnQoNCl9YDtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gYCR7czF9cHVibGljIGVxdWFscyhvYmo6IGFueSk6IGJvb2xlYW4ge1xcbmA7XHJcbiAgICByZXQgKz0gYCR7czJ9aWYgKG9iaiA9PSBudWxsIHx8ICEob2JqIGluc3RhbmNlb2YgJHt0aGlzLmNsYXNzTmFtZX0pKSByZXR1cm4gZmFsc2U7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMn1jb25zdCB0aGF0OiAke3RoaXMuY2xhc3NOYW1lfSA9IDwke3RoaXMuY2xhc3NOYW1lfT5vYmo7XFxuYDtcclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1yZXR1cm4gc3VwZXIuZXF1YWxzKHRoYXQpYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1yZXR1cm4gdGhhdCAhPT0gbnVsbGA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3N0cmluZycgXHJcbiAgICAgIHx8IGZpZWxkLnR5cGUgPT09ICdudW1iZXInIFxyXG4gICAgICB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICByZXQgKz0gYFxcbiR7czR9JiYgKHRoaXMuJHtmaWVsZC5uYW1lfSA9PSBudWxsID8gdGhhdC4ke2ZpZWxkLm5hbWV9ID09IG51bGwgOiB0aGlzLiR7ZmllbGQubmFtZX0gPT09IHRoYXQuJHtmaWVsZC5uYW1lfSlgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldCArPSBgXFxuJHtzNH0mJiAodGhpcy4ke2ZpZWxkLm5hbWV9ID09IG51bGwgPyB0aGF0LiR7ZmllbGQubmFtZX0gPT0gbnVsbCA6IHRoaXMuJHtmaWVsZC5uYW1lfS5lcXVhbHModGhhdC4ke2ZpZWxkLm5hbWV9KSlgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0ICs9IGA7XFxuJHtzMX19XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VNZXJnZVRleHQoKTpzdHJpbmcge1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBjb25zdCBzMiA9IGAke3RoaXMuaW5kZW50KDIpfWA7XHJcbiAgICBjb25zdCBzMyA9IGAke3RoaXMuaW5kZW50KDMpfWA7XHJcbiAgICBjb25zdCBzNCA9IGAke3RoaXMuaW5kZW50KDQpfWA7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9IGAke3MxfXB1YmxpYyBtZXJnZSh0aGF0OiAke3RoaXMuY2xhc3NOYW1lfSkge1xcbmA7XHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYCR7czJ9c3VwZXIubWVyZ2UodGhhdCk7XFxuYDtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1pZiAodGhhdC4ke2ZpZWxkLm5hbWV9ICE9IG51bGwpIHtcXG5gO1xyXG4gICAgICBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgW11gKSkge1xyXG4gICAgICAgIHJldCArPSBgJHtzM31pZiAodGhpcy4ke2ZpZWxkLm5hbWV9ID09IG51bGwpIHtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzNH10aGlzLiR7ZmllbGQubmFtZX0gPSB0aGF0LiR7ZmllbGQubmFtZX07XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czN9fSBlbHNlIHtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzNH10aGlzLiR7ZmllbGQubmFtZX0ucHVzaCguLi50aGF0LiR7ZmllbGQubmFtZX0pO1xcbmA7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfX1cXG5gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSB0aGF0LiR7ZmllbGQubmFtZX07XFxuYDtcclxuICAgICAgfVxyXG4gICAgICByZXQgKz0gYCR7czJ9fVxcbmA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0ICs9IGAke3MxfX1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgcmV0ICs9IGAke3RoaXMubWFrZUltcG9ydFRleHQoKX1cXG5gO1xyXG4gICAgcmV0ICs9IGAke3RoaXMubWFrZUNsYXNzRGVjVGV4dCgpfWA7XHJcbiAgICByZXQgKz0gYHtcXG5gO1xyXG4gICAgaWYgKDAgPCB0aGlzLm1lbWJlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VNZW1iZXJUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZUNvbnN0cnVjdG9yKCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvU3RyaW5nVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb0VxdWFsc1RleHQoKX1cXG5gO1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlTWVyZ2VUZXh0KCl9YDtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNBYnN0cmFjdCkge1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlVG9TdHJpbmdUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvRXF1YWxzVGV4dCgpfVxcbmA7ICAgICAgXHJcbiAgICB9XHJcbiAgICByZXQgKz0gYH1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbiAgcHVibGljIHdyaXRlKCkge1xyXG4gICAgZnMud3JpdGVGaWxlKGBzcmMvbm9kZS8ke3RoaXMuY2xhc3NOYW1lfS50c2AsIHRoaXMudG9TdHJpbmcoKSwgKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQud3JpdGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyYXRvciB7ICBcclxuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCkge1xyXG4gICAgY29uc3Qgbm9kZSA9IFxyXG4gICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YE5vZGVgLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgIFtgY29tbWVudHNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICBbYGNvZGVSYW5nZWAsIGBDb2RlUmFuZ2VgXSxcclxuICAgICAgICBdLGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFByb2dyYW1gLFxyXG4gICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgW2BibG9ja2AsIGBCbG9ja2BdLFxyXG4gICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEV4cHJgLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTnVtYmVyTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIC8vIFtgdmFsdWVgLCBgbnVtYmVyYF0sXHJcbiAgICAgICAgICAgICAgICBbYHNpZ25lZGAsIGBib29sZWFuYF0sXHJcbiAgICAgICAgICAgICAgICBbYGJ5dGVzYCwgYG51bWJlcmBdLFxyXG4gICAgICAgICAgICAgICAgW2Bpc0Zsb2F0YCwgYGJvb2xlYW5gXSxcclxuICAgICAgICAgICAgICAgIFtgdHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgcHJlZml4YCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2BzdWZpeGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEludExpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBudW1iZXJgXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBEb3VibGVMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgbnVtYmVyYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQ2hhcmFjdGVyTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN0cmluZ0xpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQm9vbExpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYGJvb2xlYW5gXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YENhc3RgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YElkZW50YCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2BuYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQXJyYXlgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYGl0ZW1zYCwgYEV4cHJbXWBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIC8vIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRmllbGRBY2Nlc3NgLFxyXG4gICAgICAgICAgICAgIC8vICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgLy8gICBbYHJlY2VpdmVyYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAvLyAgIFtgZmllbGROYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgIC8vICAgW2BpbmRleGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgLy8gICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBNZXRob2RDYWxsYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2ByZWNlaXZlcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBbYG1ldGhvZE5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBbYGFyZ3NgLCBgRXhwcltdYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBVbmFyeU9wYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2BvcGVyYXRvcmAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgZXhwcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBCaW5PcGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgW2BvcGVyYXRvcmAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgW2BsZWZ0YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgW2ByaWdodGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBUZXJuYXJ5T3BgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgIFtgdHJ1ZUV4cHJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICBbYGZhbHNlRXhwcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBTdGF0ZW1lbnRgLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBCcmVha2AgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQ29udGludWVgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEVtcHR5U3RhdGVtZW50YCB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBSZXR1cm5gICxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBKdW1wYCAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGRlc3RgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YExhYmVsYCAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJsb2NrYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgYmxvY2tMYWJlbGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgYm9keWAsIGBTdGF0ZW1lbnRbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBJZmAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B0cnVlU3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BmYWxzZVN0YXRlbWVudGAsIGBTdGF0ZW1lbnRgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRm9yYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgaW5pdGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdGVwYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgc3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSwgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEVuaGFuY2VkRm9yYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbnRhaW5lcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN0YXRlbWVudGAsIGBTdGF0ZW1lbnRgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBXaGlsZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YERvV2hpbGVgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLCAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN3aXRjaGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BjYXNlc2AsIGBTd2l0Y2hVbml0W11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBTd2l0Y2hVbml0YCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICBbYGxhYmVsYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50W11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSwgXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRGVjcmFsYXRpb25gLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDbGFzc0RlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNsYXNzTmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1lbWJlcnNgLCBgRGVjcmFsYXRpb25bXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdXBlckNsYXNzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGludGVyZmFjZXNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRnVuY3Rpb25EZWNgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BuYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Btb2RpZmllcnNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgcmV0dXJuVHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgcGFyYW1zYCwgYFBhcmFtW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgYmxvY2tgLCBgQmxvY2tgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBWYXJpYWJsZURlZmAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdHlwZVN1ZmZpeGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBWYXJpYWJsZURlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1vZGlmaWVyc2AsIGBzdHJpbmdbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B0eXBlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YXJpYWJsZXNgLCBgVmFyaWFibGVEZWZbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBQYXJhbWAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9KSwgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdfSk7XHJcbiAgICBub2RlLndyaXRlKCk7XHJcbiAgfVxyXG59XHJcbkdlbmVyYXRvci5nZW5lcmF0ZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbm9kZS9HZW5lcmF0b3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiXSwic291cmNlUm9vdCI6IiJ9