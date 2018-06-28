import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import '../styles/main.min.css'
import Header from './Header'
import Footer from './Footer'

/*
  Bootstrap documentation for react:
  https://react-bootstrap.github.io/
*/

class Agenda extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div class="container-fluid">
          <Header>Privacy Policy</Header>

          <div class="row">
            <div class="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <h3 class="internal-sub-title internal-sub-title-low">
                Diversity and Inclusivity
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
)(Agenda)
