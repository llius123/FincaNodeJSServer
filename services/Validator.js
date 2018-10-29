module.exports.validator = function(data){
    for (i = 0; i< data.length; i++) {
        switch (data[i][0]) {
            case 'id':
                console.log('hola desde validator');
                break;
        
            default:
                break;
        }
    }
}