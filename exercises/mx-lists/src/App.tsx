import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './components/Validation/Validation';

function App() {
  const [inputState, setInputState] = useState({
    word: '',
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState({
      word: e.target.value,
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
        <h2>{inputState.word.length}</h2>
        <Validation inputLength={inputState.word.length} />
      </section>
    </div>
  );
}

export default App;
