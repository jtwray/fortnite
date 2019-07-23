import React from "react";

const Home = (props) => {
	const randomTrinket = () => {
		const randomId = Math.floor(Math.random() * props.items.length);
		props.history.push(`/items/${randomId}`);
	};

	return (
		<div>
			<h1>Home</h1>
			<button onClick={randomTrinket}>Random Trinket</button>
		</div>
	);
};

export default Home;
