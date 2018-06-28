import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import '../styles/main.min.css'
// import Patio from '../img/patio.jpg'

class Header extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="row img-back section">
          <div className="col-lg-12">
            <div>
              <div className="flex-row">
                <div />
                <div className="container">
                  <h3>{this.props.children}</h3>
                </div>
              </div>
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
)(Header)
