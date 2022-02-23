// {'失恋',  [findboy, drink]}
// 监听的目的 就是为了构造这样一个对象 一对多的关系    on

// 发布的时候 会让数组的函数依次执行    emit
// [findboy, drink]

// let EventEmitter = require('events');
// 这里用接下来我们写的
let EventEmitter = require('./events');
let util = require('util');

function Girl() {
}
// Girl继承EventEmitter上的方法
util.inherits(Girl, EventEmitter);  // 相当于Girl.prototype.__proto__ = EventEmitter.prototype
let girl = new Girl();
let drink = function (data) {
    console.log(data);
    console.log('喝酒');
};
let findboy = function () {
    console.log('交友');
};

girl.on('newListener', function (eventName) {
    // console.log('名称： ' + eventName);
});
girl.on('结婚', function() {});
girl.setMaxListeners(3);
console.log(girl.getMaxListeners());
girl.once('失恋', drink);       // {'失恋': [drink]}
girl.once('失恋', drink);       // {'失恋': [drink]}
girl.prependListener('失恋', function () {
    console.log('before');
});
girl.once('失恋', drink);       // {'失恋': [drink]}
girl.emit('失恋', '1');


function EventEmitter() {
  this._events = Object.create(null)
}
EventEmitter.defaultMaxListeners = 10
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
EventEmitter.prototype.eventNames = function() {
  return Object.keys(this._events)
}
EventEmitter.prototype.setMaxListeners = function(n) {
  this._count = n
}
EventEmitter.prototype.getMaxListeners = function() {
  return this._count ? this._count : this.defaultMaxListeners
}

EventEmitter.prototype.on = function(type, cb, flag) {
  if(!this._events) {
    this._events = Object.create(null);
  }
  if(type !== 'newListener') {
    this._events['newListener'] && this._events['newListener'].forEach(listener => {
      listener(type)
    })
  }

  if(this._events[type]) {
    if(flag) {
      this._events[type].unshift(cb)
    } else {
      this._events[type].push(cb)
    }
  } else {
    this._events[type] = [cb]
  }
  if(this._events[type].length === this.getMaxListeners()) {
    console.warn('警告-警告-警告');
  }
}
// 向前添加
EventEmitter.prototype.prependListener = function (type, cb) {
  this.on(type, cb, true);
};
EventEmitter.prototype.prependOnceListener = function (type, cb) {
  this.once(type, cb, true);
};

EventEmitter.prototype.once = function(type, cb, flag) {
  function wrap() {
    cb(...arguments)
    this.removeListener(type, wrap)
  }
  wrap.listen = cb
  this.on(type, wrap, flag)
}