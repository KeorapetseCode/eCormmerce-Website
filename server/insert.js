//const connection = require('./config/database');
const fs = require('fs');
const path = require('path');
//const faker = require('faker');
//const multer = require('multer');
//const express = require('express');
//const bodyParser = require("body-parser");
/*
const resHandler = (err, dbName) => {
    if (err)
        console.log(`Error!! trying to do ${dbName} query\n` + err)
    else
        console.log(`success at ${dbName} query`);
};
*/
function insert() {
	//let saTimestamp = new Date().toLocaleString("en-US", "South Africa/Johannesburg");
	console.log(Math.random().toString(36).slice(2).length);
}

insert();
//connnection.end();