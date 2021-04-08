import 'core-js/modules/es.promise.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/web.timers.js';

import './styles/a.css';
import './styles/b.css';

const add = function add(x, y) {
  return x + y;
};

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