var { actions } = require('../server_models/Model');
var { query_array } = require('../services/Query_Array');
var { factory_tables } = require('../server_action/Factory_Table');
var { getRes, getReq } = require('../services/Req_Res');


module.exports.factory_action = function (query, body) {
    var error = '';
    switch (query.actions) {
        case actions.get:
            if (query_array(query) === true) {
                factory_tables(query.actions, query.table, query);
            } else {
                enviarErrorMsg(query_array(query));
            }
            break;
        case actions.update:
            if (query_array(query) === true) {
                if (query_array(body) === true) {
                    factory_tables(query.actions, query.table, body);
                } else {
                    enviarErrorMsg(query_array(body));
                }
            }else{
                enviarErrorMsg(query_array(query));
            }
            break;
        case actions.delete:
            if (query_array(query) === true){
                factory_tables(query.actions, query.table, query);
            }else{
                enviarErrorMsg(query_array(query));
            }
            break;
        case actions.insert:
            if (query_array(query) === true){
                if (query_array(body) === true){
                    factory_tables(query.actions, query.table, body);
                }else{
                    enviarErrorMsg(query_array(body));
                }
            }else{
                enviarErrorMsg(query_array(query));
            }
            break;
        default:
            getRes().send({ status: 500, msg: `No existe la accion: ${query.actions} ` });
            break;
    }
}

function enviarErrorMsg(error) {
    getRes().send(error);
}