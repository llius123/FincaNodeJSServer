module.exports.query_array = function (data){
    var array = [];
    var object = [];
    array = [];
    Object.entries(data).forEach(
        ([key, value]) => {
            console.log(key, value)
            if (key !== 'action' && key !== 'table') {
                object = [
                    key,
                    value
                ]
                array.push(object);
            }
        }
    );
    return array;
}