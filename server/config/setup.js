const mysql = require('mysql');

const connection = mysql.createConnection({
    host		: 'localhost',
    user		: 'root',
    password	: ''
});

const resHandler = (err, dbName) => {
    if (err)
        console.log(`Error!! trying to do ${dbName} query\n` + err)
    else
        console.log(`success at ${dbName} query`);
};

let sql = 'CREATE DATABASE IF NOT EXISTS OnlineStolo';
connection.query(sql, err => {
    if (err)
        console.log("Cannot Create Database\n" + err)
    else
        console.log('Database Created!!');
});

//sql = 'CREATE TABLE IF NOT EXISTS OnlineStolo.items(id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY, ItemName VARCHAR(255) NOT NULL, BrandName VARCHAR(255) NOT NULL)';
//connection.query(sql, err => resHandler(err, 'Items'));

sql = `CREATE TABLE IF NOT EXISTS OnlineStolo.Items(
		id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,\ 
 		ItemName VARCHAR(255) NOT NULL,\
		FranchiseName VARCHAR(255) NOT NULL,\
		Price DECIMAL(6,2) NOT NULL,\
		Image VARCHAR(1500) NOT NULL,\
		ItemUid VARCHAR(255) NOT NULL)`;

connection.query(sql, err => resHandler(err, 'Items'));

/*
Random Alpha Numeric For Item_UID column
Math.random().toString(36).slice(2)
The alpha numeric will be written in JS and will be inserted when upload of Item is made.
*/

connection.end();