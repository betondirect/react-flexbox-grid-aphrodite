'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grid;

var _react = require('react');

var _noImportant = require('aphrodite/no-important');

var _createProps = require('./create-props');

var _createProps2 = _interopRequireDefault(_createProps);

var _style = require('../components/style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-unused-prop-types */
var propTypes = {
  fluid: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};
/* eslint-enable */

function Grid(props) {
  var containerClass = (0, _noImportant.css)(_style2.default[props.fluid ? 'container-fluid' : 'container']);
  var className = [props.className, containerClass].filter(function (o) {
    return o;
  }).join(' ');

  return (0, _react.createElement)(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, className));
}

Grid.propTypes = propTypes;
module.exports = exports['default'];