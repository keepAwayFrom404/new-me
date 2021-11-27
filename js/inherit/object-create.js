/**
 * Object.create(o)会生成一个关联到o的新对象
 * Object.create(null)会创建一个拥有空连接的对象，这个对象无法进行委托，instanceof只会返回false，，它完全不会受原型链干扰，所以比较适合做字典存储数据
 */
if(!Object.create) {
  Object.create = function(o) {
    function F(){}
    F.prototype = o
    return new F()
  }
}