import { useEffect, useState } from "react";
import { PokeCard } from "../PokeCard";
import "./pokelist.css";

export const PokeList = ({ pokemons, searchText }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const filteredList = pokemons.filter((pokemon) =>
      pokemon.name.includes(searchText.toLowerCase())
    );

    const promises = filteredList.map((pokemon) => {
      return fetch(pokemon.url).then((response) => response.json());
    });
    Promise.all(promises).then((results) => {
      setPokemonData(results);
    });
  }, [pokemons, searchText]);

  return (
    <div className="container">
      {pokemonData.map((pokemon) => {
        return <PokeCard pokemon={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
};
