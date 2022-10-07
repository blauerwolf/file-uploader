const router = require('express').Router()
const usuarioController = require('../controllers/usuario.controller')
const validate = require('../middlewares/validate')
const usuarioScheme = require('../middlewares/schemes/usuario.scheme')
const authorize = require('../middlewares/authorize')

var multer = require('multer')
const globalConstants = require('../const/globalConstants')

var upload = multer({
    dest: 'uploads/archivos-usuarios/',
    limits: { fileSize: globalConstants.MAX_FILE_SIZE }
})

router.get('/', authorize, usuarioController.listar)
router.get('/:idUsuario', authorize, usuarioController.listarInfo)
router.post('/', authorize, validate(usuarioScheme.crearUsuario), usuarioController.crear)
router.put('/:idUsuario', authorize, validate(usuarioScheme.actualizarUsuario), usuarioController.actualizar)
router.delete('/:idUsuario', authorize, usuarioController.borrar)
router.post('/subirArchivo', authorize, upload.single('jpg'), validate(usuarioScheme.subirArchivo), usuarioController.subirArchivo)
router.post('/descargarArchivo', authorize, validate(usuarioScheme.descargarArchivo), usuarioController.descargarArchivo)

module.exports = router