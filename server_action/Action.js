var {actions} = require('../server_models/Model');

module.exports.action = function (action){
    switch (action) {
        case actions.CREATE: 
            return 'hola desde crreate';
            break;
        default:
            break;
    }
}
