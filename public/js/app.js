(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ChatApp = require('./components/ChatApp');

var _ChatApp2 = _interopRequireDefault(_ChatApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_ChatApp2.default, null), document.getElementById('chatApp'));

},{"./components/ChatApp":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ChatSendForm = require('./ChatSendForm');

var _ChatSendForm2 = _interopRequireDefault(_ChatSendForm);

var _ChatMessages = require('./ChatMessages');

var _ChatMessages2 = _interopRequireDefault(_ChatMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatApp = function (_React$Component) {
    _inherits(ChatApp, _React$Component);

    function ChatApp(props) {
        _classCallCheck(this, ChatApp);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChatApp).call(this, props));

        _this.state = {
            messages: [{ message: 'Hello World', time: '11:10PM' }, { message: 'Hello React', time: '11:12PM' }]
        };

        _this.sendMessage = _this.sendMessage.bind(_this);
        return _this;
    }

    _createClass(ChatApp, [{
        key: 'sendMessage',
        value: function sendMessage(message) {
            var url = "messages";

            new Promise(function (resolve, reject) {
                $.ajax({
                    url: url,
                    type: "POST",
                    data: message,
                    success: function success(a, b, c) {
                        console.log(a, b, c);
                        resolve(a);
                    },
                    error: function error(a, b, c) {
                        reject(a);
                        console.log(a, b, c);
                    }
                });
            }).then(function (response) {

                console.log(this);
                this.setState({
                    messages: [].concat(_toConsumableArray(this.state.messages), [{ message: message, time: "10:00PM" }])
                });
            }.bind(this), function (error) {

                console.log("errorskskssk", error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(_ChatMessages2.default, { messages: this.state.messages }),
                React.createElement(_ChatSendForm2.default, { onSendMessage: this.sendMessage })
            );
        }
    }]);

    return ChatApp;
}(React.Component);

exports.default = ChatApp;

},{"./ChatMessages":3,"./ChatSendForm":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ChatSingleMessage = require('./ChatSingleMessage');

var _ChatSingleMessage2 = _interopRequireDefault(_ChatSingleMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatMessages = function (_React$Component) {
    _inherits(ChatMessages, _React$Component);

    function ChatMessages() {
        _classCallCheck(this, ChatMessages);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ChatMessages).apply(this, arguments));
    }

    _createClass(ChatMessages, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Messages display here.'
                ),
                React.createElement(
                    'ul',
                    null,
                    this.props.messages.map(function (data, index) {
                        return React.createElement(_ChatSingleMessage2.default, { key: index, message: data.message, time: data.time });
                    })
                )
            );
        }
    }]);

    return ChatMessages;
}(React.Component);

exports.default = ChatMessages;

},{"./ChatSingleMessage":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatSendForm = function (_React$Component) {
    _inherits(ChatSendForm, _React$Component);

    function ChatSendForm(props) {
        _classCallCheck(this, ChatSendForm);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChatSendForm).call(this, props));

        _this.state = {
            text: ''
        };

        _this.onChange = _this.onChange.bind(_this);
        _this.sendMessage = _this.sendMessage.bind(_this);
        return _this;
    }

    _createClass(ChatSendForm, [{
        key: 'onChange',
        value: function onChange(event) {
            this.setState({ text: event.target.value });
        }
    }, {
        key: 'sendMessage',
        value: function sendMessage(event) {
            event.preventDefault();
            this.props.onSendMessage(this.state.text);
            this.setState({ text: '' });
        }
    }, {
        key: 'render',
        value: function render() {
            var text = this.state.text;

            return React.createElement(
                'form',
                { onSubmit: this.sendMessage },
                React.createElement('input', { value: text, onChange: this.onChange, placeholder: 'Write something...' }),
                React.createElement(
                    'button',
                    null,
                    'Send'
                )
            );
        }
    }]);

    return ChatSendForm;
}(React.Component);

exports.default = ChatSendForm;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatSingleMessage = function (_React$Component) {
    _inherits(ChatSingleMessage, _React$Component);

    function ChatSingleMessage() {
        _classCallCheck(this, ChatSingleMessage);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ChatSingleMessage).apply(this, arguments));
    }

    _createClass(ChatSingleMessage, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                React.createElement(
                    "span",
                    null,
                    this.props.message
                ),
                React.createElement(
                    "span",
                    null,
                    this.props.time
                )
            );
        }
    }]);

    return ChatSingleMessage;
}(React.Component);

exports.default = ChatSingleMessage;

},{}]},{},[1]);

//# sourceMappingURL=app.js.map
