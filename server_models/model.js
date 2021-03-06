var actions = {
    insert: 'insert',
    delete: 'delete',
    update: 'update',
    get: 'get'
}

var tables = {
    action: 'action',
    usuario: 'usuario',
    actas: 'actas',
    factura: 'factura',
    incidencia: 'incidencia',
    noticia: 'noticia',
    tipo_factura: 'tipo_factura',
    tipo_usuario: 'tipo_usuario'
}

var usuario = {
    id: null,
    nombre: null,
    telefono: null,
    puerta: null,
    usuario: null,
    contrasenya: null,
    tipo_id: null
}

var acta = {
    id: null,
    archivo: null,
    fecha: null
}

var factura = {
    id: null,
    archivo: null,
    fecha: null,
    tipo: null
}

var incidencia = {
    id: null,
    puerta_local: null,
    email: null,
    telefono: null,
    descripcion: null
}

var noticia = {
    id: null,
    descripcion: null,
    fecha: null
}

var tipo_factura = {
    id: null,
    tipo: null
}

var tipo_usuario = {
    id: null,
    tipo: null
}

var validacion_model = {
    id: 'id',
    fecha: 'fecha',
    tipo: 'tipo',
    email: 'email'
    
}

var errorMsg = {
    status: null,
    msg: null
}

module.exports = {
    actions: actions,
    tables: tables,
    usuario: usuario,
    acta: acta,
    factura: factura,
    incidencia: incidencia,
    noticia: noticia,
    tipo_factura: tipo_factura,
    tipo_usuario: tipo_usuario,
    validacion_model: validacion_model,
    errorMsg: errorMsg
}