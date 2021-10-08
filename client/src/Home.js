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

	const [productNames, setProduct] = useState([]);
	const [loadNames, setNamesStatus] = useState(false);

	const [filtVal] = useContext(FranchiseFilter);
	//const [myarr, setArr] = useState([]);

	useEffect(() => {
		var fetchAllItems = async () => {
			const resp = await fetch("/api/getAllItems");
			const items = await resp.json();

			setProduct(items);
			setNamesStatus(true);
		}
		fetchAllItems();
	}, []);
	//console.log("Brand Filter is: " + filtVal);
//	Trying to get an array with franchiseNames and without any name duplicating
	const franchiseArr = () => {
		if (loadNames === true){
			let temp = [];
		
			productNames.forEach(element => {
					temp.push(element.FranchiseName);
			});

			let brandArr = temp.filter((c, index) => {
				return temp.indexOf(c) === index;
			});
			//console.log("Duplicates are " + noDuplicates);
			return brandArr;
		}
		else if (loadNames === false)
			return null;
	}
//	if (!filtVal){
		return(
			<div className='home'>
				{!loadNames ? <div className='loading__icon'>loading...!</div>
				:(<Grid container justifyContent='center' spacing={1}>
					{productNames.map((item) => {
						if (filtVal && filtVal === item.FranchiseName)
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
//	}
}
/*productNames.map((single_item) => {
							<Grid item key={single_item.ItemName} xs={12} sm={6} md={4} lg={4}>
								<Product
									price={single_item.Price}
									name={single_item.ItemName}
									image={single_item.Image}
									uid={single_item.ItemUid}
								/>
							</Grid>
						})*/
export default Home
