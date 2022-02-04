import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/open-sans";
import "./scss/styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GentlemenContextProvider from "./store/contexts/GentlemenContextProvider";
import ThemeContextProvider from "./store/contexts/ThemeContextProvider";
import APIContextProvider from "./store/contexts/APIContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <APIContextProvider>
        <GentlemenContextProvider>
          <App />
        </GentlemenContextProvider>
      </APIContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
