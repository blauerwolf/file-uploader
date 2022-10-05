const models = require('../database/models/index')
const errors = require('../const/errors')
const { NOW, fn, Op } = require('sequelize')

module.exports = {
    listar: async (req, res, next) => {
        try {
            const tratamientos = await models.tratamiento.findAll({
                include: [{
                    model: models.paciente_tratamiento,
                    include: [{
                        model: models.paciente,
                        model: models.tratamiento,
                    }]
                }]
            })

            if (tratamientos.length == 0) return next(errors.SinResultadosError)

            res.json({
                success: true,
                data: {
                    tratamientos: tratamientos
                }
            })
        } catch (err) {
            return next(err)
        }
    },
    listarInfo: async (req, res, next) => {
        try {
            const tratamiento = await models.tratamiento.findOne({
                include: [{
                    model:models.paciente_tratamiento,
                    include: [{
                        model: models.paciente,
                        model: models.tratamiento
                    }]
                }],
                where: {
                    id: req.params.idTratamiento
                }
            })

            if (!tratamiento) return next(errors.TratamientoInexistente)

            res.json({
                success: true,
                data: {
                    tratamiento: tratamiento
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    crear: async (req, res, next) => {
        try {
            const paciente = await models.paciente.findOne({
                where: {
                    [Op.and]: [
                        { id: req.body.pacienteId },
                        { deletedAt: null}
                    ]
                }
            })

            if (!paciente) return next(errors.PacienteInexistente)

            const tratamiento = await models.tratamiento.create(req.body)
            const relacion = await models.paciente_tratamiento.create({
                pacienteId: paciente.id,
                tratamientoId: tratamiento.id
            })

            res.status(201).json({
                success: true,
                data: {
                    id: tratamiento.id,
                    idPaciente: paciente.id,
                    createdAt: tratamiento.createdAt
                }
            })
        } catch (err) {
            return next(err)
        }
    },
    actualizar: async (req, res, next) => {
        try {

            const existe = await models.tratamiento.findOne({
                where: {
                    id: req.params.idTratamiento
                }
            })

            if (!existe) return next(errors.TratamientoInexistente)

            const tratamiento = await models.tratamiento.update({
                descripcion: req.body.descripcion,
            }, {
                where: { id: req.params.idTratamiento },
                returning: true,
                plain: true, 
            })

            console.log(tratamiento[1].dataValues)

            res.json({
                success: true,
                data: {
                    id: req.params.idTratamiento,
                    updatedAt: tratamiento[1].dataValues.updatedAt
                }
            })



        } catch (err) {
            return next(err)
        }
    },
    borrar: async (req, res, next) => {
        try {
            const existe = await models.tratamiento.findOne({
                where: { id: req.params.idTratamiento }
            })

            if (!existe) return next(errors.TratamientoInexistente)

            const tratamiento = await models.tratamiento.update({
                deletedAt: fn('NOW')
            }, {
                where: { id: req.params.idTratamiento },
                returning: true,
                plain: true,

            })

            console.log(tratamiento[1].dataValues)

            res.json({
                success: true,
                data: {
                    id: req.params.idTratamiento,
                    deletedAt: tratamiento[1].dataValues.deletedAt
                }
            })
            
        } catch (err) {
            return next(err)
        }
    } 
}