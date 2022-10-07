// RUTAS DE LOS TRATAMIENTOS

const router = require('express').Router()
const tratamientoController = require('../controllers/tratamiento.controller')
const validate = require('../middlewares/validate')
const tratamientoScheme = require('../middlewares/schemes/tratamiento.scheme')
const authorize = require('../middlewares/authorize')

router.get('/', authorize, tratamientoController.listar)
router.get('/:idTratamiento', authorize, tratamientoController.listarInfo)
router.post('/', authorize, validate(tratamientoScheme.crearTratamiento), tratamientoController.crear)
router.put('/:idTratamiento', authorize, validate(tratamientoScheme.actualizarTratamiento), tratamientoController.actualizar)

module.exports = router