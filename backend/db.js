// db.js
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'password',
  database: 'fault_report_db'
});

module.exports = pool.promise();
