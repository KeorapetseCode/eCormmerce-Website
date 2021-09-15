const connection = require('./config/database');
const fs = require('fs');
const path = require('path');

const resHandler = (err, dbName) => {
    if (err)
        console.log(`Error!! trying to do ${dbName} query\n` + err)
    else
        console.log(`success at ${dbName} query`);
};
/*
THESE COMMANDS(queries) ARE TO RESET THE MYSQL AUTHENTICATION CREDINTIALS(they should be ran on an sql client command line)
ALTER USER 'root'@'localhost' IDENTIFIED BY 'your new password';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your new password';
*/
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

function populate(){
	
	let dir_path = path.join(__dirname, 'items');
	let dir_names = getFolderNames(dir_path);
	let dir_total = dir_names.length;
	var allItems = [];

	var price = 250.00;
	var err_var = null;
	//var pic;
	//var item_uid;
	let sql;

	for (let x = 0; x < dir_total; x++){
		allItems.push(fs.readdirSync(dir_path + '/'+ dir_names[x]));
	}
	for (let a = 0; a < dir_total; a++){
		for (let i = 0; i < allItems[a].length; i++){
			sql = 
					"INSERT INTO OnlineStolo.Items (ItemName, FranchiseName, Price)"+
					" VALUES ('"+ allItems[a][i] +"','"+ dir_names[a] +"', "+ price +")";
					
					connection.query(sql, err => {
						if (err){
							console.log("Error While Trying To Insert!!\n");
							//err_var = true;
						}
					});
		}
	}
	//console.log(allItems[0].length);
}
populate();
connection.end();
/*

*/
