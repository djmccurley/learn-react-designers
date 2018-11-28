import React, { Component } from 'react';
import Styles from '../styleVariables'
import Footer from './footer';

const Timestamp = require('react-timestamp');

const cardStyle = {
    background: '#fff',
    color: '#3f3f3f',
    fontSize: 12,
    fontWeight: 'medium',
    padding: 10,
    width: 200,
    borderRadius: 2,
    margin: 15,
    boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.20)',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative'

};

const contentHidden = {
    display: 'none'
};

const contentStyle = {
    position: 'absolute',
    top: 0,
    width: '90%',
    height: '75%',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: 5
};

const contentHeaderStyle = {
    fontSize: 12
};

const gifTagStyle = {
    position: 'absolute',
    top: 12,
    right: 15,
    fontWeight: 'bolder',
    opacity: 0.6
};

const GifTag = (props) => {
    // prevents rendering if !animated
    if (!props.animated) {
        return null;
    }

    return (
        <span style={props.style}>[GIF]</span>
    )
}

function createMarkup(props) {
    return { __html: props.shotinfo.description };
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            isGif: false
        };
    }

    handleEnter = () => {
        this.setState({ isHovered: true });
    }

    handleLeave = () => {
        this.setState({ isHovered: false });
    }

    playPic = () => {
        this.setState({ isGif: true });
    }

    stopPic = () => {
        this.setState({ isGif: false });
    }

    render() {


        return (
            <div
                style={cardStyle}
            >
                <div
                    onMouseEnter={this.playPic}
                    onMouseLeave={this.stopPic}


                >
                    <div>
                        <img src={!this.state.isGif ? this.props.shotinfo.images.teaser : this.props.shotinfo.images.hidpi}></img>
                        <GifTag style={gifTagStyle} animated={this.props.shotinfo.animated} />
                    </div>
                    <div style={!this.state.isHovered ? contentHidden : contentStyle}>
                        <h2 style={contentHeaderStyle}>{this.props.shotinfo.title}</h2>
                        <div dangerouslySetInnerHTML={createMarkup(this.props)} />
                        <p><Timestamp time={this.props.shotinfo.created_at} format="date" /></p>

                    </div>

                </div>
                <div
                    style={{display: 'flex', flexWrap: 'wrap'}}
                    onMouseEnter={this.handleEnter}
                    onMouseLeave={this.handleLeave}
                >
                    <Footer props={{ views: this.props.shotinfo.views_count, likes: this.props.shotinfo.likes_count, comments: this.props.shotinfo.comments_count }} />
                </div>
            </div>
        )
    }
}


export default Card;