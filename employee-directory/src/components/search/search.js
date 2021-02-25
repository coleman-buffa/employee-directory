import React from "react";
import "./search.css";

function Search(props) {
  return (
    <div className="grid-x">
      <input className="searchBar" type="search" placeholder="Search" value={props.searchTerm} onChange={props.handleInputChange}/>
    </div>

  );
}

export default Search;