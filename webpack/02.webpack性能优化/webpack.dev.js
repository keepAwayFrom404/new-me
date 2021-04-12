/**
 * HMR-->hot module replacement 热模块替换，每次只打包修改了的模块
 * css：style-loader内部实现了HMR
 * html：默认不能使用HMR，配置入口entry即可以热更新(不用做HMR)
 * js：默认不支持HMR，使用module.hot.accept监听文件变化，但是入口js文件无效，入口文件会引入其他文件，其他文件变化入口文件必定变化
 */

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
 const { resolve } = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 
 module.exports = {
   entry: ['./src/index.js', './src/index.html'],
   output: {
     // __dirname表示当前文件路径
     path: resolve(__dirname, 'build'),
     filename: 'js/built.js',
   },
   module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'eslint-loader',
         enforce: 'pre',
         options: {
           fix: true,
         },
       },
       {
         oneOf: [
           {
             exclude: /node_modules/,
             test: /\.js$/,
             /**
             * 开启多进程打包
             * 进程开启是有时间的大概为600ms，进程通信也有开销
             * 只有工作消耗时间比较长，才使用多进程打包
             */
            use: [
              {
                loader: 'thread-loader',
            options: {
              workers:2, // 2个进程
            }
              },
              {
                loader: 'babel-loader',
             options: {
               presets: [
                 [
                   '@babel/preset-env',
                   {
                     useBuiltIns: 'usage',
                     corejs: {
                       version: 3,
                     },
                     targets: {
                       chrome: '60',
                       firefox: '60',
                       ie: '9',
                       safari: '10',
                       edge: '17',
                     },
                   },
                 ],
               ],
               // 开启babel缓存，第二次构建才会读取缓存
               cacheDirectory: true
             },
              }
            ],
           },
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
     open: true,
     // 开启HMR，修改了webpack配置需要重启服务
     hot: true
   },
   devtool: 'eval-source-map',
 }