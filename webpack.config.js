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
  entry: './src/TranslationExecutor.js',
  output: {
    filename: './dist/mathex2java.bundle.js',
    path: __dirname,
    library: {
      name: 'mathex2java',
      type: 'var'
    },
    libraryTarget: 'var'
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
};