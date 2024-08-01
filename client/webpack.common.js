const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/js/main/main.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "static/js/main.js"
  },
  resolve: {
    alias: {
      "~": [path.resolve(__dirname, "src/js")],
      "@css": [path.resolve(__dirname, "src/css")]
    },
    extensions: [".ts", ".tsx", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2015"
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
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({patterns: [
      {from: "./src/favicon.svg", to: "favicon.ico"}
   ]}),
  ],
}
