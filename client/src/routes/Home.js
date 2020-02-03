import React, { Component, Fragment } from 'react'
import PostBox from '../components/PostBox'
import FriendBox from '../components/FriendBox'
import styles from '../styles/pages/Home.module.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // Fetch post data
  componentDidMount() {
    /*axios.post(this.port + '/login', user)
        .then(res => console.log(res.data));

    this.setState({
        username: '',
        password: '',
    })*/
  }

  fetchPost() {
    let postArray = [];

    

    return postArray;
  }

  render() {
    return (
      <Fragment>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <PostBox/>
          </div>
          <div className={styles.rightContainer}>
            <FriendBox/>
          </div>
        </div>
      </Fragment>
    )
  }
}