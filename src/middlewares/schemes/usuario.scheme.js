const Joi = require('joi')

let crearUsuario = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().required(),
    perfilId: Joi.number().required(),
    password: Joi.string().min(6).required(),
})

// Pido un mínimo de 1 campo a actualizar
let actualizarUsuario = Joi.object({
    nombre: Joi.string().optional(),
    apellido: Joi.string().optional(),
    email: Joi.string().email().optional(),
    perfilId: Joi.number().optional(),
    password: Joi.string().min(6).optional(),
}).min(1)

let subirArchivo = Joi.object({
    codigo: Joi.string().optional(),
})

let descargarArchivo = Joi.object({
    nombre: Joi.string().required(),
})

module.exports = {
    crearUsuario,
    actualizarUsuario,
    subirArchivo,
    descargarArchivo,
}