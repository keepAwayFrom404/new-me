const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
  })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    static: './dist',
    devMiddleware: {
      index: true,
      mimeTypes: { 'text/html': ['phtml'] },
      publicPath: '/dist',
      serverSideRender: true,
      writeToDisk: true,
    },
  },
};