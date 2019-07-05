import React from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import ItemDetails from "./components/ItemDetails";
import Home from "./components/Home";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/itemdetails" componenet={ItemDetails} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
