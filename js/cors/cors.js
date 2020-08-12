const express = require('express')
const app = express()
const whiteList = ['http://localhost:3000','http://localhost:5500']
app.use(function(req, res, next) {
  const origin = req.headers.origin
  if(whiteList.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Headers', 'name')
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Max-Age', 6)
    res.setHeader('Access-Control-Expose-Headers', 'name')
    if(req.method === 'OPTIONS') {
      res.end()
    }
  }
  next()
})

app.put('/getData', function(req, res) {
  const data = {
    username: 'lijiahua',
    password: '123456'
  }
  console.log(req.headers);
  res.setHeader('name', 'lalalalalala')
  res.end(JSON.stringify(data))
})

app.get('/getData', function(req, res) {
  console.log(req.headers);
  res.end('hehe')
})

app.listen(4000)

console.log('cors server listen in port 4000.');