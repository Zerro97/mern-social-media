import React, { } from 'react'
import styles from '../styles/components/FriendBox.module.scss';
import UserBox from "./UserBox";

const FriendBox = () => {
  return (
    <div className={styles.container + " border rounded"}>
      <UserBox type='FriendBox' userName='Zerro' userImage='' date=''/>
      <UserBox type='FriendBox' userName='Zerro' userImage='' date=''/>
      <UserBox type='FriendBox' userName='Zerro' userImage='' date=''/>
    </div>
  );
}

export default FriendBox;