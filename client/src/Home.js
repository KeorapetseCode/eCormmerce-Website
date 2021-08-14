import React from 'react';
import './styles/Home.css';
//import home_logo from '/img/logo512.png';
//import Product from './Product.js';
//import { json } from 'express';


class Home extends React.Component {

	state = {
		msgFromApi: "Keorapetse",
		loadStatus: false
	};

	async componentDidMount() {
		const resp = await fetch('/api')
		const data = await resp.text();
		this.setState({msgFromApi: data, loadStatus: true});
	}

	render() {
		return (
			<div>
				{!this.state.loadStatus ?<div>loading...!</div>
				 :(
					 <div>
						 <div>It loaded</div>
						 <div>{this.state.msgFromApi}</div>
					 </div>
				 )
				}
			</div>
		)
	}

/*
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
				<div>
					<p>{ this.state.msgFromApi } </p>
				</div>
				<div className="home_row">
					<Product />
					<Product />
				</div>
			</div>
		</div>
		);
	}*/
}

	export default Home;