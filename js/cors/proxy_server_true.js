//后端服务器
const http = require('http')
const data = {title: 'lalala', password: 123}
const server = http.createServer((request, response) => {
  if(request.url === '/') {
    response.end(JSON.stringify(data))
  }
})

server.listen(4000, '127.0.0.1', () => {
  console.log('The server is running at http://127.0.0.1:4000')
})