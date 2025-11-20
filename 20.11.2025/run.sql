-- SELECT 
--  name, price, stock_level 

-- FROM products 

-- WHERE price > 50 AND stock_level < 100;


-- SELECT Products *
-- FROM Products JOIN categories ON Products.category_id = categories.category_id 
-- WHERE categories.name LIKE 'Electronics' OR price < 40.00;

-- SELECT * FROM products WHERE name LIKE '%book%';

-- SELECT * FROM customers WHERE registration_date LIKE '2023-04%';

-- SELECT * FROM customers WHERE last_name LIKE 'M%' AND email NOT like '%.com';

-- SELECT * FROM orders WHERE status IN ('new' , 'processed') AND order_date < '2023-04-05';

-- INSERT INTO `products`(`product_id`, `name`, `description`, `price`, `stock_level`, `category_id`) 
-- VALUES (106,'Gaming Mouse Pro','Ergonomic mouse for gamers with customizable buttons',75.99,75, (SELECT category_id FROM categories WHERE name LIKE 'Electronics'));

-- INSERT INTO `customers`(`customer_id`, `first_name`, `last_name`, `email`, `registration_date`)
--  VALUES (204,'Tom','Schneider','tom.schneider@example.org',CURDATE());

-- UPDATE `products` SET price = price * 1.10 WHERE category_id = 2 AND price < 30.00;

-- UPDATE `orders` SET status = 'processed' WHERE status = 'new' and order_date <'2023-04-07';

-- UPDATE `products` SET `stock_level` = '0' WHERE `products`.`product_id` = 103;



-- first delete order iteams then delete products
-- because parents links 

-- DELETE FROM Products
-- WHERE stock_level = 0 ;

-- DELETE FROM Order_Items
-- WHERE product_id = 103;


-- UPDATE `orders` SET status = 'cancelled' WHERE customer_id = (SELECT customer_id FROM customers WHERE first_name = 'Max' and Last_name = 'Meier');


-- SELECT p.product_id, p.name AS product_name, c.name AS category_name FROM Products p JOIN Categories c ON p.category_id = c.category_id;SELECT 
--     c.category_id,
--     c.name AS category_name
-- FROM Categories c
-- LEFT JOIN Products p 
--     ON c.category_id = p.category_id
-- WHERE p.product_id IS NULL;


-- SELECT customers.customer_id, orders.* , customers.first_name , customers.last_name FROM orders JOIN customers ON orders.customer_id = customers.customer_id;

-- SELECT customers.* FROM customers LEFT JOIN orders ON orders.customer_id = customers.customer_id WHERE orders.order_id IS null;