//import React from 'react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import './styles/Home.css';
//import MultProducts from './MultProducts';
import Product from './Product.js';
import { Grid } from '@material-ui/core';
//import { Link } from 'react-router-dom';
import { FranchiseFilter } from './FranchiseContext';

function Home() {

	var [itemNames, setItems] = useState([]);
	var [loadNames, setNamesStatus] = useState(false);

	const [fran] = useContext(FranchiseFilter);

	useEffect(() => {
		var fetchAllItems = async () => {
			const resp = await fetch("/api/getAllItems");
			const items = await resp.json();

			setItems(items);
			setNamesStatus(true);
		}
		fetchAllItems();
	}, []);
	//console.log("Brand Filter is: " + fran);
	
	return(
		<div className='home'>
			{!loadNames ? <div className='loading__icon'>loading...!</div>
			:(
				<Grid container justifyContent='center' spacing={1}>
				{itemNames.map((single_item) => (

					<Grid item key={single_item.ItemName} xs={12} sm={6} md={4} lg={4}>
					{/*console.log(single_item)*/}
					<Product
						price={single_item.Price}
						name={single_item.ItemName}
						image={single_item.Image}
						uid={single_item.ItemUid}
					/>
					</Grid>
				  ))}
				</Grid>
			)
			}
		</div>
	)
}

export default Home
