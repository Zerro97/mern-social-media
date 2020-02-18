import React, { } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Navigation from './components/Navigation'

import CreateDashboard from './routes/CreateDashboard'
import CreateGroup from './routes/CreateGroup'
import CreatePost from './routes/CreatePost'

import Profile from './routes/Profile'
import SignUp from './routes/SingUp'
import Login from './routes/Login'
import About from './routes/About'
import Home from './routes/Home'

import TokenProvider from './contexts/TokenContext'
import UserProvider from './contexts/UserContext'

function App() {
  return (
    <TokenProvider>
    <UserProvider>
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
        </Switch>
      </Router>
    </UserProvider>
    </TokenProvider>
  );
}

export default App;