import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import Script from 'react-load-script'

import { Header, Footer } from './'

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

  // <a id="sched-embed" href="//iodc18.sched.com/" data-sched-sidebar="no">
  // View the IODC18 schedule &amp; directory.
  // </a>
  // <script type="text/javascript" src="//iodc18.sched.com/js/embed.js"></script>

  renderScript = () => {
    return (
      <Script
        url="https://iodc18.sched.com/js/embed.js"
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
        <div>
          <div class="container-fluid">
            <Header>Agenda</Header>

            <div className="row">
              <div className="col-xs-12 col-md-10 col-md-offset-1">
                <h3 className="internal-sub-title mtop40">
                  <FormattedMessage
                    id="agenda.subtitle"
                    defaultMessage="about iodc"
                  />
                </h3>
                <p className="internal-text">
                  <FormattedMessage
                    id="agenda.description"
                    defaultMessage="about iodc"
                  />
                </p>
              </div>
            </div>
            <div class="row">
              <div id="agenda">
                <iframe
                  title="agenda"
                  height="2000px"
                  width="100%"
                  id="sched-embed"
                  src="//iodc18.sched.com/"
                  data-sched-sidebar="no"
                />
              </div>
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
