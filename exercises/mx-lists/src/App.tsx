import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [countState, setCountState] = useState({
    wordCount: 0,
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCountState({
      wordCount: e.target.value.length,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className={'App-body'}>
        <input type="text" onChange={inputChangeHandler} />
        <h2>{countState.wordCount}</h2>
      </section>
    </div>
  );
}

export default App;
