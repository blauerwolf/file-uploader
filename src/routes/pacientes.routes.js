// RUTAS DE LOS PACIENTES

const router = require('express').Router()
const pacientesController = require('../controllers/pacientes.controller')

router.get('/', pacientesController.listar)
router.get('/:idPacientes', pacientesController.listarInfo)
router.post('/', pacientesController.crear)

module.exports = router