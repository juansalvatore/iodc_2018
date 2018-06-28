import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import $ from 'jquery'
/*
  Bootstrap documentation for react:
  https://react-bootstrap.github.io/
*/
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import Logo from '../img/logo-iodc.svg'
import facebook from '../img/facebook.svg'
import twitter from '../img/twitter.svg'
import flickr from '../img/flickr.svg'
import youtube from '../img/youtube.svg'

import NavbarDropdown from './NavbarDropdown'

class Menu extends Component {
  state = {
    dropdown: 'closed',
  }
  componentDidMount() {
    $('.hamburguer-bt').click(function() {
      $('.hamburguer-bt').toggleClass('on')
    })
  }
  toggleDropdown() {
    switch (this.state.dropdown) {
      case 'closed':
        this.setState({ dropdown: 'opened' })
        break
      case 'opened':
        this.setState({ dropdown: 'closed' })
        break
      default:
        break
    }
  }
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
          <Navbar className="navbar-container">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/iodc_2018/">
                  <img src={Logo} alt="logo" />
                </Link>
              </Navbar.Brand>
            </Navbar.Header>
            <div
              className="hamburguer-bt"
              onClick={() => this.toggleDropdown()}
            >
              <div className="hamburguer-bt__stripe hamburguer-bt__stripe__top" />
              <div className="hamburguer-bt__stripe hamburguer-bt__stripe__middle" />
              <div className="hamburguer-bt__stripe hamburguer-bt__stripe__bottom" />
            </div>

            <Nav>
              <LinkContainer to="/iodc_2018/preregister">
                <NavItem eventKey={1} href="#">
                  <FormattedMessage
                    id="nav.register"
                    defaultMessage="Pre-Register"
                  />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/iodc_2018/venue">
                <NavItem eventKey={2} href="#">
                  <FormattedMessage id="nav.venue" defaultMessage="Venue" />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/iodc_2018/program">
                <NavItem eventKey={3} href="#">
                  <FormattedMessage
                    id="nav.proposals"
                    defaultMessage="Call for Proposals"
                  />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/iodc_2018/about">
                <NavItem eventKey={4} href="#">
                  <FormattedMessage id="nav.about" defaultMessage="About" />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/iodc_2018/committee">
                <NavItem eventKey={5} href="#">
                  <FormattedMessage
                    id="nav.committee"
                    defaultMessage="Programme Committee"
                  />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/iodc_2018/conduct">
                <NavItem eventKey={6} href="#">
                  <FormattedMessage
                    id="nav.conduct"
                    defaultMessage="Code of Conduct"
                  />
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/iodc_2018/faq">
                <NavItem eventKey={7} href="#">
                  FAQ
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/iodc_2018/#">
                <NavItem eventKey={8} href="#">
                  <img src={facebook} width="20" alt="fb" />
                </NavItem>
              </LinkContainer>

              <NavItem eventKey={9} href="#">
                <img src={twitter} width="20" alt="tw" />
              </NavItem>

              <NavItem eventKey={10} href="#">
                <img src={flickr} width="20" alt="fl" />
              </NavItem>

              <NavItem eventKey={11} href="#">
                <img src={youtube} width="20" alt="yt" />
              </NavItem>

              <NavItem
                onClick={() => this.props.setLocale('en')}
                eventKey={7}
                href="#"
              >
                EN
              </NavItem>
              <NavItem
                onClick={() => this.props.setLocale('es')}
                eventKey={7}
                href="#"
              >
                ES
              </NavItem>
            </Nav>
          </Navbar>
          <div />
          {/* DROPDOWN */}
          <NavbarDropdown opened={this.state.dropdown} />
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
)(Menu)
