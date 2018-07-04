import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedHTMLMessage } from 'react-intl'
import { setLocale } from '../actions/locale'
import messages from './messages'

import { Header, Footer } from './'

class Conduct extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
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
                  The{' '}
                  <span className="bold-text">
                    International Open Data Conference
                  </span>{' '}
                  attracts a diverse community of people from all over the
                  world.{' '}
                  <span className="bold-text">
                    Respect and safety are our main values
                  </span>, and we want to provide a safe and productive
                  environment for all participants and presenters. The following
                  code of conduct is meant to guide everyone at the IODC and
                  help to ensure a respectful and safe conference experience for
                  all. This code of conduct applies to the main conference as
                  well as all pre-events.
                </p>
                <h3 className="internal-sub-title internal-sub-title-low">
                  Diversity and Inclusivity
                </h3>
                <p className="internal-text mbottom75">
                  The International Open Data Conference welcomes and encourages
                  participation <span className="bold-text">by everyone</span>{' '}
                  including but not limited to people of all ages, cultures,
                  ethnicities, gender, gender-identity, language, race, sexual
                  orientation, geographical location, and religion.
                </p>

                <h3 className="internal-sub-title internal-sub-title-low">
                  Harassment-free Conference
                </h3>

                <p className="internal-text">
                  The International Open Data Conference is{' '}
                  <span className="bold-text">
                    dedicated to providing a harassment-free conference
                    experience for everyone
                  </span>, regardless of gender, gender identity and expression,
                  sexual orientation, disability, physical appearance, body
                  size, race, age or religion.
                </p>

                <p className="internal-text">
                  <span className="bold-text">
                    We do not tolerate harassment of conference participants in
                    any form.
                  </span>{' '}
                  Examples of harassment include offensive comments, verbal
                  threats or demands, sexualized images in public spaces,
                  intimidation, stalking, harassing photography or recording,
                  sustained disruption of sessions or events, and unwelcome
                  physical contact or sexual attention. Harassment also includes
                  slights and negative messages, both unintended and
                  intentional, based solely on appearance.{' '}
                  <span className="bold-text">
                    These activities will not be tolerated.
                  </span>
                </p>

                <h3 className="internal-sub-title internal-sub-title-low">
                  Reporting Issues at IODC
                </h3>

                <p className="internal-text">
                  <span className="bold-text">
                    {' '}
                    Participants asked to stop any harassing behaviour are
                    expected to comply immediately.
                  </span>
                </p>

                <p className="internal-text">
                  Conference participants violating these rules{' '}
                  <span className="bold-text">
                    may be sanctioned or expelled from the conference at the
                    discretion of the conference organizers.
                  </span>{' '}
                  You can make a report by:
                </p>

                <p className="internal-text-list-program">
                  <ul>
                    <li>
                      Emailing us at{' '}
                      <span className="italic-text">
                        contact@opendatacon.org
                      </span>. This email will be continuously monitored for the
                      duration of the event.
                    </li>
                    <li>
                      Contacting a staff member, identified by STAFF badges,
                      buttons, or shirts.
                    </li>
                  </ul>
                </p>

                <p className="internal-text mtop40">
                  When taking a personal report, our staff will ensure you are
                  safe and cannot be overheard. They may involve other event
                  staff to ensure your report is managed properly. Once safe,
                  we'll ask you to tell us about what happened. This can be
                  upsetting, but we'll handle it as respectfully as possible,
                  and you can bring someone to support you. You won't be asked
                  to confront anyone and we won't tell anyone who you are.
                </p>

                <p className="internal-text mbottom75">
                  Our team will be happy to help you contact hotel/venue
                  security, local law enforcement, local support services,
                  provide escorts, or otherwise assist you to feel safe for the
                  duration of the event.{' '}
                  <span className="bold-text">We value your attendance.</span>
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
