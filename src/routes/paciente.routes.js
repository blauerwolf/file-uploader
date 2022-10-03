// RUTAS DE LOS PACIENTES

const router = require('express').Router()
const pacienteController = require('../controllers/paciente.controller')
// const validate = require('../middlewares/validate')
// const pacienteSchemes = require('../middleware/shemes/paciente.scheme')

router.get('/', pacienteController.listar)
router.get('/:idPaciente', pacienteController.listarInfo)
router.post('/', pacienteController.crear)

module.exports = router