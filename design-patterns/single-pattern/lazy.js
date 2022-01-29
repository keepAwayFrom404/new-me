// 创建实例对象
const createLoginLayer = function() {
  const div = document.createElement('div')
  div.innerHTML = '我是登陆浮窗'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}
// 管理单例
const getSingle = function(fn) {
  let res
  return function() {
    return res || (res = fn.apply(this, arguments))
  }
}

const createSingleLoginLayer = getSingle(createLoginLayer)

document.getElementById('loginBtn').onclick = function() {
  const loginLayer = createSingleLoginLayer()
  loginLayer.style.display = 'block'
}