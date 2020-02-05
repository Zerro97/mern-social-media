import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/CreateBox.module.scss';

const CreateBox = () => {
    // Defining states
    const [color, setColor] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    return (
        <Fragment>
            <Link to={url} style={{backgroundColor: color}} className={styles.container + " rounded"}>
                <div className={styles.title}>{title}</div>
            </Link>
        </Fragment>
    );
}
  
export default CreateBox;

/*this.setState({
    color: this.props.color,
    title: this.props.title,
    url: "/create_" + this.props.title.toLowerCase(),
})*/