module.exports = {
  myForEach: function(arr, cb) {
    let i = -1
    const len = arr.length
    while(++i < len) {
      cb(arr[i], i)
    }
    return arr
  },
  getType: function (target) {
    return Object.prototype.toString.call(target).slice(8, -1);
  },
  isObject: function (target) {
    return typeof target === 'object' && target !== null
  },
  getOriginInstance: function(target) {
    const Cort = target.constructor
    return new Cort()
  }
}