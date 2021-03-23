const path = require('path');

module.exports = {
  mode: 'production',
  resolve: { fallback: { fs: false }},
  entry: './src/CompilerExecutor.js',
  output: {
    filename: 'mathex2java.js',
    path: __dirname,
    library: {
      name: 'MaThex2Java',
      type: 'var'
    },
    libraryTarget: 'var'
  },
};