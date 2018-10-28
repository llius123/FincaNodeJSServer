var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}))
app.use(cors());

var config = require('./server_config/config');
var model = require('./server_models/model');

var connection = config.connection;

app.get('/', function (req,res) {
    res.send('hola esto es un get');
    res.end();
})

app.post('/', function (req, res) {
    res.send('hola esto es un post');
    res.end();
})

app.put('/', function (req, res) {
    res.send('hola esto es un put');
    res.end();
})

app.delete('/', function (req, res) {
    res.send('hola esto es un delete');
    res.end();
})
app.listen(3000)