import React from "react";
import './App.css';
class fetchdata extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Loading... </h1> </div> ;

		return (
		<div className = "App">
			<h1> data fetched from API </h1> 
				<table>
        <tr>
           <th>User_ID:</th>
           <th>User_Title:</th>
           <th>User_Body:</th> 
        </tr>
        {
				items.map((item) => (
         <tr key = { item.id } >
          <td>{ item.userId }</td>
          <td>{ item.title }</td> 
          <td>{ item.body }</td>
        </tr>
        ))}
		</table>
				
			
		</div>
	);
}
}


export default fetchdata;
