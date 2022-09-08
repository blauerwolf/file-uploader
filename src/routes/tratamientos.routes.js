// RUTAS DE LOS TRATAMIENTOS

const router = require('express').Router()

const tratamientosController = require('../controllers/tratamientos.controller')

router.get('/', tratamientosController.listar)

module.exports = router