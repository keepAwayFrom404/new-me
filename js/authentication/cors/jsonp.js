const http = require('http')
const url = require('url')
const qs = require('querystring')
const serve = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url)
  const params = qs.parse(query)
  console.log(params);
  const data = {name: 'lijiahua', id: params.id, age: 24}
  if(params.callback) {
    const str = `${params.callback}(${JSON.stringify(data)})`
    res.end(str)
  } else {
    res.end('nothing')
  }
})

serve.listen(10010, () => {
  console.log('Server listen in port 10010...');
})