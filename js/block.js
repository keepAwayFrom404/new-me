try {
  var a = 111
} catch (error) {
  var a = 123
}
console.log(a);
const arr = [1,2,3]
const b = 2
switch (b) {
  case arr.includes(b):
    console.log('done');
    break;
  default:
    console.log('default');
    break;
}