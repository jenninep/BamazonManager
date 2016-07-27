CREATE DATABASE Bamazon_db;
USE Bamazon_db;

CREATE TABLE Products (
	id INTEGER(50) AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(100)NOT NULL,
    DepartmentName VARCHAR(50)NOT NULL,
    Price DECIMAL(18, 2)NOT NULL,
    StockQuantity INTEGER(50)NOT NULL,
    PRIMARY KEY (id)
    );
   
   SELECT * FROM Products;
	
    INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
    VALUES('Batman Monster Truck','Toys',10, 100);
    
    INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
    VALUES('Monster Jam Tee','Clothes',999, 80);
    
    INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
    VALUES('Gravedigger Monster Truck ','Toys',10, 50);
    
    INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
    VALUES('Hot Wheels Truck Case','Toys',12,30);
    
    INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
    VALUES('Car Puzzle','Toys',6,150);
    
    INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
    VALUES('Air Jordan Sneakers','Clothing',100,25);
    
    INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
    VALUES('Yellow Racecar','Toys',5,200);
    
    INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
    VALUES('Small Pullback Trucks','Toys',15,86);
    
    INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
    VALUES('Zombie Fathead','Toys',100,50);
    
    INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
    VALUES('McQueen Bedset','Toys',39,60);