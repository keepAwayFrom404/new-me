const PubSub = (function(){
  const listeners = {}
  const listen = function(key, fn) {
    if(listeners[key]) listeners[key].push(fn)
    else (listeners[key] = [fn])
  }
  const trigger = function(key, ...args) {
    if(!listeners[key]) return
    for (let i = 0; i < listeners[key].length; i++) {
      const fn = listeners[key][i];
      fn.apply(this, args)
    }
  }
  const remove = function(key, fn) {
    let curListenersList = listeners[key]
    if(!curListenersList) return false

    if(!fn) listeners[key] = null // 直接改变curListenersList为null是无效的，因为这时候curListenersList不指向listeners[key]了
    else {
      const curIdx = curListenersList.findIndex(item => item === fn)
      if(curIdx !== -1) curListenersList.splice(curIdx, 1)
    }
  }
  return {
    listen,
    trigger,
    remove,
  }
})()

PubSub.listen('squareMeter89', function(v) {
  console.log(`该户型已上线，价格是：${v}万元`)
})

const fn2 = function(v) {
  console.log(`一号用户你好，104方户型已上线，价格是：${v}万元`)
}

const fn3 = function(v) {
  console.log(`二号用户你好，104方户型已上线，价格是：${v}万元`)
}

PubSub.listen('squareMeter104', fn2)

PubSub.listen('squareMeter104', fn3)

setTimeout(() => {
  PubSub.trigger('squareMeter104', 400)
}, 3000);

setTimeout(() => {
  PubSub.trigger('squareMeter89', 300)
}, 3000);

PubSub.remove('squareMeter104')