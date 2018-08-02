import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedHTMLMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import {
  Parallax,
  ParallaxProvider,
  ParallaxBanner,
} from 'react-scroll-parallax'

import { Header, Footer } from './'

import {
  iodcBackground,
  rectangleShort,
  rectangleHeight,
  dotsHeight,
} from '../img'

class Info extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="overflowHidden">
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

                {/* <p className="internal-text mbottom0">
                <FormattedHTMLMessage id="info.c" defaultMessage="Info" />
              </p> */}

                {/* <p className="internal-text">
                <FormattedHTMLMessage id="info.d" defaultMessage="Info" />
              </p> */}

                <p className="internal-text mbottom0">
                  <FormattedHTMLMessage id="info.e" defaultMessage="Info" />
                </p>

                <p className="internal-text">
                  <FormattedHTMLMessage id="info.f" defaultMessage="Info" />
                </p>

                <h3 className="internal-sub-title">
                  {' '}
                  <FormattedHTMLMessage
                    id="info.privacy"
                    defaultMessage="Info"
                  />
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
                <br />
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

                <p className="internal-text">
                  <FormattedHTMLMessage id="info.h" defaultMessage="Info" />
                </p>

                <p className="internal-text mbottom0">
                  <FormattedHTMLMessage id="info.i" defaultMessage="Info" />
                </p>
                <p className="internal-text">
                  {/* <FormattedHTMLMessage id="info.j" defaultMessage="Info" /> */}
                </p>

                <p className="internal-text-list-program">
                  <ol>
                    <li>3 - test</li>
                    <li>
                      4 -
                      <ul>
                        <li className="mtop20">
                          <span class="internal-bullets-text">a.</span>
                          <FormattedHTMLMessage
                            id="info.j.a"
                            defaultMessage="Info"
                          />
                        </li>
                        <li className="mtop20">
                          <span class="internal-bullets-text">b.</span>
                          <FormattedHTMLMessage
                            id="info.j.b"
                            defaultMessage="Info"
                          />
                        </li>
                        <li className="mtop20">
                          <span class="internal-bullets-text">c.</span>{' '}
                          <FormattedHTMLMessage
                            id="info.j.c"
                            defaultMessage="Info"
                          />
                        </li>
                        <li className="mtop20">
                          <span class="internal-bullets-text">d.</span>
                          <FormattedHTMLMessage
                            id="info.j.d"
                            defaultMessage="Info"
                          />
                        </li>
                      </ul>
                    </li>
                  </ol>
                </p>

                <p className="internal-text mbottom0">
                  <FormattedHTMLMessage id="info.k" defaultMessage="Info" />
                </p>

                <p className="internal-text">
                  <FormattedHTMLMessage id="info.l" defaultMessage="Info" />
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

                <h3 id="middle" className="internal-sub-title">
                  <FormattedHTMLMessage
                    id="info.baires"
                    defaultMessage="Info"
                  />
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

                <p id="bottom" className="internal-text mbottom75">
                  <FormattedHTMLMessage id="info.6" defaultMessage="Info" />
                </p>
              </div>
              <Footer />
            </div>
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
