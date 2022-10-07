const models = require('../database/models/index')
const errors = require('../const/errors')
const { NOW, fn, Op } = require('sequelize')

module.exports = {
    listar: async (req, res, next) => {
        try{
            const medicos = await models.medico.findAll({
                include: [{
                    model: models.paciente_medico,
                    include: [{
                        model: models.paciente
                    }]
                }]
            })

            if (medicos.length == 0) return next(errors.SinResultadosError)

            res.json({
                sucess: true,
                data: {
                    medicos: medicos
                }
            })

        } catch(err) {
            return next(err)
        }    
    },
    listarInfo: async (req, res, next) => {
        try {
            const medico = await models.medico.findOne({
                where: {
                    id: req.params.idMedico
                }
            })

            if (!medico) return next(errors.MedicoInexistente)

            res.json({
                success: true,
                data: {
                    medico: medico
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    crear: async (req, res, next) => {
        try {
            const existe =  await models.medico.findOne({
                where: {
                    [Op.and]: [
                        { dni: req.body.dni },
                        { deletedAt: null}
                    ]
                }
            })

            if (existe) {
                return next(errors.MedicoAlreadyExistsError)
            }

            const medico = await models.medico.create(req.body)

            res.status(201).json({
                success: true,
                data: {
                    id: medico.id,
                    createdAt: medico.createdAt
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    actualizar: async (req, res, next) => {
        try {
            const existe = await models.medico.findOne({
                where: {
                    id: req.params.idMedico
                }
            })

            if (!existe) return next(errors.MedicoInexistente)

            const medico = await models.medico.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                especialidad: req.body.especialidad,
            }, {
                where: { id: req.params.idMedico },
                returning: true,
                plain: true,

            })

            console.log(medico[1].dataValues)

            res.json({
                success: true,
                data: {
                    id: req.params.idMedico,
                    updatedAt:medico[1].dataValues.updatedAt
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    borrar: async (req, res, next) => {
        try {
            const existe = await models.medico.findOne({
                include: [{
                    model: models.paciente_medico,
                    include: [{
                        model: models.paciente
                    }]
                }],
                where: { id: req.params.idMedico }
            })

            if (!existe) return next(errors.MedicoInexistente)

            if (existe.paciente_medicos.length > 0) {
                return next(errors.MedicoConPacienteError)
            }

            const medico = await models.medico.update({
                deletedAt: fn('NOW')
            }, {
                where: { id: req.params.idMedico },
                returning: true,
                plain: true,

            })

            console.log(medico[1].dataValues)

            res.json({
                success: true,
                data: {
                    id: req.params.idMedico,
                    deletedAt:medico[1].dataValues.deletedAt
                }
            })
            
        } catch (err) {
            return next(err)
        }
    } 
}