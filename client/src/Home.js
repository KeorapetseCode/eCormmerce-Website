import React, { useState, useEffect } from 'react';
import './styles/Home.css';
//import packageJson from '../package.json';
//import home_logo from '/img/logo512.png';
//import Product from './Product.js';
//import ImportImages from './ImportImages';
//const fs = require("fs");

function Home() {

	var [imgNames, setNames] = useState('');
	var [load_s, setLoadingStatus] = useState(false);

	useEffect(() => {
		var fetchBack = async () =>{
			const resp = await fetch("/api/imageNames");
			const names_info = await resp.json();
			
			console.log("The names are " + names_info.username);
			setNames(names_info.username);
			setLoadingStatus(true);
		}
		fetchBack();
	}, []);

	return (
		<div>
			{!load_s ?<div>loading...!</div>
				:(
					<div>
						<div>It loaded</div>
						<div>{imgNames}</div>
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
