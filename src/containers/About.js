import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  IntlProvider,
  FormattedMessage,
  FormattedHTMLMessage,
} from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import {
  Parallax,
  ParallaxProvider,
  ParallaxBanner,
} from 'react-scroll-parallax'

import {
  AboutImg,
  LogoBAGrey,
  LogoCanadaGrey,
  LogoOpendataGrey,
  LogoMinGrey,
  LogoWbgGrey,
  iodcBackground,
  rectangleShort,
  rectangleHeight,
  dotsHeight,
} from '../img'

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

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <ParallaxProvider>
          <div>
            <Parallax
              className="iodcBack display_none_995"
              offsetYMax={15}
              offsetYMin={-70}
              slowerScrollRate
              tag="back"
            >
              <img src={iodcBackground} width="800" alt="IODC18" />
            </Parallax>
            <Parallax
              offsetYMax={25}
              offsetYMin={-50}
              slowerScrollRate
              tag="grey_one"
              className="rectangle_short display_none_995"
            >
              <img src={rectangleShort} width="500" />
            </Parallax>
            <Parallax
              offsetYMax={25}
              offsetYMin={-50}
              slowerScrollRate
              tag="grey_one"
              className="dots_height display_none_995"
            >
              <img src={dotsHeight} width="150" />
            </Parallax>
            <Parallax
              offsetYMax={25}
              offsetYMin={-50}
              slowerScrollRate
              tag="grey_one"
              className="rectangle_height display_none_995"
            >
              <img src={rectangleHeight} width="200" />
            </Parallax>
            <div className="container-fluid">
              <Header>
                <FormattedMessage id="nav.about" defaultMessage="About" />
              </Header>

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

                  {/* <img
                    src={AboutImg}
                    alt="About"
                    className="img-placeholder mtop40"
                  /> */}

                  <ParallaxBanner
                    className="img-placeholder about_banner_parallax mtop40"
                    layers={[
                      {
                        image: AboutImg,
                        amount: 0.1,
                        slowerScrollRate: false,
                      },
                    ]}
                    style={{
                      height: '240px',
                    }}
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

                  {/* <p className="internal-text m75">
                    <FormattedHTMLMessage
                      id="about.participation.bullet.description"
                      defaultMessage="The IODC has 3 main objectives:"
                    />
                  </p> */}

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

                  <div className="col-lg-12 centerelement">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center  mtop40">
                      <img
                        className="footer-img"
                        src={LogoCanadaGrey}
                        alt="Canada"
                      />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 text-center  mtop40">
                      <img
                        className="footer-img"
                        src={LogoWbgGrey}
                        alt="World Bank"
                      />
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-2 col-lg-2 text-center  mtop40">
                      <img
                        className="footer-img"
                        src={LogoOpendataGrey}
                        alt="Open Data"
                      />
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-2 col-lg-2 text-center  mtop40">
                      <img className="footer-img" src={LogoBAGrey} alt="BA" />
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 text-center  mtop40">
                      <img
                        className="footer-img"
                        src={LogoMinGrey}
                        alt="Logo Min"
                      />
                    </div>
                  </div>

                  <h3 className="internal-sub-title mbottom30">
                    Programme Committee
                  </h3>

                  <ul class="people-list mbottom75">
                    {this.displayCommittee()}
                  </ul>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </ParallaxProvider>
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
