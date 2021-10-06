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
	const rr = useContext(FranchiseContext);

	const showSidebar = () => {
	//	flip sidebar to opposite value(if true, turn to false. If false turn to true)
		setSidebar(!sidebar);
	}

	return (
		<>			
			<div className='navbar-toggle'>
				{sidebar ? <Close onClick={showSidebar}/> : <MenuIcon onClick={showSidebar}/>}
			</div>
			<div>{rr}</div>
			<nav className={sidebar ? 'side-menu active' : 'side-menu'}>

				<ul className='side-menu-items' onclick={showSidebar}>
					{SidebarData.map((val, key) => {
						return (
							<li key={key} className={val.cName}>
								<Link to={val.path}>
									{val.icon}
									<span>{val.title}</span>
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
