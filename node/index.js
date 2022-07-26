const fs = require('fs')
fs.writeFile('./test.txt','hello lijiahua', function (err){
  console.log(err, '123')
})