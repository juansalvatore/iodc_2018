import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Navbar from '../containers/Navbar'
import About from '../containers/About'
import Preregister from '../containers/Preregister'
import SubmitedForm from '../containers/SubmitedForm'

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/iodc_2018/" component={Navbar} />
      <Route path="/iodc_2018/" exact component={Home} />
      <Route path="/iodc_2018/about" exact component={About} />
      <Route path="/iodc_2018/preregister" exact component={Preregister} />
      <Route path="/iodc_2018/submited-form" exact component={SubmitedForm} />
    </div>
  </BrowserRouter>
)
