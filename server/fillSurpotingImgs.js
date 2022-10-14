const connection = require('./config/database');
const fs = require('fs');
const path = require('path');

const dir_pat = path.join(__dirname, 'items');

/*
const resHandler = (err, dbName) => {
    if (err)
        console.log(`Error!! trying to do ${dbName} query\n` + err)
    else
        console.log(`success at ${dbName} query`);
};
*/

const add_surpoting_imgs = () => {

	let newPath = path.join(dir_pat, './New Folder');
	//console.log("Path is " + newPath + "\n");
	
	let temp = fs.readdirSync(newPath);
	let imgJson = {};
	
	temp.map((img, index) => {
		imgJson[index] = 'New folder' + '/' + img;
		//imgJson.push(index.toString() + ' : ' + '/New folder' + '/' + img);
	});

	//let key = "Name";
	//imgJson[key] = "Keorapetse";

	//console.log(imgJson);

	let myJson = JSON.stringify(imgJson);

	//console.log(myJson);

	for (let v = 0; v < 23; v++ ){
		sql = 
				`UPDATE OnlineStolo.Items SET SupportingImages = '`+ myJson +`'`;

		connection.query(sql, err => {
			if (err){
				console.log("Error While Trying to insert!@#\n");
				console.log(err);
			}
		});
	}
}

add_surpoting_imgs();
connection.end();