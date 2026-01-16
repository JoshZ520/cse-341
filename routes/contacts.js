const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/control.js');

// Home route
router.get('/', contactsController.getHome);

// Get all contacts
router.get('/contacts', contactsController.getAllContacts);

// Get single contact by ID
router.get('/contacts/:id', contactsController.getSingleContact);

module.exports = router;
