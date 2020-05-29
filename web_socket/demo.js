const WebSocketServer = require('ws').Server
const ws = new WebSocketServer({ port: 8080 })
ws.on('connection', function(ws) {
  console.log('=====server opened======');
  ws.on('message', function(msg) {
    console.log('Recived Msg: '+msg);
    ws.send('Server: I got it!')
  })
})
