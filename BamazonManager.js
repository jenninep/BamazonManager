var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

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
	// var nameArray = results.map(function(row){
	// 	return row.ProductName;
	// });
	console.log(results.ProductName);
	promptCustomer(results);
});

// ask users with prompt which product they want to buy and
// how many units of the product they would like to buy.
var promptCustomer = function(availableProducts){
	var nameArray = availableProducts.map(function(row){
		return row.ProductName;
	});
	inquirer.prompt([{
		type: 'list',
		name: 'product',
		message: 'Which product would you like to buy?',
		choices: nameArray
// store the customers choice and set it to false to make sure its a valid product
	}]).then(function(val){
		// console.log("val", val);
		var customerChoice = false;
		availableProducts.forEach(function (choice){
			if (val.product === choice.ProductName) {
				// console.log("hi", val)
				customerChoice = true;
				console.log('Great choice!');
				checkQuantity(choice);
			}	
		})
	});
}

var checkQuantity = function(productChoice){
	inquirer.prompt([{
		type: 'input',
		name: 'quantity',
		message: 'How many would you like?'	
	}]).then(function(answers){
		// console.log('flag',answers);
		var qty = productChoice.StockQuantity;
		// console.log(qty)
		// console.log(productChoice);
		
		if (answers.quantity < qty) {
			connection.query('UPDATE Products SET ? WHERE ?',[{
				StockQuantity: qty - answers.quantity
			}, { 
				ProductName: productChoice.ProductName
			}], function(err, res) {
					if (err) {
						throw err;
					}
					// console.log(res);
				console.log('Congrats! You just bought ' + answers.quantity + ' ' +productChoice.ProductName + ' for ' + answers.quantity  * productChoice.Price + ' dollars!');
				return;
			}) 
		} else {
			console.log("We do not have that amount in stock to fill your order. Please choose a qunatity less than " + qty +"!")
		}
	})
}

connection.end



