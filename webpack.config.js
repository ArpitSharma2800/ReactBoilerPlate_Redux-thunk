const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            plugin: ['lodash']
          },
        }, ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
    new CaseSensitivePathsPlugin(),
  ],
};