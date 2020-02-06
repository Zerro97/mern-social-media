import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/CreateBox.module.scss';

const CreateBox = ({color, title, url}) => {
    return (
        <Fragment>
            <Link to={url} style={{backgroundColor: color}} className={styles.container + " rounded"}>
                <div className={styles.title}>{title}</div>
            </Link>
        </Fragment>
    );
}
  
export default CreateBox;