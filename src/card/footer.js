import React, { Component } from 'react';
import Styles from '../styleVariables';
import { FiEye } from 'react-icons/fi';
import { FiMessageCircle } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';

const footerStyle = {
    flexBasis: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
}

const Footer = (props) => {
    
    return (
        <div style={footerStyle}>
            <div><FiEye /> <span>{props.props.views}</span></div>
            <div><FiMessageCircle /> <span>{props.props.comments}</span></div>
            <div><FiHeart /> <span>{props.props.likes}</span></div>

        </div>  
      
    )
  }


export default Footer;