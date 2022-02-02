import { useContext } from "react";
import GentlemenContext from "../../contexts/GentlemenContext";
import Gentleman from "../Gentleman/Gentleman";

const GentlemenList = () => {
  const { gentlemen, deleteGentleman, toggleSelected } =
    useContext(GentlemenContext);

  return (
    <ul className="gentlemen">
      {gentlemen.map((gentleman) => (
        <Gentleman
          key={gentleman.id}
          gentleman={gentleman}
          actionOnClick={() => toggleSelected(gentleman.id)}
          actionOnRemove={() => deleteGentleman(gentleman.id)}
        />
      ))}
    </ul>
  );
};

export default GentlemenList;
