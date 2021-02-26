import React from "react";
import "./table.css";
import Row from "../row/row";

function Table(props) {
  return (
    <table className="hover">
      <thead>
        <tr>
          <th>Image</th>
          <th className="name-header" onClick={props.handleNameSort} data-value={props.nameOrder}>Name <i className="fas fa-sort"></i></th>
          <th className="phone-header" onClick={props.handlePhoneSort} data-value={props.phoneOrder}>Phone <i className="fas fa-sort"></i></th>
          <th className="email-header" onClick={props.handleEmailSort} data-value={props.emailOrder}>Email <i className="fas fa-sort"></i> </th>
          <th className="dob-header" onClick={props.handleDOBSort} data-value={props.dobOrder}>DOB <i className="fas fa-sort"></i></th>
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