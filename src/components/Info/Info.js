import { useContext } from "react";
import GentlemenContext from "../../contexts/GentlemenContext";
import ThemeContext from "../../contexts/ThemeContext";

const Info = () => {
  const { totalSelected } = useContext(GentlemenContext);
  const { toggleTheme } = useContext(ThemeContext);

  const actionOnClick = (event) => {
    event.preventDefault();
    toggleTheme();
  };

  return (
    <>
      <a href="toggle theme" onClick={actionOnClick}>
        Toggle theme
      </a>
      <p className="info">
        {totalSelected} señores que te apuntan con el dedo marcados
      </p>
    </>
  );
};

export default Info;
