import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'

import { LogoMin, LogoCanada, LogoWbg, LogoOpendata, LogoBA } from '../img'

class Footer extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div
          className={
            this.props.bottom
              ? 'footer centerelement bottom-footer'
              : 'footer centerelement'
          }
        >
          <div className="col-sm-12 col-lg-10 centerelement">
            {/* <div className="col-xs-12 col-md-4 col-lg-4 text-center center_footer">
              <img className="footer-img" src={LogoWbg} alt="World Bank" />
            </div> */}

            <div className="col-xs-12 col-md-4 col-lg-4 text-center center_footer">
              <img
                className="footer-img logo_open"
                src={LogoOpendata}
                alt="Open Data"
              />
            </div>
            <div className="col-xs-10 col-sm-5 col-md-4 col-lg-4 text-center center_footer">
              <img
                className="footer-img logo_modernizacion"
                src={LogoMin}
                alt="Logo Min"
              />
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
