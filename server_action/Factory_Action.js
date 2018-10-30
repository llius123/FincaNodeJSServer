var { actions } = require('../server_models/Model');
var { query_array } = require('../services/Query_Array');
var { factory_tables } = require('../server_action/Factory_Table');

module.exports.factory_action = function (query, body) {
    switch (query.action) {
        case actions.get:
            query_array(query);
            factory_tables(query.action, query.table, query);
            break;
        case actions.update:
            break;
        case actions.delete:
            break;
        case actions.insert:
            break;
        default:
            break;
    }
}
