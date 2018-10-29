var { validator } = require('./Validator');

var { getRes } = require('./Req_Res');

var { errorMsg } = require('../server_models/Model');

module.exports.query_array = function (data) {
    var array = [];
    var object = [];
    array = [];
    Object.entries(data).forEach(
        ([key, value]) => {
            if (key !== 'action' && key !== 'table') {
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
        var res = getRes();
        res.send(errorMsg);
        res.end();
    }
}