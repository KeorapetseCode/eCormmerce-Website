import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import Product from './Product.js';
import { Grid } from '@material-ui/core';
//import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider.js';

function Home() {

	const [productNames, setProduct] = useState([]);
	const [loadNames, setNamesStatus] = useState(false);
	const [{ view_filter }] = useStateValue();

	useEffect(() => {
		var fetchAllItems = async () => {
			const resp = await fetch("/api/getAllItems");
			const items = await resp.json();
			//console.log("Just Called API for all items!\n");
			setProduct(items);
			setNamesStatus(true);
		}
		fetchAllItems();
	}, []);

	if (view_filter){
		let filter_arr = [];
		let len = productNames.length;

		for (let v = 0; v < len; v++){
			if (productNames[v].FranchiseName === view_filter){
				filter_arr.push(productNames[v]);
			}
		}

		return(
			<div className='home'>
				{!loadNames ? <div className='loading__icon'>loading...!</div>
				:(
					<Grid container justifyContent='center' spacing={1}>
					{/*<div>View Filte {view_filter}</div>*/}
					{filter_arr.map((item) => {
						return (
							<Grid item key={item.ItemName} xs={12} sm={6} md={4} lg={4} id={item.FranchiseName}>
								<Product
									name={item.ItemName}
									price={item.Price}
									image={item.Image}
									uid={item.ItemUid}
								/>
							</Grid>
						)						
					}
					)}
				</Grid>)
				}
			</div>
		)
	}
	else{
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
				</Grid>)
				}
			</div>
		)
	}
}
export default Home
