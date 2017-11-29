import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'boxSizing': 'border-box'
  },
  'html': {
    'fontFamily': ''Times New Roman', Times, serif'
  },
  'body': {
    'fontFamily': ''Times New Roman', Times, serif'
  },
  'grid': {
    'display': 'grid',
    'gridGap': '.1em',
    'gridTemplateColumns': 'repeat(1, 1fr)',
    'overflow': 'hidden',
    'boxShadow': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'string', 'value': 'rgb(0, 0, 0)' }]
  },
  'section-A': {
    'background': 'url("../images/pexels6.jpg") no-repeat center center',
    'backgroundSize': '100%',
    'height': [{ 'unit': 'vh', 'value': 40 }],
    'screen&&>w1366': {
      'background': 'url("../images/pexels6.jpg") no-repeat center center fixed',
      'backgroundSize': '100%',
      'height': [{ 'unit': 'vh', 'value': 50 }]
    },
    'screen&&>w1920': {
      'background': 'url("../images/pexels6.jpg") no-repeat center center fixed',
      'backgroundSize': '100%',
      'height': [{ 'unit': 'vh', 'value': 80 }],
      'width': [{ 'unit': 'vw', 'value': 100 }]
    }
  },
  'section-B': {
    'background': 'rgb(49, 146, 146)',
    'width': [{ 'unit': 'vw', 'value': 100 }]
  },
  'section-C': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'em', 'value': 0.75 }],
    'background': 'rgb(49, 146, 146)'
  },
  'section-D': {
    'background': 'rgb(49, 146, 146)',
    'width': [{ 'unit': 'vw', 'value': 100 }],
    'paddingBottom': [{ 'unit': 'em', 'value': 8 }]
  },
  'h3': {
    'color': 'white',
    'textAlign': 'center',
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#000000' }, { 'unit': 'px', 'value': 1 }],
    'fontSize': [{ 'unit': 'vh', 'value': 3.25 }],
    'screen&&>w640': {
      'fontSize': [{ 'unit': 'em', 'value': 1.1 }]
    },
    'screen&&>w768': {
      'fontSize': [{ 'unit': 'em', 'value': 2.1 }]
    }
  },
  'header': {
    'verticalAlign': 'center',
    'fontSize': [{ 'unit': 'vh', 'value': 4 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': 'black',
    'borderBottom': [{ 'unit': 'em', 'value': 1 }],
    'color': 'white',
    'height': [{ 'unit': 'vh', 'value': 6 }],
    'position': 'fixed',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'footer': {
    'textAlign': 'center',
    'background': 'black',
    'color': 'white',
    'height': [{ 'unit': 'vh', 'value': 6 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'position': 'fixed'
  },
  // -----------------About Section ------------------------
  'aboutp': {
    'color': 'white',
    'width': [{ 'unit': 'vw', 'value': 90 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    // text-shadow: 1px 1px #000000;
     font-size: 1.15em;
  },
  'aboutp p': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'skills': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(3, 1fr)'
  },
  'typist': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'vh', 'value': 3.25 }],
    'padding': [{ 'unit': 'em', 'value': 10 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 2 }]
  },
  // --------------Form--------------------
  'form': {
    'paddingLeft': [{ 'unit': 'em', 'value': 0.75 }],
    'screen&&>w1024': {
      'fontSize': [{ 'unit': 'em', 'value': 2 }],
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 10 }]
    },
    'screen&&>w1280': {
      'fontSize': [{ 'unit': 'px', 'value': 15 }]
    }
  },
  'form label': {
    'color': 'white',
    'fontSize': [{ 'unit': 'em', 'value': 1.15 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'form button': {
    'borderRadius': '.5em',
    'background': 'white',
    'color': 'rgb(49, 146, 146)',
    'height': [{ 'unit': 'vh', 'value': 5 }],
    'width': [{ 'unit': 'vw', 'value': 20 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.75 }],
    'textAlign': 'center',
    'paddingTop': [{ 'unit': 'em', 'value': 0.4 }],
    'marginLeft': [{ 'unit': 'vw', 'value': 37 }]
  },
  'inputbox': {
    'color': 'rgb(49, 146, 146)',
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'borderRadius': '.3em',
    'background': '#fff',
    'overflow': 'hidden'
  },
  // ------------------Media Queries-----------------------
  // @media screen and (min-width: 1440px) {
     .form {
         font-size: 3.5em;
     }
     .form button {
         padding: 0;
         margin-left: 8em;
     }
     .h3 {
         font-size: 4em;
     }
     .section-D {
         height: 85vh;
     }
 }
});
