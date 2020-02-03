import React, { Component, Fragment } from 'react';
import UserBox from "./UserBox";
import HeaderImage from '../assets/images/default-image.jpg';
import styles from '../styles/components/PostBox.module.scss';

export default class PostBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Hi",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
                <div className={styles.container + " border rounded"}>
                    <div className={styles.innerContainer}>
                        <div className={styles.title}>{this.state.title}</div>
                        <div className={styles.userBox}>
                            <UserBox/>
                        </div>
                    </div>

                    <img src={HeaderImage} className={styles.headerImage}></img>

                    <div className={styles.innerContainer}>
                        <div className={styles.description}>{this.state.description}</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}