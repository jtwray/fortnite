import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class App2 extends Component {
	render() {
		return (
			<Router>
				<div style={{width: 1000, margin: "0 auto"}}>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/items">Items</Link>
						</li>
					</ul>

					<hr />

					<Route exact path="/" component={Home} />
					<Route path="/items" component={Items} />
				</div>
			</Router>
		);
	}
}
export default App2;