import React from 'react';

import './Header.css';

import SearchIcon from '@material-ui/icons/Search';

import main_logo from './img/logo192.png';


function Header() {
	return(
		<div className='header'>
			
			<img className="header_logo"
			src={main_logo}  alt={"The Logo Goes Here"} 
			/>

			<div className="header_search">
					<input className="header_searchInput"
					type="text"
					/>
					<SearchIcon
					className="header_searchIcon" />

			</div>
			<div className="header_nav">
				<div className="header_option">
					<span className="header_optionLineOne">
						Hello Guest
					</span>
				</div>

			</div>

		</div>

	)
}

export default Header