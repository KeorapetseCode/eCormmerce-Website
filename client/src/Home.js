import React, { useState, useEffect } from 'react';
import './styles/Home.css';
//import packageJson from '../package.json';
//import home_logo from '/img/logo512.png';
//import Product from './Product.js';
//import ImportImages from './ImportImages';
//const fs = require("fs");

function Home() {

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


	var [files_names, setFile] = useState('');
	var [load_fileNames, setFileStatus] = useState(false);

	useEffect(() => {
		var fetchNames = async () =>{
			const resp = await fetch("/api/fileNames");
			const file_names = await resp.json();

			setFile(file_names.username);
			setFileStatus(true);
		}
		fetchNames();
	}, []);



	return (
		<div>
			{!load_dirNames ?<div>loading...!</div>
				:(
					<div>
						<div>It loaded</div>
						<div>{dirs_names}</div>
					</div>
				)
			}
			{!load_fileNames ? <div>loading names...!</div>
				:(
					<div>
						<div>It loaded Names</div>
						<div>{files_names}</div>
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
