import { useReducer } from "react";
import gentlemenReducer from "../reducers/gentlemenReducer";
import GentlemenContext from "./GentlemenContext";

const gentlemenAPI = [
  {
    id: 1,
    name: "Bertin Osborne",
    status: "Alive",
    profession: "Youtuber",
    twitter: "@osbourne",
    picture: "bertin.jpg",
    alternativeText: "Osbourne pointing at you",
    selected: false,
  },
  {
    name: "The Farytale",
    status: "RIP",
    profession: "Influencer",
    twitter: "pending",
    picture: "fary.jpg",
    alternativeText: "The Fary pointing at you",
    id: 2,
    selected: false,
  },
  {
    id: 3,
    name: "Julius Churchs",
    status: "Alive",
    profession: "Java developer",
    twitter: "@julius_churchs",
    picture: "julio.jpg",
    alternativeText: "Churchs pointing at you",
    selected: false,
  },
];

const GentlemenContextProvider = ({ children }) => {
  const [gentlemen, dispatch] = useReducer(gentlemenReducer, gentlemenAPI);

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
