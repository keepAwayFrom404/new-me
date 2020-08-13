const app  = require('express')()
const WebScoket = require('ws')
const wss = new WebScoket.Server({port: 4000})
const data = {
  username: 'server',
  password: 987654
}

wss.on('connection', function(ws) {
  ws.on('message', function(data) {
    console.log(JSON.parse(data));
    ws.send(JSON.stringify(data))
  })
})