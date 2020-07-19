import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Items from "./components/Items";
import Item from "./components/Item";
import "./App.css";

class App extends React.Component {
	state = {
		loading: true,
		items: null,
		error: "",
	};
	loadData = () => {
		this.setState({loading: true});
		return axios
			.get(`https://fortnite-api.theapinetwork.com/store/get`, {
				timeout: 0,
				headers: {
					Authorization: `0be4c24b512699c79e489f03e25c0176`,
				},
			})
			.then((result) => {
				console.log(result);
				this.setState({
					items: result.data.data,
					loading: false,
					error: false,
				});
				{
					console.log(result.data.data);
				}
			})
			.catch((error) => {
				console.error("error:", error);
				this.setState({
					error: `${error}`,
					loading: false,
				});
			});
	};

	componentDidMount() {
		this.loadData();
	}

	// axios
	// 	.get(`https://fortnite-api.theapinetwork.com/store/get`)
	// 	.then((response)=>console.log( this.state.items:response.date.items"in CDM after Axios Get/before setState" ))
	// 	.then((response) => {
	// 		this.setState( {items:response.data.items})

	// 	} )

	// 	.then(() =>
	// 	axios.get(
	// 		`https://fortnite-public-api.theapinetwork.com/store/get`
	// 		)
	// 		.then(()=>console.log( this.state.items,"in CDM after After setState" ))
	// 	)

	// 	.catch((err) => {console.error("error:",err)});

	render() {
		const {items, error, loading} = this.state;
		if (loading) {
			return <p>Loading...</p>;
		}
		if (error) {
			return (
				<p>
					There was an error loading the weapons..chocobos...Pete and
					Repeat sat on a log,If Pete fell off; who's left?...{" "}
					<button onClick={this.loadData}>`^\_(6;9)_/^`...</button>
				</p>
			);
		}
		return (
			<BrowserRouter>
				<div>
					<strong>
						<nav>
							<Link to="/">
								{""}`'\_(o=o)_/`'{""}
							</Link>

							<Link to="/items">Items</Link>
						</nav>
					</strong>
					<Switch>
						<Route
							path="/"
							exact
							render={(props) => (
								<Home {...props} items={items} />
							)}
						/>
						<Route
							path="/items"
							exact
							render={(props) => (
								<Items {...props} items={items} />
							)}
						/>
						<Route path="/items/:id" 	render={(props) => (
							<Item {...props} items={items} />
						)}
					/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
