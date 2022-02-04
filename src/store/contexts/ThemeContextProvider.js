import { useReducer } from "react";
import themeReducer from "../reducers/themeReducer";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const initialValue = localStorage.getItem("theme") ?? "light";
  const [theme, dispatch] = useReducer(themeReducer, initialValue);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
