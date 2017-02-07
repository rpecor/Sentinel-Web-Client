import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router'
import Projects from './modules/Project/Projects'
import Repos from './modules/Repos'
import Profile from './modules/Profile'
import ControlPanel from './modules/ControlPanel'
import ProjectDetails from './modules/Project/ProjectDetails'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/myprojects" component={Projects}/>
    <Route path="/profile" component={Profile} />
    <Route path="/controlpanel" component={ControlPanel} />
    <Route path="/project/:projectId" component={ProjectDetails} />
  </Router>
), document.getElementById('app'))
