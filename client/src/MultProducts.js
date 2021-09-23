import React, { useState, useEffect } from 'react';
import Product from './Product.js';
import { Grid } from '@material-ui/core';


function MultProducts() {
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
	
	return(
		<div className='home'>
			<div className='home__container'>
			{!loadNames ? <div className='loading__icon'>loading...!</div>
			:(
				<ul>
				{itemNames.map((single_item) => (
					<li key={single_item}>
					<Product
						price='250'
						name='Winter Collection'
						image={single_item}
					/>
					</li>
				  ))}
				</ul>
			)
			}
			</div>
		</div>
	)
}


export default MultProducts;