const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css/,
        // 多个loader用use
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  // 解析模块的规则
  resolve: {
    // 配置解析模块的别名: 优点是简写路径，确定是路径无提示
    alias: {
      $css: resolve(__dirname,'src')
    },
    // 配置省略路径的后缀名
    extensions: ['.js','.json','.jsx'],
    // 告诉webpack解析模块去找哪个目录
    modules: [resolve(__dirname, '../../node_modules'),'node_modules']
  },
  mode: 'development'
}