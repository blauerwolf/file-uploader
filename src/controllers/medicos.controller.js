module.exports = {
    listar: async (req, res) => {
        try {
            console.log('Listado de médicos')
            res.json({
                message: 'Listado de médicos',
            })
        } catch (err) {
            console.log(err)
        }
    },
}