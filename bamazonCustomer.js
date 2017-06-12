var inquirer = require("inquirer");
var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});




connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    
});

  connection.query('SELECT * FROM products', function(err, res){
    if (err) throw err;

    
    showTable();
    selectItem();

    
    });
  
function showTable(){
    connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
             console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("-----------------------------------");
    return;
});
};



function selectItem(){
  connection.query('SELECT * FROM Products', function(err, res){
    if (err) throw err;
    
        inquirer.prompt([
            {
            name: 'id',
            type: 'input',
            message: 'Type the ID of the product you would like to buy'
            }
        
            ]).then(function(answer){
                    // connection.query('SELECT item_id, product_name FROM Products', function(err,res){
                        // console.log(answer.id);
                        // console.log(res);
                        var choosenItem;
                    for (var i = 0; i < res.length; i++){
                        // console.log( "ID: " + res[i].item_id + " | " + res[i].product_name );
                        
                        if (answer.id == res[i].item_id){
                                console.log("You've choosen to buy " + res[i].product_name)
                                console.log(res[i].stock_quantity);

                                howMany();
                        }
                        else{
                            "What are you doing?";
                            // connection.end();
                        }

            };
        });
    })
};


function howMany(){
    connection.query('SELECT stock_quantity FROM Products', function(err, res){
    if (err) throw err;
    
        inquirer.prompt([
        {
            name: "howmany",
            type: "input",
            message: "How many would you like to buy?"
        }
        ]).then(function(answer){

    if (answer.howmany < parseInt(res[i].stock_quantity)){
             console.log ("You bought " + answer.howmany + ", Your Total is ....." )
    }
    else{
            "What are you doing?";
            // connection.end();
        }
});
    })
    
};

