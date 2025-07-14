const express = require('express');
const router = express.Router();
const alunoCtrl = require('../controllers/controllers_api');


router.get(`/cambioApi`,alunoCtrl.cambioApi);
router.get(`/paisesApi/:pais`,alunoCtrl.paisesApi);


module.exports = router;