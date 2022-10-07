const models = require('../database/models/index')
const errors = require('../const/errors')
const { NOW, fn, Op } = require('sequelize')

module.exports = {
    listar: async (req, res, next) => {
        try {
            const pacientes = await models.paciente.findAll()

            if (pacientes.length == 0) return next(errors.SinResultadosError)

            res.json({
                success: true,
                data: {
                    pacientes: pacientes
                }
            })
        } catch (err) {
            return next(err)
        }
    },
    listarInfo: async (req, res, next) => {
        try {
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                },
                include: [{
                    model: models.paciente_medico,
                    include: [{
                        model: models.medico
                    }],
                }],
                include: [{
                    model: models.paciente_tratamiento,
                    include: [{
                        model: models.tratamiento
                    }],
                }],
            })

            if (!paciente) return next(errors.PacienteInexistente)

            res.json({
                success: true,
                data: {
                    paciente: paciente
                }
            })
        } catch (err) {
            return next(err)
        }
    },
    crear: async (req, res, next) => {
        try {
            const paciente = await models.paciente.create(req.body)
            const medico = await models.medico.findOne({
                where: {
                    [Op.and]: [
                        { id: req.body.medicoId },
                        { deletedAt: null}
                    ]
                }
            })

            if (!medico) return next(errors.MedicoInexistente)

            const relacion = await models.paciente_medico.create({
                pacienteId: paciente.id,
                medicoId: req.body.medicoId
            })

            res.status(201).json({
                success: true,
                data: {
                    id: paciente.id,
                    createdAt: paciente.createdAt
                }
            })
        } catch (err) {
            return next(err)
        }
    },
    actualizar: async (req, res, next) => {
        try {
            const existe = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                }
            })

            if (!existe) return next(errors.PacienteInexistente)

            const paciente = await models.paciente.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                nacimiento: req.body.nacimiento,
                especialidad: req.body.especialidad,
                obra_social: req.body.obra_social,
            }, {
                where: { id: req.params.idPaciente },
                returning: true,
                plain: true,

            })

            console.log(paciente[1].dataValues)

            res.json({
                success: true,
                data: {
                    id: req.params.idPaciente,
                    updatedAt: paciente[1].dataValues.updatedAt
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    borrar: async (req, res, next) => {
        try {
            const existe = await models.paciente.findOne({
                where: { id: req.params.idPaciente }
            })

            if (!existe) return next(errors.PacienteInexistente)

            const paciente = await models.paciente.update({
                deletedAt: fn('NOW')
            }, {
                where: { id: req.params.idPaciente },
                returning: true,
                plain: true,

            })

            console.log(paciente[1].dataValues)

            res.json({
                success: true,
                data: {
                    id: req.params.idPaciente,
                    deletedAt: paciente[1].dataValues.deletedAt
                }
            })
            
        } catch (err) {
            return next(err)
        }
    } 
}