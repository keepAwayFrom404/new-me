const a = {}
const obj = new Proxy(a, {
  get: function(target, key, receiver) {
    console.log(`getting ${key}`);
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, value, receiver) {
    console.log(`setting ${key}`);
    return Reflect.get(target, key, value, receiver)
  }
})
a.a = 111
console.log(obj);
// ++obj.a
