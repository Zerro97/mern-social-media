import React, { Component, Fragment } from 'react'
import styles from '../styles/components/FriendBox.module.scss';
import UserBox from "./UserBox";

export default class FriendBox extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <Fragment>
        <div className={styles.container + " border rounded"}>
          <UserBox/>
          <UserBox/>
          <UserBox/>
          <UserBox/>
        </div>
      </Fragment>
    )
  }
}