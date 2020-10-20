import React, { Component } from 'react';
import aeropress from './aeropress.svg';
import  Recipe from './Recipe.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={aeropress} className="App-logo" alt="logo" />
          <h1 className="App-title">¿Una aeropress al azar con un wearefourcito?</h1>
        </header>
        <Recipe/>
        <footer className="App-footer">
          <p>
            Modficado con &hearts; por <a href="https://www.agenciagacela.cl">Agencia Gacela</a>
            <br/>
             Inspired by <a href="https://web.archive.org/web/20171208104650/https://jimseven.com/2017/12/06/coffee-brewing-dice/" target="_blank" rel="noopener noreferrer">
               James Hoffmann's Coffee Brewing Dice
             </a> | Aeropress icon made by <a href="https://www.flaticon.com/authors/monkik" target="_blank" rel="noopener noreferrer">
               monkik
             </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
