const express = require('express');
const router = express.Router();
const indexController = require('../controllers/control.js');

router.get('/', indexController.getHome);
router.get('/contacts', indexController.getAllData);

module.exports = router;
