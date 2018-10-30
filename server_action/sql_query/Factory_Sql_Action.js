var { get, insert } = require('./Factory_Sql_Querys');

var { actions } = require('../../server_models/Model');
module.exports.factory_sql_action = function (action, table, data) {
    switch (action) {
        case actions.get:
            return get(table, data);
        case actions.insert:
            return insert(table, data);
    }
}