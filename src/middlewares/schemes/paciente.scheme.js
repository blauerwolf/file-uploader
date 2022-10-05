const Joi = require('joi')

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    medicoId: Joi.number().required(),
    dni: Joi.number().required(),
    email: Joi.string().email().optional(),
    nacimiento: Joi.date().required(),
})

// Pido un mínimo de 1 campo a actualizar
let actualizarPaciente = Joi.object({
    nombre: Joi.string().optional(),
    apellido: Joi.string().optional(),
    email: Joi.string().optional(),
    obra_social: Joi.string().optional(),
    nacimiento: Joi.date().optional(),
}).min(1)

module.exports = {
    crearPaciente,
    actualizarPaciente,
}