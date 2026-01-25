const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const getHome = (req, res) => {
    res.send("Josh Zobrist");
};

// Get all contacts
const getAllContacts = async (req, res) => {
    try {
        const db = mongodb.getDatabase();
        const result = await db.collection('Contacts').find().toArray();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get single contact by ID
const getSingleContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const db = mongodb.getDatabase();
        const result = await db.collection('Contacts').findOne({ _id: new ObjectId(contactId) });
        
        if (!result) {
            res.status(404).json({ error: 'Contact not found' });
        } else {
            res.json(result);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new contact
const createContact = async (req, res) => {
    try {
        const newContact = req.body;
        
        // Validate required fields
        if (!newContact.firstName || !newContact.lastName || !newContact.email || !newContact.favoriteColor || !newContact.birthday) {
            return res.status(400).json({ error: 'All fields are required: firstName, lastName, email, favoriteColor, birthday' });
        }
        
        const db = mongodb.getDatabase();
        const result = await db.collection('Contacts').insertOne(newContact);
        
        res.status(201).json({ id: result.insertedId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a contact by ID
const updateContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const updatedContact = req.body;
        
        const db = mongodb.getDatabase();
        const result = await db.collection('Contacts').replaceOne(
            { _id: new ObjectId(contactId) },
            updatedContact
        );
        
        if (result.matchedCount === 0) {
            res.status(404).json({ error: 'Contact not found' });
        } else {
            res.status(204).send();
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a contact by ID
const deleteContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const db = mongodb.getDatabase();
        const result = await db.collection('Contacts').deleteOne({ _id: new ObjectId(contactId) });
        
        if (result.deletedCount === 0) {
            res.status(404).json({ error: 'Contact not found' });
        } else {
            res.status(200).json({ message: 'Contact deleted successfully' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getHome, getAllContacts, getSingleContact, createContact, updateContact, deleteContact };
