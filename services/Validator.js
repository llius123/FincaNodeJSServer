var { validacion_model } = require('../server_models/Model');

var regexOnlyNumber = /^$|^[0-9]*$/;
var regexDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

var arrayFinal = [];
var res = [];
module.exports.validator = function (data) {
    arrayFinal = [];
    for (i = 0; i < data.length; i++) {
        var obj = data[i][1];
        switch (data[i][0]) {
            case validacion_model.id:
                arrayFinal.push(regexTest(obj, regexOnlyNumber, validacion_model.id));
                break;
            case validacion_model.tipo:
                arrayFinal.push(regexTest(obj, regexOnlyNumber, validacion_model.tipo));
                break;
            case validacion_model.fecha:
                arrayFinal.push(regexTest(obj, regexDate, validacion_model.fecha));
                break;
            default:
                break;
        }
    }
    for(i = 0; i< arrayFinal.length; i++){
        if(arrayFinal[i][0] !== true){
            return arrayFinal;
        }
    }
    return true;
}

function regexTest(obj, regex, error) {
    res = [];
    if (regex.test(obj) && obj.length !== 0) {
        res = [regex.test(obj)];
    }else {
        res = [msgError(error)];
    }
    return res;
}

function msgError(data) {
    return `Error validando ${data}`;
}