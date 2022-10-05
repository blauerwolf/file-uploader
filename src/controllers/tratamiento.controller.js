const models = require('../database/models/index')
const errors = require('../const/errors')
const medico = require('../database/models/tratamiento')
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
    crear: async (req, res) => {
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

        if (typeof req.body.nombre == 'undefined')
          return res.status(400).send({ message: "Falta el atributo 'nombre' del tratamiento" })
        if (typeof req.body.descripcion == 'undefined')
          return res.status(400).send({ message: "Falta el atributo 'descripcion' del tratamiento"})

        nombre = req.body.nombre 
        descripcion = req.body.descripcion
        return res.json({ message: nombre, descripcion: descripcion })
    }
}