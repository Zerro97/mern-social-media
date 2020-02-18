import React, { Fragment, useState, useContext } from 'react';
import AlertMsg from '../components/AlertMsg'
import axios from 'axios';
import { TokenContext } from '../contexts/TokenContext'
import { UserContext } from '../contexts/UserContext'

const SignUp = () => {
  // Defining states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);

  // Defining port
  const port = process.env.PORT || "http://localhost:5000";

  // Defining token context
  const { token, tokenDispatch } = useContext(TokenContext);
  const { user, userDispatch } = useContext(UserContext);

  // When submit button is pressed
  const handleSubmit = async (e) => {
    e.preventDefault();
    let visible = false;

    const user = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      email: email,
    }

    await axios.post(port + '/users', user)
      .then(function(res){
        if(res.data.auth == true && res.data.token != undefined){
          tokenDispatch({ type: 'ADD_TOKEN', token: res.data.token });
          userDispatch({ type: 'ADD_USER', user: res.data.user });
        }
      })
      .catch(function(err){
        visible = true;
        console.log("Error in sign up", err);
      });

    setUsername('');
    setPassword('');
    setLastname('');
    setFirstname('');
    setEmail('');
    setVisible(visible);
  }

  return (
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-4 text-center">Sign Up</h1>
      </div>
      
      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input type="text"
                required
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            <label>Password: </label>
            <input type="text"
                required
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <label>First Name: </label>
            <input type="text"
                required
                className="form-control"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                />
            <label>Last Name: </label>
            <input type="text"
                required
                className="form-control"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                />
            <label>Email: </label>
            <input type="text"
                required
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
        <AlertMsg visible={visible} message="User already exist! Use different username"/>
      </div>
    </Fragment>
  );
}

export default SignUp;