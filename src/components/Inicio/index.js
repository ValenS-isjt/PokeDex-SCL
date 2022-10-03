import pokelogo from "../../assets/images/poke-logo.webp";
import { SearchBar } from "../SearchBar";
import { PokeList } from "../PokeList";

import "./inicio.css";

export const Inicio = ({ pokemons, searchText, setSearchText }) => {
  return (
    <>
      <img src={pokelogo} alt="logo" className="logo" />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {searchText.length > 0 && (
        <PokeList pokemons={pokemons} searchText={searchText} />
      )}
    </>
  );
};
