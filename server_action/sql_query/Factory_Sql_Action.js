var { get } = require('./Factory_Sql_Querys');

module.exports.factory_sql_action = function (action, table, data) {
    switch (action) {
        case 'get':
            return get(table, data);
    }
}