import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedHTMLMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Header, Footer } from './'

class Privacy extends Component {
  componentDidMount() {
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
                id="privacy.header"
                defaultMessage="Privacy Policy"
              />
            </Header>

            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                <h3 className="internal-sub-title">
                  <FormattedHTMLMessage
                    id="privacy.who.we.are"
                    defaultMessage="Who we are"
                  />
                </h3>
                <p className="internal-text">
                  <FormattedHTMLMessage
                    id="privacy.a"
                    defaultMessage="Privacy Policy"
                  />
                </p>

                <p className="internal-sub-title internal-sub-title-low mtop40">
                  <FormattedHTMLMessage
                    id="privacy.data.use"
                    defaultMessage="Privacy Policy"
                  />
                </p>
                <p className="internal-text">
                  <FormattedHTMLMessage
                    id="privacy.b"
                    defaultMessage="Privacy Policy"
                  />
                </p>
                <p className="internal-sub-title internal-sub-title-low mtop40">
                  <FormattedHTMLMessage
                    id="privacy.collect"
                    defaultMessage="Privacy Policy"
                  />
                </p>

                <p className="internal-text">
                  <ul>
                    <li className="mtop20">
                      <span class="bullet">●</span>
                      <FormattedHTMLMessage
                        id="privacy.analytics"
                        defaultMessage="Privacy Policy"
                      />
                      <p>
                        <FormattedHTMLMessage
                          id="privacy.c"
                          defaultMessage="Privacy Policy"
                        />
                      </p>
                    </li>
                    <li className="mtop20">
                      <span class="bullet">●</span>
                      <FormattedHTMLMessage
                        id="privacy.registration"
                        defaultMessage="Privacy Policy"
                      />

                      <p>
                        <FormattedHTMLMessage
                          id="privacy.d"
                          defaultMessage="Privacy Policy"
                        />
                      </p>
                      <ul>
                        <li>
                          <span className="bold-text">1.</span>{' '}
                          <FormattedHTMLMessage
                            id="privacy.1"
                            defaultMessage="Privacy Policy"
                          />
                        </li>
                        <li>
                          <span className="bold-text">2. </span>
                          <FormattedHTMLMessage
                            id="privacy.2"
                            defaultMessage="Privacy Policy"
                          />
                        </li>
                        <li>
                          <span className="bold-text">3. </span>
                          <FormattedHTMLMessage
                            id="privacy.3"
                            defaultMessage="Privacy Policy"
                          />
                        </li>
                      </ul>
                    </li>
                    <li className="mtop20">
                      <span class="bullet">●</span>
                      <FormattedHTMLMessage
                        id="privacy.newsletter"
                        defaultMessage="Privacy Policy"
                      />
                      <p>
                        <FormattedHTMLMessage
                          id="privacy.e"
                          defaultMessage="Privacy Policy"
                        />
                      </p>
                    </li>
                  </ul>
                </p>

                <p className="internal-text">
                  <p className="internal-sub-title internal-sub-title-low mtop40">
                    <FormattedHTMLMessage
                      id="privacy.access"
                      defaultMessage="Privacy Policy"
                    />
                  </p>
                  <FormattedHTMLMessage
                    id="privacy.f"
                    defaultMessage="Privacy Policy"
                  />
                </p>
                <p className="internal-text mbottom75">
                  <p className="internal-sub-title internal-sub-title-low mtop40">
                    <FormattedHTMLMessage
                      id="privacy.changes"
                      defaultMessage="Privacy Policy"
                    />
                  </p>
                  <FormattedHTMLMessage
                    id="privacy.g"
                    defaultMessage="Privacy Policy"
                  />
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
)(Privacy)
