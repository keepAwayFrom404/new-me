'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/home', controller.home.home);
  router.get('/about', controller.about.index);
  router.get('/getGrils', controller.about.getGrils);
  router.get('/get1', controller.get.get1);
  router.get('/get2/:name/:age', controller.get.get2);
  router.post('/post', controller.post.post);
  router.get('/service', controller.service.service1);
  router.post('/add', controller.cookie.add);
  router.post('/del', controller.cookie.del);
  router.post('/edit', controller.cookie.edit);
  router.post('/show', controller.cookie.show);
};
