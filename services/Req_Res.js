var res;
var req;
module.exports.getRes = function(){
    return res;
}

module.exports.getReq = function(){
    return req;
}

module.exports.setReqRes = function(request,response){
    res = request;
    res = response;
}