const { dateFormate, htmlEscape, htmlUnEscape } = require('./node-tools')
const date = new Date()
console.log(dateFormate(date))
const htmlStr = '<h1 title="abc"><span>hahah&nbsp;</span></h1>'
const str = htmlEscape(htmlStr)
console.log(str)
const unStr = htmlUnEscape(str)
console.log(unStr)