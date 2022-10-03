const Joi = require('joi')

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    medicoId: Joi.number().required(),
    dni: Joi.number().required(),
    email: Joi.string().email().optional(),
})

module.exports = {
    crearPaciente
}