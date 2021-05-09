let eventEmit = {
  list: {},
  on(key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn)
  },
  emit() {
    const key = [].shift.call(arguments) // 改变了原素组
    const fns = this.list[key]
    if(!fns || !fns.length) return false
    fns.forEach(cb => {
      cb.apply(this, arguments)
    })
  },
  off(key, fn) {
    let fns = this.list[key]
    if(!fns || !fns.length) return false
    if(!fn) {
      fns && (fns.length = 0)
    } else {
      fns.forEach((cb, i) => {
        if(cb === fn) {
          fns.splice(i, 1)
        }
      })
    }
  }
}

// 测试用例
function cat() {
  console.log('一起喵喵喵');
}
function dog() {
  console.log('一起旺旺旺');
}

eventEmit.on('pet', data => {
  console.log('接收数据');
  console.log(data);
});
eventEmit.on('pet', cat);
eventEmit.on('pet', dog);
// 取消dog方法的订阅
eventEmit.off('pet', dog);
// 发布
eventEmit.emit('pet', ['二哈', '波斯猫']);
