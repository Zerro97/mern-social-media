import React, { Component, Fragment } from 'react';
import axios from 'axios';
import AlertMsg from '../components/AlertMsg'
//import {port} from '../config';

export default class LogInRoute extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.port = process.env.PORT || "http://localhost:5000";

    this.state = {
      username: '',
      password: '',
      visible: false,
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

  async onSubmit(e) {
    e.preventDefault();
    let visible = false;

    const user = {
      username: this.state.username,
      password: this.state.password,
    }

    await axios.post(this.port + '/login', user)
      .then(function(res){
        if(res.data.auth == true && res.data.token != undefined){
          sessionStorage.setItem('token', res.data.token);
        }
      })
      .catch(function(err){
        visible = true;
        console.log("Error in login");
      })

    this.setState({
      username: '',
      password: '',
      visible: visible
    })
  }

  render() {
    return (
      //<tokenContext.Consumer>
        //{ (setToken) => (
            <Fragment>
              <div className="jumbotron">
                <h1 className="display-4 text-center">Log In</h1>
              </div>
      
              <div className="container mt-3">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                  </div>
                  <div className="form-group"> 
                    <label>Password: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Log In" className="btn btn-primary" />
                  </div>
                </form>
                <AlertMsg visible={this.state.visible} message="Wrong username and password!"/>
              </div>
            </Fragment>
          //)}
      //</tokenContext.Consumer>
    )
  }
}