import React from "react";
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Sidebar from "./Sidebar.js";

import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return(
		<Router>
			<div className="app">
				<Header />
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
	)
}

export default App;