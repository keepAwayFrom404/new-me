const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // __dirname表示当前文件路径
    path: resolve(__dirname, 'build'),
    filename: 'js/built.js',
  },
  module: {
    rules: [
      {
        // 排除以下资源
        exclude: /\.(css|js|html|less|jpg|png|jpeg|json)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'iconfont'
        } 
      },

      {
        test: /\.css$/,
        // use执行顺序从后到前
        use: [
          // 创建style标签，将js中的样式资源引入并添加到head中生效？
          'style-loader',
          // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less编译成css，需要下载less和less-loader
          'less-loader',
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif)/,
        // 需要下载url-loader和file-loader（被url-loader依赖），无法处理html的图片, 同一个图片资源不会重复打包
        loader: 'url-loader',
        options: {
          // 图片大小小于8k会被base64处理，优点：减少请求数量（减少服务器压力），缺点：图片体积变大（文件请求速度变慢）
          limit: 8 * 1024,
          // 给图片重命名，取hash前10位
          name: '[hash:10].[ext]',
          // url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs模块
          esModule: false,
          outputPath: 'assets'
        }
      },
      {
        test: /\.html$/,
        // 处理html文件中的img图片（负责引入img，从而能被url-loader进行处理）
        loader: 'html-loader',
        options: {
          esModule: false,
        }
      }
    ]
  },
  plugins: [
    // 默认创建空的html，自动引入打包输出的资源
    new HtmlWebpackPlugin({
      // 创建html模版
      template: './src/index.html'
    })
  ],
  mode: 'development',
  // 开发服务器，自动编译，自动打包浏览器，自动刷新
  // 只会在内存中编译打包，不会有任何输出
  // 需要安装webpack-dev-server
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    port: 7777,
    // 自动打开浏览器
    open: true
  }
}