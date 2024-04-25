const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '~': [path.resolve('src/js')]
    },
    extensions: ['.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2017'
        }
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
