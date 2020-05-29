title: WebSocket初体验
speaker: 李加华
plugins:
    - echarts

<slide class="aligncenter">

# WebSocket初体验 {.text-landing.text-shadow}

By 李加华 {.text-intro} 

<slide :class="size-70">

## WebScoket {.aligncenter}

---

> “WebScoket是一种网络传输协议，可以在单个TCP连接上进行全双工通信，位于OSI模型的应用层。”
> ==维基百科==

<slide class="fullscreen">
:::column {.vertical-align}
![WebScoket与HTTP连接对比](http://www.ruanyifeng.com/blogimg/asset/2017/bg2017051502.png)

---
#### 特点：
1. 持久双向连接（解决连接只能由客户端发起的痛点）服务端连续状态变化只能轮询（重复请求头效率低，有延迟）获取，典型场景聊天社交软件
2. 建立在TCP协议之上，与HTTP有良好的兼容性，默认端口80和443，握手阶段采用HTTP协议，握手时不易被屏蔽，能够通过各种HTTP代理服务器
3. 数据格式比较轻量（头几百上千字节且重复到几个字节），性能开销小，通信高效，可以发送文本和二进制数据
4. 无同源限制，可以与任意服务器通信
:::

<slide class="fullscreen content-center">
<!-- :::column {.vertical-align} -->

## WebScoket使用{.aligncenter}

---
第一步：建立连接{.aligncenter} 

（1）客户端发送http请求与webscoket服务端协商升级协议，建立连接后按照webscoket协议交换数据
- Connection: Upgrade：表示要升级协议
- Upgrade: websocket：表示要升级到websocket协议。
- Sec-WebSocket-Version：13：表示websocket的版本。如果服务端不支持该版本，需要返回一个
Sec-WebSocket-Versionheader，里面包含服务端支持的版本号。
- Sec-WebSocket-Key：与后面服务端响应首部的Sec-WebSocket-Accept是配套的，提供基本的防护，比如恶意的连接，或者无意的连接 

（2）服务端响应协议升级
- Sec-WebSocket-Accep：根据客户端请求首部的Sec-WebSocket-Key计算出来
 
将Sec-WebSocket-Key跟258EAFA5-E914-47DA-95CA-C5AB0DC85B11拼接。
通过SHA1计算出摘要，并转成base64字符串。



<slide class="fullscreen content-center">
<!-- :::column {.vertical-align} -->

## WebScoket使用{.aligncenter}

---
第二步：数据交换{.aligncenter}  

基于数据帧传递（最小单位帧） 

client：将数据切分成多个帧发送到服务器，判断FIN=1是否接收完毕  
server：接收到数据帧进行拼接  
数据帧有很多个标志字段（FIN、opcode）可用于判断一条数据是否发送完毕

<slide class="fullscreen content-center">

```
0                   1                   2                   3
  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 +-+-+-+-+-------+-+-------------+-------------------------------+
 |F|R|R|R| opcode|M| Payload len |    Extended payload length    |
 |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
 |N|V|V|V|       |S|             |   (if payload len==126/127)   |
 | |1|2|3|       |K|             |                               |
 +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
 |     Extended payload length continued, if payload len == 127  |
 + - - - - - - - - - - - - - - - +-------------------------------+
 |                               |Masking-key, if MASK set to 1  |
 +-------------------------------+-------------------------------+
 | Masking-key (continued)       |          Payload Data         |
 +-------------------------------- - - - - - - - - - - - - - - - +
 :                     Payload Data continued ...                :
 + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
 |                     Payload Data continued ...                |
 +---------------------------------------------------------------+
```
<slide class="fullscreen content-center">
<!-- :::column {.vertical-align} -->

## WebScoket使用{.aligncenter}
---
第三步：维持连接{.aligncenter} 
- 心跳连接来维持，90秒未发送数据会关闭，在onclose和onerror中重新连接
```js
var heartCheck = {
    timeout: 60000,//60ms
    timeoutObj: null,
    reset: function(){
        clearTimeout(this.timeoutObj);
　　　　 this.start();
    },
    start: function(){
        this.timeoutObj = setTimeout(function(){
            ws.send("heartbeat");
        }, this.timeout)
    }
}

ws.onopen = function () {
   heartCheck.start();
};
ws.onmessage = function (event) {
    heartCheck.reset();
}
```
:::

<slide class="aligncenter">

## 建立连接
:::column

```html
<script>
    const ws = new WebSocket('ws://localhost:8080')
    ws.onopen = function(e) {
        console.log('Connection to server opened')
    }
    const app = new Vue({
        el: '#app',
        data() {
        return {
            msg: ''
        }
        },
        methods: {
        sendMessage() {
            ws.send(this.msg)
        }
        },
    })
</script>
```

---

```js
const WebSocketServer = require('ws').Server
const ws = new WebSocketServer({ port: 8080 })
ws.on('connection', function(ws) {
  console.log('client connected');
  ws.on('message', function(msg) {
    console.log('Recived Msg: '+msg);
  })
})
```
:::