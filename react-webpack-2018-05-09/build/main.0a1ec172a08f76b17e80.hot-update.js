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
                "userPwd": '456'
            }).then(function (res, req) {
                console.log(res);
            });

            $.ajax({
                type: "POST",
                url: '/api/search',
                data: result,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdGVzdC5qcyJdLCJuYW1lcyI6WyIkIiwiRnJhbWUiLCJwb3N0IiwidGhlbiIsInJlcyIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJyZXN1bHQiLCJhc3luYyIsInN1Y2Nlc3MiLCJjb2RlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztJQUFZQSxDOzs7Ozs7Ozs7Ozs7SUFFU0MsSzs7O0FBQ2pCLHFCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OztpQ0FHUTtBQUNMRCxjQUFFRSxJQUFGLENBQU8sYUFBUCxFQUFxQjtBQUNqQiw0QkFBVyxVQURNO0FBRWpCLDJCQUFXO0FBRk0sYUFBckIsRUFHR0MsSUFISCxDQUdRLFVBQVNDLEdBQVQsRUFBYUMsR0FBYixFQUFpQjtBQUNyQkMsd0JBQVFDLEdBQVIsQ0FBWUgsR0FBWjtBQUNILGFBTEQ7O0FBT0FKLGNBQUVRLElBQUYsQ0FBTztBQUNIQyxzQkFBSyxNQURGO0FBRUhDLHFCQUFLLGFBRkY7QUFHSEMsc0JBQU1DLE1BSEg7QUFJSEMsdUJBQU8sS0FKSjtBQUtIQyx5QkFBUyxpQkFBU1YsR0FBVCxFQUFjO0FBQ25CVywyQkFBT1gsSUFBSVcsSUFBWDtBQUNIO0FBUEUsYUFBUDs7QUFVQSxtQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFLSDs7OztFQTdCOEJDLGdCOztrQkFBZGYsSyIsImZpbGUiOiJtYWluLjBhMWVjMTcyYTA4Zjc2YjE3ZTgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgICQucG9zdCgnL2FwaS9zZWFyY2gnLHtcbiAgICAgICAgICAgIFwidXNlck5hbWVcIjonemhhbmdzYW4nLFxuICAgICAgICAgICAgXCJ1c2VyUHdkXCI6ICc0NTYnXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzLHJlcSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTpcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogJy9hcGkvc2VhcmNoJyxcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgICAgICAgIGFzeW5jOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSByZXMuY29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICDmlbTkuKrpnaLmnb96aGVuZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=