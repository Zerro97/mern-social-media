import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import UserBox from "./UserBox";
import HeaderImage from '../assets/images/default-image.jpg';
import styles from '../styles/components/PostBox.module.scss';

import Image from '../assets/images/dog.png';

// Example:
// image = "dog.png"
const PostBox = ({title, description, imageName, imageType}) => {
    // Defining states
    //const [title, setUseTitle] = useState('Hi');
    //const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

    const [comment, setComment] = useState('');
    const [userImage, setUserImage] = useState('');
    const [userName, setUserName] = useState('Zerro');
    const [postImage, setPostImage] = useState('');

    // Defining port
    const port = process.env.PORT || "http://localhost:5000";

    //componentDidMount
    useEffect(() => {
        // Get the image from images folder and set state
        const imageUrl = require("../assets/images/" + imageName + "." + imageType).default 
        setPostImage(imageUrl);

        // Fetch image from S3 & download it in images folder
        /*async function fetchPost() {
            await axios.put(port + '/images', imageData)
                .then(function(res){
                    setPostImage("../images/" + image);
                    console.log("../images/" + image);
                })
                .catch(function(err){
                    console.log(err);
                    console.log("../images/" + image);
                })
        }
        fetchPost();*/

    }, []);

    return (
        <Fragment>
            <div className={styles.container + " border rounded"}>
                <div className={styles.innerContainer}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.userBox}>
                        <UserBox type='Post' userName='Zerro' userImage='' date='Oct 25'/>
                    </div>
                </div>

                <img src={postImage} className={styles.headerImage}></img>

                <div className={styles.innerContainer}>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>
        </Fragment>
    );
  }
  
  export default PostBox;
