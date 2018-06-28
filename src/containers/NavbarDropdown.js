import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Link } from 'react-router-dom'

import facebook from '../img/facebook.svg'
import twitter from '../img/twitter.svg'
import flickr from '../img/flickr.svg'
import youtube from '../img/youtube.svg'

class NavbarDropdown extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <ul id={this.props.opened} className="dropdown">
          <span
            class="language_dropdown"
            onClick={() => this.props.setLocale('en')}
          >
            EN
          </span>
          <span
            class="language_dropdown"
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

          <Link to="/iodc_2018/#">
            <img src={facebook} width="20" alt="fb" />
          </Link>
          <img src={twitter} width="20" alt="tw" />
          <img src={flickr} width="20" alt="fl" />
          <img src={youtube} width="20" alt="yt" />
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
