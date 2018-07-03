import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  IntlProvider,
  FormattedMessage,
  FormattedHTMLMessage,
} from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'

import { AboutImg } from '../img'

import CommitteeData from './committeeData'

import { Header, Footer } from './'

class About extends Component {
  state = {
    committee: CommitteeData,
  }

  displayCommittee = () => {
    return this.state.committee.map(person => {
      const { name, surname, organization } = person
      return (
        <li>
          <p class="people-list__name">
            {name} {surname}
          </p>
          <p class="people-list__org">{organization}</p>
        </li>
      )
    })
  }

  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="container-fluid">
          <Header>About</Header>

          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <h3 className="internal-sub-title">
                <FormattedMessage
                  id="about.title"
                  defaultMessage="About the International Open Data Conference"
                />
              </h3>
              <p className="internal-text">
                <FormattedHTMLMessage
                  id="about.top.info.a"
                  defaultMessage="About the International Open Data Conference"
                />
              </p>

              <p className="internal-text m75">
                <FormattedHTMLMessage
                  id="about.top.info.b"
                  defaultMessage="About the International Open Data Conference"
                />
              </p>

              <img
                src={AboutImg}
                alt="About"
                className="img-placeholder mtop40"
              />

              <h3 className="internal-sub-title internal-sub-title-low mtop40">
                <FormattedHTMLMessage
                  id="about.objectives.title"
                  defaultMessage="The IODC has 3 main objectives:"
                />
              </h3>

              <p className="internal-text">
                <span className="internal-bullets-text">1.</span>
                <FormattedHTMLMessage
                  id="about.objectives.one"
                  defaultMessage="The IODC has 3 main objectives:"
                />
              </p>
              <p className="internal-text">
                <span className="internal-bullets-text">2.</span>
                <FormattedHTMLMessage
                  id="about.objectives.two"
                  defaultMessage="The IODC has 3 main objectives:"
                />
              </p>
              <p className="internal-text">
                <span className="internal-bullets-text">3.</span>
                <FormattedHTMLMessage
                  id="about.objectives.three"
                  defaultMessage="The IODC has 3 main objectives:"
                />
              </p>

              <p className="internal-text">
                <FormattedHTMLMessage
                  id="about.objectives.description"
                  defaultMessage="The IODC has 3 main objectives:"
                />
              </p>

              <h3 className="internal-sub-title internal-sub-title-low">
                <FormattedHTMLMessage
                  id="about.participation.title"
                  defaultMessage="The IODC has 3 main objectives:"
                />
              </h3>

              <p className="internal-text-list">
                <ul>
                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="about.participation.bullet.a"
                      defaultMessage="The IODC has 3 main objectives:"
                    />
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="about.participation.bullet.b"
                      defaultMessage="The IODC has 3 main objectives:"
                    />
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="about.participation.bullet.btwo"
                      defaultMessage="The IODC has 3 main objectives:"
                    />
                  </li>

                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="about.participation.bullet.c"
                      defaultMessage="The IODC has 3 main objectives:"
                    />
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="about.participation.bullet.d"
                      defaultMessage="The IODC has 3 main objectives:"
                    />
                  </li>

                  <li>
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="about.participation.bullet.e"
                      defaultMessage="The IODC has 3 main objectives:"
                    />
                  </li>
                  <li className="m75">
                    <span class="bullet">●</span>
                    <FormattedHTMLMessage
                      id="about.participation.bullet.f"
                      defaultMessage="The IODC has 3 main objectives:"
                    />
                  </li>
                </ul>
              </p>

              <p className="internal-text m75">
                <FormattedHTMLMessage
                  id="about.participation.bullet.description"
                  defaultMessage="The IODC has 3 main objectives:"
                />
              </p>

              <h3 className="internal-sub-title internal-sub-title-low">
                <FormattedHTMLMessage
                  id="about.organizers"
                  defaultMessage="Organizers"
                />
              </h3>

              <p className="internal-text">
                <FormattedHTMLMessage
                  id="about.organizers.description"
                  defaultMessage="Organizers"
                />
              </p>

              <h3 className="internal-sub-title mbottom30">
                Programme Committee
              </h3>

              <ul class="people-list mbottom75">{this.displayCommittee()}</ul>
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
)(About)
