const { Router } = require('express')

const pacientesRoutes = require('./pacientes.routes')
const medicosRoutes = require('./medicos.routes')
const tratamientosRoutes = require('./tratamientos.routes')

const rutas_init = () => {
    const router = Router()
    router.use('/pacientes', pacientesRoutes)
    router.use('/medicos', medicosRoutes)
    router.use('/tratamientos', tratamientosRoutes)

    return router
}

module.exports = { rutas_init }