import React, { Component } from 'react';
import './App.css';
import MyTimer from './MyTimer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MyTimer />
      </div>
    );
  }
}