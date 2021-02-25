import React, { useEffect, useState } from "react";
import './App.css';
import API from "./utils/API";

import Hero from "./components/hero/hero";
import Search from "./components/search/search";
import Table from "./components/table/table";

function App() {

  const [emps, setEmps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      })
  };

  const loadEmpsByName = () => {
    setEmps(emps.filter(emp => emp.empname.toLowerCase().includes(searchTerm.toLowerCase())));
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
    loadEmpsByName();
  };

  return (
    <div className="App">
      <Hero />
      <Search 
      handleInputChange={handleInputChange}
      results={searchTerm}
      />
      <Table
        emps={emps}
      />
    </div>
  );
}

export default App;