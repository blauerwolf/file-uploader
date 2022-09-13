module.exports = {
    listar: async (req, res) => {
        try {
            res.json({
                message: 'Listado de médicos'
            })
        } catch (err) {
            console.log(err)
        }
    },
    listarInfo: async (req, res) => {
        try {
            res.json({
                message: 'Info del médico: ' + req.params.idMedicos,
            })
        } catch (err) {
            console.log(err)
        }
    },
    crear: async (req, res) => {
        console.log("Crear médico próximamente...")
        res.json({ message: 'Alta de médicos próximamente...'})

    }
}