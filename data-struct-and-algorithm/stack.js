function Stack() {
  this.stackList = []
}
Stack.prototype = {
  push(val) {
    this.stackList.push(val)
  },
  pop() {
    return this.stackList.pop()
  },
  peek() {
    return this.stackList[this.stackList.length - 1]
  },
  isEmpty() {
    return !!this.stackList.length
  },
  size() {
    return this.stackList.length
  },
  toString() {
    let result = ''
    while(this.stackList.length) {
      result += JSON.stringify(this.stackList.pop()) + ' ' // 存在会把undefined字段转换调的问题
    }
    return result
  }
}
const a = new Stack()
a.push(1)
a.push('123')
a.push(true)
a.push(null)
a.push(void 0)
a.push([1,{a:1},'123'])
a.push({b: void 0,c: 1})
console.log(a.toString());

/**
 * 将十进制转换为二进制
 * @param Number
 * @return String
 */
function dec2bin(num) {
  let result = ''
  const stack = new Stack()
  while(num >= 2 || Math.floor(num) >= 1) {
    stack.push(Math.floor(num % 2))
    num = num / 2
  }
  console.log(stack);
  while(stack.stackList.length) {
    result+=stack.stackList.pop()
  }
  return result
}
console.log(dec2bin(255));