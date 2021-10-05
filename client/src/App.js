import React from "react";
import "./styles/App.css";

import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout';
import Sidebar from "./Sidebar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
	
	return(
		<Router>
			<div className="app">
				<Header />{/*The Header is rendered regardless of any page we are on*/}
				<Sidebar /> 
				<Switch>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;