/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1659757520166_6981';

  // add your middleware config here
  config.middleware = [];

  // csrf
  config.security = {
    csrf: {
      enable: false
    }
  };

  config.view = {
    mapping: {
      '.html': 'ejs'
    }
  }

  // config.static = {
  //   prefix:'/asserts/'
  // }

  config.ejs = {
    // delimiter: '$'
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
