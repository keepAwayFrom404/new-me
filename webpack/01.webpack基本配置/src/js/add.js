function add(...arg) {
  return arg.reduce((p, c) => p + c, 0);
}
const mul = (a, b) => a * b;
export {
  add,
  mul,
};
