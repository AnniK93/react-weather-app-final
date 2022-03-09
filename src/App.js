import "./App.css";
import React from "react";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h2>City names will go here</h2>
        </header>
        <main>
          <Search />
        </main>
        <footer>
          <a href="https://github.com/AnniK93/react-weather-app-final">
            Open source code
          </a>{" "}
          by Anni
        </footer>
      </div>
    </div>
  );
}
