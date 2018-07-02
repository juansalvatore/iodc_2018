import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'

import { Header, Footer } from './'

class SubmitedForm extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="container-fluid">
          <Header>Register</Header>

          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <h3 className="internal-sub-title submitted-form-success">
                You have been registered successfully.
              </h3>
            </div>
          </div>
          <Footer />
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
)(SubmitedForm)
