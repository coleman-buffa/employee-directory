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
  const [phoneOrder, setPhoneOrder] = useState("");
  const [emailOrder, setEmailOrder] = useState("");

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

  const handlePhoneSort = event => {
    let sort = event.target.getAttribute("data-value");

    if (sort === "descending") {
      setEmps(emps.sort((a,b)=> (a.phone < b.phone ? 1 : -1)));
      setPhoneOrder("ascending");
    } else if ( sort === "ascending") {
      setEmps(emps.sort((a,b)=> (a.phone > b.phone ? 1 : -1)));
      setPhoneOrder("descending");
    } else {
      setEmps(emps.sort((a,b)=> (a.phone > b.phone ? 1 : -1)));
      setPhoneOrder("descending");
    }
  }

  const handleEmailSort = event => {
    let sort = event.target.getAttribute("data-value");

    if (sort === "descending") {
      setEmps(emps.sort((a,b)=> (a.email < b.email ? 1 : -1)));
      setEmailOrder("ascending");
    } else if ( sort === "ascending") {
      setEmps(emps.sort((a,b)=> (a.email > b.email ? 1 : -1)));
      setEmailOrder("descending");
    } else {
      setEmps(emps.sort((a,b)=> (a.email > b.email ? 1 : -1)));
      setEmailOrder("descending");
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
        nameOrder={nameOrder}
        handleNameSort={handleNameSort}        
        phoneOrder={phoneOrder}
        handlePhoneSort={handlePhoneSort}
        emailOrder={emailOrder}
        handleEmailSort={handleEmailSort}
      />
    </div>
  );
}

export default App;