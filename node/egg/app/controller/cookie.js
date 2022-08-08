'use strict';
const { Controller } = require('egg');

class CookieController extends Controller {
  async add() {
    const { ctx } = this;
    ctx.cookies.set('name', 'cadenli', {
      maxAge: 2000,
      httpOnly: true,
      encrypt: true
    })
    
    ctx.body = {
      status: 200,
      msg: 'cookie添加成功！'
    }
  }
  async del() {
    const { ctx } = this;
    ctx.cookies.set('name', null)
    ctx.body = {
      status: 200,
      msg: 'cookie删除成功！'
    }
  }
  async edit() {
    const { ctx } = this;
    ctx.cookies.set('name', 'lizhuzhu')
    ctx.body = {
      status: 200,
      msg: 'cookie修改成功！'
    }
  }
  async show() {
    const { ctx } = this;
    const name = ctx.cookies.get('name', {
      encrypt: true
    })
    ctx.body = {
      status: 200,
      data: name,
      msg: 'cookie查询成功！'
    }
  }
}

module.exports = CookieController;
