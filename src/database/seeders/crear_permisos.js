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
                    endpoint: "usuarios",
                    accion: "listar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 2
                },
                defaults: {
                    endpoint: "usuarios",
                    accion: "listarInfo",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 3
                },
                defaults: {
                    endpoint: "usuarios",
                    accion: "crear",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 4
                },
                defaults: {
                    endpoint: "usuarios",
                    accion: "actualizar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 5
                },
                defaults: {
                    endpoint: "usuarios",
                    accion: "borrar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 6
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "listar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 7
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "listarInfo",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 8
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "crear",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 9
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "actualizar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 10
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "borrar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 11
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "listar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 12
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "listarInfo",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 13
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "crear",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 14
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "actualizar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 15
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "borrar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 16
                },
                defaults: {
                    endpoint: "tratamientos",
                    accion: "listar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 17
                },
                defaults: {
                    endpoint: "tratamientos",
                    accion: "listarInfo",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 18
                },
                defaults: {
                    endpoint: "tratamientos",
                    accion: "crear",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 19
                },
                defaults: {
                    endpoint: "tratamientos",
                    accion: "actualizar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 20
                },
                defaults: {
                    endpoint: "tratamientos",
                    accion: "borrar",
                    perfilId: 1,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 21
                },
                defaults: {
                    endpoint: "usuarios",
                    accion: "listar",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 22
                },
                defaults: {
                    endpoint: "usuarios",
                    accion: "listarInfo",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 23
                },
                defaults: {
                    endpoint: "usuarios",
                    accion: "crear",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 24
                },
                defaults: {
                    endpoint: "usuarios",
                    accion: "actualizar",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 25
                },
                defaults: {
                    endpoint: "usuarios",
                    accion: "borrar",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 26
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "listar",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 27
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "listarInfo",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 28
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "crear",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 29
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "actualizar",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 30
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "borrar",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 31
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "listar",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 32
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "listarInfo",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 33
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "crear",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 34
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "actualizar",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 35
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "borrar",
                    perfilId: 2,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 36
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "listar",
                    perfilId: 3,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 37
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "listarInfo",
                    perfilId: 3,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 38
                },
                defaults: {
                    endpoint: "medicos",
                    accion: "actualizar",
                    perfilId: 3,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 39
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "listar",
                    perfilId: 3,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 40
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "listarInfo",
                    perfilId: 3,
                }
            }),        
            models.permiso.findOrCreate({
                where: {
                    id: 41
                },
                defaults: {
                    endpoint: "tratamientos",
                    accion: "listar",
                    perfilId: 3,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 42
                },
                defaults: {
                    endpoint: "tratamientos",
                    accion: "listarInfo",
                    perfilId: 3,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 43
                },
                defaults: {
                    endpoint: "tratamientos",
                    accion: "crear",
                    perfilId: 3,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 44
                },
                defaults: {
                    endpoint: "tratamientos",
                    accion: "actualizar",
                    perfilId: 3,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 45
                },
                defaults: {
                    endpoint: "tratamientos",
                    accion: "borrar",
                    perfilId: 3,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 46
                },
                defaults: {
                    endpoint: "pacientes",
                    accion: "listarInfo",
                    perfilId: 4,
                }
            }),
            models.permiso.findOrCreate({
                where: {
                    id: 47
                },
                defaults: {
                    endpoint: "tratamientos",
                    accion: "listarInfo",
                    perfilId: 4,
                }
            }),
        ])
    },
}