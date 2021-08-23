//import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import React, {useState} from 'react';
//import packageJson from '../package.json';
//import home_logo from '/img/logo512.png';
//import Product from './Product.js';
//import ImportImages from './ImportImages';
//const fs = require("fs");

function Home() {

	const [imgs, setImgs] = useState(null);
	
	return (
		<div>
			<div>Here's your Folder Array</div>
			<div>{imgs}</div>
		</div>
	)
}

export default Home
