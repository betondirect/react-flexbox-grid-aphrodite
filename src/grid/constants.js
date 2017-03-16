export const COLUMNS = new Array(13).fill(0);

export const SIZES = ['xs', 'sm', 'md', 'lg'];

export const VIEWPORTS = {
  sm: '48em',
  md: '64em',
  lg: '92em',
};

export const CONTAINER_SIZES = {
  sm: '49em',
  md: '65em',
  lg: '91em',
};

export const FLEX_OPTIONS = {
  start: {
    justifyContent: 'flex-start',
    textAlign: 'start',
  },
  center: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  end: {
    justifyContent: 'flex-end',
    textAlign: 'end',
  },
  top: {
    alignItems: 'flex-start',
  },
  middle: {
    alignItems: 'center',
  },
  bottom: {
    alignItems: 'flex-end',
  },
  around: {
    justifyContent: 'space-around',
  },
  between: {
    justifyContent: 'space-between',
  },
  first: {
    order: -1,
  },
  last: {
    order: 1,
  },
};

export const DEFAULT_COLUMN_STYLES = {
  boxSizing: 'border-box',
  flex: '0 0 auto',
  paddingRight: '1rem',
  paddingLeft: '1rem',
};

export const MISC_STYLES = {
  row: {
    boxSizing: 'border-box',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: '0.0rem',
    marginLeft: '0.0rem',
  },
  rowReversed: {
    flexDirection: 'row-reverse',
  },
  colReversed: {
    flexDirection: 'row-reverse',
  },
  'container-fluid': {
    paddingRight: '2rem',
    paddingLeft: '2rem',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
};
