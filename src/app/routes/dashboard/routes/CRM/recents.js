import React from "react";
import {db} from "../../../../../firebase/firebase";

class Recents extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}

	async componentDidMount() {
		let us = [];
		const doc_ref = db.collection('users').doc('manummasson8').collection('tasks');
		await doc_ref.get().then((querySnapshot) => {

			querySnapshot.forEach((doc) => {
				us.push(doc.data());
				console.log(us);
			});

		});
		this.setState({ data : us });
	}

	render() {
		// console.log(this.state.us);
		const {data} = this.state;
		console.log(data);
		return (
			<div> Heello!!:
				{data.map(x => <div> {x.title}</div>)
				}
			</div>
		);
	}g
}



export default Recents;