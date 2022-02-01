import { useState } from "react";
import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";
import Info from "./components/Info/Info";

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

function App() {
  const [gentlemen, setGentlemen] = useState(gentlemenAPI);

  const totalSelected = gentlemen.filter(
    (gentleman) => gentleman.selected
  ).length;

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

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section className="controls">
        <Info total={totalSelected} />
        <Button actionOnClick={selectAll} />
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemen.map((gentleman) => (
            <Gentleman
              key={gentleman.id}
              gentleman={gentleman}
              actionOnClick={() => toggleSelected(gentleman.id)}
              actionOnRemove={() => deleteGentleman(gentleman.id)}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
