import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Link } from 'react-router-dom'

import { Facebook, Twitter, Flickr, Youtube } from '../img/'

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
            <Link to="/iodc_2018/">Home</Link>
          </li>
          <hr />
          <li>
            <Link to="/iodc_2018/register">
              <FormattedMessage
                id="nav.register"
                defaultMessage="Pre-Register"
              />
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/iodc_2018/agenda">
              <FormattedMessage id="nav.agenda" defaultMessage="Agenda" />
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
            <Link to="/iodc_2018/info">
              <FormattedMessage id="nav.info" defaultMessage="Info" />
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
            <Link to="/iodc_2018/conduct">
              <FormattedMessage
                id="nav.conduct"
                defaultMessage="Code of Conduct"
              />
            </Link>
          </li>
          <hr />
          <Link to="/iodc_2018/faq">
            <li>FAQ</li>
          </Link>
          <hr />

          <Link to="/iodc_2018/#">
            <img src={Facebook} width="20" alt="fb" />
          </Link>
          <img src={Twitter} width="20" alt="tw" />
          <img src={Flickr} width="20" alt="fl" />
          <img src={Youtube} width="20" alt="yt" />
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
