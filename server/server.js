const { dir } = require('console');
const express = require('express');
const fs = require("fs");
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'items')));

app.get('/', (req, res) => {
	res.send("Your on index");
});

function getImageNames(){

	let dir_pat = path.join(__dirname, 'items');
//	console.log("Dir Path is " + dir_pat);

}
getImageNames();

app.get('/api/imageNames', (req, res) => {

	res.json({"username": "Keoagile"});
});

const port = 5001;

app.listen(port);