module.exports = {
  'extends': 'standard',

  'rules': {
    'brace-style'                : [2, '1tbs'],
    'eqeqeq'                     : [2, 'smart'],
    'comma-dangle'               : [0],
    'consistent-return'          : [2],
    'indent'                     : [2, 2, { 'SwitchCase': 1 }],
    'key-spacing'                : [2, {'align': 'colon'}],
    'no-extra-semi'              : [2],
    'no-use-before-define'       : [2],
    'no-multi-spaces'            : [2, {exceptions: {'VariableDeclarator': true}}],
    'no-multiple-empty-lines'    : [2, {'max': 2}],
    'semi'                       : [2, 'always'],
    'semi-spacing'               : [2, { 'before': false, 'after': true }],
    'space-before-function-paren': [2, {'anonymous' : 'always', 'named' : 'never'}],
    'spaced-comment'             : [2, 'always', { exceptions: ['-']}],
    'strict'                     : [2, 'global'],
    'wrap-iife'                  : [2, 'inside']
  },

  "ecmaFeatures": {
    "modules": false
  }
}
