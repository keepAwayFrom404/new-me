'use strict';
const { Controller } = require('egg');

class GetController extends Controller {
  async get1() {
    const { ctx } = this;
    ctx.body = ctx.query;
  }
  async get2() {
    const { ctx } = this;
    ctx.body = `name: ${ctx.params.name}, age: ${ctx.params.age}`;
  }
}

module.exports = GetController;
