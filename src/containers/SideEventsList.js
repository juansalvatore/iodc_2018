import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Header, Footer } from './'
import SideEventsData from './sideEventsData'

import {
  Usina,
  SanMartin,
  lezama,
  EstacionFederal,
  Derecho,
  Cmd,
  Ccr,
} from '../img'

class SideEventsList extends Component {
  state = {
    sideEvents: SideEventsData,
    activeId: null,
    open: false,
    name: '',
    description: '',
    description_es: '',
    url: '',
    contact: '',
    img: '',
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  setActiveElement(id, name, description, url, contact, description_es, img) {
    this.setState({
      activeId: id,
      open: true,
      name,
      description,
      url,
      contact,
      description_es,
      img,
    })
  }

  displaySideEvents = () => {
    return this.state.sideEvents.map((event, index) => {
      return (
        <li
          onClick={() =>
            this.setActiveElement(
              index,
              event.event,
              event.description,
              event.url,
              event.contact,
              event.description_es,
              event.img
            )
          }
        >
          <span className="blue_card_top">
            <span className="event_more_info">
              <FormattedMessage
                id="pre_events.blue_hover"
                defaultMessage="More information"
              />
            </span>
          </span>
          <p className="event_name">{event.event}</p>
          <p className="event_location">{event.location} </p>
          <p className="event_date">
            {this.props.lang === 'en' ? event.date : event.date_es}
          </p>
        </li>
      )
    })
  }
  render() {
    const { lang } = this.props
    const image = {
      './img/usina.png': Usina,
      './img/sanmartin.png': SanMartin,
      './img/lezama.png': lezama,
      './img/estacionfederal.png': EstacionFederal,
      './img/derecho.png': Derecho,
      './img/cmd.png': Cmd,
      './img/ccr.png': Ccr,
    }
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div
          className={
            this.state.open
              ? 'overflowHidden preEventsHeight'
              : 'overflowHidden'
          }
        >
          <div
            className={
              this.state.open ? 'blueBackground' : 'blueBackground opacityCero'
            }
          >
            {this.state.img === '' ? (
              ''
            ) : (
              <img
                src={image[this.state.img]}
                alt="pre-events"
                className={this.state.open ? 'backgroundImagePreEvents' : ''}
              />
            )}
            <div className={this.state.open ? 'preEventContent' : ''}>
              <span className="pre_event_name">{this.state.name}</span>

              <span className="pre_event_description">
                {this.props.lang === 'es'
                  ? this.state.description_es
                  : this.state.description}
              </span>
              {this.state.url !== '' ? (
                <span className="pre_event_url">
                  <span className="white">
                    <FormattedMessage
                      id="pre_events.info"
                      defaultMessage="For more information: "
                    />
                  </span>
                  <a
                    href={this.state.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {this.state.url}
                  </a>
                </span>
              ) : (
                <div>
                  <br />
                </div>
              )}
              <span className="pre_event_contact">
                <span className="white">
                  <FormattedMessage
                    id="pre_events.contact"
                    defaultMessage="Contact: "
                  />
                </span>
                <a href={'mailto:' + this.state.contact}>
                  {this.state.contact}
                </a>
              </span>
              <button
                className="button-back"
                onClick={() => this.setState({ open: false })}
              >
                <FormattedMessage
                  id="pre_events.back"
                  defaultMessage="Contact: "
                />
              </button>
            </div>
          </div>

          <div class="container-fluid">
            <Header>
              <FormattedMessage
                id="nav.side-events"
                defaultMessage="Side events"
              />
            </Header>
            <div className="row">
              <div className="col-xs-12 col-md-10 col-md-offset-1 pre_events_text">
                <h3 className="internal-sub-title mtop40">
                  <FormattedMessage
                    id="nav.side-events.subtitle"
                    defaultMessage="See the list"
                  />
                </h3>
                <p className="internal-text">
                  <FormattedMessage
                    id="nav.side-events.description"
                    defaultMessage="Here you can find the list of side events that will occur
                    along side IODC."
                  />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                <ul class="event-list mbottom75">{this.displaySideEvents()}</ul>
              </div>
            </div>
          </div>
          <div className="footer_bottom_preevents">
            <Footer />
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
)(SideEventsList)
