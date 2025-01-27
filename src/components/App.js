import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchInput, setSearchInput] = useState("")

  function handleSearch(input){
    setSearchInput(input);
    console.log("input:", input)
  };

  
  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer searchInput={searchInput}/>
    </div>
  );
}

export default App;
