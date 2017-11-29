import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'h3': {
    'color': 'white',
    'textAlign': 'center',
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#000000' }, { 'unit': 'px', 'value': 1 }],
    'fontSize': [{ 'unit': 'vh', 'value': 3.25 }]
  },
  'portgrid': {
    'display': 'grid',
    'gridGap': '1em',
    'gridTemplateColumns': 'repeat(2, 1fr)',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }],
    'screen&&>w640': {
      'display': 'grid',
      'gridGap': '.25em',
      'gridTemplateColumns': 'repeat(4, 1fr)'
    },
    'screen&&>w768': {
      'display': 'grid',
      'gridGap': '1em',
      'gridTemplateColumns': 'repeat(2, 1fr)',
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 2 }]
    },
    'screen&&>w1024': {
      'display': 'grid',
      'gridGap': '.25em',
      'gridTemplateColumns': 'repeat(4, 1fr)'
    },
    'screen&&>w1920': {
      'display': 'grid',
      'gridTemplateColumns': 'repeat(4, 1fr)',
      'paddingLeft': [{ 'unit': 'em', 'value': 6 }]
    }
  },
  'card': {
    'display': 'grid',
    'gridGap': '.25em',
    'gridTemplateColumns': 'repeat(1, 1fr)',
    'background': 'white',
    'width': [{ 'unit': 'vw', 'value': 45 }],
    'height': [{ 'unit': 'vh', 'value': 50 }],
    'boxShadow': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'string', 'value': 'rgb(0, 0, 0)' }],
    'screen&&>w1366': {
      'width': [{ 'unit': 'vw', 'value': 24 }],
      'height': [{ 'unit': 'vh', 'value': 40 }],
      'fontSize': [{ 'unit': 'em', 'value': 1.35 }]
    }
  },
  'card p': {
  },
  'cardHeader': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'em', 'value': 1.15 }],
    'background': 'rgb(0, 0, 0)',
    'color': 'white',
    'width': [{ 'unit': 'vw', 'value': 45 }],
    'height': [{ 'unit': 'vh', 'value': 5 }]
  },
  'card button': {
    'borderRadius': '.5em',
    'color': 'white',
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'background': 'rgb(49, 146, 146)'
  },
  'pic': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'objectFit': 'contain',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  }
});
