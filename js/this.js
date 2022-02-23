/**
 * this的绑定规则
 * （1）默认绑定：非严格模式绑定在全局
 * （2）隐式绑定：绑定在调用对象，绑定在上一层或者最后一层对象
 * （3）硬绑定：绑定在指定的对象，apply传数组，call传单个参数，bind返回新函数传递单个参数
 * （4）new 绑定：绑定在生成的实例上
 * （5）箭头函数：绑定在定义时的环境
 */
function defaultBind() {
  console.log(this.a, 'defaultBind')
}
global.a = 1
defaultBind()

function hiddeBind() {
  console.log(this.a, 'hiddeBind')
}
const hiddenObj = {
  a: 2,
  hiddeBind
}
hiddenObj.hiddeBind()

function commonBind() {
  console.log(this.a, 'commonBind')
}
const commonObj = {
  a: 3,
}
commonBind.apply(hiddenObj)
commonBind.call(commonObj)
const commonBindFun = commonBind.bind(commonObj)
commonBindFun()

function NewBind() {
  this.a = 4
}
const newObj = new NewBind()
console.log(newObj.a, 'newBind')


/**
 * this绑定优先级
 * new > 显式绑定 > 隐式绑定 > 默认绑定
 */
const b = 1
function foo() {
  console.log(this.b)
}
const obj = {
  b: 2,
  foo
}
const obj2 = {
  b: 3
}
obj.foo.call(obj2) // 显示高于隐式

function foo2(b) {
  this.b = b
}
const obj3 = {
  foo2,
}
obj3.foo2(4)
const obj4 = new obj3.foo2(5)
console.log(obj3.b)
console.log(obj4.b) // new绑定高于隐式

const obj5 = {}
const foo3 = foo2.bind(obj5)
foo3(6)
const obj6 = new foo3(7)
console.log(obj5.b)
console.log(obj6.b)
