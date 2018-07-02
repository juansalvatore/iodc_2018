import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'

class SideEvent extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="col-xs-12 col-lg-6 preevent">
          <div className="col-xs-6 preevent-txt">
            <div className="preevent-txt-map">Pre-event</div>
            <hr />
            <div>{this.props.location}</div>
            <div className="preevent-txt-direction">{this.props.direction}</div>
          </div>
          <div>
            <img
              src={this.props.image}
              alt="Preevent"
              className="preevent-img"
            />
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
)(SideEvent)
