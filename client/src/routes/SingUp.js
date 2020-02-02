import React, { Component, Fragment } from 'react';
import axios from 'axios';

export default class SignUpRoute extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.port = process.env.PORT || "http://localhost:5000";

    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
    }

    axios.post(this.port + '/users', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
    })
  }

  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 className="display-4 text-center">Sign Up</h1>
        </div>
        
        <div className="container mt-3">
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Username: </label>
              <input type="text"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  />
              <label>Password: </label>
              <input type="text"
                  required
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  />
              <label>First Name: </label>
              <input type="text"
                  required
                  className="form-control"
                  value={this.state.firstname}
                  onChange={this.onChangeFirstname}
                  />
              <label>Last Name: </label>
              <input type="text"
                  required
                  className="form-control"
                  value={this.state.lastname}
                  onChange={this.onChangeLastname}
                  />
              <label>Email: </label>
              <input type="text"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  />
            </div>
            <div className="form-group">
              <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}