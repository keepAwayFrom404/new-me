'use strict';
const { Controller } = require('egg');

class PostController extends Controller {
  async post() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: ctx.request.body
    };
  }
}

module.exports = PostController;
