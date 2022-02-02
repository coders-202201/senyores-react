import { useState } from "react";
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
  const [gentlemen, setGentlemen] = useState(gentlemenAPI);

  const toggleSelected = (gentlemanId) => {
    setGentlemen(
      gentlemen.map((gentleman) => {
        if (gentleman.id === gentlemanId) {
          return {
            ...gentleman,
            selected: !gentleman.selected,
          };
        }
        return { ...gentleman };
      })
    );
  };

  const selectAll = () => {
    setGentlemen(
      gentlemen.map((gentleman) => ({
        ...gentleman,
        selected: true,
      }))
    );
  };

  const deleteGentleman = (gentlemanId) => {
    const undestructibleBertin = gentlemen.filter(
      (gentleman) => gentleman.id !== gentlemanId
    );
    setGentlemen(undestructibleBertin);
  };

  const totalSelected = gentlemen.filter(
    (gentleman) => gentleman.selected
  ).length;

  return (
    <GentlemenContext.Provider
      value={{
        gentlemen,
        totalSelected,
        deleteGentleman,
        toggleSelected,
        selectAll,
      }}
    >
      {children}
    </GentlemenContext.Provider>
  );
};

export default GentlemenContextProvider;
