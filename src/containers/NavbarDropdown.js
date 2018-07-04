import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Link } from 'react-router-dom'

import { Facebook, Twitter, Flickr, Youtube, Medium } from '../img/'

class NavbarDropdown extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <ul id={this.props.opened} className="dropdown">
          <span
            className="language_dropdown"
            onClick={() => this.props.setLocale('en')}
          >
            EN
          </span>
          <span
            className="language_dropdown"
            onClick={() => this.props.setLocale('es')}
          >
            ES
          </span>
          <hr />
          <li>
            <Link className="navbar-dropdown-links" to="/iodc_2018/">
              Home
            </Link>
          </li>
          <hr />
          <li>
            <Link className="navbar-dropdown-links" to="/iodc_2018/register">
              <FormattedMessage id="nav.register" defaultMessage="Register" />
            </Link>
          </li>
          <hr />
          <li>
            <Link className="navbar-dropdown-links" to="/iodc_2018/press">
              <FormattedMessage id="nav.press" defaultMessage="Press" />
            </Link>
          </li>
          <hr />
          <li>
            <Link className="navbar-dropdown-links" to="/iodc_2018/agenda">
              <FormattedMessage id="nav.agenda" defaultMessage="Agenda" />
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="navbar-dropdown-links"
              to="/iodc_2018/side-events-list"
            >
              <FormattedMessage
                id="nav.side-events"
                defaultMessage="side events"
              />
            </Link>
          </li>
          <hr />

          <li>
            <Link className="navbar-dropdown-links" to="/iodc_2018/about">
              <FormattedMessage id="nav.about" defaultMessage="About" />
            </Link>
          </li>

          <hr />

          <li>
            <Link className="navbar-dropdown-links" to="/iodc_2018/info">
              <FormattedMessage id="nav.info" defaultMessage="Info" />
            </Link>
          </li>
          <hr />
          <li>
            <Link className="navbar-dropdown-links" to="/iodc_2018/conduct">
              <FormattedMessage
                id="nav.conduct"
                defaultMessage="Code of Conduct"
              />
            </Link>
          </li>
          <hr />
          <Link className="navbar-dropdown-links" to="/iodc_2018/privacy">
            <li>
              <FormattedMessage id="nav.privacy" defaultMessage="Privacy" />
            </li>
          </Link>
          <hr />

          <Link to="/iodc_2018/#">
            <img src={Facebook} width="20" alt="fb" />
          </Link>
          <a href="https://medium.com/@opendatacon" target="_blank">
            <img src={Twitter} width="20" alt="tw" />
          </a>
          <a href="https://medium.com/@opendatacon" target="_blank">
            <img src={Flickr} width="20" alt="fl" />
          </a>
          <a href="https://medium.com/@opendatacon" target="_blank">
            <img src={Youtube} width="20" alt="yt" />
          </a>
          <a href="https://medium.com/@opendatacon" target="_blank">
            <img src={Medium} width="20" alt="md" />
          </a>
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
