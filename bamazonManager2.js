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
    menuOptions();
});
//make a list of options for the user to choose from
var menuOptions = function(){
    inquirer.prompt([{
        type: 'list',
        name: 'inventory',
        message: 'Please choose and option.',
        choices: [
            '1) View Products for Sale',
            '2) View Low Inventory',
            '3) Add to Inventory',
            '4) Add New Product'
        ]
    }]).then(function(answers){
        // console.log(answers);
        switch(answers.inventory) {
            case '1) View Products for Sale': viewProducts(); 
            break;
            case '2) View Low Inventory': viewLowInvent();
            break;
            case '3) Add to Inventory': addInvent(); 
            break;
            case '4) Add New Product': addProducts();
            break;
        }
    })
}

var viewProducts = (function() {
    connection.query('SELECT * FROM Products', function(err, results) {
    if (err) {
        throw err;
    console.log(results.ProductName);
    }

        results.forEach(function(row){
            console.log('Item ID:', row.id);
            console.log('Product:', row.ProductName);
            console.log('Department:', row.DepartmentName);
            console.log('Price:', row.Price);
            console.log('Stock Left', row.StockQuantity);
            console.log('-------------------------------')
        })
    })
});

var viewLowInvent = (function(lowInventory){
    console.log(lowInventory);
    var qty = lowInventory.StockQuantity;
    if (lowInventory.StockQuantity > 5) {
        console.log('running low man!');


    }

})

