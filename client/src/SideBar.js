import React, { useState } from "react";
import "./styles/Sidebar.css";
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom';

function Sidebar() {

	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className="navbar">
				<Link to='#' className='menu-bars'>
					<MenuIcon onclick={showSidebar} />
				</Link>
			</div>

			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items'>
					<li className='navbar-toggle'>
						<Link to='#' classname='menu-bars'>
							<Close />
						</Link>
					</li>
					{
						SidebarData.map((val, key) => {
							return (
									<li key={key} className={val.cName}>
										<Link to='#'>
											{val.icon}
											<span>{val.title}</span>
										</Link>
									</li>
							)
						})
					}
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