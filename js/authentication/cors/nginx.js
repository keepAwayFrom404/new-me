const express = require('express')

const app = express()
const router = express.Router()

router.get('/ok', function(req, res) {
  res.json({
    code: 200,
    msg: 'ok'
  })
})

router.get('/ok/son', function(req, res) {
  res.json({
    code: 200,
    msg: 'isokson'
  })
})
router.get('/ok2', function(req, res) {
  res.json({
    code: 200,
    msg: 'ok2'
  })
})

router.get('/no', function(req, res) {
  res.json({
    code: 200,
    msg: 'no'
  })
})

router.get('/no/son', function(req, res) {
  res.json({
    code: 200,
    msg: 'isnoson'
  })
})
router.get('/no2', function(req, res) {
  res.json({
    code: 200,
    msg: 'no2'
  })
})

app.use(router)
app.listen(3001, function() {
  console.log('listen in port 3001...');
})