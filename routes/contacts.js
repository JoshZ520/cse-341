const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/control.js');

// Home route
router.get('/', contactsController.getHome);

// Get all contacts
router.get('/contacts', contactsController.getAllContacts);

// Get single contact by ID
router.get('/contacts/:id', contactsController.getSingleContact);

// Create a new contact
router.post('/contacts', contactsController.createContact);

// Update a contact by ID
router.put('/contacts/:id', contactsController.updateContact);

// Delete a contact by ID
router.delete('/contacts/:id', contactsController.deleteContact);

module.exports = router;
