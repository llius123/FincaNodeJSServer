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

var {action} = require('./server_action/Action');

//Ejemplo url: localhost:3000/?action=CREATE
app.get('/', function (req,res) {
    res.send(action(req.query.action,null));
    res.end();
})

app.post('/', function (req, res) {
    res.send(action(req.query.action, req.body));
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