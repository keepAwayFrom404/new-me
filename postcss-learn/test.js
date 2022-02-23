'use strict';
const classNameReg = /( |\t)+\.gemini-([a-z0-9A-Z-]+)( |\t)+/g
var postcss = require('postcss');
var objectAssign = require('object-assign');

var defaults = {
  classNameReg
};

module.exports = postcss.plugin('clean-effect-class', function (options) {
  var opts = objectAssign({}, defaults, options);

  checkRegExpOrArray(opts, 'exclude');
  checkRegExpOrArray(opts, 'include');

  return function (css) {
    css.walkRules(function (rule) {
      // Add exclude option to ignore some files like 'node_modules'
      var file = rule.source && rule.source.input.file;

      if (opts.include && file) {
        if (Object.prototype.toString.call(opts.include) === '[object RegExp]') {
          if (!opts.include.test(file)) return;
        } else if (Object.prototype.toString.call(opts.include) === '[object Array]') {
          var flag = false;
          for (var i = 0; i < opts.include.length; i++) {
            if (opts.include[i].test(file)) {
              flag = true;
              break;
            }
          }
          if (!flag) return;
        }
      }

      if (opts.exclude && file) {
        if (Object.prototype.toString.call(opts.exclude) === '[object RegExp]') {
          if (opts.exclude.test(file)) return;
        } else if (Object.prototype.toString.call(opts.exclude) === '[object Array]') {
          for (var i = 0; i < opts.exclude.length; i++) {
            if (opts.exclude[i].test(file)) return;
          }
        }
      }

      rule.selector = rule.selector.replace(opts.classNameReg, ' ')
    });
  };
});

// 检查exclude和include输入是否合法
function checkRegExpOrArray(options, optionName) {
  var option = options[optionName];
  if (!option) return;
  if (Object.prototype.toString.call(option) === '[object RegExp]') return;
  if (Object.prototype.toString.call(option) === '[object Array]') {
    var bad = false;
    for (var i = 0; i < option.length; i++) {
      if (Object.prototype.toString.call(option[i]) !== '[object RegExp]') {
        bad = true;
        break;
      }
    }
    if (!bad) return;
  }
  throw new Error('options.' + optionName + ' should be RegExp or Array of RegExp.');
}

