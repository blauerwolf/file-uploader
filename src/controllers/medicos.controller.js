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
}