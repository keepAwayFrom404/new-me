function LinkList() {
  this.head = null
  this.length = 0
}
function Node(data) {
  this.data = data
  this.next = null
}
LinkList.prototype = {
  append(element) {
    const node = new Node(element)
    if(!this.head) {
      this.head = node
    } else {
      let tempNode = this.head
      while(tempNode.next) {
        tempNode = tempNode.next
      }
      tempNode.next = node
    }
    this.length++
    return true
  },
  insert(position, element) {
    if(position < 0 || position > this.length) return false
    
    const node = new Node(element)
    if(position === 0) {
      node.next = this.head
      this.head = node
    } else {
      let tempNode = this.head
      // 在需要插入的前一个停止
      for(let i = 0;i < position - 1;i ++) {
        tempNode = tempNode.next
      }
      node.next = tempNode.next
      tempNode.next = node
    }
    this.length ++
    return true
  },
  get(position) {
    if(position < 0 || position > this.length - 1) return false
    let tempNode = this.head
    while(position > 0) {
      tempNode = tempNode.next
      position--
    }
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
    let tempNode = this.head
    while(position > 0) {
      tempNode = tempNode.next
      position--
    }
    tempNode.data = element
    return true
  },
  removeAt(position) {
    let delNode = null
    if(position < 0 || position > this.length - 1) return delNode
    if(position === 0) {
      delNode = this.head.data
      this.head = this.head.next
      this.length -- 
      return delNode
    }
    let tempNode = this.head
    // 找到需要移除的前一项
    while(position > 1) {
      tempNode = tempNode.next
      position--
    }
    delNode = tempNode.next.data
    tempNode.next = tempNode.next.next
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
    let tempNode = this.head
    let result = ''
    while(tempNode) {
      result = result + JSON.stringify(tempNode.data) + ' '
      tempNode = tempNode.next
    }
    return result
  }
}
let linkList = new LinkList()
linkList.append('first')
linkList.append('second')
linkList.append('third')

linkList.append('fourth')
linkList.insert(0, 'insert one')
linkList.update(1,'first1')
console.log(linkList.isEmpty('fourth'));
console.log(linkList.toString());