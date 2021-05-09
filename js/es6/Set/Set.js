/**
 * 数组去重
 */
// 方法一
 let arr = [3, 5, 2, 2, 5, 5];
 let unique = [...new Set(arr)];
//方法二
 function dedupe(array) {
  return Array.from(new Set(array));
}
dedupe([1, 1, 2, 3]) 

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]); // Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x))); // set {2, 3}
// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x))); 

/**
 *  遍历操作同步改变Set结构
 * */ 
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2)); // set的值是2, 4, 6
// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2)); // set的值是2, 4, 6