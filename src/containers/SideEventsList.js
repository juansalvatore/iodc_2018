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
  }

  displaySideEvents = () => {
    return this.state.sideEvents.map(event => (
      <li>
        <p className="people-list__name">{event.event}</p>
        <p className="people-list__org">{event.location} </p>
        <p className="people-list__org">
          {this.props.lang == 'en' ? event.date : event.date_es}
        </p>
        <p className={event.invitation ? 'hide_invitation_event' : ''}>
          <FormattedMessage
            id="side.events.invitation"
            defaultMessage="Access with invitation"
          />
        </p>
        <a
          className={event.url ? 'side_event_button' : 'hide_event_button'}
          target="_blank"
          href={event.url}
        >
          <FormattedMessage
            id="side.events.button"
            defaultMessage="Go to event"
          />
        </a>
      </li>
    ))
  }
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
          <div class="container-fluid">
            <Header>
              <FormattedMessage
                id="nav.side-events"
                defaultMessage="Side events"
              />
            </Header>
            <div className="row">
              <div className="col-xs-12 col-md-10 col-md-offset-1">
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
                <ul class="people-list mbottom75">
                  {this.displaySideEvents()}
                </ul>
              </div>
            </div>
          </div>
          <Footer bottom={false} />
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
