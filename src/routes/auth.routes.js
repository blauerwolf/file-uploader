const { Router } = require('express')

const authController = require('../controllers/auth.controller')
const validate = require('../middlewares/validate')
const authScheme = require('../middlewares/schemes/auth.scheme')

const router = Router()

router.post('/login', validate(authScheme.login), authController.login)
router.post('/registrarse', validate(authScheme.registrarse), authController.registrarse)

module.exports = router