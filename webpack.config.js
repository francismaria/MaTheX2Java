const path = require('path');

module.exports = {
  mode: 'production',
  resolve: { 
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      Grammars: path.resolve(__dirname, 'src/grammars/'),
      Visitors: path.resolve(__dirname, 'src/visitors/'),
      Structures: path.resolve(__dirname, 'src/structures/'),
      Errors: path.resolve(__dirname, 'src/errors/'),
      Java: path.resolve(__dirname, 'src/java/'),
    },
    fallback: 
    { fs: false }
  },
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