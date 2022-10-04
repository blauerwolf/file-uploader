const Joi = require('joi')

let crearMedico = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    dni: Joi.number().required(),
    email: Joi.string().email().optional(),

})

let actualizarMedico = Joi.object({
    nombre: Joi.string().optional(),
    apellido: Joi.string().optional(),
    email: Joi.string().optional(),
    especialidad: Joi.string().optional(),
})

module.exports = {
    crearMedico,
    actualizarMedico,
}