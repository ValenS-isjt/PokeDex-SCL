import "./searchbar.css";
import { useState } from "react";

export const SearchBar = ({ setSearchText }) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    setSearchText(text);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="search-container">
      <span>Ingrese el nombre del pokemon buscado</span>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Searching..."
      />
      <button type="submit" className="search-button" onClick={handleClick}>
        Buscar
      </button>
    </div>
  );
};
