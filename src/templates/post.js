import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout'
import UserInfo from '../components/UserInfo'
import PostTags from '../components/PostTags'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import { formatDate, editOnGithub } from '../utils/global'
import Comments from '../components/Comments'
import NewsletterForm from '../components/NewsletterForm'
import Disqus from 'disqus-react'
import AdSense from 'react-adsense'

export default class PostTemplate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      comments: [],
    }
  }

  async componentDidMount() {
    const { slug } = this.props.pageContext

    try {
      const response = await fetch(`${config.commentsApi}${slug}`)
      const comments = await response.json()

      this.setState({ comments })
    } catch (error) {
      this.setState({ error: true })
    }
  }

  render() {
    const { comments, error } = this.state
    const { slug } = this.props.pageContext
    const commentSlug = slug.replace(/\\|\//g, '')
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter
    const popular = postNode.frontmatter.categories.find(category => category === 'Popular')
    let thumbnail

    if (!post.id) {
      post.id = slug
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fixed
    }

    const date = formatDate(post.date)
    const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(post.title)}&url=${
      config.siteUrl
    }/${post.slug}/&via=aradechoco`

    const commentTitle = commentLength => {
      if (commentLength < 1) {
        return 'Comments'
      } else if (commentLength === 1) {
        return '1 comment'
      } else {
        return `${commentLength} comments`
      }
    }
    const baseUrl = 'https://www.aradechoco.com'
    const disqusShortname = 'aradechoco-com';
        const disqusConfig = {
            url: baseUrl + this.props.pageContext.slug,
            identifier: post.id,
            title: post.title,
        }

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article className="single container">
          <header className={`single-header ${!thumbnail ? 'no-thumbnail' : ''}`}>
            {thumbnail && <Img fixed={post.thumbnail.childImageSharp.fixed} />}
            <div className="flex">
              <h1>{post.title}</h1>
              <div className="post-meta">
                <time className="date">{date}</time>/
                <a className="twitter-link" href={twitterShare}>
                  Share 🐦
                </a>
                /
                {!error && (
                  <span>
                    <a className="comment-link" href="#comments">
                      {commentTitle(comments.length)}
                    </a>
                    /
                  </span>
                )}
                <a
                >
                @aradechoco ✏️ 
                </a>
              </div>
              <PostTags tags={post.tags} />
            </div>
          </header>
            <div>
                <AdSense.Google
                    client="ca-pub-5908100338136939"
                    // slot="test"
                    style={{display: "block"}}
                    layout="in-article" format="auto"/>
            </div>
          <div className="post" dangerouslySetInnerHTML={{ __html: postNode.html }} />
           <div>
                <AdSense.Google
                    client="ca-pub-5908100338136939"
                    // slot="test"
                    style={{display: "block"}}
                    layout="in-article" format="auto"/>
            </div>
        </article>     
        <div className="container">
        </div>
        <UserInfo config={config} />
        <div className="container">
          {!error && <Comments commentsList={comments} slug={commentSlug} />}
          <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </Layout>
    )
  }
}
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`
