const Joi = require('joi')

const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const registrarse = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

module.exports = {
    login,
    registrarse,
}