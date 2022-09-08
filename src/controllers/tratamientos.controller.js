module.exports = {
    listar: async (req, res) => {
        try {
            console.log('Listado de tratamientos')
            res.json({
                message: 'Listado de tratamientos',
            })
        } catch (err) {
            console.log(err)
        }
    },
}