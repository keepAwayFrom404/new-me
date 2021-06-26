const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const compilerSfc = require('@vue/compiler-sfc');
const compilerDom = require('@vue/compiler-dom');
const app = new Koa()
app.use(async ctx => {
  const {url,query} = ctx.request
  console.log('url:',url,'query:', query);
  if(url === '/') {
    ctx.type = 'text/html'
    let content = fs.readFileSync('./index.html', 'utf-8')
    content = content.replace('<script ', `
    <script>
      window.process  = {
        env: {
          NODE_ENV: 'dev'
        }
      }
    </script>
    <script 
    `)
    ctx.body = content
  } else if(url.endsWith('.js')) {
    const p = path.resolve(__dirname, url.slice(1))
    ctx.type = 'application/javascript'
    const content = fs.readFileSync(p, 'utf-8')
    ctx.body = rewriteImport(content)
  } else if(url.startsWith('/@modules/')) {
    // 找到第三方库对应的es入口给他
    const prefix = path.resolve(__dirname, url.replace('/@modules','node_modules'))
    const module = require(prefix + '/package.json').module
    const p = path.resolve(prefix, module)
    const content = fs.readFileSync(p, 'utf-8')
    ctx.type = 'application/javascript'
    ctx.body = rewriteImport(content) // 对于模块内部的第三方库路径再次替换
  } else if(url.endsWith('.css')) {
    const p = path.resolve(__dirname, url.slice(1))
    const file = fs.readFileSync(p, 'utf-8')
    const content = `
      const css = "${file.replace(/\n/g, '')}"
      let link = document.createElement('style')
      link.setAttribute('type', 'text/css')
      document.head.appendChild(link)
      link.innerHTML = css
      export default css
    `
    ctx.type = 'application/javascript'
    ctx.body = content
  } else if(url.indexOf('.vue') > -1) {
    // vue单文件组件
    const p = path.resolve(__dirname, url.split('?')[0].slice(1))
    const file = fs.readFileSync(p, 'utf-8')
    const {descriptor} = compilerSfc.parse(file)
    
    if(!query.type) {
      ctx.type = 'application/javascript'
      // 借用vue自带的compiler框架解析单文件组件，相当于vue-loader
      ctx.body = `
        ${rewriteImport(descriptor.script.content.replace('export default ', 'const __script = '))}
        import { render as __render } from '${url}?type=template'
        __script.render = __render
        export default __script
      `
    } else if(query.type === 'template') {
      // 模版内容
      const template = descriptor.template
      // 要在server把compiler做了
      const render = compilerDom.compile(template.content, {mode: 'module'}).code
      ctx.type = 'application/javascript'
      ctx.body = rewriteImport(render)
    }
  }
})
app.listen(8888,() => {
  console.log('server listen in 8888');
})


function rewriteImport(content) {
  return content.replace(/ from ['|"]([^'"]+)['|"]/g, function(s0, s1) {
    console.log('s',s0,s1);
    if(s1[0] !== '.' && s1[1] !== '/') {
      return ` from '/@modules/${s1}'`
    } else {
      return s0
    }
  })
}