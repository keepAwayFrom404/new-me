'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/about.test.js', () => {
  it('should GET /about', async () => {
    return app.httpRequest()
      .get('/about')
      .expect(200)
      .expect('this is about page.');
  });
  it('should GET /getGrils', async () => {
    return app.httpRequest()
      .get('/getGrils')
      .expect(200)
      .expect('一大群美女正向你走来');
  });
});
