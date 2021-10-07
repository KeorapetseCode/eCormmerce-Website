import React, { useState } from "react";
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Sidebar from "./Sidebar.js";

import "./styles/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FranchiseFilter } from "./FranchiseContext.js";


function App() {
	const [filterValue, setFilterVal] = useState(null);

	return(
		<Router>
			<div className="app">
				<Header />{/*The Header is rendered regardless of any page we are on*/}
				<FranchiseFilter.Provider value={[filterValue, setFilterVal]}>
					<Sidebar />
				</FranchiseFilter.Provider>
				<Switch>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/">
					<FranchiseFilter.Provider value={[filterValue, setFilterVal]}>
						<Home />
					</FranchiseFilter.Provider>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;