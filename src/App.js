import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Styles from './styleVariables';
import Card from './card/';
import shots from './shots.json';

const cardGridStyles = {
  display: 'flex',
  background: Styles.grey,
  flexWrap: 'wrap',
  padding: 40
}

const CardGrid = () => {
  return (
    <div style={cardGridStyles}>
      {shots.map(shot => <Card shotinfo={shot} />)}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <CardGrid />
    );
  }
}

export default App;
