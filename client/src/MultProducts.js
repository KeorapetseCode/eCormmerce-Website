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
			{!loadNames ? <div className='loading__icon'>loading...!</div>
			:(
				<Grid container justify='center' spacing={4}>
				{itemNames.map((single_item) => (
					<Grid item key={single_item} xs={12} sm={6} md={4} lg={3}>
					<Product
						price={single_item.Price}
						name={single_item.ItemName}
						image={single_item.Image}
					/>
					</Grid>
				  ))}
				</Grid>
			)
			}
		</div>
	)
}


export default MultProducts;