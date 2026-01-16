const mongodb = require('../db/connect');

const getHome = (req, res) => {
    res.send("Meghan Zobrist");
};

// Example function to get all documents from a collection
const getAllData = async (req, res) => {
    try {
        const db = mongodb.getDatabase();
        const result = await db.collection('Contacts').find().toArray();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getHome, getAllData };
