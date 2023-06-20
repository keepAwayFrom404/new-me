// TODO：先发布后订阅，发布缓存；增加命名空间
let PubSub = (function(){
  
  PubSub = function() {
    const _listen = function(key, fn, cache) {
      if(cache[key]) cache[key].push(fn)
      else (cache[key] = [fn])
    }

    const _remove = function(key, cache, fn) {
      let curListenersList = cache[key]
      if(!curcacheList) return false
  
      if(!fn) cache[key] = null // 直接改变curListenersList为null是无效的，因为这时候curListenersList不指向listeners[key]了
      else {
        const curIdx = curListenersList.findIndex(item => item === fn)
        if(curIdx !== -1) curListenersList.splice(curIdx, 1)
      }
    }

    const _trigger = function(key, ...args) {
      if(!listeners[key]) return
      for (let i = 0; i < listeners[key].length; i++) {
        const fn = listeners[key][i];
        fn.apply(this, args)
      }
    }
  }

  return {
    listen,
    trigger,
    remove,
  }
})()

