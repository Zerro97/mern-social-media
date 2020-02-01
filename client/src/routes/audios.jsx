import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './audios.css';

export default class AudiosRoute extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 className="display-4 text-center">Audios</h1>
          <p className="lead text-center">You can view audios here!</p>
        </div>

        <div className="container">
          <h3>Audios</h3>
          <Link to="/images_create" className="btn btn-primary">Create</Link>
        </div>
      </Fragment>
    )
  }
}

/*
<Fragment>
  <div className={jumbotron, justify-content-center, d-flex, flex-column}>
    <h1 className="display-4 text-center">Audios</h1>
    <p className="lead text-center">You can view audios here!</p>
    <Link to="/audios_create" className="btn btn-primary">Create</Link>
  </div>

  <div className="container">
    <h3>Audios</h3>
    
  </div>
</Fragment>
*/