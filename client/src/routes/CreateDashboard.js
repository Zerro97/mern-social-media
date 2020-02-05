/**
 * A dashboard for any kind of creation. Currently it can only create post
 */
import React, { Component, Fragment } from 'react'
import CreateBox from '../components/CreateBox'
import styles from '../styles/pages/CreateDashboard.module.scss';

const CreateDashboard = () => {
  //const { books } = useContext(BookContext);
  return (
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-4">Create</h1>
        <p className="lead">
          You can create posts and groups here!<br/>
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.createBox}>
          <CreateBox color="#95c4fc" title="Post"/>
        </div>
        <div className={styles.createBox}>
          <CreateBox color="#ff837a" title="Group"/>
        </div>
      </div>
    </Fragment>
  );
}

export default CreateDashboard;