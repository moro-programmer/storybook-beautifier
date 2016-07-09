'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactElementToJsxString = require('react-element-to-jsx-string');

var _reactElementToJsxString2 = _interopRequireDefault(_reactElementToJsxString);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoryBeautifier = function (_Component) {
    (0, _inherits3.default)(StoryBeautifier, _Component);

    function StoryBeautifier(props) {
        (0, _classCallCheck3.default)(this, StoryBeautifier);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(StoryBeautifier).call(this, props));

        _this.state = {
            showSource: false
        };

        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(StoryBeautifier, [{
        key: 'toggle',
        value: function toggle(event) {
            event.preventDefault();
            this.setState({ showSource: !this.state.showSource });
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;
            var showSource = this.state.showSource;

            var linkText = showSource ? 'hide additional info' : 'show additional info';
            var src = showSource ? _react2.default.createElement(
                _reactHighlight2.default,
                { className: 'html' },
                (0, _reactElementToJsxString2.default)(children)
            ) : undefined;

            return _react2.default.createElement(
                'div',
                null,
                children,
                _react2.default.createElement(
                    'a',
                    { href: '', onClick: this.toggle, style: { float: 'right' } },
                    linkText
                ),
                _react2.default.createElement('div', { style: { clear: 'both' } }),
                src
            );
        }
    }]);
    return StoryBeautifier;
}(_react.Component);

StoryBeautifier.propTypes = {
    children: _react.PropTypes.node
};

exports.default = StoryBeautifier;