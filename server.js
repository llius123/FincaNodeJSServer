var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
  res.end();
})

app.listen(3000)