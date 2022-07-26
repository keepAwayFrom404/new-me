const fs = require('fs')
fs.readFile(__dirname+'/score.txt','utf8', function(err, data) {
  if(err) {
    return console.log(`[err]: ${err}`)
  }
  const formatData = data.split(' ').map(item => item.replace('=','：')).join('\n')
  fs.writeFile(__dirname+'/score-format.txt',formatData,function(err) {
    if(err) {
      return console.log(`[err]: ${err}`)
    }
  })
})