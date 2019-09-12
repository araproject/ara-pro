import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <Link to="/me">About</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://aradechoco.com/rss.xml" target="_blank" rel="noopener noreferrer">
          RSS
        </a>
      </footer>
    )
  }
}
