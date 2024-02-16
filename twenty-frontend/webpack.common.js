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
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
