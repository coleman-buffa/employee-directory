import React, { useEffect, useState } from "react";
import './App.css';
import API from "./utils/API";

import Hero from "./components/hero/hero";
import Search from "./components/search/search";
import Table from "./components/table/table";

function App() {

  const [emps, setEmps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEmps, setFilterEmps] = useState([]);
  const [nameOrder, setNameOrder] = useState("");
  //Add additional states to track sorting of each field

  useEffect(() => {
      loadEmps();  
  }, []);

  useEffect(() => {
    if (searchTerm) {
      loadEmpsByName();
    }    
  }, [searchTerm]);

  const loadEmps = () => {
    API.getRoster()
      .then((emps) => {
        setEmps(emps);
        setFilterEmps(emps);
      })
  };

  const loadEmpsByName = () => {
    let tempArr = emps.filter(emp => emp.empname.toLowerCase().includes(searchTerm));
    setFilterEmps(tempArr);
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value.toLowerCase());
    loadEmpsByName();
  };

  const handleNameSort = event => {
    let sort = event.target.getAttribute("data-value");

    if (sort === "descending") {
      setEmps(emps.sort((a,b)=> (a.empname < b.empname ? 1 : -1)));
      setNameOrder("ascending");
    } else if ( sort === "ascending") {
      setEmps(emps.sort((a,b)=> (a.empname > b.empname ? 1 : -1)));
      setNameOrder("descending");
    } else {
      setEmps(emps.sort((a,b)=> (a.empname > b.empname ? 1 : -1)));
      setNameOrder("descending");
    }
  }

  return (
    <div className="App">
      <Hero />
      <Search 
      handleInputChange={handleInputChange}
      results={searchTerm}
      />
      <Table
        filterEmps={filterEmps}
        handleNameSort={handleNameSort}
        nameOrder={nameOrder}
      />
    </div>
  );
}

export default App;