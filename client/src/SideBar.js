import React, { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom';
import "./styles/Sidebar.css";
//import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';

function Sidebar() {

	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => {
		setSidebar(!sidebar);
	//	console.log("side bar now is" + sidebar + "\n");
	}

	return (
		<>			
			<div className='navbar-toggle'>
				{sidebar ? <Close onClick={showSidebar}/> : <MenuIcon onClick={showSidebar}/>}
			</div>

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

/*
			<ul>
				{
					SideBarData.map((val, key) => {
						return <li key={key}> {val.icon} {val.title}</li>
					})
				}
			</ul>
			*/