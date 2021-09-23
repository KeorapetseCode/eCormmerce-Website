import React, { useState, useEffect } from 'react';
import './styles/Home.css';
//import Product from './Product.js';


function Home(props) {

	var [dirs_names, setDirs] = useState([]);
	var [load_dirNames, setDirStatus] = useState(false);

	useEffect(() => {
		var fetchDirs = async () =>{
			const resp = await fetch("/api/folderNames");
			const folder_names = await resp.json();
			
			setDirs(folder_names);
			setDirStatus(true);
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
			{!load_dirNames ? <div className='loading__icon'>loading...!</div>
			:(
				<div>
				{dirs_names.map((sngl_item) => (
					<div>{sngl_item}</div>
				  ))}
				</div>
			)
			}
			</div>
		</div>
	);
}
export default Home
