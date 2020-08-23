function foo() {
  try {
    return 42
  } finally {
    throw 111
  }
}
// console.log(foo());

for(let i = 0;i < 10;i ++) {
  try {
    continue
  } finally {
    console.log(i);
  }
}