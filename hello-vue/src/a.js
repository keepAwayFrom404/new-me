const a = 'www.baidu.com'
const b = 2
function addB(val) {
  return b + val
}
const interval = setInterval(() => {
  console.log('done');
}, 1000);

export {
  a,
  b,
  addB,
  interval
}