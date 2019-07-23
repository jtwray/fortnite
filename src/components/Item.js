import React, {Component} from "react";

class Item extends Component {
	state = {
		nameID: null,
	};
	componentDidMount() {
		console.log(this.props);

		let nameID = this.props.match.params.nameID;
		this.setState({nameID: nameID});
	}

	render() {
		const {nameID}=this.state;
		return (
			<div className="container">
				<h4>{nameID}</h4>
			</div>
		);
	}
}

export default Item;
