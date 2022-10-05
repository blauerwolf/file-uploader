'use strict'

module.exports = (sequelize, DataTypes) => {
    let Paciente_Tratamiento = sequelize.define('paciente_tratamiento', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
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
            field: 'deleted_at',
        }
    }, {
        paranoid: true,
        freezeTableName: true,
    })
    
    Paciente_Tratamiento.associate = models => {
        Paciente_Tratamiento.belongsTo(models.paciente)
        Paciente_Tratamiento.belongsTo(models.tratamiento)
    }

    return Paciente_Tratamiento
}