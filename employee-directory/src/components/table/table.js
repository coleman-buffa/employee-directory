import React from "react";
import "./table.css";

function Table() {
  return (
    <table className="hover">
      <thead>
        <tr>
          <th>Table Header 1</th>
          <th>Table Header 2</th>
          <th>Table Header 3</th>
          <th>Table Header 4</th>
          <th>Table Header 5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* Render all table rows with a map function */}
          <td>Content 1</td>
          <td>Content 2</td>
          <td>Content 3</td>
          <td>Content 4</td>
          <td>Content 5</td>
        </tr>

      </tbody>
    </table>
  );
  
}

export default Table;