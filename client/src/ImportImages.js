//import React from 'react';
const fs = require("fs");
//const { dir } = require('console');

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
	function getImageFolders(){
		let dir_path = "./items";
		let dirs = new Array();
		let ret = [];
		let check;

		if (checkFolderExist(dir_path) == true){
			dirs = checkFolderIfEmpty(dir_path);

			for (let i = 0; i < dirs.length; i++){
				check = fs.statSync(dir_path + "/" + dirs[i]);
				if(check.isDirectory() == true){
					ret = ret.concat(dirs[i]);
				}
			}
		}
		else if (checkFolder(dir_path) == false)
			dirs = "Item folder found";
		//console.log(ret);
		return ret;
	}
	getImageFolders();

//export default ImportImages;