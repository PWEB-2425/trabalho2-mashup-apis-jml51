const express = require('express');
const router = express.Router();
const alunoCtrl = require('../controllers/controllers_auth');

router.post('/login',alunoCtrl.login);
router.get('/session',alunoCtrl.session);
router.get('/', alunoCtrl.get);

module.exports = router;