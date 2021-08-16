import React from 'react';
import './styles/Home.css';
import packageJson from '../package.json';
//import home_logo from '/img/logo512.png';
//import Product from './Product.js';
//import { json } from 'express';


class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loadStatus: false,
			data: ""
		};
	}

	async componentDidMount() {
		const url_json = packageJson.proxy + "/api";
		console.log(url_json);
		const resp = await fetch(url_json);
		const new_data = await resp.text();

		this.setState({data: new_data, loadStatus: true});
	}


	render() {
		return (
			<div>
				{!this.state.loadStatus ?<div>loading...!</div>
				 :(
					 <div>
						 <div>It loaded</div>
						 <div>{this.state.data}</div>
						{/*
						<img className="prod_image"
						src={this.state.images}
						alt={"item goes here"}
						/>
						*/}
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