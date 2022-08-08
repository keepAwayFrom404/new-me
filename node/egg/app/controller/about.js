'use strict';
const { Controller } = require('egg');

class AboutController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'this is about page.';
  }
  async getGrils() {
    const { ctx } = this;
    await new Promise(res => {
      setTimeout(() => {
        res(ctx.body = '一大群美女正向你走来');
      }, 3000);
    });
  }
}

module.exports = AboutController;
