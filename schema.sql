
DROP DATABASE IF EXISTS shoppingcart;

CREATE DATABASE shoppingcart;

USE shoppingcart;

-- transactions: id, userid, detailsid, moniesid
CREATE TABLE IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
  userid INT FOREIGN KEY REFERENCES users(id),
  detailsid INT FOREIGN KEY REFERENCES details(id),
  moniesid INT FOREIGN KEY REFERENCES monies(id)
)
-- users: id, name, email, password, 
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
  firstname VARCHAR(40) NOT NULL,
  lastname VARCHAR(40) NOT NULL,
  email VARCHAR(40) NOT NULL,
  pass VARCHAR(40) NOT NULL
);
-- details: id, userid, addressLine 1, addressLine 2, city, state, zip code, phone number, 
CREATE TABLE IF NOT EXISTS details (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
  addressLine1 VARCHAR(255) NOT NULL,
  addressLine2 VARCHAR(255),
  city VARCHAR(40) NOT NULL,
  stateprovidence VARCHAR(40) NOT NULL,
  zip INT NOT NULL,
  phone INT,
  userid INT FOREIGN KEY REFERENCES users(id)
);
-- monies: id, userid, detailsid, creditCardNum, expiryDate, CVV, billingZipCode
CREATE TABLE IF NOT EXISTS monies (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
  creditCardNum INT NOT NULL, 
  expiryDate INT NOT NULL, 
  cvv INT NOT NULL, 
  billingZipCode INT NOT NULL,
  userid INT FOREIGN KEY REFERENCES users(id), 
  detailsid INT FOREIGN KEY REFERENCES details(id)
);

INSERT INTO users (firstname, lastname, email, pass) VALUES ("Alison", "Sipos", "Alison.Sipos@iCloud.com", "password");
INSERT INTO details (addressLine1, addressLine2, city, stateprovidence, zip, phone) VALUES ("123 Red Rocks Road", "", "Boulder", "Colorado", 80301, 9709709770);
INSERT INTO monies (creditCardNum, expiryDate, cvv, billingZipCode) VALUES (400040004000, 022020, 123, 80301);