import { SearchBar } from "../SearchBar";
import "./app.css";
import pokelogo from "../../assets/images/poke-logo.png";
import { useEffect, useState } from "react";
import { PokeList } from "../PokeList";

export const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <img src={pokelogo} alt="logo" className="logo" />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {searchText.length > 1 && (
        <PokeList pokemons={pokemons} searchText={searchText} />
      )}
    </div>
  );
};
