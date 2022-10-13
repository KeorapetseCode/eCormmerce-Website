const mysql = require('mysql');
const connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '12345',
	database 	: 'OnlineStolo'
});

connection.connect(err => {
    if (err) 
        console.log("Couldn't Connect To Database\n" + err);
    else
        console.log("Mysql connected.");
});
module.exports = connection;