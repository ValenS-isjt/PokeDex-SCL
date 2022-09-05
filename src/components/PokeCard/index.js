import "./PokeCard.css";
import { getType } from "./utils";

export const PokeCard = ({ pokemon }) => {
  const { name, sprites, id, types } = pokemon;
  const mainType = types[0].type.name;
  return (
    <div className={`card ${getType(mainType)}`}>
      <img
        src={sprites.other["official-artwork"].front_default}
        alt={name}
        height={100}
        loading="lazy"
        className="card-image"
      />
      <div className="horizontal-content">
        <h2 className="card-name">{name}</h2>
      </div>
      <div className="horizontal-content">
        <span className="card-types">
          {types.map((type) => type.type.name).join(", ")}
        </span>
        <span className="card-id">#{id}</span>
      </div>
    </div>
  );
};
