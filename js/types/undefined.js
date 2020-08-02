let a
console.log(typeof a);
console.log(typeof b); // 由于typeof的安全防范机制：作用在于判断一些值是否存在时不会报错

if(typeof b) {
  console.log('b done');
}