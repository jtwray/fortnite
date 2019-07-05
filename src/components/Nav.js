import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<nav >
				<Link to="/">
				<h3>logo</h3>
				</Link>
				<ul>
					<Link to="/about">
						<li >About</li>
					</Link>
					<Link to="/itemdetails">
						<li >ItemDetails</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
