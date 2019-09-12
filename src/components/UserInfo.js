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
              <p>
              I’m aradechoco, Seorang blogger amatiran. Tadinya mau jadi playboy, tapi masih kurang ganteng. Kalo blogger nggak ada syarat ganteng.
              </p>

              <div className="flex">
                <a
                  href="https://ko-fi.com/aradechoco"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee!
                </a>
                <a
                  className="patreon-button"
                  href="https://www.youtube.com/c/aradechoco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" /> Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
