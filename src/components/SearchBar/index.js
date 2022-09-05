import "./searchbar.css";

export const SearchBar = ({ searchText, setSearchText }) => {
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-container">
      <span>Ingrese el nombre del pokemon que desea buscar</span>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Searching..."
      />
    </div>
  );
};
