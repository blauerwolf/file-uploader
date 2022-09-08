module.exports = {
    listar: async (req, res) => {
        try {
            console.log('Listar paciente 1')
            res.json({
                message: 'Listar paciente 1',
            });
        } catch (err) {
            console.log(err)
        }

    },
    listarInfo: async (req, res) => {
        try {
            res.json({
                message: 'Listar paciente ' + req.params.id,
            })
        } catch (err) {
            console.log(err)
        }
    },
}