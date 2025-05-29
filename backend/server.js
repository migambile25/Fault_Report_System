const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // 👈 serve frontend
app.use(express.json());

// Routes
const complaintRoutes = require('./routes/complaints');
const adminRoutes = require('./routes/admin');
app.use('/api/complaints', complaintRoutes);
app.use('/api/admin', adminRoutes);

const PORT = 3000;
// Generate bcrypt hash for admin password (run once and comment out)
// const bcrypt = require('bcryptjs');
// bcrypt.hash('admin123', 10).then(console.log);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
