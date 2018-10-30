var { tables } = require('../../server_models/Model');

module.exports.get = function (table, data) {
    return `SELECT * from ${table} WHERE id=${data.id}`;
}

module.exports.insert = function (table, data) {
    switch (table) {
        case tables.actas:
            return `INSERT INTO ${tables.actas} (archivo,fecha) VALUES(${data.archivo},${data.fecha})`;
        case tables.factura:
            return `INSERT INTO ${tables.factura} (archivo, fecha, tipo) VALUES(${data.archivo},${data.fecha}, ${data.tipo})`;
        case tables.incidencia:
            return `INSERT INTO ${tables.incidencia} (puerta_local, email, telefono, descripcion) VALUES(${data.puerta_local}, ${data.email}, ${data.telefono}, ${data.descripcion})`;
        case tables.noticia:
            return `INSERT INTO ${tables.noticia} (descripcion, fecha) VALUES (${data.descripcion}, ${data.fecha})`;
        case tables.tipo_factura:
            return `INSERT INTO ${tables.tipo_factura} (tipo) VALUES (${data.tipo})`;
        case tables.tipo_usuario:
            return `INSERT INTO ${tables.tipo_usuario} (tipo) VALUES (${data.tipo})`;
        case tables.usuario:
            return `INSERT INTO ${tables.usuario} (nombre,telefono,puerta,usuario,contrasenya,tipo_id) VALUES (${data.nombre},${data.telefono},${data.puerta},${data.usuario},${data.contrasenya},${data.tipo_id})`;
        default:
            break;
    }
}

module.exports.del = function (table, data){
    return `DELETE ${table} where id = ${data.id}`;
}