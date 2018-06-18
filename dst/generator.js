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
        if (this.className !== 'UniNode') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIiwiQzpcXGRldmVsb3BcXHVuaWNvZW4udHNcXHNyY1xcbm9kZVxcR2VuZXJhdG9yLnRzIiwiZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNFLG1CQUEwQixJQUExQixFQUE4QyxJQUE5QyxFQUF5RDtBQUEvQjtBQUFvQjtBQUFlO0FBQy9EO0FBQUMsQ0FGRDtBQUlBO0FBT0Usa0JBQW9CLEVBQXBCLEVBQ3NIO1lBRGhHLHdCO1lBQVcsZTtZQUFBLG1DO1lBQWdCLGtCO1lBQUEsdUM7WUFBb0Isc0I7WUFBQSwwQztZQUF1QixnQjtZQUFBLG9DO0FBQTVGO0FBTk8seUJBQW1CLEVBQW5CO0FBQ0EsMEJBQXFCLEtBQXJCO0FBQ0EsOEJBQXdC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QUFXLFNBQVgsQ0FKTSxFQUtOLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FMTSxDQURELEVBQVQsQ0FUUSxFQWlCUixJQUFJLElBQUosQ0FBUyxFQUFFLFdBQVcsYUFBYjtBQUNQLGlDQUFRLENBQ04sQ0FBQyxNQUFELEVBQVMsUUFBVCxDQURNLEVBRU4sQ0FBQyxPQUFELEVBQVUsTUFBVixDQUZNLEVBR04sQ0FBQyxZQUFELEVBQWUsUUFBZixDQUhNLENBREQsRUFBVCxDQWpCUSxFQXVCUixJQUFJLElBQUosQ0FBUyxFQUFFLFdBQVcsYUFBYjtBQUNQLGlDQUFRLENBQ04sQ0FBQyxXQUFELEVBQWMsVUFBZCxDQURNLEVBRU4sQ0FBQyxNQUFELEVBQVMsUUFBVCxDQUZNLEVBR04sQ0FBQyxXQUFELEVBQWMsZUFBZCxDQUhNLENBREQ7QUFNUCxrQ0FBUyxDQUNQLElBQUksSUFBSixDQUFTLEVBQUUsV0FBVyxPQUFiLEVBQVQsQ0FETyxDQU5GLEVBQVQsQ0F2QlE7QUFESCxpQkFBVCxDQWxKUTtBQURILGFBQVQsQ0FMVSxDQUpMLEVBQVQsQ0FERjtBQW1NQSxhQUFLLEtBQUw7QUFDRCxLQXJNYTtBQXNNaEI7QUFBQyxDQXZNRDs7QUF3TUEsVUFBVSxRQUFWLEc7Ozs7Ozs7Ozs7O0FDN2ZBLCtCIiwiZmlsZSI6ImdlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL25vZGUvR2VuZXJhdG9yLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5jbGFzcyBGaWVsZCB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOnN0cmluZywgcHVibGljIHR5cGU6c3RyaW5nKSB7fVxyXG59XHJcblxyXG5jbGFzcyBOb2RlIHsgXHJcbiAgcHVibGljIGNsYXNzTmFtZTpzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgaXNBYnN0cmFjdDpib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHN1cGVyQ2xhc3NOYW1lOnN0cmluZyA9IG51bGw7XHJcbiAgcHVibGljIG1lbWJlcnM6RmllbGRbXSA9IFtdO1xyXG4gIHB1YmxpYyBjaGlsZHJlbjpOb2RlW10gPSBbXTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yICh7IGNsYXNzTmFtZSwgbWVtYmVycyA9IG51bGwsIGlzQWJzdHJhY3QgPSBmYWxzZSwgc3VwZXJDbGFzc05hbWUgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwgfSBcclxuICAgIDoge2NsYXNzTmFtZTogc3RyaW5nLCBtZW1iZXJzPzogW3N0cmluZywgc3RyaW5nXVtdLCBpc0Fic3RyYWN0PzogYm9vbGVhbiwgc3VwZXJDbGFzc05hbWU/OnN0cmluZywgY2hpbGRyZW4/OiBOb2RlW119KSB7XHJcbiAgICB0aGlzLmNsYXNzTmFtZSArPSBgVW5pJHtjbGFzc05hbWV9YDtcclxuICAgIHRoaXMuaXNBYnN0cmFjdCA9IGlzQWJzdHJhY3Q7XHJcbiAgICBpZiAoc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgdGhpcy5zdXBlckNsYXNzTmFtZSA9IGAke3N1cGVyQ2xhc3NOYW1lfWA7XHJcbiAgICB9XHJcbiAgICBpZiAobWVtYmVycykge1xyXG4gICAgICBmb3IgKGxldCBbbmFtZSx0eXBlXSBvZiBtZW1iZXJzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydFVwcGVyKHR5cGUpICYmICF0aGlzLmlzTm9kZUhlcGxlcih0eXBlKSkge1xyXG4gICAgICAgICAgdHlwZSA9IGBVbmkke3R5cGV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZW1iZXJzLnB1c2gobmV3IEZpZWxkKG5hbWUsdHlwZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgsIGFycmF5KSA9PiB7IFxyXG4gICAgICAgIGVsZW1lbnQuc3VwZXJDbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZTsgXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzU3RhcnRVcHBlcihzdHI6c3RyaW5nKTpib29sZWFuIHtcclxuICAgIHJldHVybiBzdHIuY2hhckF0KDApLm1hdGNoKC9eW0EtWl0rJC8pID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc05vZGVIZXBsZXIoc3RyOnN0cmluZyk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gc3RyLmluY2x1ZGVzKGBDb2RlUmFuZ2VgKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBpbmRlbnQobjpudW1iZXIpOnN0cmluZyB7XHJcbiAgICBjb25zdCBzcGFjZSA9IGBcXHUwMDIwXFx1MDAyMGA7XHJcbiAgICBsZXQgcmV0ID0gYGA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xyXG4gICAgICByZXQgKz0gc3BhY2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlSW1wb3J0VGV4dCgpOnN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgY29uc3QgaW1wb3J0czpzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgaW1wb3J0cy5wdXNoKHRoaXMuc3VwZXJDbGFzc05hbWUpO1xyXG4gICAgICByZXQgKz0gYGltcG9ydCAke3RoaXMuc3VwZXJDbGFzc05hbWV9IGZyb20gJy4vJHt0aGlzLnN1cGVyQ2xhc3NOYW1lfSc7XFxuYDtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWVsZC50eXBlO1xyXG4gICAgICBpZiAodHlwZS5zdGFydHNXaXRoKGBVbmlgKSkge1xyXG4gICAgICAgIGlmICh0eXBlLmVuZHNXaXRoKGBbXWApKSB7XHJcbiAgICAgICAgICBjb25zdCB0ID0gdHlwZS5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgICBpZiAoIWltcG9ydHMuaW5jbHVkZXModCkpIHtcclxuICAgICAgICAgICAgaW1wb3J0cy5wdXNoKHQpO1xyXG4gICAgICAgICAgICByZXQgKz0gYGltcG9ydCAke3R9IGZyb20gJy4vJHt0fSc7XFxuYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCFpbXBvcnRzLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgIGltcG9ydHMucHVzaCh0eXBlKTtcclxuICAgICAgICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0eXBlfSBmcm9tICcuLyR7dHlwZX0nO1xcbmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNOb2RlSGVwbGVyKHR5cGUpKSB7XHJcbiAgICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0eXBlfSBmcm9tICcuLi9ub2RlX2hlbHBlci8ke3R5cGV9JztgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWUgPT09ICdVbmlOb2RlJykge1xyXG4gICAgICByZXQgKz0gYHJlcXVpcmUoJy4uL25vZGVfaGVscGVyL0V4dGVuc2lvbicpO2A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlQ2xhc3NEZWNUZXh0KCk6c3RyaW5nIHtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gJyc7XHJcbiAgICByZXQgKz0gYGV4cG9ydCBkZWZhdWx0IGA7XHJcbiAgICBpZiAodGhpcy5pc0Fic3RyYWN0KSB7XHJcbiAgICAgIHJldCArPSBgYWJzdHJhY3QgYDtcclxuICAgIH1cclxuICAgIHJldCArPSBgY2xhc3MgJHt0aGlzLmNsYXNzTmFtZX0gYDtcclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldCArPSBgZXh0ZW5kcyAke3RoaXMuc3VwZXJDbGFzc05hbWV9IGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlTWVtYmVyVGV4dCgpOnN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czF9cHVibGljICR7ZmllbGQubmFtZX06ICR7ZmllbGQudHlwZX07XFxuYDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PT0gJ1VuaU5vZGUnKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMX1wdWJsaWMgZmllbGRzOiBNYXA8c3RyaW5nLEZ1bmN0aW9uPjtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUNvbnN0cnVjdG9yKCk6c3RyaW5nIHtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gJyc7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGNvbnN0IHMyID0gYCR7dGhpcy5pbmRlbnQoMil9YDtcclxuICAgIGNvbnN0IHMzID0gYCR7dGhpcy5pbmRlbnQoMyl9YDtcclxuICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICByZXQgKz0gYCR7czF9cHVibGljIGNvbnN0cnVjdG9yKCk7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMX1wdWJsaWMgY29uc3RydWN0b3IoYDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtmaWVsZC5uYW1lfTogJHtmaWVsZC50eXBlfSwgYDtcclxuICAgIH1cclxuICAgIHJldCA9IHJldC5zbGljZSgwLCAtMik7XHJcbiAgICByZXQgKz0gYCk7XFxuYDtcclxuXHJcbiAgICByZXQgKz0gYCR7czF9cHVibGljIGNvbnN0cnVjdG9yKGA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7ZmllbGQubmFtZX0/OiAke2ZpZWxkLnR5cGV9LCBgO1xyXG4gICAgfVxyXG4gICAgcmV0ID0gcmV0LnNsaWNlKDAsIC0yKTtcclxuICAgIHJldCArPSBgKSB7XFxuYDtcclxuXHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYCR7czJ9c3VwZXIoKTtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGAke3MyfWlmIChgO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9ID09PSB1bmRlZmluZWQgJiYgYDtcclxuICAgIH1cclxuICAgIHJldCA9IHJldC5zbGljZSgwLCAtNCk7XHJcbiAgICByZXQgKz0gYCkge1xcbmA7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgLy8gaWYgKGZpZWxkLnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIC8vICAgcmV0ICs9IGAke3MzfXRoaXMuJHtmaWVsZC5uYW1lfSA9ICcnO1xcbmA7XHJcbiAgICAgIC8vIH1cclxuICAgICAgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoJ1tdJykpIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gW107XFxuYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gbnVsbDtcXG5gO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKCdVbmknKSkge1xyXG4gICAgICAvLyAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSBuZXcgJHtmaWVsZC50eXBlfSgpO1xcbmA7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICByZXQgKz0gYCR7czJ9fWA7XHJcblxyXG4gICAgaWYgKDEgPCB0aGlzLm1lbWJlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldCArPSBgIGVsc2UgaWYgKGA7XHJcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9ID09PSB1bmRlZmluZWQgfHwgYDtcclxuICAgICAgfVxyXG4gICAgICByZXQgPSByZXQuc2xpY2UoMCwgLTQpO1xyXG4gICAgICByZXQgKz0gYClgO1xyXG4gICAgICByZXQgKz0gYCB7XFxuJHtzM310aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXJndW1lbnRzJyk7XFxuJHtzMn19YDtcclxuICAgIH1cclxuICAgIHJldCArPSBgIGVsc2Uge1xcbmA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gJHtmaWVsZC5uYW1lfTtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGAke3MyfX1cXG5gO1xyXG5cclxuICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PT0gJ1VuaU5vZGUnKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn10aGlzLmZpZWxkcyA9IG5ldyBNYXA8c3RyaW5nLEZ1bmN0aW9uPigpO1xcbmA7XHJcbiAgICAgIHJldCArPSBgJHtzMn10aGlzLmZpZWxkcy5zZXQoJ2NvbW1lbnRzJywgU3RyaW5nKTtcXG5gO1xyXG4gICAgICByZXQgKz0gYCR7czJ9dGhpcy5maWVsZHMuc2V0KCdjb2RlUmFuZ2UnLCBDb2RlUmFuZ2UpO1xcbmA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIHJldCArPSBgJHtzMn10aGlzLmZpZWxkcy5zZXQoJyR7ZmllbGQubmFtZX0nLCBgO1xyXG4gICAgICAgIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKGBzdHJpbmdgKSkge1xyXG4gICAgICAgICAgcmV0ICs9IGBTdHJpbmdgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgYm9vbGVhbmApKSB7XHJcbiAgICAgICAgICByZXQgKz0gYEJvb2xlYW5gO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgbnVtYmVyYCkpIHtcclxuICAgICAgICAgIHJldCArPSBgTnVtYmVyYDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYGFueWApKSB7XHJcbiAgICAgICAgICByZXQgKz0gYE9iamVjdGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKCdbXScpKSB7XHJcbiAgICAgICAgICByZXQgKz0gZmllbGQudHlwZS5zdWJzdHIoMCxmaWVsZC50eXBlLmxlbmd0aCAtIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXQgKz0gZmllbGQudHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0ICs9IGApO1xcbmA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldCArPSBgJHtzMX19XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VUb1N0cmluZ1RleHQoKTpzdHJpbmcge1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBjb25zdCBzMiA9IGAke3RoaXMuaW5kZW50KDIpfWA7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9IGAke3MxfXB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xcbmA7XHJcbiAgICByZXQgKz0gYCR7czJ9cmV0dXJuICcke3RoaXMuY2xhc3NOYW1lLnN1YnN0cigzKX0oJ2A7XHJcbiAgICBsZXQgaXNGaXJzdCA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAoaXNGaXJzdCkge1xyXG4gICAgICAgICAgcmV0ICs9IGAgKyBgO1xyXG4gICAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWlzRmlyc3QpIHtcclxuICAgICAgICAgIHJldCArPSBgICsgJywgJyArIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldCArPSBgdGhpcy4ke2ZpZWxkLm5hbWV9YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgICsgJyknO1xcbiR7czF9fVxcbmA7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlVG9FcXVhbHNUZXh0KCk6c3RyaW5nIHtcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgY29uc3QgczQgPSBgJHt0aGlzLmluZGVudCg0KX1gO1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSBgJHtzMX1wdWJsaWMgZXF1YWxzKG9iajogYW55KTogYm9vbGVhbiB7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMn1pZiAob2JqID09IG51bGwgfHwgIShvYmogaW5zdGFuY2VvZiAke3RoaXMuY2xhc3NOYW1lfSkpIHJldHVybiBmYWxzZTtcXG5gO1xyXG4gICAgcmV0ICs9IGAke3MyfWNvbnN0IHRoYXQ6ICR7dGhpcy5jbGFzc05hbWV9ID0gPCR7dGhpcy5jbGFzc05hbWV9Pm9iajtcXG5gO1xyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgcmV0ICs9IGAke3MyfXJldHVybiBzdXBlci5lcXVhbHModGhhdClgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0ICs9IGAke3MyfXJldHVybiB0aGF0ICE9PSBudWxsYDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNsYXNzTmFtZSAhPT0gJ1VuaU5vZGUnKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdzdHJpbmcnIFxyXG4gICAgICAgIHx8IGZpZWxkLnR5cGUgPT09ICdudW1iZXInIFxyXG4gICAgICAgIHx8IGZpZWxkLnR5cGUgPT09ICdib29sZWFuJyBcclxuICAgICAgICB8fCBmaWVsZC50eXBlID09PSAnYW55Jykge1xyXG4gICAgICAgICAgcmV0ICs9IGBcXG4ke3M0fSYmICh0aGlzLiR7ZmllbGQubmFtZX0gPT0gbnVsbCA/IHRoYXQuJHtmaWVsZC5uYW1lfSA9PSBudWxsIDogdGhpcy4ke2ZpZWxkLm5hbWV9ID09PSB0aGF0LiR7ZmllbGQubmFtZX0pYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0ICs9IGBcXG4ke3M0fSYmICh0aGlzLiR7ZmllbGQubmFtZX0gPT0gbnVsbCA/IHRoYXQuJHtmaWVsZC5uYW1lfSA9PSBudWxsIDogdGhpcy4ke2ZpZWxkLm5hbWV9LmVxdWFscyh0aGF0LiR7ZmllbGQubmFtZX0pKWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0ICs9IGA7XFxuJHtzMX19XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VNZXJnZVRleHQoKTpzdHJpbmcge1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBjb25zdCBzMiA9IGAke3RoaXMuaW5kZW50KDIpfWA7XHJcbiAgICBjb25zdCBzMyA9IGAke3RoaXMuaW5kZW50KDMpfWA7XHJcbiAgICBjb25zdCBzNCA9IGAke3RoaXMuaW5kZW50KDQpfWA7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9IGAke3MxfXB1YmxpYyBtZXJnZSh0aGF0OiAke3RoaXMuY2xhc3NOYW1lfSkge1xcbmA7XHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYCR7czJ9c3VwZXIubWVyZ2UodGhhdCk7XFxuYDtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1pZiAodGhhdC4ke2ZpZWxkLm5hbWV9ICE9IG51bGwpIHtcXG5gO1xyXG4gICAgICBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgW11gKSkge1xyXG4gICAgICAgIHJldCArPSBgJHtzM31pZiAodGhpcy4ke2ZpZWxkLm5hbWV9ID09IG51bGwpIHtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzNH10aGlzLiR7ZmllbGQubmFtZX0gPSB0aGF0LiR7ZmllbGQubmFtZX07XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czN9fSBlbHNlIHtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzNH10aGlzLiR7ZmllbGQubmFtZX0ucHVzaCguLi50aGF0LiR7ZmllbGQubmFtZX0pO1xcbmA7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfX1cXG5gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSB0aGF0LiR7ZmllbGQubmFtZX07XFxuYDtcclxuICAgICAgfVxyXG4gICAgICByZXQgKz0gYCR7czJ9fVxcbmA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0ICs9IGAke3MxfX1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgcmV0ICs9IGAke3RoaXMubWFrZUltcG9ydFRleHQoKX1cXG5gO1xyXG4gICAgcmV0ICs9IGAke3RoaXMubWFrZUNsYXNzRGVjVGV4dCgpfWA7XHJcbiAgICByZXQgKz0gYHtcXG5gO1xyXG4gICAgaWYgKDAgPCB0aGlzLm1lbWJlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VNZW1iZXJUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZUNvbnN0cnVjdG9yKCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvU3RyaW5nVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb0VxdWFsc1RleHQoKX1cXG5gO1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlTWVyZ2VUZXh0KCl9YDtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNBYnN0cmFjdCkge1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlVG9TdHJpbmdUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvRXF1YWxzVGV4dCgpfVxcbmA7ICAgICAgXHJcbiAgICB9XHJcbiAgICByZXQgKz0gYH1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbiAgcHVibGljIHdyaXRlKCkge1xyXG4gICAgZnMud3JpdGVGaWxlKGBzcmMvbm9kZS8ke3RoaXMuY2xhc3NOYW1lfS50c2AsIHRoaXMudG9TdHJpbmcoKSwgKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQud3JpdGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyYXRvciB7ICBcclxuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCkge1xyXG4gICAgY29uc3Qgbm9kZSA9IFxyXG4gICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YE5vZGVgLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgIFtgY29tbWVudHNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICBbYGNvZGVSYW5nZWAsIGBDb2RlUmFuZ2VgXSxcclxuICAgICAgICBdLGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFByb2dyYW1gLFxyXG4gICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgW2BibG9ja2AsIGBCbG9ja2BdLFxyXG4gICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEV4cHJgLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTnVtYmVyTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgYW55YF0sXHJcbiAgICAgICAgICAgICAgICBbYHNpZ25lZGAsIGBib29sZWFuYF0sXHJcbiAgICAgICAgICAgICAgICBbYGJ5dGVzYCwgYG51bWJlcmBdLFxyXG4gICAgICAgICAgICAgICAgW2Bpc0Zsb2F0YCwgYGJvb2xlYW5gXSxcclxuICAgICAgICAgICAgICAgIFtgdHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgcHJlZml4YCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2BzdWZpeGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEludExpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBudW1iZXJgXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBEb3VibGVMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgbnVtYmVyYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQ2hhcmFjdGVyTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN0cmluZ0xpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQm9vbExpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYGJvb2xlYW5gXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YENhc3RgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YElkZW50YCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2BuYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQXJyYXlgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYGl0ZW1zYCwgYEV4cHJbXWBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIC8vIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRmllbGRBY2Nlc3NgLFxyXG4gICAgICAgICAgICAgIC8vICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgLy8gICBbYHJlY2VpdmVyYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAvLyAgIFtgZmllbGROYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgIC8vICAgW2BpbmRleGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgLy8gICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBNZXRob2RDYWxsYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2ByZWNlaXZlcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBbYG1ldGhvZE5hbWVgLCBgSWRlbnRgXSxcclxuICAgICAgICAgICAgICAgIFtgYXJnc2AsIGBFeHByW11gXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFVuYXJ5T3BgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYG9wZXJhdG9yYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2BleHByYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJpbk9wYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICBbYG9wZXJhdG9yYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICBbYGxlZnRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICBbYHJpZ2h0YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFRlcm5hcnlPcGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgW2B0cnVlRXhwcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgIFtgZmFsc2VFeHByYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN0YXRlbWVudGAsIGlzQWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJyZWFrYCB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDb250aW51ZWAgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRW1wdHlTdGF0ZW1lbnRgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFJldHVybmAgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEp1bXBgICxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgZGVzdGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTGFiZWxgICxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQmxvY2tgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BibG9ja0xhYmVsYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bib2R5YCwgYFN0YXRlbWVudFtdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YElmYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHRydWVTdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGZhbHNlU3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBGb3JgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bpbml0YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN0ZXBgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLCAgICAgXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRW5oYW5jZWRGb3JgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2Btb2RpZmllcnNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29udGFpbmVyYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgc3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSwgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFdoaWxlYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN0YXRlbWVudGAsIGBTdGF0ZW1lbnRgXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOltcclxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRG9XaGlsZWAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgU3dpdGNoYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNhc2VzYCwgYFN3aXRjaFVuaXRbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN3aXRjaFVuaXRgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgIFtgbGFiZWxgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICBbYHN0YXRlbWVudGAsIGBTdGF0ZW1lbnRbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLCBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBEZWNyYWxhdGlvbmAsIGlzQWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YENsYXNzRGVjYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY2xhc3NOYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Btb2RpZmllcnNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbWVtYmVyc2AsIGBEZWNyYWxhdGlvbltdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN1cGVyQ2xhc3NgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgaW50ZXJmYWNlc2AsIGBzdHJpbmdbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBGdW5jdGlvbkRlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1vZGlmaWVyc2AsIGBzdHJpbmdbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2ByZXR1cm5UeXBlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BwYXJhbXNgLCBgUGFyYW1bXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BibG9ja2AsIGBCbG9ja2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSwgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFZhcmlhYmxlRGVmYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B0eXBlU3VmZml4YCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSwgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFZhcmlhYmxlRGVjYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhcmlhYmxlc2AsIGBWYXJpYWJsZURlZltdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFBhcmFtYCB9KSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pLCAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF19KTtcclxuICAgIG5vZGUud3JpdGUoKTtcclxuICB9XHJcbn1cclxuR2VuZXJhdG9yLmdlbmVyYXRlKCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=