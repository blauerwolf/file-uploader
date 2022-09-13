// RUTAS DE LOS MEDICOS

const router = require('express').Router()
const medicosController = require('../controllers/medicos.controller')

router.get('/', medicosController.listar)
router.get('/:idMedicos', medicosController.listarInfo)
router.post('/', medicosController.crear)

module.exports = router