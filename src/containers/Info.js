import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedHTMLMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'

import { Header, Footer } from './'

class Info extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="container-fluid">
          <Header>
            <FormattedHTMLMessage
              id="info.header"
              defaultMessage="Practical Info"
            />
          </Header>
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <h3 className="internal-sub-title">
                {' '}
                <FormattedHTMLMessage
                  id="info.registration"
                  defaultMessage="Info"
                />
              </h3>
              <p className="internal-text mbottom0">
                <FormattedHTMLMessage
                  id="info.fee.registration"
                  defaultMessage="Info"
                />
              </p>
              <p className="internal-text">
                <FormattedHTMLMessage
                  id="info.fee.registration.answer"
                  defaultMessage="Info"
                />
              </p>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.a" defaultMessage="Info" />
              </p>

              <p className="internal-text">
                <FormattedHTMLMessage id="info.b" defaultMessage="Info" />
              </p>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.c" defaultMessage="Info" />
              </p>

              <p className="internal-text">
                <FormattedHTMLMessage id="info.d" defaultMessage="Info" />
              </p>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.e" defaultMessage="Info" />
              </p>

              <p className="internal-text">
                <FormattedHTMLMessage id="info.f" defaultMessage="Info" />
              </p>

              <h3 className="internal-sub-title">
                {' '}
                <FormattedHTMLMessage id="info.privacy" defaultMessage="Info" />
              </h3>

              <p className="internal-text">
                <FormattedHTMLMessage
                  id="info.privacy.a"
                  defaultMessage="Info"
                />
              </p>

              <h3 className="internal-sub-title">
                <FormattedHTMLMessage id="info.visa" defaultMessage="Info" />
              </h3>
              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.g" defaultMessage="Info" />
              </p>

              <p className="internal-text">
                <FormattedHTMLMessage id="info.h" defaultMessage="Info" />
              </p>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.i" defaultMessage="Info" />
              </p>
              <p className="internal-text">
                <FormattedHTMLMessage id="info.j" defaultMessage="Info" />
              </p>

              <p className="internal-text-list-program">
                <ul>
                  <li className="mtop20">
                    <span class="internal-bullets-text">a.</span>
                    <FormattedHTMLMessage id="info.j.a" defaultMessage="Info" />
                  </li>
                  <li className="mtop20">
                    <span class="internal-bullets-text">b.</span>
                    <FormattedHTMLMessage id="info.j.b" defaultMessage="Info" />
                  </li>
                  <li className="mtop20">
                    <span class="internal-bullets-text">c.</span>{' '}
                    <FormattedHTMLMessage id="info.j.c" defaultMessage="Info" />
                  </li>
                  <li className="mtop20">
                    <span class="internal-bullets-text">d.</span>
                    <FormattedHTMLMessage id="info.j.d" defaultMessage="Info" />
                  </li>
                </ul>
              </p>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.k" defaultMessage="Info" />
              </p>

              <p className="internal-text">
                <FormattedHTMLMessage id="info.l" defaultMessage="Info" />
              </p>

              <p className="internal-text-list-program">
                <ul>
                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="info.name"
                      defaultMessage="Info"
                    />
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="info.surname"
                      defaultMessage="Info"
                    />
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="info.birth"
                      defaultMessage="Info"
                    />
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="info.nationality"
                      defaultMessage="Info"
                    />
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="info.where"
                      defaultMessage="Info"
                    />
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="info.what"
                      defaultMessage="Info"
                    />
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="info.consulate"
                      defaultMessage="Info"
                    />
                  </li>
                </ul>
              </p>

              <h3 className="internal-sub-title">
                <FormattedHTMLMessage id="info.venue" defaultMessage="Info" />
              </h3>
              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.m" defaultMessage="Info" />
              </p>
              <p className="internal-text">
                <FormattedHTMLMessage id="info.n" defaultMessage="Info" />
              </p>
              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.o" defaultMessage="Info" />
              </p>

              <p className="internal-text">
                <FormattedHTMLMessage id="info.p" defaultMessage="Info" />
              </p>

              <h3 className="internal-sub-title">
                {' '}
                <FormattedHTMLMessage id="info.baires" defaultMessage="Info" />
              </h3>

              <h3 className="internal-sub-title internal-sub-title-low">
                <FormattedHTMLMessage id="info.trip" defaultMessage="Info" />
              </h3>
              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.q" defaultMessage="Info" />
              </p>

              <p className="internal-text">
                <FormattedHTMLMessage id="info.r" defaultMessage="Info" />
              </p>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.s" defaultMessage="Info" />
              </p>
              <p className="internal-text">
                <FormattedHTMLMessage id="info.t" defaultMessage="Info" />
              </p>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.u" defaultMessage="Info" />{' '}
              </p>
              <p className="internal-text">
                <FormattedHTMLMessage id="info.v" defaultMessage="Info" />
              </p>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.w" defaultMessage="Info" />
              </p>
              <p className="internal-text">
                <FormattedHTMLMessage id="info.x" defaultMessage="Info" />
              </p>

              <h3 className="internal-sub-title internal-sub-title-low">
                <FormattedHTMLMessage
                  id="info.accomodation"
                  defaultMessage="Info"
                />
              </h3>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.y" defaultMessage="Info" />
              </p>

              <p className="internal-text">
                <FormattedHTMLMessage id="info.z" defaultMessage="Info" />
              </p>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.1" defaultMessage="Info" />
              </p>

              <p className="internal-text">
                <FormattedHTMLMessage id="info.2" defaultMessage="Info" />
              </p>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.3" defaultMessage="Info" />
              </p>

              <p className="internal-text">
                <FormattedHTMLMessage id="info.4" defaultMessage="Info" />
              </p>

              <h3 className="internal-sub-title">
                <FormattedHTMLMessage
                  id="info.invitation"
                  defaultMessage="Info"
                />
              </h3>

              <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.5" defaultMessage="Info" />
              </p>

              <p className="internal-text mbottom75">
                <FormattedHTMLMessage id="info.6" defaultMessage="Info" />
              </p>
            </div>
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
)(Info)
