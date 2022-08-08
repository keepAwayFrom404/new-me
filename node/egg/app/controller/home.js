'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.html', {
      id: 7,
      name: 'lidan',
      age: 26,
      skills: ['吃饭','睡觉','打豆豆']
    });
  }
  async home() {
    const { ctx } = this;
    ctx.body = '<h1>我是首页</h1>';
  }
}

module.exports = HomeController;
