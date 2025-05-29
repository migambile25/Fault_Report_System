// routes/admin.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = 'your-secret-key'; // Replace with env var in real apps

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.execute('SELECT * FROM admin WHERE username = ?', [username]);
    if (rows.length === 0) return res.json({ success: false, message: 'Invalid credentials' });

    const admin = rows[0];
    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.json({ success: false, message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin.id, username: admin.username }, SECRET, { expiresIn: '1d' });
    res.json({ success: true, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
