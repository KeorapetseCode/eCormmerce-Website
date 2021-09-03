import React from 'react';

import './styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import main_logo from './items/logo192.png';

function Header() {
	return(
		<div className='header'>

			<img className="header_logo"
				src={main_logo}  alt={"The Main Logo Goes Here"} 
			/>

			<div className="header_search">
					<input className="header_searchInput"type="text"/>
					<SearchIcon
					className="header_searchIcon" />
			</div>
		</div>

	)
}

export default Header