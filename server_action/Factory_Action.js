var { actions } = require('../server_models/Model');
var { query_array } = require('../services/Query_Array');
var { factory_tables } = require('../server_action/Factory_Table');
var { getRes, getReq } = require('../services/Req_Res');

module.exports.factory_action = function (query, body) {
    var error = '';
    switch (query.actions) {
        case actions.get:
            error  = query_array(query);
            if(error.msg === null){
                factory_tables(query.actions, query.table, query);
            }else{
                enviarError(error);
            }
            break;
        case actions.update:
            error = query_array(query);
            if(error.msg === null){
                error = query_array(body);
                if(error.msg === null){
                    factory_tables(query.actions, query.table, body);
                }else{
                    enviarError(error);
                }
            }else{
                enviarError(error);
            }
            break;
        case actions.delete:
            error = query_array(query);
            if(error.msg === null){
                factory_tables(query.actions, query.table, query)
            }else{
                enviarError(error);
            }
            break;
        case actions.insert:
            error = query_array(query);
            if (error.msg === null) {
                error = query_array(body);
                if (error.msg === null) {
                    factory_tables(query.actions, query.table, body);
                } else {
                    enviarError(error);
                }
            } else {
                enviarError(error);
            }
            break;
        default:
            getRes().send({ status: 500, msg: `No existe la accion: ${query.actions} ` });
            break;
    }
}

function enviarError(data){
    getRes().send(data);
}
