import "./App.css";
import React from "react";
import Search from "./Search";

export default function App() {
  return (
    <body>
      <div className="App">
        <div className="container">
          <header></header>
          <main>
            <Search />
          </main>
          <footer>
            <a
              href="https://github.com/AnniK93/react-weather-app-final"
              target="_blank"
              rel="noreferrer"
            >
              Open source code
            </a>{" "}
            by Anni
          </footer>
        </div>
      </div>
    </body>
  );
}
