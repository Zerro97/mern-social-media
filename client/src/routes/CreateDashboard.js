/**
 * A dashboard for any kind of creation. Currently it can only create post
 */
import React, { Component, Fragment } from 'react'

export default class CreateDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Create</h1>
          <p className="lead">
            You can create posts and groups here!<br/>
          </p>
        </div>
        <div>

        </div>
      </Fragment>
    )
  }
}