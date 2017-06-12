create database bamazon;

use bamazon;

create table products(
		item_id integer auto_increment not null,
        product_name varchar(50) not null,
        department_name	varchar(50) not null,
		price integer not null,
		stock_quantity integer not null,
        Primary Key (item_id)
        
);

insert into products(product_name,department_name,price,stock_quantity)
values('Your Grandma Old Headphones','Electronic',20.00,10),
		('Mini Bulldog Tux','Pet',100.00,25),
        ('Batman Ultilities Belt','Super Heroes',1000.00,1),
        ('Extra Large Ipad','Electronic',700.50,1),
        ('Dr.Strange Cape','Super Heroes',5.00,5),
        ('Ant-Man Slipper','Super Heroes',99.99,30),
        ('Furminator','Pet',60.00,25),
        ('Electrik Eel','Electronic',10.80,10),
        ('Super Girl Cousin ','Super Heroes',5.00,5),
        ('Iron Man Gloves','Super Heroes',55.99,70),
        ('Dog Penthouse','Pet',70.00,25);


SELECT * FROM products;
