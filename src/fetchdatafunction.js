import React, { useState, useEffect } from "react";
import './App.css';
import {getData} from './util.js';
function Fetchdata1() 
{
    const [items1, setItems1] = useState([ ]);
    const [error, setError] = useState(null);
    
   useEffect(() => {
    let url="https://jsonplaceholder.typicode.com/posts";
    getData(url).then(response =>{setItems1(response)})
    .catch((err) => {
     setError(err.message)
    });
      },[ ]);
      
      if (items1.length===0) return <div>
          {error && <div>{error}</div>}
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
				items1.map((item) => (
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
export default Fetchdata1;
