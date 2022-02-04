import { useReducer } from "react";
import gentlemenReducer from "../reducers/gentlemenReducer";
import GentlemenContext from "./GentlemenContext";

const GentlemenContextProvider = ({ children }) => {
  const [gentlemen, dispatch] = useReducer(gentlemenReducer, []);

  const totalSelected = gentlemen.filter(
    (gentleman) => gentleman.selected
  ).length;

  return (
    <GentlemenContext.Provider
      value={{
        gentlemen,
        totalSelected,
        dispatch,
      }}
    >
      {children}
    </GentlemenContext.Provider>
  );
};

export default GentlemenContextProvider;
