import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';
import shots from './shots.json';


// const Card = () => {
//   return (
//     <div>Card</div>
//   )
// }

const CardGrid = () => {
  return (
    <div>
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
