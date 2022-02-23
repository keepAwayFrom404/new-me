const strategies = {
  isNonEmpty: function(value, errMsg) {
    if(!value) {
      return errMsg
    }
  },
  minLength: function(value, len, errMsg) {
    if(value?.length < len) {
      return errMsg
    }
  },
  isMobile: function(value, errMsg) {
    if(!/^1[3|5|8][0-9]{9}$/.test(value)) {
      return errMsg
    }
  },
}

const Validate = function() {
  this.cache = []
}

Validate.prototype.add = function(dom, rules) {
  const self = this
  for (let i = 0, rule; rule = rules[i++];) {
    (function(rule) {
      const arr = rule.strategy.split(':')
      const errMsg = rule.errMsg
      self.cache.push(function() {
        const strategy = arr.shift()
        arr.unshift(dom.value)
        arr.push(errMsg)
        return strategies[strategy].apply(dom, arr)
      })
    })(rule)
  }
}

Validate.prototype.start = function() {
  for (let i = 0, validateFun; validateFun = this.cache[i++];) {
    const msg = validateFun();
    if(msg) return msg
  }
}

