import React from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="background-ornament"></div>
      <main className="main-content">
        <Form />
      </main>
      <footer className="footer">
        <p>&copy; 2026 Premium Systems Inc. Secure & Private.</p>
      </footer>
    </div>
  );
}

export default App;
