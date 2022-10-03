const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports = {
    listar: async (req, res) => {
        try {
            res.json({
                message: 'Listado de tratamientos'
            })
        } catch (err) {
            console.log(err)
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