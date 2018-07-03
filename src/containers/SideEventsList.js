import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Header, Footer } from './'
import { IdCard } from '../img'

class SideEventsList extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div class="container-fluid">
          <Header>Press</Header>
          <div class="row">
            <div class="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <img
                src={IdCard}
                alt="IdCard"
                className="centerelement img-idcard"
              />
              <p className="internal-text text-center">
                Soon, in this section you will find everything you need to know
                to accredit and cover the Conference. For more information,
                contact us at{' '}
                <span className="italic-text"> contact@opendatacon.org</span>.
              </p>
            </div>
          </div>

          <Footer bottom={false} />
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
)(SideEventsList)
