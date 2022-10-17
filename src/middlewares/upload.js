
const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports = (req, res, next) =>{
    try {
        console.log(res.locals.usuario.dataValues.id)
        next()
    } catch (err) {
        next(err)
    }
}

