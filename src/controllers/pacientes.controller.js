const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports = {
    listar: async (req, res) => {
        try {
            const pacientes = await models.paciente.findAll()

            res.json({
                success: true,
                data: {
                    usuarios: pacientes
                }
            })
        } catch (err) {
            console.log(err)
        }
    },
    listarInfo: async (req, res, next) => {
        const pacientes = await models.paciente.findOne({
            where: {
                id: req.params.idPacientes
            }
        })

        if (!pacientes) {
            return next(errors.PacienteInexistente)
        }

        try {
            res.json({
                success: true,
                data: {
                    paciente: pacientes
                }
                
            })
        } catch (err) {
            console.log(err)
        }
    },
    crear: async (req, res) => {
        console.log("Crear próximamente...")
        res.json({ message: 'Alta de pacientes próximamente...'})

    }
}