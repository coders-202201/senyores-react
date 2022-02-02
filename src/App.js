import { useContext } from "react";
import Button from "./components/Button/Button";
import GentlemenList from "./components/GentlemenList/GentlemenList";
import Info from "./components/Info/Info";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container${theme === "dark" ? " dark" : ""}`}>
      <header className="main-header">
        <h1 className="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section className="controls">
        <Info />
        <Button />
      </section>
      <main className="main">
        <GentlemenList />
      </main>
    </div>
  );
}

export default App;
