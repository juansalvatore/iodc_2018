import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLocale } from '../actions/locale'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import $ from 'jquery'
import messages from './messages'
import { IntlProvider, FormattedMessage } from 'react-intl'
// Import images
import { Logo, Facebook, Twitter, Flickr, Youtube, Medium } from '../img/'

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
              <LinkContainer to="/iodc_2018/register">
                <NavItem eventKey={1} href="#">
                  <FormattedMessage
                    id="nav.register"
                    defaultMessage="Register"
                  />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/iodc_2018/press">
                <NavItem eventKey={2} href="#">
                  <FormattedMessage id="nav.press" defaultMessage="Press" />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/iodc_2018/agenda">
                <NavItem eventKey={3} href="#">
                  <FormattedMessage id="nav.agenda" defaultMessage="Agenda" />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/iodc_2018/about">
                <NavItem eventKey={4} href="#">
                  <FormattedMessage id="nav.about" defaultMessage="About" />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/iodc_2018/info">
                <NavItem eventKey={5} href="#">
                  <FormattedMessage id="nav.info" defaultMessage="Info" />
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
              <LinkContainer to="/iodc_2018/privacy">
                <NavItem eventKey={7} href="#">
                  <FormattedMessage
                    id="nav.privacy"
                    defaultMessage="Privacy Policy"
                  />
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/iodc_2018/#">
                <NavItem eventKey={8} href="#">
                  <img src={Facebook} width="20" alt="fb" />
                </NavItem>
              </LinkContainer>

              <NavItem eventKey={9} href="#">
                <img src={Twitter} width="20" alt="tw" />
              </NavItem>

              <NavItem eventKey={10} href="#">
                <img src={Flickr} width="20" alt="fl" />
              </NavItem>

              <NavItem eventKey={11} href="#">
                <img src={Youtube} width="20" alt="yt" />
              </NavItem>

              <NavItem eventKey={12} href="#">
                <img src={Medium} width="20" alt="tw" />
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
