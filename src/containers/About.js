import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'

import { AboutImg } from '../img'

import { Header, Footer } from './'

class About extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="container-fluid">
          <Header>About</Header>

          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <h3 className="internal-sub-title">
                About The International Open Data Conference
              </h3>
              <p className="internal-text">
                <span class="bold-text">
                  The International Open Data Conference (IODC)
                </span>{' '}
                is a biannual event that brings the global open data community
                together in order to learn, share, plan and collaborate on the
                future of open data.
              </p>

              <p className="internal-text m75">
                The unique nature of this event is that it gathers together in
                one location a diverse range of participants from the northern
                and southern hemispheres who are seeking to define strategies to
                advance open data both locally and globally.
              </p>

              <img
                src={AboutImg}
                alt="About"
                className="img-placeholder mtop40"
              />

              <h3 className="internal-sub-title internal-sub-title-low mtop40">
                The IODC has 3 main objectives:
              </h3>

              <p className="internal-text">
                <span className="internal-bullets-text">1.</span>{' '}
                <span className="bold-text">Identify and explore</span> the new
                opportunities and challenges that are shaping the open data
                agenda.
              </p>
              <p className="internal-text">
                <span className="internal-bullets-text">2.</span>
                <span className="bold-text">
                  Highlight innovative and practical open data solutions
                </span>
                capable of driving social and economic impact in areas such as
                health, education, science, etc.
              </p>
              <p className="internal-text">
                <span className="internal-bullets-text">3.</span>
                <span className="bold-text">
                  Consolidate an international partnership to drive the
                  development of global common resources for the international
                  open data community.
                </span>
                Under the theme “The Future is Open”, this year’s conference
                will reconvene our ever expanding community to address the key
                issues and challenges facing the open data community today, and
                seek to identify innovative solutions and opportunities for
                increased collaboration that will translate into real progress
                in the years ahead.
              </p>

              <p className="internal-text">
                <span className="bold-text">
                  The agenda has been co-created with people from all around the
                  world
                </span>{' '}
                through a global call for proposals. The conference recieved{' '}
                <span className="bold-text">600 proposals</span>, and all were
                examined by the IODC program committee, seeking for gender
                balance, regional diversity and inclusion of all voices. This
                resulted in a programme of interactive sessions, workshops,
                discussions and other special events.
              </p>

              <h3 className="internal-sub-title internal-sub-title-low">
                The conference targets the broad participation of individuals
                and organizations from:
              </h3>

              <p className="internal-text-list">
                <ul>
                  <li>
                    {' '}
                    <span class="bullet">●</span> Open Data Experts and
                    Practitioners
                  </li>
                  <li>
                    {' '}
                    <span class="bullet">●</span> Civil Society Multilateral
                    Organizations
                  </li>

                  <li>
                    {' '}
                    <span class="bullet">●</span> Government Policymakers and
                    Service Providers
                  </li>
                  <li>
                    {' '}
                    <span class="bullet">●</span> Private Sector
                  </li>

                  <li>
                    {' '}
                    <span class="bullet">●</span> Researchers and Academics
                    Donors and Investors
                  </li>
                  <li className="m75">
                    {' '}
                    <span class="bullet">●</span> Data Journalists
                  </li>
                </ul>
              </p>

              <p className="internal-text m75">
                Prior to the official IODC 2018 program on September 27-28st, a
                number of pre-events will be held in Buenos Aires. These events
                are complementary to the program and allow more opportunities to
                engage and learn about different topics.
              </p>

              <h3 className="internal-sub-title internal-sub-title-low">
                Organizers
              </h3>

              <p className="internal-text">
                The fifth edition of IODC is organized by the Government of
                Argentina, together with the Open Data for Development Network,
                the International Development Research Centre and the World
                Bank. Organizers will work with stakeholders and partners around
                the world to strengthen cohesion among existing open data
                efforts and explore new ways to drive social and economic value
                around the world.
              </p>

              <h3 className="internal-sub-title internal-sub-title-low">
                Programme Committee
              </h3>

              <p className="internal-text">COMITTEE</p>
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
