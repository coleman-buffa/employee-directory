import React, { useEffect, useState } from "react";
import './App.css';
import API from "./utils/API";

import Hero from "./components/hero/hero";
import Search from "./components/search/search";
import Table from "./components/table/table";

function App() {

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.getRoster()
      .then((users) => {
        setUsers(users);
      })
  }

  function SearchString(str) {
    //
  }

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }

  return (
    <div className="App">
      <Hero />
      <Search 
      handleInputChange={handleInputChange}
      results={searchTerm}
      />
      <Table
        users={users}
      />
    </div>
  );
}

export default App;