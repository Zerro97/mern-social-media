import React, { Component, Fragment } from 'react';
import Post from '../components/post'

export default class HomeRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Hello, World!</h1>
          <p className="lead">
            This is a social media web application built to practice MERN stack!<br/>
          </p>
        </div>
        <div>
          <Post></Post>
        </div>
      </Fragment>
    )
  }
}