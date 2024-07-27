const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '~': [path.resolve('src/js')],
      '@css': [path.resolve('src/css')]
    },
    extensions: ['.ts', '.tsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015'
        }
      },
      {
        test: /\.(scss|css)$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
