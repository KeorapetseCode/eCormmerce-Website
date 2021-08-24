import React, { useState, useEffect } from 'react';
import './styles/Home.css';
//import packageJson from '../package.json';
//import home_logo from '/img/logo512.png';
//import Product from './Product.js';
//import ImportImages from './ImportImages';
//const fs = require("fs");

function Home() {

	const [imgs, setImgs] = useState('');

	function arrayBufferToBase64(buffer) {
		var binary = '';
		var bytes = [].slice.call(new Uint8Array(buffer));
		bytes.forEach((b) => binary += String.fromCharCode(b));
	  
		return window.btoa(binary);
	  }

	useEffect(() => {
		var fetchBack = async () =>{

			let headers = new Headers({'X-Mashape-Key': 'API_KEY'});
			let options = {
				method: 'GET',
				headers: headers,
				mode: 'cors',
				cache: 'default'
			};

			const resp = await fetch("/api/getImages", options);
			
			const buffer = await resp.arrayBuffer();

			let base64Flag = 'data:image/jpeg;base64,';
			let imageStr = arrayBufferToBase64(buffer);
			let imgData = base64Flag + imageStr;

			console.log("The data is = " + imageStr);
			setImgs(imgData);
		}
		fetchBack();
	}, []);
	
	return (
		<div>
			<div>Here's your Folder Array</div>
			<div>{imgs}</div>
		</div>
	)
}

export default Home
