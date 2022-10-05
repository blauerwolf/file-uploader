const Joi = require('joi')

let crearTratamiento = Joi.object({
    descripcion: Joi.string().required(),
    pacienteId: Joi.number().required(),
})

// Pido un mínimo de 1 campo a actualizar
let actualizarTratamiento = Joi.object({
    descripcion: Joi.string().optional(),
}).min(1)

module.exports = {
    crearTratamiento,
    actualizarTratamiento
}