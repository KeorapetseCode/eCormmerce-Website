const connection = require('./config/database');
const fs = require('fs');
const path = require('path');
//const faker = require('faker');
const multer = require('multer');
const express = require('express');
const bodyParser = require("body-parser");

//const app = express();

//app.set('prod_imgs', __dirname + '/items');
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, "public")));
const resHandler = (err, dbName) => {
    if (err)
        console.log(`Error!! trying to do ${dbName} query\n` + err)
    else
        console.log(`success at ${dbName} query`);
};
/*
THE FOLLOWING COMMANDS(queries) ARE TO RESET THE MYSQL AUTHENTICATION CREDINTIALS(they should be ran on an sql client command line)
-ALTER USER 'root'@'localhost' IDENTIFIED BY 'your new password';
-ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your new password';
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

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'images/')
	},
	filename: function (req, file, cb) {
	  cb(null, file.originalname)
	  // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	},  
  });

  const limits = {
    fileSize : 4000000
}

const fileFilter =(req, file, cb) => {
	//if the file is not a jpg, jpeg, or png file, do not upload it multer; reject it.
	if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
		return cb(new Error('File must be of type JPG, JPEG, or PNG and nore more than 2MB in size'))
	}
	//undefined = nothing went wrong; true = that is true, nothing went wrong, accept the upload.
	cb(undefined, true)
  }
  
  //set up the multer middleware
  const upload = multer({
	  storage: storage,
	  limits: limits,
	  fileFilter: fileFilter
	  // filename: filename
	})
  




function populate(){
	
	let dir_path = path.join(__dirname, 'items');
	let dir_names = getFolderNames(dir_path);
	let dir_total = dir_names.length;
	let allItems = [];
	let itemNames = [];
	let price = 250.00;
	var err_var = null;
	let pic = null;
	let item_uid;
	let sql;

//	adding all images to a 2d array	
	for (let x = 0; x < dir_total; x++){
		allItems.push(fs.readdirSync(dir_path + '\\'+ dir_names[x]));
	}

//	Spiting the names of Items the '.jpg/png' extension	
	for (let i = 0; i < dir_total; i++){
		for (let b = 0; b < allItems[i].length; b++){
			itemNames.push(allItems[i][b].split('.')[0]);
		}
	}
	//console.log();
	
	for (let a = 0; a < dir_total; a++){
		for (let i = 0; i < allItems[a].length; i++){
			
			pic = dir_path +'\\' + dir_names[a] + '\\' + allItems[a][i];
			//pic = fs.readFileSync(dir_path +'\\' + dir_names[a] + '\\' + allItems[a][i]);
			/*console.log("Pic is: " + pic + "\n");
			if (i > 0){
				break;
			}
			*/
			item_uid = Math.random().toString(36).slice(2);

			sql = 
					`INSERT INTO OnlineStolo.Items (ItemName, FranchiseName, Price, Image, ItemUid)`+
					` VALUES ('`+ itemNames[a][i] +`','`+ dir_names[a] +`','`+ price +`','`+ pic +`','`+ item_uid +`')`;

					connection.query(sql, err => {
						if (err){
							console.log("Error While Trying To Insert!!\n" + err);
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
