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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/node/Generator.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/node/Generator.ts":
/*!*******************************!*\
  !*** ./src/node/Generator.ts ***!
  \*******************************/
/*! no static exports found */
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
var fs = __webpack_require__(/*! fs */ "fs");
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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIiwiQzpcXGRldmVsb3BcXHVuaWNvZW4udHNcXHNyY1xcbm9kZVxcR2VuZXJhdG9yLnRzIiwiZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNFLG1CQUEwQixJQUExQixFQUE4QyxJQUE5QyxFQUF5RDtBQUEvQjtBQUFvQjtBQUFlO0FBQy9EO0FBQUMsQ0FGRDtBQUlBO0FBT0Usa0JBQW9CLEVBQXBCLEVBQ3NIO1lBRGhHLHdCO1lBQVcsZTtZQUFBLG1DO1lBQWdCLGtCO1lBQUEsdUM7WUFBb0Isc0I7WUFBQSwwQztZQUF1QixnQjtZQUFBLG9DO0FBQTVGO0FBTk8seUJBQW1CLEVBQW5CO0FBQ0EsMEJBQXFCLEtBQXJCO0FBQ0EsOEJBQXdC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Q0FERCxFQUFULENBVFEsRUFpQlIsSUFBSSxJQUFKLENBQVMsRUFBRSxXQUFXLGFBQWI7QUFDUCxpQ0FBUSxDQUNOLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FETSxFQUVOLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FGTSxFQUdOLENBQUMsWUFBRCxFQUFlLFFBQWYsQ0FITSxDQURELEVBQVQsQ0FqQlEsRUF1QlIsSUFBSSxJQUFKLENBQVMsRUFBRSxXQUFXLGFBQWI7QUFDUCxpQ0FBUSxDQUNOLENBQUMsV0FBRCxFQUFjLFVBQWQsQ0FETSxFQUVOLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FGTSxFQUdOLENBQUMsV0FBRCxFQUFjLGVBQWQsQ0FITSxDQUREO0FBTVAsa0NBQVMsQ0FDUCxJQUFJLElBQUosQ0FBUyxFQUFFLFdBQVcsT0FBYixFQUFULENBRE8sQ0FORixFQUFULENBdkJRO0FBREgsaUJBQVQsQ0FsSlE7QUFESCxhQUFULENBTFUsQ0FKTCxFQUFULENBREY7QUFtTUEsYUFBSyxLQUFMO0FBQ0QsS0FyTWE7QUFzTWhCO0FBQUMsQ0F2TUQ7O0FBd01BLFVBQVUsUUFBVixHOzs7Ozs7Ozs7OztBQzNmQSwrQiIsImZpbGUiOiJnZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ub2RlL0dlbmVyYXRvci50c1wiKTtcbiIsImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuY2xhc3MgRmllbGQge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTpzdHJpbmcsIHB1YmxpYyB0eXBlOnN0cmluZykge31cclxufVxyXG5cclxuY2xhc3MgTm9kZSB7IFxyXG4gIHB1YmxpYyBjbGFzc05hbWU6c3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGlzQWJzdHJhY3Q6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzdXBlckNsYXNzTmFtZTpzdHJpbmcgPSBudWxsO1xyXG4gIHB1YmxpYyBtZW1iZXJzOkZpZWxkW10gPSBbXTtcclxuICBwdWJsaWMgY2hpbGRyZW46Tm9kZVtdID0gW107XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAoeyBjbGFzc05hbWUsIG1lbWJlcnMgPSBudWxsLCBpc0Fic3RyYWN0ID0gZmFsc2UsIHN1cGVyQ2xhc3NOYW1lID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsIH0gXHJcbiAgICA6IHtjbGFzc05hbWU6IHN0cmluZywgbWVtYmVycz86IFtzdHJpbmcsIHN0cmluZ11bXSwgaXNBYnN0cmFjdD86IGJvb2xlYW4sIHN1cGVyQ2xhc3NOYW1lPzpzdHJpbmcsIGNoaWxkcmVuPzogTm9kZVtdfSkge1xyXG4gICAgdGhpcy5jbGFzc05hbWUgKz0gYFVuaSR7Y2xhc3NOYW1lfWA7XHJcbiAgICB0aGlzLmlzQWJzdHJhY3QgPSBpc0Fic3RyYWN0O1xyXG4gICAgaWYgKHN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHRoaXMuc3VwZXJDbGFzc05hbWUgPSBgJHtzdXBlckNsYXNzTmFtZX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lbWJlcnMpIHtcclxuICAgICAgZm9yIChsZXQgW25hbWUsdHlwZV0gb2YgbWVtYmVycykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRVcHBlcih0eXBlKSAmJiAhdGhpcy5pc05vZGVIZXBsZXIodHlwZSkpIHtcclxuICAgICAgICAgIHR5cGUgPSBgVW5pJHt0eXBlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVtYmVycy5wdXNoKG5ldyBGaWVsZChuYW1lLHR5cGUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4geyBcclxuICAgICAgICBlbGVtZW50LnN1cGVyQ2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWU7IFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1N0YXJ0VXBwZXIoc3RyOnN0cmluZyk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS5tYXRjaCgvXltBLVpdKyQvKSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNOb2RlSGVwbGVyKHN0cjpzdHJpbmcpOmJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHN0ci5pbmNsdWRlcyhgQ29kZVJhbmdlYCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgaW5kZW50KG46bnVtYmVyKTpzdHJpbmcge1xyXG4gICAgY29uc3Qgc3BhY2UgPSBgXFx1MDAyMFxcdTAwMjBgO1xyXG4gICAgbGV0IHJldCA9IGBgO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcclxuICAgICAgcmV0ICs9IHNwYWNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUltcG9ydFRleHQoKTpzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIGNvbnN0IGltcG9ydHM6c3RyaW5nW10gPSBbXTtcclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIGltcG9ydHMucHVzaCh0aGlzLnN1cGVyQ2xhc3NOYW1lKTtcclxuICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0aGlzLnN1cGVyQ2xhc3NOYW1lfSBmcm9tICcuLyR7dGhpcy5zdXBlckNsYXNzTmFtZX0nO1xcbmA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICBjb25zdCB0eXBlID0gZmllbGQudHlwZTtcclxuICAgICAgaWYgKHR5cGUuc3RhcnRzV2l0aChgVW5pYCkpIHtcclxuICAgICAgICBpZiAodHlwZS5lbmRzV2l0aChgW11gKSkge1xyXG4gICAgICAgICAgY29uc3QgdCA9IHR5cGUuc2xpY2UoMCwgLTIpO1xyXG4gICAgICAgICAgaWYgKCFpbXBvcnRzLmluY2x1ZGVzKHQpKSB7XHJcbiAgICAgICAgICAgIGltcG9ydHMucHVzaCh0KTtcclxuICAgICAgICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0fSBmcm9tICcuLyR7dH0nO1xcbmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghaW1wb3J0cy5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgICAgICAgICBpbXBvcnRzLnB1c2godHlwZSk7XHJcbiAgICAgICAgICAgIHJldCArPSBgaW1wb3J0ICR7dHlwZX0gZnJvbSAnLi8ke3R5cGV9JztcXG5gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTm9kZUhlcGxlcih0eXBlKSkge1xyXG4gICAgICAgIHJldCArPSBgaW1wb3J0ICR7dHlwZX0gZnJvbSAnLi4vbm9kZV9oZWxwZXIvJHt0eXBlfSc7YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2xhc3NOYW1lID09PSAnVW5pTm9kZScpIHtcclxuICAgICAgcmV0ICs9IGByZXF1aXJlKCcuLi9ub2RlX2hlbHBlci9FeHRlbnNpb24nKTtgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUNsYXNzRGVjVGV4dCgpOnN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgcmV0ICs9IGBleHBvcnQgZGVmYXVsdCBgO1xyXG4gICAgaWYgKHRoaXMuaXNBYnN0cmFjdCkge1xyXG4gICAgICByZXQgKz0gYGFic3RyYWN0IGA7XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYGNsYXNzICR7dGhpcy5jbGFzc05hbWV9IGA7XHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYGV4dGVuZHMgJHt0aGlzLnN1cGVyQ2xhc3NOYW1lfSBgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZU1lbWJlclRleHQoKTpzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke3MxfXB1YmxpYyAke2ZpZWxkLm5hbWV9OiAke2ZpZWxkLnR5cGV9O1xcbmA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWUgPT09ICdVbmlOb2RlJykge1xyXG4gICAgICByZXQgKz0gYCR7czF9cHVibGljIGZpZWxkczogTWFwPHN0cmluZyxGdW5jdGlvbj47XFxuYDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VDb25zdHJ1Y3RvcigpOnN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBjb25zdCBzMiA9IGAke3RoaXMuaW5kZW50KDIpfWA7XHJcbiAgICBjb25zdCBzMyA9IGAke3RoaXMuaW5kZW50KDMpfWA7XHJcbiAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgcmV0ICs9IGAke3MxfXB1YmxpYyBjb25zdHJ1Y3RvcigpO1xcbmA7XHJcbiAgICByZXQgKz0gYCR7czF9cHVibGljIGNvbnN0cnVjdG9yKGA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7ZmllbGQubmFtZX06ICR7ZmllbGQudHlwZX0sIGA7XHJcbiAgICB9XHJcbiAgICByZXQgPSByZXQuc2xpY2UoMCwgLTIpO1xyXG4gICAgcmV0ICs9IGApO1xcbmA7XHJcblxyXG4gICAgcmV0ICs9IGAke3MxfXB1YmxpYyBjb25zdHJ1Y3RvcihgO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9PzogJHtmaWVsZC50eXBlfSwgYDtcclxuICAgIH1cclxuICAgIHJldCA9IHJldC5zbGljZSgwLCAtMik7XHJcbiAgICByZXQgKz0gYCkge1xcbmA7XHJcblxyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgcmV0ICs9IGAke3MyfXN1cGVyKCk7XFxuYDtcclxuICAgIH1cclxuICAgIHJldCArPSBgJHtzMn1pZiAoYDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtmaWVsZC5uYW1lfSA9PT0gdW5kZWZpbmVkICYmIGA7XHJcbiAgICB9XHJcbiAgICByZXQgPSByZXQuc2xpY2UoMCwgLTQpO1xyXG4gICAgcmV0ICs9IGApIHtcXG5gO1xyXG5cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIC8vIGlmIChmaWVsZC50eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAvLyAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSAnJztcXG5gO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKCdbXScpKSB7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfXRoaXMuJHtmaWVsZC5uYW1lfSA9IFtdO1xcbmA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfXRoaXMuJHtmaWVsZC5uYW1lfSA9IG51bGw7XFxuYDtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiAoZmllbGQudHlwZS5pbmNsdWRlcygnVW5pJykpIHtcclxuICAgICAgLy8gICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gbmV3ICR7ZmllbGQudHlwZX0oKTtcXG5gO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0ICs9IGAke3MyfX1gO1xyXG5cclxuICAgIGlmICgxIDwgdGhpcy5tZW1iZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXQgKz0gYCBlbHNlIGlmIChgO1xyXG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIHJldCArPSBgJHtmaWVsZC5uYW1lfSA9PT0gdW5kZWZpbmVkIHx8IGA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0ID0gcmV0LnNsaWNlKDAsIC00KTtcclxuICAgICAgcmV0ICs9IGApYDtcclxuICAgICAgcmV0ICs9IGAge1xcbiR7czN9dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGFyZ3VtZW50cycpO1xcbiR7czJ9fWA7XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYCBlbHNlIHtcXG5gO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke3MzfXRoaXMuJHtmaWVsZC5uYW1lfSA9ICR7ZmllbGQubmFtZX07XFxuYDtcclxuICAgIH1cclxuICAgIHJldCArPSBgJHtzMn19XFxuYDtcclxuXHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWUgPT09ICdVbmlOb2RlJykge1xyXG4gICAgICByZXQgKz0gYCR7czJ9dGhpcy5maWVsZHMgPSBuZXcgTWFwPHN0cmluZyxGdW5jdGlvbj4oKTtcXG5gO1xyXG4gICAgICByZXQgKz0gYCR7czJ9dGhpcy5maWVsZHMuc2V0KCdjb21tZW50cycsIFN0cmluZyk7XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3MyfXRoaXMuZmllbGRzLnNldCgnY29kZVJhbmdlJywgQ29kZVJhbmdlKTtcXG5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICByZXQgKz0gYCR7czJ9dGhpcy5maWVsZHMuc2V0KCcke2ZpZWxkLm5hbWV9JywgYDtcclxuICAgICAgICBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgc3RyaW5nYCkpIHtcclxuICAgICAgICAgIHJldCArPSBgU3RyaW5nYDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYGJvb2xlYW5gKSkge1xyXG4gICAgICAgICAgcmV0ICs9IGBCb29sZWFuYDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYG51bWJlcmApKSB7XHJcbiAgICAgICAgICByZXQgKz0gYE51bWJlcmA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKGBhbnlgKSkge1xyXG4gICAgICAgICAgcmV0ICs9IGBPYmplY3RgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5pbmNsdWRlcygnW10nKSkge1xyXG4gICAgICAgICAgcmV0ICs9IGZpZWxkLnR5cGUuc3Vic3RyKDAsZmllbGQudHlwZS5sZW5ndGggLSAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0ICs9IGZpZWxkLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldCArPSBgKTtcXG5gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYCR7czF9fVxcbmA7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlVG9TdHJpbmdUZXh0KCk6c3RyaW5nIHtcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSBgJHtzMX1wdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcXG5gO1xyXG4gICAgcmV0ICs9IGAke3MyfXJldHVybiAnJHt0aGlzLmNsYXNzTmFtZS5zdWJzdHIoMyl9KCdgO1xyXG4gICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKGlzRmlyc3QpIHtcclxuICAgICAgICAgIHJldCArPSBgICsgYDtcclxuICAgICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc0ZpcnN0KSB7XHJcbiAgICAgICAgICByZXQgKz0gYCArICcsICcgKyBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXQgKz0gYHRoaXMuJHtmaWVsZC5uYW1lfWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXQgKz0gYCArICcpJztcXG4ke3MxfX1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVRvRXF1YWxzVGV4dCgpOnN0cmluZyB7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGNvbnN0IHMyID0gYCR7dGhpcy5pbmRlbnQoMil9YDtcclxuICAgIGNvbnN0IHM0ID0gYCR7dGhpcy5pbmRlbnQoNCl9YDtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gYCR7czF9cHVibGljIGVxdWFscyhvYmo6IGFueSk6IGJvb2xlYW4ge1xcbmA7XHJcbiAgICByZXQgKz0gYCR7czJ9aWYgKG9iaiA9PSBudWxsIHx8ICEob2JqIGluc3RhbmNlb2YgJHt0aGlzLmNsYXNzTmFtZX0pKSByZXR1cm4gZmFsc2U7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMn1jb25zdCB0aGF0OiAke3RoaXMuY2xhc3NOYW1lfSA9IDwke3RoaXMuY2xhc3NOYW1lfT5vYmo7XFxuYDtcclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1yZXR1cm4gc3VwZXIuZXF1YWxzKHRoYXQpYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1yZXR1cm4gdGhhdCAhPT0gbnVsbGA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3N0cmluZycgXHJcbiAgICAgIHx8IGZpZWxkLnR5cGUgPT09ICdudW1iZXInIFxyXG4gICAgICB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicgXHJcbiAgICAgIHx8IGZpZWxkLnR5cGUgPT09ICdhbnknKSB7XHJcbiAgICAgICAgcmV0ICs9IGBcXG4ke3M0fSYmICh0aGlzLiR7ZmllbGQubmFtZX0gPT0gbnVsbCA/IHRoYXQuJHtmaWVsZC5uYW1lfSA9PSBudWxsIDogdGhpcy4ke2ZpZWxkLm5hbWV9ID09PSB0aGF0LiR7ZmllbGQubmFtZX0pYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQgKz0gYFxcbiR7czR9JiYgKHRoaXMuJHtmaWVsZC5uYW1lfSA9PSBudWxsID8gdGhhdC4ke2ZpZWxkLm5hbWV9ID09IG51bGwgOiB0aGlzLiR7ZmllbGQubmFtZX0uZXF1YWxzKHRoYXQuJHtmaWVsZC5uYW1lfSkpYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgO1xcbiR7czF9fVxcbmA7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlTWVyZ2VUZXh0KCk6c3RyaW5nIHtcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgY29uc3QgczMgPSBgJHt0aGlzLmluZGVudCgzKX1gO1xyXG4gICAgY29uc3QgczQgPSBgJHt0aGlzLmluZGVudCg0KX1gO1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSBgJHtzMX1wdWJsaWMgbWVyZ2UodGhhdDogJHt0aGlzLmNsYXNzTmFtZX0pIHtcXG5gO1xyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgcmV0ICs9IGAke3MyfXN1cGVyLm1lcmdlKHRoYXQpO1xcbmA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czJ9aWYgKHRoYXQuJHtmaWVsZC5uYW1lfSAhPSBudWxsKSB7XFxuYDtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYFtdYCkpIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9aWYgKHRoaXMuJHtmaWVsZC5uYW1lfSA9PSBudWxsKSB7XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czR9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gdGhhdC4ke2ZpZWxkLm5hbWV9O1xcbmA7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfX0gZWxzZSB7XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czR9dGhpcy4ke2ZpZWxkLm5hbWV9LnB1c2goLi4udGhhdC4ke2ZpZWxkLm5hbWV9KTtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzM319XFxuYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gdGhhdC4ke2ZpZWxkLm5hbWV9O1xcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0ICs9IGAke3MyfX1cXG5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgJHtzMX19XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIHJldCArPSBgJHt0aGlzLm1ha2VJbXBvcnRUZXh0KCl9XFxuYDtcclxuICAgIHJldCArPSBgJHt0aGlzLm1ha2VDbGFzc0RlY1RleHQoKX1gO1xyXG4gICAgcmV0ICs9IGB7XFxuYDtcclxuICAgIGlmICgwIDwgdGhpcy5tZW1iZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlTWVtYmVyVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VDb25zdHJ1Y3RvcigpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb1N0cmluZ1RleHQoKX1cXG5gO1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlVG9FcXVhbHNUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZU1lcmdlVGV4dCgpfWA7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzQWJzdHJhY3QpIHtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvU3RyaW5nVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb0VxdWFsc1RleHQoKX1cXG5gOyAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0ICs9IGB9XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG4gIHB1YmxpYyB3cml0ZSgpIHtcclxuICAgIGZzLndyaXRlRmlsZShgc3JjL25vZGUvJHt0aGlzLmNsYXNzTmFtZX0udHNgLCB0aGlzLnRvU3RyaW5nKCksIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkLndyaXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmF0b3IgeyAgXHJcbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZSgpIHtcclxuICAgIGNvbnN0IG5vZGUgPSBcclxuICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBOb2RlYCwgaXNBYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICBbYGNvbW1lbnRzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgW2Bjb2RlUmFuZ2VgLCBgQ29kZVJhbmdlYF0sXHJcbiAgICAgICAgXSxjaGlsZHJlbjogW1xyXG4gICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBQcm9ncmFtYCxcclxuICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgIFtgYmxvY2tgLCBgQmxvY2tgXSxcclxuICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBFeHByYCwgaXNBYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YE51bWJlckxpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYGFueWBdLFxyXG4gICAgICAgICAgICAgICAgW2BzaWduZWRgLCBgYm9vbGVhbmBdLFxyXG4gICAgICAgICAgICAgICAgW2BieXRlc2AsIGBudW1iZXJgXSxcclxuICAgICAgICAgICAgICAgIFtgaXNGbG9hdGAsIGBib29sZWFuYF0sXHJcbiAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBbYHByZWZpeGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgc3VmaXhgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBJbnRMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgbnVtYmVyYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRG91YmxlTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYG51bWJlcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YENoYXJhY3RlckxpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBTdHJpbmdMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJvb2xMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBib29sZWFuYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDYXN0YCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2B0eXBlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBJZGVudGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEFycmF5YCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2BpdGVtc2AsIGBFeHByW11gXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAvLyBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEZpZWxkQWNjZXNzYCxcclxuICAgICAgICAgICAgICAvLyAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgIC8vICAgW2ByZWNlaXZlcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgLy8gICBbYGZpZWxkTmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAvLyAgIFtgaW5kZXhgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgIC8vICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTWV0aG9kQ2FsbGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgcmVjZWl2ZXJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgW2BtZXRob2ROYW1lYCwgYElkZW50YF0sXHJcbiAgICAgICAgICAgICAgICBbYGFyZ3NgLCBgRXhwcltdYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBVbmFyeU9wYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2BvcGVyYXRvcmAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgZXhwcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBCaW5PcGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgW2BvcGVyYXRvcmAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgW2BsZWZ0YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgW2ByaWdodGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBUZXJuYXJ5T3BgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgIFtgdHJ1ZUV4cHJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICBbYGZhbHNlRXhwcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBTdGF0ZW1lbnRgLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBCcmVha2AgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQ29udGludWVgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEVtcHR5U3RhdGVtZW50YCB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBSZXR1cm5gICxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBKdW1wYCAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGRlc3RgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YExhYmVsYCAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJsb2NrYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgYmxvY2tMYWJlbGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgYm9keWAsIGBTdGF0ZW1lbnRbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBJZmAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B0cnVlU3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BmYWxzZVN0YXRlbWVudGAsIGBTdGF0ZW1lbnRgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRm9yYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgaW5pdGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdGVwYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgc3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSwgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEVuaGFuY2VkRm9yYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbnRhaW5lcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN0YXRlbWVudGAsIGBTdGF0ZW1lbnRgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBXaGlsZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YERvV2hpbGVgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLCAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN3aXRjaGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BjYXNlc2AsIGBTd2l0Y2hVbml0W11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBTd2l0Y2hVbml0YCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICBbYGxhYmVsYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50W11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSwgXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRGVjcmFsYXRpb25gLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDbGFzc0RlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNsYXNzTmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1lbWJlcnNgLCBgRGVjcmFsYXRpb25bXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdXBlckNsYXNzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGludGVyZmFjZXNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRnVuY3Rpb25EZWNgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BuYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Btb2RpZmllcnNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgcmV0dXJuVHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgcGFyYW1zYCwgYFBhcmFtW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgYmxvY2tgLCBgQmxvY2tgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBWYXJpYWJsZURlZmAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdHlwZVN1ZmZpeGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBWYXJpYWJsZURlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1vZGlmaWVyc2AsIGBzdHJpbmdbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B0eXBlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YXJpYWJsZXNgLCBgVmFyaWFibGVEZWZbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBQYXJhbWAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9KSwgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdfSk7XHJcbiAgICBub2RlLndyaXRlKCk7XHJcbiAgfVxyXG59XHJcbkdlbmVyYXRvci5nZW5lcmF0ZSgpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9