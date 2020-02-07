import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import PostBox from '../components/PostBox'
import FriendBox from '../components/FriendBox'
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
  // Defining states
  const [posts, setPosts] = useState([]);

  // Defining port
  const port = process.env.PORT || "http://localhost:5000";

  //componentDidMount
  useEffect(() => {
    // Fetch post
    async function fetchPost() {
      await axios.get(port + '/posts')
        .then(function(res){
          setPosts(res.data);
        })
        .catch(function(err){
          console.log("Error in get to post route", err);
        })
    }

    fetchPost();
  }, []);

  const displayPost = () => {
    let postArr = [];

    for(let i=0; i<posts.length; i++){
      postArr.push(
        <PostBox key={i} title={posts[i].title} description={posts[i].description} image={posts[i].imageUrl}/>
      )
    }

    return postArr;
  }

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          {displayPost()}
        </div>
        <div className={styles.rightContainer}>
          <FriendBox/>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;