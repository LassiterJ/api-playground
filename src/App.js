import './App.css';
import JokesApiContainer from "./services/api/JokesApiContainer";
import styles from './components/joke-display/JokeDisplay.module.scss';
import React from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <JokesApiContainer />
      </header>

    </div>
  );
}

export default App;
