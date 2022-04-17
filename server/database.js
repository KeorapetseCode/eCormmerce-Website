const mysql = require('mysql');
require ('custom-env').env('dev');


const connection = mysql.createConnection({
    host        : process.env.MYSQLDB_HOST,
    user		: process.env.MYSQLDB_USER,
    password    : process.env.MYSQLDB_ROOT_PASSWORD,
	database 	: process.env.MYSQLDB_DATABASE
});

connection.connect(err => {
    if (err) 
        console.log("Couldn't Connect To Database\n" + err);
    else
        console.log("Mysql connected.");
});
module.exports = connection;
