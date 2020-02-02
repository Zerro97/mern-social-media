import React, { Component, Fragment } from 'react';
import UserBox from "./UserBox";
import styles from '../styles/components/PostBox.module.scss';

export default class PostBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Hi",
            description: "",
            image: "",
            comment: "",

            userName: "Zerro",
            userImage: "",
        }
    }

    // Fetch post data?
    componentDidMount() {
        /*axios.post(this.port + '/login', user)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            password: '',
        })*/
    }

    render() {
        return (
            <Fragment>
                <div className="border rounded">
                    <div className={styles.title}>{this.state.title}</div>
                    <UserBox/>
                    <div className={styles.description}>{this.state.description}</div>
                    <div>{this.state.description}</div>
                </div>
            </Fragment>
        )
    }
}