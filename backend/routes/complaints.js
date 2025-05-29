// routes/complaints.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const authMiddleware = require('../middleware/auth');

// Submit a complaint
router.post('/', async (req, res) => {
  const { name, contact, description } = req.body;

  if (!name || !contact || !description) {
    return res.status(400).send('All fields are required.');
  }

  try {
    await db.execute(
      'INSERT INTO complaints (name, contact, description) VALUES (?, ?, ?)',
      [name, contact, description]
    );
    res.send('Complaint submitted successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error.');
  }
});

// Get all complaints (admin only)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM complaints ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error.');
  }
});

module.exports = router;
