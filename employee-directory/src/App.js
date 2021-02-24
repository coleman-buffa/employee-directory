import React from "react";
import './App.css';
import Wrapper from "./components/wrapper/wrapper";
import Hero from "./components/hero/hero";
import Search from "./components/search/search";
import Table from "./components/table/table";

//Make array of objects here


function App() {
  return (
    <div className="App">
      <Hero />    
      <Search />
      <Table />
    </div>
  );
}

export default App;
