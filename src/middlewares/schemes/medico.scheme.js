const Joi = require('joi')

let crearMedico = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    dni: Joi.number().required(),
    email: Joi.string().email().optional(),

})

module.exports = {
    crearMedico
}