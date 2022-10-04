const Joi = require('joi')

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    medicoId: Joi.number().required(),
    dni: Joi.number().required(),
    email: Joi.string().email().optional(),
})

let actualizarPaciente = Joi.object({
    nombre: Joi.string().optional(),
    apellido: Joi.string().optional(),
    email: Joi.string().optional(),
    obra_social: Joi.string().optional(),

})

module.exports = {
    crearPaciente,
    actualizarPaciente,
}