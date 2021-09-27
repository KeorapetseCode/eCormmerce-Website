import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



function Header() {
	return(
		<div className='header'>
			<Link to="/">
				<img className="header__logo"
					src={"/logo512.png"}  alt={"The Main Logo Goes Here"} 
				/>
			</Link>

			<div className="header__search">
				<input className="header__searchInput"type="text"/>
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionLineOne">Hello Guest</span>
					<span className="header__optionLineTwo">Register Your Business</span>
				</div>

				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">Orders</span>
				</div>
				<div className="header__optionBasket">
					<ShoppingBasketIcon />
					<span className="header__optionLineTwo
						header__basketCount">0</span>

				</div>
			</div>
		</div>
	)
}

export default Header