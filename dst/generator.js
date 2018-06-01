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
/******/ 	return __webpack_require__(__webpack_require__.s = 135);
/******/ })
/************************************************************************/
/******/ ({

/***/ 135:
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
var fs = __webpack_require__(40);
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

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIGMzMThiZjEzNGMzOWY5ZDQyZWJkIiwiQzpcXGRldmVsb3BcXHVuaWNvZW4udHNcXHNyY1xcbm9kZVxcR2VuZXJhdG9yLnRzIiwiZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLDZCQUF5QjtBQUN6QjtBQUNFLG1CQUFxQyxNQUFvQjtBQUEvQixhQUFJLE9BQU87QUFBUyxhQUFJLE9BQVU7QUFBQztBQUMvRCxXQUFDO0FBQUE7QUFFRDtBQU9FLGtCQUNzSDtZQURoRyxlQUFTO1lBQUUsUUFBYztZQUFkLGlDQUFjO1lBQUUsUUFBa0I7WUFBbEIscUNBQWtCO1lBQUUsUUFBcUI7WUFBckIsd0NBQXFCO1lBQUUsUUFBZTtZQUFmLGtDQUFlO0FBQTNHLG9CQXFCQztBQTNCTSxhQUFTLFlBQWE7QUFDdEIsYUFBVSxhQUFpQjtBQUMzQixhQUFjLGlCQUFlO0FBQzdCLGFBQU8sVUFBYztBQUNyQixhQUFRLFdBQWE7QUFJdEIsYUFBVSxhQUFJLFFBQWtCO0FBQ2hDLGFBQVcsYUFBYztBQUMxQixZQUFnQixnQkFBRTtBQUNmLGlCQUFlLGlCQUFHLEtBQ3hCO0FBQUM7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RUFBVyxXQUV0QjtBQVJPLHFCQUFULENBbENRLE1BMkNBLE9BQVksV0FBVTtBQUNyQixpQ0FBQyxDQUNOLENBQU8sUUFBUyxTQUNoQixDQUFRLFNBQ1Q7QUFDTyx1Q0FDRSxPQUFZLFdBQWM7QUFDekIscUNBQUMsQ0FDTixDQUFRLFNBQVcsV0FDbkIsQ0FBTyxRQUFTLFNBQ2hCLENBQVksYUFNdEI7QUFWZSx5QkFBVCxDQURPO0FBTEYscUJBQVQ7QUE1Q0ssaUJBQVQsT0E2RFEsT0FBWSxXQUFlLGVBQVksWUFBTTtBQUMzQyw4QkFBRSxDQUNSLElBQVEsS0FBQyxFQUFXLFdBQVk7QUFDdkIsaUNBQUMsQ0FDTixDQUFZLGFBQVcsV0FDdkIsQ0FBWSxhQUFhLGFBQ3pCLENBQVUsV0FBa0Isa0JBQzVCLENBQWEsY0FBYSxhQUMxQixDQUFhLGNBQ1oscUJBQ0csT0FBWSxXQUFlO0FBQzFCLGlDQUFDLENBQ04sQ0FBTyxRQUFXLFdBQ2xCLENBQVksYUFBYSxhQUN6QixDQUFhLGNBQVcsV0FDeEIsQ0FBUyxVQUFZLFlBQ3JCLENBQVEsU0FDUCxTQVBJLEVBQVQsT0FRUSxPQUFZLFdBQWU7QUFDMUIsaUNBQUMsQ0FDTixDQUFPLFFBQVcsV0FDbEIsQ0FBUSxTQUFTLFNBQ2pCLENBQWEsY0FDWixVQUxJLEVBQVQsT0FNUSxPQUFZLFdBQWU7QUFDMUIsaUNBQUMsQ0FDTixDQUFZLGFBQWEsYUFDekIsQ0FBTyxRQUFXLFdBQ2xCLENBQVksYUFDYjtBQUNPLGtDQUFDLENBQ1AsSUFBUSxLQUFDLEVBQVcsV0FNOUIsV0FiZSxFQUFUO0FBeEJLLGlCQUFUO0FBbklLLGFBQVQsQ0FMVSxDQUpMLEVBQVQ7QUFrTEUsYUFDTjtBQUFDO0FBQ0gsV0FBQztBQUFBOztBQUNRLFVBQVksVzs7Ozs7OztBQ2xjckIsK0IiLCJmaWxlIjoiZ2VuZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTM1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMzE4YmYxMzRjMzlmOWQ0MmViZCIsImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuY2xhc3MgRmllbGQge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTpzdHJpbmcsIHB1YmxpYyB0eXBlOnN0cmluZykge31cclxufVxyXG5cclxuY2xhc3MgTm9kZSB7IFxyXG4gIHB1YmxpYyBjbGFzc05hbWU6c3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGlzQWJzdHJhY3Q6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzdXBlckNsYXNzTmFtZTpzdHJpbmcgPSBudWxsO1xyXG4gIHB1YmxpYyBtZW1iZXJzOkZpZWxkW10gPSBbXTtcclxuICBwdWJsaWMgY2hpbGRyZW46Tm9kZVtdID0gW107XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAoeyBjbGFzc05hbWUsIG1lbWJlcnMgPSBudWxsLCBpc0Fic3RyYWN0ID0gZmFsc2UsIHN1cGVyQ2xhc3NOYW1lID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsIH0gXHJcbiAgICA6IHtjbGFzc05hbWU6IHN0cmluZywgbWVtYmVycz86IFtzdHJpbmcsIHN0cmluZ11bXSwgaXNBYnN0cmFjdD86IGJvb2xlYW4sIHN1cGVyQ2xhc3NOYW1lPzpzdHJpbmcsIGNoaWxkcmVuPzogTm9kZVtdfSkge1xyXG4gICAgdGhpcy5jbGFzc05hbWUgKz0gYFVuaSR7Y2xhc3NOYW1lfWA7XHJcbiAgICB0aGlzLmlzQWJzdHJhY3QgPSBpc0Fic3RyYWN0O1xyXG4gICAgaWYgKHN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHRoaXMuc3VwZXJDbGFzc05hbWUgPSBgJHtzdXBlckNsYXNzTmFtZX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lbWJlcnMpIHtcclxuICAgICAgZm9yIChsZXQgW25hbWUsdHlwZV0gb2YgbWVtYmVycykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRVcHBlcih0eXBlKSAmJiAhdGhpcy5pc05vZGVIZXBsZXIodHlwZSkpIHtcclxuICAgICAgICAgIHR5cGUgPSBgVW5pJHt0eXBlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVtYmVycy5wdXNoKG5ldyBGaWVsZChuYW1lLHR5cGUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4geyBcclxuICAgICAgICBlbGVtZW50LnN1cGVyQ2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWU7IFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1N0YXJ0VXBwZXIoc3RyOnN0cmluZyk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS5tYXRjaCgvXltBLVpdKyQvKSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNOb2RlSGVwbGVyKHN0cjpzdHJpbmcpOmJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHN0ci5pbmNsdWRlcyhgQ29kZVJhbmdlYCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgaW5kZW50KG46bnVtYmVyKTpzdHJpbmcge1xyXG4gICAgY29uc3Qgc3BhY2UgPSBgXFx1MDAyMFxcdTAwMjBgO1xyXG4gICAgbGV0IHJldCA9IGBgO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcclxuICAgICAgcmV0ICs9IHNwYWNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUltcG9ydFRleHQoKTpzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIGNvbnN0IGltcG9ydHM6c3RyaW5nW10gPSBbXTtcclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIGltcG9ydHMucHVzaCh0aGlzLnN1cGVyQ2xhc3NOYW1lKTtcclxuICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0aGlzLnN1cGVyQ2xhc3NOYW1lfSBmcm9tICcuLyR7dGhpcy5zdXBlckNsYXNzTmFtZX0nO1xcbmA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICBjb25zdCB0eXBlID0gZmllbGQudHlwZTtcclxuICAgICAgaWYgKHR5cGUuc3RhcnRzV2l0aChgVW5pYCkpIHtcclxuICAgICAgICBpZiAodHlwZS5lbmRzV2l0aChgW11gKSkge1xyXG4gICAgICAgICAgY29uc3QgdCA9IHR5cGUuc2xpY2UoMCwgLTIpO1xyXG4gICAgICAgICAgaWYgKCFpbXBvcnRzLmluY2x1ZGVzKHQpKSB7XHJcbiAgICAgICAgICAgIGltcG9ydHMucHVzaCh0KTtcclxuICAgICAgICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0fSBmcm9tICcuLyR7dH0nO1xcbmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghaW1wb3J0cy5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgICAgICAgICBpbXBvcnRzLnB1c2godHlwZSk7XHJcbiAgICAgICAgICAgIHJldCArPSBgaW1wb3J0ICR7dHlwZX0gZnJvbSAnLi8ke3R5cGV9JztcXG5gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTm9kZUhlcGxlcih0eXBlKSkge1xyXG4gICAgICAgIHJldCArPSBgaW1wb3J0ICR7dHlwZX0gZnJvbSAnLi4vbm9kZV9oZWxwZXIvJHt0eXBlfSc7YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUNsYXNzRGVjVGV4dCgpOnN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgcmV0ICs9IGBleHBvcnQgZGVmYXVsdCBgO1xyXG4gICAgaWYgKHRoaXMuaXNBYnN0cmFjdCkge1xyXG4gICAgICByZXQgKz0gYGFic3RyYWN0IGA7XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYGNsYXNzICR7dGhpcy5jbGFzc05hbWV9IGA7XHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYGV4dGVuZHMgJHt0aGlzLnN1cGVyQ2xhc3NOYW1lfSBgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZU1lbWJlclRleHQoKTpzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke3MxfXB1YmxpYyAke2ZpZWxkLm5hbWV9OiAke2ZpZWxkLnR5cGV9O1xcbmA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlQ29uc3RydWN0b3IoKTpzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgY29uc3QgczMgPSBgJHt0aGlzLmluZGVudCgzKX1gO1xyXG4gICAgLy8gY29uc3RydWN0b3JcclxuICAgIHJldCArPSBgJHtzMX1wdWJsaWMgY29uc3RydWN0b3IoKTtcXG5gO1xyXG4gICAgcmV0ICs9IGAke3MxfXB1YmxpYyBjb25zdHJ1Y3RvcihgO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9OiAke2ZpZWxkLnR5cGV9LCBgO1xyXG4gICAgfVxyXG4gICAgcmV0ID0gcmV0LnNsaWNlKDAsIC0yKTtcclxuICAgIHJldCArPSBgKTtcXG5gO1xyXG5cclxuICAgIHJldCArPSBgJHtzMX1wdWJsaWMgY29uc3RydWN0b3IoYDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtmaWVsZC5uYW1lfT86ICR7ZmllbGQudHlwZX0sIGA7XHJcbiAgICB9XHJcbiAgICByZXQgPSByZXQuc2xpY2UoMCwgLTIpO1xyXG4gICAgcmV0ICs9IGApIHtcXG5gO1xyXG5cclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1zdXBlcigpO1xcbmA7XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYCR7czJ9aWYgKGA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7ZmllbGQubmFtZX0gPT09IHVuZGVmaW5lZCAmJiBgO1xyXG4gICAgfVxyXG4gICAgcmV0ID0gcmV0LnNsaWNlKDAsIC00KTtcclxuICAgIHJldCArPSBgKSB7XFxuYDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gbnVsbDtcXG5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgJHtzMn19YDtcclxuXHJcbiAgICBpZiAoMSA8IHRoaXMubWVtYmVycy5sZW5ndGgpIHtcclxuICAgICAgcmV0ICs9IGAgZWxzZSBpZiAoYDtcclxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICByZXQgKz0gYCR7ZmllbGQubmFtZX0gPT09IHVuZGVmaW5lZCB8fCBgO1xyXG4gICAgICB9XHJcbiAgICAgIHJldCA9IHJldC5zbGljZSgwLCAtNCk7XHJcbiAgICAgIHJldCArPSBgKWA7XHJcbiAgICAgIHJldCArPSBgIHtcXG4ke3MzfXRocm93IG5ldyBFcnJvcignaW52YWxpZCBhcmd1bWVudHMnKTtcXG4ke3MyfX1gO1xyXG4gICAgfVxyXG4gICAgcmV0ICs9IGAgZWxzZSB7XFxuYDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSAke2ZpZWxkLm5hbWV9O1xcbmA7XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYCR7czJ9fVxcbmA7XHJcbiAgICByZXQgKz0gYCR7czF9fVxcbmA7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlVG9TdHJpbmdUZXh0KCk6c3RyaW5nIHtcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSBgJHtzMX1wdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcXG5gO1xyXG4gICAgcmV0ICs9IGAke3MyfXJldHVybiAnJHt0aGlzLmNsYXNzTmFtZS5zdWJzdHIoMyl9KCdgO1xyXG4gICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKGlzRmlyc3QpIHtcclxuICAgICAgICAgIHJldCArPSBgICsgYDtcclxuICAgICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc0ZpcnN0KSB7XHJcbiAgICAgICAgICByZXQgKz0gYCArICcsICcgKyBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXQgKz0gYHRoaXMuJHtmaWVsZC5uYW1lfWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXQgKz0gYCArICcpJztcXG4ke3MxfX1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVRvRXF1YWxzVGV4dCgpOnN0cmluZyB7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGNvbnN0IHMyID0gYCR7dGhpcy5pbmRlbnQoMil9YDtcclxuICAgIGNvbnN0IHM0ID0gYCR7dGhpcy5pbmRlbnQoNCl9YDtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gYCR7czF9cHVibGljIGVxdWFscyhvYmo6IGFueSk6IGJvb2xlYW4ge1xcbmA7XHJcbiAgICByZXQgKz0gYCR7czJ9aWYgKG9iaiA9PSBudWxsIHx8ICEob2JqIGluc3RhbmNlb2YgJHt0aGlzLmNsYXNzTmFtZX0pKSByZXR1cm4gZmFsc2U7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMn1jb25zdCB0aGF0OiAke3RoaXMuY2xhc3NOYW1lfSA9IDwke3RoaXMuY2xhc3NOYW1lfT5vYmo7XFxuYDtcclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1yZXR1cm4gc3VwZXIuZXF1YWxzKHRoYXQpYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1yZXR1cm4gdGhhdCAhPT0gbnVsbGA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3N0cmluZycgXHJcbiAgICAgIHx8IGZpZWxkLnR5cGUgPT09ICdudW1iZXInIFxyXG4gICAgICB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICByZXQgKz0gYFxcbiR7czR9JiYgKHRoaXMuJHtmaWVsZC5uYW1lfSA9PSBudWxsID8gdGhhdC4ke2ZpZWxkLm5hbWV9ID09IG51bGwgOiB0aGlzLiR7ZmllbGQubmFtZX0gPT09IHRoYXQuJHtmaWVsZC5uYW1lfSlgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldCArPSBgXFxuJHtzNH0mJiAodGhpcy4ke2ZpZWxkLm5hbWV9ID09IG51bGwgPyB0aGF0LiR7ZmllbGQubmFtZX0gPT0gbnVsbCA6IHRoaXMuJHtmaWVsZC5uYW1lfS5lcXVhbHModGhhdC4ke2ZpZWxkLm5hbWV9KSlgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0ICs9IGA7XFxuJHtzMX19XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VNZXJnZVRleHQoKTpzdHJpbmcge1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBjb25zdCBzMiA9IGAke3RoaXMuaW5kZW50KDIpfWA7XHJcbiAgICBjb25zdCBzMyA9IGAke3RoaXMuaW5kZW50KDMpfWA7XHJcbiAgICBjb25zdCBzNCA9IGAke3RoaXMuaW5kZW50KDQpfWA7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9IGAke3MxfXB1YmxpYyBtZXJnZSh0aGF0OiAke3RoaXMuY2xhc3NOYW1lfSkge1xcbmA7XHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYCR7czJ9c3VwZXIubWVyZ2UodGhhdCk7XFxuYDtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1pZiAodGhhdC4ke2ZpZWxkLm5hbWV9ICE9IG51bGwpIHtcXG5gO1xyXG4gICAgICBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgW11gKSkge1xyXG4gICAgICAgIHJldCArPSBgJHtzM31pZiAodGhpcy4ke2ZpZWxkLm5hbWV9ID09IG51bGwpIHtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzNH10aGlzLiR7ZmllbGQubmFtZX0gPSB0aGF0LiR7ZmllbGQubmFtZX07XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czN9fSBlbHNlIHtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzNH10aGlzLiR7ZmllbGQubmFtZX0ucHVzaCguLi50aGF0LiR7ZmllbGQubmFtZX0pO1xcbmA7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfX1cXG5gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSB0aGF0LiR7ZmllbGQubmFtZX07XFxuYDtcclxuICAgICAgfVxyXG4gICAgICByZXQgKz0gYCR7czJ9fVxcbmA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0ICs9IGAke3MxfX1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgcmV0ICs9IGAke3RoaXMubWFrZUltcG9ydFRleHQoKX1cXG5gO1xyXG4gICAgcmV0ICs9IGAke3RoaXMubWFrZUNsYXNzRGVjVGV4dCgpfWA7XHJcbiAgICByZXQgKz0gYHtcXG5gO1xyXG4gICAgaWYgKDAgPCB0aGlzLm1lbWJlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VNZW1iZXJUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZUNvbnN0cnVjdG9yKCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvU3RyaW5nVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb0VxdWFsc1RleHQoKX1cXG5gO1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlTWVyZ2VUZXh0KCl9YDtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNBYnN0cmFjdCkge1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlVG9TdHJpbmdUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvRXF1YWxzVGV4dCgpfVxcbmA7ICAgICAgXHJcbiAgICB9XHJcbiAgICByZXQgKz0gYH1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbiAgcHVibGljIHdyaXRlKCkge1xyXG4gICAgZnMud3JpdGVGaWxlKGBzcmMvbm9kZS8ke3RoaXMuY2xhc3NOYW1lfS50c2AsIHRoaXMudG9TdHJpbmcoKSwgKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQud3JpdGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyYXRvciB7ICBcclxuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCkge1xyXG4gICAgY29uc3Qgbm9kZSA9IFxyXG4gICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YE5vZGVgLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgIFtgY29tbWVudHNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICBbYGNvZGVSYW5nZWAsIGBDb2RlUmFuZ2VgXSxcclxuICAgICAgICBdLGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFByb2dyYW1gLFxyXG4gICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgW2BibG9ja2AsIGBCbG9ja2BdLFxyXG4gICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEV4cHJgLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTnVtYmVyTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgbnVtYmVyYF0sXHJcbiAgICAgICAgICAgICAgICBbYHNpZ25lZGAsIGBib29sZWFuYF0sXHJcbiAgICAgICAgICAgICAgICBbYGJ5dGVzYCwgYG51bWJlcmBdLFxyXG4gICAgICAgICAgICAgICAgW2Bpc0Zsb2F0YCwgYGJvb2xlYW5gXSxcclxuICAgICAgICAgICAgICAgIFtgdHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgcHJlZml4YCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2BzdWZpeGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEludExpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBudW1iZXJgXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBTdHJpbmdMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJvb2xMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBib29sZWFuYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDYXN0YCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2B0eXBlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBJZGVudGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEFycmF5YCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2BpdGVtc2AsIGBFeHByW11gXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAvLyBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEZpZWxkQWNjZXNzYCxcclxuICAgICAgICAgICAgICAvLyAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgIC8vICAgW2ByZWNlaXZlcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgLy8gICBbYGZpZWxkTmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAvLyAgIFtgaW5kZXhgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgIC8vICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTWV0aG9kQ2FsbGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgcmVjZWl2ZXJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgW2BtZXRob2ROYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2BhcmdzYCwgYEV4cHJbXWBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgVW5hcnlPcGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgb3BlcmF0b3JgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBbYGV4cHJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQmluT3BgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgIFtgb3BlcmF0b3JgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgIFtgbGVmdGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgIFtgcmlnaHRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgVGVybmFyeU9wYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICBbYHRydWVFeHByYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgW2BmYWxzZUV4cHJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgU3RhdGVtZW50YCwgaXNBYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQnJlYWtgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YENvbnRpbnVlYCB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBFbXB0eVN0YXRlbWVudGAgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgUmV0dXJuYCAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgSnVtcGAgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BkZXN0YCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBMYWJlbGAgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BuYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBCbG9ja2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGJsb2NrTGFiZWxgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGJvZHlgLCBgU3RhdGVtZW50W11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgSWZgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdHJ1ZVN0YXRlbWVudGAsIGBTdGF0ZW1lbnRgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgZmFsc2VTdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEZvcmAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGluaXRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgc3RlcGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN0YXRlbWVudGAsIGBTdGF0ZW1lbnRgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBXaGlsZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YERvV2hpbGVgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLCAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN3aXRjaGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BjYXNlc2AsIGBTd2l0Y2hVbml0W11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOltcclxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgU3dpdGNoVW5pdGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtgbGFiZWxgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Bjb25kYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbYHN0YXRlbWVudGAsIGBTdGF0ZW1lbnRbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSksICAgICBcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSwgICBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBEZWNyYWxhdGlvbmAsIGlzQWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YENsYXNzRGVjYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgY2xhc3NOYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Btb2RpZmllcnNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbWVtYmVyc2AsIGBEZWNyYWxhdGlvbltdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN1cGVyQ2xhc3NgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgaW50ZXJmYWNlc2AsIGBzdHJpbmdbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBGdW5jdGlvbkRlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1vZGlmaWVyc2AsIGBzdHJpbmdbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2ByZXR1cm5UeXBlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BwYXJhbXNgLCBgUGFyYW1bXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BibG9ja2AsIGBCbG9ja2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSwgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFZhcmlhYmxlRGVmYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B0eXBlU3VmZml4YCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSwgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFZhcmlhYmxlRGVjYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhcmlhYmxlc2AsIGBWYXJpYWJsZURlZltdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFBhcmFtYCB9KSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pLCAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF19KTtcclxuICAgIG5vZGUud3JpdGUoKTtcclxuICB9XHJcbn1cclxuR2VuZXJhdG9yLmdlbmVyYXRlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ub2RlL0dlbmVyYXRvci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiJdLCJzb3VyY2VSb290IjoiIn0=