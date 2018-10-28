var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bitnami',
    database: 'fincaV2'
});

module.exports = {
    connection: connection
}