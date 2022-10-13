import React from 'react';
//import { useContext } from 'react'
import { Link } from 'react-router-dom';
import './styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
//import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { MdShoppingBasket } from "react-icons/md";
import { useStateValue } from './StateProvider.js';


function Header() {
	
	const [{ basket }, dispatch] = useStateValue();
	
	const defaultFilter = () => {
		dispatch({
			type: "FILTER",
			filterValue: null
		});
		console.log("Default Called!!!");
	}

	return(
		<div className='header'>
			<Link to="/" onClick={defaultFilter}>
				<img className="header__logo"
					src={"./logo512.png"}  alt={"The Main Logo Goes Here"} 
				/>
			</Link>

			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<Link to='/login'>
					<div className="header__option">
						<span className="header__optionLineOne">Hello Guest</span>
						<span className="header__optionLineTwo">Sign In</span>
					</div>
				</Link>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<MdShoppingBasket className="header__basketIcon" />
						<span className="header__basketCount">{basket?.length}</span>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header