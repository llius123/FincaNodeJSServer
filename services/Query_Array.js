var {validator} = require('./Validator');

module.exports.query_array = function (data){
    var array = [];
    var object = [];
    array = [];
    Object.entries(data).forEach(
        ([key, value]) => {
            if (key !== 'action' && key !== 'table') {
                object = [
                    key,
                    value
                ]
                array.push(object);
            }
        }
    );
    validator(array);
    return array;
}