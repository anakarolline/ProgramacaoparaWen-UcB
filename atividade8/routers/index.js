const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadora');

router.get('/', calculadoraController.form);
router.post('/calcular', calculadoraController.calcular);

module.exports = router;