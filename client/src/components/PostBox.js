import React, { useState, Fragment } from 'react';
import UserBox from "./UserBox";
import HeaderImage from '../assets/images/default-image.jpg';
import styles from '../styles/components/PostBox.module.scss';

const PostBox = () => {
    // Defining states
    const [title, setUseTitle] = useState('Hi');
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    const [image, setImage] = useState('');
    const [comment, setComment] = useState('');

    const [userImage, setUserImage] = useState('');
    const [userName, setUserName] = useState('Zerro');

    return (
        <Fragment>
            <div className={styles.container + " border rounded"}>
                <div className={styles.innerContainer}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.userBox}>
                        <UserBox/>
                    </div>
                </div>

                <img src={HeaderImage} className={styles.headerImage}></img>

                <div className={styles.innerContainer}>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>
        </Fragment>
    );
  }
  
  export default PostBox;
