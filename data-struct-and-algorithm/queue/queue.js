function Queue() {
  this.queueList = []
}
Queue.prototype = {
  enqueue(ele) {
    this.queueList.push(ele)
  },
  dequeue() {
    return this.queueList.shift()
  },
  front() {
    return this.queueList[0]
  },
  isEmpty() {
    return !!this.queueList.length
  },
  size() {
    return this.queueList.length
  },
  toString() {
    let result = ''
    while(this.queueList.length) {
      result = result + JSON.stringify(this.dequeue()) + ' '
    }
    return result
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue('123')
queue.enqueue(true)
queue.enqueue(null)
queue.enqueue(void 0)
queue.enqueue([1,{a:1},'123'])
queue.enqueue({b: void 0,c: 1})
console.log(queue.toString());

function passGame(data, num) {
  const queue = new Queue()
  for (let i = 0; i < data.length; i++) {
    queue.enqueue(data[i])
  }
  console.log(queue);
  while(queue.size() > 1) {
    for (let j = 0; j < num - 1; j++) { // 下标从0开始而不是从1开始
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  console.log(queue);
  return data.indexOf(queue.front())
}
console.log(passGame(['lilei','hanmeimei','jack','lucy','pig'], 3));

