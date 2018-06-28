import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

class NavbarDropdown extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <ul className="dropdown">
          <hr />
          <li>
            <Link to="/iodc_2018/">Home</Link>
          </li>
          <hr />
          <li>
            <Link to="/iodc_2018/preregister">
              <FormattedMessage
                id="nav.register"
                defaultMessage="Pre-Register"
              />
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/iodc_2018/venue">
              <FormattedMessage id="nav.venue" defaultMessage="Venue" />
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/iodc_2018/program">
              <FormattedMessage
                id="nav.proposals"
                defaultMessage="Call for Proposals"
              />
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/iodc_2018/about">
              <FormattedMessage id="nav.about" defaultMessage="About" />
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/iodc_2018/committee">
              <FormattedMessage
                id="nav.committee"
                defaultMessage="Programme Committee"
              />
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/iodc_2018/code">
              <FormattedMessage
                id="nav.code"
                defaultMessage="Code of Conduct"
              />
            </Link>
          </li>
          <hr />
          <Link to="/iodc_2018/faq">
            <li>FAQ</li>
          </Link>
          <hr />
        </ul>
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
)(NavbarDropdown)
