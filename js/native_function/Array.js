const a = new Array(3)
const b = [undefined, undefined, undefined]
const c = []
c.length = 3
console.log(a, b, c);
console.log(a.join('-'), b.join('-'));
console.log(a.map((v, i) => i));
console.log(b.map((v, i) => i));

function fakeJoin(arr, connector) {
  let str = ''
  for(let i = 0;i < arr.length; i++) {
    if(i > 0) {
      str += connector
    }
    if(arr[i] !== void 0) {
      str += arr[i]
    }
  }
  return str
}
console.log(fakeJoin(a, '-'));

const d = Array.apply(null, {length: 3})
console.log(d);