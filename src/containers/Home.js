import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  IntlProvider,
  FormattedMessage,
  FormattedHTMLMessage,
} from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Footer, SideEvent } from './'
import { Link } from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

import {
  Evento,
  Iodc16,
  Iodc15,
  Uruguay,
  Francia,
  Brasil,
  Uk,
  Alemania,
  Canada,
  Iodc12,
  Patio,
  Iodc10,
  LogoBA,
  SideEvent1,
  SideEvent2,
  SideEvent3,
  SideEvent4,
  rectangleShort,
  dotsHeight,
  dotsShort,
  VisasAzul,
  VisasCeleste,
  ComiteeAzul,
  ComiteeCeleste,
  BAazul,
  BAceleste,
  IDRCColor,
  WorldBankColor,
  Telecom,
  LogoMinColor,
  LogoOpendataColor,
  LogoILDA,
  LogoBID,
} from '../img'

class Home extends Component {
  state = {
    top: true,
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { lang } = this.props
    return (
      <IntlProvider
        locale={lang}
        messages={messages[lang]}
        className="overflowHidden"
      >
        <div className="overflowHidden">
          <Parallax
            offsetXMax={6}
            offsetXMin={-6}
            slowerScrollRate
            tag="grey_one"
            className="rectangle_short_home"
          >
            <img
              src={rectangleShort}
              className="rectangle_test"
              alt="rectangle"
            />
          </Parallax>

          <Parallax
            offsetXMax={0}
            offsetXMin={-20}
            slowerScrollRate
            tag="grey_one"
            className="dots_short_home_top"
          >
            <img src={dotsShort} width={180} alt="rectangle" />
          </Parallax>

          <div className="container-fluid no-padding">
            <div className="row">
              <ParallaxBanner
                className="banner_paralax"
                layers={[
                  {
                    image: Patio,
                    amount: 0.1,
                    slowerScrollRate: false,
                  },
                  {
                    // image:
                    //   'https://lh3.ggpht.com/mJDgTDUOtIyHcrb69WM0cpaxFwCNW6f0VQ2ExA7dMKpMDrZ0A6ta64OCX3H-NMdRd20=s180',
                    amount: 0.4,
                    slowerScrollRate: false,
                  },
                ]}
                style={{
                  height: '680px',
                }}
              >
                <Parallax
                  className="custom-class"
                  offsetYMax={200}
                  offsetYMin={-30}
                  slowerScrollRate
                  tag="figure"
                >
                  <div className="col-lg-12 centerelement main_title">
                    <div>
                      <h2>
                        <FormattedMessage
                          id="home.main.title"
                          defaultMessage="The Future is Open"
                        />
                      </h2>

                      <div className="flex-row">
                        <div className="city-back">
                          <h4 className="city">BUENOS AIRES</h4>
                        </div>
                        <div>
                          <h4 className="date">
                            <FormattedMessage
                              id="home.main.date"
                              defaultMessage="September 27-28, 2018"
                            />
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </Parallax>
              </ParallaxBanner>
            </div>

            <div className="centerelement">
              <div className="home_button_container">
                <Link to="/register">
                  <button className="register-button">
                    <FormattedMessage
                      id="home.main.register"
                      defaultMessage="REGISTER"
                    />
                  </button>
                </Link>
                <Link to="/agenda">
                  <button className="schedule-button schedule-button-top">
                    <FormattedMessage
                      id="home.main.schedule"
                      defaultMessage="SEE THE SCHEDULE"
                    />
                  </button>
                </Link>
              </div>
            </div>

            {/* SECCION BULLETS */}
            <div className="container bottom-140">
              <div className="row">
                <div className="col-lg-12">
                  <Parallax
                    className="visas"
                    offsetYMax={-10}
                    offsetYMin={10}
                    slowerScrollRate
                    tag="visas"
                  >
                    <h4 className="sub-title">
                      <FormattedMessage
                        id="home.bullets.title"
                        defaultMessage="Already registered to the event?"
                      />
                    </h4>
                  </Parallax>
                </div>

                <div className="col-xs-12 col-sm-4 text-center">
                  <Parallax
                    className="visas"
                    offsetYMax={-10}
                    offsetYMin={10}
                    slowerScrollRate
                    tag="visas"
                  >
                    <div className="visas_container">
                      <Parallax
                        className="visas"
                        offsetYMax={-7}
                        offsetYMin={7}
                        slowerScrollRate
                        tag="visas"
                      >
                        <img
                          src={VisasAzul}
                          alt="Visas"
                          className="img-bullets visas_azul"
                        />
                      </Parallax>
                      <img
                        src={VisasCeleste}
                        alt="Visas"
                        className="img-bullets visas_celeste"
                      />
                    </div>
                    <h5 className="bullets">
                      <FormattedMessage
                        id="home.bullets.2"
                        defaultMessage="Need more info about visas?"
                      />
                    </h5>
                    <Link to="/info" onClick={() => window.scrollTo(0, 0)}>
                      <button className="button-bullets">
                        <FormattedMessage
                          id="home.bullets.button.2"
                          defaultMessage="Info for your application"
                        />
                      </button>
                    </Link>
                  </Parallax>
                </div>

                <NavLink
                  to="/info#middle"
                  activeClassName="selected"
                  scroll={el =>
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                >
                  <div className="col-xs-12 col-sm-4 text-center">
                    <Parallax
                      className="bsas_info"
                      offsetYMax={-10}
                      offsetYMin={10}
                      slowerScrollRate
                      tag="visas"
                    >
                      <div className="obelisco_container">
                        <img
                          src={BAazul}
                          alt="Obelisco"
                          className="img-bullets obelisco_icon_azul"
                        />
                        <Parallax
                          offsetYMax={7}
                          offsetYMin={-7}
                          slowerScrollRate
                          tag="visas"
                        >
                          <img
                            src={BAceleste}
                            alt="Obelisco"
                            className="img-bullets obelisco_icon_celeste"
                          />
                        </Parallax>
                      </div>
                      <h5 className="bullets">
                        <FormattedMessage
                          id="home.bullets.1"
                          defaultMessage="Need more info about Buenos Aires?"
                        />
                      </h5>
                      <button className="button-bullets">
                        <FormattedMessage
                          id="home.bullets.button.1"
                          defaultMessage="Get to know the city"
                        />
                      </button>
                    </Parallax>
                  </div>
                </NavLink>

                <NavLink
                  to="/info#bottom"
                  activeClassName="selected"
                  scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="col-xs-12 col-sm-4 text-center">
                    <Parallax
                      className="comittee"
                      offsetYMax={-10}
                      offsetYMin={10}
                      slowerScrollRate
                      tag="visas"
                    >
                      <div className="comitee_container">
                        <img
                          src={ComiteeAzul}
                          alt="Comitee"
                          className="img-bullets persona_icon_azul"
                        />
                        <Parallax
                          offsetYMax={7}
                          offsetYMin={-7}
                          slowerScrollRate
                          tag="visas"
                        >
                          <img
                            src={ComiteeCeleste}
                            alt="Comitee"
                            className="img-bullets persona_icon_celeste"
                          />
                        </Parallax>
                      </div>

                      <h5 className="bullets">
                        <FormattedMessage
                          id="home.bullets.3"
                          defaultMessage="Do you need an invite from the comitee?"
                        />
                      </h5>
                      <button className="button-bullets">
                        <FormattedMessage
                          id="home.bullets.button.3"
                          defaultMessage="Request an invite"
                        />
                      </button>
                    </Parallax>
                  </div>
                </NavLink>

                {/* FIN BULLETS */}
              </div>
            </div>
            {/* FIN SECCION BULLETS */}
            <div className="row">
              <ParallaxBanner
                className="banner_paralax_home_about"
                layers={[
                  {
                    image: Evento,
                    amount: 0.2,
                    slowerScrollRate: false,
                  },
                  {
                    // image:
                    //   'https://lh3.ggpht.com/mJDgTDUOtIyHcrb69WM0cpaxFwCNW6f0VQ2ExA7dMKpMDrZ0A6ta64OCX3H-NMdRd20=s180',
                    amount: 0.4,
                    slowerScrollRate: false,
                  },
                ]}
                style={{
                  height: '450px',
                }}
              >
                <Parallax
                  className="custom-class"
                  offsetYMax={10}
                  offsetYMin={-10}
                  slowerScrollRate
                  tag="figure"
                >
                  <div className="row centerelement">
                    <div className="col-xs-12 col-sm-8 text_about_iodc_home">
                      <h5 className="info-iodc-title">
                        <FormattedMessage
                          id="home.about.iodc.title"
                          defaultMessage="About IODC"
                        />
                      </h5>

                      <p className="info-iodc">
                        <FormattedMessage
                          id="home.about.iodc"
                          defaultMessage="about iodc"
                        />
                      </p>
                    </div>
                  </div>
                </Parallax>
              </ParallaxBanner>
            </div>
            {/* SECCION INFO */}

            {/* FIN SECCION INFO */}

            {/* SIDEEVENTS */}
            <div className="container">
              <div className="row padding-15">
                <div className="col-lg-12">
                  <h4 className="sub-title">
                    <FormattedMessage
                      id="home.sideevents"
                      defaultMessage="Events around the Conference"
                    />
                  </h4>
                </div>
                {/* EVENTO 1 */}

                <SideEvent
                  image={SideEvent1}
                  url="http://2018.abrelatam.org/"
                  title="AbreLatam"
                  location="Usina del Arte"
                  direction="Wednesday 26th September"
                />
                {/* EVENTO 2 */}
                <SideEvent
                  image={SideEvent2}
                  url="http://opencitiessummit.org/"
                  title="Open Cities"
                  location="Centro Metropolitano de Diseño"
                  direction="Monday 24th September"
                />
                <SideEvent
                  image={SideEvent3}
                  url="https://www.eventbrite.com/e/open-data-research-symposium-2018-tickets-47181009670"
                  title="Open Data Research Symposium"
                  location="Centro Cultural San Martín"
                  direction="Tuesday 25th September"
                />
                <SideEvent
                  image={SideEvent4}
                  url="https://www.open-contracting.org/events/"
                  title="Open Contracting Workshop"
                  location="Facultad de Derecho"
                  direction="Tuesday 25th September"
                />
              </div>

              <div className="row padding-15 mtop40">
                <div className="centerelement">
                  <Link to="/side-events-list">
                    <button className="schedule-button sideevents-button">
                      <FormattedHTMLMessage
                        id="home.main.sideevents"
                        defaultMessage="See all the side events"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* FIN EVENTOS */}

            {/* MAPA */}

            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h4 className="sub-title">
                    <FormattedMessage
                      id="home.visit.title"
                      defaultMessage="Your visit to Argentina"
                    />
                  </h4>
                </div>

                <div className="col-xs-12 centerelement map_container">
                  <div className="usina right">
                    <div className="map-title">#IODC18</div>

                    <hr />

                    <div>Usina del arte</div>
                    <div className="map-direction">
                      Agustín R. Caffarena 1, C1157ADA CABA
                    </div>
                  </div>
                  <Parallax
                    offsetYMax={20}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="grey_one"
                    className="dots_height_home"
                  >
                    <img src={dotsHeight} width={100} alt="rectangle" />
                  </Parallax>

                  <Parallax
                    offsetXMax={-50}
                    offsetXMin={20}
                    slowerScrollRate
                    tag="grey_one"
                    className="dots_short_home_bottom"
                  >
                    <img src={dotsShort} width={150} alt="rectangle" />
                  </Parallax>
                  <iframe
                    id="usina_map"
                    title="usina-map"
                    width="100%"
                    height="520"
                    frameBorder="0"
                    src="https://datosgobar.carto.com/u/modernizacion/builder/329aca58-835c-465d-bb40-f215ef950dc5/embed"
                  />
                </div>
              </div>

              <div className="row padding-15 mtop40">
                <div className="centerelement">
                  <Link to="/register">
                    <button className="register-button">
                      <FormattedMessage
                        id="home.main.register"
                        defaultMessage="REGISTER"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* FIN MAPA */}

            {/* EVENTOS ANTERIORES */}

            <div className="container">
              <div className="row padding-15">
                <div className="col-lg-12">
                  <h4 className="sub-title">
                    <FormattedMessage
                      id="home.previous"
                      defaultMessage="Previous Events"
                    />
                  </h4>
                </div>
                <div>
                  <div className="row centerelement">
                    <div className="col-xs-12 col-md-2 col-lg-2">
                      <a
                        href="http://conf2transfer.wpengine.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={Iodc16}
                          alt="iodc16"
                          className="img-responsive centerelement"
                        />
                      </a>
                    </div>

                    <div className="col-xs-12 col-md-4 col-lg-4">
                      <a
                        href="http://odconf1transfe.wpengine.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={Iodc15}
                          alt="iodc15"
                          className="img-responsive centerelement"
                        />
                      </a>
                    </div>

                    <div className="col-xs-12 col-md-4 col-lg-4">
                      <img
                        src={Iodc12}
                        alt="iodc12"
                        className="img-responsive centerelement"
                      />
                    </div>

                    <div className="col-xs-12 col-md-2 col-lg-2">
                      <img
                        src={Iodc10}
                        alt="iodc10"
                        className="img-responsive centerelement"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mbottom70">
              <div className="row centerelement">
                <div className="col-lg-12">
                  <h4 className="sub-title">
                    <FormattedMessage
                      id="home.organizers"
                      defaultMessage="Organizers"
                    />
                  </h4>
                </div>
              </div>

              <div className="row centerelement">
                <div className="col-xs-12 col-md-4 col-lg-4">
                  <img
                    src={LogoOpendataColor}
                    alt="OpenData"
                    className="img-responsive"
                  />
                </div>
                <div className="col-xs-offset-2 col-xs-8 col-md-offset-0 col-md-4 col-lg-4">
                  <img
                    src={LogoMinColor}
                    alt="Modernizacion"
                    className="img-responsive"
                  />
                </div>
                
              </div>

              <div className="row centerelement">
                <div className="col-xs-6 col-md-4 col-lg-4">
                  <img src={IDRCColor} alt="IDRC" className="img-responsive" />
                </div>
                <div className="col-xs-12 col-md-2 col-lg-2">
                  <img
                    src={LogoILDA}
                    alt="ILDA"
                    className="img-responsive logo-ilda"
                  />
                </div>
                <div className="col-xs-12 col-md-4 col-lg-4">
                  <img
                    src={WorldBankColor}
                    alt="World Bank"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>

            <div className="container-fluid grey-back">
              <div className="row centerelement">
                <div className="col-lg-12">
                  <h4 className="sub-title-grey">
                    <FormattedMessage
                      id="home.partners"
                      defaultMessage="Partners"
                    />
                  </h4>
                </div>
              </div>
              <div className="row mbottom70">
                <div className="row centerelement">
                <div className="col-xs-12 col-md-2 col-lg-2">
                  <img
                    src={LogoBA}
                    alt="ba"
                    className="img-responsive logo-ba"
                  />
                </div>
                  <div className="col-xs-12 col-md-3 col-lg-3">
                    <img
                      src={Telecom}
                      alt="Telecom"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-xs-12 col-md-2 col-lg-2">
                  <img
                    src={LogoBID}
                    alt="Bid"
                    className="img-responsive logo-ba"
                  />
                </div>
                </div>
              </div>
            </div>

            <div className="container mbottom70">
              <div className="row centerelement">
                <div className="col-lg-12">
                  <h4 className="sub-title">
                    <FormattedMessage
                      id="home.support"
                      defaultMessage="Support"
                    />
                  </h4>
                </div>
              </div>

              
              <div className="row centerelement">
                <div className="col-xs-12 col-md-2 col-lg-2">
                  <img src={Francia} alt="Francia" className="img-responsive" />
                </div>
                <div className="col-xs-12 col-md-2 col-lg-2 ">
                  <img src={Uruguay} alt="Uruguay" className="img-responsive" />
                </div>
                <div className="col-xs-12 col-md-2 col-lg-2">
                  <img src={Brasil} alt="Brasil" className="img-responsive" />
                </div>
                <div className="col-xs-12 col-md-2 col-lg-2">
                  <img
                    src={Alemania}
                    alt="Alemania"
                    className="img-responsive"
                  />
                </div>
                <div className="col-xs-12 col-md-2 col-lg-2">
                  <img src={Canada} alt="Canada" className="img-responsive" />
                </div>
                <div className="col-xs-12 col-md-2 col-lg-2">
                  <img src={Uk} alt="UK" className="img-responsive" />
                </div>
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
    apiKey: 'your-api-key',
  }
}

export default connect(
  mapStateToProps,
  { setLocale }
)(Home)
