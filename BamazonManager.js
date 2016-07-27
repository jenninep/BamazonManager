var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
    port: 3306,
    user: "root", 
    password: "", 
    database: "Bamazon_db"
})

connection.query('SELECT * FROM Products', function(err, results) {
	if (err) {
		throw err;
	}
	// first display all of the items for sale including ids, names, and prices of products.
	results.forEach(function (row){
	console.log('Item ID:', row.id);
	console.log('Product:', row.ProductName);
	console.log('Department:', row.DepartmentName);
	console.log('Price:', row.Price);
	console.log('Stock Left', row.StockQuantity);
	console.log('-------------------------------')
	});
	promptCustomer(results);
});

// ask users with prompt which product they want to buy and
// how many units of the product they would like to buy.
var promptCustomer = function(availableProducts){
	inquirer.prompt([{
		type: 'input',
		name: 'product',
		message: 'Which product would you like to buy?'
// store the customers choice and set it to false to make sure its a valid product
	}]).then(function(val){
		// console.log("val", val);
		var customerChoice = false;
		availableProducts.forEach(function (choice){
			// console.log("last", choice.ProductName);
			if (val.product === choice.ProductName) {
				console.log("hi", val)
				customerChoice = true;
				console.log('Great choice!');
				checkQuantity();
			}	
		})
	});
}

var checkQuantity = function(answers){
					inquirer.prompt([{
						type: 'input',
						name: 'quantity',
						message: 'How many would you like?'	
					}]).then(function(answers){
						console.log(answers.quantity);
					})
				}





