const Joi = require('joi')

let crearTratamiento = Joi.object({
    descripcion: Joi.string().required(),
    pacienteId: Joi.number().required(),
})

let actualizarTratamiento = Joi.object({
    descripcion: Joi.string().optional(),
})

module.exports = {
    crearTratamiento,
    actualizarTratamiento
}