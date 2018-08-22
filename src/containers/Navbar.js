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
    open: false,
    top: true,
  }
  componentDidMount() {
    $('.hamburguer-bt').click(function() {
      $('.hamburguer-bt').toggleClass('on')
    })

    window.addEventListener('scroll', this.handleScroll)
  }
  toggleDropdown() {
    switch (this.state.dropdown) {
      case 'closed':
        this.setState({ dropdown: 'opened', open: true })
        break
      case 'opened':
        this.setState({ dropdown: 'closed', open: false })
        break
      default:
        break
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    var lastScrollTop = 0
    var st = window.pageYOffset || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      // downscroll code
      this.setState({ top: false })
    } else {
      // upscroll code
      this.setState({ top: true })
    }
    lastScrollTop = st <= 0 ? 0 : st
    // console.log('top: ', this.state.top)
  }
  render() {
    const { lang } = this.props

    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
          <div className="hide_top" />
          <Navbar className="navbar-container">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">
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
              <LinkContainer to="/about">
                <NavItem eventKey={4} href="#">
                  <FormattedMessage id="nav.about" defaultMessage="About" />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/agenda">
                <NavItem eventKey={3} href="#">
                  <FormattedMessage
                    id="nav.agenda"
                    defaultMessage="Programme"
                  />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/side-events-list">
                <NavItem eventKey={3} href="#">
                  <FormattedMessage
                    id="nav.side-events"
                    defaultMessage="side events"
                  />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/register">
                <NavItem eventKey={1} href="#">
                  <FormattedMessage
                    id="nav.register"
                    defaultMessage="Register"
                  />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/info">
                <NavItem eventKey={5} href="#">
                  <FormattedMessage id="nav.info" defaultMessage="Info" />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/press">
                <NavItem eventKey={2} href="#">
                  <FormattedMessage id="nav.press" defaultMessage="Press" />
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/conduct">
                <NavItem eventKey={6} href="#">
                  <FormattedMessage
                    id="nav.conduct"
                    defaultMessage="Code of Conduct"
                  />
                </NavItem>
              </LinkContainer>
              {/* <LinkContainer to="/privacy">
                <NavItem eventKey={7} href="#">
                  <FormattedMessage
                    id="nav.privacy"
                    defaultMessage="Privacy Policy"
                  />
                </NavItem>
              </LinkContainer> */}

              <NavItem eventKey={8} href="https://">
                <a href="https://www.facebook.com/opendatacon/" target="_blank" rel="noopener noreferrer" >
                  <img src={Facebook} width="20" alt="fb" />
                </a>
              </NavItem>

              <NavItem eventKey={9} href="https://">
                <a href="https://twitter.com/opendatacon" target="_blank" rel="noopener noreferrer" >
                  <img src={Twitter} width="20" alt="tw" />
                </a>
              </NavItem>

              <NavItem eventKey={10} href="https://">
                <a
                  href="https://www.flickr.com/photos/144810968@N02/albums" rel="noopener noreferrer" 
                  target="_blank"
                >
                  <img src={Flickr} width="20" alt="fl" />
                </a>
              </NavItem>

              <NavItem eventKey={11} href="https://">
                <a
                  href="https://www.youtube.com/channel/UC8cKSDSxKSbOnKliM_MhZmQ" rel="noopener noreferrer" 
                  target="_blank"
                >
                  <img src={Youtube} width="20" alt="yt" />
                </a>
              </NavItem>

              <NavItem eventKey={12} href="https://">
                <a href="https://medium.com/@opendatacon"rel="noopener noreferrer" target="_blank">
                  <img src={Medium} width="20" alt="tw" />
                </a>
              </NavItem>

              <NavItem
                onClick={() => this.props.setLocale('en')}
                eventKey={7}
                href="#"
                id={this.props.lang === 'en' ? 'selected_language' : ''}
              >
                EN
              </NavItem>
              <NavItem
                onClick={() => this.props.setLocale('es')}
                eventKey={7}
                href="#"
                id={this.props.lang === 'es' ? 'selected_language' : ''}
              >
                ES
              </NavItem>
            </Nav>
          </Navbar>
          <div />
          {/* DROPDOWN */}
          <NavbarDropdown
            opened={
              this.state.open && this.state.top ? this.state.dropdown : 'closed'
            }
          />
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
