import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Components/Login';
function App() {
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React sasass
        </a>
      </header> */}
      <Login />
    </div>
  );
}

export default App;
