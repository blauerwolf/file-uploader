const Joi = require('joi')

let crearMedico = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().optional(),

})

module.exports = {
    crearMedico
}