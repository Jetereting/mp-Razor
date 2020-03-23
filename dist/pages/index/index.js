(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

var _on = __webpack_require__(/*! ../../assets/images/on.jpg */ "./src/assets/images/on.jpg");

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(/*! ../../assets/images/off.jpg */ "./src/assets/images/off.jpg");

var _off2 = _interopRequireDefault(_off);

var _icon = __webpack_require__(/*! ../../assets/images/icon.png */ "./src/assets/images/icon.png");

var _icon2 = _interopRequireDefault(_icon);

var _withShare = __webpack_require__(/*! ../../utils/withShare */ "./src/utils/withShare.tsx");

var _withShare2 = _interopRequireDefault(_withShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @ts-ignore
var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "imgOn", "imgOff", "isOn", "imgBGClassName", "intervalVibrate"], _this.config = {
      navigationBarTitleText: '剃头推子'
    }, _this.handleSwitch = function () {
      _this.clickAudio.play();
      setTimeout(function () {
        if (_this.state.isOn) {
          _this.soundAudio.play();
          _this.setState({
            imgBGClassName: 'animated infinite headShake faster',
            intervalVibrate: setInterval(function () {
              return _taroWeapp2.default.vibrateLong();
            }, 400)
          });
        } else {
          _this.setState({
            imgBGClassName: ''
          });
          clearInterval(_this.state.intervalVibrate);
          _this.soundAudio.pause();
        }
      }, 100);
      _this.setState({
        isOn: !_this.state.isOn
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.state = {
        isOn: false,
        imgBGClassName: '',
        intervalVibrate: setInterval(function () {}, 111400)
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      //不与其他音频混播,静音模式仍可播放
      _taroWeapp2.default.setInnerAudioOption({
        mixWithOther: false,
        obeyMuteSwitch: false
      });
      this.clickAudio = _taroWeapp2.default.createInnerAudioContext();
      this.soundAudio = _taroWeapp2.default.createInnerAudioContext();
      // this.clickAudio.src = 'http://gxjs.online/razor/mp3/click.mp3'
      // this.soundAudio.src = 'http://gxjs.online/razor/mp3/sound01.mp3'
      this.clickAudio.src = '../../assets/mp3/click.mp3';
      this.soundAudio.src = '../../assets/mp3/sound01.mp3';
      this.clickAudio.obeyMuteSwitch = false;
      this.soundAudio.obeyMuteSwitch = false;
      this.soundAudio.loop = true;
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var anonymousState__temp = 'height:' + _taroWeapp2.default.getSystemInfoSync().windowHeight * 0.8 + 'PX;margin-top:7%;width:' + _taroWeapp2.default.getSystemInfoSync().windowHeight * 0.8 * 0.345 + "PX";
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        imgOn: _on2.default,
        imgOff: _off2.default
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["handleSwitch"], _class.$$componentPath = "pages/index/index", _temp2);
Index = (0, _tslib.__decorate)([(0, _withShare2.default)({
  title: '模拟剃头，启动后将手机轻轻放在恶搞对象的后颈，慢慢往上，肆意享受对方的惊恐与惊喜吧',
  imageUrl: _icon2.default,
  path: '/pages/index/index'
})], Index);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/au/IdeaProjects/mp-Razor/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/au/IdeaProjects/mp-Razor/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };
  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  exports.__assign = _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return _assign.apply(this, arguments);
};

exports.__assign = _assign;
function __rest(s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function sent() {
      if (t[0] & 1) throw t[1];return t[1];
    }, trys: [], ops: [] },
      f,
      y,
      t,
      g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:case 1:
            t = op;break;
          case 4:
            _.label++;return { value: op[1], done: false };
          case 5:
            _.label++;y = op[1];op = [0];continue;
          case 7:
            op = _.ops.pop();_.trys.pop();continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];t = op;break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];_.ops.push(op);break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];y = 0;
      } finally {
        f = t = 0;
      }
    }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : undefined, done: true };
  }
}

function __exportStar(m, exports) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = undefined;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;
  try {
    while ((n === undefined || n-- > 0) && !(r = i.next()).done) {
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
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }return r;
};

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({ value: v, done: d });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}

/***/ }),

/***/ "./src/assets/images/icon.png":
/*!************************************!*\
  !*** ./src/assets/images/icon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icon.png";

/***/ }),

/***/ "./src/assets/images/off.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/off.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/assets/images/on.jpg":
/*!**********************************!*\
  !*** ./src/assets/images/on.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_au_IdeaProjects_mp_Razor_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/au/IdeaProjects/mp-Razor/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/au/IdeaProjects/mp-Razor/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_au_IdeaProjects_mp_Razor_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_au_IdeaProjects_mp_Razor_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_au_IdeaProjects_mp_Razor_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_au_IdeaProjects_mp_Razor_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/utils/withShare.tsx":
/*!*********************************!*\
  !*** ./src/utils/withShare.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withShare() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    title: '',
    imageUrl: '',
    path: ''
  };

  // 设置默认
  var defalutPath = '/pages/index/index';
  var defalutTitle = '首页';
  var defaultImageUrl = 'http://thumb10.jfcdns.com/2018-06/bce5b10ae530f530.png';
  return function demoComponent(Component) {
    var WithShare = function (_Component) {
      _inherits(WithShare, _Component);

      function WithShare() {
        _classCallCheck(this, WithShare);

        return _possibleConstructorReturn(this, (WithShare.__proto__ || Object.getPrototypeOf(WithShare)).apply(this, arguments));
      }

      _createClass(WithShare, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (_get(WithShare.prototype.__proto__ || Object.getPrototypeOf(WithShare.prototype), 'componentDidMount', this)) {
            _get(WithShare.prototype.__proto__ || Object.getPrototypeOf(WithShare.prototype), 'componentDidMount', this).call(this);
          }
        }
        // 点击分享的那一刻会进行调用

      }, {
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {
          var title = opts.title,
              imageUrl = opts.imageUrl,
              _opts$path = opts.path,
              path = _opts$path === undefined ? null : _opts$path;
          // 从继承的组件获取配置

          if (this.$setSharePath && typeof this.$setSharePath === 'function') {
            path = this.$setSharePath();
          }
          // 从继承的组件获取配置
          if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
            title = this.$setShareTitle();
          }
          // 从继承的组件获取配置
          if (this.$setShareImageUrl && typeof this.$setShareImageUrl === 'function') {
            imageUrl = this.$setShareImageUrl();
          }
          if (!path) {
            path = defalutPath;
          }
          console.log(path);
          return {
            title: title || defalutTitle,
            path: path || defalutPath,
            imageUrl: imageUrl || defaultImageUrl
          };
        }
      }, {
        key: 'render',
        value: function render() {
          return _get(WithShare.prototype.__proto__ || Object.getPrototypeOf(WithShare.prototype), 'render', this).call(this);
        }
      }]);

      return WithShare;
    }(Component);

    return WithShare;
  };
}
exports.default = withShare;

/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors"]]]);