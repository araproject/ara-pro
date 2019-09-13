import React, { Component } from 'react'
import NewsletterForm from './NewsletterForm'

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>Contact</h1>
        
        
        <p>Butuh sesuatu?</p>
        <ul>
        <li>
            <strong>Email</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="mailto:aradechoco@gmail">
              aradechoco@gmail.com
            </a>{' '}
          </li>
          <li>
            <strong>GitHub</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/aradechoco">
              aradechoco
            </a>
          </li>
          <li>
            <strong>Twitter</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/aradechoco">
              aradechoco
            </a>
          </li>
          <li>
            <strong>Feed</strong>: <a href="https://aradechoco.com/rss.xml">RSS</a>
          </li>
        </ul>
      </>
    )
  }
}
