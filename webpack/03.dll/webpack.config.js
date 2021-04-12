const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    // publicPath: '/build', // add-asset-html-webpack-plugin 插件需要指示js的路径
    path: resolve(__dirname, 'build'),
    filename: 'js/built.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 告诉webpack哪些库不参与打包，同时引用时名称也要变
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname,'dll/manifest.json')
    }),
    // 会将某个文件打包输出出去，并在html自动引入
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, 'dll/jquery.js'),
      publicPath: './'
    })
  ],
  mode: 'production'
}