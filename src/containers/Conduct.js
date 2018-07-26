import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedHTMLMessage } from 'react-intl'
import { setLocale } from '../actions/locale'
import messages from './messages'

import { Header, Footer } from './'

class Conduct extends Component {
  componentWillMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="overflowHidden">
          <div class="container-fluid">
            <Header>
              <FormattedHTMLMessage
                id="conduct.header"
                defaultMessage="Code of Conduct"
              />
            </Header>

            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                <p className="internal-text mtop115">
                  <FormattedHTMLMessage id="conduct.a" defaultMessage="IODC" />
                </p>
                <h3 className="internal-sub-title internal-sub-title-low">
                  <FormattedHTMLMessage
                    id="conduct.diversity"
                    defaultMessage="IODC"
                  />
                </h3>
                <p className="internal-text mbottom75">
                  <FormattedHTMLMessage id="conduct.b" defaultMessage="IODC" />
                </p>

                <h3 className="internal-sub-title internal-sub-title-low">
                  <FormattedHTMLMessage
                    id="conduct.harasment"
                    defaultMessage="IODC"
                  />
                </h3>

                <p className="internal-text">
                  <FormattedHTMLMessage id="conduct.c" defaultMessage="IODC" />
                </p>

                <p className="internal-text">
                  <FormattedHTMLMessage id="conduct.d" defaultMessage="IODC" />
                </p>

                <h3 className="internal-sub-title internal-sub-title-low">
                  <FormattedHTMLMessage
                    id="conduct.reporting"
                    defaultMessage="IODC"
                  />
                </h3>

                <p className="internal-text">
                  <FormattedHTMLMessage id="conduct.e" defaultMessage="IODC" />
                </p>

                <p className="internal-text">
                  <FormattedHTMLMessage id="conduct.f" defaultMessage="IODC" />
                </p>

                <p className="internal-text-list-program">
                  <ul>
                    <li>
                      <span class="bullet">●</span>{' '}
                      <FormattedHTMLMessage
                        id="conduct.g"
                        defaultMessage="IODC"
                      />
                    </li>
                    <li>
                      <span class="bullet">●</span>{' '}
                      <FormattedHTMLMessage
                        id="conduct.h"
                        defaultMessage="IODC"
                      />
                    </li>
                  </ul>
                </p>

                <p className="internal-text mtop40">
                  <FormattedHTMLMessage id="conduct.i" defaultMessage="IODC" />
                </p>

                <p className="internal-text mbottom75">
                  <FormattedHTMLMessage id="conduct.j" defaultMessage="IODC" />
                </p>
              </div>
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
)(Conduct)
