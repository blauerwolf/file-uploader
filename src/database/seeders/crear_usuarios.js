// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "John",
                    apellido: "Doe",
                    email: "john.doe@email.com",
                    perfilId: 1,
                }
            }),
            models.usuario.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Solana",
                    apellido: "Peguez",
                    email: "email.de.mentiritas.2@email.com",
                    perfilId: 2,
                }
            }),
            models.usuario.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Dr.",
                    apellido: "Gomez",
                    email: "email.de.mentiritas@email.com",
                    perfilId: 3,
                }
            })
        ])
    },
};