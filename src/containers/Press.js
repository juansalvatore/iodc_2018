import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedHTMLMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Header, Footer } from './'
import { IdCard } from '../img'

class Press extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="press_container">
          <div className="container-fluid">
            <Header>
              <FormattedHTMLMessage id="press.header" defaultMessage="Info" />
            </Header>
            <div className="row press_container">
              <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 centerelement">
                <img
                  id="id_card"
                  src={IdCard}
                  alt="IdCard"
                  className="img-idcard"
                />
                <p classNameName="internal-text text-center">
                  <FormattedHTMLMessage id="press.text" defaultMessage="Info" />
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
