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

module.exports = { getHome, getAllContacts, getSingleContact };
