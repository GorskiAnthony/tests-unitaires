-- database/schema.sql
CREATE TABLE IF NOT EXISTS bookmark (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(255),
  title VARCHAR(255)
);

