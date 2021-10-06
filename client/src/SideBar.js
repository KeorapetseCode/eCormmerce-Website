import React, { useState, useContext } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom';
import "./styles/Sidebar.css";
//import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
import {FranchiseContext} from './FranchiseContext';


function Sidebar() {

	const [sidebar, setSidebar] = useState(false);
	const [franchiseList, setFranchiseList] = useContext(FranchiseContext);

	//brand_lst.map((item))
	//console.log("Var type is: " + typeof franchiseList)
	//console.log("fddfdf " + franchiseList);

	const showSidebar = () => {
	//	flip sidebar to opposite value(if true, turn to false. If false turn to true)
		setSidebar(!sidebar);
	}

	return (
		<>			
			<div className='navbar-toggle'>
				{sidebar ? <Close onClick={showSidebar}/> : <MenuIcon onClick={showSidebar}/>}
			</div>
			<nav className={sidebar ? 'side-menu active' : 'side-menu'}>

				<ul className='side-menu-items' onclick={showSidebar}>
					{franchiseList.map((val) => {
						return (
							<li key={val.name} className='sidebar-text'>
								<Link to='#'>
									<span>{val.name}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}

export default Sidebar;
