const { Router } = require('express')

const router = require('./paciente.routes')
const authController = require('../controllers/auth.controller')
const validate = require('../middlewares/validate')
const authScheme = require('../middlewares/schemes/auth.scheme')


router.post('/login', validate(authScheme.login), authController.login)
router.post('/registrarse', authController.registrarse)

module.exports = router