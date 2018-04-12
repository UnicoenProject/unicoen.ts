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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ 82:
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
var fs = __webpack_require__(83);
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
                ret += s3 + "this." + field.name + " = null;\n";
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
        ret += s1 + "}\n";
        return ret;
        var e_4, _c, e_5, _f, e_6, _j, e_7, _m, e_8, _q, e_9, _t;
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
        } catch (e_10_1) {
            e_10 = { error: e_10_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_10) throw e_10.error;
            }
        }
        ret += " + ')';\n" + s1 + "}\n";
        return ret;
        var e_10, _c;
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
        } catch (e_11_1) {
            e_11 = { error: e_11_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_11) throw e_11.error;
            }
        }
        ret += ";\n" + s1 + "}\n";
        return ret;
        var e_11, _c;
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
        } catch (e_12_1) {
            e_12 = { error: e_12_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_12) throw e_12.error;
            }
        }
        ret += s1 + "}\n";
        return ret;
        var e_12, _c;
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
        } catch (e_13_1) {
            e_13 = { error: e_13_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_13) throw e_13.error;
            }
        }
        var e_13, _c;
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
                    members: [["value", "number"], ["signed", "boolean"], ["bytes", "number"], ["isFloat", "boolean"], ["type", "string"], ["prefix", "string"], ["sufix", "string"]],
                    children: [new Node({ className: "IntLiteral",
                        members: [["value", "number"]]
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
                        members: [["init", "Expr"], ["cond", "Expr"], ["step", "Expr"], ["statement", "Statement"]] }), new Node({ className: "While",
                        members: [["cond", "Expr"], ["statement", "Statement"]],
                        children: [new Node({ className: "DoWhile" })]
                    }), new Node({ className: "Switch",
                        members: [["cond", "Expr"], ["cases", "SwitchUnit[]"]],
                        children: [new Node({ className: "SwitchUnit",
                            members: [["label", "string"], ["cond", "Expr"], ["statement", "Statement[]"]]
                        })]
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

/***/ 83:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIDMzODMxNDZhN2U5MzA4N2QxMjUwIiwiQzpcXGRldmVsb3BcXHVuaWNvZW4udHNcXHNyY1xcbm9kZVxcR2VuZXJhdG9yLnRzIiwiZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLDZCQUF5QjtBQUN6QjtBQUNFLG1CQUFxQyxNQUFvQjtBQUEvQixhQUFJLE9BQU87QUFBUyxhQUFJLE9BQVU7QUFBQztBQUMvRCxXQUFDO0FBQUE7QUFFRDtBQU9FLGtCQUNzSDtZQURoRyxlQUFTO1lBQUUsUUFBYztZQUFkLGlDQUFjO1lBQUUsUUFBa0I7WUFBbEIscUNBQWtCO1lBQUUsUUFBcUI7WUFBckIsd0NBQXFCO1lBQUUsUUFBZTtZQUFmLGtDQUFlO0FBQTNHLG9CQW1CQztBQXpCTSxhQUFTLFlBQWE7QUFDdEIsYUFBVSxhQUFpQjtBQUMzQixhQUFjLGlCQUFlO0FBQzdCLGFBQU8sVUFBYztBQUNyQixhQUFRLFdBQWE7QUFJdEIsYUFBVSxhQUFJLFFBQWtCO0FBQ2hDLGFBQVcsYUFBYztBQUMxQixZQUFnQixnQkFBRTtBQUNmLGlCQUFlLGlCQUFHLEtBQ3hCO0FBQUM7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QUFXLFdBRXRCO0FBUk8scUJBQVQsQ0FsQ1EsTUEyQ0EsT0FBWSxXQUFVO0FBQ3JCLGlDQUFDLENBQ04sQ0FBTyxRQUFTLFNBQ2hCLENBQVEsU0FDVDtBQUNPLHVDQUNFLE9BQVksV0FBYztBQUN6QixxQ0FBQyxDQUNOLENBQVEsU0FBVyxXQUNuQixDQUFPLFFBQVMsU0FDaEIsQ0FBWSxhQU10QjtBQVZlLHlCQUFULENBRE87QUFMRixxQkFBVDtBQTVDSyxpQkFBVCxPQTZEUSxPQUFZLFdBQWUsZUFBWSxZQUFNO0FBQzNDLDhCQUFFLENBQ1IsSUFBUSxLQUFDLEVBQVcsV0FBWTtBQUN2QixpQ0FBQyxDQUNOLENBQVksYUFBVyxXQUN2QixDQUFZLGFBQWEsYUFDekIsQ0FBVSxXQUFrQixrQkFDNUIsQ0FBYSxjQUFhLGFBQzFCLENBQWEsY0FDWixxQkFDRyxPQUFZLFdBQWU7QUFDMUIsaUNBQUMsQ0FDTixDQUFPLFFBQVcsV0FDbEIsQ0FBWSxhQUFhLGFBQ3pCLENBQWEsY0FBVyxXQUN4QixDQUFTLFVBQVksWUFDckIsQ0FBUSxTQUNQLFNBUEksRUFBVCxPQVFRLE9BQVksV0FBZTtBQUMxQixpQ0FBQyxDQUNOLENBQU8sUUFBVyxXQUNsQixDQUFRLFNBQVMsU0FDakIsQ0FBYSxjQUNaLFVBTEksRUFBVCxPQU1RLE9BQVksV0FBZTtBQUMxQixpQ0FBQyxDQUNOLENBQVksYUFBYSxhQUN6QixDQUFPLFFBQVcsV0FDbEIsQ0FBWSxhQUNiO0FBQ08sa0NBQUMsQ0FDUCxJQUFRLEtBQUMsRUFBVyxXQU05QixXQWJlLEVBQVQ7QUF4QkssaUJBQVQ7QUFuSUssYUFBVCxDQUxVLENBSkwsRUFBVDtBQWtMRSxhQUNOO0FBQUM7QUFDSCxXQUFDO0FBQUE7O0FBQ1EsVUFBWSxXOzs7Ozs7O0FDaGNyQiwrQiIsImZpbGUiOiJnZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzM4MzE0NmE3ZTkzMDg3ZDEyNTAiLCJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmNsYXNzIEZpZWxkIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIG5hbWU6c3RyaW5nLCBwdWJsaWMgdHlwZTpzdHJpbmcpIHt9XHJcbn1cclxuXHJcbmNsYXNzIE5vZGUgeyBcclxuICBwdWJsaWMgY2xhc3NOYW1lOnN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBpc0Fic3RyYWN0OmJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgc3VwZXJDbGFzc05hbWU6c3RyaW5nID0gbnVsbDtcclxuICBwdWJsaWMgbWVtYmVyczpGaWVsZFtdID0gW107XHJcbiAgcHVibGljIGNoaWxkcmVuOk5vZGVbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IgKHsgY2xhc3NOYW1lLCBtZW1iZXJzID0gbnVsbCwgaXNBYnN0cmFjdCA9IGZhbHNlLCBzdXBlckNsYXNzTmFtZSA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCB9IFxyXG4gICAgOiB7Y2xhc3NOYW1lOiBzdHJpbmcsIG1lbWJlcnM/OiBbc3RyaW5nLCBzdHJpbmddW10sIGlzQWJzdHJhY3Q/OiBib29sZWFuLCBzdXBlckNsYXNzTmFtZT86c3RyaW5nLCBjaGlsZHJlbj86IE5vZGVbXX0pIHtcclxuICAgIHRoaXMuY2xhc3NOYW1lICs9IGBVbmkke2NsYXNzTmFtZX1gO1xyXG4gICAgdGhpcy5pc0Fic3RyYWN0ID0gaXNBYnN0cmFjdDtcclxuICAgIGlmIChzdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICB0aGlzLnN1cGVyQ2xhc3NOYW1lID0gYCR7c3VwZXJDbGFzc05hbWV9YDtcclxuICAgIH1cclxuICAgIGlmIChtZW1iZXJzKSB7XHJcbiAgICAgIGZvciAobGV0IFtuYW1lLHR5cGVdIG9mIG1lbWJlcnMpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0VXBwZXIodHlwZSkgJiYgIXRoaXMuaXNOb2RlSGVwbGVyKHR5cGUpKSB7XHJcbiAgICAgICAgICB0eXBlID0gYFVuaSR7dHlwZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lbWJlcnMucHVzaChuZXcgRmllbGQobmFtZSx0eXBlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCwgYXJyYXkpID0+IHtlbGVtZW50LnN1cGVyQ2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWU7fSk7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNTdGFydFVwcGVyKHN0cjpzdHJpbmcpOmJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkubWF0Y2goL15bQS1aXSskLykgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTm9kZUhlcGxlcihzdHI6c3RyaW5nKTpib29sZWFuIHtcclxuICAgIHJldHVybiBzdHIuaW5jbHVkZXMoYENvZGVSYW5nZWApO1xyXG4gIH1cclxuICBwcml2YXRlIGluZGVudChuOm51bWJlcik6c3RyaW5nIHtcclxuICAgIGNvbnN0IHNwYWNlID0gYFxcdTAwMjBcXHUwMDIwYDtcclxuICAgIGxldCByZXQgPSBgYDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XHJcbiAgICAgIHJldCArPSBzcGFjZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VJbXBvcnRUZXh0KCk6c3RyaW5nIHtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gJyc7XHJcbiAgICBjb25zdCBpbXBvcnRzOnN0cmluZ1tdID0gW107XHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICBpbXBvcnRzLnB1c2godGhpcy5zdXBlckNsYXNzTmFtZSk7XHJcbiAgICAgIHJldCArPSBgaW1wb3J0ICR7dGhpcy5zdXBlckNsYXNzTmFtZX0gZnJvbSAnLi8ke3RoaXMuc3VwZXJDbGFzc05hbWV9JztcXG5gO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgY29uc3QgdHlwZSA9IGZpZWxkLnR5cGU7XHJcbiAgICAgIGlmICh0eXBlLnN0YXJ0c1dpdGgoYFVuaWApKSB7XHJcbiAgICAgICAgaWYgKHR5cGUuZW5kc1dpdGgoYFtdYCkpIHtcclxuICAgICAgICAgIGNvbnN0IHQgPSB0eXBlLnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAgIGlmICghaW1wb3J0cy5pbmNsdWRlcyh0KSkge1xyXG4gICAgICAgICAgICBpbXBvcnRzLnB1c2godCk7XHJcbiAgICAgICAgICAgIHJldCArPSBgaW1wb3J0ICR7dH0gZnJvbSAnLi8ke3R9JztcXG5gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoIWltcG9ydHMuaW5jbHVkZXModHlwZSkpIHtcclxuICAgICAgICAgICAgaW1wb3J0cy5wdXNoKHR5cGUpO1xyXG4gICAgICAgICAgICByZXQgKz0gYGltcG9ydCAke3R5cGV9IGZyb20gJy4vJHt0eXBlfSc7XFxuYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc05vZGVIZXBsZXIodHlwZSkpIHtcclxuICAgICAgICByZXQgKz0gYGltcG9ydCAke3R5cGV9IGZyb20gJy4uL25vZGVfaGVscGVyLyR7dHlwZX0nO2A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VDbGFzc0RlY1RleHQoKTpzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIHJldCArPSBgZXhwb3J0IGRlZmF1bHQgYDtcclxuICAgIGlmICh0aGlzLmlzQWJzdHJhY3QpIHtcclxuICAgICAgcmV0ICs9IGBhYnN0cmFjdCBgO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGBjbGFzcyAke3RoaXMuY2xhc3NOYW1lfSBgO1xyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgcmV0ICs9IGBleHRlbmRzICR7dGhpcy5zdXBlckNsYXNzTmFtZX0gYDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VNZW1iZXJUZXh0KCk6c3RyaW5nIHtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gJyc7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMX1wdWJsaWMgJHtmaWVsZC5uYW1lfTogJHtmaWVsZC50eXBlfTtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUNvbnN0cnVjdG9yKCk6c3RyaW5nIHtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gJyc7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGNvbnN0IHMyID0gYCR7dGhpcy5pbmRlbnQoMil9YDtcclxuICAgIGNvbnN0IHMzID0gYCR7dGhpcy5pbmRlbnQoMyl9YDtcclxuICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICByZXQgKz0gYCR7czF9cHVibGljIGNvbnN0cnVjdG9yKCk7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMX1wdWJsaWMgY29uc3RydWN0b3IoYDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtmaWVsZC5uYW1lfTogJHtmaWVsZC50eXBlfSwgYDtcclxuICAgIH1cclxuICAgIHJldCA9IHJldC5zbGljZSgwLCAtMik7XHJcbiAgICByZXQgKz0gYCk7XFxuYDtcclxuXHJcbiAgICByZXQgKz0gYCR7czF9cHVibGljIGNvbnN0cnVjdG9yKGA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7ZmllbGQubmFtZX0/OiAke2ZpZWxkLnR5cGV9LCBgO1xyXG4gICAgfVxyXG4gICAgcmV0ID0gcmV0LnNsaWNlKDAsIC0yKTtcclxuICAgIHJldCArPSBgKSB7XFxuYDtcclxuXHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYCR7czJ9c3VwZXIoKTtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGAke3MyfWlmIChgO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9ID09PSB1bmRlZmluZWQgJiYgYDtcclxuICAgIH1cclxuICAgIHJldCA9IHJldC5zbGljZSgwLCAtNCk7XHJcbiAgICByZXQgKz0gYCkge1xcbmA7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke3MzfXRoaXMuJHtmaWVsZC5uYW1lfSA9IG51bGw7XFxuYDtcclxuICAgIH1cclxuXHJcbiAgICByZXQgKz0gYCR7czJ9fWA7XHJcblxyXG4gICAgaWYgKDEgPCB0aGlzLm1lbWJlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldCArPSBgIGVsc2UgaWYgKGA7XHJcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9ID09PSB1bmRlZmluZWQgfHwgYDtcclxuICAgICAgfVxyXG4gICAgICByZXQgPSByZXQuc2xpY2UoMCwgLTQpO1xyXG4gICAgICByZXQgKz0gYClgO1xyXG4gICAgICByZXQgKz0gYCB7XFxuJHtzM310aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXJndW1lbnRzJyk7XFxuJHtzMn19YDtcclxuICAgIH1cclxuICAgIHJldCArPSBgIGVsc2Uge1xcbmA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gJHtmaWVsZC5uYW1lfTtcXG5gO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGAke3MyfX1cXG5gO1xyXG4gICAgcmV0ICs9IGAke3MxfX1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVRvU3RyaW5nVGV4dCgpOnN0cmluZyB7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGNvbnN0IHMyID0gYCR7dGhpcy5pbmRlbnQoMil9YDtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gYCR7czF9cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMn1yZXR1cm4gJyR7dGhpcy5jbGFzc05hbWUuc3Vic3RyKDMpfSgnYDtcclxuICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIGlmIChmaWVsZC50eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmIChpc0ZpcnN0KSB7XHJcbiAgICAgICAgICByZXQgKz0gYCArIGA7XHJcbiAgICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICghaXNGaXJzdCkge1xyXG4gICAgICAgICAgcmV0ICs9IGAgKyAnLCAnICsgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0ICs9IGB0aGlzLiR7ZmllbGQubmFtZX1gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0ICs9IGAgKyAnKSc7XFxuJHtzMX19XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VUb0VxdWFsc1RleHQoKTpzdHJpbmcge1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBjb25zdCBzMiA9IGAke3RoaXMuaW5kZW50KDIpfWA7XHJcbiAgICBjb25zdCBzNCA9IGAke3RoaXMuaW5kZW50KDQpfWA7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9IGAke3MxfXB1YmxpYyBlcXVhbHMob2JqOiBhbnkpOiBib29sZWFuIHtcXG5gO1xyXG4gICAgcmV0ICs9IGAke3MyfWlmIChvYmogPT0gbnVsbCB8fCAhKG9iaiBpbnN0YW5jZW9mICR7dGhpcy5jbGFzc05hbWV9KSkgcmV0dXJuIGZhbHNlO1xcbmA7XHJcbiAgICByZXQgKz0gYCR7czJ9Y29uc3QgdGhhdDogJHt0aGlzLmNsYXNzTmFtZX0gPSA8JHt0aGlzLmNsYXNzTmFtZX0+b2JqO1xcbmA7XHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYCR7czJ9cmV0dXJuIHN1cGVyLmVxdWFscyh0aGF0KWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXQgKz0gYCR7czJ9cmV0dXJuIHRoYXQgIT09IG51bGxgO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdzdHJpbmcnIFxyXG4gICAgICB8fCBmaWVsZC50eXBlID09PSAnbnVtYmVyJyBcclxuICAgICAgfHwgZmllbGQudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgcmV0ICs9IGBcXG4ke3M0fSYmICh0aGlzLiR7ZmllbGQubmFtZX0gPT0gbnVsbCA/IHRoYXQuJHtmaWVsZC5uYW1lfSA9PSBudWxsIDogdGhpcy4ke2ZpZWxkLm5hbWV9ID09PSB0aGF0LiR7ZmllbGQubmFtZX0pYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQgKz0gYFxcbiR7czR9JiYgKHRoaXMuJHtmaWVsZC5uYW1lfSA9PSBudWxsID8gdGhhdC4ke2ZpZWxkLm5hbWV9ID09IG51bGwgOiB0aGlzLiR7ZmllbGQubmFtZX0uZXF1YWxzKHRoYXQuJHtmaWVsZC5uYW1lfSkpYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgO1xcbiR7czF9fVxcbmA7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlTWVyZ2VUZXh0KCk6c3RyaW5nIHtcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgY29uc3QgczMgPSBgJHt0aGlzLmluZGVudCgzKX1gO1xyXG4gICAgY29uc3QgczQgPSBgJHt0aGlzLmluZGVudCg0KX1gO1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSBgJHtzMX1wdWJsaWMgbWVyZ2UodGhhdDogJHt0aGlzLmNsYXNzTmFtZX0pIHtcXG5gO1xyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgcmV0ICs9IGAke3MyfXN1cGVyLm1lcmdlKHRoYXQpO1xcbmA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czJ9aWYgKHRoYXQuJHtmaWVsZC5uYW1lfSAhPSBudWxsKSB7XFxuYDtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYFtdYCkpIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9aWYgKHRoaXMuJHtmaWVsZC5uYW1lfSA9PSBudWxsKSB7XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czR9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gdGhhdC4ke2ZpZWxkLm5hbWV9O1xcbmA7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfX0gZWxzZSB7XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czR9dGhpcy4ke2ZpZWxkLm5hbWV9LnB1c2goLi4udGhhdC4ke2ZpZWxkLm5hbWV9KTtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzM319XFxuYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gdGhhdC4ke2ZpZWxkLm5hbWV9O1xcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0ICs9IGAke3MyfX1cXG5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgJHtzMX19XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIHJldCArPSBgJHt0aGlzLm1ha2VJbXBvcnRUZXh0KCl9XFxuYDtcclxuICAgIHJldCArPSBgJHt0aGlzLm1ha2VDbGFzc0RlY1RleHQoKX1gO1xyXG4gICAgcmV0ICs9IGB7XFxuYDtcclxuICAgIGlmICgwIDwgdGhpcy5tZW1iZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlTWVtYmVyVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VDb25zdHJ1Y3RvcigpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb1N0cmluZ1RleHQoKX1cXG5gO1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlVG9FcXVhbHNUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZU1lcmdlVGV4dCgpfWA7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzQWJzdHJhY3QpIHtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvU3RyaW5nVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb0VxdWFsc1RleHQoKX1cXG5gOyAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0ICs9IGB9XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG4gIHB1YmxpYyB3cml0ZSgpIHtcclxuICAgIGZzLndyaXRlRmlsZShgc3JjL25vZGUvJHt0aGlzLmNsYXNzTmFtZX0udHNgLCB0aGlzLnRvU3RyaW5nKCksIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkLndyaXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmF0b3IgeyAgXHJcbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZSgpIHtcclxuICAgIGNvbnN0IG5vZGUgPSBcclxuICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBOb2RlYCwgaXNBYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICBbYGNvbW1lbnRzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgW2Bjb2RlUmFuZ2VgLCBgQ29kZVJhbmdlYF0sXHJcbiAgICAgICAgXSxjaGlsZHJlbjogW1xyXG4gICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBQcm9ncmFtYCxcclxuICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgIFtgYmxvY2tgLCBgQmxvY2tgXSxcclxuICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBFeHByYCwgaXNBYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YE51bWJlckxpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYG51bWJlcmBdLFxyXG4gICAgICAgICAgICAgICAgW2BzaWduZWRgLCBgYm9vbGVhbmBdLFxyXG4gICAgICAgICAgICAgICAgW2BieXRlc2AsIGBudW1iZXJgXSxcclxuICAgICAgICAgICAgICAgIFtgaXNGbG9hdGAsIGBib29sZWFuYF0sXHJcbiAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBbYHByZWZpeGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgc3VmaXhgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBJbnRMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgbnVtYmVyYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgU3RyaW5nTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBCb29sTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgYm9vbGVhbmBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQ2FzdGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgdHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgSWRlbnRgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBBcnJheWAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgaXRlbXNgLCBgRXhwcltdYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgLy8gbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBGaWVsZEFjY2Vzc2AsXHJcbiAgICAgICAgICAgICAgLy8gICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAvLyAgIFtgcmVjZWl2ZXJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgIC8vICAgW2BmaWVsZE5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgLy8gICBbYGluZGV4YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAvLyAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YE1ldGhvZENhbGxgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHJlY2VpdmVyYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIFtgbWV0aG9kTmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgYXJnc2AsIGBFeHByW11gXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFVuYXJ5T3BgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYG9wZXJhdG9yYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2BleHByYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJpbk9wYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICBbYG9wZXJhdG9yYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICBbYGxlZnRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICBbYHJpZ2h0YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFRlcm5hcnlPcGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgW2B0cnVlRXhwcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgIFtgZmFsc2VFeHByYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN0YXRlbWVudGAsIGlzQWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJyZWFrYCB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDb250aW51ZWAgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRW1wdHlTdGF0ZW1lbnRgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFJldHVybmAgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEp1bXBgICxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgZGVzdGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTGFiZWxgICxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQmxvY2tgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BibG9ja0xhYmVsYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bib2R5YCwgYFN0YXRlbWVudFtdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YElmYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHRydWVTdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGZhbHNlU3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBGb3JgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bpbml0YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN0ZXBgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLCAgICAgXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgV2hpbGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgc3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBEb1doaWxlYCB9KSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSwgICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBTd2l0Y2hgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY2FzZXNgLCBgU3dpdGNoVW5pdFtdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN3aXRjaFVuaXRgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbYGxhYmVsYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50W11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pLCAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksICAgXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRGVjcmFsYXRpb25gLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDbGFzc0RlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNsYXNzTmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1lbWJlcnNgLCBgRGVjcmFsYXRpb25bXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdXBlckNsYXNzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGludGVyZmFjZXNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRnVuY3Rpb25EZWNgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BuYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Btb2RpZmllcnNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgcmV0dXJuVHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgcGFyYW1zYCwgYFBhcmFtW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgYmxvY2tgLCBgQmxvY2tgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBWYXJpYWJsZURlZmAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdHlwZVN1ZmZpeGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBWYXJpYWJsZURlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1vZGlmaWVyc2AsIGBzdHJpbmdbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B0eXBlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YXJpYWJsZXNgLCBgVmFyaWFibGVEZWZbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBQYXJhbWAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9KSwgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdfSk7XHJcbiAgICBub2RlLndyaXRlKCk7XHJcbiAgfVxyXG59XHJcbkdlbmVyYXRvci5nZW5lcmF0ZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbm9kZS9HZW5lcmF0b3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=