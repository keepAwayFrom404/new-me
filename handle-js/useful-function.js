/**存储型函数 */
const storeObj = {
  id: 1, // 标志回调函数唯一值
  cache: {}, // 存放回调函数
  add: function(fn) {
    if(!fn.id) {
      this.cache[this.id] = fn
      fn.id = this.id++
      console.log('add success~')
    } else {
      console.log('just can add once!')
    }
  }
}

function nijila() {
  console.log('i am nijila')
}

storeObj.add(nijila)
storeObj.add(nijila)

/**记忆型函数 */

