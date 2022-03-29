// 内部迭代器
function MyIteration(arr, callback) {
  for(let i = 0;i < arr.length;i ++) {
    callback(arr[i], i)
  }
}

MyIteration([1,2,3], function(v, i) {
  console.log(v, i)
})

// 外部迭代器
const Iterator = function(obj) {
  let current = 0

  const next = function() {
    current += 1
  }

  const isDone = function() {
    return current >= obj.length
  }

  const getCurrentItem = function() {
    return obj[current]
  }

  return {
    next,
    isDone,
    getCurrentItem,
    length: obj.length
  }
}

const compare = function(iterator1, iterator2) {
  if(iterator1.length !== iterator2.length) console.log('iterator1 和 iterator2不相等')
  while(!iterator1.isDone() && !iterator2.isDone()) {
    if(iterator1.getCurrentItem() !== iterator2.getCurrentItem()) throw new Error('iterator1 和 iterator2不相等')
    iterator1.next()
    iterator2.next()
  }
  console.log('iterator1 和 iterator2相等')
}

compare(Iterator([1,2,3]), Iterator([1,2,3]))