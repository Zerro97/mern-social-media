import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {port} from '../config';
import { Link } from 'react-router-dom';

export default class VideosRoute extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 className="display-4 text-center">Videos</h1>
          <p className="lead text-center">You can view videos here!</p>
        </div>

        <div className="container">
          <h3>Videos</h3>
          <Link to="/videos_create" className="btn btn-primary">Create</Link>
        </div>
      </Fragment>
    )
  }
}