import { useContext, useEffect } from "react";
import { toggleThemeAction } from "../../store/actions/theme/actionsCreators";
import GentlemenContext from "../../store/contexts/GentlemenContext";
import ThemeContext from "../../store/contexts/ThemeContext";

const Info = () => {
  const { totalSelected } = useContext(GentlemenContext);
  const { theme, dispatch } = useContext(ThemeContext);

  const actionOnClick = (event) => {
    event.preventDefault();
    dispatch(toggleThemeAction());
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

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
