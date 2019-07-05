import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
const ItemDetails = () => {
	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);
	const fetchItems = async () => {
		const data = await fetch(
            'https://fortnite-api.theapinetwork.com/prod09/upcoming.get',
		);
		console.log(data);
		const items = await data.json();
		console.log(items.items);
		setItems(items.items);
	};
	return (
		<div>
			<h1>ItemDetails</h1>
			{items.map((item) => (
				<h2 key={item.itemid}>{item.name}</h2>
			))}
		</div>
	);
};

export default ItemDetails;
