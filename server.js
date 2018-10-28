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

//Creo el objeto conexion y el objeto cerrar conexcion
// var mysq_config = model.connect_disconnect;
// mysq_config = {
//     'connect': config.connection.connect(),
//     'disconnect': config.connection.end()
// }
// mysq_config.connect = config.connection.connect();
// mysq_config.disconnect = config.connection.end();

app.post('/', function (req, res) {
    console.log(req.body);
    res.send(req.body);
    res.end();
})

app.listen(3000)