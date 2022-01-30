import React, { useState, useEffect } from "react";
import "./App.css";
import Characters from "./components/characters/Characters";
import Header from "./components/header/Header";
import axios from "axios";
import Filter from "./components/filter/Filter";

function App() {
  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchChars = async () => {
      const charData = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${search}`
      );

      setChars(charData.data);
      setIsLoading(false);
    };
    fetchChars();
  }, [search]);
  return (
    <div className="container">
      <Header />
      <Filter
        filterText={filterText}
        setFilterText={setFilterText}
        getValue={(value) => setSearch(value)}
      />
      <Characters chars={chars} isLoading={isLoading} />
    </div>
  );
}

export default App;
