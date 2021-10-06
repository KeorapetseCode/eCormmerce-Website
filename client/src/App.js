import React, { useState } from "react";
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout';
import Sidebar from "./Sidebar";

import "./styles/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FranchiseContext } from "./FranchiseContext.js";


function App() {
	const [franchiseList, setFranchiseList] = useState([]);

	return(
		<Router>
			<div className="app">
				<Header />{/*The Header is rendered regardless of any page we are on*/}
				<FranchiseContext.Provider value={[franchiseList, setFranchiseList]}>
					<Sidebar />
				</FranchiseContext.Provider>
				<Switch>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/">
					<FranchiseContext.Provider value={[franchiseList, setFranchiseList]}>
						<Home />
					</FranchiseContext.Provider>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;