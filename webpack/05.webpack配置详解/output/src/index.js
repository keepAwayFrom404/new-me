import('./add.js').then(({default: add}) => {
  console.log(add(1,2));
})

console.log('index js done.');