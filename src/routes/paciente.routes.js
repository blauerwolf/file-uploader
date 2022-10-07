// RUTAS DE LOS PACIENTES

const router = require('express').Router()
const pacienteController = require('../controllers/paciente.controller')
const validate = require('../middlewares/validate')
const pacienteScheme = require('../middlewares/schemes/paciente.scheme')
const authorize = require('../middlewares/authorize')

router.get('/', authorize, pacienteController.listar)
router.get('/:idPaciente', authorize, pacienteController.listarInfo)
router.post('/', authorize, validate(pacienteScheme.crearPaciente), pacienteController.crear)
router.put('/:idPaciente', authorize, validate(pacienteScheme.actualizarPaciente), pacienteController.actualizar)
router.delete('/:idPaciente', authorize, pacienteController.borrar)

module.exports = router