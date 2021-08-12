import React from 'react';
import './styles/Home.css';
//import home_logo from '/img/logo512.png';
import Product from './Product.js';

/*
function Home() {
	return(
		<div className='home'>
			<div className="home__container">
			<div className="home_row">
				<Product />
				<Product />	
			</div>
			<div className="home_row">
				<Product />
				<Product />
				<Product />
			</div>
			
			<div className="home_row">
				<Product />
				<Product />
			</div>
			</div>
		</div>
	)
}
*/

class Home extends React.Component {
	render(){
		return(
			<div className="home">
				<div className="home_container">
					<div className="home_row">
						<Product />
						<Product />
					</div>
					<div className="home_row">
						<Product />
						<Product />
						<Product />
					</div>
					<div className="home_row">
						<Product />
						<Product />
					</div>
				</div>
			</div>
		);
	}
}


export default Home;