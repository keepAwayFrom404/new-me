const MyModule = (function Manager() {
  let modules = {}
  function define(name, deps, impl) {
    for (let i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]]
    }
    modules[name] = impl.apply(impl, deps)
  }
  function get(name) {
    return modules[name]
  }
  return {
    define,
    get,
  }
})()

MyModule.define('foo', [], function() {
  function hello(name) {
    return 'hello:'+name
  }
  return {
    hello
  }
})
MyModule.define('bar', ['foo'], function(bar) {
  const hungry = 'hippo'
  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }
  return {
    awesome
  }
})


const foo = MyModule.get('foo')
console.log(foo.hello('hippo'));
const bar = MyModule.get('bar')
bar.awesome()