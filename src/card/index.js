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
    height: '90%',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: 5
};

const contentHeaderStyle = {
    fontSize: 12
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
    return { __html: props.shotinfo.description };
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    handleEnter = () => {
        this.setState({isHovered: true});
    }

    handleLeave = () => {
        this.setState({isHovered: false});
    }

    render() {


        return (
            <div
                style={cardStyle}
            >
                <div
                    
                    onMouseEnter={this.handleEnter}
                    onMouseLeave={this.handleLeave}

                >
                    <div>
                        <img src={this.props.shotinfo.images.teaser}></img>
                        <GifTag animated={this.props.shotinfo.animated} />
                    </div>
                    <div style={contentHidden}>
                        <h2 style={contentHeaderStyle}>{this.props.shotinfo.title}</h2>
                        <div dangerouslySetInnerHTML={createMarkup(this.props)} />
                        <p><Timestamp time={this.props.shotinfo.created_at} format="date" /></p>

                    </div>

                </div>
                <Footer props={{ views: this.props.shotinfo.views_count, likes: this.props.shotinfo.likes_count, comments: this.props.shotinfo.comments_count }} />
            </div>
        )
    }
}


export default Card;