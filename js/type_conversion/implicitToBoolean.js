const a = 42
const b = 'abc'
let c
const d = null
if(a) {
  console.log('yep');
}

while(c) {
  console.log('nope, never me');
}

const e = d ? a : b

console.log(e);
if((a && d) || c) {
  console.log(`yep`);
}

// Symbol的转换坑: 隐式toString报错；显式或隐式toNumber都报错；显示或隐式toBoolean都为true
const f = Symbol('cool')
console.log(String(f));
const g = Symbol('not cool')
console.log(g + '');