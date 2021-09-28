//import React from 'react';
import React, { useState, useEffect } from 'react';

import './styles/Home.css';
//import MultProducts from './MultProducts';
import Product from './Product.js';
import { Grid } from '@material-ui/core';



function Home() {

	var [itemNames, setItems] = useState([]);
	var [loadNames, setNamesStatus] = useState(false);

	useEffect(() => {
		var fetchDirs = async () => {
			const resp = await fetch("/api/getAllItems");
			const items = await resp.json();
			
			setItems(items);
			setNamesStatus(true);
			//let ans = Array.isArray(dirs_names);
			//console.log("is it arr " + ans);
		}
		fetchDirs();
	}, []);
	//Randomise number of contents on larger screens
	/*var randomNum = () => {
		return Math.floor(Math.random() * (4 - 8 + 1)) + 6;
	}*/
	//console.log("Random Num is " + randomNum());
	return(
		<div className='home'>
			{!loadNames ? <div className='loading__icon'>loading...!</div>
			:(
				<Grid container justifyContent='center' spacing={1}>
				{itemNames.map((single_item) => (

					<Grid item key={single_item.ItemName} xs={12} sm={6} md={4} lg={4}>
					<Product
						price={single_item.Price}
						name={single_item.ItemName}
						image={single_item.Image}
						uid={single_item.ItemUid}
					/>
					</Grid>
				  ))}
				</Grid>
				/*</div>*/
			)
			}
		</div>
	)
}

export default Home
