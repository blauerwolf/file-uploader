const Joi = require('joi')

let crearMedico = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    dni: Joi.number().required(),
    email: Joi.string().email().optional(),

})

// Pido un mínimo de 1 campo a actualizar
let actualizarMedico = Joi.object({
    nombre: Joi.string().optional(),
    apellido: Joi.string().optional(),
    email: Joi.string().optional(),
    especialidad: Joi.string().optional(),
}).min(1)

module.exports = {
    crearMedico,
    actualizarMedico,
}