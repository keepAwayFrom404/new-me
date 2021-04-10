const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * entry: 入口起点
 * 1. string（'./src/index.js'）：打包形成一个chunk，输出一个bundle，此时chunk的名称默认值为name
 * 2. array(['./src/index.js', './src/add.js']): 多入口，所有入口文件最终只会形成一个chunk，输出也只有一个bundle文件;只有在HMR功能中让html热更新生效
 * 3. object({index: './src/index.js', add: './src/add.js'})：多入口，有几个入口文件就形成几个chunk，就输出几个bundle，此时chunk的name等于key
 * 特殊用法：
 */

module.exports = {
  // entry: './src/index.js',
  // entry: ['./src/index.js', './src/add.js'],
  entry: {index: ['./src/index.js', './src/count.js'], add: './src/add.js'},
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development'
}