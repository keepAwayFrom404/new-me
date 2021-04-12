// import '@babel/polyfill';
import './styles/index.css';
import './styles/index.less';
import './iconfont/iconfont.css';
import { add } from './js/add';
import data from './data.json';

console.log(add(1, 2, 3, 4, 5));
console.log(data);

const p = new Promise((res) => {
  setTimeout(() => {
    console.log('定时器执行完了');
    res();
  }, 1000);
});
p.then(() => console.log(p));
