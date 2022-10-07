// RUTAS DE LOS MEDICOS

const router = require('express').Router()
const medicoController = require('../controllers/medico.controller')
const validate = require('../middlewares/validate')
const medicoScheme = require('../middlewares/schemes/medico.scheme')
const authorize = require('../middlewares/authorize')

router.get('/', authorize, medicoController.listar)
router.get('/:idMedico', authorize, medicoController.listarInfo)
router.post('/', authorize, validate(medicoScheme.crearMedico), medicoController.crear)
router.put('/:idMedico', authorize, validate(medicoScheme.actualizarMedico), medicoController.actualizar)
router.delete('/:idMedico', authorize, medicoController.borrar)

module.exports = router