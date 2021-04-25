function DoublyLinkList() {
  this.head = null 
  this.tail = null
  this.length = 0
}
function Node(data) {
  this.pre = null
  this.data = data
  this.next = null
}
DoublyLinkList.prototype = {
  append(element) {
    const node = new Node(element)
    if(this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      node.pre = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return true
  },
  insert(position, element) {
    if(position < 0 || position > this.length) return false
    
    const node = new Node(element)
    if(this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      if(position === 0) {
        node.next = this.head
        this.head.pre = node
        this.head = node
      } else if(position === this.length) {
        node.pre = this.tail
        this.tail.next = node
        this.tail = node
      } else {
        const tempNode = findPositionNodeHelp(position, this)
        node.next = tempNode
        node.pre = tempNode.pre
        tempNode.pre.next = node
        tempNode.pre = node
      }
    }
    this.length ++
    return true
  },
  get(position) {
    if(position < 0 || position > this.length - 1) return false
    const tempNode = findPositionNodeHelp(position, this)
    return tempNode.data
  },
  indexOf(element) {
    let tempNode = this.head
    let i = 0
    while(tempNode) {
      if(tempNode.data === element) return i
      tempNode = tempNode.next
      i ++
    }
    return -1
  },
  update(position, element) {
    if(position < 0 || position > this.length - 1) return false
    const tempNode = findPositionNodeHelp(position, this)
    tempNode.data = element
    return true
  },
  removeAt(position) {
    let delNode = null
    if(position < 0 || position > this.length - 1) return delNode
    if(this.length === 1) {
      this.tail = null
      this.head = null
    } else {
      if(position === 0) { // head.next不然修改head之后无法删除head.next的引用
        const temp = this.head.next
        delNode = this.head.data
        this.head.next.pre = null
        this.head.next = null
        this.head = temp
      } else if(position === this.length - 1) {
        delNode = this.tail.data
        const temp = this.tail.pre 
        this.tail.pre.next = null
        this.tail.pre = null
        this.tail = temp
      } else {
        const tempNode = findPositionNodeHelp(position, this)
        delNode = tempNode.data
        tempNode.pre.next = tempNode.next
        tempNode.next.pre = tempNode.pre
        tempNode.pre = null
        tempNode.next = null
      }
    }
    this.length --
    return delNode
  },
  remove(element) {
    const position = this.indexOf(element)
    return this.removeAt(position)
  },
  isEmpty() {
    return this.length === 0
  },
  size() {
    return this.length
  },
  toString() {
    return this.backwardString()
  },
  // 从后向前遍历输出
  forwardString() {
    let tempNode = this.tail
    let result = ''
    while(tempNode) {
      result += tempNode.data + ' '
      tempNode = tempNode.pre
    }
    return result
  },
  // 从前向后遍历输出
  backwardString() {
    let tempNode = this.head
    let result = ''
    while(tempNode) {
      result += tempNode.data + ' '
      tempNode = tempNode.next
    }
    return result
  }
}

function findPositionNodeHelp(position, data) {
  if(data.length / 2 > position) { // 正向查找
    let tempNode = data.head
    while(position > 0) {
      tempNode = tempNode.next
      position --
    }
    return tempNode
  } else { // 反向查找
    let tempNode = data.tail
    while(position < data.length - 1) {
      tempNode = tempNode.pre
      position ++
    }
    return tempNode
  }
}
let doublyLinkList = new DoublyLinkList()
doublyLinkList.append('lijiahua')
doublyLinkList.append('lidan')
doublyLinkList.append('libao')
doublyLinkList.append('libaobao')
doublyLinkList.insert(2, 'insert')
console.log(doublyLinkList.get(4), 'get ====>');
console.log(doublyLinkList.indexOf('lijiahua1'),'indexOf ====>');
doublyLinkList.update(0, 'lijiahua1')
console.log(doublyLinkList.removeAt(2), 'removeAt ====>');
console.log(doublyLinkList.remove('libaobao'), 'remove ====>');
console.log(doublyLinkList.toString(), 'toString ====>');