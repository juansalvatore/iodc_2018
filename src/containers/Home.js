import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import '../styles/main.min.css'
import Footer from './Footer'
/*
  Bootstrap documentation for react:
  https://react-bootstrap.github.io/
*/
// import Patio from '../img/patio.jpg'
import Preevent from '../img/preevent.png'
import iodc16 from '../img/iodc16.png'
import iodc15 from '../img/iodc15.png'
import obelisco from '../img/obelisco.svg'
import visas from '../img/visas.svg'
import invitacion from '../img/invitacion.svg'

class Home extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div class="container-fluid">
          <div class="row img-back centerelement">
            <div class="col-lg-12 centerelement">
              <div>
                <h2>
                  <FormattedMessage
                    id="home.main.title"
                    defaultMessage="The Future is Open"
                  />
                </h2>

                <div class="flex-row">
                  <div class="city-back">
                    <h4 class="city">BUENOS AIRES</h4>
                  </div>
                  <div>
                    <h4 class="date">
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
          <div class="centerelement">
            <div>
              <button class="register-button">
                <FormattedMessage
                  id="home.main.register"
                  defaultMessage="REGISTER"
                />
              </button>
              <button class="schedule-button">
                <FormattedMessage
                  id="home.main.schedule"
                  defaultMessage="SEE THE SCHEDULE"
                />
              </button>
            </div>
          </div>

          {/* SECCION BULLETS */}
          <div class="container bottom-140">
            <div class="row">
              <div class="col-lg-12">
                <h4 class="sub-title">
                  <FormattedMessage
                    id="home.bullets.title"
                    defaultMessage="Already registered to the event?"
                  />
                </h4>
              </div>

              {/* BULLETS */}
              <div class="col-xs-12 col-sm-4 text-center">
                <img src={obelisco} alt="Obelisco" class="img-bullets" />
                <h5 class="bullets">
                  <FormattedMessage
                    id="home.bullets.1"
                    defaultMessage="Need more info about Buenos Aires?"
                  />
                </h5>
                <button class="button-bullets">
                  <FormattedMessage
                    id="home.bullets.button.1"
                    defaultMessage="Get to know the city"
                  />
                </button>
              </div>

              <div class="col-xs-12 col-sm-4 text-center">
                <img src={visas} alt="Visas" class="img-bullets" />
                <h5 class="bullets">
                  <FormattedMessage
                    id="home.bullets.2"
                    defaultMessage="Need more info about visas?"
                  />
                </h5>
                <button class="button-bullets">
                  <FormattedMessage
                    id="home.bullets.button.2"
                    defaultMessage="Info for your application"
                  />
                </button>
              </div>

              <div class="col-xs-12 col-sm-4 text-center">
                <img src={invitacion} alt="Invitacion" class="img-bullets" />
                <h5 class="bullets">
                  <FormattedMessage
                    id="home.bullets.3"
                    defaultMessage="Do you need an invite from the comitee?"
                  />
                </h5>
                <button class="button-bullets">
                  <FormattedMessage
                    id="home.bullets.button.3"
                    defaultMessage="Request an invite"
                  />
                </button>
              </div>

              {/* FIN BULLETS */}
            </div>
          </div>
          {/* FIN SECCION BULLETS */}

          {/* SECCION INFO */}

          <div class="row img-back-info centerelement">
            <div class="col-xs-12 col-sm-8">
              <h5 class="info-iodc-title">About IODC</h5>

              <p class="info-iodc">
                The International Open Data Conference (IODC) is a biannual
                event to bring the global open data community together in order
                to learn, share, plan, and collaborate on the future of open
                data. The unique nature of this event is that it gathers
                together in one location a diverse range of participants from
                the northern and southern hemispheres who are seeking to define
                strategies to advance open data both globally and locally.
              </p>
            </div>
          </div>

          {/* FIN SECCION INFO */}

          {/* SECCION PROPUESTAS */}

          <div class="container bottom-140">
            <div class="row">
              <div class="col-lg-12">
                <h4 class="sub-title">
                  <FormattedMessage
                    id="home.proposals.title"
                    defaultMessage="Proposals received"
                  />
                </h4>
              </div>

              <div class="col-xs-12 col-lg-3 centerelement">
                <div class="proposals">The Big Picture</div>
              </div>
              <div class="col-xs-12 col-lg-3 centerelement">
                <div class="proposals">Action Track</div>
              </div>
              <div class="col-xs-12 col-lg-3 centerelement">
                <div class="proposals">Impact Track</div>
              </div>
              <div class="col-xs-12 col-lg-3 centerelement">
                <div class="proposals-received">
                  <span>600</span>
                  Proposals Received
                </div>
              </div>
            </div>
          </div>
          {/* FIN SECCION PROPUESTAS */}

          {/* MAPA */}

          <div class="container bottom-140">
            <div class="row">
              <div class="col-lg-12">
                <h4 class="sub-title">
                  <FormattedMessage
                    id="home.visit.title"
                    defaultMessage="Your visit to Argentina"
                  />
                </h4>
              </div>

              <div class="col-xs-12 centerelement">
                <div class="usina right">
                  <div class="map-title">#IODC18</div>

                  <hr />

                  <div>Usina del arte</div>
                  <div class="map-direction">
                    Agustín R. Caffarena 1, C1157ADA CABA
                  </div>
                </div>
                <iframe
                  title="usina-map"
                  width="100%"
                  height="520"
                  frameborder="0"
                  src="https://datosgobar.carto.com/u/modernizacion/builder/329aca58-835c-465d-bb40-f215ef950dc5/embed"
                />
              </div>
            </div>
          </div>

          {/* FIN MAPA */}

          {/* SIDEEVENTS */}
          <div class="container bottom-140">
            <div class="row padding-15">
              <div class="col-lg-12">
                <h4 class="sub-title">
                  <FormattedMessage
                    id="home.sideevents"
                    defaultMessage="Events around the Conference"
                  />
                </h4>
              </div>

              {/* EVENTO 1 */}
              <div class="col-xs-12 col-lg-6 preevent">
                <div class="col-xs-6 preevent-txt">
                  <div class="preevent-txt-map">Pre-event</div>

                  <hr />

                  <div>Centro Metropolitano de Diseño</div>
                  <div class="preevent-txt-direction">
                    Algarrobo 1041, Barracas, CABA
                  </div>
                </div>
                <div>
                  <img src={Preevent} alt="Preevent" class="preevent-img" />
                </div>
              </div>

              {/* EVENTO 2 */}
              <div class="col-xs-12 col-lg-6 preevent">
                <div class="col-xs-6 preevent-txt">
                  <div class="preevent-txt-map">Pre-event</div>

                  <hr />

                  <div>Centro Metropolitano de Diseño</div>
                  <div class="preevent-txt-direction">
                    Algarrobo 1041, Barracas, CABA
                  </div>
                </div>
                <div>
                  <img src={Preevent} alt="Preevent" class="preevent-img" />
                </div>
              </div>
            </div>
          </div>

          {/* FIN EVENTOS */}

          {/* EVENTOS ANTERIORES */}

          <div class="container bottom-140">
            <div class="row padding-15">
              <div class="col-lg-12">
                <h4 class="sub-title">
                  <FormattedMessage
                    id="home.previous"
                    defaultMessage="Previous Events"
                  />
                </h4>
              </div>
              <div>
                <div class="col-xs-12 col-lg-5">
                  <img
                    src={iodc16}
                    alt="iodc16"
                    class="img-responsive iodc16"
                  />
                </div>
                <div class="col-xs-12 col-lg-7">
                  <img src={iodc15} alt="iodc15" class="img-responsive" />
                </div>
              </div>
            </div>
          </div>

          <div class="container bottom-140">
            <div class="row padding-15">
              <div class="centerelement">
                <button class="register-button">
                  <FormattedMessage
                    id="home.main.register"
                    defaultMessage="REGISTER"
                  />
                </button>
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
