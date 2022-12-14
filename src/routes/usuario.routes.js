const router = require('express').Router()

const globalConstants = require('../const/globalConstants')

const usuarioController = require('../controllers/usuario.controller')
const usuarioScheme = require('../middlewares/schemes/usuario.scheme')
const validate = require('../middlewares/validate')
const authorize = require('../middlewares/authorize')
const sanitize = require('sanitize-filename')

var multer = require('multer')

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, globalConstants.UPLOADS)
    },
    filename: (req, file, cb) => {
        //const ext = file.mimetype.split("/")[1]
        //cb(null, `${file.filename}-${Date.now()}.${ext}`)

        var sanitizedFilename = sanitize(file.originalname).replace(/ /g,'_')

        if (!req.body.codigo) {
            cb(null, `${Date.now()}-${sanitizedFilename}}`)
        } else {
            cb(null, `${req.body.codigo}-${sanitizedFilename}`)
        }
    }
})

const multerFilter = (req, file, cb) => {
    if (
        file.mimetype.split("/")[1] === "jpg" || 
        file.mimetype.split("/")[1] === 'jpeg' ||
        file.mimetype.split("/")[1] === 'png'    
    ) {       
        /*
        (async() => {
            const existeArchivo = await validarArchivo.fileExists(req.res.locals.usuario.dataValues.id, file.originalname)

            if (!existeArchivo) {
                cb(null, true)
            } else {
                cb (new Error('El archivo ya se encuentra en el repositorio.'), false)
            }
        })()
        */
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
//router.post('/subirArchivo', authorize, upload.single('img'), validate(usuarioScheme.subirArchivo), usuarioController.subirArchivo)
router.post('/subirArchivo', authorize, upload.array('img',5), validate(usuarioScheme.subirArchivo), usuarioController.subirArchivo)
router.post('/descargarArchivo', authorize, validate(usuarioScheme.descargarArchivo), usuarioController.descargarArchivo)

module.exports = router