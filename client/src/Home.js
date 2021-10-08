import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import Product from './Product.js';
import { Grid } from '@material-ui/core';
//import { Link } from 'react-router-dom';
//import { useStateValue } from './StateProvider.js';

function Home() {

	const [productNames, setProduct] = useState([]);
	const [loadNames, setNamesStatus] = useState(false);

	useEffect(() => {
		var fetchAllItems = async () => {
			const resp = await fetch("/api/getAllItems");
			const items = await resp.json();

			setProduct(items);
			setNamesStatus(true);
		}
		fetchAllItems();
	}, []);


		return(
			<div className='home'>
				{!loadNames ? <div className='loading__icon'>loading...!</div>
				:(<Grid container justifyContent='center' spacing={1}>
					{productNames.map((item) => {
						return(
							<Grid item key={item.ItemName} xs={12} sm={6} md={4} lg={4} id={item.FranchiseName}>
								<Product
									name={item.ItemName}
									price={item.Price}
									image={item.Image}
									uid={item.ItemUid}
								/>
							</Grid>
						)
					})}
					</Grid>
					)
				}
			</div>
		)
}
export default Home
