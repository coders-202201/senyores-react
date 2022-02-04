import { useContext } from "react";
import { selectAllGentlemenAction } from "../../store/actions/gentlemen/actionsCreators";
import GentlemenContext from "../../store/contexts/GentlemenContext";

const Button = () => {
  const { dispatch } = useContext(GentlemenContext);

  const selectAll = () => {
    dispatch(selectAllGentlemenAction());
  };

  return (
    <button type="button" className="button button--select" onClick={selectAll}>
      Marcar todos
    </button>
  );
};

export default Button;
