const express = require('express');
const router = express.Router();
const alunoCtrl = require('../controllers/controllers_auth');

router.post('/login',alunoCtrl.login);
router.post('/registar',alunoCtrl.registar);
router.get('/autenticado',alunoCtrl.autenticado);
router.get('/', alunoCtrl.get);

module.exports = router;