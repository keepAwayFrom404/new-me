const fs = require('fs')
const http = require('http')
const glob = require('glob')
const path = require('path')

class UploadSourceMapWebpackPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.done.tap('upload-sourcemap-plugin', async status => {
      const list = glob.sync(path.join(status.compiler.outputOptions.path, `./**/*.{js.map,}`))
      for (const file of list) {
        await this.upload(this.options.uploadUrl, filename)
      }
    })
  }
  upload(url, file) {
    return new Promise(resolve => {
      console.log('uploadMap', file);
      const req = http.request(`${url}?name${path.basename(file)}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/octet-stream',
          Connection: 'keep-alive',
          'Transfer-Encoding': 'chunked',
        }
      })
      fs.createReadStream(file).on('data', chunk => {
        req.write(chunk)
      }).on('end', () => {
        req.end()
        resolve()
      })
    })
  }
}
module.exports = UploadSourceMapWebpackPlugin