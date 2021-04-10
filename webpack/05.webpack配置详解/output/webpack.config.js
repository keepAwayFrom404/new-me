const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    // 文件名称（指定名称+目录）
    filename: 'js/[name].js',
    // 输出文件目录（将所有资源输出的公共目录）
    path: resolve(__dirname, 'build'),
    // 所有资源引入公共路径前缀 补充到路径的前面(html)
    publicPath: '/',
    // 非入口chunk的名称
    chunkFilename: 'js/[name]_chunk.js',
    library: '[name]', // 整个库向外暴露的变量名,供外部使用
    // libraryTarget: 'window', // 变量名添加到哪上 适用brower
    // libraryTarget: 'global', // 变量名添加到哪上 适用node
    libraryTarget: 'amd', // 适用那种模块规范
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development'
}