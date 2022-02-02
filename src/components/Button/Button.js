import { useContext } from "react";
import GentlemenContext from "../../contexts/GentlemenContext";

const Button = () => {
  const { selectAll } = useContext(GentlemenContext);

  return (
    <button type="button" className="button button--select" onClick={selectAll}>
      Marcar todos
    </button>
  );
};

export default Button;
