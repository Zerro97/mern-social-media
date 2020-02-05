import React, { Fragment, useState } from 'react';
import axios from 'axios';
import AlertMsg from '../components/AlertMsg'
import TokenContext from '../contexts/TokenContext'

const LogIn = () => {
  // Defining states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  // Defining port
  const port = process.env.PORT || "http://localhost:5000";

  // When submit button is pressed
  const handleSubmit = async (e) => {
    e.preventDefault();
    let visible = false;

    const user = {
      username: username,
      password: password,
    }

    await axios.post(port + '/login', user)
      .then(function(res){
        if(res.data.auth == true && res.data.token != undefined){
          sessionStorage.setItem('token', res.data.token);
        }
      })
      .catch(function(err){
        visible = true;
        console.log("Error in login");
      })

      setUsername('');
      setPassword('');
      setVisible(visible);
  }

  // Render
  return (
    <Fragment>
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
        <AlertMsg visible={visible} message="Wrong username and password!"/>
      </div>
    </Fragment>
  );
}

export default LogIn;
