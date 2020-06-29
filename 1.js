const arr = [1,2,3]
const it = arr[Symbol.iterator]()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());