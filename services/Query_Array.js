var { validator } = require('./Validator');

var { getRes } = require('./Req_Res');

var { errorMsg } = require('../server_models/Model');

module.exports.query_array = function (data) {
    var array = [];
    var object = [];
    array = [];
    errorMsg = {
        status: 200,
        msg: null
    }
    Object.entries(data).forEach(
        ([key, value]) => {
            if (key !== 'actions' && key !== 'table') {
                object = [key, value]
                array.push(object);
            }
        }
    );
    var resultadoValidator = validator(array);
    var arrayMsgError = [];
    if (resultadoValidator !== true){
        for (i = 0; i < resultadoValidator.length; i++){
            if (resultadoValidator[i][0] !== true){
                arrayMsgError.push(resultadoValidator[i][0]);
            }
        }

        errorMsg = {
            status: 500,
            msg: arrayMsgError
        }
        return errorMsg;
    }
    return true;
}