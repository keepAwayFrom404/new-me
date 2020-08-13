// 代理服务器
const http = require("http");
// 第一步：接收客户请求
const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  if (request.method === "options") {
    response.end();
  }
  // 第二步：将请求转发给服务器
  const proxyRequest = http
    .request(
      {
        host: "127.0.0.1",
        port: 4000,
        method: request.method,
        headers: request.headers,
      },
      (serverResponse) => {
        // 第三步：收到服务器响应
        let body = "";
        serverResponse.on("data", (chunk) => {
          body += chunk;
        });
        serverResponse.on("end", () => {
          console.log("The data is" + body);
          // 第四步：将响应结果转发给浏览器
          response.end(body);
        });
      }
    )
    .end();
});

server.listen(3000, () => {
  console.log("The proxyServer is running at http://localhost:3000");
});
