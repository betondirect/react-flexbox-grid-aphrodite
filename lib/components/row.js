'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Row;

var _react = require('react');

var _noImportant = require('aphrodite/no-important');

var _createProps = require('./create-props');

var _createProps2 = _interopRequireDefault(_createProps);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

/* eslint-disable react/no-unused-prop-types */
var propTypes = {
  reverse: _react.PropTypes.bool,
  start: _react.PropTypes.string,
  center: _react.PropTypes.string,
  end: _react.PropTypes.string,
  top: _react.PropTypes.string,
  middle: _react.PropTypes.string,
  bottom: _react.PropTypes.string,
  around: _react.PropTypes.string,
  between: _react.PropTypes.string,
  first: _react.PropTypes.string,
  last: _react.PropTypes.string,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};
/* eslint-enable */

function getClassNames(props) {
  var modificators = [_style2.default.row];

  // eslint-disable-next-line no-plusplus

  var _loop = function _loop(i) {
    var key = modificatorKeys[i];
    var value = props[key];
    if (value) {
      value.split(',').forEach(function (m) {
        modificators.push(_style2.default[key + '-' + m]);
      });
    }
  };

  for (var i = 0; i < modificatorKeys.length; ++i) {
    _loop(i);
  }

  if (props.reverse) {
    modificators.push(_style2.default.reverse);
  }

  var classes = modificators.filter(function (o) {
    return o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
  });

  return !props.className ? _noImportant.css.apply(undefined, _toConsumableArray(classes)) : props.className + ' ' + _noImportant.css.apply(undefined, _toConsumableArray(classes));
}

function Row(props) {
  return (0, _react.createElement)(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, getClassNames(props)));
}

Row.propTypes = propTypes;
module.exports = exports['default'];