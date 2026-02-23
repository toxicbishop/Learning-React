import React from "react";
import FigureList from "./components/FigureList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Dynamic Image Gallery</h1>
        <p>Explore a collection of stunning random visuals</p>
      </header>
      <main>
        <FigureList />
      </main>
      <footer className="app-footer">
        <p>&copy; 2026 Premium Gallery Pro</p>
      </footer>
    </div>
  );
};

export default App;
