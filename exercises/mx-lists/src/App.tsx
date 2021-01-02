import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './components/Validation/Validation';
import Char from './components/Char/Char';

function App() {
  const [inputState, setInputState] = useState({
    word: '',
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState({
      word: e.target.value,
    });
  };

  const deleteLetterHandler = (pos: number) => {
    const newWordArr = inputState.word.split('');
    newWordArr.splice(pos, 1);

    setInputState({ word: newWordArr.join('') });
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
        <input type="text" onChange={inputChangeHandler} value={inputState.word} />
        <h2>{inputState.word.length}</h2>
        <Validation inputLength={inputState.word.length} />
        <div style={{ display: 'inline-block' }}>
          {inputState.word.split('').map((letter: string, i: number) =>
            <Char
              key={i}
              char={letter}
              deleteElement={() => deleteLetterHandler(i)}
            />)
          }
        </div>
      </section>
    </div>
  );
}

export default App;
