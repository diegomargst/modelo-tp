const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');

router.get('/listar', controller.listar);
router.post('/crear', controller.crear);
router.get('/detalle', controller.detalle);

module.exports = router;