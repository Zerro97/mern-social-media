import React, { useContext, useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { TokenContext } from '../contexts/TokenContext'
import styles from '../styles/components/Navigation.module.scss';
import UserBox from "./UserBox";

const Navigation = () => {
  const { token, dispatch } = useContext(TokenContext);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const logOut = () => {
    console.log("logOut clicked!")
    dispatch({ type: 'REMOVE_TOKEN' });
    setIsLoggedOut(true);
  }

  const renderRedirect = () => {
    if (isLoggedOut) {
      //return <Redirect to='/' />
    }
  }

  const determineRender = () => {
    return token ? (
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <UserBox type="Navigation" userName="Zerro"/>
          <li className="nav-item">
            <div className={styles.logOut + " nav-link"} onClick={logOut}>Log Out</div>
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
    <Fragment>

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
          {determineRender()}
        </div>
      </nav>
    </Fragment>
  );
}

export default Navigation;