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

class Privacy extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div class="container-fluid">
          <Header>Privacy Policy</Header>

          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <h3 className="internal-sub-title">Who We Are </h3>
              <p className="internal-text">
                As advocated of open data and data for good, we value your
                personal data and making efforts to make sure it is secured and
                used only for the purpose of IODC. This policy will describe how
                we deal with your data: when and why we collect your personal
                information, how we use it, the limited conditions under which
                we may disclose it to others and how we keep it secure.
              </p>
              <p className="internal-text">
                <span className="bold-title">Data Use</span> IODC does not sell,
                rent or lease your personal data under any circumstances. IODC
                uses the information you provide to send you communications,
                such as Conference program updates; ticketing information; and
                other relevant Conference information.
              </p>
              <p className="internal-text">
                <span className="bold-title">Type of Data We Collect</span>
              </p>

              <p className="internal-text-list-program">
                <ul>
                  <li>
                    <span class="bullet">●</span>
                    Google Analytics - When someone visits opendatacon.org, we
                    use a third party service, Google Analytics, to collect
                    standard internet log information and details of visitor
                    behaviour patterns. We do this to understand who we reached
                    and how we can reach more people to our conference. This
                    information is only processed in a way which does not
                    identify anyone. We do not make, and do not allow Google to
                    make, any attempt to find out the identities of those
                    visiting our website.
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    Registration Forms - We collect your contact details in our
                    registration form so that we can:
                    <ul>
                      <li>
                        1. Verify your identification when you visit the
                        conference.
                      </li>
                      <li>
                        2. Contact you so you can keep up-to-date with the
                        conference and have the best attendance experience.{' '}
                      </li>
                      <li>3. Measure the diversity of the event. </li>
                    </ul>
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    Newsletter - By registering to the conference, you give us
                    consent to include you in our mailing list. Your data will
                    only be shared with MailChimp to send you correspondance
                    about the conference. You can unsubscribe from MailChimp at
                    anytime. For more information, please see MailChimp’s
                    privacy notice.
                  </li>
                </ul>
              </p>

              <p className="internal-text">
                <span className="bold-title">
                  Access to your Personal Information
                </span>{' '}
                You are entitled to view, amend, or delete the personal
                information of yours that we maintain. Email your request to
                contact@opendatacon.org
              </p>

              <p className="internal-text">
                <span className="bold-title">
                  Changes to this Privacy Notice
                </span>{' '}
                This privacy policy was changed on 27/5/2018
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
