foo: for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if(i === j) continue foo
    if((i*j)%2 === 1) continue
    console.log(i, j);
  }
}