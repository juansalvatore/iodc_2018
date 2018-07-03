import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Header, Footer } from './'
import { SideEvent } from '../containers'
import SideEventsData from './sideEventsData'
class SideEventsList extends Component {
  state = {
    sideEvents: SideEventsData,
  }

  displaySideEvents = () => {
    return this.state.sideEvents.map(event => (
      <li className={event.invitation ? 'hide_invitation_event' : ''}>
        <p className="people-list__name">{event.event}</p>
        <p className="people-list__org">{event.location} </p>
        <p className="people-list__org">{event.date} </p>
        <a
          className={event.url ? 'side_event_button' : 'hide_event_button'}
          target="_blank"
          href={event.url}
        >
          go to event
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
            <Header>Press</Header>
            <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <ul class="people-list mbottom75">{this.displaySideEvents()}</ul>
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
