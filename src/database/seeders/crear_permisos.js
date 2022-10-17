// Seeder para cargar los permisos
// Nota sobre estructura:
// endpoint es el endpoin
// accion es la acción solicitada
// scope puede ser * (todo), self (solo las propias), !self(cualquiera menos las propias)
// perfilId puede ser 1,2,3 o 4 según la tabla perfil

'use strict'

const models = require('../models/index')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.permiso.findOrCreate({
                where: {
                    id: 1
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "listar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 2
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "listarInfo",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 3
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "crear",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 4
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "actualizar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 5
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "borrar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 21
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "listar",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 22
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "listarInfo",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 24
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "actualizar",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 48
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "subirArchivo",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 49
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "subirArchivo",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 51
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "descargarArchivo",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 52
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "descargarArchivo",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 53
                },
                defaults: {
                    endpoint: "/api/usuarios",
                    accion: "descargarArchivo",
                    perfilId: 3,
                }
            }),
        ])
    },
}