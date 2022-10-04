const router = require('express').Router()
const usuarioController = require('../controllers/usuario.controller')
const validate = require('../middlewares/validate')
const usuarioScheme = require('../middlewares/schemes/usuario.scheme')

router.get('/', usuarioController.listar)
router.get('/:idUsuario', usuarioController.listarInfo)
router.post('/', validate(usuarioScheme.crearUsuario), usuarioController.crear)
router.put('/:idUsuario', validate(usuarioScheme.actualizarUsuario), usuarioController.actualizar)
router.delete('/:idUsuario', usuarioController.borrar)

module.exports = router