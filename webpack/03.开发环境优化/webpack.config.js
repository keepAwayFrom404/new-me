/**
 * HMR-->hot module replacement 热模块替换
 * css：style-loader内部实现了HMR
 * html：配置入口entry即可以热更新
 * js：使用module.hot.accept监听文件变化，但是入口js文件无效
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: ['./src/index.js', './src/index.html'],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/built.js',
  },
  module: {
    rules: [
      {
        exclude: /\.(css|js|html|less|jpg|png|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'iconfont'
        } 
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.jpg|png|jpeg/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          esModule: false,
          outputPath: 'assets'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  // mode: 'production',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
    hot: true
  },
  devtool: 'eval-source-map'
}

/**
 * source-map 源代码到构建后代码的映射
 * 取值：[inline-|hidden-|eval-|][nosources-|][cheap-[module-]]source-map
 * source-map: 外部，准确提示到出错位置，并支持跳转到源代码错误位置
 * inline-source-map：内联在js文件中，生成一个source-map,准确提示到出错位置，并支持跳转到源代码错误位置
 * hidden-source-map：外部,提示错误代码的错误原因，但是只有提示构建后代码的位置
 * eval-source-map：内联，每一个文件生成一个对应的source-map，准确提示到出错位置，并支持跳转到源代码错误位置
 * 内联和外部的区别：1.外部生成了文件；2.内联构建速度快
 * 
 * nosources-source-map：外部，找到错误代码准确信息，但是没有任何源代码信息
 * cheap-source-map：外部，精确到错误行（无法精确具体列），并找到源代码
 * cheap-module-source-map：外部，同上,module会将loader的source-map也加进来
 * 
 * 开发环境：速度快，调试友好（eval-source-map（脚手架默认）/eval-cheap-source-map）
 *  速度快：eval->inline->cheap...
 *    eval-cheap-source-map
 *    eval-source-map
 *  调试友好：
 *    source-map
 *    cheap-module-source-map
 *    cheap-source-map
 * 生产环境：源代码隐藏？调试要不要更友好（source-map/cheap-module-source-map）
 *  内联的体积会大直接排除
 *  nosources-source-map：源代码全部隐藏
 *  hidden-source-map：不隐藏构建后代码
 */