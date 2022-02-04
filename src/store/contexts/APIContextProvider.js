import { useReducer } from "react";
import apiReducer from "../reducers/apiReducer";
import APIContext from "./APIContext";

const APIContextProvider = ({ children }) => {
  const [apiStatus, dispatch] = useReducer(apiReducer, {
    loading: false,
    error: false,
  });

  return (
    <APIContext.Provider value={{ apiStatus, dispatch }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;
