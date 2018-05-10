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
            // $.post('/api/search',).then(function(res,req){
            //     console.log(res);
            // });

            $.ajax({
                type: "GET",
                url: '/users/addUser',
                data: {
                    "userName": 'zhangsan',
                    "userPwd": '456'
                },
                async: false,
                success: function success(res) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdGVzdC5qcyJdLCJuYW1lcyI6WyIkIiwiRnJhbWUiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJhc3luYyIsInN1Y2Nlc3MiLCJyZXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0lBQVlBLEM7Ozs7Ozs7Ozs7OztJQUVTQyxLOzs7QUFDakIscUJBQWM7QUFBQTs7QUFBQTtBQUViOzs7O2lDQUdRO0FBQ0w7QUFDQTtBQUNBOztBQUVBRCxjQUFFRSxJQUFGLENBQU87QUFDSEMsc0JBQUssS0FERjtBQUVIQyxxQkFBSyxnQkFGRjtBQUdIQyxzQkFBTTtBQUNGLGdDQUFXLFVBRFQ7QUFFRiwrQkFBVztBQUZULGlCQUhIO0FBT0hDLHVCQUFPLEtBUEo7QUFRSEMseUJBQVMsaUJBQVNDLEdBQVQsRUFBYyxDQUV0QjtBQVZFLGFBQVA7O0FBYUEsbUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBS0g7Ozs7RUE3QjhCQyxnQjs7a0JBQWRSLEsiLCJmaWxlIjoibWFpbi5kNDNkMGFhZmRhYTcyY2VlNDgxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyAkLnBvc3QoJy9hcGkvc2VhcmNoJywpLnRoZW4oZnVuY3Rpb24ocmVzLHJlcSl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTpcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiAnL3VzZXJzL2FkZFVzZXInLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIFwidXNlck5hbWVcIjonemhhbmdzYW4nLFxuICAgICAgICAgICAgICAgIFwidXNlclB3ZFwiOiAnNDU2J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIOaVtOS4qumdouadv3poZW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==