
const models = require('../database/models/index')
const errors = require('../const/errors')

/*
module.exports = (req, res, next) => {
    try {
        console.log(res.locals.usuario.dataValues.id)
        console.log("archivo...")
        console.log(req.file)
        console.log("archivo...")
        next()
    } catch (err) {
        next(err)
    }
}
*/

module.exports = (usuarioId, file) => {
    return (req, res, next) => {
        let result = scheme.validate(req.body)

        if (result.error) {
            next(result.error)

        } else {
            next()
        }
    }
}

