import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import UserBox from "./UserBox";
import HeaderImage from '../assets/images/default-image.jpg';
import styles from '../styles/components/CreateBox.module.scss';

export default class CreateBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "",
            title: "",
            url: "",
        }
    }

    componentDidMount(){
        this.setState({
            color: this.props.color,
            title: this.props.title,
            url: "/create_" + this.props.title.toLowerCase(),
        })
    }

    render() {
        return (
            <Fragment>
                <Link to={this.state.url} style={{backgroundColor: this.state.color}} className={styles.container + " rounded"}>
                    <div className={styles.title}>{this.state.title}</div>
                </Link>
            </Fragment>
        )
    }
}