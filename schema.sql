-- users: id, name, email, password, 
-- details: id, userid, addressLine 1, addressLine 2, city, state, zip code, phone number, 
-- monies: id, userid, detailsid, creditCardNum, expiryDate, CVV, billingZipCode
-- transactions: id, userid, detailsid, moniesid

DROP DATABASE IF EXISTS shoppingcart;

CREATE DATABASE shoppingcart;

USE shoppingcart;

CREATE TABLE IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
  userid INT NOT NULL,
  detailsid INT NOT NULL,
  moniesid INT
)

-- CREATE TABLE IF NOT EXISTS users (
--   id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
--   firstname VARCHAR(40) NOT NULL,
--   lastname VARCHAR(40) NOT NULL,
--   email VARCHAR(40) NOT NULL,
--   pass VARCHAR(40) NOT NULL

-- );

-- CREATE TABLE IF NOT EXISTS details (
--   id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
--   userid 
--   addressLine1 
--   addressLine2
--   city
--   stateprovidence
--   zip
--   phone 
-- );

-- CREATE TABLE IF NOT EXISTS monies (
--   id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
-- );

-- INSERT INTO users () VALUES ();
-- INSERT INTO details () VALUES ();
-- INSERT INTO monies () VALUES ();
-- ALTER TABLE transactions
-- ADD FOREIGN KEY (userid) REFERENCES users(id);
-- ADD FOREIGN KEY (detailsid) REFERENCES detailss(id);
-- ADD FOREIGN KEY (moniesid) REFERENCES moniess(id);

-- ALTER TABLE details
-- ADD FOREIGN KEY (userid) REFERENCES