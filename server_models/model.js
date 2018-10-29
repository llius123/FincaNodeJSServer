var actions = {
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    EDIT: 'EDIT'
}

var usuario = {
    id: null,
    nombre: null,
    telefono: null,
    puerta: null,
    usuario: null,
    contrasenya: null,
    tipo_id
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

module.exports = {
    actions: actions,
    usuario: usuario,
    acta: acta,
    factura: factura,
    incidencia: incidencia,
    noticia: noticia,
    tipo_factura: tipo_factura,
    tipo_usuario: tipo_usuario
}