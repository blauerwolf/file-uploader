// RUTAS DE LOS TRATAMIENTOS

const router = require('express').Router()
const tratamientosController = require('../controllers/tratamientos.controller')

router.get('/', tratamientosController.listar)
router.get('/:idTratamientos', tratamientosController.listarInfo)
router.post('/', tratamientosController.crear)
router.put('/:idTratamientos', tratamientosController.modificar)

module.exports = router