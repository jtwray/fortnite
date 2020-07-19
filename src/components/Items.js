import React from "react";
import {Link, Route} from "react-router-dom";
import Item from "./Item";
function Items( {items}, {match},...props) {
	return (
		<div style={backStyles}>
			{console.log(items)}
			<h1>Items</h1>
			{items.map((item,id) => {
				const {name}=item.item;
								

				return (
					<Link to={`/items/${item.item.name}`}
						style={linkStyles}
						key={item.item.name+item.itemId}>
						<div>
						({item.item.name}+{item.itemId})
						</div>
								
						<div style={cardStyles}>
							<img
								src={item.item.images.icon}
								style={imageIconStyle}
								alt={name}
							/>

							

							<h2>{name}</h2>

							<h3 style={itemBlurb}>{item.item.description}</h3>
						</div>
					</Link>
				);
			} )}
			
		</div>
	);
};

const itemBlurb = {
	color: "rgb(360,156,190)",
};
const linkStyles = {
	textDecoration: "none",
	margin:"10px",
	color: "white",
	textShadow: `4.9px 4.9px 0.3px white,
		3.5px  3.3px 0.0px rgb(250,205,250),
		 3.2px  2.1px 0.0px rgb(250,205,250),
		 3.0px  1.1px 1.0px rgb(250,205,250),
		 2.2px  0.1px 1.0px #b28 ,
		 1.0px -1.2px 0.3px rgb(250,205,250),`,
};
const cardStyles = {
	display: "flex",
	margin: "2%",
	flexDirection: "column",
	justifyContent: "spaceBetween",
	backgroundColor: "rgb(11,20,18)",
	boxShadow: "2px 1px .1px grey",

	// background:`url({item.item.images.background})`,
	textShadow:
		"rgb(62, 107, 134) 3.5px 3.3px 0px, rgb(62, 107, 134) 3.2px 2.1px 0px, rgb(62, 107, 134) 3px 1.1px 1px, grey -0.9px -1.9px 0.3px",
};    

const imageIconStyle = {
	maxWidth: `55%`,
	width: `13rem`,

};

const backStyles = {
	backgroundColor: "rgb(4, 7, 76)",
	border: "10px double #rgb(22, 233, 222)",
	textShadow:
		"rgb(62, 107, 134) 3.5px 3.3px 0px, rgb(62, 107, 134) 3.2px 2.1px 0px, rgb(62, 107, 134) 3px 1.1px 1px, grey -0.9px -1.9px 0.3px",
	boxShadow: "3.2px 3.1px 10px #b28",
};


export default Items;
