const { Router } = require('express')

const authController = require('../controllers/auth.controller')
const { route } = require('./paciente.routes')
const router = require('./paciente.routes')

router.post('/login', authController.login)
router.post('/registrarse', authController.registrarse)

module.exports = router