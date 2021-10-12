import React from "react";
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Sidebar from "./Sidebar.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/App.css";

function App() {
	return(
		<Router>
			<div className="app">
				<Header />
				
				<Switch>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/">
						<Sidebar />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App;