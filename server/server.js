const { dir } = require('console');
const express = require('express');
const fs = require("fs");
const path = require('path');

const app = express();
const dir_pat = path.join(__dirname, 'items');

app.use(express.static(path.join(__dirname, 'items')));


app.get('/', (req, res) => {
	res.send("Your on index");
});


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

function getFolderNames(dir_path){
//	let dir_path = "./items";
	let dirs = [];
	let ret = [];
	let check;

	if (checkFolderExist(dir_path) === true){
		dirs = checkFolderIfEmpty(dir_path);

		for (let i = 0; i < dirs.length; i++){
			check = fs.statSync(dir_path + "/" + dirs[i]);
			if(check.isDirectory() === true){
				ret = ret.concat(dirs[i]);
			}
		}
	}
	else if (checkFolderIfEmpty(dir_path) === false)
		dirs = "Item folder found";
	//console.log("Import Image " + ret);
	return ret;
}


/* This function returns a json file, associating every folder with its
	images.
*/
function getAllImages(main_path){

	let dir_names = getFolderNames(main_path);
	var file_names = {};

	file_names = fs.readdirSync(dir_pat + '/'+ dir_names[0]);


	return file_names;
}
var jsonVar = getAllImages(dir_pat);
console.log(jsonVar);

//Sending Folder Names
app.get('/api/folderNames', (req, res) => {

	let dir_pat = path.join(__dirname, 'items');
	let dir_names = getFolderNames(dir_pat);
	res.send(dir_names);
});


/* The function is going to return a directory's image names,
	based on the franchise selected. (That info will be sent by req var)
*/
app.get('/api/fileNames', (req, res) => {
	res.json({"username": "Keoagile"});
});





const port = 5001;

app.listen(port);