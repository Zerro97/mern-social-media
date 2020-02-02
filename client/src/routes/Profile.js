import React, { Component, Fragment } from 'react'

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Profile</h1>
          <p className="lead">
            Welcome User!<br/>
          </p>
        </div>
        <div>

        </div>
      </Fragment>
    )
  }
}