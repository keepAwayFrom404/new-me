（1）package.json的browerlist会导致热更新无效
（2）webpack5使用dev-server的方式与之前不一样，详见官方文档
（3）webpack5的url-loader与html-loader默认都使用esModule了
（4）css压缩会warnming
（5）将css从js抽离出来会导致图片引用路径出错，暂时在MiniCssExtractPlugin.loader加一个publicPath（因为css被打包到了css目录下）
（6）dll的add-asset-html-webpack-plugin插件需要指定publicPath，不然引用路径会错误自动添加auto
# webpack 性能优化
* 开发环境优化
* 生产环境优化

## 开发环境优化
* 优化打包构建速度
  * HMR：一个模块修改无需重新构建所有代码
* 优化代码调试
  * source-map：源码与构建后代码的映射

## 生产环境优化
* 优化打包构建速度
  * oneOf：所有文件只过一遍loader
  * babel缓存：优化构建速度；
  * 多进程打包：加快打包速度，但是进程的使用比较消耗资源
  * externals：不打包哪些库，使用cdn
  * dll：先打包好，后面直接用就行了，无需cdn
* 优化代码运行性能
  * 缓存：hash值，修改文件之后才请求新文件，主要使用contenthash
  * tree-shaking：去除项目中未使用代码，减少包体积（必须使用es6模块）
  * code split：拆成多个包，加快资源请求速度
  * 懒加载/预加载：上来不加载代码，运行再加载/等其他资源加载完加载，使用时再运行（兼容性问题）
  * pwa：离线可访问，使用serviceWorker
  
