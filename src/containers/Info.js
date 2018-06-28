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

class Agenda extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="container-fluid">
          <Header>Practical Information</Header>

          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <h3 className="internal-sub-title">Registration</h3>
              <p className="internal-text">
                Is there a fee for registration? No, access to the event is
                free.
              </p>
              <p className="internal-text">
                Does registration have a deadline? You will be able to register
                during the following months, and even throughout the event at
                the entrance hall of the Usina del Arte.
              </p>
              <p className="internal-text">
                How could I confirm my registration? Once you completed the
                registration form you will receive a notification, and also an
                automatic confirmation email.
              </p>

              <p className="internal-text">
                I am a journalist and want to cover IODC. How can I do this?
                Contact us at contact@opendatacon.org to discuss media access to
                the event.
              </p>

              <h3 className="internal-sub-title">
                Visa and travel information
              </h3>
              <p className="internal-text">
                How do I know if I need a visa? For information on nationalities
                that precise a visa, diplomatic or official passports to enter
                the Argentine Republic, please consult here. In case you do not
                require a visa, you still must present a valid passport and
                proof of accreditation to the Conference at the immigration
                point of entry into Argentina. You can find more information
                here.
              </p>

              <p className="internal-text">
                What should I do if I need a visa? You should contact the
                Argentine Consular Representation in your country at least 45
                days prior to the date of your trip. For contact information of
                Consulates and Embassies of the Argentine Republic, please
                consult here. If you do not have an Argentine Consular
                Representation in your country of residence, you will have the
                possibility of requesting your visa remotely. For this
                exceptional procedure, you must follow the following steps:
              </p>

              <p className="internal-text-list-program">
                <ul>
                  <li>
                    <span class="bullet">●</span>
                    a. Contact the consular representation that is most
                    convenient, with an anticipation of, at least, 45 days to
                    the date of your trip.
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    b. Send the requested documentation via email to the
                    corresponding consular representation, and make sure of
                    having an appointment with date and time for the consular
                    interview. Details for the procedure, such as the
                    documentation to be presented and the cost of the visa, will
                    be informed by the representation.
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    c. Once the visa has been approved, the consular
                    representative will contact you to coordinate a date and
                    time in which you can show up, with your valid passport, to
                    obtain your visa (this may occur during a stopover of your
                    flight to the Argentine Republic). Note: you can authorize
                    another person to appear with your passport to obtain your
                    visa.
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    d. The Argentine Republic, through Consular Representation,
                    reserves the right to deny any visa applicant the
                    possibility of carrying out the procedure remotely,
                    requiring the foreigner to carry out the procedure in
                    person.
                  </li>
                </ul>
              </p>

              <p className="internal-text">
                I could not ask for a visa myself. Can you help me? In case you
                need help, you can contact us at contact@opendatacon.org and
                specify the following information:
              </p>

              <h3 className="internal-sub-title">Venue</h3>
              <p className="internal-text">
                Where is the venue located? Is the venue accessible to people
                with disabilities? Yes, there are accessible pathways to the
                first and second floors. There are also ramps to enter the
                different halls, and special sittings are reserved for people
                with disabilities.
              </p>

              <h3 className="internal-sub-title">Hotels</h3>
              <p className="internal-text">
                Hotel 725 Participantes deben solicitar su reserva enviando su
                información completa mencionando “IODC 2018” dirigido hacia
                reservas@725continental.com con copia a
                fmonteleone@725continental.com Eurobuilding Hotel Boutique
                Buenos Aires Contactarse con buenosaires@eurobuilding.com.ve con
                copia a Roberto Brizuela rbrizuela@eurobuilding.com.ve
                mencionando el código "IODC 2018" para tener la tarifa de U$D
                110.- mas IVA. Wyndham - Dazzler - Esplendor Participantes deben
                solicitar su reserva enviando su información completa
                mencionando “IODC 2018” dirigido hacia reservas@fenhoteles.com
                con copia a jherrera@fenhoteles.com
              </p>

              <h3 className="internal-sub-title">About Buenos Aires</h3>

              <h3 className="internal-sub-title">Invitation from Committee</h3>
              <p className="internal-text mbottom75">
                Do you need an invite from the committee? If you need an invite
                just write to contact@opendatacon.org ¿Necesitás una invitación
                especial de parte del Comité del Programa? Podés solicitarla
                escribiendo a contact@opendatacon.org
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
)(Agenda)
