const Joi = require('joi')

let crearUsuario = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().required(),
    perfilId: Joi.number().required(),
})

let actualizarUsuario = Joi.object({
    nombre: Joi.string().optional(),
    apellido: Joi.string().optional(),
    email: Joi.string().email().optional(),
    perfilId: Joi.number().optional(),
})

module.exports = {
    crearUsuario,
    actualizarUsuario,
}