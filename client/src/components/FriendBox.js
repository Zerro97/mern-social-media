import React, { Fragment } from 'react'
import styles from '../styles/components/FriendBox.module.scss';
import UserBox from "./UserBox";

const FriendBox = () => {
  return (
    <Fragment>
      <div className={styles.container + " border rounded"}>
        <UserBox/>
        <UserBox/>
        <UserBox/>
        <UserBox/>
      </div>
    </Fragment>
  );
}

export default FriendBox;