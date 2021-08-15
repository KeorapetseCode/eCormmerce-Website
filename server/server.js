const { dir } = require('console');
const express = require('express');
const fs = require("fs");

const app = express();


app.get('/', (req, res) => {
	res.send("Your on index");
});

function checkFolderExist(dir_path){

	try {
		if (fs.existsSync(dir_path)) {
    		console.log("Directory exists.");
			return true;
  		}
	  	else {
    		console.log("Directory does not exist.");
			return false;
  		}
	}
	catch(e) {
  		console.log("An error occurred while looking for item folder.");
		return false;
	}
}

function checkFolderEmpty(dir_path){

	let dirs = -1;

	try{
		dirs = fs.readdirSync(dir_path);
	}
	catch{
		console.log("Cannot read how many contents in item folder");
		return -1;
	}
	return dirs;
}


app.get('/api', (req, res) => {

	let dir_path = "./items";
	let dirs;

	if (checkFolderExist(dir_path) == true){
		dirs = checkFolderEmpty(dir_path);
		console.log(dirs);
		
	}
	else if (checkFolder(dir_path) == false)
		res.send("Item folder found");
	
	
	
		res.send("Text from server");
});


const port = 5001;

app.listen(port);