const mysql = require('mysql');

const connection = mysql.createConnection({
    host		: 'localhost',
    user		: 'root',
    password	: ''
});
/*
THESE COMMANDS(queries) ARE TO RESET THE MYSQL AUTHENTICATION CREDINTIALS(they should be ran on an sql client command line)
ALTER USER 'root'@'localhost' IDENTIFIED BY 'your new password';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your new password';
*/
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

sql = `CREATE TABLE IF NOT EXISTS OnlineStolo.Items(
		id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,\ 
 		ItemName VARCHAR(255) DEFAULT NULL,\
		FranchiseName VARCHAR(255) DEFAULT NULL,\
		Price DECIMAL(6,2) DEFAULT NULL,\
		Image VARCHAR(225) DEFAULT NULL,\
		ItemUid VARCHAR(255) DEFAULT NULL)`;

connection.query(sql, err => resHandler(err, 'Items'));

/*
Random Alpha Numeric For Item_UID column
Math.random().toString(36).slice(2)
The alpha numeric will be written in JS and will be inserted when upload of Item is made.
*/

connection.end();