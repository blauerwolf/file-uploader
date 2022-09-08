module.exports = {
    listar: async (req, res) => {
        try {
            res.json({
                message: 'Listar paciente 1'
            })
        } catch (err) {
            console.log(err)
        }
    },
    listarInfo: async (req, res) => {
        try {
            res.json({
                message: 'Listar paciente ' + req.params.idPacientes,
            })
        } catch (err) {
            console.log(err)
        }
    },
    crear: async (req, res) => {
        console.log("Crear próximamente...")

    }
}