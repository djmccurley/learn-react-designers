import React, { Component } from 'react';
import Styles from '../styleVariables'
import Footer from './footer';

const Timestamp = require('react-timestamp');

const cardStyle = {
    background: '#e8e8e8',
    color: '#3f3f3f',
    fontSize: 16,
    fontWeight: 'medium',
    display: "inline-block",
    padding: 12,
    width: 200,
    borderRadius: 5,
    margin: 20,
    border: '1px solid black'

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