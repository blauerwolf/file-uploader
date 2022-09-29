// RUTAS DE LOS PACIENTES

const router = require('express').Router()
const pacientesController = require('../controllers/pacientes.controller')
// const validate = require('../middlewares/validate')
// const pacientesSchemes = require('../middleware/shemes/pacientes.scheme')

router.get('/', pacientesController.listar)
router.get('/:idPacientes', pacientesController.listarInfo)
router.post('/', pacientesController.crear)

module.exports = router