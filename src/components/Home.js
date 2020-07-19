import React from "react";

const Home = (props) => {
	const randomTrinket = () => {
		const randomIndex=Math.floor( Math.random()*props.items.length );
		const randomId=(props.items[Number( randomIndex )].item.name)
		console.log(randomIndex, randomId )
		
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
