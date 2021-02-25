import React from "react";
import "./table.css";
import Row from "../row/row";

function Table(props) {
  return (
    <table className="hover">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map(emp => (
          <Row
            image={emp.image}
            name={emp.empname}
            email={emp.email}
            phone={emp.phone}
            dob={emp.dob}
            key={emp.empname}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;