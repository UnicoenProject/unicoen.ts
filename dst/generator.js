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


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var fs = __webpack_require__(/*! fs */ "fs");

var Field = function Field(name, type) {
    _classCallCheck(this, Field);

    this.name = name;
    this.type = type;
};

var Node = function () {
    function Node(_ref) {
        var _this = this;

        var className = _ref.className,
            _ref$members = _ref.members,
            members = _ref$members === undefined ? null : _ref$members,
            _ref$isAbstract = _ref.isAbstract,
            isAbstract = _ref$isAbstract === undefined ? false : _ref$isAbstract,
            _ref$superClassName = _ref.superClassName,
            superClassName = _ref$superClassName === undefined ? null : _ref$superClassName,
            _ref$children = _ref.children,
            children = _ref$children === undefined ? null : _ref$children;

        _classCallCheck(this, Node);

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
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = members[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        name = _step$value[0],
                        type = _step$value[1];

                    if (this.isStartUpper(type) && !this.isNodeHepler(type)) {
                        type = "Uni" + type;
                    }
                    this.members.push(new Field(name, type));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
        if (children) {
            children.forEach(function (element, index, array) {
                element.superClassName = _this.className;
            });
            this.children = children;
        }
    }

    _createClass(Node, [{
        key: "isStartUpper",
        value: function isStartUpper(str) {
            return str.charAt(0).match(/^[A-Z]+$/) ? true : false;
        }
    }, {
        key: "isNodeHepler",
        value: function isNodeHepler(str) {
            return str.includes("CodeRange");
        }
    }, {
        key: "indent",
        value: function indent(n) {
            var space = "  ";
            var ret = "";
            for (var i = 0; i < n; ++i) {
                ret += space;
            }
            return ret;
        }
    }, {
        key: "makeImportText",
        value: function makeImportText() {
            var ret = '';
            var imports = [];
            if (this.superClassName) {
                imports.push(this.superClassName);
                ret += "import " + this.superClassName + " from './" + this.superClassName + "';\n";
            }
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.members[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var field = _step2.value;

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
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (this.className === 'UniNode') {
                ret += "require('../node_helper/Extension');";
            }
            return ret;
        }
    }, {
        key: "makeClassDecText",
        value: function makeClassDecText() {
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
        }
    }, {
        key: "makeMemberText",
        value: function makeMemberText() {
            var ret = '';
            // member
            var s1 = "" + this.indent(1);
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.members[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var field = _step3.value;

                    ret += s1 + "public " + field.name + ": " + field.type + ";\n";
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            if (this.className === 'UniNode') {
                ret += s1 + "public fields: Map<string,Function>;\n";
            }
            return ret;
        }
    }, {
        key: "makeConstructor",
        value: function makeConstructor() {
            var ret = '';
            // member
            var s1 = "" + this.indent(1);
            var s2 = "" + this.indent(2);
            var s3 = "" + this.indent(3);
            // constructor
            ret += s1 + "public constructor();\n";
            ret += s1 + "public constructor(";
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.members[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _field2 = _step4.value;

                    ret += _field2.name + ": " + _field2.type + ", ";
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            ret = ret.slice(0, -2);
            ret += ");\n";
            ret += s1 + "public constructor(";
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.members[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _field3 = _step5.value;

                    ret += _field3.name + "?: " + _field3.type + ", ";
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            ret = ret.slice(0, -2);
            ret += ") {\n";
            if (this.superClassName) {
                ret += s2 + "super();\n";
            }
            ret += s2 + "if (";
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.members[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _field4 = _step6.value;

                    ret += _field4.name + " === undefined && ";
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            ret = ret.slice(0, -4);
            ret += ") {\n";
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = this.members[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var _field5 = _step7.value;

                    // if (field.type === 'string') {
                    //   ret += `${s3}this.${field.name} = '';\n`;
                    // }
                    if (_field5.type.includes('[]')) {
                        ret += s3 + "this." + _field5.name + " = [];\n";
                    } else {
                        ret += s3 + "this." + _field5.name + " = null;\n";
                    }
                    // if (field.type.includes('Uni')) {
                    //   ret += `${s3}this.${field.name} = new ${field.type}();\n`;
                    // }
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }

            ret += s2 + "}";
            if (1 < this.members.length) {
                ret += " else if (";
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                    for (var _iterator8 = this.members[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var field = _step8.value;

                        ret += field.name + " === undefined || ";
                    }
                } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                            _iterator8.return();
                        }
                    } finally {
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                }

                ret = ret.slice(0, -4);
                ret += ")";
                ret += " {\n" + s3 + "throw new Error('invalid arguments');\n" + s2 + "}";
            }
            ret += " else {\n";
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = this.members[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var _field6 = _step9.value;

                    ret += s3 + "this." + _field6.name + " = " + _field6.name + ";\n";
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }

            ret += s2 + "}\n";
            if (this.className === 'UniNode') {
                ret += s2 + "this.fields = new Map<string,Function>();\n";
                ret += s2 + "this.fields.set('comments', String);\n";
                ret += s2 + "this.fields.set('codeRange', CodeRange);\n";
            } else {
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                    for (var _iterator10 = this.members[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                        var _field = _step10.value;

                        ret += s2 + "this.fields.set('" + _field.name + "', ";
                        if (_field.type.includes("string")) {
                            ret += "String";
                        } else if (_field.type.includes("boolean")) {
                            ret += "Boolean";
                        } else if (_field.type.includes("number")) {
                            ret += "Number";
                        } else if (_field.type.includes("any")) {
                            ret += "Object";
                        } else if (_field.type.includes('[]')) {
                            ret += _field.type.substr(0, _field.type.length - 2);
                        } else {
                            ret += _field.type;
                        }
                        ret += ");\n";
                    }
                } catch (err) {
                    _didIteratorError10 = true;
                    _iteratorError10 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
                            _iterator10.return();
                        }
                    } finally {
                        if (_didIteratorError10) {
                            throw _iteratorError10;
                        }
                    }
                }
            }
            ret += s1 + "}\n";
            return ret;
        }
    }, {
        key: "makeToStringText",
        value: function makeToStringText() {
            // member
            var s1 = "" + this.indent(1);
            var s2 = "" + this.indent(2);
            var ret = s1 + "public toString(): string {\n";
            ret += s2 + "return '" + this.className.substr(3) + "('";
            var isFirst = true;
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
                for (var _iterator11 = this.members[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                    var field = _step11.value;

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
            } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                        _iterator11.return();
                    }
                } finally {
                    if (_didIteratorError11) {
                        throw _iteratorError11;
                    }
                }
            }

            ret += " + ')';\n" + s1 + "}\n";
            return ret;
        }
    }, {
        key: "makeToEqualsText",
        value: function makeToEqualsText() {
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
                var _iteratorNormalCompletion12 = true;
                var _didIteratorError12 = false;
                var _iteratorError12 = undefined;

                try {
                    for (var _iterator12 = this.members[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                        var field = _step12.value;

                        if (field.type === 'string' || field.type === 'number' || field.type === 'boolean' || field.type === 'any') {
                            ret += "\n" + s4 + "&& (this." + field.name + " == null ? that." + field.name + " == null : this." + field.name + " === that." + field.name + ")";
                        } else {
                            ret += "\n" + s4 + "&& (this." + field.name + " == null ? that." + field.name + " == null : this." + field.name + ".equals(that." + field.name + "))";
                        }
                    }
                } catch (err) {
                    _didIteratorError12 = true;
                    _iteratorError12 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion12 && _iterator12.return) {
                            _iterator12.return();
                        }
                    } finally {
                        if (_didIteratorError12) {
                            throw _iteratorError12;
                        }
                    }
                }
            }
            ret += ";\n" + s1 + "}\n";
            return ret;
        }
    }, {
        key: "makeMergeText",
        value: function makeMergeText() {
            // member
            var s1 = "" + this.indent(1);
            var s2 = "" + this.indent(2);
            var s3 = "" + this.indent(3);
            var s4 = "" + this.indent(4);
            var ret = s1 + "public merge(that: " + this.className + ") {\n";
            if (this.superClassName) {
                ret += s2 + "super.merge(that);\n";
            }
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
                for (var _iterator13 = this.members[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                    var field = _step13.value;

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
            } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion13 && _iterator13.return) {
                        _iterator13.return();
                    }
                } finally {
                    if (_didIteratorError13) {
                        throw _iteratorError13;
                    }
                }
            }

            ret += s1 + "}\n";
            return ret;
        }
    }, {
        key: "toString",
        value: function toString() {
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
        }
    }, {
        key: "write",
        value: function write() {
            fs.writeFile("src/node/" + this.className + ".ts", this.toString(), function (err) {
                if (err) {
                    return console.error(err);
                }
            });
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
                for (var _iterator14 = this.children[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                    var child = _step14.value;

                    child.write();
                }
            } catch (err) {
                _didIteratorError14 = true;
                _iteratorError14 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion14 && _iterator14.return) {
                        _iterator14.return();
                    }
                } finally {
                    if (_didIteratorError14) {
                        throw _iteratorError14;
                    }
                }
            }
        }
    }]);

    return Node;
}();

var Generator = function () {
    function Generator() {
        _classCallCheck(this, Generator);
    }

    _createClass(Generator, null, [{
        key: "generate",
        value: function generate() {
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
        }
    }]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIiwiQzpcXGRldmVsb3BcXHVuaWNvZW4udHNcXHNyY1xcbm9kZVxcR2VuZXJhdG9yLnRzIiwiZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0lBQ0EsSyxHQUNFLGVBQTBCLElBQTFCLEVBQThDLElBQTlDLEVBQXlEO0FBQUE7O0FBQS9CO0FBQW9CO0FBQWUsQzs7SUFHL0QsSTtBQU9FLHdCQUNzSDtBQUFBOztBQUFBLFlBRGhHLFNBQ2dHLFFBRGhHLFNBQ2dHO0FBQUEsZ0NBRHJGLE9BQ3FGO0FBQUEsWUFEckYsT0FDcUYsZ0NBRDNFLElBQzJFO0FBQUEsbUNBRHJFLFVBQ3FFO0FBQUEsWUFEckUsVUFDcUUsbUNBRHhELEtBQ3dEO0FBQUEsdUNBRGpELGNBQ2lEO0FBQUEsWUFEakQsY0FDaUQsdUNB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S04sa0JBTE0sQ0FERCxFQUFULENBVFEsRUFpQlIsSUFBSSxJQUFKLENBQVMsRUFBRSx3QkFBRjtBQUNQLHFDQUFRLENBQ04sa0JBRE0sRUFFTixpQkFGTSxFQUdOLHdCQUhNLENBREQsRUFBVCxDQWpCUSxFQXVCUixJQUFJLElBQUosQ0FBUyxFQUFFLHdCQUFGO0FBQ1AscUNBQVEsQ0FDTix5QkFETSxFQUVOLGtCQUZNLEVBR04sOEJBSE0sQ0FERDtBQU1QLHNDQUFTLENBQ1AsSUFBSSxJQUFKLENBQVMsRUFBRSxrQkFBRixFQUFULENBRE8sQ0FORixFQUFULENBdkJRO0FBREgscUJBQVQsQ0FsSlE7QUFESCxpQkFBVCxDQUxVLENBSkwsRUFBVCxDQURGO0FBbU1BLGlCQUFLLEtBQUw7QUFDRDs7Ozs7O0FBdE1IO0FBd01BLFVBQVUsUUFBVixHOzs7Ozs7Ozs7OztBQzdmQSwrQiIsImZpbGUiOiJnZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ub2RlL0dlbmVyYXRvci50c1wiKTtcbiIsImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuY2xhc3MgRmllbGQge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTpzdHJpbmcsIHB1YmxpYyB0eXBlOnN0cmluZykge31cclxufVxyXG5cclxuY2xhc3MgTm9kZSB7IFxyXG4gIHB1YmxpYyBjbGFzc05hbWU6c3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGlzQWJzdHJhY3Q6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzdXBlckNsYXNzTmFtZTpzdHJpbmcgPSBudWxsO1xyXG4gIHB1YmxpYyBtZW1iZXJzOkZpZWxkW10gPSBbXTtcclxuICBwdWJsaWMgY2hpbGRyZW46Tm9kZVtdID0gW107XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAoeyBjbGFzc05hbWUsIG1lbWJlcnMgPSBudWxsLCBpc0Fic3RyYWN0ID0gZmFsc2UsIHN1cGVyQ2xhc3NOYW1lID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsIH0gXHJcbiAgICA6IHtjbGFzc05hbWU6IHN0cmluZywgbWVtYmVycz86IFtzdHJpbmcsIHN0cmluZ11bXSwgaXNBYnN0cmFjdD86IGJvb2xlYW4sIHN1cGVyQ2xhc3NOYW1lPzpzdHJpbmcsIGNoaWxkcmVuPzogTm9kZVtdfSkge1xyXG4gICAgdGhpcy5jbGFzc05hbWUgKz0gYFVuaSR7Y2xhc3NOYW1lfWA7XHJcbiAgICB0aGlzLmlzQWJzdHJhY3QgPSBpc0Fic3RyYWN0O1xyXG4gICAgaWYgKHN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHRoaXMuc3VwZXJDbGFzc05hbWUgPSBgJHtzdXBlckNsYXNzTmFtZX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lbWJlcnMpIHtcclxuICAgICAgZm9yIChsZXQgW25hbWUsdHlwZV0gb2YgbWVtYmVycykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRVcHBlcih0eXBlKSAmJiAhdGhpcy5pc05vZGVIZXBsZXIodHlwZSkpIHtcclxuICAgICAgICAgIHR5cGUgPSBgVW5pJHt0eXBlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVtYmVycy5wdXNoKG5ldyBGaWVsZChuYW1lLHR5cGUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4geyBcclxuICAgICAgICBlbGVtZW50LnN1cGVyQ2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWU7IFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1N0YXJ0VXBwZXIoc3RyOnN0cmluZyk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS5tYXRjaCgvXltBLVpdKyQvKSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNOb2RlSGVwbGVyKHN0cjpzdHJpbmcpOmJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHN0ci5pbmNsdWRlcyhgQ29kZVJhbmdlYCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgaW5kZW50KG46bnVtYmVyKTpzdHJpbmcge1xyXG4gICAgY29uc3Qgc3BhY2UgPSBgXFx1MDAyMFxcdTAwMjBgO1xyXG4gICAgbGV0IHJldCA9IGBgO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcclxuICAgICAgcmV0ICs9IHNwYWNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUltcG9ydFRleHQoKTpzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIGNvbnN0IGltcG9ydHM6c3RyaW5nW10gPSBbXTtcclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIGltcG9ydHMucHVzaCh0aGlzLnN1cGVyQ2xhc3NOYW1lKTtcclxuICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0aGlzLnN1cGVyQ2xhc3NOYW1lfSBmcm9tICcuLyR7dGhpcy5zdXBlckNsYXNzTmFtZX0nO1xcbmA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICBjb25zdCB0eXBlID0gZmllbGQudHlwZTtcclxuICAgICAgaWYgKHR5cGUuc3RhcnRzV2l0aChgVW5pYCkpIHtcclxuICAgICAgICBpZiAodHlwZS5lbmRzV2l0aChgW11gKSkge1xyXG4gICAgICAgICAgY29uc3QgdCA9IHR5cGUuc2xpY2UoMCwgLTIpO1xyXG4gICAgICAgICAgaWYgKCFpbXBvcnRzLmluY2x1ZGVzKHQpKSB7XHJcbiAgICAgICAgICAgIGltcG9ydHMucHVzaCh0KTtcclxuICAgICAgICAgICAgcmV0ICs9IGBpbXBvcnQgJHt0fSBmcm9tICcuLyR7dH0nO1xcbmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghaW1wb3J0cy5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgICAgICAgICBpbXBvcnRzLnB1c2godHlwZSk7XHJcbiAgICAgICAgICAgIHJldCArPSBgaW1wb3J0ICR7dHlwZX0gZnJvbSAnLi8ke3R5cGV9JztcXG5gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTm9kZUhlcGxlcih0eXBlKSkge1xyXG4gICAgICAgIHJldCArPSBgaW1wb3J0ICR7dHlwZX0gZnJvbSAnLi4vbm9kZV9oZWxwZXIvJHt0eXBlfSc7YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2xhc3NOYW1lID09PSAnVW5pTm9kZScpIHtcclxuICAgICAgcmV0ICs9IGByZXF1aXJlKCcuLi9ub2RlX2hlbHBlci9FeHRlbnNpb24nKTtgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUNsYXNzRGVjVGV4dCgpOnN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgcmV0ICs9IGBleHBvcnQgZGVmYXVsdCBgO1xyXG4gICAgaWYgKHRoaXMuaXNBYnN0cmFjdCkge1xyXG4gICAgICByZXQgKz0gYGFic3RyYWN0IGA7XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYGNsYXNzICR7dGhpcy5jbGFzc05hbWV9IGA7XHJcbiAgICBpZiAodGhpcy5zdXBlckNsYXNzTmFtZSkge1xyXG4gICAgICByZXQgKz0gYGV4dGVuZHMgJHt0aGlzLnN1cGVyQ2xhc3NOYW1lfSBgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZU1lbWJlclRleHQoKTpzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke3MxfXB1YmxpYyAke2ZpZWxkLm5hbWV9OiAke2ZpZWxkLnR5cGV9O1xcbmA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWUgPT09ICdVbmlOb2RlJykge1xyXG4gICAgICByZXQgKz0gYCR7czF9cHVibGljIGZpZWxkczogTWFwPHN0cmluZyxGdW5jdGlvbj47XFxuYDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VDb25zdHJ1Y3RvcigpOnN0cmluZyB7XHJcbiAgICBsZXQgcmV0OnN0cmluZyA9ICcnO1xyXG4gICAgLy8gbWVtYmVyXHJcbiAgICBjb25zdCBzMSA9IGAke3RoaXMuaW5kZW50KDEpfWA7XHJcbiAgICBjb25zdCBzMiA9IGAke3RoaXMuaW5kZW50KDIpfWA7XHJcbiAgICBjb25zdCBzMyA9IGAke3RoaXMuaW5kZW50KDMpfWA7XHJcbiAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgcmV0ICs9IGAke3MxfXB1YmxpYyBjb25zdHJ1Y3RvcigpO1xcbmA7XHJcbiAgICByZXQgKz0gYCR7czF9cHVibGljIGNvbnN0cnVjdG9yKGA7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7ZmllbGQubmFtZX06ICR7ZmllbGQudHlwZX0sIGA7XHJcbiAgICB9XHJcbiAgICByZXQgPSByZXQuc2xpY2UoMCwgLTIpO1xyXG4gICAgcmV0ICs9IGApO1xcbmA7XHJcblxyXG4gICAgcmV0ICs9IGAke3MxfXB1YmxpYyBjb25zdHJ1Y3RvcihgO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke2ZpZWxkLm5hbWV9PzogJHtmaWVsZC50eXBlfSwgYDtcclxuICAgIH1cclxuICAgIHJldCA9IHJldC5zbGljZSgwLCAtMik7XHJcbiAgICByZXQgKz0gYCkge1xcbmA7XHJcblxyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgcmV0ICs9IGAke3MyfXN1cGVyKCk7XFxuYDtcclxuICAgIH1cclxuICAgIHJldCArPSBgJHtzMn1pZiAoYDtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIHJldCArPSBgJHtmaWVsZC5uYW1lfSA9PT0gdW5kZWZpbmVkICYmIGA7XHJcbiAgICB9XHJcbiAgICByZXQgPSByZXQuc2xpY2UoMCwgLTQpO1xyXG4gICAgcmV0ICs9IGApIHtcXG5gO1xyXG5cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgIC8vIGlmIChmaWVsZC50eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAvLyAgIHJldCArPSBgJHtzM310aGlzLiR7ZmllbGQubmFtZX0gPSAnJztcXG5gO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKCdbXScpKSB7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfXRoaXMuJHtmaWVsZC5uYW1lfSA9IFtdO1xcbmA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfXRoaXMuJHtmaWVsZC5uYW1lfSA9IG51bGw7XFxuYDtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiAoZmllbGQudHlwZS5pbmNsdWRlcygnVW5pJykpIHtcclxuICAgICAgLy8gICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gbmV3ICR7ZmllbGQudHlwZX0oKTtcXG5gO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0ICs9IGAke3MyfX1gO1xyXG5cclxuICAgIGlmICgxIDwgdGhpcy5tZW1iZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXQgKz0gYCBlbHNlIGlmIChgO1xyXG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIHJldCArPSBgJHtmaWVsZC5uYW1lfSA9PT0gdW5kZWZpbmVkIHx8IGA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0ID0gcmV0LnNsaWNlKDAsIC00KTtcclxuICAgICAgcmV0ICs9IGApYDtcclxuICAgICAgcmV0ICs9IGAge1xcbiR7czN9dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGFyZ3VtZW50cycpO1xcbiR7czJ9fWA7XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYCBlbHNlIHtcXG5gO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgcmV0ICs9IGAke3MzfXRoaXMuJHtmaWVsZC5uYW1lfSA9ICR7ZmllbGQubmFtZX07XFxuYDtcclxuICAgIH1cclxuICAgIHJldCArPSBgJHtzMn19XFxuYDtcclxuXHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWUgPT09ICdVbmlOb2RlJykge1xyXG4gICAgICByZXQgKz0gYCR7czJ9dGhpcy5maWVsZHMgPSBuZXcgTWFwPHN0cmluZyxGdW5jdGlvbj4oKTtcXG5gO1xyXG4gICAgICByZXQgKz0gYCR7czJ9dGhpcy5maWVsZHMuc2V0KCdjb21tZW50cycsIFN0cmluZyk7XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3MyfXRoaXMuZmllbGRzLnNldCgnY29kZVJhbmdlJywgQ29kZVJhbmdlKTtcXG5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICByZXQgKz0gYCR7czJ9dGhpcy5maWVsZHMuc2V0KCcke2ZpZWxkLm5hbWV9JywgYDtcclxuICAgICAgICBpZiAoZmllbGQudHlwZS5pbmNsdWRlcyhgc3RyaW5nYCkpIHtcclxuICAgICAgICAgIHJldCArPSBgU3RyaW5nYDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYGJvb2xlYW5gKSkge1xyXG4gICAgICAgICAgcmV0ICs9IGBCb29sZWFuYDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYG51bWJlcmApKSB7XHJcbiAgICAgICAgICByZXQgKz0gYE51bWJlcmA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlLmluY2x1ZGVzKGBhbnlgKSkge1xyXG4gICAgICAgICAgcmV0ICs9IGBPYmplY3RgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5pbmNsdWRlcygnW10nKSkge1xyXG4gICAgICAgICAgcmV0ICs9IGZpZWxkLnR5cGUuc3Vic3RyKDAsZmllbGQudHlwZS5sZW5ndGggLSAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0ICs9IGZpZWxkLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldCArPSBgKTtcXG5gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXQgKz0gYCR7czF9fVxcbmA7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlVG9TdHJpbmdUZXh0KCk6c3RyaW5nIHtcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSBgJHtzMX1wdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcXG5gO1xyXG4gICAgcmV0ICs9IGAke3MyfXJldHVybiAnJHt0aGlzLmNsYXNzTmFtZS5zdWJzdHIoMyl9KCdgO1xyXG4gICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKGlzRmlyc3QpIHtcclxuICAgICAgICAgIHJldCArPSBgICsgYDtcclxuICAgICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc0ZpcnN0KSB7XHJcbiAgICAgICAgICByZXQgKz0gYCArICcsICcgKyBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXQgKz0gYHRoaXMuJHtmaWVsZC5uYW1lfWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXQgKz0gYCArICcpJztcXG4ke3MxfX1cXG5gO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVRvRXF1YWxzVGV4dCgpOnN0cmluZyB7XHJcbiAgICAvLyBtZW1iZXJcclxuICAgIGNvbnN0IHMxID0gYCR7dGhpcy5pbmRlbnQoMSl9YDtcclxuICAgIGNvbnN0IHMyID0gYCR7dGhpcy5pbmRlbnQoMil9YDtcclxuICAgIGNvbnN0IHM0ID0gYCR7dGhpcy5pbmRlbnQoNCl9YDtcclxuICAgIGxldCByZXQ6c3RyaW5nID0gYCR7czF9cHVibGljIGVxdWFscyhvYmo6IGFueSk6IGJvb2xlYW4ge1xcbmA7XHJcbiAgICByZXQgKz0gYCR7czJ9aWYgKG9iaiA9PSBudWxsIHx8ICEob2JqIGluc3RhbmNlb2YgJHt0aGlzLmNsYXNzTmFtZX0pKSByZXR1cm4gZmFsc2U7XFxuYDtcclxuICAgIHJldCArPSBgJHtzMn1jb25zdCB0aGF0OiAke3RoaXMuY2xhc3NOYW1lfSA9IDwke3RoaXMuY2xhc3NOYW1lfT5vYmo7XFxuYDtcclxuICAgIGlmICh0aGlzLnN1cGVyQ2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1yZXR1cm4gc3VwZXIuZXF1YWxzKHRoYXQpYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldCArPSBgJHtzMn1yZXR1cm4gdGhhdCAhPT0gbnVsbGA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWUgIT09ICdVbmlOb2RlJykge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnc3RyaW5nJyBcclxuICAgICAgICB8fCBmaWVsZC50eXBlID09PSAnbnVtYmVyJyBcclxuICAgICAgICB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicgXHJcbiAgICAgICAgfHwgZmllbGQudHlwZSA9PT0gJ2FueScpIHtcclxuICAgICAgICAgIHJldCArPSBgXFxuJHtzNH0mJiAodGhpcy4ke2ZpZWxkLm5hbWV9ID09IG51bGwgPyB0aGF0LiR7ZmllbGQubmFtZX0gPT0gbnVsbCA6IHRoaXMuJHtmaWVsZC5uYW1lfSA9PT0gdGhhdC4ke2ZpZWxkLm5hbWV9KWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldCArPSBgXFxuJHtzNH0mJiAodGhpcy4ke2ZpZWxkLm5hbWV9ID09IG51bGwgPyB0aGF0LiR7ZmllbGQubmFtZX0gPT0gbnVsbCA6IHRoaXMuJHtmaWVsZC5uYW1lfS5lcXVhbHModGhhdC4ke2ZpZWxkLm5hbWV9KSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgO1xcbiR7czF9fVxcbmA7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlTWVyZ2VUZXh0KCk6c3RyaW5nIHtcclxuICAgIC8vIG1lbWJlclxyXG4gICAgY29uc3QgczEgPSBgJHt0aGlzLmluZGVudCgxKX1gO1xyXG4gICAgY29uc3QgczIgPSBgJHt0aGlzLmluZGVudCgyKX1gO1xyXG4gICAgY29uc3QgczMgPSBgJHt0aGlzLmluZGVudCgzKX1gO1xyXG4gICAgY29uc3QgczQgPSBgJHt0aGlzLmluZGVudCg0KX1gO1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSBgJHtzMX1wdWJsaWMgbWVyZ2UodGhhdDogJHt0aGlzLmNsYXNzTmFtZX0pIHtcXG5gO1xyXG4gICAgaWYgKHRoaXMuc3VwZXJDbGFzc05hbWUpIHtcclxuICAgICAgcmV0ICs9IGAke3MyfXN1cGVyLm1lcmdlKHRoYXQpO1xcbmA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMubWVtYmVycykge1xyXG4gICAgICByZXQgKz0gYCR7czJ9aWYgKHRoYXQuJHtmaWVsZC5uYW1lfSAhPSBudWxsKSB7XFxuYDtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUuaW5jbHVkZXMoYFtdYCkpIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9aWYgKHRoaXMuJHtmaWVsZC5uYW1lfSA9PSBudWxsKSB7XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czR9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gdGhhdC4ke2ZpZWxkLm5hbWV9O1xcbmA7XHJcbiAgICAgICAgcmV0ICs9IGAke3MzfX0gZWxzZSB7XFxuYDtcclxuICAgICAgICByZXQgKz0gYCR7czR9dGhpcy4ke2ZpZWxkLm5hbWV9LnB1c2goLi4udGhhdC4ke2ZpZWxkLm5hbWV9KTtcXG5gO1xyXG4gICAgICAgIHJldCArPSBgJHtzM319XFxuYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQgKz0gYCR7czN9dGhpcy4ke2ZpZWxkLm5hbWV9ID0gdGhhdC4ke2ZpZWxkLm5hbWV9O1xcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0ICs9IGAke3MyfX1cXG5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBgJHtzMX19XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJldDpzdHJpbmcgPSAnJztcclxuICAgIHJldCArPSBgJHt0aGlzLm1ha2VJbXBvcnRUZXh0KCl9XFxuYDtcclxuICAgIHJldCArPSBgJHt0aGlzLm1ha2VDbGFzc0RlY1RleHQoKX1gO1xyXG4gICAgcmV0ICs9IGB7XFxuYDtcclxuICAgIGlmICgwIDwgdGhpcy5tZW1iZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlTWVtYmVyVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VDb25zdHJ1Y3RvcigpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb1N0cmluZ1RleHQoKX1cXG5gO1xyXG4gICAgICByZXQgKz0gYCR7dGhpcy5tYWtlVG9FcXVhbHNUZXh0KCl9XFxuYDtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZU1lcmdlVGV4dCgpfWA7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzQWJzdHJhY3QpIHtcclxuICAgICAgcmV0ICs9IGAke3RoaXMubWFrZVRvU3RyaW5nVGV4dCgpfVxcbmA7XHJcbiAgICAgIHJldCArPSBgJHt0aGlzLm1ha2VUb0VxdWFsc1RleHQoKX1cXG5gOyAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0ICs9IGB9XFxuYDtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG4gIHB1YmxpYyB3cml0ZSgpIHtcclxuICAgIGZzLndyaXRlRmlsZShgc3JjL25vZGUvJHt0aGlzLmNsYXNzTmFtZX0udHNgLCB0aGlzLnRvU3RyaW5nKCksIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkLndyaXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmF0b3IgeyAgXHJcbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZSgpIHtcclxuICAgIGNvbnN0IG5vZGUgPSBcclxuICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBOb2RlYCwgaXNBYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICBbYGNvbW1lbnRzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgW2Bjb2RlUmFuZ2VgLCBgQ29kZVJhbmdlYF0sXHJcbiAgICAgICAgXSxjaGlsZHJlbjogW1xyXG4gICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBQcm9ncmFtYCxcclxuICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgIFtgYmxvY2tgLCBgQmxvY2tgXSxcclxuICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBFeHByYCwgaXNBYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YE51bWJlckxpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYGFueWBdLFxyXG4gICAgICAgICAgICAgICAgW2BzaWduZWRgLCBgYm9vbGVhbmBdLFxyXG4gICAgICAgICAgICAgICAgW2BieXRlc2AsIGBudW1iZXJgXSxcclxuICAgICAgICAgICAgICAgIFtgaXNGbG9hdGAsIGBib29sZWFuYF0sXHJcbiAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBbYHByZWZpeGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgc3VmaXhgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBJbnRMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgbnVtYmVyYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRG91YmxlTGl0ZXJhbGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYG51bWJlcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YENoYXJhY3RlckxpdGVyYWxgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBTdHJpbmdMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJvb2xMaXRlcmFsYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBib29sZWFuYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDYXN0YCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2B0eXBlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgW2B2YWx1ZWAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBJZGVudGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgbmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEFycmF5YCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2BpdGVtc2AsIGBFeHByW11gXSxcclxuICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAvLyBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEZpZWxkQWNjZXNzYCxcclxuICAgICAgICAgICAgICAvLyAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgIC8vICAgW2ByZWNlaXZlcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgLy8gICBbYGZpZWxkTmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAvLyAgIFtgaW5kZXhgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgIC8vICAgXX0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgTWV0aG9kQ2FsbGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgIFtgcmVjZWl2ZXJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgW2BtZXRob2ROYW1lYCwgYElkZW50YF0sXHJcbiAgICAgICAgICAgICAgICBbYGFyZ3NgLCBgRXhwcltdYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBVbmFyeU9wYCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgW2BvcGVyYXRvcmAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgIFtgZXhwcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBCaW5PcGAsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgW2BvcGVyYXRvcmAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgW2BsZWZ0YCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgW2ByaWdodGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBUZXJuYXJ5T3BgLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgIFtgdHJ1ZUV4cHJgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICBbYGZhbHNlRXhwcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBTdGF0ZW1lbnRgLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBCcmVha2AgfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgQ29udGludWVgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEVtcHR5U3RhdGVtZW50YCB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBSZXR1cm5gICxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBKdW1wYCAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGRlc3RgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YExhYmVsYCAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEJsb2NrYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgYmxvY2tMYWJlbGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgYm9keWAsIGBTdGF0ZW1lbnRbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBJZmAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B0cnVlU3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BmYWxzZVN0YXRlbWVudGAsIGBTdGF0ZW1lbnRgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRm9yYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgaW5pdGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdGVwYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgc3RhdGVtZW50YCwgYFN0YXRlbWVudGBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF19KSwgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YEVuaGFuY2VkRm9yYCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHR5cGVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbnRhaW5lcmAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHN0YXRlbWVudGAsIGBTdGF0ZW1lbnRgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBXaGlsZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YERvV2hpbGVgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pLCAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBuZXcgTm9kZSh7IGNsYXNzTmFtZSA6YFN3aXRjaGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNvbmRgLCBgRXhwcmBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BjYXNlc2AsIGBTd2l0Y2hVbml0W11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBTd2l0Y2hVbml0YCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOltcclxuICAgICAgICAgICAgICAgICAgICBbYGxhYmVsYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtgY29uZGAsIGBFeHByYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2BzdGF0ZW1lbnRgLCBgU3RhdGVtZW50W11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB9KSwgXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRGVjcmFsYXRpb25gLCBpc0Fic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBDbGFzc0RlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGNsYXNzTmFtZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgbW9kaWZpZXJzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1lbWJlcnNgLCBgRGVjcmFsYXRpb25bXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2BzdXBlckNsYXNzYCwgYHN0cmluZ1tdYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYGludGVyZmFjZXNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKHsgY2xhc3NOYW1lIDpgRnVuY3Rpb25EZWNgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2BuYW1lYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Btb2RpZmllcnNgLCBgc3RyaW5nW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgcmV0dXJuVHlwZWAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgcGFyYW1zYCwgYFBhcmFtW11gXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgYmxvY2tgLCBgQmxvY2tgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBWYXJpYWJsZURlZmAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG5hbWVgLCBgc3RyaW5nYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYHZhbHVlYCwgYEV4cHJgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtgdHlwZVN1ZmZpeGAsIGBzdHJpbmdgXSxcclxuICAgICAgICAgICAgICAgICAgICBdfSksICAgICBcclxuICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBWYXJpYWJsZURlY2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbYG1vZGlmaWVyc2AsIGBzdHJpbmdbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B0eXBlYCwgYHN0cmluZ2BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2B2YXJpYWJsZXNgLCBgVmFyaWFibGVEZWZbXWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoeyBjbGFzc05hbWUgOmBQYXJhbWAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgXX0pLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9KSwgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdfSk7XHJcbiAgICBub2RlLndyaXRlKCk7XHJcbiAgfVxyXG59XHJcbkdlbmVyYXRvci5nZW5lcmF0ZSgpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9