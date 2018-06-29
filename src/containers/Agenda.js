import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import '../styles/main.min.css'
import Header from './Header'
import Footer from './Footer'
import Script from 'react-load-script'
import ReactDOM from 'react-dom'

/*
  Bootstrap documentation for react:
  https://react-bootstrap.github.io/
*/

class Agenda extends Component {
  constructor() {
    super()
    this.state = {
      iFrameHeight: '0px',
    }
  }
  componentDidMount() {
    this.renderScript()
  }

  renderScript = () => {
    return (
      <Script
        url="https://ogpargentina2017.sched.com/js/embed.js"
        // onCreate={this.handleScriptCreate.bind(this)}
        // onError={this.handleScriptError.bind(this)}
        // onLoad={this.handleScriptLoad.bind(this)}
      />
    )
  }
  iframeLoaded = () => {}
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div class="container-fluid">
          <Header>Agenda</Header>
          <div class="row">
            <div id="agenda">
              <iframe
                height="100%"
                width="100%"
                id="slideshow_frame"
                src="https://ogpargentina2017.sched.com/"
              />
            </div>
          </div>
          <Footer />
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
)(Agenda)
