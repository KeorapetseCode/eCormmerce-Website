import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import "./styles/Sidebar.css";
import {FranchiseFilter} from './FranchiseContext.js';

function Sidebar() {

	const [sidebar, setSidebar] = useState(false);
	const [franchiseNames, setFanchiseNames] = useState([]);
	const [loadFranchise, setFranchiseStatus] = useState(false);

	const [filterValue, setFilterVal] = useContext(FranchiseFilter);
	
	useEffect(() =>{
		const fetchBrandNames = async () => {
			const respFranchise = await fetch("/api/folderNames");
			const franchiseData = await respFranchise.json();

			setFanchiseNames(franchiseData);
			setFranchiseStatus(true);
		}
		fetchBrandNames();
	}, []);

	const showSidebar = () => setSidebar(!sidebar);

	console.log("Filter Value: " + filterValue);

	return (
		<>			
			<div className='navbar-toggle'>
				{sidebar ? <Close onClick={showSidebar}/> : <MenuIcon onClick={showSidebar}/>}
			</div>
			<nav className={sidebar ? 'side-menu active' : 'side-menu'}>

				<ul className='side-menu-items' onClick={showSidebar}>
					<Link to="/" className='sidebar-text'>
						<HomeIcon />
						<span>Home</span>
					</Link>
					{!loadFranchise ? <div className='loading__icon'>loading...!</div>
					:(
						franchiseNames.map((brand) => {
							return(
								<li key={brand.name} className='sidebar-text'>
									<a href='#' onClick={() => setFilterVal(brand.name)}>
										<span>{brand.name}</span>
									</a>
								</li>
							)
						})
					)}
				</ul>
			</nav>
		</>
	)
}

export default Sidebar;
