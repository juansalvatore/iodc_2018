import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Header, Footer } from './'
import SideEventsData from './sideEventsData'
class SideEventsList extends Component {
  state = {
    sideEvents: SideEventsData,
    activeId: null,
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  setActiveElement(id) {
    this.setState({ activeId: id })
    window.scrollTo(0, 0)
  }

  displaySideEvents = () => {
    return this.state.sideEvents.map((event, index) => {
      return (
        <li
          onClick={() => this.setActiveElement(index)}
          id={index === this.state.activeId ? 'expand' : ''}
        >
          <span
            className={
              index === this.state.activeId ? 'opacityCero' : 'blue_card_top'
            }
          >
            <span className="event_more_info">More information</span>
          </span>
          <p className="event_name">{event.event}</p>
          <p className="event_location">{event.location} </p>
          <p className="event_date">
            {this.props.lang == 'en' ? event.date : event.date_es}
          </p>
        </li>
      )
    })
  }
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="overflowHidden">
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
