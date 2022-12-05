-- 1. Added 'chair' into products table:
INSERT INTO products (name, price, can_be_returned) VALUES ('chair', 44.00, false);

-- 2. Added 'stool' into products table:
INSERT INTO products (name, price, can_be_returned) VALUES ('stool', 25.99, true);

-- 3. Added 'table' into products table:
INSERT INTO products (name, price, can_be_returned) VALUES ('table', 124.00, false);

-- 4. Display all rows and columns in table:
SELECT * FROM products

-- 5. Display all names of products in table:
SELECT name FROM products;

-- 6. Display all names, prices of products in table:
SELECT name, price FROM products;

-- 7. Added new product of 'lamp' into products table:
INSERT INTO products (name, price, can_be_returned) VALUES ('lamp', 85.99, true);

-- 8. Display products that can_be_returned:
SELECT * FROM products WHERE can_be_returned;

-- 9. Display products that have price less than 44.00:
SELECT * FROM products WHERE price < 44.00;

-- 10. Display the products that have price between 22.50 and 99.99:
SELECT * FROM products WHERE price BETWEEN 22.50 AND 99.99;

-- 11. Update all products so that price is deducted $20:
UPDATE products SET price = price - 20;

-- 12. Delete everything that costs less than $25:
DELETE FROM products WHERE price < 25;

-- 13. Increase remaining products by $20:
UPDATE products SET price = price + 20;

-- 14. Update products to everything is returnable:
UPDATE products SET can_be_returned = true;