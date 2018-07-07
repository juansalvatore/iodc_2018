import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import {
  Home,
  Navbar,
  About,
  Register,
  Privacy,
  SubmitedForm,
  Conduct,
  Agenda,
  Press,
  Info,
  SideEventsList,
} from '../containers'

export default () => (
  <HashRouter>
    <div>
      <Route path="/" component={Navbar} />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/register" exact component={Register} />
      <Route path="/submited-form" exact component={SubmitedForm} />
      <Route path="/privacy" exact component={Privacy} />
      <Route path="/conduct" exact component={Conduct} />
      <Route path="/agenda" exact component={Agenda} />
      <Route path="/press" exact component={Press} />
      <Route path="/info" exact component={Info} />
      <Route path="/side-events-list" exact component={SideEventsList} />
    </div>
  </HashRouter>
)
