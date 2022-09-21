'use strict'

module.exports = (sequelize, DataTypes) => {
    let Tratamiento = sequelize.define('tratamiento', {

    }, { paranoid: true,
        freezeTableName: true
    })

    return Tratamiento
}