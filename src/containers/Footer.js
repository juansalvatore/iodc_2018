import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import '../styles/main.min.css'

import logomin from '../img/logomin.png'
import logocanada from '../img/logocanada.png'
import logowbg from '../img/logowbg.png'
import logoopendata from '../img/logoopendata.png'

class Footer extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div class="row footer centerelement position-absolute">
          <div class="col-lg-10 centerelement">
            <div class="col-lg-3 text-center">
              <img src={logomin} alt="Logo Min" />
            </div>
            <div class="col-lg-3 text-center">
              <img src={logocanada} alt="Canada" />
            </div>
            <div class="col-lg-3 text-center">
              <img src={logowbg} alt="World Bank" />
            </div>
            <div class="col-lg-3 text-center">
              <img src={logoopendata} alt="Open Data" />
            </div>
          </div>
        </div>
      </IntlProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang,
  }
}

export default connect(
  mapStateToProps,
  { setLocale }
)(Footer)
