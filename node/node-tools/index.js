const dateFormat = require('./src/dateFormat')
const htmlFormat = require('./src/htmlFormat')

module.exports = {
  ...dateFormat,
  ...htmlFormat,
}