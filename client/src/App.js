import React from "react";
import "./styles/App.css";
import Header from './Header.js'
import Home from './Home.js' 

/*
function App() {
  return (
    <div className="app">
		<Header />
		<Home />
	</div>
  );
}

export default App;
*/
class App extends React.Component {
	render() {
		return(
		<div className="app">
			<Header />
			<Home />
			</div>
		);
	}
}

export default App;