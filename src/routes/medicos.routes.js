// RUTAS DE LOS MEDICOS

const router = require('express').Router();
const medicosController = require('../controllers/medicos.controller');

router.get('/', medicosController.listar)

module.exports = router