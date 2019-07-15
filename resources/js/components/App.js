import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import NewProject from './NewProject'
import ProjectsList from './ProjectsList'
import SingleProject from './SingleProject'
import Login from './Login'
import UserProfile from './UserProfile'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/projects' component={ProjectsList} />
            <Route path='/projects/create' component={NewProject} />
            <Route path='/projects/:id' component={SingleProject} />
            <Route path='/login' component={Login} />
            <Route path='/user' component={UserProfile} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
