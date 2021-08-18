//import React from 'react';
const fs = require("fs");
//const { dir } = require('console');

//function ImportImages(){

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
//}
	let dir_path = "./items";
	let brand_dirs;
	let i = 0;

	if (checkFolderExist(dir_path) == true){
		brand_dirs = checkFolderIfEmpty(dir_path);
		console.log(dir_path + "/" + brand_dirs[1]);
		//res.send(dir_path + "/" + brand_dirs[1]);
		//
		//res.send("Ordddd");
	}
	else if (checkFolder(dir_path) == false)
		console.log("Item folder found");

export default ImportImages;