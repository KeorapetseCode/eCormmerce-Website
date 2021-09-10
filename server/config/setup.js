const mysql = require('mysql');
//const faker = require('faker');

const connection = mysql.createConnection({
    host		: 'localhost',
    user		: 'root',
    password	: ''
});

const resHandler = (err, dbName) => {
    if (err) console.log(err);
    console.log('table ${dbName} created..');
};

let sql = 'CREATE DATABASE IF NOT EXISTS online_stolo';
connection.query(sql, err => {
    if (err) console.log("Cannot create database\n" + err);
    console.log('database created..');
});

sql = 'CREATE TABLE IF NOT EXISTS online_stolo.Items(id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,'/
'Item_Name VARCHAR(255) NOT NULL, Brand_Name VARCHAR(255) UNIQUE NOT NULL, Price DECIMAL(6,2) NOT NULL,'/
 'image VARCHAR(1500) NOT NULL, Item_UID VARCHAR(1500) UNIQUE NOT NULL'; 
connection.query(sql, err => resHandler(err, 'Items'));
/*

Random Alpha Numeric For Item_UID column
Math.random().toString(36).slice(2)
The alpha numeric will be written in JS and will be inserted when upload of Item is made.
*/

connection.end();