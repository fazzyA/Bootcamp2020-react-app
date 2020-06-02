import React from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" width='500px' alt="logo" />
        <p>
           <code>React app deployment through github action on surge</code>.
        </p>
        <p>
           <code>Assignment2 Bootcamp2020</code>.
        </p>
        <p
          className="App-link">Faiza Aziz Khan
        </p>
      </header>
    </div>
  );
}

export default App;
