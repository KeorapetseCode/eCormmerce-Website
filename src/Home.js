import React from 'react'
import './Home.css'
import home_logo from './img/logo512.png'
import Product from './Product'

function Home() {
	return(
		<div className='home'>
			<div className="home__container">
			<img className="home_main_image" 
				src={home_logo} alt={"Home Main Logo Goes Here"}
			/>
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

export default Home