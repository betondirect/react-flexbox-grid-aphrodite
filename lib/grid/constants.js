'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var COLUMNS = exports.COLUMNS = new Array(13).fill(0);

var SIZES = exports.SIZES = ['xs', 'sm', 'md', 'lg'];

var VIEWPORTS = exports.VIEWPORTS = {
  sm: '48em',
  md: '64em',
  lg: '92em'
};

var CONTAINER_SIZES = exports.CONTAINER_SIZES = {
  sm: '49em',
  md: '65em',
  lg: '91em'
};

var FLEX_OPTIONS = exports.FLEX_OPTIONS = {
  start: {
    justifyContent: 'flex-start',
    textAlign: 'start'
  },
  center: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  end: {
    justifyContent: 'flex-end',
    textAlign: 'end'
  },
  top: {
    alignItems: 'flex-start'
  },
  middle: {
    alignItems: 'center'
  },
  bottom: {
    alignItems: 'flex-end'
  },
  around: {
    justifyContent: 'space-around'
  },
  between: {
    justifyContent: 'space-between'
  },
  first: {
    order: -1
  },
  last: {
    order: 1
  }
};

var DEFAULT_COLUMN_STYLES = exports.DEFAULT_COLUMN_STYLES = {
  boxSizing: 'border-box',
  flex: '0 0 auto',
  paddingRight: '1rem',
  paddingLeft: '1rem'
};

var MISC_STYLES = exports.MISC_STYLES = {
  row: {
    boxSizing: 'border-box',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: '0.0rem',
    marginLeft: '0.0rem'
  },
  rowReversed: {
    flexDirection: 'row-reverse'
  },
  colReversed: {
    flexDirection: 'row-reverse'
  },
  'container-fluid': {
    paddingRight: '2rem',
    paddingLeft: '2rem',
    marginRight: 'auto',
    marginLeft: 'auto'
  }
};