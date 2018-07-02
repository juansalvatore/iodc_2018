import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Header, Footer } from './'

class Privacy extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div class="container-fluid">
          <Header>Privacy Policy</Header>

          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <h3 className="internal-sub-title">Who we are </h3>
              <p className="internal-text">
                As advocated of open data and data for good,{' '}
                <span class="bold-text">
                  we value your personal data and making efforts to make sure it
                  is secured and used only for the purpose of IODC.
                </span>{' '}
                This policy will describe how we deal with your data: when and
                why we collect your personal information, how we use it, the
                limited conditions under which we may disclose it to others and
                how we keep it secure.
              </p>

              <p className="internal-sub-title internal-sub-title-low mtop40">
                Data use
              </p>
              <p className="internal-text">
                <span class="bold-text">
                  IODC does not sell, rent or lease your personal data under any
                  circumstances.
                </span>{' '}
                IODC uses the information you provide to send you
                communications, such as Conference program updates; ticketing
                information; and other relevant Conference information.
              </p>
              <p className="internal-sub-title internal-sub-title-low mtop40">
                Type of data we collect
              </p>

              <p className="internal-text">
                <ul>
                  <li className="mtop20">
                    <span class="bullet">●</span>
                    <span className="bold-text">Google Analytics</span>{' '}
                    <p>
                      When someone visits{' '}
                      <span className="links-ext">opendatacon.org</span>, we use
                      a third party service,{' '}
                      <span class="bold-text">Google Analytics</span>, to
                      collect standard internet log information and details of
                      visitor behaviour patterns. We do this to{' '}
                      <span class="bold-text">
                        understand who we reached and how we can reach more
                        people to our conference.
                      </span>{' '}
                      This information is only processed in a way which does not
                      identify anyone. We do not make, and do not allow Google
                      to make, any attempt to find out the identities of those
                      visiting our website.
                    </p>
                  </li>
                  <li className="mtop20">
                    <span class="bullet">●</span>
                    <span className="bold-text">Registration forms</span>{' '}
                    <p>
                      We collect your contact details in our registration form
                      so that we can:
                    </p>
                    <ul>
                      <li>
                        <span className="bold-text">1.</span> Verify your
                        identification when you visit the conference.
                      </li>
                      <li>
                        <span className="bold-text">2. </span>Contact you so you
                        can keep up-to-date with the conference and have the
                        best attendance experience.{' '}
                      </li>
                      <li>
                        <span className="bold-text">3. </span>Measure the
                        diversity of the event.{' '}
                      </li>
                    </ul>
                  </li>
                  <li className="mtop20">
                    <span class="bullet">●</span>
                    <span className="bold-text">Newsletter</span>{' '}
                    <p>
                      By registering to the conference, you give us consent to
                      include you in our mailing list. Your data will only be
                      shared with MailChimp to send you correspondance about the
                      conference. You can unsubscribe from MailChimp at anytime.
                      For more information, please see{' '}
                      <a
                        className="links-ext"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://mailchimp.com/legal/privacy/"
                      >
                        MailChimp’s privacy notice
                      </a>.
                    </p>
                  </li>
                </ul>
              </p>

              <p className="internal-text">
                <p className="internal-sub-title internal-sub-title-low mtop40">
                  Access to your personal information
                </p>
                You are entitled to view, amend or delete the personal
                information of yours that we maintain. Email your request to{' '}
                <span className="italic-text">contact@opendatacon.org</span>.
              </p>

              <p className="internal-text mbottom75">
                <p className="internal-sub-title internal-sub-title-low mtop40">
                  Changes to this Privacy Notice
                </p>
                This privacy policy was changed on 27/5/2018.
              </p>
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
