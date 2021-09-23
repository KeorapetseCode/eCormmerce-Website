import React, { useState, useEffect } from 'react';
import './styles/Home.css';
//import Product from './Product.js';


function Home(props) {

	var [itemNames, setItems] = useState([]);
	var [loadNames, setNamesStatus] = useState(false);

	useEffect(() => {
		var fetchDirs = async () =>{
			const resp = await fetch("/api/getAllItems");
			const items = await resp.json();
			
			setItems(items);
			setNamesStatus(true);
			//let ans = Array.isArray(dirs_names);
			//console.log("is it arr " + ans);
		}
		fetchDirs();
	}, []);

/*
	var [itemList, setList] = useState('');
	var [load_list, setListStatus] = useState(false);

	useEffect(() => {
		var fetchAllItems = async () =>{
			const resp = await fetch("/api/getAllItems");
			const itemData = await resp.json();

			setList(itemData);
			setListStatus(true);
		}
		fetchAllItems();
	}, []);
	
*/
	return (
		<div className='home'>
			<div className='home__container'>
			{!loadNames ? <div className='loading__icon'>loading...!</div>
			:(
				<ul>
				{itemNames.map((single_item) => (
					<li key={single_item}>{single_item}</li>
				  ))}
				</ul>
			)
			}
			</div>
		</div>
	);
}
export default Home
