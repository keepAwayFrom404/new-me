const StackParser = require('../stackparser')
const { resolve } = require('path')
const { hasUncaughtExceptionCaptureCallback } = require('process')
const error = {
  atack: 'ReferenceError: xxx is not defined\n' + '    at http://localhost:7001/public/bundle.e7877aa7bc4f04f5c33b.js:1:1392',
  message: 'Uncaught ReferenceError: xxx is not defined',
  filename: 'http://localhost:7001/public/bundle.e7877aa7bc4f04f5c33b.js'
}

it('stackparser on-the-fly', async () => {
  const stackparser = new StackParser(__dirname)
  expect(originStack[0]).toMatchObject({
    source: 'webpack:///src/index.js',
    line: 24,
    column: 4,
    name: 'xxx',
  })
})