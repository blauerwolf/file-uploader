const router = require('express').Router()
const usuarioController = require('../controllers/usuario.controller')
const validate = require('../middlewares/validate')
const usuarioScheme = require('../middlewares/schemes/usuario.scheme')
const authorize = require('../middlewares/authorize')
const globalConstants = require('../const/globalConstants')
const errors = require('../const/errors')
var multer = require('multer')

/*

var upload = multer({
    dest: 'uploads/archivos-usuarios/',
    limits: { fileSize: globalConstants.MAX_FILE_SIZE }
})
*/


const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, globalConstants.UPLOADS)
    },
    //filename: (req, file, cb) => {
    //    const ext = file.mimetype.split("/")[1]
    //    cb(null, `${file.filename}-${Date.now()}.${ext}`)
    //}
})

const multerFilter = (req, file, cb) => {
    if (
        file.mimetype.split("/")[1] === "jpg" || 
        file.mimetype.split("/")[1] === 'jpeg' ||
        file.mimetype.split("/")[1] === 'png'    
    ) {
        console.log(file.originalname)
        console.log(req.res.locals.usuario.dataValues.id)
        cb(null, true)
    } else {
        return cb(new Error("Formato no permitido."), false)
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    limits: { fileSize: globalConstants.MAX_FILE_SIZE }
})

router.get('/', authorize, usuarioController.listar)
router.get('/:idUsuario', authorize, usuarioController.listarInfo)
router.post('/', authorize, validate(usuarioScheme.crearUsuario), usuarioController.crear)
router.put('/:idUsuario', authorize, validate(usuarioScheme.actualizarUsuario), usuarioController.actualizar)
router.delete('/:idUsuario', authorize, usuarioController.borrar)
router.post('/subirArchivo', authorize, upload.single('img'), validate(usuarioScheme.subirArchivo), usuarioController.subirArchivo)
router.post('/descargarArchivo', authorize, validate(usuarioScheme.descargarArchivo), usuarioController.descargarArchivo)

module.exports = router