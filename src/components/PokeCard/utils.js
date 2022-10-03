export const getType = (mainType) => {
  switch (mainType) {
    case "fire":
      return "typeFire";
    case "electric":
      return "typeElectric";
    case "grass":
      return "typeGrass";
    case "water":
      return "typeWater";
    case "poison":
      return "typePoison";
    case "fighting":
      return "typeFighting";
    case "ground":
      return "typeGround";
    case "ghost":
      return "typeGhost";
    case "bug":
      return "typeBug";
    case "psychic":
      return "typePsychic";
    case "flying":
      return "typeFlying";
    case "rock":
      return "typeRock";
    case "ice":
      return "typeIce";
    case "steel":
      return "typeSteel";
    case "dragon":
      return "typeDragon";
    case "dark":
      return "typeDark";
    case "fairy":
      return "typeFairy";
    default:
      return null;
  }
};


