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
                    members: [["cond", "Expr"], ["trueExpr", "Expr"], ["falseExpr", "Expr"]] }), new Node({ className: "New",
                    members: [["type", "string"], ["args", "Expr[]"]] }), new Node({ className: "NewArray",
                    members: [["type", "string"], ["elementsNum", "Expr[]"], ["value", "Array"]] }), new Node({ className: "Statement", isAbstract: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIiwiQzpcXGRldmVsb3BcXHVuaWNvZW4udHNcXHNyY1xcbm9kZVxcR2VuZXJhdG9yLnRzIiwiZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNFLG1CQUEwQixJQUExQixFQUE4QyxJQUE5QyxFQUF5RDtBQUEvQjtBQUFvQjtBQUFlO0FBQy9EO0FBQUMsQ0FGRDtBQUlBO0FBT0Usa0JBQW9CLEVBQXBCLEVBQ3NIO1lBRGhHLHdCO1lBQVcsZTtZQUFBLG1DO1lBQWdCLGtCO1lBQUEsdUM7WUFBb0Isc0I7WUFBQSwwQztZQUF1QixnQjtZQUFBLG9DO0FBQTVGO0FBTk8seUJBQW1CLEVBQW5CO0FBQ0EsMEJBQXFCLEtBQXJCO0FBQ0EsOEJBQXdC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ZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbm9kZS9HZW5lcmF0b3IudHNcIik7XG4iLCJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmNsYXNzIEZpZWxkIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIG5hbWU6c3RyaW5nLCBwdWJsaWMgdHlwZTpzdHJpbmcpIHt9XHJcbn1cclxuXHJcbmNsYXNzIE5vZGUge1xyXG4gIHB1YmxpYyBjbGFzc05hbWU6c3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGlzQWJzdHJhY3Q6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzdXBlckNsYXNzTmFtZTpzdHJpbmcgPSBudWxsO1xyXG4gIHB1YmxpYyBtZW1iZXJzOkZpZWxkW10gPSBbXTtcclxuICBwdWJsaWMgY2hpbGRyZW46Tm9kZVtdID0gW107XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAoeyBjbGFzc05hbWUsIG1lbWJlcnMgPSBudWxsLCBpc0Fic3RyYWN0ID0gZmFsc2UsIHN1cGVyQ2xhc3NOYW1lID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsIH1cclxuICAgIDoge2NsYXNzTmFtZTogc3RyaW5nLCBtZW1iZXJzPzogW3N0cmluZywgc3RyaW5nXVtdLCBpc0Fic3RyYWN0PzogYm9vbGVhbiwgc3VwZXJDbGFzc05hbWU/OnN0cmluZywgY2hpbGRyZW4/OiBOb2RlW119KSB7XHJcbiAgICB0aGlzLmNsYXNzTmFtZSArPSBgVW5pJHtjbGFzc05hbWV9YDtcclxuICAgIHRoaXMuaXNBYnN0cmFjdCA9IGlzQWJzdHJhY3Q7XHJcbiAgICBpZiAoc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgdGhpcy5zdXBlckNsYXNzTmFtZSA9IGAke3N1cGVyQ2xhc3NOYW1lfWA7XHJcbiAgICB9XHJcbiAgICBpZiAobWVtYmVycykge1xyXG4gICAgICBmb3IgKGxldCBbbmFtZSwgdHlwZV0gb2YgbWVtYmVycykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRVcHBlcih0eXBlKSAmJiAhdGhpcy5pc05vZGVIZXBsZXIodHlwZSkpIHtcclxuICAgICAgICAgIHR5cGUgPSBgVW5pJHt0eXBlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVtYmVycy5wdXNoKG5ldyBGaWVsZChuYW1lLCB0eXBlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCwgYXJyYXkpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN1cGVyQ2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzU3RhcnRVcHBlcihzdHI6c3RyaW5nKTpib29sZWFuIHtcclxuICAgIHJldHVybiBzdHIuY2hhckF0KDApLm1hdGNoKC9eW0EtWl0rJC8pID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc05vZGVIZXBsZXIoc3RyOnN0cmluZyk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gc3RyLmluY2x1ZGVzKGBDb2RlUmFuZ2VgKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBpbmRlbnQobjpudW1iZXIpOnN0cmluZyB7XHJcbiAgICBjb25zdCBzcGFjZSA9IGBcXHUwMDIwXFx1MDAyMGA7XHJcbiAgICBsZXQgcmV0ID0gYGA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xyXG4gICAgICByZXQgKz0gc3BhY2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlSW1wb3J0VGV4dCgpOnN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgY29uc3QgaW1wb3J0czpzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgaW1wb3J0cy5wdXNoKHRoaXMuc3VwZXJDbGFzc05hbWUpO1xyXG4gICAgICByZXQgKz0gYGltcG9ydCAke3RoaXMuc3VwZXJDbGFzc05hbWV9IGZyb20gJy4vJHt0aGlzLnN1cGVyQ2xhc3NOYW1lfSc7XFxuYDtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWVsZC50eXBlO1xyXG4gICAgICBpZiAodHlwZS5zdGFydHNXaXRoKGBVbmlgKSkge1xyXG4gICAgICAgIGlmICh0eXBlLmVuZHNXaXRoKGBbXWApKSB7XHJcbiAgICAgICAgICBjb25zdCB0ID0gdHlwZS5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgICBpZiAoIWltcG9ydHMuaW5jbHVkZXModCkpIHtcclxuICAgICAgICAgICAgaW1wb3J0cy5wdXNoKHQpO1xyXG4gICAgICAgICAgICByZXQgKz0gYGltcG9ydCAke3R9IGZyb20gJy4vJHt0fSc7XFxuYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCFpbXBvcnRzLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgIGltcG9ydHMucHVzaCh0eXBlKTtcclxuICAgICAgICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0eXBlfSBmcm9tICcuLyR7dHlwZX0nO1xcbmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNOb2RlSGVwbGVyKHR5cGUpKSB7XHJcbiAgICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0eXBlfSBmcm9tICcuLi9ub2RlX2hlbHBlci8ke3R5cGV9JztgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWUgPT09ICdVbmlOb2RlJykge1xyXG4gICAgICByZXQgKz0gYHJlcXVpcmUoJy4uL25vZGVfaGVscGVyL0V4dGVuc2lvbicpO2A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlQ2xhc3NEZWNUZXh0KCk6c3RyaW5nIHtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gJyc7XHJcbiAgICByZXQgKz0gYGV4cG9ydCBkZWZhdWx0IGA7XHJcbiAgICBpZiAodGhpcy5pc0Fic3RyYWN0KSB7XHJcbiAgICAgIHJldCArPSBgYWJzdHJhY3QgYDtcclxuICAgIH1cclxuICAgIHJldCArPSBgY2xhc3MgJHt0aGlzLmNsYXNzTmFtZX0gYDtcclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldCArPSBgZXh0ZW5kcyAke3RoaXMuc3VwZXJDbGFzc05hbWV9IGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlTWVtYmVyVGV4dCgpOnN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czF9cHVibGljICR7ZmllbGQubmFtZX06ICR7ZmllbGQudHlwZX07XFxuYDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PT0gJ1VuaU5vZGUnKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMX1wdWJsaWMgZmllbGRzOiBNYXA8c3RyaW5nLEZ1bmN0aW9uPjtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUNvbnN0cnVjdG9yKCk6c3RyaW5nIHtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gJyc7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGNvbnN0IHMyID0gYCR7dGhpcy5pbmRlbnQoMil9YDtcclxuICAgIGNvbnN0IHMzID0gYCR7dGhpcy5pbmRlbnQoMyl9YDtcclxuICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICByZXQgKz0gYCR7czF9cHVibGljIGNvbnN0cnVjdG9yKCk7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMX1wdWJsaWMgY29uc3RydWN0b3IoYDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtmaWVsZC5uYW1lfTogJHtmaWVsZC50eXBlfSwgYDtcclxuICAgIH1cclxuICAgIHJldCA9IHJldC5zbGljZSgwLCAtMik7XHJcbiAgICByZXQgKz0gYCk7XFxuYDtcclxuXHJcbiAgICByZXQgKz0gYCR7czF9cHVibGljIGNvbnN0cnVjdG9yKGA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7ZmllbGQubmFtZX0/OiAke2ZpZWxkLnR5cGV9LCBgO1xyXG4gICAgfVxyXG4gICAgcmV0ID0gcmV0LnNsaWNlKDAsIC0yKTtcclxuICAgIHJldCArPSBgKSB7XFxuYDtcclxuXHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYCR7czJ9c3VwZXIoKTtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGAke3MyfWlmIChgO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9ID09PSB1bmRlZmluZWQgJiYgYDtcclxuICAgIH1cclxuICAgIHJldCA9IHJldC5zbGljZSgwLCAtNCk7XHJcbiAgICByZXQgKz0gYCkge1xcbmA7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgLy8gaWYgKGZpZWxkLnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIC8vICAgcmV0ICs9IGAke3MzfXRoaXMuJHtmaWVsZC5uYW1lfSA9ICcnO1xcbmA7XHJcbiAgICAgIC8vIH1cclxuICAgICAgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoJ1tdJykpIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gW107XFxuYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gbnVsbDtcXG5gO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKCdVbmknKSkge1xyXG4gICAgICAvLyAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSBuZXcgJHtmaWVsZC50eXBlfSgpO1xcbmA7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICByZXQgKz0gYCR7czJ9fWA7XHJcblxyXG4gICAgaWYgKDEgPCB0aGlzLm1lbWJlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldCArPSBgIGVsc2UgaWYgKGA7XHJcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9ID09PSB1bmRlZmluZWQgfHwgYDtcclxuICAgICAgfVxyXG4gICAgICByZXQgPSByZXQuc2xpY2UoMCwgLTQpO1xyXG4gICAgICByZXQgKz0gYClgO1xyXG4gICAgICByZXQgKz0gYCB7XFxuJHtzM310aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXJndW1lbnRzJyk7XFxuJHtzMn19YDtcclxuICAgIH1cclxuICAgIHJldCArPSBgIGVsc2Uge1xcbmA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gJHtmaWVsZC5uYW1lfTtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGAke3MyfX1cXG5gO1xyXG5cclxuICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PT0gJ1VuaU5vZGUnKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn10aGlzLmZpZWxkcyA9IG5ldyBNYXA8c3RyaW5nLEZ1bmN0aW9uPigpO1xcbmA7XHJcbiAgICAgIHJldCArPSBgJHtzMn10aGlzLmZpZWxkcy5zZXQoJ2NvbW1lbnRzJywgU3RyaW5nKTtcXG5gO1xyXG4gICAgICByZXQgKz0gYCR7czJ9dGhpcy5maWVsZHMuc2V0KCdjb2RlUmFuZ2UnLCBDb2RlUmFuZ2UpO1xcbmA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIHJldCArPSBgJHtzMn10aGlzLmZpZWxkcy5zZXQoJyR7ZmllbGQubmFtZX0nLCBgO1xyXG4gICAgICAgIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKGBzdHJpbmdgKSkge1xyXG4gICAgICAgICAgcmV0ICs9IGBTdHJpbmdgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgYm9vbGVhbmApKSB7XHJcbiAgICAgICAgICByZXQgKz0gYEJvb2xlYW5gO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgbnVtYmVyYCkpIHtcclxuICAgICAgICAgIHJldCArPSBgTnVtYmVyYDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYGFueWApKSB7XHJcbiAgICAgICAgICByZXQgKz0gYE9iamVjdGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKCdbXScpKSB7XHJcbiAgICAgICAgICByZXQgKz0gZmllbGQudHlwZS5zdWJzdHIoMCwgZmllbGQudHlwZS5sZW5ndGggLSAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0ICs9IGZpZWxkLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldCArPSBgKTtcXG5gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYCR7czF9fVxcbmA7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlVG9TdHJpbmdUZXh0KCk6c3RyaW5nIHtcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSBgJHtzMX1wdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcXG5gO1xyXG4gICAgcmV0ICs9IGAke3MyfXJldHVybiAnJHt0aGlzLmNsYXNzTmFtZS5zdWJzdHIoMyl9KCdgO1xyXG4gICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKGlzRmlyc3QpIHtcclxuICAgICAgICAgIHJldCArPSBgICsgYDtcclxuICAgICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc0ZpcnN0KSB7XHJcbiAgICAgICAgICByZXQgKz0gYCArICcsICcgKyBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXQgKz0gYHRoaXMuJHtmaWVsZC5uYW1lfWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXQgKz0gYCArICcpJztcXG4ke3MxfX1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVRvRXF1YWxzVGV4dCgpOnN0cmluZyB7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGNvbnN0IHMyID0gYCR7dGhpcy5pbmRlbnQoMil9YDtcclxuICAgIGNvbnN0IHM0ID0gYCR7dGhpcy5pbmRlbnQoNCl9YDtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gYCR7czF9cHVibGljIGVxdWFscyhvYmo6IGFueSk6IGJvb2xlYW4ge1xcbmA7XHJcbiAgICByZXQgKz0gYCR7czJ9aWYgKG9iaiA9PSBudWxsIHx8ICEob2JqIGluc3RhbmNlb2YgJHt0aGlzLmNsYXNzTmFtZX0pKSByZXR1cm4gZmFsc2U7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMn1jb25zdCB0aGF0OiAke3RoaXMuY2xhc3NOYW1lfSA9IDwke3RoaXMuY2xhc3NOYW1lfT5vYmo7XFxuYDtcclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1yZXR1cm4gc3VwZXIuZXF1YWxzKHRoYXQpYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1yZXR1cm4gdGhhdCAhPT0gbnVsbGA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWUgIT09ICdVbmlOb2RlJykge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnc3RyaW5nJ1xyXG4gICAgICAgIHx8IGZpZWxkLnR5cGUgPT09ICdudW1iZXInXHJcbiAgICAgICAgfHwgZmllbGQudHlwZSA9PT0gJ2Jvb2xlYW4nXHJcbiAgICAgICAgfHwgZmllbGQudHlwZSA9PT0gJ2FueScpIHtcclxuICAgICAgICAgIHJldCArPSBgXFxuJHtzNH0mJiAodGhpcy4ke2ZpZWxkLm5hbWV9ID09IG51bGwgPyB0aGF0LiR7ZmllbGQubmFtZX0gPT0gbnVsbCA6IHRoaXMuJHtmaWVsZC5uYW1lfSA9PT0gdGhhdC4ke2ZpZWxkLm5hbWV9KWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldCArPSBgXFxuJHtzNH0mJiAodGhpcy4ke2ZpZWxkLm5hbWV9ID09IG51bGwgPyB0aGF0LiR7ZmllbGQubmFtZX0gPT0gbnVsbCA6IHRoaXMuJHtmaWVsZC5uYW1lfS5lcXVhbHModGhhdC4ke2ZpZWxkLm5hbWV9KSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgO1xcbiR7czF9fVxcbmA7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlTWVyZ2VUZXh0KCk6c3RyaW5nIHtcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgY29uc3QgczMgPSBgJHt0aGlzLmluZGVudCgzKX1gO1xyXG4gICAgY29uc3QgczQgPSBgJHt0aGlzLmluZGVudCg0KX1gO1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSBgJHtzMX1wdWJsaWMgbWVyZ2UodGhhdDogJHt0aGlzLmNsYXNzTmFtZX0pIHtcXG5gO1xyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgcmV0ICs9IGAke3MyfXN1cGVyLm1lcmdlKHRoYXQpO1xcbmA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czJ9aWYgKHRoYXQuJHtmaWVsZC5uYW1lfSAhPSBudWxsKSB7XFxuYDtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYFtdYCkpIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9aWYgKHRoaXMuJHtmaWVsZC5uYW1lfSA9PSBudWxsKSB7XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czR9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gdGhhdC4ke2ZpZWxkLm5hbWV9O1xcbmA7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfX0gZWxzZSB7XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czR9dGhpcy4ke2ZpZWxkLm5hbWV9LnB1c2goLi4udGhhdC4ke2ZpZWxkLm5hbWV9KTtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzM319XFxuYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gdGhhdC4ke2ZpZWxkLm5hbWV9O1xcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0ICs9IGAke3MyfX1cXG5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgJHtzMX19XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIHJldCArPSBgJHt0aGlzLm1ha2VJbXBvcnRUZXh0KCl9XFxuYDtcclxuICAgIHJldCArPSBgJHt0aGlzLm1ha2VDbGFzc0RlY1RleHQoKX1gO1xyXG4gICAgcmV0ICs9IGB7XFxuYDtcclxuICAgIGlmICgwIDwgdGhpcy5tZW1iZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlTWVtYmVyVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VDb25zdHJ1Y3RvcigpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb1N0cmluZ1RleHQoKX1cXG5gO1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlVG9FcXVhbHNUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZU1lcmdlVGV4dCgpfWA7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzQWJzdHJhY3QpIHtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvU3RyaW5nVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb0VxdWFsc1RleHQoKX1cXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGB9XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG4gIHB1YmxpYyB3cml0ZSgpIHtcclxuICAgIGZzLndyaXRlRmlsZShgc3JjL25vZGUvJHt0aGlzLmNsYXNzTmFtZX0udHNgLCB0aGlzLnRvU3RyaW5nKCksIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkLndyaXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmF0b3Ige1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGUoKSB7XHJcbiAgICBjb25zdCBub2RlID1cclxuICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBOb2RlYCwgaXNBYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICBbYGNvbW1lbnRzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgW2Bjb2RlUmFuZ2VgLCBgQ29kZVJhbmdlYF0sXHJcbiAgICAgICAgXSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgUHJvZ3JhbWAsXHJcbiAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICBbYGJsb2NrYCwgYEJsb2NrYF0sXHJcbiAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRXhwcmAsIGlzQWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBOdW1iZXJMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBhbnlgXSxcclxuICAgICAgICAgICAgICAgIFtgc2lnbmVkYCwgYGJvb2xlYW5gXSxcclxuICAgICAgICAgICAgICAgIFtgYnl0ZXNgLCBgbnVtYmVyYF0sXHJcbiAgICAgICAgICAgICAgICBbYGlzRmxvYXRgLCBgYm9vbGVhbmBdLFxyXG4gICAgICAgICAgICAgICAgW2B0eXBlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2BwcmVmaXhgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBbYHN1Zml4YCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgSW50TGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYG51bWJlcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YERvdWJsZUxpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBudW1iZXJgXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDaGFyYWN0ZXJMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgU3RyaW5nTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBCb29sTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgYm9vbGVhbmBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQ2FzdGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgdHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgSWRlbnRgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBBcnJheWAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgaXRlbXNgLCBgRXhwcltdYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgLy8gbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBGaWVsZEFjY2Vzc2AsXHJcbiAgICAgICAgICAgICAgLy8gICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAvLyAgIFtgcmVjZWl2ZXJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgIC8vICAgW2BmaWVsZE5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgLy8gICBbYGluZGV4YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAvLyAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YE1ldGhvZENhbGxgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHJlY2VpdmVyYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIFtgbWV0aG9kTmFtZWAsIGBJZGVudGBdLFxyXG4gICAgICAgICAgICAgICAgW2BhcmdzYCwgYEV4cHJbXWBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgVW5hcnlPcGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgb3BlcmF0b3JgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBbYGV4cHJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQmluT3BgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgIFtgb3BlcmF0b3JgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgIFtgbGVmdGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgIFtgcmlnaHRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgVGVybmFyeU9wYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICBbYHRydWVFeHByYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgW2BmYWxzZUV4cHJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTmV3YCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgIFtgYXJnc2AsIGBFeHByW11gXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YE5ld0FycmF5YCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgIFtgdHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBbYGVsZW1lbnRzTnVtYCwgYEV4cHJbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgQXJyYXlgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN0YXRlbWVudGAsIGlzQWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJyZWFrYCB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDb250aW51ZWAgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRW1wdHlTdGF0ZW1lbnRgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFJldHVybmAgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEp1bXBgICxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgZGVzdGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTGFiZWxgICxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQmxvY2tgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BibG9ja0xhYmVsYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bib2R5YCwgYFN0YXRlbWVudFtdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YElmYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHRydWVTdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGZhbHNlU3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBGb3JgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bpbml0YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN0ZXBgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEVuaGFuY2VkRm9yYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbnRhaW5lcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN0YXRlbWVudGAsIGBTdGF0ZW1lbnRgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgV2hpbGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgc3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBEb1doaWxlYCB9KSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBTd2l0Y2hgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY2FzZXNgLCBgU3dpdGNoVW5pdFtdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgU3dpdGNoVW5pdGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgW2BsYWJlbGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtgc3RhdGVtZW50YCwgYFN0YXRlbWVudFtdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRGVjcmFsYXRpb25gLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDbGFzc0RlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNsYXNzTmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1lbWJlcnNgLCBgRGVjcmFsYXRpb25bXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdXBlckNsYXNzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGludGVyZmFjZXNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRnVuY3Rpb25EZWNgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BuYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Btb2RpZmllcnNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgcmV0dXJuVHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgcGFyYW1zYCwgYFBhcmFtW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgYmxvY2tgLCBgQmxvY2tgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgVmFyaWFibGVEZWZgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BuYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHR5cGVTdWZmaXhgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFZhcmlhYmxlRGVjYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhcmlhYmxlc2AsIGBWYXJpYWJsZURlZltdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFBhcmFtYCB9KSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgXX0pO1xyXG4gICAgbm9kZS53cml0ZSgpO1xyXG4gIH1cclxufVxyXG5HZW5lcmF0b3IuZ2VuZXJhdGUoKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==