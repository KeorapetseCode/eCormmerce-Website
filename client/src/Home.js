import React, { useState, useEffect } from 'react';
import './styles/Home.css';
//import packageJson from '../package.json';
//import home_logo from '/img/logo512.png';
//import Product from './Product.js';
//import ImportImages from './ImportImages';
//const fs = require("fs");

function Home() {
/*
	var [dirs_names, setDirs] = useState('');
	var [load_dirNames, setDirStatus] = useState(false);

	useEffect(() => {
		var fetchDirs = async () =>{
			const resp = await fetch("/api/folderNames");
			const folder_names = await resp.text();
			
			setDirs(folder_names);
			setDirStatus(true);
		}
		fetchDirs();
	}, []);
*/

	var [itemList, setList] = useState('');
	var [load_list, setListStatus] = useState(false);

	useEffect(() => {
		var fetchAllItems = async () =>{
			const resp = await fetch("/api/getAllItems");
			const itemData = await resp.json();

			//console.log("The JSON is " + itemData.Items);
			setList(itemData);
			setListStatus(true);
		}
		fetchAllItems();
	}, []);

	return (
		<div>
			{!load_list ?<div>loading...!</div>
				:(
					<div>
						<div>It loaded</div>
						<div>{itemList[0].items}</div>
					</div>
				)
			}
		</div>
	);
}
/*
					<img className="prod_image"
						src={'/Rabbit Gang/Rabbit Gang Cover.'}
						alt={"item goes here"}/>)
						*/
export default Home
