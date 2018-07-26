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
        <div className="press_container overflowHidden">
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
                <p className="internal-text text-center">
                  <FormattedHTMLMessage id="press.info" defaultMessage="Info" />
                </p>
              </div>
            </div>

            <div className="row mtop40">
              <div className="home_button_container press_buttons_container">
                <div className="col-xs-12 col-sm-6 mtop40 button_alignment_right">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfFax_sT-AcPeVRgREsHP-fPmDk2JbmlXVFR8AdffnfNE-F9A/viewform"
                    target="_blank"
                  >
                    <button className="register-button">
                      <FormattedHTMLMessage
                        id="press.register"
                        defaultMessage="Info"
                      />
                    </button>
                  </a>
                </div>

                <div className="col-xs-12 col-sm-6 mtop40 button_alignment_left">
                  <a
                    href={
                      this.props.lang == 'en'
                        ? 'https://www.argentina.gob.ar/sites/default/files/press_kit_iodc18-v0.pdf'
                        : 'https://www.argentina.gob.ar/sites/default/files/kit_de_prensa_iodc18-v0.pdf'
                    }
                    target="_blank"
                  >
                    <button className="schedule-button schedule-button-top">
                      <FormattedHTMLMessage
                        id="press.download"
                        defaultMessage="Info"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <p className="inquiries internal-text text-center mtop40">
                <FormattedHTMLMessage id="press.text" defaultMessage="Info" />
              </p>
            </div>
          </div>
          <div className="footer_bottom_press">
            <Footer />
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
)(Press)
