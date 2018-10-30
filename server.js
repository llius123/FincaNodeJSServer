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

var { setReqRes } = require('./services/Req_Res');

//Ejemplo url: localhost:3000/?action=CREATE
app.get('/', function (req,res) {
    setReqRes(req,res);
    factory_action(req.query);
})

app.post('/', function (req, res) {
    setReqRes(req, res);
    factory_action(req.query, req.body);
    
})

app.put('/', function (req, res) {
    setReqRes(req, res);
    factory_action(req.query, req.body);
})

app.delete('/', function (req, res) {
    setReqRes(req, res);
    factory_action(req.query, req.body);
})
app.listen(3000)