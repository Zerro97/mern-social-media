import React, { Component, Fragment } from 'react'
import styles from '../styles/components/UserBox.module.scss'
import Image from '../assets/images/dog.png';

export default class UserBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
        userImage: "",
        userName: "Zerro",
        date: "Oct 25",
    }
  }

  // Fetch user data?
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
        <div className={styles.container}>
            <img src={Image} className={styles.profileImage}></img>
            <div className={styles.rightContainer}>
                <div>{this.state.userName}</div>
                <div>{this.state.date}</div>
            </div>
        </div>
      </Fragment>
    )
  }
}