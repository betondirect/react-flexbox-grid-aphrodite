'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Col;

var _react = require('react');

var _noImportant = require('aphrodite/no-important');

var _createProps = require('./create-props');

var _createProps2 = _interopRequireDefault(_createProps);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ModificatorType = _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]);

/* eslint-disable react/no-unused-prop-types */
var propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: _react.PropTypes.number,
  smOffset: _react.PropTypes.number,
  mdOffset: _react.PropTypes.number,
  lgOffset: _react.PropTypes.number,
  reverse: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};
/* eslint-enable */

var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset'
};

function getClassNames(props) {
  var extraClasses = [];

  if (props.reverse) {
    extraClasses.push(_style2.default.reverse);
  }

  var classes = Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return _style2.default[Number.isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]];
  }).concat(extraClasses).filter(function (k) {
    return (typeof k === 'undefined' ? 'undefined' : _typeof(k)) === 'object';
  });

  return !props.className ? _noImportant.css.apply(undefined, _toConsumableArray(classes)) : props.className + ' ' + _noImportant.css.apply(undefined, _toConsumableArray(classes));
}

function Col(props) {
  var className = getClassNames(props);

  return (0, _react.createElement)(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, className));
}

Col.propTypes = propTypes;
module.exports = exports['default'];