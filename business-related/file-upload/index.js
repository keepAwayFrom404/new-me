const app = require('http')
let server = app.createServer((req, res) => {
  console.log(res, req);
})

server.listen(3000,'127.0.0.1',()=>{
  console.log("服务器已经运行，请打开浏览，输入：http://127.0.0.1:3000/来访问")
})