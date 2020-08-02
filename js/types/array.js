const a = []
a[0] = 1
a[2] = 2
console.log(a.length);
delete a[0]
console.log(a.length); // delete 删除数组元素，length不变

console.log(a); // 0和1没被赋值，值为undefined与直接赋值undefined还是有区别的

a['foobar'] = 'foobar'
console.log(a.length);
a['12'] = 42
console.log(a.length); 
console.log(a);

// 类数组的转换
function foo() {
  const arr = Array.prototype.slice.call(arguments)
  arr.push('bam')
  console.log(arr);
}

foo('bar','baz')

