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
      {
        test: /\.js/,
        // 排除node_modules
        exclude: /node_modules/,
        // 只检查src下的js文件
        include: resolve(__dirname,'src'),
        // pre：优先执行；post：延后执行
        enforce: 'pre',
        // 当个loader用loader
        loader: 'eslint-loader',
        // 配置loader
        options: {}
      },
      {
        // 以下配置只生效一个
        oneOf: []
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development'
}