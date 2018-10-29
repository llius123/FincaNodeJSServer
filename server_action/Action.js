var { actions } = require('../server_models/Model');

var { factory_tables } = require('../server_action/Table');

module.exports.factory_action = function (res, query, body) {
    var array = [];
    var object = {key: null, value: null};
    switch (query.action) {
        case actions.get:
            array = [];
            Object.entries(query).forEach(
                ([key, value]) => {
                    console.log(key, value)
                    if(key !== 'action' && key !== 'table'){
                        object = [
                            key,
                            value
                        ]
                        array.push(object);
                    }
                }   
            );
            console.log(array);
            //factory_tables(query.action,query.table,);
            res.send();
            res.end();
            break;
        case actions.put:
            break;
        case actions.delete:
            break;
        case actions.create:
            break;
        default:
            break;
    }
}
