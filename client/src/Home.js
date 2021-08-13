import React from 'react';
import './styles/Home.css';
//import home_logo from '/img/logo512.png';
import Product from './Product.js';
//import { json } from 'express';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: "",
			loadedData: false
		};
	}

	componentDidMount() {
		fetch('/')
			.then(res => res.json())
				.then(json => {
					this.setState({
						msg: json,
						loadedData: true,
					})
				});
	}

	/*
	getInfo = async () => {
		const response = await fetch('/api/customers');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message)
		}

		return body;
	};
*/
	render(){
		var { myData, loadedData } = this.state;

		if (loadedData === false){
			return(<p>Loading...</p>);
		}
		else if (loadedData === true){
			return (
			<div>
				<h1>{myData}</h1>
			</div>
			);
		} 


		/*
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
		);*/
	}
}

	export default Home;