webpackHotUpdate("main",{

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Game = /*#__PURE__*/function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, _getPrototypeOf(Game).apply(this, arguments));
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fields = _this$props.fields,
          currentDate = _this$props.currentDate,
          resources = _this$props.resources,
          clickedCell = _this$props.clickedCell,
          gc = _this$props.gc,
          edifices = _this$props.edifices;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid"
      });
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Game, "propTypes", {
  dishes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (store) {
  //запихнем кусок стора в пропсы текущего компонента
  return {
    fields: store.menu.dishes
  };
}, {//экшн креэйторы запихнем в коннекст, они будут доступны в props
})(Menu));

/***/ }),

/***/ "./src/reducers/menu_reducer.js":
/*!**************************************!*\
  !*** ./src/reducers/menu_reducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var menu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    dishes: [{
      name: 'Салат из свежей капусты'
    }, {
      name: 'Куриный суп'
    }, {
      name: 'Паста с грибами'
    }]
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return menu;
});

/***/ })

})
//# sourceMappingURL=main.5c9f1e5b0ba1bbb48dfe.hot-update.js.map