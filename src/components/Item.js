import React from "react";

export default function ( props ) {
	const item=props.items.find(
		( i ) => String( i.id )===props.match.params.id 
		{                                    console.log( i, item ) }
		);

	if (!item) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div className="image-wrapper">
				<img src={item.imageUrl} alt={item.name} />
			</div>

			<div className="item-title-wrapper">
				<h2>{item.item.name}</h2>
				<h4>${item}</h4>
			</div>
		</div>
	);
}
