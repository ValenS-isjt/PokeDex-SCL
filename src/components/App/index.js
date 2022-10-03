import "./app.css";

import { useEffect, useState } from "react";

import { Navbar } from "../Navbar";
import { Inicio } from "../Inicio";

export const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=900")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === 0 && (
        <Inicio
          pokemons={pokemons}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      )}
      {currentPage === 1 && <div>Lista</div>}
    </div>
  );
};
