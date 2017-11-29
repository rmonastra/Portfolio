import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'icon': {
    'color': 'white',
    'padding': [{ 'unit': 'em', 'value': 0.1 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'screen&&>w1920': {
      'fontSize': [{ 'unit': 'em', 'value': 5 }],
      'color': 'white',
      'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
    }
  },
  'contactfooter': {
    'display': 'none'
  }
});
