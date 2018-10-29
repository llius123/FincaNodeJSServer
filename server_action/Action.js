var {actions} = require('../server_models/Model');

module.exports.factory_action = function (action,data){
    switch (action) {
        case actions.CREATE: 
            return data;
            break;
        default:
            break;
    }
}
