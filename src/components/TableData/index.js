import React from "react";


function TableData(props) {
  return (

 
      <tr key={props.index} >
       
        <td >{props.firstName}</td>
        <td >{props.lastName}</td>
        <td >{props.gender}</td>
        <td>{props.phoneNumber}</td>
        <td >{props.location}</td>
      </tr>
     
    
  );
}

export default TableData;
