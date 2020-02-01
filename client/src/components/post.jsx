import React, { Component } from 'react';
import PostImage from './image';
import styles from './post.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
    
        }
    }

    render() {
        return (
            <div className={styles.post + " border rounded"}>
                <PostImage></PostImage>
                <div>
                    Title
                </div>
                <div>
                    Description
                </div>
            </div>
        );
    }
}