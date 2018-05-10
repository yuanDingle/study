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
            $.post('/api/search').then(function (res, req) {
                console.log(res);
            });

            $.ajax({
                type: "POST",
                url: '/api/search',
                data: {
                    "userName": 'zhangsan',
                    "userPwd": '456'
                },
                async: false,
                success: function success(res) {
                    code = res.code;
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdGVzdC5qcyJdLCJuYW1lcyI6WyIkIiwiRnJhbWUiLCJwb3N0IiwidGhlbiIsInJlcyIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJhc3luYyIsInN1Y2Nlc3MiLCJjb2RlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztJQUFZQSxDOzs7Ozs7Ozs7Ozs7SUFFU0MsSzs7O0FBQ2pCLHFCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OztpQ0FHUTtBQUNMRCxjQUFFRSxJQUFGLENBQU8sYUFBUCxFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBU0MsR0FBVCxFQUFhQyxHQUFiLEVBQWlCO0FBQ3pDQyx3QkFBUUMsR0FBUixDQUFZSCxHQUFaO0FBQ0gsYUFGRDs7QUFJQUosY0FBRVEsSUFBRixDQUFPO0FBQ0hDLHNCQUFLLE1BREY7QUFFSEMscUJBQUssYUFGRjtBQUdIQyxzQkFBTTtBQUNGLGdDQUFXLFVBRFQ7QUFFRiwrQkFBVztBQUZULGlCQUhIO0FBT0hDLHVCQUFPLEtBUEo7QUFRSEMseUJBQVMsaUJBQVNULEdBQVQsRUFBYztBQUNuQlUsMkJBQU9WLElBQUlVLElBQVg7QUFDSDtBQVZFLGFBQVA7O0FBYUEsbUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBS0g7Ozs7RUE3QjhCQyxnQjs7a0JBQWRkLEsiLCJmaWxlIjoibWFpbi5iYmJhNGM4NWYwMDBkNzAyNTJiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAkLnBvc3QoJy9hcGkvc2VhcmNoJywpLnRoZW4oZnVuY3Rpb24ocmVzLHJlcSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTpcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogJy9hcGkvc2VhcmNoJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBcInVzZXJOYW1lXCI6J3poYW5nc2FuJyxcbiAgICAgICAgICAgICAgICBcInVzZXJQd2RcIjogJzQ1NidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYzogZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBjb2RlID0gcmVzLmNvZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAg5pW05Liq6Z2i5p2/emhlbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9