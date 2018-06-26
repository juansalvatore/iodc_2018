import React, { Component } from "react";
import { connect } from "react-redux";
import { IntlProvider, FormattedMessage } from "react-intl";
import messages from "./messages";
import { setLocale } from "../actions/locale";
import "../styles/main.min.css";
import Header from "./Header";
import Footer from "./Footer";

/*
  Bootstrap documentation for react:
  https://react-bootstrap.github.io/
*/

class Program extends Component {
  render() {
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div class="container-fluid">
          <Header>Program</Header>

          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <h4 class="internal-date text-right">September 27-28. 2018</h4>
              <p class="internal-text mtop40">
                <b>Under the Theme “The Future is Open”, IODC 2018</b> will once
                again bring together the global open data community in an
                innovative conference that will help shape our increasingly data
                driven world. The Programme for IODC 2018 has been co-created
                with the open data community to ensure a forward-focused
                programme of interactive sessions, workshops, guided
                discussions, and events.
              </p>

              <p class="internal-text mbottom75">
                The unique nature of this event is that it gathers together in
                one location a diverse range of participants from the northern
                and southern hemispheres who are{" "}
                <b>
                  seeking to define strategies to advance open data both locally
                  and globally.
                </b>
              </p>

              <h3 class="internal-sub-title internal-sub-title-low">
                A Call for Proposals targeted submissions along three conference
                tracks:
              </h3>

              <p class="internal-text mtop40">
                <span class="internal-bullets-text">1. The Big Picture </span>
                <b>Panels and debates</b> that allow for the exploration of
                emerging trends and issues, ongoing challenges, and
                cross-cutting themes facing the broader open data community.
              </p>
              <p class="internal-text mtop40">
                <span class="internal-bullets-text">2. Action Track </span>
                Sessions and workshops that allow for the exchange of
                information, interactive discussions, brainstorming sessions,
                case studies, roundtables, etc. Sessions align with areas of
                international collaboration identified in previous conferences,
                and
                <b>
                  provide an opportunity for participants to explore innovative
                  solutions, new partnerships, or potential follow-up actions to
                  IODC 2018:
                </b>
              </p>

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
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  };
}

export default connect(
  mapStateToProps,
  { setLocale }
)(Program);
