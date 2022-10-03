const models = require('../database/models/index')
const errors = require('../const/errors')

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
            const medico = await models.medico.create(req.body)

            res.json({
                success: true,
                data: {
                    id: medico.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },
}