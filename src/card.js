import React, { Component } from 'react';
import Styles from './styleVariables'

const cardStyle = {
    background: Styles.red,
    color: '#f7f7f7',
    fontSize: 24,
    fontWeight: 'bold',
    display: "inline-block",
    padding: 12,
    width: 200,
    borderRadius: 5,
    margin: 20

};

const Card = (props) => {
    
    return (
        <div style={cardStyle}>{props.shotinfo.title}: {props.shotinfo.id}</div>  
      
    )
  }


export default Card;