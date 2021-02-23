import './App.css';
import Wrapper from "./components/wrapper/wrapper";
import Hero from "./components/hero/hero";
import Search from "./components/search/search";
import Table from "./components/table/table";

import roster from "./roster.json";

function App() {
  return (
    <div>
      <Hero />
      <Wrapper>
        <Search />
        <Table />
      </Wrapper>
    </div>

  );
}

export default App;
