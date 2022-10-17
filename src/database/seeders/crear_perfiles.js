// Seeder para cargar los perfiles de los usuarios

'use strict'

const models = require('../models/index')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.perfil.findOrCreate({
                where: {
                    id: 1
                },
                defaults: {
                    descripcion: "Super Admin"
                }
            }),
            models.perfil.findOrCreate({
                where: {
                    id: 2
                },
                defaults: {
                    descripcion: "Operador de sistema"
                }
            }),
            models.perfil.findOrCreate({
                where: {
                    id: 3
                },
                defaults: {
                    descripcion: "Consulta"
                }
            }),
        ])
    },
}