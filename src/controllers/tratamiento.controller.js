const models = require('../database/models/index')
const errors = require('../const/errors')
const medico = require('../database/models/tratamiento')
const { NOW, fn, Op } = require('sequelize')

module.exports = {
    listar: async (req, res, next) => {
        try {
            const tratamientos = await models.tratamiento.findAll()

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
    listarInfo: async (req, res) => {
        const tratamientos = await models.tratamiento.findAll()
        try {
            res.json({
                message: 'Info del tratamiento ' + req.params.idTratamientos,
            })
        } catch (err) {
            console.log(err)
        }
    },
    crear: async (req, res) => {
        console.log("Crear tratamiento próximamente...")
        res.json({ message: 'Crear tratamiento próximamente...' })

    },
    modificar: async (req, res) => {

        if (typeof req.body.nombre == 'undefined')
          return res.status(400).send({ message: "Falta el atributo 'nombre' del tratamiento" })
        if (typeof req.body.descripcion == 'undefined')
          return res.status(400).send({ message: "Falta el atributo 'descripcion' del tratamiento"})

        nombre = req.body.nombre 
        descripcion = req.body.descripcion
        return res.json({ message: nombre, descripcion: descripcion })
    }
}