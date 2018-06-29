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

class Info extends Component {
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
                <span className="bold-title">
                  Is there a fee for registration?
                </span>{' '}
                No, access to the event is free.
              </p>
              <p className="internal-text">
                <span className="bold-title">
                  {' '}
                  Does registration have a deadline?
                </span>{' '}
                You will be able to register during the following months, and
                even throughout the event at the entrance hall of the Usina del
                Arte.
              </p>
              <p className="internal-text">
                <span className="bold-title">
                  How could I confirm my registration?
                </span>{' '}
                Once you completed the registration form you will receive a
                notification, and also an automatic confirmation email.
              </p>

              <p className="internal-text">
                <span className="bold-title">
                  I am a journalist and want to cover IODC. How can I do this?
                </span>
                Contact us at contact@opendatacon.org to discuss media access to
                the event.
              </p>

              <h3 className="internal-sub-title">
                Visa and travel information
              </h3>
              <p className="internal-text">
                <span className="bold-title">
                  How do I know if I need a visa?
                </span>{' '}
                For information on nationalities that precise a visa, diplomatic
                or official passports to enter the Argentine Republic, please
                consult here. In case you do not require a visa, you still must
                present a valid passport and proof of accreditation to the
                Conference at the immigration point of entry into Argentina. You
                can find more information here.
              </p>

              <p className="internal-text">
                <span className="bold-title">
                  What should I do if I need a visa?
                </span>{' '}
                You should contact the Argentine Consular Representation in your
                country at least 45 days prior to the date of your trip. For
                contact information of Consulates and Embassies of the Argentine
                Republic, please consult here. If you do not have an Argentine
                Consular Representation in your country of residence, you will
                have the possibility of requesting your visa remotely. For this
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
                <span className="bold-title">
                  I could not ask for a visa myself. Can you help me?
                </span>{' '}
                In case you need help, you can contact us at
                contact@opendatacon.org and specify the following information:
              </p>

              <p className="internal-text-list-program">
                <ul>
                  <li>
                    <span class="bullet">●</span>
                    Name
                  </li>

                  <li>
                    <span class="bullet">●</span>
                    Surname
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    Birth Date
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    Nationality
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    Where was your passport issued? What is your passport
                    number?
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    What organization are you part of? Which is your charge?
                  </li>
                  <li>
                    <span class="bullet">●</span>
                    Argentine Consulate that should process this request:
                  </li>
                </ul>
              </p>

              <h3 className="internal-sub-title">Venue</h3>
              <p className="internal-text">
                <span className="bold-title"> Where is the venue located?</span>
                The Usina Del Arte is in the neighborhood of La Boca, southern
                part of the City of Buenos Aires.
              </p>
              <p className="internal-text">
                <span className="bold-title">
                  Is the venue accessible to people with disabilities?
                </span>
                Yes, there are accessible pathways to the first and second
                floors. There are also ramps to enter the different halls, and
                special sittings are reserved for people with disabilities.
              </p>

              <h3 className="internal-sub-title">About Buenos Aires</h3>

              <h3 className="internal-sub-title internal-sub-title-low">
                1. Trip
              </h3>
              <p className="internal-text">
                <span className="bold-title">
                  Ministro Pistarini International Airport
                </span>{' '}
                Also known as “Ezeiza International Airport”, it is located in
                the neighbourhood of Ezeiza, 35 km southwest of the Autonomous
                City of Buenos Aires.
              </p>

              <p className="internal-text">
                <span className="bold-title">
                  Metropolitan Airport Jorge Newbery
                </span>{' '}
                It is the national and regional traffic airport located in the
                City of Buenos Aires, in the neighborhood of Palermo.
              </p>

              <p className="internal-text">
                <span className="bold-title">Retiro bus terminal</span> This is
                the main bus terminal in the city of Buenos Aires, and the
                largest in Argentina. It is located 300 mts. away from the
                Railway Retiro Station. Until this station, buses arrive and
                depart from and to all areas of the country. There are also
                regular services to and from various destinations on the
                continent, mainly Montevideo, Santiago de Chile, Lima, Santa
                Cruz de la Sierra, Asunción, Foz de Iguazú, Porto Alegre and São
                Paulo.
              </p>

              <p className="internal-text">
                <span className="bold-title">Taxis</span> Taxis can be hired or
                cars can be rented in the companies that offer the service
                inside the airport and the Bus Terminal. Prices range from USD
                30 to USD 40 from the airports. The official and safe taxis
                identify with the colors black and yellow (white at the
                airport). They are charged through the use of a
                clock-tachometer, with one and only official rate.
              </p>

              <h3 className="internal-sub-title internal-sub-title-low">
                2. Accomodation
              </h3>

              <p className="internal-text">
                <span className="bold-title">Hotel 725</span> Participants must
                request their reservation by sending their full information
                mentioning "IODC 2018" addressed to reservas@725continental.com,
                with a copy to fmonteleone@725continental.com.
              </p>

              <p className="internal-text">
                <span className="bold-title">
                  Eurobuilding Hotel Boutique Buenos Aires
                </span>{' '}
                Contact buenosaires@eurobuilding.com.ve with a copy to Roberto
                Brizuela (rbrizuela@eurobuilding.com.ve), mentioning the code
                "IODC 2018" to have the rate of U$D 110.- plus VAT.
              </p>

              <p className="internal-text">
                <span className="bold-title">
                  Wyndham - Dazzler - Esplendor
                </span>{' '}
                Participants must request their reservation by sending their
                complete information mentioning "IODC 2018" addressed to
                reservas@fenhoteles.com, with a copy to jherrera@fenhoteles.com.
              </p>

              <h3 className="internal-sub-title">Invitation from Committee</h3>

              <p className="internal-text mbottom75">
                <span className="bold-title">
                  Do you need an invite from the committee?
                </span>{' '}
                If you need an invite just write to contact@opendatacon.org
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
)(Info)
