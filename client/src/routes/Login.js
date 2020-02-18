import React, { Fragment, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import AlertMsg from '../components/AlertMsg'
import { TokenContext } from '../contexts/TokenContext'
import { UserContext } from '../contexts/UserContext'

const LogIn = () => {
  // Defining states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Defining port
  const port = process.env.PORT || "http://localhost:5000";

  // Defining token context
  const { token, tokenDispatch } = useContext(TokenContext);
  const { user, userDispatch } = useContext(UserContext);

  // Redirect after successful login
  const renderRedirect = () => {
    if (isLoggedIn) {
      return <Redirect to='/' />
    }
  }

  // When submit button is pressed
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    }

    await axios.post(port + '/login', user)
      .then(function(res){
        if(res.data.auth == true && res.data.token != undefined){
          tokenDispatch({ type: 'ADD_TOKEN', token: res.data.token });
          userDispatch({ type: 'ADD_USER', user: res.data.user });
          setIsLoggedIn(true);
        }
      })
      .catch(function(err){
        console.log("Error in login", err);
      })

      setUsername('');
      setPassword('');
  }

  // Render
  return (
    <Fragment>
      {renderRedirect()}
      <div className="jumbotron">
        <h1 className="display-4 text-center">Log In</h1>
      </div>

      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
          </div>
          <div className="form-group"> 
            <label>Password: </label>
            <input type="text"
                required
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Log In" className="btn btn-primary" />
          </div>
        </form>
        <AlertMsg visible={isLoggedIn} message="Wrong username and password!"/>
      </div>
    </Fragment>
  );
}

export default LogIn;
