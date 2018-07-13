import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Password.jsx';
import Password from './Password.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Password security Check</h1>
        </header>
        <p>
         Testons les mots de parseFloat(string) : 
          <ul>
          <li>Mot de passe faible (moins de 6 caractères / tout en minuscule / pas de caractères spéciaux)</li>
          <li>Mot de passe moyen (plus de 6 caractères / minuscules + majuscules / pas de caractères spéciaux)</li>
          <li>Mot de passe fort (plus de 6 caractères / minuscules + majuscules / caractères spéciaux)</li>
          </ul>
        </p>
      <Password />
      </div>
    );
  }
}

export default App;