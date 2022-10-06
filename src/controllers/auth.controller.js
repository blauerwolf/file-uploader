const models = require('../database/models/index')
const errors = require('../const/errors')
const bcrypt = require('bcryptjs')
const { NOW, fn, Op } = require('sequelize')

const signJWT = require('../middlewares/signJWT')

module.exports = {
    login: async (req, res, next) => {
        try {

            // Existe el usuario con el email registrado?
            const user = await models.usuario.findOne({
                where: {
                    email: req.body.email
                }
            })

            var passwordCoincide = false

            if (user) {
                passwordCoincide = bcrypt.compareSync(req.body.password, user.password)
            }

            if (!user || !passwordCoincide) {
                return next(errors.CredencialesInvalidas)
            }

            res.json({
                success: true,
                data: {
                    token: signJWT(user),
                    id: user.id,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    email: user.email,
                    perfilId: user.perfilId,
                }
            })
        } catch (err) {
            return next(err)
        }
    },
    registrarse: async (req, res, next) => {
        try {
            req.body.password = bcrypt.hashSync(req.body.password, 10)
            req.body.perfilId = null

            const existe =  await models.usuario.findOne({
                where: {
                    [Op.and]: [
                        { email: req.body.email },
                        { deletedAt: null}
                    ]
                }
            })

            if (existe) {
                return next(errors.UsuarioAlreadyExistsError)
            }

            const user = await models.usuario.create(req.body)

            res.json({
                success: true,
                data: {
                    id: user.id
                }
            })
        } catch(err) {
            return next(err);
        }
    }
}