import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Navbar from '../containers/Navbar'
import About from '../containers/About'
import Preregister from '../containers/Preregister'
import Program from '../containers/Program'
import SubmitedForm from '../containers/SubmitedForm'
import Conduct from '../containers/Conduct'

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/iodc_2018/" component={Navbar} />
      <Route path="/iodc_2018/" exact component={Home} />
      <Route path="/iodc_2018/about" exact component={About} />
      <Route path="/iodc_2018/preregister" exact component={Preregister} />
      <Route path="/iodc_2018/submited-form" exact component={SubmitedForm} />
      <Route path="/iodc_2018/program" exact component={Program} />
      <Route path="/iodc_2018/conduct" exact component={Conduct} />
    </div>
  </BrowserRouter>
)
