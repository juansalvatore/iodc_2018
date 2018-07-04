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

import {
  Preevent,
  Iodc16,
  Iodc15,
  Obelisco,
  Visas,
  Invitacion,
  Uruguay,
  Francia,
  Brasil,
  Iodc12,
  Iodc10,
  SideEvent1,
  SideEvent2,
  SideEvent3,
  SideEvent4,
} from '../img'

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
          <div className="container-fluid">
            <div className="row img-back centerelement">
              <div className="col-lg-12 centerelement">
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
            </div>
            <div className="centerelement">
              <div className="home_button_container">
                <Link to="/iodc_2018/register">
                  <button className="register-button">
                    <FormattedMessage
                      id="home.main.register"
                      defaultMessage="REGISTER"
                    />
                  </button>
                </Link>
                <Link to="/iodc_2018/agenda">
                  <button className="schedule-button">
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
                  <h4 className="sub-title">
                    <FormattedMessage
                      id="home.bullets.title"
                      defaultMessage="Already registered to the event?"
                    />
                  </h4>
                </div>

                <div className="col-xs-12 col-sm-4 text-center">
                  <img src={Visas} alt="Visas" className="img-bullets" />
                  <h5 className="bullets">
                    <FormattedMessage
                      id="home.bullets.2"
                      defaultMessage="Need more info about visas?"
                    />
                  </h5>
                  <Link
                    to="/iodc_2018/info"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <button className="button-bullets">
                      <FormattedMessage
                        id="home.bullets.button.2"
                        defaultMessage="Info for your application"
                      />
                    </button>
                  </Link>
                </div>
                <Link
                  to="/iodc_2018/info"
                  onClick={() => window.scrollTo(0, 2000)}
                >
                  <div className="col-xs-12 col-sm-4 text-center">
                    <img
                      src={Obelisco}
                      alt="Obelisco"
                      className="img-bullets"
                    />
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
                  </div>
                </Link>
                <Link
                  to="/iodc_2018/info"
                  onClick={() => window.scrollTo(0, 2200)}
                >
                  <div className="col-xs-12 col-sm-4 text-center">
                    <img
                      src={Invitacion}
                      alt="Invitacion"
                      className="img-bullets"
                    />
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
                  </div>
                </Link>

                {/* FIN BULLETS */}
              </div>
            </div>
            {/* FIN SECCION BULLETS */}

            {/* SECCION INFO */}

            <div className="row img-back-info centerelement">
              <div className="col-xs-12 col-sm-8">
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
                  <Link to="/iodc_2018/side-events-list">
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
                  <iframe
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
                  <Link to="/iodc_2018/register">
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
                      <img
                        src={Iodc10}
                        alt="iodc10"
                        className="img-responsive centerelement"
                      />
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
                        src={Iodc16}
                        alt="iodc16"
                        className="img-responsive centerelement"
                      />
                    </div>
                    <div className="col-xs-12 col-md-4 col-lg-4">
                      <img
                        src={Iodc15}
                        alt="iodc15"
                        className="img-responsive centerelement"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container bottom-140">
              <div className="row centerelement">
                <div className="col-lg-12">
                  <h4 className="sub-title">
                    <FormattedMessage
                      id="home.partners"
                      defaultMessage="Partners"
                    />
                  </h4>
                </div>
              </div>
              <div className="row centerelement">
                <div className="col-xs-12 col-md-3 col-lg-3">
                  <img src={Francia} alt="Francia" className="img-responsive" />
                </div>
                <div className="col-xs-12 col-md-3 col-lg-3 ">
                  <img src={Uruguay} alt="Uruguay" className="img-responsive" />
                </div>
                <div className="col-xs-12 col-md-3 col-lg-3">
                  <img src={Brasil} alt="Brasil" className="img-responsive" />
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
