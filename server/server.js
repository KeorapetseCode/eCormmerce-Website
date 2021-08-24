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
    		//console.log("Directory exists.");
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

function checkFolderIfEmpty(dir_path){

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



app.get('/api/getImages', (req, res) => {

	let dir_path = "./items";
	let brand_dirs;
	let i = 0;

	if (checkFolderExist(dir_path) == true){
		brand_dirs = checkFolderIfEmpty(dir_path);

		var base64 = Buffer.from(brand_dirs[0]).toString('base64');
        base64='data:image/png;base64,'+base64;
		console.log("base64 Data is " + base64);
        res.send(base64);
		
		//console.log(dir_path + "/" + brand_dirs[1]);
		//res.send(dir_path + "/" + brand_dirs[1]);
		//
		//res.send("Ordddd");
	}
	else if (checkFolder(dir_path) == false)
		res.send("Item folder found");	
	
		res.send("Text from server");
});


const port = 5001;

app.listen(port);