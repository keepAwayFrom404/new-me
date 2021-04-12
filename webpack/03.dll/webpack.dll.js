const { resolve } = require("path");
const webpack = require('webpack')

/**
 * 使用dll技术，对某些第三方库进行单独打包
 * 当运行webpack默认查找webpack.config.js 
 * 使用webpack --config webpack.dll.js 告诉webpack配置文件的路径
 */
module.exports = {
  entry: {
    // 最终打包生成的[name]--- jquery
    // ['jquery'] --- 要打包的库是jquery（比如批量使用相关联的库可以放一起）
    jquery: ['jquery']
  },
  output: {
    filename: '[name].js',
    // 单独打包的库放到dll下
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]' // 打包的库里面向外暴露出去的内容叫啥名字
  },
  plugins: [
    // 打包生成一个manifest.json 提供映射
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库暴露的内容名称
      path: resolve(__dirname, 'dll/manifest.json') // 输出文件路径
    })
  ],
  mode: 'production'
}