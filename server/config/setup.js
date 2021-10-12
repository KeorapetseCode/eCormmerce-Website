const mysql = require('mysql');

const connection = mysql.createConnection({
    host		: 'localhost',
    user		: 'root',
    password	: 'password'
});
/*
THESE COMMANDS(queries) ARE TO RESET THE MYSQL AUTHENTICATION CREDINTIALS(they should be ran on an sql client command line)
ALTER USER 'root'@'localhost' IDENTIFIED BY 'your new password';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your new password';
*/
const resHandler = (err, dbName) => {
    if (err)
        console.log(`Error!! while trying to execute ${dbName} query\n` + err)
    else
        console.log(`success at execute ${dbName} query`);
};

let sql = 'CREATE DATABASE IF NOT EXISTS OnlineStolo';
connection.query(sql, err => {
    if (err)
        console.log("Cannot Create Database\n" + err)
    else
        console.log('Database Created!!');
});

sql = `CREATE TABLE IF NOT EXISTS OnlineStolo.Items(
		id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,\ 
 		ItemName VARCHAR(255) DEFAULT NULL,\
		FranchiseName VARCHAR(255) DEFAULT NULL,\
		Price DECIMAL(6,2) DEFAULT NULL,\
		Image VARCHAR(225) DEFAULT NULL,\
		Quantity INT(11) DEFAULT NULL,\
		ItemUid VARCHAR(255) DEFAULT NULL)`;

connection.query(sql, err => resHandler(err, 'Items'));

sql = null;

sql =	`CREATE TABLE IF NOT EXISTS OnlineStolo.Orders(
		id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,\
		ItemsOrdered json DEFAULT NULL,\
		TimeOfOrder datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,\
		OrderDelivered BOOL DEFAULT FALSE,\
		ORDERUid VARCHAR(255) DEFAULT NULL)`;

connection.query(sql, err => resHandler(err, 'Orders'));

connection.end();