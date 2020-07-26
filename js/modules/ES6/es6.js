
/**
 * ES6
 * 简介：设计思路是既尽可能静态化，在编译时就能确定模块的依赖关系，以及输入和输出的变量；commonjs和amd都只在运行时确定这些东西
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
