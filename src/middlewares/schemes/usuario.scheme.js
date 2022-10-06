const Joi = require('joi')

let crearUsuario = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().required(),
    perfilId: Joi.number().required(),
    password: Joi.string().required().default(null),
})

// Pido un mínimo de 1 campo a actualizar
let actualizarUsuario = Joi.object({
    nombre: Joi.string().optional(),
    apellido: Joi.string().optional(),
    email: Joi.string().email().optional(),
    perfilId: Joi.number().optional(),
    password: Joi.string().optional(),
}).min(1)

module.exports = {
    crearUsuario,
    actualizarUsuario,
}