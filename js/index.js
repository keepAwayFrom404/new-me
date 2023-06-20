function myForEach(arr, callback, breakFun) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    callback.call(item, i)
  }
}

const data = [{name: 'cadenli'}, {name: 'lidan'},{name: 'liqiaoqiao'}]

myForEach(data, function(i){
  if(data[i] === this) console.log(this, 'i ===>')
  if(i === 0) return;
})