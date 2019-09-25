import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ThemeContext from '../context/ThemeContext'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import config from '../../data/SiteConfig'
import favicon from '../images/favicon1.png'
import '../styles/main.scss'
import AdSense from 'react-adsense'

export default class MainLayout extends Component {
  static contextType = ThemeContext

  render() {
    const { dark, notFound } = this.context
    const { children } = this.props
    let themeClass = ''
    
    if (dark && !notFound) {
      themeClass = 'dark'
    } else if (notFound) {
      themeClass = 'not-found'
    }

    return (
      <>
        <Helmet
          bodyAttributes={{
            class: `theme ${themeClass}`,
          }}
        >
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
<AdSense.Google
  client='ca-pub-5908100338136939'
  slot='2481741157'
  style={{ display: 'block' }}
  format='auto'
  responsive='true'
  layoutKey='-gw-1+2a-9x+5c'
/>
        </Helmet>
        <Navigation menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </>
    )
  }
}
