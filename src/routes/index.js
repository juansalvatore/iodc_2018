import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
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
  <BrowserRouter>
    <div>
      <Route path="/iodc_2018/" component={Navbar} />
      <Route path="/iodc_2018/" exact component={Home} />
      <Route path="/iodc_2018/about" exact component={About} />
      <Route path="/iodc_2018/register" exact component={Register} />
      <Route path="/iodc_2018/submited-form" exact component={SubmitedForm} />
      <Route path="/iodc_2018/privacy" exact component={Privacy} />
      <Route path="/iodc_2018/conduct" exact component={Conduct} />
      <Route path="/iodc_2018/agenda" exact component={Agenda} />
      <Route path="/iodc_2018/press" exact component={Press} />
      <Route path="/iodc_2018/info" exact component={Info} />
      <Route
        path="/iodc_2018/side-events-list"
        exact
        component={SideEventsList}
      />
    </div>
  </BrowserRouter>
)
