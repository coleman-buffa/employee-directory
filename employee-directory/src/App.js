import React from "react";
import './App.css';
import Hero from "./components/hero/hero";
import Search from "./components/search/search";
import Table from "./components/table/table";



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