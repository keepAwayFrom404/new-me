if(!Promise.all) {
  Promise.all = function(arr) {
    return new Promise((resolve, reject) => {
      if(!Array.isArray(arr)) return reject('arg accepts an array')// 实际上判断是否为iterator
  
      const args = Array.prototype.slice.call(arr)
      if(args.length === 0) return resolve([])
  
      let len = args.length
  
      function res(i, val) {
        try {
          if(val && (typeof val === 'object' || typeof val === 'function')) {
            const then = val.then
            if(typeof then === 'function') {
              then.call(val, function(val) {res(i, val)},reject)
              return
            }
          }
          args[i] = val
          if(--len === 0) {
            resolve(args)
          }
        } catch (error) {
          reject(error)
        }
      }
  
      for (let i = 0; i < args.length; i++) {
        res(i, args[i])
      }
    }) 
  }
}
