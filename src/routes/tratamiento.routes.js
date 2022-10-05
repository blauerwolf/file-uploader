// RUTAS DE LOS TRATAMIENTOS

const router = require('express').Router()
const tratamientoController = require('../controllers/tratamiento.controller')
const validate = require('../middlewares/validate')
const tratamientoScheme = require('../middlewares/schemes/tratamiento.scheme')

router.get('/', tratamientoController.listar)
router.get('/:idTratamiento', tratamientoController.listarInfo)
router.post('/', validate(tratamientoScheme.crearTratamiento), tratamientoController.crear)
router.put('/:idTratamiento', validate(tratamientoScheme.actualizarTratamiento), tratamientoController.actualizar)

module.exports = router