function observe(data) {
  if(!data || typeof data !== 'object') return
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key])
  })
}

function defineReactive(data, key, val) {
  var dep = new Dep()
  observe(val)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      Dep.target && dep.addSub(Dep.target)
      return val
    },
    set(newVal) {
      if(val === newVal) return
      val = newVal
      console.log('监听到值变化：'+val+'======>'+newVal);
      dep.notify()
    }
  })
}

function Dep() {
  this.subs = []
}
Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub)
  },
  notify() {
    this.subs.forEach(function(sub) {
      sub.update()
    })
  }
}

const data = {
  name: 'lilei'
}
observe(data)
data.name = 'hanmeimei'