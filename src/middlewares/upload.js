
const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports = {
    fileExists: async (usuarioId, filename) => {
        const ar = await models.archivo_usuario.findOne({
            where: {
                usuarioId: usuarioId,
                original_name: filename,
            }
        })

        if (!ar) {
            return false
        } else {
            return true
        }
    },
}

