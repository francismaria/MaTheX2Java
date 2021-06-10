const path = require('path');

module.exports = {
  mode: 'production',
  resolve: { 
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      grammars: path.resolve(__dirname, 'src/grammars/'),
      visitors: path.resolve(__dirname, 'src/visitors/'),
      structures: path.resolve(__dirname, 'src/structures/'),
      errors: path.resolve(__dirname, 'src/errors/'),
      java: path.resolve(__dirname, 'src/generator/'),
    },
    fallback: 
    { fs: false }
  },
  entry: './src/CompilerExecutor.js',
  output: {
    filename: './dist/mathex2java.js',
    path: __dirname,
    library: {
      name: 'MaThex2Java',
      type: 'var'
    },
    libraryTarget: 'var'
  },
};