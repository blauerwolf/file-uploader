// RUTAS DE LOS TRATAMIENTOS

const router = require('express').Router()
const tratamientoController = require('../controllers/tratamiento.controller')
// const validate = require('../middlewares/validate')
// const tratamientoSchemes = require('../middleware/shemes/tratamiento.scheme')

router.get('/', tratamientoController.listar)
router.get('/:idTratamientos', tratamientoController.listarInfo)
router.post('/', tratamientoController.crear)
router.put('/:idTratamientos', tratamientoController.modificar)

module.exports = router