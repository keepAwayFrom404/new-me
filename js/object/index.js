const a = /a/
console.log(typeof a)

const obj  ={}
Object.defineProperty(obj, 'a', {
  writable: true,
  configurable: false,
  enumerable: true,
  value: 2
})
Object.defineProperty(obj, 'a', {
  writable: false,
  configurable: false,
  enumerable: true,
  value: 2
})
obj.a = 3
console.log(obj.a)

// 对象迭代器
const arr = [2,3,4,5]
for (const v of arr) {
  console.log(v, 'arr ===>');
}

const obj2 = {
  a: 1,
  b: 2,
  c: 5
}
Object.defineProperty(obj2, Symbol.iterator, {
  enumerable: false,
  configurable: true,
  writable: false,
  value: function() {
    let idx = 0
    const ks = Object.keys(this)
    console.log(ks, 'ks');
    return {
      next: () => ({
        value: this[ks[idx++]],
        done: (idx > ks.length)
      })
    }
  }
})

for (const v of obj2) {
  console.log(v, 'arr ===>');
}