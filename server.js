var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}))
app.use(cors());

var {connection} = require('./server_config/config');

var { factory_action} = require('./server_action/Factory_Action');

//Ejemplo url: localhost:3000/?action=CREATE
app.get('/', function (req,res) {
    factory_action(res, req.query);
})

app.post('/', function (req, res) {
    factory_action(res, req.query, req.body);
    
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