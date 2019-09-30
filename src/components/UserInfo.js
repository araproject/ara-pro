import React, { Component } from 'react'
import aradechoco from '../../content/images/aradechoco.png'
import patreon from '../../content/thumbnails/youtube.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={aradechoco} alt="aradechoco" />
            </div>
            <div>
              <h3>aradechoco</h3>
              <p>
              Personal blog berbahasa Indonesia yang saya dedikasikan untuk mendokumentasikan segala hal yang saya pelajari.
              </p>
              <div className="flex">
                <a
                  className="patreon-button"
                  href="https://feedburner.google.com/fb/a/mailverify?uri=web/vfZZ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔥 Subscribe
                </a>
                <a
                  href="https://www.aradechoco.com/blog/"
                  className="donate-button"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Back to Blog 
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
