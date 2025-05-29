CREATE DATABASE IF NOT EXISTS fault_report_db;
USE fault_report_db;

CREATE TABLE complaints (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  contact VARCHAR(100),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(255)
);

-- Create an admin user
INSERT INTO admin (username, password)
VALUES (
  'admin',
  '$2b$10$KgaGTqJt9EDUt4qnf/uV8O7ju3J0Aj3RHrsT/kQT26fIrtKMSpXfO' -- password = "admin123"
);
