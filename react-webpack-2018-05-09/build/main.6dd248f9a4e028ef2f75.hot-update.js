webpackHotUpdate("main",{

/***/ "./app/test.js":
/*!*********************!*\
  !*** ./app/test.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var $ = _interopRequireWildcard(_jquery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Frame = function (_Component) {
    _inherits(Frame, _Component);

    function Frame() {
        _classCallCheck(this, Frame);

        return _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this));
    }

    _createClass(Frame, [{
        key: 'render',
        value: function render() {
            $.post('/api/search', {
                "userName": 'zhangsan',
                "userPwd": 'uii'
            }).then(function (res, req) {
                console.log(res);
            });
            return _react2.default.createElement(
                'div',
                null,
                '\u6574\u4E2A\u9762\u677Fzheng'
            );
        }
    }]);

    return Frame;
}(_react.Component);

exports.default = Frame;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdGVzdC5qcyJdLCJuYW1lcyI6WyIkIiwiRnJhbWUiLCJwb3N0IiwidGhlbiIsInJlcyIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0lBQVlBLEM7Ozs7Ozs7Ozs7OztJQUVTQyxLOzs7QUFDakIscUJBQWM7QUFBQTs7QUFBQTtBQUViOzs7O2lDQUdRO0FBQ0xELGNBQUVFLElBQUYsQ0FBTyxhQUFQLEVBQXFCO0FBQ2pCLDRCQUFXLFVBRE07QUFFakIsMkJBQVc7QUFGTSxhQUFyQixFQUdHQyxJQUhILENBR1EsVUFBU0MsR0FBVCxFQUFhQyxHQUFiLEVBQWlCO0FBQ3JCQyx3QkFBUUMsR0FBUixDQUFZSCxHQUFaO0FBQ0gsYUFMRDtBQU1BLG1CQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUtIOzs7O0VBbEI4QkksZ0I7O2tCQUFkUCxLIiwiZmlsZSI6Im1haW4uNmRkMjQ4ZjlhNGUwMjhlZjJmNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgJC5wb3N0KCcvYXBpL3NlYXJjaCcse1xuICAgICAgICAgICAgXCJ1c2VyTmFtZVwiOid6aGFuZ3NhbicsXG4gICAgICAgICAgICBcInVzZXJQd2RcIjogJ3VpaSdcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXMscmVxKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIOaVtOS4qumdouadv3poZW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==