import React, { useState } from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Sidebar from "./Sidebar.js";
import FullScreenView from "./FullScreenView.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import "./styles/App.css";

function App() {

	const [selectedImg, setSelectedImg] = useState(null);

	const setViewImg = (myImg) => {
	//	console.log("from setView: " + myImg + "\n");
		setSelectedImg(myImg);
	}

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
						<Home setSelectedImg={setViewImg} />
						{selectedImg && <FullScreenView selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App;