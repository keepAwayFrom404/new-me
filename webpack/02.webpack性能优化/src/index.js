console.log('index 文件加载了');
// import '@babel/polyfill';
import './styles/index.css';
import './styles/index.less';
import './iconfont/iconfont.css';
import { add } from './js/add';
import data from './data.json';
import $ from 'jquery'

if(module.hot) {
  // 一旦modeule.hot为true，说明开启了HMR功能
  module.hot.accept('./js/add.js', function() {
    // 该方法会监听add.js的变化，一旦变化，其他默认不会重新打包构建。会执行后面的函数。
    console.log(add(1, 2, 3, 4, 5));
  })
}

/**
 * 通过js让某个文件单独打包成一个chunk，无需配置多入口
 * import动态引入
 * 
 */
// import(/*webpackChunkName: 'add'*/'./js/add').then(res => {
//   console.log(res.add(1, 2, 3, 4, 5));
// }).catch(err => {
//   console.log(err);
// })

console.log(data);
console.log($);

const p = new Promise((res) => {
  setTimeout(() => {
    console.log('定时器执行完了');
    res();
  }, 2000);
});
p.then(() => console.log(p));


// 懒加载: 当文件需要才加载
// 预加载：prefetch：会在使用之前提前加载js文件，等其他资源加载完毕浏览器空闲了再偷偷加载资源（兼容性比较差）
// 正常加载：同一时间加载多个文件，并行加载
document.getElementById('btn').onclick = function() {
  import(/*webpackChunkName: 'add', webpackPrefetch: true */'./js/add').then(res => {
    console.log(res.add(1,2,3,4,5));
  }).catch(err => {
    console.log(err);
  })
}

/**
 * 1. eslint不认识浏览器变量，需要修改eslint配置添加env
 * "env": {
 *    "brower": true // 支持浏览器端全局变量
 * }
 * 2. sw必须运行在服务器上
 * --> nodejs
 * --> npm i serve -g 
 *     server -s build 启动服务器，将build目录下所有资源当作静态资源暴露出去
 */
// 注册serverwork；处理兼容性问题,

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      console.log('chenggong');
    }).catch(() => {
      console.log('err');
    })
  })
}