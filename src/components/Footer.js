import React, { Component } from 'react'
import netlify from '../../content/images/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/github.png'
import { Link } from 'gatsby'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
        <Link to="/me">About</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://aradechoco.com/rss.xml" target="_blank" rel="noopener noreferrer">
          RSS
        </a>
        </div>
        <div>
          <a href="https://github.com/aradechoco" title="GitHub">
            <img src={github} target="_blank" rel="noopener noreferrer" className="footer-img" />
          </a>
          <a href="https://www.netlify.com/" title="Hosted by Netlify">
            <img src={netlify} target="_blank" rel="noopener noreferrer" className="footer-img" />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img src={gatsby} target="_blank" rel="noopener noreferrer" className="footer-img" />
          </a>
        </div>
      </footer>
    )
  }
}
