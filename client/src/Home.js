import React, { useState, useEffect } from 'react';
import './styles/Home.css';
//import packageJson from '../package.json';
//import home_logo from '/img/logo512.png';
//import Product from './Product.js';

function Home() {
	var [loadStatus, setLoadingStatus] = useState(false);
	var [data, setData] = useState('');

	useEffect(() => {
		var fetchBack = async () =>{
			const resp = await fetch("/api");
			const info = await resp.text();
			const new_data = info;
			console.log(new_data);
			setLoadingStatus(true);
			setData(new_data);
		}
		fetchBack();
	}, []);

	return (
		<div>
			{!loadStatus ?<div>loading...!</div>
				:(
					<div>
						<div>It loaded</div>
						<div>{data}</div>
					</div>
				)
			}
		</div>
	)
}

export default Home
