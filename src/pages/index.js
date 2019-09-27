import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import GitHubButton from 'react-github-btn'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import speaking from '../../data/speaking'
import podcasts from '../../data/podcasts'
import quotes from '../../data/quotes'
import aradechoco from '../../content/images/aradechoco.png'
import AdSense from 'react-adsense'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    const popularPostEdges = data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Blogger & Freelancer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>I'm aradechoco</h1>
              <p>
             Seorang blogger & freelancer. Situs web ini dibuat untuk tempat mendokumentasikan apa saja yang saya pelajari dari internet, Saya juga mulai belajar tentang SEO. 👦🏻 
              </p>
              <div className="social-buttons">
                <div>
                  <a
                    className="twitter-follow-button"
                    href="https://twitter.com/aradechoco"
                    data-size="large"
                    data-show-screen-name="false"
                  >
                    Follow @aradechoco
                  </a>
                </div>
              </div>
            </div>
            <div className="newsletter-section">
              <img src={aradechoco} className="newsletter-avatar" alt="aradechoco" />
              <div>
                <h3>🔥feedburner</h3>
                <p>Subscribe untuk mendapatkan update baru</p>
                <a className="button" href="https://feedburner.google.com/fb/a/mailverify?uri=web/vfZZ">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container front-page">

           <section className="section">
            <div>
                <AdSense.Google
                  client="ca-pub-5908100338136939"
                  // slot="test"
                  style={{display: "block"}}
                  layout="in-article" format="auto"/>
            </div>
          </section>

         <section className="section">
            <h2>
             Latest Articles
             <Link to="/blog" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              Most Popular
              <Link to="/categories/popular" className="view-all">
                View all
              </Link> 
             </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>

          <section className="section">
            <h2>Recomended</h2>
            <ProjectListing projects={projects} />
          </section>
          <section className="section">
            <div>
                <AdSense.Google
                    client="ca-pub-5908100338136939"
                    // slot="test"
                    style={{display: "block"}}
                    layout="in-article" format="auto"/>
          </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
