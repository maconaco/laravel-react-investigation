import React from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mt-24" alt="logo" />
        <p className="text-blue-900">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link text-blue-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
