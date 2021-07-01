'use strict'
const Controller = require('egg').Controller
const { getOriginSource } = require('../utils/sourcemap')
const fs = require('fs')
const path = require('path')

class MonitorController extends Controller {
  async index() {
    const { ctx } = this
    const { info } = ctx.query
    const json = JSON.parse(Buffer.from(info, 'base64').toString('utf-8'))
    console.log('fronterror:', json)
    ctx.getLogger('frontendLogger').error(json)
    ctx.body = ''
  }
  async upload() {
    const { ctx } = this
    const stream = ctx.req
    const filename = ctx.query.name
    const dir = path.join(this.config.baseDir, 'uploads')
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    const target = path.join(dir, filename)
    const writeStream = fs.createReadStream(target)
    stream.pipe(writeStream)
  }
}

module.exports = MonitorController
