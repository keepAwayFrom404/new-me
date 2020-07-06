const app = require('express')()
app.listen(3000,()=>{
    console.log("服务开启在3000端口")
})

app.get('/categories', function (req, res) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.send('Hello World!');
});