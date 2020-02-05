import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../contexts/TokenContext'

const Navigation = () => {
  const { token, dispatch } = useContext(TokenContext);

  const logOut = () => {
    dispatch({ type: 'REMOVE_TOKEN' });
  }

  const isLoggedIn = () => {
    return token ? (
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" onClick={logOut}>Log Out</Link>
          </li>
        </ul>
      </div>
    ) : (
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
    )
  }

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
        {isLoggedIn()}
      </div>
    </nav>
  );
}

export default Navigation;