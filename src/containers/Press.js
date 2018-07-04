import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Header, Footer } from './'
import { IdCard } from '../img'

class Press extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
          <div className="container-fluid">
            <Header>Press</Header>
            <div className="row press_container">
              <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                <img
                  src={IdCard}
                  alt="IdCard"
                  classNameName="centerelement img-idcard"
                />
                <p classNameName="internal-text text-center">
                  Soon, in this section you will find everything you need to
                  know to accredit and cover the Conference. For more
                  information, contact us at{' '}
                  <span classNameName="italic-text">
                    {' '}
                    contact@opendatacon.org
                  </span>.
                </p>
              </div>
            </div>
          </div>
          <Footer bottom={true} />
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
)(Press)
