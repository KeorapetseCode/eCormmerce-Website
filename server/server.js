const { dir } = require('console');
const express = require('express');
const fs = require("fs");
const path = require('path');
const connection = require('./config/database');

const app = express();
const dir_pat = path.join(__dirname, 'items');

app.use(express.static(path.join(__dirname, 'items')));


app.get('/', (req, res) => {
	res.send("Your on index");
});
const resHandler = (err, dbName) => {
    if (err)
        console.log(`Error!! trying to do ${dbName} query\n` + err)
    else
        console.log(`success at ${dbName} query`);
};

function checkFolderExist(dir_path){

	try {
		if (fs.existsSync(dir_path) === true) {
			//console.log("Directory exists.");
			return true;
		}
		else if (fs.existsSync(dir_path) === false){
			//console.log("Directory does not exist ## " + dir_path + "\n");
			return false;
		}
	}
	catch(e) {
		console.log("An error occurred while looking for item folder.");
		//return false;
	}
}

function checkFolderIfEmpty(dir_path){

	let dirs = -1;
	try{
		dirs = fs.readdirSync(dir_path);
		//console.log("Folder Is " + dir_path);
	}
	catch{
		//console.log("Cannot read how many contents in item folder");
		return -1;
	}
	return dirs;
}

function getFolderNames(img_path){
//	let dir_path = "./items";
	let dirs = [];
	let ret = [];
	let check;

	if (checkFolderExist(img_path) === true){
		dirs = checkFolderIfEmpty(img_path);

		for (let i = 0; i < dirs.length; i++){
			check = fs.statSync(img_path + "/" + dirs[i]);
			if(check.isDirectory() === true){
				let obj = {'name':dirs[i]}; 
				ret.push(obj);
			}
		}
	}
	else if (checkFolderIfEmpty(img_path) === false)
		console.log("Item folder found");
	//console.log("ret is: " + ret);
	return ret;
}

//console.log(getFolderNames(dir_pat));

/* This function returns a json file, associating every folder with its
	images.
*/

//Sending Folder Names

app.get('/api/folderNames', (req, res) => {

	let dir_pat = path.join(__dirname, 'items');
	let dir_names = getFolderNames(dir_pat);

	res.setHeader('Content-Type', 'application/json');
	//console.log("Var type is: " + typeof dir_names);
	+
	//console.log("Dir path is " + dir_names);
	res.json(dir_names);
});

/*Making an array of Objects and sending it to front-end as a
single json object.
*/ 

function allItems(){

	let all_prod = [];
	var dir_names = getFolderNames(dir_pat);

	for (let a = 0; a < dir_names.length; a++){
		all_prod.push(fs.readdirSync(dir_pat + '/'+ dir_names[a])); 
	}
	//console.log("dir names" + dir_names);
	//console.log("All products are " + all_prod + "\n");
}


app.get('/api/getAllItems', (req, res) => {

	let sql;

	sql = "SELECT * FROM OnlineStolo.Items";
	connection.query(sql, (error, rows) => {
		if (error) {
			return console.error(error.message);
		  }
		  //console.log(rows);
		//console.log("About to send all"); 
		  res.setHeader('Content-Type', 'application/json');
	 	  res.json(rows);
	});
});

const port = 5001;

app.listen(port);
