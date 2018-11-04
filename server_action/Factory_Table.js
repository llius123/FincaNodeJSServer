var { tables } = require('../server_models/Model');
var {factory_sql_action} = require('./sql_query/Factory_Sql_Action');

module.exports.factory_tables = function (actions,table,data) {
    switch (table) {
        case tables.actas:
            consulta(factory_sql_action(actions, tables.actas, data));
            break;
        case tables.factura:
            consulta(factory_sql_action(actions, tables.factura, data))
            break;
        case tables.incidencia:

            break;
        case tables.noticia:

            break;
        case tables.tipo_factura:

            break;
        case tables.tipo_usuario:

            break;
        case tables.usuario:

            break;
        default:
            break;
    }
}

var { connection } = require('../server_config/Config');
var { getRes } = require('../services/Req_Res');
function consulta(sql){
    //connection.connect();
    connection.query(sql , function (error, results, fields) {
        if (error) getRes().send(error);
        getRes().send(results);
    })
    //connection.end();
}