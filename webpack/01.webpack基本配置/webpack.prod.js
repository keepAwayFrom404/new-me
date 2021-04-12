const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// browerslist默认使用生产环境配置
// process.env.NODE_ENV = 'development'
module.exports = {
  entry: './src/index.js',
  output: {
    // __dirname表示当前文件路径
    path: resolve(__dirname, 'build'),
    filename: 'js/built.js',
  },
  module: {
    rules: [
      /**
       * 语法检查：eslint-loader eslint
       * 注意：只检查自己写的源代码，第三方库不需要检查
       * 设置检查规则：
       * package.json中添加eslintConfig
       * 使用airbnb --> eslint-config-airbnb-base eslint eslint-plugin-import
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        // 正常来讲，一个文件同时只能被一个loader处理，所以要注意执行顺序，默认差不多
        enforce: 'pre',
        options: {
          // 自动修复eslint的错误
          fix: true,
        },
      },
      /**
       * js 兼容性处理：babel-loader
       * 1. @babel/preset-env：基本兼容性处理es6->es5，只能转换基本语法，promise等高级语法不能转换
       * 2. @babel/polyfill: 全部js兼容性处理，一次性全部引入，会导致代码体积太大
       * 3. 按需加载：core-js
       */
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          // 预设：指定babel做怎么样的兼容性处理,
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage', // 按需加载
                corejs: {
                  version: 3,
                },
                // 具体兼容性到
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
        },
      },
      {
        // 排除以下资源
        exclude: /\.(css|js|html|less|jpg|png|jpeg|json)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'iconfont',
        },
      },

      {
        test: /\.css$/,
        // use执行顺序从后到前
        use: [
          // 创建style标签，将js中的样式资源引入并添加到head中生效？
          // 'style-loader',
          // 取代style-loader，提取js中的css成单独文件
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 在css引入的资源前添加../
              publicPath: '../',
            },
          },
          // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          'css-loader',
          /**
           * css 兼容性处理：postcss-loader、postcss-preset-env
           */
          // 'postcss-loader', // 默认配置
          // 修改配置
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // 帮助postcss找到browerslist配置，通过配置加载指定的css兼容样式
                plugins: ['postcss-preset-env'],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less编译成css，需要下载less和less-loader
          'less-loader',
        ],
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        // 需要下载url-loader和file-loader（被url-loader依赖），无法处理html的图片, 同一个图片资源不会重复打包
        loader: 'url-loader',
        options: {
          // 图片大小小于8k会被base64处理，优点：减少请求数量（减少服务器压力），缺点：图片体积变大（文件请求速度变慢）
          limit: 8,
          // 给图片重命名，取hash前10位
          name: '[hash:10].[ext]',
          // url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs模块
          esModule: false,
          outputPath: 'assets',
        },
      },
      {
        test: /\.html$/,
        // 处理html文件中的img图片（负责引入img，从而能被url-loader进行处理）
        loader: 'html-loader',
        options: {
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    // 默认创建空的html，自动引入打包输出的资源
    new HtmlWebpackPlugin({
      // 创建html模版
      template: './src/index.html',
      // html压缩
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
    // 从js中剥离css
    new MiniCssExtractPlugin({
      // 对输出的css重命名
      filename: 'css/built.css',
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  // 生产环境默认压缩js
  mode: 'production',
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
  },
};
