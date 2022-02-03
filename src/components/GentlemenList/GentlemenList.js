import { useContext } from "react";
import {
  deleteGentlemanAction,
  toggleGentlemanAction,
} from "../../store/actions/actionsCreators";
import GentlemenContext from "../../store/contexts/GentlemenContext";
import Gentleman from "../Gentleman/Gentleman";

const GentlemenList = () => {
  const { gentlemen, dispatch } = useContext(GentlemenContext);

  const toggleSelected = (id) => {
    dispatch(toggleGentlemanAction(id));
  };

  const deleteGentleman = (id) => {
    dispatch(deleteGentlemanAction(id));
  };

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
