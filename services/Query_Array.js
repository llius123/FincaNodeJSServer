var { validator } = require('./Validator');

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
    var msgError = [];
    if (resultadoValidator !== true){       
        for (i = 0; i < resultadoValidator.length; i++){
            if (resultadoValidator[i][0] !== true){
                msgError.push(resultadoValidator[i][0]);
            }
        }
        //Aqui tengo que llamar al metodo de errores y generar un error
        return msgError;
    }else{
        //Aqui llamaria al metodo de enviar datos correctos
        return array
    }
}