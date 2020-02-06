import React, { useState, Fragment } from 'react'
import styles from '../styles/components/UserBox.module.scss'
import Image from '../assets/images/dog.png';

const UserBox = ({ type, userName, userImage, date }) => {
  // Type determines where this component is used
  // It is used in: Post, FriendBox, Navigation
  const determineType = () => {
    switch(type) {
      case 'Post':
        return(
          <div className={styles.post__container}>
            <img src={Image} className={styles.post__profileImage}></img>
            <div className={styles.rightContainer}>
              <div className={styles.post__userName}>{userName}</div>
              <div className={styles.date}>{date}</div>
            </div>
          </div>
        );
      case 'FriendBox':
        return(
          <div className={styles.friendBox__container}>
            <img src={Image} className={styles.friendBox__profileImage}></img>
            <div className={styles.rightContainer}>
              <div className={styles.friendBox__userName}>{userName}</div>
            </div>
          </div>
        );
      case 'Navigation':
        return(
          <div className={styles.navigation__container}>
            <img src={Image} className={styles.navigation__profileImage}></img>
            <div className={styles.rightContainer}>
              <div className={styles.navigation__userName}>{userName}</div>
            </div>
          </div>
        );
      default:
        throw new Error(`You need to pass in props! The props (called type) can be 'Post', 'FriendBox', 'Navigation' depending on where you use it`)
    }
  }

  return (
    <Fragment>
      {determineType()}
    </Fragment>
  );
}

export default UserBox;