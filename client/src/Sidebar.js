import React, { useState, useEffect } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

//import HomeIcon from '@material-ui/icons/Home';
import "./styles/Sidebar.css";
import { useStateValue } from './StateProvider.js';

function Sidebar() {

	const [sidebar, setSidebar] = useState(false);
	const [franchiseNames, setFanchiseNames] = useState([]);
	const [loadFranchise, setFranchiseStatus] = useState(false);

	useEffect(() =>{
		const fetchBrandNames = async () => {
			const respFranchise = await fetch("/api/folderNames");
			const franchiseData = await respFranchise.json();

			setFanchiseNames(franchiseData);
			setFranchiseStatus(true);
		}
		fetchBrandNames();
	}, []);

	const [state, dispatch] = useStateValue();//eslint-disable-line
	
	const defaultFilter = () => {//eslint-disable-line
		dispatch({
			type: "FILTER",
			filterValue: null
		});
		console.log("Default Called from Sidebar!!!");
	}
	
	const brandFilter = (brand_title) => {
		
		dispatch({
			type: "FILTER",
			filterValue: brand_title
		});
		//console.log("Brand Filter is caught");
	}

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className='sidebar-toggle'>
				{sidebar ? <Close onClick={showSidebar}/> : <MenuIcon onClick={showSidebar}/>}
			</div>
			<nav className={sidebar ? 'side-menu active' : 'side-menu'}>
				<ul className='side-menu-items' onClick={showSidebar}>
					{/*<Link to="/" onClick={defaultFilter} className='sidebar-text'>
						<HomeIcon className='home__icon' />
						<span className='home__icon_text'>Home</span>
					</Link>*/}
					{!loadFranchise ? <div className='loading__icon'>loading...!</div>
					:(
						franchiseNames.map((brand) => {
							return(
								<li key={brand.name} className='sidebar-text'>
									<Link to='' onClick={() => brandFilter(brand.name)}>
										<span>{brand.name}</span>
									</Link>
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
