const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')
/**
 * 分析单个模块
 */
function getModuleInfo(file) {
  // 读取
  const body = fs.readFileSync(file, 'utf-8')

  // 转化语法树ast
  const ast = parser.parse(body, {
    sourceType: 'module'
  })

  // 收集依赖
  const deps = {}
  traverse(ast, {
    // visitor
    ImportDeclaration({node}) {
      const dirname = path.dirname(file)
      const abspath = './' + path.join(dirname, node.source.value)
      deps[node.source.value] = abspath
    }
  })

  // es6 转 es5
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })
  return {
    file,
    deps,
    code,
  }
}

/**
 * 模块解析
 * @param {String} file 
 */
function parseModules(file) {
  const entry = getModuleInfo(file)
  const temp = [entry] // 从入口开始的所有模块
  const depsGraph = {}

  getDeps(temp, entry)

  temp.forEach(info => [
    depsGraph[info.file] = {
      deps: info.deps,
      code: info.code
    }
  ])

  return depsGraph
}

function getDeps(temp, {deps}) {
  Object.keys(deps).forEach(key => {
    const child = getModuleInfo(deps[key])
    temp.push(child)
    getDeps(temp, child)
  })
}

function bundle(file) {
  const depsGraph = JSON.stringify(parseModules(file))
  return `(function (graph) {
    function require(file) {
      function absRequire(relPath) {
        return require(graph[file].deps[relPath])
      }
      var exports = {};
      (function (require, exports, code) {
        eval(code)
      })(absRequire, exports, graph[file].code)
      return exports
    }
    require('${file}')
  })(${depsGraph})`
}

const content = bundle('./src/index.js')
!fs.existsSync('./dist') && fs.mkdirSync('./dist')
fs.writeFileSync('./dist/bundle.js', content)