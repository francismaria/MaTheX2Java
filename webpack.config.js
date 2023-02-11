const path = require('path');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: { 
    extensions: ['.js', '.ts'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      grammars: path.resolve(__dirname, 'src/grammars/'),
      visitors: path.resolve(__dirname, 'src/visitors/'),
      structures: path.resolve(__dirname, 'src/structures/'),
      errors: path.resolve(__dirname, 'src/errors/'),
      execution: path.resolve(__dirname, 'src/execution/'),
      java: path.resolve(__dirname, 'src/generator/'),
    },
    fallback: 
    { fs: false }
  },
  entry: './src/index.ts',
  output: {
    filename: './dist/mathex2java.js',
    path: __dirname,
    library: {
      name: 'mathex2java',
      type: 'umd'
    },
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
};