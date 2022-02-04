import { useContext } from "react";
import useAPI from "../../hooks/useAPI";
import { toggleGentlemanAction } from "../../store/actions/gentlemen/actionsCreators";
import GentlemenContext from "../../store/contexts/GentlemenContext";
import Gentleman from "../Gentleman/Gentleman";

const GentlemenList = () => {
  const { gentlemen, dispatch } = useContext(GentlemenContext);
  const { deleteGentlemanAPI } = useAPI();

  const toggleSelected = (id) => {
    dispatch(toggleGentlemanAction(id));
  };

  return (
    <ul className="gentlemen">
      {gentlemen.map((gentleman) => (
        <Gentleman
          key={gentleman.id}
          gentleman={gentleman}
          actionOnClick={() => toggleSelected(gentleman.id)}
          actionOnRemove={() => deleteGentlemanAPI(gentleman.id)}
        />
      ))}
    </ul>
  );
};

export default GentlemenList;
