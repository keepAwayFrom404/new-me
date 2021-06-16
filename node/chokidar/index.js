const chokidar = require('chokidar')
const path = require('path')
const projectPath = process.cwd()
const resolve = dir => path.resolve(projectPath, dir)

const watcher = chokidar.watch([resolve('test')],{})

watcher // 监听文件添加、变化、删除
  .on('add', dir => console.log(dir, 'add'))
  .on('change', dir => console.log(dir, 'change'))
  .on('unlink', dir => console.log(dir,'unlink'))