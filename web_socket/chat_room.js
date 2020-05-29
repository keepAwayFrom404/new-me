const uuid = require('node-uuid')
const WebScoketServer = require('ws').Server
const ws = new WebScoketServer({port: 8181})
let clients = []
function wsSend(type, client_uuid, nickname, message) {
  for (let i = 0; i < clients.length; i++) {
    const clientScoket = clients[i].ws;
    if(clientScoket.readyState === clientScoket.OPEN) {
      clientScoket.send(JSON.stringify({
        type,
        id: client_uuid,
        nickname,
        message
      }))
    }
  }
}
let clientIndex = 1
ws.on('connection', function(ws) {
  const client_uuid = uuid.v4()
  let nickname = `默认用户${clientIndex}`
  clientIndex+=1
  clients.push({id: client_uuid, ws, nickname})
  console.log(`client connected ${client_uuid}`);
  const connect_message = `${nickname} has connected`
  wsSend('notification', client_uuid, nickname, connect_message)
  ws.on('message', function(message) {
    console.log('Recived msg: ' + message);
    if(message.indexOf('/nick') === 0) {
      const nickname_arr = message.split(' ')
      if(nickname_arr.length>=2) {
        const old_nickname = nickname
        nickname = nickname_arr[1]
        const nickname_message = `Client ${old_nickname} changed to ${nickname}`
        wsSend('nick_update', client_uuid, nickname, nickname_message)
      }
    } else {
      wsSend('message', client_uuid, nickname, message)
    }
  })

  const closeScoket = function(customMessage = 'beybey') {
    for (let i = 0; i < clients.length; i++) {
      if(clients[i].id == client_uuid) {
        customMessage = customMessage?customMessage:`${nickname} has disconnected`
      }
      console.log(clients[i].id, client_uuid);
      wsSend('notification', client_uuid, nickname, customMessage)
      clients.splice(i, 1)
    }
  }
  
  ws.on('close', function(e) {
    console.log('=====e===',e);
    closeScoket()
  })
  process.on('SIGINT', function() {
    console.log('Closing Things');
    closeScoket('Server has disconnected')
    process.exit()
  })
})

