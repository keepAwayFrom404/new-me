const fs = require('fs')
const path = require('path')

const basicFilePath = path.join(__dirname, './index.html')
const writeBasicFilePath = './clock'
const regStyle = /<style>([\s\S]*)<\/style>/
const regScript = /<script>([\s\S]*)<\/script>/

fs.readFile(basicFilePath, 'utf8', function(err, data) {
  if(err) {
    return console.log(err)
  }
  resolveCss(data)
  resolveJs(data)
  resolveHtml(data)
})

/**处理css */
function resolveCss(data = '') {
  const cssText = data.match(regStyle)[1]
  const tempFilePath = path.join(__dirname, writeBasicFilePath, './index.css')
  fs.writeFile(tempFilePath, cssText, function(err) {
    if(err) {
      return console.log('resolveCss err:', err)
    }
    console.log('写入css成功！')
  })
}

/**处理js */
function resolveJs(data = '') {
  const cssText = data.match(regScript)[1]
  const tempFilePath = path.join(__dirname, writeBasicFilePath, './index.js')
  fs.writeFile(tempFilePath, cssText, function(err) {
    if(err) {
      return console.log('resolveJs err:', err)
    }
    console.log('写入js成功！')
  })
}

/**处理html */
function resolveHtml(data = '') {
  let result = data.replace(regStyle, "<style src='./index.css'></style>")
  result = result.replace(regScript, "<script src='./index.js'></script>")
  const tempFilePath = path.join(__dirname, writeBasicFilePath, './index.html')
  fs.writeFile(tempFilePath, result, function(err) {
    if(err) {
      return console.log('resolveHtml err:', err)
    }
    console.log('写入html成功！')
  })
}

