module.exports = {
    'ValidationError': {
        code: 1000,
        message: 'Error de validación.',
        response: 400
    },
    'FaltanCamposError': {
        code: 1001,
        message: 'Faltan parámetros necesarios.',
        response: 400
    },
    'SinResultadosError': {
        code: 1002,
        message: 'La consulta no tiene resultados.',
        response: 404
    },
    'UsuarioInexistente': {
        code: 4000,
        message: 'Usuario no encontrado.',
        response: 404
    },
    'UsuarioAlreadyExistsError': {
        code: 4001,
        message: 'Ya se encuentra registrado el email.',
        response: 409
    },
    'PerfilNotFoundError': {
        code: 5000,
        message: 'No existe el perfil solicitado.',
        response: 409
    },
    'CredencialesInvalidas': {
        code: 7000,
        message: 'Usuario o contraseña no válidos',
        response: 400
    },
    'UsuarioNoAutorizado': {
        code: 7001,
        message: 'Usuario no autorizado.',
        response: 403
    },
    'SesionExpirada': {
        code: 7002,
        message: 'Sesión expirada',
        response: 403
    },
    'NoAutorizado': {
        code: 7003,
        message: 'No autorizado.',
        response: 403
    },
    'ArchivoInexistente': {
        code: 8000,
        message: 'Archivo Inexistente.',
        response: 404
    },
    'FormatoNoPermitido': {
        code: 8001,
        message: 'Formato de archivo no permitido.',
        response: 409
    },
    'ArchivoAlreadyExists': {
        code: 8002,
        message: 'El archivo ya existe.',
        response: 409
    },
    'AccionNoPermitida': {
        code: 9000,
        message: 'Acción no permitida.',
        response: 409
    },
}