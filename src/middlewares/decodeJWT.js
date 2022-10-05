const jwt = require('jsonwebtoken')
const errors = require('../const/errors')
const models = require('../database/models/index')
const moment = require('moment')
const globalConstants = require('../const/globalConstants')

module.exports = async function (req, res, next) {
    if (req.header('Authorization') && req.header('Authorization').split(' ').length > 1) {
        try {
            if (dataToken.exp <= moment().unix()) {
                return next(errors.SessionExpirada)
            }

            res.locals.token = dataToken

            const usuario = await models.usuario.findOne({
                where: {
                    id: dataToken.id
                }
            })

            if (!usuario) return next(errors.UsuarioNoAutorizado)

            res.locals.usuario = usuario

            next()

        } catch (err) {
            return next(errors.SessionExpirada)
        }
    } else {
        return next(errors.UsuarioNoAutorizado)
    }
}