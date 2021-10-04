import React, { useState } from "react";
import "./styles/Navigation.css";
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';

function Navigation() {

	const [nav, setNav] = useState(false);
	const menuClicked = () => {
		if (nav === false)
			setNav(true);
		else if (nav === true)
			setNav(false);
	}
	
	
	const franchise_list = [
		{
			title: 'My brand_1',
			url: "#",
			cName: 'nav-links'
		},
		{
			title: 'My brand_2',
			url: '#',
			cName: 'nav-links'
		},
		{
			title: 'My brand_3',
			url: '#',
			cName: 'nav-links'
		}
	];
	const name = ['Ke', 'Gk', 'dd'];

	return (
		<nav className="nav__bar">
			<h1 className="nav__logo">React</h1>

			<div className="menu__icon" onClick={menuClicked}>
				{!nav ? (<div>
					<MenuIcon />
					<ul>
						{name.map((item) => {
							<li key={item}>
								<div>{item}</div>
								{/*console.log(item)*/}
							</li>
						})}
					</ul>

					</div>) :(
					<div> <Close /> </div>
					)
				}
			</div>
			
			
			
		</nav>
	)
}

export default Navigation;