const express = require('express')
const router = require('./routes')
const myBodyParseMW = require('./custom-body-parse')
const app = express()
const cors = require('cors')
app.use(myBodyParseMW)
const mwA = function(req, res, next) {
  req.time = Date.now()
  console.log('中间件A触发了')
  next()
}

const mwB = function(req, res, next) {
  req.username = 'cadenli'
  console.log('中间件B触发了')
  next()
}
app.get('/api/jsonp', (req, res) => {
  const funcName = req.query.cb
  const data = {
    name: 'zhuzhu',
    age: 26
  }
  res.send(`${funcName}(${JSON.stringify(data)})`)
})
app.use(cors())
app.use(mwA)
app.use(mwB)

app.use('/api', router)
app.use('/files', express.static('public'))
app.use(function(err, req, res, next) {
  console.log(err, '发生错误啦')
  res.send('发生错误了!')
  next()
})
app.listen('80', () => {
  console.log('server in port 80')
})

