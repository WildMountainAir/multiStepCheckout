
DROP DATABASE IF EXISTS shoppingcart;

CREATE DATABASE shoppingcart;

USE shoppingcart;

-- transactions: id, userid, detailsid, moniesid
CREATE TABLE IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY
);

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
  phone BIGINT,
);
-- monies: id, userid, detailsid, creditCardNum, expiryDate, CVV, billingZipCode
CREATE TABLE IF NOT EXISTS monies (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
  creditCardNum BIGINT NOT NULL, 
  expiryDate INT NOT NULL, 
  cvv INT NOT NULL, 
  billingZipCode INT NOT NULL,
);

INSERT INTO users (firstname, lastname, email, pass) VALUES ("Alison", "Sipos", "Alison.Sipos@iCloud.com", "password1");
INSERT INTO details (addressLine1, addressLine2, city, stateprovidence, zip, phone) VALUES ("123 Red Rocks Road", "", "Boulder", "Colorado", 80301, 9709709770);
INSERT INTO monies (creditCardNum, expiryDate, cvv, billingZipCode) VALUES (400040004000, 022020, 123, 80301);

INSERT INTO users (firstname, lastname, email, pass) VALUES ("Andy", "Sipos", "Andy.Sipos@iCloud.com", "password2");
INSERT INTO details (addressLine1, addressLine2, city, stateprovidence, zip, phone) VALUES ("124 Red Rocks Road", "", "Boulder", "Colorado", 80301, 9709709771);
INSERT INTO monies (creditCardNum, expiryDate, cvv, billingZipCode) VALUES (400040004001, 022020, 123, 80301);

INSERT INTO users (firstname, lastname, email, pass) VALUES ("Buddy", "Meowingtons", "sirbuddymeow@gmail.com", "password3");
INSERT INTO details (addressLine1, addressLine2, city, stateprovidence, zip, phone) VALUES ("125 Red Rocks Road", "", "Boulder", "Colorado", 80301, 9709709772);
INSERT INTO monies (creditCardNum, expiryDate, cvv, billingZipCode) VALUES (400040004002, 022020, 123, 80301);

-- ALTER TABLE transactions ADD FOREIGN KEY (userid) REFERENCES users(id);
-- ALTER TABLE transactions ADD FOREIGN KEY (detailsid) REFERENCES details(id);
-- ALTER TABLE transactions ADD FOREIGN KEY (moniesid) REFERENCES monies(id);
-- ALTER TABLE details ADD FOREIGN KEY (userid) REFERENCES users(id);
-- ALTER TABLE monies ADD FOREIGN KEY (userid) REFERENCES users(id);