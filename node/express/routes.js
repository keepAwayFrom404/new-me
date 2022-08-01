const express = require('express')

const router = express.Router()

router.get('/user/:id', (req, res) => {
  throw new Error('123')
  console.log(req.time, req.username, 'req')
  const params = req.query
  const dParams = req.params
  res.send({...params, ...dParams})
})

router.post('/user', (req, res) => {
  res.send(req.body)
})

router.get('/data', (req, res) => {
  const query = req.query
  res.send({
    code: 200,
    msg: 'get请求成功',
    data: query
  })
})

router.post('/data', (req, res) => {
  const body = req.body
  res.send({
    code: 200,
    msg: 'post请求成功',
    data: body
  })
})

router.delete('/data', (req, res) => {
  const body = req.body
  res.send({
    code: 200,
    msg: 'delete请求成功',
    data: body
  })
})

module.exports = router