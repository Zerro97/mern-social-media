import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import 'bootstrap'

import Navigation from './components/Navigation'

import CreateDashboard from './routes/CreateDashboard'
import CreatePost from './routes/CreatePost'
import Profile from './routes/Profile'
import SignUp from './routes/SingUp'
import Login from './routes/Login'
import About from './routes/About'
import Home from './routes/Home'


import Sample from './routes/Sample'

export const App = () => (
  <Fragment>
    <Router history={createBrowserHistory()}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/create" component={CreateDashboard}/>
        <Route path="/create/post" component={CreatePost}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/about" component={About}/>
        <Route path="/sample" component={Sample}/>
      </Switch>
    </Router>
  </Fragment>
)
