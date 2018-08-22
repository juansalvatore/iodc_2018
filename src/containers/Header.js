import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'

import { Patio } from '../img'

class Header extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <ParallaxProvider>
          <div className="row parallax_reusable_header">
            <ParallaxBanner
              className="img-placeholder about_banner_parallax mtop40"
              layers={[
                {
                  image: Patio,
                  amount: 0.5,
                  slowerScrollRate: false,
                },
              ]}
              style={{
                height: '240px',
              }}
            >
              <div className="col-lg-12">
                <div>
                  <div className="flex-row">
                    <div />
                    <div className="container">
                      <h3>{this.props.children}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxBanner>
          </div>
        </ParallaxProvider>
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
)(Header)
