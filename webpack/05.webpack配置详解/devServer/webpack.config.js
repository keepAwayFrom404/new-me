const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development',
  // 只用于开发环境
  devServer: {
    // 项目构建后路径
    contentBase:resolve(__dirname, 'build'),
    // 监视contentBase目录下文件的变化，一旦变化就会reload
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/
    },
    // 启动gzip压缩
    compress: true,
    // 打开的端口号
    port: 3000,
    // 自动打开浏览器
    open: true,
    // 域名
    host: 'loacalhost',
    // 开启HMR功能
    hot: true,
    // 不要显示启动服务器的信息
    cilentLogLevel: 'none',
    // 除了一些基本的启动信息外，其他内容不显示
    quiet: true,
    // 报错不要全屏提示
    overlay: false,
    // 服务器代理，解决开发环境跨域问题
    proxy: {
      // 一旦devServer服务器接收到/api/xxx的请求，就会把请求转发到target服务器
      '/api': {
        target: 'http://loacalhost:3000',
        // 发送请求时，路径重写：/api/xxx -> /xxx（去掉api）
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}