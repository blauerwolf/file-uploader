'use strict'

module.exports = (sequelize, DataTypes) => {
    let Paciente_Medico_Tratamiento = sequelize.define('paciente_medico_tratamiento', {
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
    Paciente_Medico_Tratamiento.associate = models => {
        Paciente_Medico_Tratamiento.belongsTo(models.paciente)
        Paciente_Medico_Tratamiento.belongsTo(models.medico)
        Paciente_Medico_Tratamiento.belongsTo(models.tratamiento)
    }

    return Paciente_Medico_Tratamiento
}