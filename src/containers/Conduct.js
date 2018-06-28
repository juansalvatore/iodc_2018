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

class Conduct extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div class="container-fluid">
          <Header>Code of Conduct</Header>

          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <p class="internal-text mtop40">
                The International Open Data Conference attracts a diverse
                community of people from all over the world. Respect and safety
                are our main values, and we want to provide a safe and
                productive environment for all participants and presenters. The
                following code of conduct is meant to guide everyone at the IODC
                and help to ensure a respectful and safe conference experience
                for all. This code of conduct applies to the main conference as
                well as all pre-events.
              </p>
              <h3 class="internal-sub-title internal-sub-title-low">
                Diversity and Inclusivity
              </h3>
              <p class="internal-text mbottom75">
                The International Open Data Conference welcomes and encourages
                participation by everyone including but not limited to people of
                all ages, cultures, ethnicities, gender, gender-identity,
                language, race, sexual orientation, geographical location, and
                religion.
              </p>

              <h3 class="internal-sub-title internal-sub-title-low">
                Harassment-free Conference
              </h3>

              <p class="internal-text mtop40">
                The International Open Data Conference is dedicated to providing
                a harassment-free conference experience for everyone, regardless
                of gender, gender identity and expression, sexual orientation,
                disability, physical appearance, body size, race, age or
                religion.
              </p>

              <p class="internal-text mtop40">
                We do not tolerate harassment of conference participants in any
                form. Examples of harassment include offensive comments, verbal
                threats or demands, sexualized images in public spaces,
                intimidation, stalking, harassing photography or recording,
                sustained disruption of sessions or events, and unwelcome
                physical contact or sexual attention. Harassment also includes
                slights and negative messages, both unintended and intentional,
                based solely on appearance. These activities will not be
                tolerated.
              </p>

              <h3 class="internal-sub-title internal-sub-title-low">
                Reporting Issues at IODC
              </h3>

              <p class="internal-text-list-program">
                <ul>
                  <li>
                    <b>Principles & Policies</b> - Broadening political
                    commitment to open data principles and policies
                  </li>
                  <li>
                    <b>Open Standards</b> - Identifying and adopting
                    user-centric open standards
                  </li>
                  <li>
                    <b>Capacity Building</b> - Data Literacy, Skills
                    Development, IT and Data Infrastructure
                  </li>
                  <li>
                    <b>Innovation Networks</b> - Strengthening networks to
                    address shared and common challenges
                  </li>
                  <li>
                    <b>Measurement and Evaluation</b> - Ensuring action on open
                    data is more evidence-based
                  </li>
                  <li>
                    <b>Regional Dialogues </b>- Connecting global and regional
                    communities: Africa, Asia, Eastern and Western Europe, Latin
                    America and the Caribbean, Middle East and Northern Africa,
                    North America, Oceania.
                  </li>
                </ul>
              </p>

              <p class="internal-text mtop40">
                <span class="internal-bullets-text">3. Impact Track </span>
                Short, dynamic “Ignite “ sessions showcasing concrete examples
                of open data in action within core open data thematic sectors:
              </p>

              <p class="internal-text-list-program">
                <ul>
                  <li>
                    <b>Accountability and Anti-Corruption</b> (parliamentary,
                    elections, party financing)
                  </li>
                  <li>
                    <b>Agriculture</b>
                  </li>
                  <li>
                    <b>Corporate</b> (beneficial ownership, incorporation data)
                  </li>
                  <li>
                    <b>Crime and Justice</b>
                  </li>
                  <li>
                    <b>Education</b>
                  </li>
                  <li>
                    <b>Elections</b>
                  </li>
                  <li>
                    <b>Environment</b> (incl: climate, air and water quality,
                    weather)
                  </li>
                  <li>
                    <b>Extractives</b>
                  </li>
                  <li>
                    <b>Geospatial</b> (mapping and earth observation)
                  </li>
                  <li>
                    <b>Government Finances </b>(budget, expenditures, taxation)
                  </li>
                  <li>
                    <b>Health</b>
                  </li>
                  <li>
                    <b>International Aid and Humanitarian Relief</b>
                  </li>
                  <li>
                    <b>Land Ownership</b>
                  </li>
                  <li>
                    <b>National Statistics</b>
                  </li>
                  <li>
                    <b>Science/Research</b>
                  </li>
                  <li>
                    <b>Transport</b>
                  </li>
                  <li class="mbottom75">
                    <b>Urban Development</b> (open cities, resilience, urban
                    planning).
                  </li>
                </ul>
              </p>

              <p class="internal-text mbottom75">
                In addition, IODC 2018 will spotlight gender issues as they
                relate to open data - both in terms of gender equity with regard
                to participation, practices, and processes toward attaining
                gender equality as an end goal, as well as the accessibility and
                use of gender related data.
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
)(Conduct)
