'use strict'

const { UsuarioInexistente } = require("../../const/errors")
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('usuario', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            defaultValue: bcrypt.hashSync('password', 10),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at'
        },
    }, { paranoid: true,
        freezeTableName: true    
    })

    Usuario.associate = models => {
        Usuario.belongsTo(models.perfil)
    }

    return Usuario
}