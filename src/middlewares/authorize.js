const models = require('../database/models/index')
const { NOW, fn, Op } = require('sequelize')

module.exports = async function (endpoint, accion, req, res, next) {

    try {
        res.locals.usuario
        const permiso = await models.permiso.findAll({
            where: {
                [Op.and]: [
                    { perfilId: res.local.usuario.perfilId },
                    { endpoint: endpoint },
                    { accion: accion },
                    { deletedAt: null }
                ]
            }
        })
    
        if (!permiso) return next(errors.NoAutorizado)
    
        next()

    } catch (err) {
        return next(err)
    }
}
