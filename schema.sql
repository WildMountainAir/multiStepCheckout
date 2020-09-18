-- users: id, name, email, password, 
-- details: addressLine 1, addressLine 2, city, state, zip code, phone number, 
-- monies: creditCardNum, expiryDate, CVV, billingZipCode
-- checkout: 
-- 
-- 

DELETE DATABASE IF EXISTS shoppingcart;

CREATE DATABASE shoppingcart;

USE shoppingcart;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
);

CREATE TABLE IF NOT EXISTS details (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
);

CREATE TABLE IF NOT EXISTS monies (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
);

-- INSERT INTO users () VALUES ();
-- INSERT INTO details () VALUES ();
-- INSERT INTO monies () VALUES ();