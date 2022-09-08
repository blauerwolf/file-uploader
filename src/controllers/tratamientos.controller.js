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
}