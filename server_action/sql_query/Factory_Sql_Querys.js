var { tables } = require('../../server_models/Model');

module.exports.get = function (table, data) {
    return `SELECT * from ${table} WHERE id=${data.id}`;
}

module.exports.insert = function (table, data) {
    var str = `INSERT INTO ${table} `;
    switch (table) {
        case tables.actas:
            return `${str} (archivo,fecha) VALUES(${data.archivo},${data.fecha})`;
        case tables.factura:
            return `${str} (archivo, fecha, tipo) VALUES(${data.archivo},${data.fecha}, ${data.tipo})`;
        case tables.incidencia:
            return `${str} (puerta_local, email, telefono, descripcion) VALUES(${data.puerta_local}, ${data.email}, ${data.telefono}, ${data.descripcion})`;
        case tables.noticia:
            return `${str} (descripcion, fecha) VALUES (${data.descripcion}, ${data.fecha})`;
        case tables.tipo_factura:
            return `${str} (tipo) VALUES (${data.tipo})`;
        case tables.tipo_usuario:
            return `${str} (tipo) VALUES (${data.tipo})`;
        case tables.usuario:
            return `${str} (nombre,telefono,puerta,usuario,contrasenya,tipo_id) VALUES (${data.nombre},${data.telefono},${data.puerta},${data.usuario},${data.contrasenya},${data.tipo_id})`;
        default:
            break;
    }
}

module.exports.del = function (table, data){
    return `DELETE ${table} where id = ${data.id}`;
}

module.exports.update = function (table, data){
    var update = `UPDATE ${table}`;
    var where = `WHERE id = ${data.id}`;
    switch (table) {
        case tables.actas:
            return `${update} set archivo = ${data.archivo}, fecha = ${data.fecha} ${where}`;
        case tables.factura:
            return `${update} set archivo = ${data.archivo}, fecha = ${data.fecha}, tipo = ${data.tipo} ${where}`;
        case tables.incidencia:
            return `${update} set puerta_local = ${data.puerta_local}, email = ${data.email}, telefono = ${data.telefono}, descripcion = ${data.descripcion} ${where}`;
        case tables.noticia:
            return `${update} set descripcion = ${data.descripcion} , fecha = ${data.decha} ${where}`;
        case tables.tipo_factura:
            return `${update} set tipo = ${data.tipo} ${where}`;
        case tables.tipo_usuario:
            return `${update} set tipo = ${data.tipo} ${where}`;
        case tables.usuario:
            return `${update} set nombre = ${data.nombre},telefono = ${data.telefono},puerta = ${data.puerta},usuario = ${data.usuario},contrasenya = ${data.contrasenya},tipo_id = ${data.tipo_id}`;
        default:
            break;
    }
}