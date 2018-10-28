var {actions} = require('../server_models/Model');

module.exports.action = function (action,data){
    switch (action) {
        case actions.CREATE: 
            return data;
            break;
        default:
            break;
    }
}
