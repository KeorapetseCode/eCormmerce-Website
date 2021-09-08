import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import Product from './Product.js';


function Home(props) {
/*
	var [dirs_names, setDirs] = useState('');
	var [load_dirNames, setDirStatus] = useState(false);

	useEffect(() => {
		var fetchDirs = async () =>{
			const resp = await fetch("/api/folderNames");
			const folder_names = await resp.text();
			
			setDirs(folder_names);
			setDirStatus(true);
		}
		fetchDirs();
	}, []);
*/

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

	return (
		<div className='home'>
			<div className='home__container'>
				{!load_list ?<div className='loading__icon'>loading...!</div>
					:(
						<div>
							{console.log("It loaded" + itemList[1])}
							<div className='home__row'>
							<Product
								price='250'
								name='Winter Collection'
								image='./GodBlessMyHustle/Black winter set.jpg'
							/>
							</div>
						</div>
					)
				}
			</div>
		</div>
	);
}
/* <Product src={'/' + itemList[0].brand + '/' + itemList[0].items[1]}/>
*/
export default Home
