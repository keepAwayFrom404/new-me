import 'core-js/modules/es.promise.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/web.timers.js';

import './styles/a.css';
import './styles/b.css';
// import {mul} from './test'
import $ from 'jquery'
console.log($);
const add = function add(x, y) {
  return x + y;
};

/**
 * 通过js让某个文件单独打包成一个chunk，无需配置多入口
 * import动态引入
 * 
 */
import(/*webpackChunkName: 'test'*/'./test').then(res => {
  console.log(res.mul(3,4));
}).catch(err => {
  console.log(err);
})

console.log(add(2, 5));
const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve('done~');
  }, 1000);
});
p.then((res) => console.log(res));

function sum(...args) {
  console.log(args.reduce((p, c) => p + c, 0));
}

sum(1,2,3,4)

// console.log(mul(3,8));