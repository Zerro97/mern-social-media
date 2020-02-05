import React, { useState, Fragment } from 'react'
import styles from '../styles/components/UserBox.module.scss'
import Image from '../assets/images/dog.png';

const UserBox = () => {
  // Defining states
  const [userImage, setUserImage] = useState('');
  const [userName, setUserName] = useState('Zerro');
  const [date, setDate] = useState('Oct 25');

  return (
    <Fragment>
      <div className={styles.container}>
          <img src={Image} className={styles.profileImage}></img>
          <div className={styles.rightContainer}>
              <div className={styles.userName}>{userName}</div>
              <div className={styles.date}>{date}</div>
          </div>
      </div>
    </Fragment>
  );
}

export default UserBox;