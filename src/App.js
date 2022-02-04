import { useContext, useEffect } from "react";
import Button from "./components/Button/Button";
import Error from "./components/Error/Error";
import GentlemenList from "./components/GentlemenList/GentlemenList";
import Info from "./components/Info/Info";
import Loading from "./components/Loading/Loading";
import NewGentleman from "./components/NewGentleman/NewGentleman";
import useAPI from "./hooks/useAPI";
import ThemeContext from "./store/contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const { loadGentlemenAPI } = useAPI();

  useEffect(() => {
    loadGentlemenAPI();
  }, [loadGentlemenAPI]);

  return (
    <div className={`container${theme === "dark" ? " dark" : ""}`}>
      <header className="main-header">
        <h1 className="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <Error />
      <Loading />
      <section className="controls">
        <Info />
        <Button />
      </section>
      <main className="main">
        <NewGentleman />
        <GentlemenList />
      </main>
    </div>
  );
}

export default App;
