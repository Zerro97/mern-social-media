import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import 'bootstrap'

import Navigation from './components/Navigation'

import CreateDashboard from './routes/CreateDashboard'
import CreateGroup from './routes/CreateGroup'
import CreatePost from './routes/CreatePost'

import Profile from './routes/Profile'
import SignUp from './routes/SingUp'
import Login from './routes/Login'
import About from './routes/About'
import Home from './routes/Home'

import Sample from './routes/Sample'

const tokenContext = React.createContext();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: sessionStorage.getItem('token'),
      // Define setter method to update token
      setToken: (token) => {
        // Persist data to session storage and update state to trigger re-render 
        sessionStorage.setItem('token', `${ token }`)
        this.setState({ token })
      },
    }
  }

  render(){
    return(
      <tokenContext.Provider value={this.state}>
        <Router history={createBrowserHistory()}>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/create" component={CreateDashboard}/>
            <Route path="/create_post" component={CreatePost}/>
            <Route path="/create_group" component={CreateGroup}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/about" component={About}/>
            <Route path="/sample" component={Sample}/>
          </Switch>
        </Router>
      </tokenContext.Provider>
    )
  }
}
