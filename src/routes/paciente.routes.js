// RUTAS DE LOS PACIENTES

const router = require('express').Router()
const pacienteController = require('../controllers/paciente.controller')
const validate = require('../middlewares/validate')
const pacienteScheme = require('../middlewares/schemes/paciente.scheme')

router.get('/', pacienteController.listar)
router.get('/:idPaciente', pacienteController.listarInfo)
router.post('/', validate(pacienteScheme.crearPaciente), pacienteController.crear)
router.put('/:idPaciente', validate(pacienteScheme.actualizarPaciente), pacienteController.actualizar)
router.delete('/:idPaciente', pacienteController.borrar)

module.exports = router