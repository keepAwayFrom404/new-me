'use strict';
const { Controller } = require('egg');

class ServiceController extends Controller {
  async service1() {
    const { ctx } = this;
    const res = await ctx.service.about.getGirls(7)
    ctx.body = res;
  }
}

module.exports = ServiceController;
