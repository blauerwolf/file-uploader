// RUTAS DE LOS MEDICOS

const router = require('express').Router()
const medicosController = require('../controllers/medicos.controller')
// const validate = require('../middlewares/validate')
// const medicosSchemes = require('../middleware/shemes/medicos.scheme')

router.get('/', medicosController.listar)
router.get('/:idMedicos', medicosController.listarInfo)
router.post('/', medicosController.crear)
// router.post('/:idMedicos', validate(medicosScheme.crearMedico), medicosController.crear)

module.exports = router