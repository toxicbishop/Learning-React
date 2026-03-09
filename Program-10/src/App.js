import React from 'react';
import UserPosts from './components/UserPosts';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Lifecycle API Demo</h1>
        <p>Demonstrating componentDidMount & componentDidUpdate with jsonplaceholder API</p>
      </header>
      <main>
        <UserPosts />
      </main>
    </div>
  );
}

export default App;
