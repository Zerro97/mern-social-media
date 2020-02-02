import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  isLoggedIn(){
    let beforeLogIn = [];
    let afterLogIn = [];

    if(false){
      return beforeLogIn;
    } else {
      return afterLogIn;
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create</Link>
            </li>
            <li className="navbar-item">
              <Link to="/profile" className="nav-link">Profile</Link>
            </li>
          </ul>

          <div className="collpase navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">Log In</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}