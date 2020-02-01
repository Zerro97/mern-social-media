import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
    
        }
    }

    render() {
        return (
            <div>
                <img src={require("../images/default-image.png")} className="img-fluid" alt="Default Image"></img>
            </div>
        );
    }
}