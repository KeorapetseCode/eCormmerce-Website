import React, { useState } from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Sidebar from "./Sidebar.js";
import Login from "./Login.js";
import FullScreenView from "./FullScreenView.js";
import UploadForm from "./UploadForm.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import "./styles/App.css";

function App() {

	const [selectedImg, setSelectedImg] = useState(null);
	const [slides, prepSlideShow] = useState(null);//eslint-disable-line

	const setViewImg = (myImg) => {
		setSelectedImg(myImg);
		prepSlideShow(myImg)
/*Now need to send slide to slideshowdata for setting up and return it as an array of images to FullScreenView.js
		 **HINT**____________________________________________________________________________________
		 	USE REDUCER.
				This is because the slide show array (slides) needs to be accessed by
				SlideShowData.js and SlideShowData is not a component. So we cannot wrap it with a
				SlideShowData.Provider. SlideShowData is doesnt have return() so it's not a component

			In reducer the array will be easy to set up. Use the same idea as basket set up
			and take data in and out of the array.
		 */ 
	}

	return(
		<Router>
			<div className="app">
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path='/upload'>
						<Header />
						<UploadForm />
					</Route>
					<Route path="/">
						<Header />
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