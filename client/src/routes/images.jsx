import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class ImagesRoute extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 className="display-4 text-center">Images</h1>
          <p className="lead text-center">You can view images here!</p>
        </div>

        <div className="container">
          <h3>Images</h3>
          <Link to="/images_create" className="btn btn-primary">Create</Link>
        </div>
      </Fragment>
    )
  }
}