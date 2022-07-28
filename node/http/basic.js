const http = require('http')
const path = require('path')
const fs = require('fs')
const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  const fPath = path.join(__dirname, url)
  fs.readFile(fPath, 'utf8', (err, data) => {
    if(err) return res.end('404 not found')
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(data)
  })
})

server.listen(80, () => {
  console.log('server listen in port 80')
})