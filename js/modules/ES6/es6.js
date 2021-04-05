
/**
 * ES6
 * 简介：设计思路是尽可能静态化，在编译时就能确定模块的依赖关系，以及输入和输出的变量；commonjs和amd都只在运行时确定这些东西；es modules不是对象而是通过export命令显示指定输出的代码；当遇到import时不会去执行模块而是生成一个引用，等需要使用的时候再到模块里去取值，所以es模块是动态引用，不存在缓存，模块变量绑定在所在的模块中
 * export default：指定模块的默认输出，一个模块只能有一个默认输出，使用了它之后可以在import任意命名，本质是将后面的值赋值给default变量，所以可以直接将值写在default后
 * export与export default导出的不仅仅是对变量的复制或者引用；他们是对模块内部定义的标志符类似指针的绑定
 * export绑定的是标志符的值，值改变得到的是新值；export default绑定的是标志符指向的值，值指向另一个值，绑定值不会发生变化；如果想修改默认导出的值可以使用export {a as default}
 */
'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.foo)();
(0, _module.bar)();
(0, _module2.func1)();
(0, _module2.func2)();
(0, _module4.default)();
(0, _jquery2.default)('body').css('background', 'pink');
