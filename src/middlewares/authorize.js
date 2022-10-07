const models = require('../database/models/index')
const { NOW, fn, Op } = require('sequelize')
const errors = require('../const/errors')

module.exports = async function (req, res, next) {
    try {        
        const permiso = await models.permiso.findOne({
            where: {
                [Op.and]: [
                    { perfilId: res.locals.usuario.dataValues.perfilId },
                    { endpoint: req.baseUrl },
                    { accion: req.route.stack[1].name },
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