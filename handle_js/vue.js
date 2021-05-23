const Observer = function(data) {
  // 循环修改每个属性添加get和set
  for(let key in data) {
    defineReactive(data, key)
  }
}

const defineReactive = function(obj, key) {
  // 局部变量dep用于get、set内部调用
  const dep = new Dep()
  // 获取当前的值
  let val = obj[key]
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('in get');
      // 调用依赖收集中的addSub，用于收集当前属性与watcher中的依赖
      dep.depend()
      return val
    },
    set(newVal) {
      if(newVal === val) return
      val = newVal
      // 当值变化时需要通知依赖收集器，更新每个需要更新的watcher，每个需要更新通过dep.subs判断（暂时不懂）
      dep.notify()
    }
  })
}

const observe = function(data) {
  return new Observer(data)
}

const Vue = function(options) {
  const self = this
  // 将data赋值给this._data，源码用的proxy实现
  if(options && typeof options.data === 'function') {
    this._data = options.data.apply(self)
  }
  // 挂载函数
  this.mount = function() {
    new Watcher(self, self.render)
  }
  // 渲染函数
  this.render = function() {
    with(self) {
      _data.text
    }
  }
  observe(this._data)
}

const Watcher = function(vm, fn) {
  const self = this
  this.vm = vm
  // 将Dep.target指向自己
  Dep.target = this
  // 向Dep方法添加当前watcher
  this.addDep = function(dep) {
    dep.addSub(self)
  }
  // 更新方法，用于触发vm._render
  this.update = function() {
    console.log('in watcher update');
    fn()
  }
  // 这里首次触发vm._render，从而触发text的get，从而将当前的Watcher与Dep关联起来
  this.value = fn()
  // 这里清空Dep.target，为了防止notify触发时，不停绑定Watcher和Dep造成死循环
  Dep.target = null
}

// 依赖收集器
const Dep = function() {
  const self = this
  // 收集目标
  this.target = null
  // 存储通知器中需要收集的Watcher
  this.subs = []
  // 当有目标时绑定Dep与Watcher的关系
  this.depend = function() {
    if(Dep.target) {
      // 这里可以直接写self.addSub(Dep.target),没有这么写是想还原源码的过程
      Dep.target.addDep(self)
    }
  }
  // 为当前收集器添加Watcher
  this.addSub = function(watcher) {
    self.subs.push(watcher)
  }
  // 通知所有watcher，调用其update方法
  this.notify = function() {
    for(let i = 0; i < self.subs.length;i ++) {
      self.subs[i].update()
    }
  }
}

let commonData = {
  text: 'hello vue'
}
const vue = new Vue({
  data() {
    return commonData
  }
})
const vue2 = new Vue({
  data() {
    return commonData
  }
})

vue.mount()
vue2.mount()
vue._data.text = 'i can'