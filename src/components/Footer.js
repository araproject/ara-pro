import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <a href="https://www.aradechoco.com/me/" target="_blank" rel="noopener noreferrer">
          About
        </a>
        <a href="https://www.aradechoco.com/privacy/" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        <Link to="/contact">Contact</Link>
        <a href="https://aradechoco.com/rss.xml" target="_blank" rel="noopener noreferrer">
          RSS
        </a>
      </footer>
    )
  }
}
