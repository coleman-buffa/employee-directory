import React from "react";
import "./row.css";


function Row({ image, name, email, phone, dob }) {
  return (
    <tr>
      <td><img src={image} alt={name}/></td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{dob}</td>
    </tr>  
  );
}

export default Row;