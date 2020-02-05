import React, { Fragment } from 'react'
import PostBox from '../components/PostBox'
import FriendBox from '../components/FriendBox'
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
  //const { books } = useContext(BookContext);
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
  );
}

export default Home;