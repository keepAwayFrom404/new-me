const anotherObject = {

}
Object.defineProperty(anotherObject, 'a', {
  enumerable: true,
  configurable: true,
  set: function(val) {
    console.log(val);
  }
})
const myObject = Object.create(anotherObject)

function Foo(name) {
  this.name = name
}
Foo.prototype.getName = function() {
  return this.name
}
function Bar(name, label) {
  Foo.call(this,name)
  this.label = label
}
Bar.prototype = Object.create(Foo.prototype)
Bar.prototype.myLabel = function() {
  return this.label
}
const a  = new Bar('a', 'obj a')
console.log(a.myLabel());