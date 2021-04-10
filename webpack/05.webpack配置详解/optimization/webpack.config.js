const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: resolve(__dirname, 'build'),
    chunkFilename: 'js/[name].[contenthash]_chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'production',
  optimization: {
    splitChunks: {
      // 以下为默认值，可以不写
      chunks: 'all',
      // minSize: 30 * 1024,  // 分割的chunk最小为30kb
      // maxSize: 0, // 最大不限制
      // minChunks: 1, // 要提取的chunk最小被引用一次
      // maxAsyncRequests: 5, // 按需加载时并行加载的文件的最大数量
      // maxinitialRequest: 3, // 入口js文件最大并行请求数
      // automaticNameDelimiter: '~', // 名称连接符
      // name: true, // 可以使用命名规则
      // cacheGroups: {
      //   // 分割chunk的组
      //   // node_modules会被打包到vendors组的chunk中
      //   // 且满足上面的公共规则：大小不超过30kb，至少被引用一次
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     // 优先级
      //     priority: -10,
      //   },
      //   default: {
      //     // 需要提取的chunk最少被引用两次
      //     minChunks: 2,
      //     priority: -20,
      //     // 如果当前要打包的模块和之前已经被提取的模块是同一个，就会复用，而不是重新打包模块
      //     reuseExistingChunk: true
      //   }
      // }
    },
    // 解决加上contenthash之后index文件引用了add，当add改变，index的hash值也会改变，导致缓存失效,将当前模块的记录其他模块的hash单独打包到一个文件 runtime(修改a文件会导致b文件的contenthash变化，因为内容里面有引用其他资源的hash值)
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    },
    minimizer: [
      // 配置生产环境的压缩方案：js和css
      new TerserWebpackPlugin({
        // 开启缓存
        cache: true,
        // 开启多线程打包
        paraller: true,
        // 启动source-map
        sourceMap: true
      })
    ]
  }
}