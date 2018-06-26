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

class About extends Component {
  render() {
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div class="container-fluid">
          <Header>About</Header>
          <FormattedMessage id="about.main" defaultMessage="about" />

          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <h3 class="internal-sub-title">
                About The International Open Data Conference
              </h3>
              <p class="internal-text">
                <b>The International Open Data Conference (IODC)</b> is a
                biannual event that brings the global open data community
                together in order to learn, share, plan and collaborate on the
                future of open data.
              </p>

              <p class="internal-text m75">
                The unique nature of this event is that it gathers together in
                one location a diverse range of participants from the northern
                and southern hemispheres who are seeking to define strategies to
                advance open data both locally and globally.
              </p>

              <div class="img-placeholder"> Imagen</div>

              <h3 class="internal-sub-title internal-sub-title-low">
                The IODC has 3 main objectives:
              </h3>

              <p class="internal-text">
                <span class="internal-bullets-text">1.</span>{" "}
                <b>Identify and explore</b> the new opportunities and challenges
                that are shaping the open data agenda.
              </p>
              <p class="internal-text">
                <span class="internal-bullets-text">2.</span>
                <b>Highlight innovative and practical open data solutions</b>
                capable of driving social and economic impact in areas such as
                health, education, science, etc.
              </p>
              <p class="internal-text">
                <span class="internal-bullets-text">3.</span>
                <b>
                  Consolidate an international partnership to drive the
                  development of global common resources for the international
                  open data community.
                </b>
                Under the theme “The Future is Open”, this year’s conference
                will reconvene our ever expanding community to address the key
                issues and challenges facing the open data community today, and
                seek to identify innovative solutions and opportunities for
                increased collaboration that will translate into real progress
                in the years ahead.
              </p>

              <p class="internal-text">
                <b>
                  The agenda has been co-created with people from all around the
                  world
                </b>{" "}
                through a global call for proposals. The conference recieved{" "}
                <b>600 proposals</b>, and all were examined by the IODC program
                committee, seeking for gender balance, regional diversity and
                inclusion of all voices. This resulted in a programme of
                interactive sessions, workshops, discussions and other special
                events.
              </p>

              <h3 class="internal-sub-title internal-sub-title-low">
                The conference targets the broad participation of individuals
                and organizations from:
              </h3>

              <p class="internal-text-list">
                <ul>
                  <li>Open Data Experts and Practitioners</li>
                  <li>Civil Society Multilateral Organizations</li>

                  <li>Government Policymakers and Service Providers</li>
                  <li>Private Sector</li>

                  <li>Researchers and Academics Donors and Investors</li>
                  <li class="m75">Data Journalists</li>
                </ul>
              </p>

              <p class="internal-text m75">
                Prior to the official IODC 2018 program on September 27-28st, a
                number of pre-events will be held in Buenos Aires. These events
                are complementary to the program and allow more opportunities to
                engage and learn about different topics.
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
)(About);
