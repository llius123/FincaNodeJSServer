var { actions } = require('../server_models/Model');
var { query_array } = require('../services/Query_Array');
var { factory_tables } = require('../server_action/Factory_Table');
var { getRes } = require('../services/Req_Res');

module.exports.factory_action = function (query, body) {
    switch (query.action) {
        case actions.get:
            query_array(query);
            factory_tables(query.action, query.table, query);
            break;
        case actions.update:
            query_array(body);
            factory_tables(query.action, query.table, body);
            break;
        case actions.delete:
            query_array(body);
            factory_tables(query.action, query.table, body);
            break;
        case actions.insert:
            query_array(body);
            factory_tables(query.action, query.table, body);
            break;
        default:
            getRes().send({ status: 500, msg: `No existe la accion: ${query.action} ` });
            getRes().end();
            break;
    }
}
