const p = new Promise(() => {
  setTimeout(() => {
    throw new Error('123')
  }, 0);
})
p.catch(e => console.log(e))
