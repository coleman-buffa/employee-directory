import React from "react";
import "./table.css";
import Row from "../row/row";

function Table(props) {
  return (
    <table className="hover">
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={props.handleSort} data-value={props.sortOrder}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.filterEmps.map(emps => (
          <Row
            image={emps.image}
            name={emps.empname}
            email={emps.email}
            phone={emps.phone}
            dob={emps.dob}
            key={emps.empname}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;