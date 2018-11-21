import React, { Component } from 'react';
import Styles from '../styleVariables'
import Footer from './footer';

const Timestamp = require('react-timestamp');

const cardStyle = {
    background: '#fff',
    color: '#3f3f3f',
    fontSize: 16,
    fontWeight: 'medium',
    padding: 12,
    width: 200,
    borderRadius: 2,
    margin: 20,
    boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.20)',
    display: 'flex',
    flexWrap: 'wrap' 

};

const GifTag = (props) => {
    // prevents rendering if !animated
    if (!props.animated) { 
        return null;
    }

    return (
        <span>[GIF]</span>
    )
}

function createMarkup(props) {
    return {__html: props.shotinfo.description};
}

const Card = (props) => {
    
    return (
        <div style={cardStyle}>
            <div>
                <img src={props.shotinfo.images.teaser}></img>
                <GifTag animated={props.shotinfo.animated} />
            </div>
            <div>
                <h2>{props.shotinfo.title}</h2>
                <div dangerouslySetInnerHTML={createMarkup(props)} />
                <Timestamp time={props.shotinfo.created_at} format="date" />
                
            </div>
            <Footer props={{views: props.shotinfo.views_count, likes: props.shotinfo.likes_count, comments: props.shotinfo.comments_count}}/>
        </div>
    )
}


export default Card;