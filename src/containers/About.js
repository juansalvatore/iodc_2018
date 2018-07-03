import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  IntlProvider,
  FormattedMessage,
  FormattedHTMLMessage,
} from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'

import { AboutImg } from '../img'

import { Header, Footer } from './'

class About extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="container-fluid">
          <Header>About</Header>

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

              <img
                src={AboutImg}
                alt="About"
                className="img-placeholder mtop40"
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

              <p className="internal-text m75">
                <FormattedHTMLMessage
                  id="about.participation.bullet.description"
                  defaultMessage="The IODC has 3 main objectives:"
                />
              </p>

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

              <h3 className="internal-sub-title mbottom30">
                Programme Committee
              </h3>

              <ul class="people-list mbottom75">
                <li>
                  <p class="people-list__name">Lucia Abelenda</p>
                  <p class="people-list__org">Avina</p>
                </li>

                <li>
                  <p class="people-list__name">Shaida Badiee</p>
                  <p class="people-list__org">Open Data Watch</p>
                </li>

                <li>
                  <p class="people-list__name">Abhinav Bahl</p>
                  <p class="people-list__org">
                    Open Government Partnership (OGP)
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Paulina Bustos</p>
                  <p class="people-list__org">Civica Digital</p>
                </li>

                <li>
                  <p class="people-list__name">Ania Calderon</p>
                  <p class="people-list__org">Open Data Charter</p>
                </li>

                <li>
                  <p class="people-list__name">Michael Canares</p>
                  <p class="people-list__org">Open Data Lab Jakarta</p>
                </li>

                <li>
                  <p class="people-list__name">Natalia Carfi</p>
                  <p class="people-list__org">Government of Argentina</p>
                </li>

                <li>
                  <p class="people-list__name">Katie Clancy</p>
                  <p class="people-list__org">IDRC - OD4D</p>
                </li>

                <li>
                  <p class="people-list__name">Tim Davies</p>
                  <p class="people-list__org">Open Data Services</p>
                </li>

                <li>
                  <p class="people-list__name">David Eaves</p>
                  <p class="people-list__org">Harvard - Kennedy School</p>
                </li>

                <li>
                  <p class="people-list__name">Felipe Estefan</p>
                  <p class="people-list__org">Omidyar</p>
                </li>

                <li>
                  <p class="people-list__name">Silvana Fumega</p>
                  <p class="people-list__org">ILDA</p>
                </li>

                <li>
                  <p class="people-list__name">Joel Gurin</p>
                  <p class="people-list__org">
                    Center for Open Data Enterprise (CODE)
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Gabriela Hadid</p>
                  <p class="people-list__org">Omidyar</p>
                </li>

                <li>
                  <p class="people-list__name">Craig Hammer</p>
                  <p class="people-list__org">World Bank</p>
                </li>

                <li>
                  <p class="people-list__name">Jeanne Holm</p>
                  <p class="people-list__org">City of Los Angeles</p>
                </li>

                <li>
                  <p class="people-list__name">Alex Howard</p>
                  <p class="people-list__org">Sunlight Foundation</p>
                </li>

                <li>
                  <p class="people-list__name">Michael Jarvis</p>
                  <p class="people-list__org">
                    Transparency and Accountability Initiative (TAI)
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Danny Lammerhirt</p>
                  <p class="people-list__org">
                    Open Knowledge International (OKI)
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Jean-Noé Landry</p>
                  <p class="people-list__org">Open North</p>
                </li>

                <li>
                  <p class="people-list__name">Andre Laperriere</p>
                  <p class="people-list__org">
                    Global Open Data for Agriculture and Nutrition (GODAN)
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Mark Levene</p>
                  <p class="people-list__org">Government of Canada</p>
                </li>

                <li>
                  <p class="people-list__name">Yohanna Loucheur</p>
                  <p class="people-list__org">Global Affairs Canada</p>
                </li>

                <li>
                  <p class="people-list__name">Emma Martinho-Truswell</p>
                  <p class="people-list__org">Oxford Insights</p>
                </li>

                <li>
                  <p class="people-list__name">Maurice McNaughton</p>
                  <p class="people-list__org">Caribbean Open institute</p>
                </li>

                <li>
                  <p class="people-list__name">Mike Mora</p>
                  <p class="people-list__org">OAS</p>
                </li>

                <li>
                  <p class="people-list__name">Christina Morales</p>
                  <p class="people-list__org">Government of Spain</p>
                </li>

                <li>
                  <p class="people-list__name">Arturo Muente-Kunigami</p>
                  <p class="people-list__org">
                    Inter-American Development Bank
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Nnenna Nwakanma</p>
                  <p class="people-list__org">Web Foundation</p>
                </li>

                <li>
                  <p class="people-list__name">Georg Neumann</p>
                  <p class="people-list__org">Open Contracting</p>
                </li>

                <li>
                  <p class="people-list__name">Beth Novak</p>
                  <p class="people-list__org">Govlab</p>
                </li>

                <li>
                  <p class="people-list__name">Muchiri Nyaggah</p>
                  <p class="people-list__org">
                    Africa Open Data Network (AODN)
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Anders Pedersen</p>
                  <p class="people-list__org">
                    Natural Resource Governance Institute
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Chimeng Peng</p>
                  <p class="people-list__org">Government of Taiwan</p>
                </li>

                <li>
                  <p class="people-list__name">Fernando Perini</p>
                  <p class="people-list__org">IDRC - OD4D</p>
                </li>

                <li>
                  <p class="people-list__name">Stephanie Carroll Rainie</p>
                  <p class="people-list__org">University of Arizona</p>
                </li>

                <li>
                  <p class="people-list__name">Katelyn Rogers</p>
                  <p class="people-list__org">
                    Open Knowledge International (OKI)
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Mor Rubinstein</p>
                  <p class="people-list__org">Open Heroines / 360Giving</p>
                </li>

                <li>
                  <p class="people-list__name">Ana Sofia Ruiz Schmidt</p>
                  <p class="people-list__org">Open Contracting - Hivos</p>
                </li>

                <li>
                  <p class="people-list__name">Lejla Sadiku</p>
                  <p class="people-list__org">
                    United Nations Development Programme (UNDP)
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Nancy Salem</p>
                  <p class="people-list__org">
                    Access to Knowledge for Development (A2K4D
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Teresa Scassa</p>
                  <p class="people-list__org">University of Ottawa</p>
                </li>

                <li>
                  <p class="people-list__name">Fabrizio Scrollini</p>
                  <p class="people-list__org">ILDA</p>
                </li>

                <li>
                  <p class="people-list__name">Jenna Slotin</p>
                  <p class="people-list__org">United Nations Foundation</p>
                </li>

                <li>
                  <p class="people-list__name">Fiona Smith</p>
                  <p class="people-list__org">Open Data Institute (ODI)</p>
                </li>

                <li>
                  <p class="people-list__name">Salvador Luis Soriano</p>
                  <p class="people-list__org">Government of Spain</p>
                </li>

                <li>
                  <p class="people-list__name">Abdoul Malick Tapsoba</p>
                  <p class="people-list__org">Government of Burkina Faso</p>
                </li>

                <li>
                  <p class="people-list__name">Philip Thigo</p>
                  <p class="people-list__org">Government of Kenya</p>
                </li>

                <li>
                  <p class="people-list__name">Yeama Thompson</p>
                  <p class="people-list__org">
                    Open Data Government, Sierra Leone
                  </p>
                </li>

                <li>
                  <p class="people-list__name">Katherine Townsend</p>
                  <p class="people-list__org">Africa Open Data Conference</p>
                </li>

                <li>
                  <p class="people-list__name">Barbara Ubaldi</p>
                  <p class="people-list__org">OECD</p>
                </li>

                <li>
                  <p class="people-list__name">Kate Vang</p>
                  <p class="people-list__org">One</p>
                </li>

                <li>
                  <p class="people-list__name">Stefaan Verhulst</p>
                  <p class="people-list__org">GovLab</p>
                </li>

                <li>
                  <p class="people-list__name">Stephen Walker</p>
                  <p class="people-list__org">OD4D</p>
                </li>

                <li>
                  <p class="people-list__name">John Wonderlich</p>
                  <p class="people-list__org">Sunlight Foundation</p>
                </li>

                <li>
                  <p class="people-list__name">Khairil Yusof</p>
                  <p class="people-list__org">Sinar Project Malaysia</p>
                </li>
              </ul>
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
)(About)
