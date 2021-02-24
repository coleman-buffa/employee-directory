import React, { useEffect, useState } from "react";
import './App.css';
import API from "./utils/API";

import Hero from "./components/hero/hero";
import Search from "./components/search/search";
import Table from "./components/table/table";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
    console.log(users);
  }, []);

  function loadUsers() {
    API.getRoster()
      .then((users) => {
        setUsers(users);
      })
  }

  return (
    <div className="App">
      <Hero />
      <Search />
      <Table />
    </div>
  );
}

export default App;