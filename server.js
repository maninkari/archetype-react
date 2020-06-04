/* eslint-disable no-console */
const express = require('express')
// eslint-disable-next-line no-unused-vars
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/v1/method', function (req, res) {
  const var1 = req.query.var1
  let file = ''

  switch (var1) {
    case 'foo':
      file = 'foo.json'
      break
    case 'bar':
      file = 'bar.json'
  }

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Content-Type', 'application/json')

  return res.sendFile(path.join(__dirname, 'mockapi', 'method', file))
})

app.listen(process.env.PORT || 8080)
console.log('Mock server running on localhost port 8080')
